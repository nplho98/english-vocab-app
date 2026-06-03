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
const $enVoice = document.getElementById("enVoice");
const $zhVoice = document.getElementById("zhVoice");
const $testVoiceBtn = document.getElementById("testVoiceBtn");
const $bulkBar = document.getElementById("bulkBar");
const $selectAll = document.getElementById("selectAll");
const $selCount = document.getElementById("selCount");
const $delSelBtn = document.getElementById("delSelBtn");

let items = loadItems();
const selectedIds = new Set();
// 語速：從本機讀回，夾在 0.5～1.5 之間，壞值回到 1（關 App 不忘記）
function loadSpeechRate() {
  const r = parseFloat(localStorage.getItem("speech_rate"));
  if (!isFinite(r)) return 1;
  return Math.min(1.5, Math.max(0.5, r));
}
let speechRate = loadSpeechRate();
let isLooping = false;
let loopTimer = null;

// ---- 資料存取（本機 localStorage，關閉 App 不消失）----
function loadItems() {
  try {
    const list = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    // 補上複習欄位（舊資料沒有 box/due 就補成「今天就要複習」）
    list.forEach((it) => {
      if (typeof it.box !== "number") it.box = 0;
      if (typeof it.due !== "number") it.due = Date.now();
    });
    return list;
  } catch {
    return [];
  }
}

