// ===== 我的英文背單字本 — 主程式 =====
const STORAGE_KEY = "my_vocab_items_v1";
const FOLDERS_KEY = "my_vocab_folders_v1";

const $input = document.getElementById("input");
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
const $folderSelect = document.getElementById("folderSelect");
const $noFolderNotice = document.getElementById("noFolderNotice");
const $folderList = document.getElementById("folderList");
const $addFolderBtn = document.getElementById("addFolderBtn");
const $exportBtn = document.getElementById("exportBtn");
const $importBtn = document.getElementById("importBtn");
const $importFile = document.getElementById("importFile");
const $flashcardBtn = document.getElementById("flashcardBtn");
const $printSheet = document.getElementById("printSheet");
const $cameraBtn = document.getElementById("cameraBtn");
const $lookupBtn = document.getElementById("lookupBtn");
const $lookupInput = document.getElementById("lookupInput");
const $lookupGoBtn = document.getElementById("lookupGoBtn");
const $lookupResult = document.getElementById("lookupResult");
const $lookupResultEn = document.getElementById("lookupResultEn");
const $lookupResultPh = document.getElementById("lookupResultPh");
const $lookupResultZh = document.getElementById("lookupResultZh");
const $lookupFolderSelect = document.getElementById("lookupFolderSelect");
const $lookupNoFolderNotice = document.getElementById("lookupNoFolderNotice");
const $lookupAddBtn = document.getElementById("lookupAddBtn");
const $cameraInput = document.getElementById("cameraInput");
const $cameraCaptureBtn = document.getElementById("cameraCaptureBtn");
const $cameraPreview = document.getElementById("cameraPreview");
const $cameraStatus = document.getElementById("cameraStatus");
const $cameraResult = document.getElementById("cameraResult");
const $cameraResultEn = document.getElementById("cameraResultEn");
const $cameraResultZh = document.getElementById("cameraResultZh");
const $cameraFolderSelect = document.getElementById("cameraFolderSelect");
const $cameraNoFolderNotice = document.getElementById("cameraNoFolderNotice");
const $cameraAddBtn = document.getElementById("cameraAddBtn");

function genId() {
  return Date.now() + "-" + Math.random().toString(36).slice(2, 6);
}

// 鏡頭翻譯要用的 OCR 引擎，等真正拍照才動態載入，不拖慢 App 開啟速度
let tesseractLoadPromise = null;
function loadTesseract() {
  if (typeof Tesseract !== "undefined") return Promise.resolve();
  if (tesseractLoadPromise) return tesseractLoadPromise;
  tesseractLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    script.onload = () => resolve();
    script.onerror = () => {
      tesseractLoadPromise = null;
      reject(new Error("tesseract-load-failed"));
    };
    document.body.appendChild(script);
  });
  return tesseractLoadPromise;
}

// ---- 資料夾 ----
function loadFolders() {
  try {
    return JSON.parse(localStorage.getItem(FOLDERS_KEY)) || [];
  } catch {
    return [];
  }
}
function saveFolders() {
  localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders));
}

let folders = loadFolders();
let items = loadItems();
const selectedIds = new Set(); // 清單裡個別勾選的單字/句子，給「刪除所選」「全選」「循環播放只播勾選的」用
const checkedFolderIds = new Set(); // 資料夾打勾，決定單字本顯示哪些資料夾的內容（沒勾任何資料夾＝不顯示）
let lookupCurrent = null; // 快速查詢目前查到的結果 { text, zh, phonetic, sentence }
let cameraCurrent = null; // 鏡頭翻譯目前辨識出來的結果 { text, zh }

// 舊資料沒有資料夾欄位：不自動建資料夾，只在清單顯示，新增仍須等使用者自己建資料夾才開放
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
  if (!folders.length) {
    alert("目前還沒有任何資料夾，請先到「📚 單字本」分頁建立一個資料夾，才能新增單字或句子。");
    return;
  }
  const text = $input.value.trim();
  if (!text) return;
  const sentence = isSentence(text);
  const phonetic = sentence ? null : lookupPhonetic(text);

  // 中文：離線表 > 線上翻譯（自動帶入，之後可在單字本點中文修改）
  let zh = lookupZh(text) || "";

  const folderId = folders.some((f) => f.id === $folderSelect.value)
    ? $folderSelect.value
    : folders[0].id;
  localStorage.setItem("last_folder_id", folderId);
  checkedFolderIds.add(folderId); // 加進哪個資料夾就直接打勾，單字本馬上看得到

  const item = {
    id: genId(),
    text,
    zh,
    sentence,
    phonetic,
    folderId,
    box: 0,
    due: Date.now(),
  };
  items.unshift(item);
  saveItems();
  $input.value = "";
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

