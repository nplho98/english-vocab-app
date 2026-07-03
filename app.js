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
const $lockOverlay = document.getElementById("lockOverlay");
const $lockCurrentText = document.getElementById("lockCurrentText");
const $unlockBtn = document.getElementById("unlockBtn");
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
const $addToBookBtn = document.getElementById("addToBookBtn");
const $lookupResult = document.getElementById("lookupResult");
const $lookupResultEn = document.getElementById("lookupResultEn");
const $lookupResultPh = document.getElementById("lookupResultPh");
const $lookupResultZh = document.getElementById("lookupResultZh");
const $lookupSpeakBtn = document.getElementById("lookupSpeakBtn");

function genId() {
  return Date.now() + "-" + Math.random().toString(36).slice(2, 6);
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
  syncToFirestore();
  syncFoldersToInbox();
}

let folders = loadFolders();
let items = loadItems();

// 清單裡個別勾選的單字/句子，給「刪除所選」「全選」「循環播放」「單字卡」用；存進 localStorage，關閉 App 不會忘記
const SELECTED_IDS_KEY = "my_vocab_selected_ids_v1";
function loadSelectedIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(SELECTED_IDS_KEY)) || []);
  } catch {
    return new Set();
  }
}
function saveSelectedIds() {
  localStorage.setItem(SELECTED_IDS_KEY, JSON.stringify([...selectedIds]));
}
const selectedIds = loadSelectedIds();

// 資料夾打勾，決定單字本顯示哪些資料夾的內容（沒勾任何資料夾＝不顯示）；存進 localStorage，關閉 App 不會忘記
const CHECKED_FOLDERS_KEY = "my_vocab_checked_folders_v1";
function loadCheckedFolderIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(CHECKED_FOLDERS_KEY)) || []);
  } catch {
    return new Set();
  }
}
function saveCheckedFolderIds() {
  localStorage.setItem(CHECKED_FOLDERS_KEY, JSON.stringify([...checkedFolderIds]));
}
const checkedFolderIds = loadCheckedFolderIds();
let lookupCurrent = null; // 查詢頁目前查到的結果 { text, zh, phonetic, sentence }

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
  syncToFirestore();
}

function purgeOrphanItems() {
  const folderIds = new Set(folders.map(f => f.id));
  const before = items.length;
  items = items.filter(it => folderIds.has(it.folderId));
  if (items.length !== before) saveItems();
}

// ---- 判斷是單字還是句子 ----
function isSentence(text) {
  return text.trim().split(/\s+/).length > 1;
}

// ---- 整句音標：逐字查（內建字典→句子補充表→單字包），查不到的字原樣顯示 ----
const SENT_PH = (() => {
  const m = {};
  if (typeof PHONETIC_DICT !== "undefined") Object.assign(m, PHONETIC_DICT);
  if (typeof SENTENCE_PHONETICS !== "undefined") Object.assign(m, SENTENCE_PHONETICS);
  if (typeof STARTER_PACK !== "undefined")
    STARTER_PACK.forEach((l) => l.words.forEach((w) => { m[w.t.toLowerCase()] = w.ph; }));
  return m;
})();
function sentencePhonetic(text) {
  return text.toLowerCase().replace(/’/g, "'").split(/[^a-z']+/).filter(Boolean)
    .map((w) => SENT_PH[w.replace(/^'+|'+$/g, "")] || w).join(" ");
}

// 例句/回覆句顯示列：英文（點了發音）＋整句音標＋中文
function exLine(icon, en, zh) {
  const row = document.createElement("div");
  row.className = "ex-line";
  const enEl = document.createElement("div");
  enEl.className = "ex-en";
  enEl.textContent = icon + " " + en;
  enEl.title = "點一下發音";
  enEl.onclick = () => speak(en);
  row.appendChild(enEl);
  const phEl = document.createElement("div");
  phEl.className = "ex-ph";
  phEl.textContent = "/ " + sentencePhonetic(en) + " /";
  row.appendChild(phEl);
  if (zh) {
    const zhEl = document.createElement("div");
    zhEl.className = "ex-zh";
    zhEl.textContent = zh;
    row.appendChild(zhEl);
  }
  return row;
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
      }
      await new Promise((r) => setTimeout(r, 300)); // 別打太快
    }
    if (targets.length) render(); // 全部補完才重畫一次，清單不會一直跳動
  } finally {
    backfilling = false;
  }
}

