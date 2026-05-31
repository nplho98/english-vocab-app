// ===== 我的英文背單字本 — 主程式 =====
const STORAGE_KEY = "my_vocab_items_v1";

const $input = document.getElementById("input");
const $inputZh = document.getElementById("inputZh");
const $addBtn = document.getElementById("addBtn");
const $list = document.getElementById("list");
const $empty = document.getElementById("empty");
const $count = document.getElementById("count");
const $search = document.getElementById("search");
const $loopBtn = document.getElementById("loopBtn");
const $loopScope = document.getElementById("loopScope");
const $speed = document.getElementById("speed");
const $speedVal = document.getElementById("speedVal");
const $bulkBar = document.getElementById("bulkBar");
const $selectAll = document.getElementById("selectAll");
const $selCount = document.getElementById("selCount");
const $delSelBtn = document.getElementById("delSelBtn");

let items = loadItems();
const selectedIds = new Set();
let speechRate = parseFloat(localStorage.getItem("speech_rate")) || 1;
let isLooping = false;
let loopTimer = null;

// ---- 資料存取（本機 localStorage，關閉 App 不消失）----
function loadItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// ---- 判斷是單字還是句子 ----
function isSentence(text) {
  return text.trim().split(/\s+/).length > 1;
}

// ---- 線上翻譯（混合方案的後援；沒網路就回 null）----
async function translateOnline(text) {
  // 1) Google 非官方端點（瀏覽器可跨域）
  try {
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=" +
      encodeURIComponent(text);
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const zh = (data[0] || []).map((seg) => seg[0]).join("").trim();
      if (zh) return zh;
    }
  } catch (e) { /* 換下一個 */ }
  // 2) MyMemory 後援
  try {
    const url =
      "https://api.mymemory.translated.net/get?langpair=en|zh-TW&q=" + encodeURIComponent(text);
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const zh = (data.responseData && data.responseData.translatedText || "").trim();
      if (zh) return zh;
    }
  } catch (e) { /* 放棄 */ }
  return null;
}

// ---- 新增 ----
async function addItem() {
  const text = $input.value.trim();
  if (!text) return;
  const sentence = isSentence(text);
  const phonetic = sentence ? null : lookupPhonetic(text);

  // 中文：手動填 > 離線表 > 線上翻譯
  let zh = $inputZh.value.trim() || lookupZh(text) || "";

  const item = {
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 6),
    text,
    zh,
    sentence,
    phonetic,
  };
  items.unshift(item);
  saveItems();
  $input.value = "";
  $inputZh.value = "";
  zhAutoFilled = true;
  $input.focus();
  render();

  // 若還沒有中文（句子或冷僻字），背景上網翻譯，翻到了再補上
  if (!zh) {
    markTranslating(item.id, true);
    const online = await translateOnline(text);
    if (online && items.some((it) => it.id === item.id)) {
      item.zh = online;
      saveItems();
    }
    markTranslating(item.id, false);
    render();
  }
}

// ---- 多選刪除 ----
function updateBulkBar() {
  // 移除已不存在的選取
  for (const id of [...selectedIds]) {
    if (!items.some((it) => it.id === id)) selectedIds.delete(id);
  }
  $bulkBar.classList.toggle("hidden", items.length === 0);
  $selCount.textContent = "已選 " + selectedIds.size + " 筆";
  $delSelBtn.disabled = selectedIds.size === 0;
  const shown = currentShownItems();
  $selectAll.checked = shown.length > 0 && shown.every((it) => selectedIds.has(it.id));
}

function toggleSelectAll() {
  const shown = currentShownItems();
  const allSelected = shown.length > 0 && shown.every((it) => selectedIds.has(it.id));
  if (allSelected) shown.forEach((it) => selectedIds.delete(it.id));
  else shown.forEach((it) => selectedIds.add(it.id));
  render();
}

function deleteSelected() {
  const n = selectedIds.size;
  if (n === 0) return;
  if (!confirm("確定刪除選取的 " + n + " 筆？")) return;
  items = items.filter((it) => !selectedIds.has(it.id));
  selectedIds.clear();
  saveItems();
  render();
}