// ---- 資料夾管理：新增/重新命名/刪除 ----
function addFolder() {
  const name = prompt("新資料夾名稱：");
  if (!name || !name.trim()) return;
  const f = { id: genId(), name: name.trim() };
  folders.push(f);
  checkedFolderIds.add(f.id); // 新建的資料夾直接打勾，馬上看得到
  saveFolders();
  render();
  renderAddFolderSelect();
}
function renameFolder(id) {
  const f = folders.find((x) => x.id === id);
  if (!f) return;
  const name = prompt("修改資料夾名稱：", f.name);
  if (name === null || !name.trim()) return;
  f.name = name.trim();
  saveFolders();
  renderFolders();
  renderAddFolderSelect();
}
function deleteFolder(id) {
  const f = folders.find((x) => x.id === id);
  if (!f) return;
  const n = items.filter((it) => it.folderId === id).length;
  const msg =
    n > 0
      ? "刪除資料夾「" + f.name + "」會連同裡面 " + n + " 筆單字/句子一起刪除，確定嗎？"
      : "確定刪除資料夾「" + f.name + "」？";
  if (!confirm(msg)) return;
  items.filter((it) => it.folderId === id).forEach((it) => selectedIds.delete(it.id));
  items = items.filter((it) => it.folderId !== id);
  folders = folders.filter((x) => x.id !== id);
  checkedFolderIds.delete(id);
  saveFolders();
  saveItems();
  renderAddFolderSelect();
  render();
}

// 勾選資料夾＝決定單字本顯示哪些資料夾的內容（沒勾任何資料夾＝不顯示任何單字/句子）
function toggleFolderChecked(id, checked) {
  if (checked) checkedFolderIds.add(id);
  else checkedFolderIds.delete(id);
  render();
}

function renderFolders() {
  if (!$folderList) return;
  $folderList.innerHTML = "";
  const $folderSummaryCount = document.getElementById("folderSummaryCount");
  if ($folderSummaryCount) $folderSummaryCount.textContent = folders.length;

  folders.forEach((f) => {
    const count = items.filter((it) => it.folderId === f.id).length;
    const chip = document.createElement("div");
    chip.className = "folder-chip";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "folder-check";
    check.checked = checkedFolderIds.has(f.id);
    check.title = "勾選＝單字本顯示這個資料夾的內容（沒勾任何資料夾就不會顯示）";
    check.onchange = () => toggleFolderChecked(f.id, check.checked);
    chip.appendChild(check);

    const name = document.createElement("span");
    name.className = "folder-name";
    name.textContent = f.name + " (" + count + ")";
    name.title = "點一下＝勾選/取消這個資料夾";
    name.onclick = () => {
      check.checked = !check.checked;
      toggleFolderChecked(f.id, check.checked);
    };
    chip.appendChild(name);

    const editBtn = document.createElement("button");
    editBtn.className = "folder-edit";
    editBtn.textContent = "✏️";
    editBtn.onclick = (e) => { e.stopPropagation(); renameFolder(f.id); };
    chip.appendChild(editBtn);

    const delBtn = document.createElement("button");
    delBtn.className = "folder-del";
    delBtn.textContent = "🗑️";
    delBtn.onclick = (e) => { e.stopPropagation(); deleteFolder(f.id); };
    chip.appendChild(delBtn);

    $folderList.appendChild(chip);
  });
}

// 資料夾下拉選單共用：把目前的資料夾填進去，預選上次用過的那個
function fillFolderOptions($select) {
  const lastId = localStorage.getItem("last_folder_id");
  $select.innerHTML = "";
  folders.forEach((f) => {
    const opt = document.createElement("option");
    opt.value = f.id;
    opt.textContent = f.name;
    $select.appendChild(opt);
  });
  if (folders.some((f) => f.id === lastId)) $select.value = lastId;
}

// 「新增」分頁的資料夾選單：沒有資料夾時鎖住輸入並顯示原因
function renderAddFolderSelect() {
  const hasFolders = folders.length > 0;
  $noFolderNotice.classList.toggle("hidden", hasFolders);
  $folderSelect.classList.toggle("hidden", !hasFolders);
  $input.disabled = !hasFolders;
  $addBtn.disabled = !hasFolders;
  if (hasFolders) fillFolderOptions($folderSelect);

  renderLookupFolderUI();
  renderCameraFolderUI();
}