// ---- 多選刪除 ----
function updateBulkBar() {
  // 移除已不存在的選取
  for (const id of [...selectedIds]) {
    if (!items.some((it) => it.id === id)) selectedIds.delete(id);
  }
  saveSelectedIds();
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
  saveCheckedFolderIds();
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
  saveCheckedFolderIds();
  saveFolders();
  saveItems();
  renderAddFolderSelect();
  render();
}

// 勾選資料夾＝決定單字本顯示哪些資料夾的內容（沒勾任何資料夾＝不顯示任何單字/句子）
function toggleFolderChecked(id, checked) {
  if (checked) checkedFolderIds.add(id);
  else checkedFolderIds.delete(id);
  saveCheckedFolderIds();
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

// 「查詢」分頁的資料夾選單與「加入單字本」鈕狀態（沒有資料夾時不能存，但查詢本身不受影響）
function renderAddFolderSelect() {
  const hasFolders = folders.length > 0;
  $noFolderNotice.classList.toggle("hidden", hasFolders);
  $folderSelect.classList.toggle("hidden", !hasFolders);
  $addToBookBtn.classList.toggle("hidden", !lookupCurrent);
  $addToBookBtn.disabled = !hasFolders || !lookupCurrent;
  if (hasFolders) fillFolderOptions($folderSelect);
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

// ---- 手動編輯音標（字典/線上都查不到時，自己補一個）----
function editPhonetic(id) {
  const it = items.find((x) => x.id === id);
  if (!it) return;
  const v = prompt("輸入音標（不用加斜線 / /）：", it.phonetic || "");
  if (v === null) return;
  it.phonetic = v.trim() || null;
  it.phoneticTried = true; // 手動填過了，背景補齊不用再打 API
  saveItems();
  render();
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
function loopItems() {
  return currentShownItems().filter((it) => selectedIds.has(it.id));
}

function startLoop() {
  const shown = loopItems();
  if (!shown.length) {
    alert("目前沒有勾選任何要播放的單字或句子 😊");
    return;
  }
  isLooping = true;
  $loopBtn.classList.add("playing");
  $loopBtn.textContent = "⏹️ 停止播放";
  $lockOverlay.classList.remove("hidden");
  let idx = 0;

  const playNext = async () => {
    if (!isLooping) return;
    const list = loopItems();
    if (!list.length) { stopLoop(); return; }
    if (idx >= list.length) idx = 0; // 循環回到開頭
    const it = list[idx];
    highlightRow(it.id);
    $lockCurrentText.textContent = it.text;

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
    // 例句＋回覆句（若有）：英文→中文
    for (const [en, zhTxt] of [[it.example, it.exampleZh], [it.reply, it.replyZh]]) {
      if (!en) continue;
      await new Promise((r) => setTimeout(r, 250));
      if (!isLooping) return;
      await speakAsync(en, getEnVoice(), "en-US");
      if (!isLooping) return;
      if (zhTxt) {
        await new Promise((r) => setTimeout(r, 250));
        if (!isLooping) return;
        await speakAsync(zhTxt, getZhVoice(), "zh-TW");
        if (!isLooping) return;
      }
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
  $lockOverlay.classList.add("hidden");
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

    const moveBox = document.createElement("div");
    moveBox.className = "item-move";

    const upBtn = document.createElement("button");
    upBtn.className = "move-btn";
    upBtn.textContent = "▲";
    upBtn.title = "往上移";
    upBtn.disabled = idx === 0;
    upBtn.onclick = () => moveItem(it.id, "up");

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

    const downBtn = document.createElement("button");
    downBtn.className = "move-btn";
    downBtn.textContent = "▼";
    downBtn.title = "往下移";
    downBtn.disabled = idx === shown.length - 1;
    downBtn.onclick = () => moveItem(it.id, "down");

    moveBox.append(upBtn, check, downBtn);
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
        ph.className = "item-phonetic editable";
        ph.textContent = "/ " + it.phonetic + " /";
      } else {
        ph.className = "item-phonetic missing editable";
        ph.textContent = "（字典查無音標，點我手動加）";
      }
      ph.title = "點一下可手動輸入/修改音標";
      ph.onclick = () => editPhonetic(it.id);
      main.appendChild(ph);
    }

    if (it.zh) {
      const zh = document.createElement("div");
      zh.className = "item-zh editable";
      zh.textContent = it.zh;
      zh.title = "點一下可修改中文";
      zh.onclick = () => editZh(it.id);
      main.appendChild(zh);
    }

    if (it.example) {
      const exBox = document.createElement("div");
      exBox.className = "item-example";
      exBox.appendChild(exLine("💬", it.example, it.exampleZh));
      if (it.reply) exBox.appendChild(exLine("↩️", it.reply, it.replyZh));
      main.appendChild(exBox);
    }

    const actions = document.createElement("div");
    actions.className = "item-actions";

    const speakBtn = document.createElement("button");
    speakBtn.className = "icon-btn speak-btn";
    speakBtn.textContent = "🔊";
    speakBtn.title = "發音";
    speakBtn.onclick = async () => {
      window.speechSynthesis.cancel(); // 連點不排隊，直接重念
      await speakAsync(it.text, getEnVoice(), "en-US");
      if (it.zh) { await new Promise(r => setTimeout(r, 500)); await speakAsync(it.zh, getZhVoice(), "zh-TW"); }
    };

    const delBtn = document.createElement("button");
    delBtn.className = "icon-btn del-btn";
    delBtn.textContent = "🗑️";
    delBtn.title = "刪除";
    delBtn.onclick = () => {
      if (confirm("確定刪除「" + it.text + "」？")) deleteItem(it.id);
    };

    actions.append(speakBtn, delBtn);
    li.append(main, actions);
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
          example: it.example || null,
          exampleZh: it.exampleZh || "",
          reply: it.reply || null,
          replyZh: it.replyZh || "",
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

  // 手機上優先跳系統分享面板，可直接選 LINE/其他 App 轉傳
  // Android 的 Web Share API 不允許分享 .json 檔（白名單沒有這個副檔名），改用 .txt 才能跳出分享選單
  const shareFilename = filename.replace(/\.json$/, ".txt");
  const shareFile = new File([json], shareFilename, { type: "text/plain" });
  if (navigator.canShare && navigator.canShare({ files: [shareFile] })) {
    try {
      await navigator.share({ files: [shareFile], title: "單字本備份" });
      return;
    } catch (e) {
      if (e && e.name === "AbortError") return; // 使用者自己取消分享
      // 不支援或失敗就往下走，改用存檔/下載
    }
  }

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

// ---- 匯入/同步共用：把備份格式（folders→items）合併進現有資料 ----
// 同名資料夾合併、同字更新翻譯/音標/例句，不動使用者的複習進度
function mergePayload(payload) {
  let addedFolders = 0, addedItems = 0, updatedItems = 0;
  (payload.folders || []).forEach((block) => {
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
        if (im.example) { existing.example = im.example; existing.exampleZh = im.exampleZh || ""; }
        if (im.reply) { existing.reply = im.reply; existing.replyZh = im.replyZh || ""; }
        updatedItems++;
      } else {
        items.push({
          id: genId(),
          text,
          zh: im.zh || "",
          sentence: !!im.sentence,
          phonetic: im.phonetic || null,
          example: im.example || null,
          exampleZh: im.exampleZh || "",
          reply: im.reply || null,
          replyZh: im.replyZh || "",
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
  saveCheckedFolderIds();
  renderAddFolderSelect();
  render();
  return "新增 " + addedFolders + " 個資料夾、新增 " + addedItems + " 筆、更新 " + updatedItems + " 筆。";
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
    alert("匯入完成：" + mergePayload(data));
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

// ---- 網路同步：從 Firestore 拉翻譯工具匯出的 JSON，合併進單字本（重複則覆蓋）----
async function syncFromCloud() {
  if (!db) { alert("雲端同步尚未就緒，請稍後再試。"); return; }
  const btn = document.getElementById("cloudSyncBtn");
  btn.textContent = "🔄 同步中…";
  btn.disabled = true;
  try {
    const snap = await db.collection("vocab-inbox").doc("sync-export").get();
    if (!snap.exists) { alert("雲端沒有找到資料，請先從翻譯工具匯出並上傳。"); return; }
    const raw = snap.data().data;
    if (!raw) { alert("雲端資料格式錯誤。"); return; }
    let payload;
    try { payload = JSON.parse(raw); } catch { alert("雲端資料解析失敗。"); return; }
    if (!payload || !Array.isArray(payload.folders)) { alert("格式不符，請重新匯出上傳。"); return; }
    // 例句/回覆句改成跟著單字走（不再拆成獨立句子），由 mergePayload 統一處理
    alert("網路同步完成：" + mergePayload(payload));
  } catch (e) {
    alert("同步失敗：" + e.message);
  } finally {
    btn.textContent = "🔄 網路同步";
    btn.disabled = false;
  }
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
document.getElementById("cloudSyncBtn").addEventListener("click", syncFromCloud);

// ---- 查詢：打字輸入，立刻看翻譯（中文可編輯），確認後才加入單字本 ----
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
  $lookupResultZh.textContent = lookupCurrent.zh ? lookupCurrent.zh : "🌐 翻譯中…";
}
$lookupSpeakBtn.addEventListener("click", () => {
  if (lookupCurrent) speak(lookupCurrent.text, $lookupSpeakBtn);
});

async function runLookup() {
  const text = $input.value.trim();
  if (!text) return;
  const sentence = isSentence(text);
  const phonetic = sentence ? null : lookupPhonetic(text);
  const zh = lookupZh(text) || "";

  lookupCurrent = { text, zh, phonetic, sentence };
  renderLookupResult();
  renderAddFolderSelect();

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

function editLookupZh() {
  if (!lookupCurrent) return;
  const v = prompt("修改中文意思：", lookupCurrent.zh || "");
  if (v === null) return;
  lookupCurrent.zh = v.trim();
  renderLookupResult();
}

function addToBook() {
  if (!lookupCurrent || !folders.length) return;
  const folderId = folders.some((f) => f.id === $folderSelect.value)
    ? $folderSelect.value
    : folders[0].id;
  localStorage.setItem("last_folder_id", folderId);
  checkedFolderIds.add(folderId);
  saveCheckedFolderIds();
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
  alert("已加入單字本！");

  $input.value = "";
  lookupCurrent = null;
  renderLookupResult();
  renderAddFolderSelect();
  render();
}

$lookupResultZh.title = "點一下可修改中文";
$lookupResultZh.addEventListener("click", editLookupZh);
$addBtn.addEventListener("click", runLookup);
$input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    runLookup();
  }
});
$input.addEventListener("input", () => {
  if (!$input.value.trim()) {
    lookupCurrent = null;
    renderLookupResult();
    renderAddFolderSelect();
  }
});
$addToBookBtn.addEventListener("click", addToBook);

// 循環播放開關
$loopBtn.addEventListener("click", () => {
  if (isLooping) stopLoop();
  else startLoop();
});
$unlockBtn.addEventListener("click", stopLoop);

// ---- 分頁切換 ----
function switchTab(name) {
  document.querySelectorAll(".tab-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.tab === name)
  );
  document.querySelectorAll(".tab-page").forEach((p) =>
    p.classList.toggle("active", p.id === "tab-" + name)
  );
  if (name === "review") { renderReview(); renderDaily(); }
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
  $rcZh.textContent = it.zh ? it.zh : "（沒有中文）";
  $rcZh.classList.add("hidden");
  const $rcExample = document.getElementById("rcExample");
  $rcExample.innerHTML = "";
  if (it.example) $rcExample.appendChild(exLine("💬", it.example, it.exampleZh));
  if (it.reply) $rcExample.appendChild(exLine("↩️", it.reply, it.replyZh));
  $rcExample.classList.add("hidden");
  $rcActions.classList.add("hidden");
  $rcReveal.classList.remove("hidden");
  $rcProgress.textContent = "還剩 " + queue.length + " 個要複習";
}

function revealAnswer() {
  $rcZh.classList.remove("hidden");
  document.getElementById("rcExample").classList.remove("hidden");
  $rcReveal.classList.add("hidden");
  $rcActions.classList.remove("hidden");
}

// 答對升級、答錯歸零（複習頁與聽力測驗共用）
function applyGrade(it, known) {
  it.box = known ? Math.min(it.box + 1, SRS_INTERVALS.length - 1) : 0;
  it.due = nextDue(it.box);
  saveItems();
}

function gradeReview(known) {
  const it = items.find((x) => x.id === reviewCurrentId);
  if (it) applyGrade(it, known);
  renderReview();
}

$rcReveal.addEventListener("click", revealAnswer);
document.getElementById("rcSpeak").addEventListener("click", () => {
  const it = items.find((x) => x.id === reviewCurrentId);
  if (it) speak(it.text);
});
document.getElementById("rcKnow").addEventListener("click", () => gradeReview(true));
document.getElementById("rcForgot").addEventListener("click", () => gradeReview(false));

// ---- 每日新字：從內建國小單字包按順序丟新字，學完自動進複習排程 ----
const DAILY_GOAL_KEY = "daily_goal";
const DAILY_STATE_KEY = "daily_state_v1"; // { date: "2026-07-03", done: 0 }
const $learnBtn = document.getElementById("learnBtn");
const $learnCard = document.getElementById("learnCard");
let learnCurrent = null;

function dailyGoal() {
  const n = parseInt(localStorage.getItem(DAILY_GOAL_KEY));
  return n >= 1 && n <= 50 ? n : 5;
}
function todayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function dailyState() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(DAILY_STATE_KEY)); } catch {}
  if (!s || s.date !== todayStr()) s = { date: todayStr(), done: 0 };
  return s;
}
function bumpDailyDone() {
  const s = dailyState();
  s.done++;
  localStorage.setItem(DAILY_STATE_KEY, JSON.stringify(s));
}
// 下一個還沒學過的字（單字本裡已有的跳過，換裝置匯入備份也不會重複）
function nextPackWord() {
  if (typeof STARTER_PACK === "undefined") return null;
  const learned = new Set(items.map((it) => it.text.toLowerCase()));
  for (const lv of STARTER_PACK) {
    for (const w of lv.words) {
      if (!learned.has(w.t.toLowerCase())) return { ...w, level: lv.level };
    }
  }
  return null;
}
// 新字收進對應等級的資料夾（沒有就自動建）
function packFolderId(level) {
  const name = "國小L" + level;
  let f = folders.find((x) => x.name === name);
  if (!f) {
    f = { id: genId(), name };
    folders.push(f);
    saveFolders();
  }
  checkedFolderIds.add(f.id);
  saveCheckedFolderIds();
  return f.id;
}

function renderDaily() {
  const s = dailyState();
  const goal = dailyGoal();
  document.getElementById("dailyProgress").textContent = s.done + " / " + goal;
  document.getElementById("dailyGoalInput").value = goal;
  const next = nextPackWord();
  $learnBtn.disabled = !next;
  if (!next) $learnBtn.textContent = "🏆 單字包 300 字全部學完！";
  else if (s.done >= goal) $learnBtn.textContent = "🎉 今日達成，再多學一個";
  else $learnBtn.textContent = "🎧 學新字";
}

// 把目前這張新字卡完整念一遍：單字→中文→例句→例句中文→回覆句→回覆句中文
async function speakLearnCurrent() {
  if (!learnCurrent) return;
  const w = learnCurrent;
  window.speechSynthesis.cancel();
  await speakAsync(w.t, getEnVoice(), "en-US");
  await speakAsync(w.zh, getZhVoice(), "zh-TW");
  for (const [en, zh] of [[w.ex, w.exZh], [w.re, w.reZh]]) {
    if (learnCurrent !== w) return; // 已切到下一個字就停
    await new Promise((r) => setTimeout(r, 250));
    await speakAsync(en, getEnVoice(), "en-US");
    if (learnCurrent !== w) return;
    await new Promise((r) => setTimeout(r, 250));
    await speakAsync(zh, getZhVoice(), "zh-TW");
  }
}

function showLearnCard() {
  learnCurrent = nextPackWord();
  renderDaily();
  if (!learnCurrent) { $learnCard.classList.add("hidden"); return; }
  const w = learnCurrent;
  document.getElementById("lcLevel").textContent = "國小 Level " + w.level;
  document.getElementById("lcText").textContent = w.t;
  document.getElementById("lcPhonetic").textContent = "/ " + w.ph + " /";
  document.getElementById("lcZh").textContent = w.zh;
  const $lcEx = document.getElementById("lcExample");
  $lcEx.innerHTML = "";
  $lcEx.appendChild(exLine("💬", w.ex, w.exZh));
  $lcEx.appendChild(exLine("↩️", w.re, w.reZh));
  $learnCard.classList.remove("hidden");
  speakLearnCurrent();
}

function saveLearnCurrent() {
  const w = learnCurrent;
  if (!w) return;
  items.unshift({
    id: genId(),
    text: w.t,
    zh: w.zh,
    phonetic: w.ph,
    sentence: false,
    example: w.ex,
    exampleZh: w.exZh,
    reply: w.re,
    replyZh: w.reZh,
    folderId: packFolderId(w.level),
    box: 0,
    due: Date.now(),
  });
  saveItems();
  bumpDailyDone();
  render();
}

$learnBtn.addEventListener("click", showLearnCard);
document.getElementById("lcSpeak").addEventListener("click", speakLearnCurrent);
document.getElementById("lcNext").addEventListener("click", () => {
  saveLearnCurrent();
  showLearnCard();
});
document.getElementById("lcStop").addEventListener("click", () => {
  saveLearnCurrent();
  learnCurrent = null;
  window.speechSynthesis.cancel();
  $learnCard.classList.add("hidden");
  renderDaily();
  renderReview();
});
document.getElementById("dailyGoalInput").addEventListener("change", (e) => {
  const n = parseInt(e.target.value);
  if (n >= 1 && n <= 50) localStorage.setItem(DAILY_GOAL_KEY, n);
  renderDaily();
});

// ---- 聽力測驗：念英文選中文，答完把例句對話念一遍補強 ----
let quizCurrent = null;
let quizScore = { right: 0, total: 0 };

function quizPool() {
  const due = dueItems().filter((it) => it.zh);
  return due.length ? due : items.filter((it) => it.zh);
}
function allZhChoices() {
  const set = new Set(items.map((it) => it.zh).filter(Boolean));
  if (typeof STARTER_PACK !== "undefined")
    STARTER_PACK.forEach((l) => l.words.forEach((w) => set.add(w.zh)));
  return [...set];
}
function startQuiz() {
  if (!quizPool().length) {
    alert("單字本還沒有可以測驗的內容，先按「🎧 學新字」學幾個吧！");
    return;
  }
  quizScore = { right: 0, total: 0 };
  $reviewCard.classList.add("hidden");
  $reviewEmpty.classList.add("hidden");
  $learnCard.classList.add("hidden");
  document.getElementById("quizCard").classList.remove("hidden");
  nextQuizQuestion();
}
function nextQuizQuestion() {
  const pool = quizPool();
  if (!pool.length) { stopQuiz(); return; }
  let it = pool[Math.floor(Math.random() * pool.length)];
  while (quizCurrent && pool.length > 1 && it.id === quizCurrent.id) {
    it = pool[Math.floor(Math.random() * pool.length)];
  }
  quizCurrent = it;
  // 選項：正解＋3 個從單字本/單字包抽的干擾
  const others = allZhChoices().filter((z) => z !== it.zh);
  const opts = [it.zh];
  while (opts.length < 4 && others.length) {
    opts.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
  }
  opts.sort(() => Math.random() - 0.5);
  const $opts = document.getElementById("quizOptions");
  $opts.innerHTML = "";
  opts.forEach((zh) => {
    const b = document.createElement("button");
    b.className = "quiz-opt";
    b.textContent = zh;
    b.onclick = () => answerQuiz(b, zh);
    $opts.appendChild(b);
  });
  const $fb = document.getElementById("quizFeedback");
  $fb.textContent = "";
  $fb.className = "quiz-feedback";
  document.getElementById("quizNext").classList.add("hidden");
  updateQuizScore();
  window.speechSynthesis.cancel();
  speakAsync(it.text, getEnVoice(), "en-US");
}
async function answerQuiz(btn, zh) {
  if (!quizCurrent) return;
  const it = quizCurrent;
  const right = zh === it.zh;
  quizScore.total++;
  if (right) quizScore.right++;
  document.querySelectorAll(".quiz-opt").forEach((b) => {
    b.disabled = true;
    if (b.textContent === it.zh) b.classList.add("correct");
  });
  if (!right) btn.classList.add("wrong");
  const $fb = document.getElementById("quizFeedback");
  $fb.textContent = right ? "✅ 答對了！" : "❌ 正確答案：" + it.zh;
  $fb.className = "quiz-feedback " + (right ? "ok" : "err");
  applyGrade(it, right); // 接回間隔重複：答對拉長、答錯歸零
  updateDueBadge();
  updateQuizScore();
  document.getElementById("quizNext").classList.remove("hidden");
  // 補強：例句對話念一遍
  if (it.example) {
    await speakAsync(it.example, getEnVoice(), "en-US");
    if (quizCurrent !== it) return;
    if (it.exampleZh) await speakAsync(it.exampleZh, getZhVoice(), "zh-TW");
    if (quizCurrent !== it || !it.reply) return;
    await speakAsync(it.reply, getEnVoice(), "en-US");
    if (quizCurrent !== it) return;
    if (it.replyZh) await speakAsync(it.replyZh, getZhVoice(), "zh-TW");
  }
}
function updateQuizScore() {
  document.getElementById("quizScore").textContent =
    quizScore.total ? "答對 " + quizScore.right + " / " + quizScore.total : "";
}
function stopQuiz() {
  quizCurrent = null;
  window.speechSynthesis.cancel();
  document.getElementById("quizCard").classList.add("hidden");
  renderReview();
}

document.getElementById("quizBtn").addEventListener("click", startQuiz);
document.getElementById("quizSpeak").addEventListener("click", () => {
  if (!quizCurrent) return;
  window.speechSynthesis.cancel();
  speakAsync(quizCurrent.text, getEnVoice(), "en-US");
});
document.getElementById("quizNext").addEventListener("click", nextQuizQuestion);
document.getElementById("quizStop").addEventListener("click", stopQuiz);

render();
renderDaily();

// 開啟時背景補齊舊資料中查無音標的單字（沒網路會自動略過）
backfillPhonetics();

// ---- 註冊離線快取（PWA）----
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

// ---- Firebase 雲端同步 ----
let db = null;
let uid = null;

function syncToFirestore() {
  if (!db || !uid) return;
  db.collection("users").doc(uid).collection("data").doc("main")
    .set({ items, folders });
}

function syncFoldersToInbox() {
  if (!db) return;
  db.collection("vocab-inbox").doc("folders")
    .set({ names: folders.map(f => f.name) });
}

function initFirebase() {
  if (typeof firebase === "undefined") return;
  firebase.initializeApp({
    apiKey: "AIzaSyDq6JsRO2_FwoEsGtaiGvUcY2log58H_Js",
    authDomain: "english-e754f.firebaseapp.com",
    projectId: "english-e754f",
    storageBucket: "english-e754f.firebasestorage.app",
    messagingSenderId: "958567119066",
    appId: "1:958567119066:web:d1bd3be1cd7b7fa03d4de3",
  });
  db = firebase.firestore();
  db.enablePersistence({ synchronizeTabs: true }).catch(() => {});

  firebase.auth().signInAnonymously().then((cred) => {
    uid = cred.user.uid;
    syncFoldersToInbox();
    const ref = db.collection("users").doc(uid).collection("data").doc("main");
    ref.onSnapshot((snap) => {
      if (snap.metadata.hasPendingWrites) return;
      if (!snap.exists) {
        if (items.length > 0 || folders.length > 0) syncToFirestore();
        return;
      }
      const data = snap.data();
      items = (data.items || []).map((it) => {
        if (typeof it.box !== "number") it.box = 0;
        if (typeof it.due !== "number") it.due = Date.now();
        return it;
      });
      folders = data.folders || [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      localStorage.setItem(FOLDERS_KEY, JSON.stringify(folders));
      purgeOrphanItems();
      render();
      renderFolders();
      renderAddFolderSelect();
      updateDueBadge();
      syncFoldersToInbox();
    });

    // ---- 翻譯工具收件 ----
    const inboxStartTs = Date.now();
    db.collection("vocab-inbox").doc("latest").onSnapshot((snap) => {
      if (!snap.exists) return;
      const data = snap.data();
      const ts = parseInt(data.ts) || 0;
      if (ts < inboxStartTs) return;
      let entry;
      try { entry = JSON.parse(data.entry); } catch { return; }

      const folderName = data.folder || "翻譯工具";
      let folder = folders.find(f => f.name === folderName);
      if (!folder) {
        folder = { id: genId(), name: folderName };
        folders.push(folder);
        checkedFolderIds.add(folder.id);
      }

      let text, zh, phonetic = null, sentence = false;
      if (entry.type === "en_word") {
        text = entry.input; zh = entry.translation; phonetic = entry.kk || null;
      } else if (entry.type === "en_sentence") {
        text = entry.input; zh = entry.translation; sentence = true;
      } else if (entry.type === "zh_to_en") {
        text = entry.translation; zh = entry.input;
        sentence = text.trim().split(/\s+/).length > 1;
      } else { return; }

      if (items.some(it => it.folderId === folder.id && it.text === text)) return;
      items.unshift({
        id: genId(), text, zh, phonetic, sentence,
        example: entry.example || null, exampleZh: entry.exampleZh || "",
        reply: entry.reply || null, replyZh: entry.replyZh || "",
        folderId: folder.id, box: 0, due: Date.now(),
      });
      saveItems();
      saveFolders();
      saveCheckedFolderIds();
      render();
      renderFolders();
      renderAddFolderSelect();
      showToast(`已加入：${text}`);
    });
  }).catch(console.error);
}

function showToast(msg) {
  const t = document.createElement("div");
  t.textContent = msg;
  t.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1e293b;color:#fff;padding:10px 18px;border-radius:10px;font-size:14px;z-index:9999;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,0.2);pointer-events:none";
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

initFirebase();