// ---- 間隔重複（Leitner）：答對升一級，間隔拉長；答錯歸零 ----
const SRS_DAY = 24 * 60 * 60 * 1000;
const SRS_INTERVALS = [10 * 60 * 1000, SRS_DAY, 2 * SRS_DAY, 4 * SRS_DAY, 7 * SRS_DAY, 14 * SRS_DAY];
function nextDue(box) {
  return Date.now() + SRS_INTERVALS[Math.min(box, SRS_INTERVALS.length - 1)];
}
function dueItems() {
  const now = Date.now();
  return items.filter((it) => (it.due || 0) <= now).sort((a, b) => (a.due || 0) - (b.due || 0));
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

// ---- 線上查音標（離線表查不到時的後援；沒網路就回 null）----
async function fetchPhoneticOnline(word) {
  try {
    const url =
      "https://api.dictionaryapi.dev/api/v2/entries/en/" +
      encodeURIComponent(word.trim().toLowerCase());
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;
    for (const entry of data) {
      // 先找 phonetics 陣列裡有文字的（去掉前後的 / [ ]）
      if (Array.isArray(entry.phonetics)) {
        const hit = entry.phonetics.find((p) => p && p.text && p.text.trim());
        if (hit) return hit.text.replace(/[\/\[\]]/g, "").trim();
      }
      if (entry.phonetic) return entry.phonetic.replace(/[\/\[\]]/g, "").trim();
    }
  } catch (e) { /* 放棄 */ }
  return null;
}

// ---- 背景補齊：查無音標的單字逐一上網補回（已試過的不再重複打 API）----
let backfilling = false;
async function backfillPhonetics() {
  if (backfilling) return;
  backfilling = true;
  try {
    const targets = items.filter((it) => !it.sentence && !it.phonetic && !it.phoneticTried);
    for (const it of targets) {
      if (!items.some((x) => x.id === it.id)) continue; // 可能已被刪
      const ph = await fetchPhoneticOnline(it.text);
      if (items.some((x) => x.id === it.id)) {
        if (ph) it.phonetic = ph;
        it.phoneticTried = true; // 標記已查過，避免每次開啟重打
        saveItems();
        render();
      }
      await new Promise((r) => setTimeout(r, 300)); // 別打太快
    }
  } finally {
    backfilling = false;
  }
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
    box: 0,
    due: Date.now(),
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

  // 若是單字但離線表查不到音標，背景上網查，查到再補上
  if (!sentence && !item.phonetic && !item.phoneticTried) {
    const ph = await fetchPhoneticOnline(text);
    if (items.some((it) => it.id === item.id)) {
      if (ph) item.phonetic = ph;
      item.phoneticTried = true;
      saveItems();
      render();
    }
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

// 把可用語音填進下拉選單
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
function populateVoiceMenus() {
  fillVoiceSelect($enVoice, (v) => /^en(-|_)/i.test(v.lang) || /english/i.test(v.name), userEnVoiceURI);
  fillVoiceSelect($zhVoice, (v) => /^zh(-|_)/i.test(v.lang) || /chinese|國語|普通话|中文/i.test(v.name), userZhVoiceURI);
}

if ("speechSynthesis" in window) {
  pickBestVoice();
  pickZhVoice();
  populateVoiceMenus();
  window.speechSynthesis.onvoiceschanged = () => {
    pickBestVoice(); pickZhVoice(); populateVoiceMenus();
  };
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
    await speakAsync(it.text, getEnVoice(), "en-US");
    if (!isLooping) return;
    // 再念中文（若有填中文）
    if (it.zh) {
      await new Promise((r) => setTimeout(r, 250));
      if (!isLooping) return;
      await speakAsync(it.zh, getZhVoice(), "zh-TW");
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

let playingId = null;
function highlightRow(id) {
  clearHighlight();
  playingId = id;
  const el = document.querySelector('[data-id="' + id + '"]');
  if (el) {
    el.classList.add("playing-row");
    // 只有「單字本」頁顯示時捲動才有效；隱藏時等切回來再捲
    if (document.getElementById("tab-book").classList.contains("active")) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}
function clearHighlight() {
  playingId = null;
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
  const $tabCount = document.getElementById("tabCount");
  if ($tabCount) $tabCount.textContent = items.length;
  updateDueBadge();
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

// 語音選單事件
$enVoice.addEventListener("change", () => {
  userEnVoiceURI = $enVoice.value;
  localStorage.setItem("en_voice_uri", userEnVoiceURI);
});
$zhVoice.addEventListener("change", () => {
  userZhVoiceURI = $zhVoice.value;
  localStorage.setItem("zh_voice_uri", userZhVoiceURI);
});
$testVoiceBtn.addEventListener("click", async () => {
  window.speechSynthesis.cancel();
  await speakAsync("Hello, this is a test.", getEnVoice(), "en-US");
  await speakAsync("這是試聽。", getZhVoice(), "zh-TW");
});

// 多選刪除事件
$selectAll.addEventListener("change", toggleSelectAll);
$delSelBtn.addEventListener("click", deleteSelected);

// 循環播放開關
$loopBtn.addEventListener("click", () => {
  if (isLooping) stopLoop();
  else startLoop();
});

// ---- 分頁切換 ----
function switchTab(name) {
  document.querySelectorAll(".tab-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.tab === name)
  );
  document.querySelectorAll(".tab-page").forEach((p) =>
    p.classList.toggle("active", p.id === "tab-" + name)
  );
  if (name === "review") renderReview();
  // 切到單字本頁時，若正在循環播放，捲到正在念的那一行
  if (name === "book" && playingId) {
    const el = document.querySelector('[data-id="' + playingId + '"]');
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
document.querySelectorAll(".tab-btn").forEach((b) =>
  b.addEventListener("click", () => switchTab(b.dataset.tab))
);

// ---- 複習頁 ----
const $reviewEmpty = document.getElementById("reviewEmpty");
const $reviewCard = document.getElementById("reviewCard");
const $rcText = document.getElementById("rcText");
const $rcPhonetic = document.getElementById("rcPhonetic");
const $rcZh = document.getElementById("rcZh");
const $rcReveal = document.getElementById("rcReveal");
const $rcActions = document.getElementById("rcActions");
const $rcProgress = document.getElementById("rcProgress");
let reviewCurrentId = null;

function updateDueBadge() {
  const $tabDue = document.getElementById("tabDue");
  if ($tabDue) $tabDue.textContent = dueItems().length;
}

function renderReview() {
  const queue = dueItems();
  updateDueBadge();
  if (!queue.length) {
    reviewCurrentId = null;
    $reviewCard.classList.add("hidden");
    $reviewEmpty.classList.remove("hidden");
    return;
  }
  $reviewEmpty.classList.add("hidden");
  $reviewCard.classList.remove("hidden");
  const it = queue[0];
  reviewCurrentId = it.id;
  $rcText.textContent = it.text;
  if (it.sentence) {
    $rcPhonetic.textContent = "";
  } else {
    $rcPhonetic.textContent = it.phonetic ? "/ " + it.phonetic + " /" : "";
  }
  // 蓋住中文，等使用者先回想
  $rcZh.textContent = it.zh ? "🇹🇼 " + it.zh : "（沒有中文）";
  $rcZh.classList.add("hidden");
  $rcActions.classList.add("hidden");
  $rcReveal.classList.remove("hidden");
  $rcProgress.textContent = "還剩 " + queue.length + " 個要複習";
}

function revealAnswer() {
  $rcZh.classList.remove("hidden");
  $rcReveal.classList.add("hidden");
  $rcActions.classList.remove("hidden");
}

function gradeReview(known) {
  const it = items.find((x) => x.id === reviewCurrentId);
  if (it) {
    it.box = known ? Math.min(it.box + 1, SRS_INTERVALS.length - 1) : 0;
    it.due = nextDue(it.box);
    saveItems();
  }
  renderReview();
}

$rcReveal.addEventListener("click", revealAnswer);
document.getElementById("rcSpeak").addEventListener("click", () => {
  const it = items.find((x) => x.id === reviewCurrentId);
  if (it) speak(it.text);
});
document.getElementById("rcKnow").addEventListener("click", () => gradeReview(true));
document.getElementById("rcForgot").addEventListener("click", () => gradeReview(false));

render();

// 開啟時背景補齊舊資料中查無音標的單字（沒網路會自動略過）
backfillPhonetics();

// ---- 註冊離線快取（PWA）----
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