// 「快速查詢」分頁的資料夾選單與「加入單字本」鈕狀態
function renderLookupFolderUI() {
  const hasFolders = folders.length > 0;
  $lookupNoFolderNotice.classList.toggle("hidden", hasFolders);
  $lookupFolderSelect.classList.toggle("hidden", !hasFolders);
  $lookupAddBtn.classList.toggle("hidden", !lookupCurrent);
  $lookupAddBtn.disabled = !hasFolders || !lookupCurrent;
  if (hasFolders) fillFolderOptions($lookupFolderSelect);
}

// 「鏡頭翻譯」分頁的資料夾選單與「加入單字本」鈕狀態
function renderCameraFolderUI() {
  const hasFolders = folders.length > 0;
  $cameraNoFolderNotice.classList.toggle("hidden", hasFolders);
  $cameraFolderSelect.classList.toggle("hidden", !hasFolders);
  $cameraAddBtn.classList.toggle("hidden", !cameraCurrent);
  $cameraAddBtn.disabled = !hasFolders || !cameraCurrent;
  if (hasFolders) fillFolderOptions($cameraFolderSelect);
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

// ---- 上下移動排序（在目前畫面看到的清單範圍內移動，順序存進 items 本身）----
function moveItem(id, dir) {
  const shown = currentShownItems();
  const idx = shown.findIndex((it) => it.id === id);
  if (idx === -1) return;
  const swapIdx = dir === "up" ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= shown.length) return;
  const a = shown[idx], b = shown[swapIdx];
  const ai = items.indexOf(a), bi = items.indexOf(b);
  items[ai] = b;
  items[bi] = a;
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
  if (checkedFolderIds.size === 0) return [];
  const keyword = $search.value.trim().toLowerCase();
  return items.filter(
    (it) =>
      checkedFolderIds.has(it.folderId) &&
      (it.text.toLowerCase().includes(keyword) || (it.zh || "").toLowerCase().includes(keyword))
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
  const shown = currentShownItems();

  $list.innerHTML = "";
  shown.forEach((it, idx) => {
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

    const moveBox = document.createElement("div");
    moveBox.className = "item-move";
    const upBtn = document.createElement("button");
    upBtn.className = "move-btn";
    upBtn.textContent = "▲";
    upBtn.title = "往上移";
    upBtn.disabled = idx === 0;
    upBtn.onclick = () => moveItem(it.id, "up");
    const downBtn = document.createElement("button");
    downBtn.className = "move-btn";
    downBtn.textContent = "▼";
    downBtn.title = "往下移";
    downBtn.disabled = idx === shown.length - 1;
    downBtn.onclick = () => moveItem(it.id, "down");
    moveBox.append(upBtn, downBtn);
    li.appendChild(moveBox);

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

  $count.textContent = "共 " + shown.length + " 筆";
  const $tabCount = document.getElementById("tabCount");
  if ($tabCount) $tabCount.textContent = items.length;
  updateDueBadge();
  updateBulkBar();
  renderFolders();
  $empty.classList.toggle("hidden", shown.length > 0);
  if (checkedFolderIds.size === 0) {
    $empty.textContent = folders.length
      ? "請先在上方「📁 資料夾」勾選想查看的資料夾"
      : "還沒有任何內容，從上面新增第一筆吧！";
  } else if ($search.value.trim()) {
    $empty.textContent = "找不到符合「" + $search.value + "」的內容";
  } else {
    $empty.textContent = "這個資料夾還沒有任何單字或句子";
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

// 資料夾事件
$addFolderBtn.addEventListener("click", addFolder);
renderAddFolderSelect();
renderFolders();

// ---- 匯出：依資料夾分類打包成 JSON 備份檔 ----
function buildExportPayload() {
  return {
    app: "vocab-app-backup",
    version: 1,
    exportedAt: new Date().toISOString(),
    folders: folders.map((f) => ({
      name: f.name,
      items: items
        .filter((it) => it.folderId === f.id)
        .map((it) => ({
          text: it.text,
          zh: it.zh || "",
          sentence: !!it.sentence,
          phonetic: it.phonetic || null,
        })),
    })),
  };
}

async function exportData() {
  if (!folders.length) {
    alert("目前沒有任何資料夾，沒有內容可以匯出。");
    return;
  }
  const json = JSON.stringify(buildExportPayload(), null, 2);
  const filename = "vocab-backup-" + new Date().toISOString().slice(0, 10) + ".json";

  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [{ description: "JSON 備份檔", accept: { "application/json": [".json"] } }],
      });
      const writable = await handle.createWritable();
      await writable.write(json);
      await writable.close();
      alert("已匯出備份檔！");
      return;
    } catch (e) {
      if (e && e.name === "AbortError") return; // 使用者自己取消另存視窗
      // 不支援或失敗就往下走，改用預設下載
    }
  }
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  alert("已匯出備份檔到「下載」資料夾：" + filename);
}

// ---- 匯入：合併進現有資料夾，不覆蓋使用者自建內容 ----
function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch {
      alert("這個檔案不是有效的備份檔，匯入失敗。");
      return;
    }
    if (!data || !Array.isArray(data.folders)) {
      alert("這個檔案格式不對，匯入失敗。");
      return;
    }
    let addedFolders = 0, addedItems = 0, updatedItems = 0;
    data.folders.forEach((block) => {
      if (!block || typeof block.name !== "string" || !block.name.trim()) return;
      const name = block.name.trim();
      let target = folders.find((f) => f.name === name);
      if (!target) {
        target = { id: genId(), name };
        folders.push(target);
        addedFolders++;
      }
      checkedFolderIds.add(target.id);
      (block.items || []).forEach((im) => {
        if (!im || typeof im.text !== "string" || !im.text.trim()) return;
        const text = im.text.trim();
        const existing = items.find((it) => it.folderId === target.id && it.text === text);
        if (existing) {
          existing.zh = im.zh || existing.zh;
          existing.phonetic = im.phonetic || existing.phonetic;
          existing.sentence = !!im.sentence;
          updatedItems++;
        } else {
          items.push({
            id: genId(),
            text,
            zh: im.zh || "",
            sentence: !!im.sentence,
            phonetic: im.phonetic || null,
            folderId: target.id,
            box: 0,
            due: Date.now(),
          });
          addedItems++;
        }
      });
    });
    saveFolders();
    saveItems();
    renderAddFolderSelect();
    render();
    alert(
      "匯入完成：新增 " + addedFolders + " 個資料夾、新增 " + addedItems + " 筆、更新 " + updatedItems + " 筆。"
    );
  };
  reader.readAsText(file);
}

