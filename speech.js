// speech.js — 語音共用模組
// index.html（背單字）與 course.html（上課）共用。用瀏覽器內建 Web Speech API，零音檔、離線可用。
// 注意：這裡刻意維持全域函式風格（與 app.js 一致），搬移時不改名，呼叫端不用動。

// ---- 語速：從本機讀回，夾在 0.5～1.5 之間，壞值回到 1（關 App 不忘記）----
function loadSpeechRate() {
  const r = parseFloat(localStorage.getItem("speech_rate"));
  if (!isFinite(r)) return 1;
  return Math.min(1.5, Math.max(0.5, r));
}
let speechRate = loadSpeechRate();

// ---- 挑選最自然的英文語音 ----
let bestVoice = null;
function pickBestVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  if (!voices.length) return;
  const en = voices.filter((v) => /^en(-|_)/i.test(v.lang) || /english/i.test(v.name));
  // 依優先順序找最自然的：Natural > 雲端高品質 > 知名人聲 > 任何 en-US
  const prefer = [
    (v) => /natural/i.test(v.name),
    (v) => /google.*us english/i.test(v.name),
    (v) => /(aria|jenny|guy|emma|libby)/i.test(v.name),
    (v) => /(samantha|alex|daniel|karen|moira)/i.test(v.name),
    (v) => /en-US/i.test(v.lang),
  ];
  for (const test of prefer) {
    const found = en.find(test);
    if (found) { bestVoice = found; return; }
  }
  bestVoice = en[0] || voices[0];
}
// ---- 挑選最自然的中文語音（與英文同樣的挑選邏輯）----
let zhVoice = null;
function pickZhVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  if (!voices.length) return;
  const zh = voices.filter((v) => /^zh(-|_)/i.test(v.lang) || /chinese|國語|普通话|中文/i.test(v.name));
  // 依優先順序找最自然的：Natural > 知名人聲 > 任何中文（優先繁中台灣）
  const prefer = [
    (v) => /natural/i.test(v.name) && /zh-TW/i.test(v.lang),
    (v) => /natural/i.test(v.name),
    (v) => /(hsiaochen|hsiaoyu|yating|mei-jia|sin-ji|google 國語)/i.test(v.name),
    (v) => /zh-TW/i.test(v.lang),
    (v) => /zh-HK/i.test(v.lang),
    (v) => /^zh/i.test(v.lang),
  ];
  for (const test of prefer) {
    const found = zh.find(test);
    if (found) { zhVoice = found; return; }
  }
  zhVoice = zh[0] || null;
}

// ---- 使用者自選語音（記住在本機）----
let userEnVoiceURI = localStorage.getItem("en_voice_uri") || "";
let userZhVoiceURI = localStorage.getItem("zh_voice_uri") || "";

function allVoices() {
  return window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
}
// 實際使用的英文語音：使用者選的 > 自動挑的
function getEnVoice() {
  const v = allVoices().find((x) => x.voiceURI === userEnVoiceURI);
  return v || bestVoice;
}
function getZhVoice() {
  const v = allVoices().find((x) => x.voiceURI === userZhVoiceURI);
  return v || zhVoice;
}

// 把可用語音填進下拉選單（呼叫端自己傳要填的 <select>）
function fillVoiceSelect(sel, filterFn, currentURI) {
  if (!sel) return;
  const list = allVoices().filter(filterFn);
  sel.innerHTML = '<option value="">（自動挑選最自然）</option>';
  list.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v.voiceURI;
    opt.textContent = v.name + "（" + v.lang + "）";
    if (v.voiceURI === currentURI) opt.selected = true;
    sel.appendChild(opt);
  });
}

// ---- 語音清單就緒的回呼 ----
// onvoiceschanged 是屬性不是事件監聽，兩邊各自設會互相蓋掉，所以統一由本模組持有，
// 呼叫端用 setVoicesReadyCallback() 註冊自己要做的事（例如重填語音下拉選單）。
let voicesReadyCallback = null;
function setVoicesReadyCallback(fn) {
  voicesReadyCallback = fn;
  if (typeof fn === "function") fn(); // 註冊當下先跑一次，避免錯過已就緒的清單
}

if ("speechSynthesis" in window) {
  pickBestVoice();
  pickZhVoice();
  window.speechSynthesis.onvoiceschanged = () => {
    pickBestVoice();
    pickZhVoice();
    if (typeof voicesReadyCallback === "function") voicesReadyCallback();
  };
}

// 念出一段文字（指定語言/語音），回傳 Promise，念完才 resolve
// rate 可不傳，不傳就用全域 speechRate。課程頁在只有一個英文語音的裝置上，
// 靠微調 rate 區隔對話的兩個角色，所以需要逐句指定。
function speakAsync(text, voice, lang, rate) {
  return new Promise((resolve) => {
    if (!text || !("speechSynthesis" in window)) { resolve(); return; }
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = (voice && voice.lang) || lang;
    u.rate = typeof rate === "number" ? rate : speechRate;
    u.onend = u.onerror = () => resolve();
    window.speechSynthesis.speak(u);
  });
}

// 這台裝置到底有沒有英文語音？沒有的話課程頁會拿中文語音硬唸英文，完全不能聽。
function hasEnglishVoice() {
  return allVoices().some((v) => /^en(-|_)/i.test(v.lang) || /english/i.test(v.name));
}

// ---- 發音（手機內建英文 TTS，離線可用）----
function speak(text, el) {
  if (!("speechSynthesis" in window)) {
    alert("這台裝置不支援語音發音功能 😢");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  if (!bestVoice) pickBestVoice();
  const v = getEnVoice();
  if (v) u.voice = v;
  u.lang = (v && v.lang) || "en-US";
  u.rate = speechRate;
  u.pitch = 1;
  if (el) {
    el.classList.add("speaking");
    u.onend = u.onerror = () => el.classList.remove("speaking");
  }
  window.speechSynthesis.speak(u);
}