// 點中文可修改
function editZh(id) {
  const it = items.find((x) => x.id === id);
  if (!it) return;
  const v = prompt("修改中文意思：", it.zh || "");
  if (v === null) return;
  it.zh = v.trim();
  saveItems();
  render();
}

// 顯示某筆「翻譯中…」狀態
const translatingIds = new Set();
function markTranslating(id, on) {
  if (on) translatingIds.add(id);
  else translatingIds.delete(id);
}

// ---- 刪除 ----
function deleteItem(id) {
  items = items.filter((it) => it.id !== id);
  saveItems();
  render();
}

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
if ("speechSynthesis" in window) {
  pickBestVoice();
  pickZhVoice();
  window.speechSynthesis.onvoiceschanged = () => { pickBestVoice(); pickZhVoice(); };
}

// 念出一段文字（指定語言/語音），回傳 Promise，念完才 resolve
function speakAsync(text, voice, lang) {
  return new Promise((resolve) => {
    if (!text || !("speechSynthesis" in window)) { resolve(); return; }
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = (voice && voice.lang) || lang;
    u.rate = speechRate;
    u.onend = u.onerror = () => resolve();
    window.speechSynthesis.speak(u);
  });
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
  if (bestVoice) u.voice = bestVoice;
  u.lang = (bestVoice && bestVoice.lang) || "en-US";
  u.rate = speechRate;
  u.pitch = 1;
  if (el) {
    el.classList.add("speaking");
    u.onend = u.onerror = () => el.classList.remove("speaking");
  }
  window.speechSynthesis.speak(u);
}

// ---- 一鍵循環播放（依目前清單順序，念完最後一筆回到第一筆）----
// 依「播放範圍」篩選循環內容（全部 / 只單字 / 只句子）
function loopItems() {
  const scope = $loopScope.value;
  return currentShownItems().filter((it) => {
    if (scope === "word") return !it.sentence;
    if (scope === "sentence") return it.sentence;
    if (scope === "checked") return selectedIds.has(it.id);
    return true;
  });
}

function startLoop() {
  const shown = loopItems();
  if (!shown.length) {
    alert("目前這個播放範圍沒有可播放的內容 😊");
    return;
  }
  isLooping = true;
  $loopBtn.classList.add("playing");
  $loopBtn.textContent = "⏹️ 停止播放";
  let idx = 0;

  const playNext = async () => {
    if (!isLooping) return;
    const list = loopItems();
    if (!list.length) { stopLoop(); return; }
    if (idx >= list.length) idx = 0; // 循環回到開頭
    const it = list[idx];
    highlightRow(it.id);

    if (!bestVoice) pickBestVoice();
    // 先念英文
    await speakAsync(it.text, bestVoice, "en-US");
    if (!isLooping) return;
    // 再念中文（若有填中文）
    if (it.zh) {
      await new Promise((r) => setTimeout(r, 250));
      if (!isLooping) return;
      await speakAsync(it.zh, zhVoice, "zh-TW");
      if (!isLooping) return;
    }
    idx++;
    loopTimer = setTimeout(playNext, 500); // 每筆間隔
  };

  window.speechSynthesis.cancel();
  playNext();
}

function stopLoop() {
  isLooping = false;
  clearTimeout(loopTimer);
  window.speechSynthesis.cancel();
  $loopBtn.classList.remove("playing");
  $loopBtn.textContent = "🔁 循環播放";
  clearHighlight();
}

function currentShownItems() {
  const keyword = $search.value.trim().toLowerCase();
  return items.filter(
    (it) => it.text.toLowerCase().includes(keyword) || (it.zh || "").toLowerCase().includes(keyword)
  );
}