// ---- 單字卡：把目前勾選的單字/句子排成可列印的小卡（方案三） ----
function exportFlashcards() {
  const chosen = items.filter((it) => selectedIds.has(it.id));
  if (!chosen.length) {
    alert("請先在單字本清單裡勾選想做成單字卡的單字或句子。");
    return;
  }
  $printSheet.innerHTML = "";
  chosen.forEach((it) => {
    const card = document.createElement("div");
    card.className = "pcard";

    const en = document.createElement("div");
    en.className = "pcard-en";
    en.textContent = it.text;
    card.appendChild(en);

    if (!it.sentence) {
      const ph = document.createElement("div");
      ph.className = "pcard-ph";
      ph.textContent = it.phonetic ? "/ " + it.phonetic + " /" : "";
      card.appendChild(ph);
    }

    const zh = document.createElement("div");
    zh.className = "pcard-zh";
    zh.textContent = it.zh || "";
    card.appendChild(zh);

    $printSheet.appendChild(card);
  });
  window.print();
}

// 匯出/匯入/單字卡 事件
$exportBtn.addEventListener("click", exportData);
$importBtn.addEventListener("click", () => $importFile.click());
$importFile.addEventListener("change", () => {
  const file = $importFile.files[0];
  if (file) importData(file);
  $importFile.value = "";
});
$flashcardBtn.addEventListener("click", exportFlashcards);

// ---- 快速查詢：打字輸入，立刻看翻譯，可選擇加入單字本 ----
function renderLookupResult() {
  if (!lookupCurrent) {
    $lookupResult.classList.add("hidden");
    return;
  }
  $lookupResult.classList.remove("hidden");
  $lookupResultEn.textContent = lookupCurrent.text;
  $lookupResultPh.textContent = lookupCurrent.sentence
    ? ""
    : lookupCurrent.phonetic
    ? "/ " + lookupCurrent.phonetic + " /"
    : "（字典查無音標）";
  $lookupResultZh.textContent = lookupCurrent.zh ? "🇹🇼 " + lookupCurrent.zh : "🌐 翻譯中…";
}

async function runLookup() {
  const text = $lookupInput.value.trim();
  if (!text) return;
  const sentence = isSentence(text);
  const phonetic = sentence ? null : lookupPhonetic(text);
  const zh = lookupZh(text) || "";

  lookupCurrent = { text, zh, phonetic, sentence };
  renderLookupResult();
  renderLookupFolderUI();

  if (!zh) {
    const online = await translateOnline(text);
    if (online && lookupCurrent && lookupCurrent.text === text) {
      lookupCurrent.zh = online;
      renderLookupResult();
    }
  }
  if (!sentence && !phonetic) {
    const ph = await fetchPhoneticOnline(text);
    if (ph && lookupCurrent && lookupCurrent.text === text) {
      lookupCurrent.phonetic = ph;
      renderLookupResult();
    }
  }
}

function addLookupToBook() {
  if (!lookupCurrent || !folders.length) return;
  const folderId = folders.some((f) => f.id === $lookupFolderSelect.value)
    ? $lookupFolderSelect.value
    : folders[0].id;
  localStorage.setItem("last_folder_id", folderId);
  checkedFolderIds.add(folderId);
  items.unshift({
    id: genId(),
    text: lookupCurrent.text,
    zh: lookupCurrent.zh || "",
    sentence: lookupCurrent.sentence,
    phonetic: lookupCurrent.phonetic || null,
    folderId,
    box: 0,
    due: Date.now(),
  });
  saveItems();
  render();
  alert("已加入單字本！");
}

$lookupGoBtn.addEventListener("click", runLookup);
$lookupInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    runLookup();
  }
});
$lookupInput.addEventListener("input", () => {
  if (!$lookupInput.value.trim()) {
    lookupCurrent = null;
    renderLookupResult();
    renderLookupFolderUI();
  }
});
$lookupAddBtn.addEventListener("click", addLookupToBook);

// ---- 鏡頭翻譯：拍照→本機 OCR 辨識→翻譯，可選擇加入單字本 ----
function renderCameraResult() {
  if (!cameraCurrent) {
    $cameraResult.classList.add("hidden");
    return;
  }
  $cameraResult.classList.remove("hidden");
  $cameraResultEn.textContent = cameraCurrent.text;
  $cameraResultZh.textContent = cameraCurrent.zh ? "🇹🇼 " + cameraCurrent.zh : "🌐 翻譯中…";
}

function addCameraToBook() {
  if (!cameraCurrent || !folders.length) return;
  const sentence = isSentence(cameraCurrent.text);
  const phonetic = sentence ? null : lookupPhonetic(cameraCurrent.text);
  const folderId = folders.some((f) => f.id === $cameraFolderSelect.value)
    ? $cameraFolderSelect.value
    : folders[0].id;
  localStorage.setItem("last_folder_id", folderId);
  checkedFolderIds.add(folderId);
  items.unshift({
    id: genId(),
    text: cameraCurrent.text,
    zh: cameraCurrent.zh || "",
    sentence,
    phonetic,
    folderId,
    box: 0,
    due: Date.now(),
  });
  saveItems();
  render();
  alert("已加入單字本！");
}

$cameraCaptureBtn.addEventListener("click", () => $cameraInput.click());
$cameraInput.addEventListener("change", async () => {
  const file = $cameraInput.files[0];
  if (!file) return;

  $cameraPreview.src = URL.createObjectURL(file);
  $cameraPreview.classList.remove("hidden");
  cameraCurrent = null;
  renderCameraResult();
  renderCameraFolderUI();
  $cameraStatus.classList.remove("hidden");
  $cameraStatus.textContent = "🔍 辨識中…（第一次使用需要下載辨識引擎，請耐心等候）";

  try {
    await loadTesseract();
    const result = await Tesseract.recognize(file, "eng");
    const text = (result.data.text || "").replace(/\s+/g, " ").trim();
    if (!text) {
      $cameraStatus.textContent = "沒有辨識到文字，換一張清楚一點的照片再試試。";
      return;
    }
    $cameraStatus.classList.add("hidden");
    const zh = lookupZh(text) || "";
    cameraCurrent = { text, zh };
    renderCameraResult();
    renderCameraFolderUI();

    if (!zh) {
      const online = await translateOnline(text);
      if (online && cameraCurrent && cameraCurrent.text === text) {
        cameraCurrent.zh = online;
        renderCameraResult();
      }
    }
  } catch (e) {
    $cameraStatus.classList.remove("hidden");
    $cameraStatus.textContent =
      e && e.message === "tesseract-load-failed"
        ? "辨識引擎載入失敗，請確認網路連線後再試一次。"
        : "辨識失敗，請再試一次。";
  } finally {
    $cameraInput.value = "";
  }
});
$cameraAddBtn.addEventListener("click", addCameraToBook);

// 鏡頭翻譯／快速查詢 分頁切換事件
$cameraBtn.addEventListener("click", () => switchTab("camera"));
$lookupBtn.addEventListener("click", () => switchTab("lookup"));

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