function highlightRow(id) {
  clearHighlight();
  const el = document.querySelector('[data-id="' + id + '"]');
  if (el) {
    el.classList.add("playing-row");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
function clearHighlight() {
  document.querySelectorAll(".playing-row").forEach((el) => el.classList.remove("playing-row"));
}

// ---- 渲染清單 ----
function render() {
  const keyword = $search.value.trim().toLowerCase();
  const shown = items.filter(
    (it) => it.text.toLowerCase().includes(keyword) || (it.zh || "").toLowerCase().includes(keyword)
  );

  $list.innerHTML = "";
  shown.forEach((it) => {
    const li = document.createElement("li");
    li.className = "item" + (selectedIds.has(it.id) ? " selected" : "");
    li.dataset.id = it.id;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "item-check";
    check.checked = selectedIds.has(it.id);
    check.onchange = () => {
      if (check.checked) selectedIds.add(it.id);
      else selectedIds.delete(it.id);
      li.classList.toggle("selected", check.checked);
      updateBulkBar();
    };
    li.appendChild(check);

    const main = document.createElement("div");
    main.className = "item-main";

    const txt = document.createElement("div");
    txt.className = "item-text" + (it.sentence ? " is-sentence" : "");
    txt.textContent = it.text;
    main.appendChild(txt);

    if (it.sentence) {
      const tag = document.createElement("span");
      tag.className = "item-tag";
      tag.textContent = "句子";
      main.appendChild(tag);
    } else {
      const ph = document.createElement("div");
      if (it.phonetic) {
        ph.className = "item-phonetic";
        ph.textContent = "/ " + it.phonetic + " /";
      } else {
        ph.className = "item-phonetic missing";
        ph.textContent = "（字典查無音標）";
      }
      main.appendChild(ph);
    }

    if (it.zh) {
      const zh = document.createElement("div");
      zh.className = "item-zh editable";
      zh.textContent = "🇹🇼 " + it.zh;
      zh.title = "點一下可修改中文";
      zh.onclick = () => editZh(it.id);
      main.appendChild(zh);
    } else if (translatingIds.has(it.id)) {
      const zh = document.createElement("div");
      zh.className = "item-zh";
      zh.textContent = "🌐 翻譯中…";
      main.appendChild(zh);
    }

    const speakBtn = document.createElement("button");
    speakBtn.className = "icon-btn speak-btn";
    speakBtn.textContent = "🔊";
    speakBtn.title = "發音";
    speakBtn.onclick = () => speak(it.text, li);

    const delBtn = document.createElement("button");
    delBtn.className = "icon-btn del-btn";
    delBtn.textContent = "🗑️";
    delBtn.title = "刪除";
    delBtn.onclick = () => {
      if (confirm("確定刪除「" + it.text + "」？")) deleteItem(it.id);
    };

    li.append(main, speakBtn, delBtn);
    $list.appendChild(li);
  });

  $count.textContent = "共 " + items.length + " 筆";
  updateBulkBar();
  $empty.classList.toggle("hidden", items.length > 0);
  if (items.length > 0 && shown.length === 0) {
    $empty.textContent = "找不到符合「" + $search.value + "」的內容";
    $empty.classList.remove("hidden");
  } else {
    $empty.textContent = "還沒有任何內容，從上面新增第一筆吧！";
  }
}

// ---- 事件 ----
$addBtn.addEventListener("click", addItem);
$input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    addItem();
  }
});
$search.addEventListener("input", render);

// 英文輸入後自動帶入中文（若中文格還空著、或之前是自動帶入的就更新；手動改過就不覆蓋）
let zhAutoFilled = true;
$inputZh.addEventListener("input", () => { zhAutoFilled = false; });
function autoFillZh() {
  if (!zhAutoFilled && $inputZh.value.trim() !== "") return;
  const guess = lookupZh($input.value.trim());
  $inputZh.value = guess || "";
  zhAutoFilled = true;
}
$input.addEventListener("blur", autoFillZh);
$input.addEventListener("input", () => {
  // 邊打邊試著帶入（只在使用者沒手動改過中文時）
  if (zhAutoFilled) autoFillZh();
});

// 語速滑桿：即時套用到單筆播放與循環播放
function applySpeedLabel() { $speedVal.textContent = speechRate.toFixed(1) + "×"; }
$speed.value = speechRate;
applySpeedLabel();
$speed.addEventListener("input", () => {
  speechRate = parseFloat($speed.value);
  localStorage.setItem("speech_rate", speechRate);
  applySpeedLabel();
});

// 多選刪除事件
$selectAll.addEventListener("change", toggleSelectAll);
$delSelBtn.addEventListener("click", deleteSelected);

// 循環播放開關
$loopBtn.addEventListener("click", () => {
  if (isLooping) stopLoop();
  else startLoop();
});

render();

// ---- 註冊離線快取（PWA）----
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
