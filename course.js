// course.js — 課程頁
// Day 1–91 課程頁：對話播放、測驗、錄音、階段擋關與跨裝置同步。

const TOTAL_DAYS = 91;

// ---------- 角色聲音 ----------
// 對話有兩個角色時，聽起來要分得出誰在講。裝置有兩個以上英文語音就用不同音色，
// 只有一個就用語速差別頂著 —— 音色分不開，至少節奏分得開。
let voicePair = null;
function pickVoicePair() {
  const en = allVoices().filter((v) => /^en(-|_)/i.test(v.lang) || /english/i.test(v.name));
  if (!en.length) { voicePair = null; return; }
  const female = en.find((v) => /(aria|jenny|emma|libby|samantha|karen|moira|zira|female|woman)/i.test(v.name));
  const male = en.find((v) => /(guy|daniel|alex|david|mark|george|male|man)/i.test(v.name));
  const f = female || en[0];
  const m = male || en.find((v) => v !== f) || en[0];
  voicePair = { f, m, distinct: f !== m };
}

function voiceFor(role) {
  if (!voicePair) return { voice: getEnVoice(), rate: speechRate };
  const voice = role === "f" ? voicePair.f : voicePair.m;
  if (voicePair.distinct) return { voice, rate: speechRate };
  // 同一個聲音：女角稍快、男角稍慢，拉開辨識度（夾在 Web Speech 合理範圍內）
  const rate = role === "f" ? Math.min(1.5, speechRate * 1.12) : Math.max(0.5, speechRate * 0.92);
  return { voice, rate };
}

function checkVoiceAvailability() {
  const warn = document.getElementById("voiceWarn");
  if (!warn) return;
  if (!("speechSynthesis" in window)) {
    warn.textContent = "⚠️ 這台裝置不支援語音發音，對話沒辦法唸出來。";
    warn.classList.remove("hidden");
    return;
  }
  if (!hasEnglishVoice()) {
    // 沒英文語音時，speech.js 的 fallback 會抓中文語音去唸英文，整段課會完全不能聽。
    warn.innerHTML = "⚠️ <b>這台裝置沒有安裝英文語音</b>，現在會用中文語音唸英文，聽起來會完全不對。" +
      "請到系統設定安裝英文（美式）語音包：Android → 設定 → 語言與輸入 → 文字轉語音；Windows → 設定 → 時間與語言 → 語音。";
    warn.classList.remove("hidden");
  } else {
    warn.classList.add("hidden");
  }
}

// ---------- 目前是第幾天 ----------
function loadDay() {
  const d = parseInt(localStorage.getItem("course_day"), 10);
  if (!isFinite(d)) return 1;
  return Math.min(TOTAL_DAYS, Math.max(1, d));
}
let currentDay = loadDay();

// ---------- 課程進度 ----------
const COURSE_STATE_KEY = "course_progress_v1";
let courseDb = null;
let courseUid = null;
let courseStorage = null;

function loadCourseState() {
  const fallback = {
    currentDay, completed: [], checkScores: {}, weeklyScores: {},
    exitExams: {}, blockedAt: null, recordings: {}, daySlots: {}, injectedDays: [],
  };
  try {
    const saved = JSON.parse(localStorage.getItem(COURSE_STATE_KEY) || "null");
    if (!saved || typeof saved !== "object") return fallback;
    return {
      ...fallback, ...saved,
      completed: Array.isArray(saved.completed) ? saved.completed : [],
      checkScores: saved.checkScores || {}, weeklyScores: saved.weeklyScores || {},
      exitExams: saved.exitExams || {}, recordings: saved.recordings || {},
      daySlots: saved.daySlots || {},
      injectedDays: Array.isArray(saved.injectedDays) ? saved.injectedDays : [],
    };
  } catch { return fallback; }
}

let courseState = loadCourseState();
currentDay = Math.min(TOTAL_DAYS, Math.max(1, parseInt(courseState.currentDay, 10) || currentDay));

function gateForDay(day) {
  if (day > 70 && !(Number(courseState.exitExams[2]) >= 75)) return 70;
  if (day > 35 && !(Number(courseState.exitExams[1]) >= 75)) return 35;
  return null;
}

const initialGate = gateForDay(currentDay);
if (initialGate) currentDay = initialGate;

function saveCourseState() {
  courseState.currentDay = currentDay;
  localStorage.setItem("course_day", currentDay);
  localStorage.setItem(COURSE_STATE_KEY, JSON.stringify(courseState));
  if (courseDb && courseUid) {
    courseDb.collection("users").doc(courseUid).collection("data").doc("main")
      .set({ course: courseState }, { merge: true })
      .catch(() => setSyncNote("已存本機；目前無法同步雲端。"));
  }
}

function setSyncNote(message) {
  const note = document.getElementById("checkNote");
  if (note && message) note.textContent = message;
}

function dayData(day) {
  return COURSE_PACK.find((d) => d.day === day) || null;
}

// ---------- 渲染 ----------
const $ = (id) => document.getElementById(id);

function render(day) {
  const d = dayData(day);
  const made = COURSE_PACK.map((x) => x.day);

  $("dayBadge").textContent = "Day " + day;
  $("progressFill").style.width = Math.max(1, (day / TOTAL_DAYS) * 100) + "%";
  $("progressNote").textContent = `第 ${day} 天 / 共 ${TOTAL_DAYS} 天`;
  $("prevDay").disabled = day <= 1;
  $("nextDay").disabled = day >= TOTAL_DAYS;
  renderExitExam(day);
  renderSlotProgress(day);

  if (!d) {
    // 內容還沒做到這一天
    $("phaseTag").textContent = "內容尚未製作";
    $("todayTitle").textContent = "";
    $("sceneNote").textContent = `Day ${day} 的內容還沒做。目前已完成 Day ${Math.min(...made)}–${Math.max(...made)}。`;
    $("dialogue").innerHTML = "";
    $("todayWordList").innerHTML = "";
    $("relatedWordGroups").innerHTML = "";
    $("ctrBox").classList.add("hidden");
    $("ctrList").innerHTML = "";
    $("fixedBox").classList.add("hidden");
    $("fixedList").innerHTML = "";
    $("passageBox").classList.add("hidden");
    $("passageEn").textContent = "";
    $("passageZh").textContent = "";
    $("drillArea").innerHTML = "";
    $("aiPromptText").textContent = "";
    $("checkDictation").innerHTML = "";
    $("checkVocab").innerHTML = "";
    $("hideScript").checked = false;
    $("dialogue").classList.remove("hide-script");
    return;
  }

  const phaseName = { 1: "國小", 2: "國中", 3: "高中" }[d.phase];
  $("phaseTag").textContent = `Phase ${d.phase} · ${phaseName} · W${d.week}`;
  $("todayTitle").textContent = d.title;
  $("sceneNote").textContent = d.scene || "";

  // 對話
  $("dialogue").innerHTML = d.dialogue.map((l, i) => `
    <div class="dlg-line" data-i="${i}">
      <span class="dlg-who who-${l.v}">${l.who}</span>
      <span class="dlg-en">${l.en}</span>
      <button class="icon-btn speak-btn" title="唸這句">🔊</button>
    </div>`).join("");

  renderTodayWords(d);

  // 縮寫提示
  const ctr = d.contractions || [];
  $("ctrBox").classList.toggle("hidden", !ctr.length);
  $("ctrList").innerHTML = ctr.map((c) => `<li><code>${c.full}</code> → <b>${c.short}</b></li>`).join("");

  // 固定說法
  const fx = d.fixed || [];
  $("fixedBox").classList.toggle("hidden", !fx.length);
  $("fixedList").innerHTML = fx.map((f) =>
    `<li><b>${f.en}</b> ${f.zh}<span class="fixed-note">${f.note || ""}</span></li>`).join("");

  // 短文
  const hasPassage = !!(d.passage && d.passage.en);
  $("passageBox").classList.toggle("hidden", !hasPassage);
  if (hasPassage) {
    $("passageEn").textContent = d.passage.en;
    $("passageZh").textContent = d.passage.zh || "";
  }

  // 句型替換
  $("drillArea").innerHTML = (d.drills || []).map((dr, i) => `
    <div class="drill" data-i="${i}">
      <div class="drill-pattern">${dr.pattern.replace("___", '<span class="drill-slot">___</span>')}</div>
      <div class="drill-slots">${dr.slots.map((s) => `<button class="slot-chip">${s}</button>`).join("")}</div>
    </div>`).join("");

  // AI prompt
  $("aiPromptText").textContent = d.aiPrompt || "";

  // Daily Check（P3 只把題目排出來，計分是 P4）
  const c = d.check || {};
  $("checkDictation").innerHTML = (c.dictation || []).map((s) => `
    <div class="check-row">
      <button class="icon-btn speak-btn dict-btn" data-text="${s.replace(/"/g, "&quot;")}">🔊</button>
      <input type="text" class="check-input dictation-answer" data-answer="${encodeURIComponent(s)}" placeholder="聽到什麼就打什麼" />
    </div>`).join("");
  $("checkVocab").innerHTML = (c.vocab || []).map((w) => {
    const word = (d.newWords || []).find((item) => item.t.toLowerCase() === w.toLowerCase());
    const answer = word ? word.zh : "";
    return `
    <div class="check-row"><span class="check-zh">${w}</span>
    <input type="text" class="check-input vocab-answer" data-answer="${encodeURIComponent(answer)}" placeholder="中文" /></div>`;
  }).join("");

  const previousScore = courseState.checkScores[day];
  $("checkNote").className = "course-hint";
  $("checkNote").textContent = Number.isFinite(Number(previousScore))
    ? `上次成績：${previousScore} 分。重新送出會更新紀錄。`
    : "填完三區後送出，70 分以上通過；未滿 70 分要補強當日內容。";

  // 換天要把蓋稿狀態重置，否則新對話會莫名其妙是蓋住的
  $("hideScript").checked = false;
  $("dialogue").classList.remove("hide-script");

  bindDynamic();
}

// ---------- 動態內容的事件（每次 render 後重綁）----------
function bindDynamic() {
  document.querySelectorAll(".word-speak-btn").forEach((btn) => {
    btn.addEventListener("click", () => speak(btn.dataset.word));
  });
  document.querySelectorAll(".dlg-line .speak-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const line = btn.closest(".dlg-line");
      const d = dayData(currentDay);
      const role = d.dialogue[+line.dataset.i].v;
      const { voice, rate } = voiceFor(role);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      line.classList.add("speaking");
      speakAsync(line.querySelector(".dlg-en").textContent, voice, "en-US", rate)
        .then(() => line.classList.remove("speaking"));
    });
  });

  document.querySelectorAll(".dict-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      // 聽寫題照母語者的自然縮寫唸（課程計畫 7.1 的規定）
      speakAsync(contract(btn.dataset.text), getEnVoice(), "en-US");
    });
  });

  document.querySelectorAll(".drill").forEach((drill) => {
    const slot = drill.querySelector(".drill-slot");
    drill.querySelectorAll(".slot-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        drill.querySelectorAll(".slot-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        slot.textContent = chip.textContent;
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        speak(drill.querySelector(".drill-pattern").textContent.trim());
        const drills = [...document.querySelectorAll(".drill")];
        if (drills.length && drills.every((item) => item.querySelector(".slot-chip.active"))) markSlotDone("drill");
      });
    });
  });

}

function wordInfo(text) {
  const key = String(text || "").toLowerCase();
  for (const lesson of COURSE_PACK) {
    const found = (lesson.newWords || []).find((word) => word.t.toLowerCase() === key);
    if (found) return found;
  }
  return null;
}

function renderTodayWords(d) {
  const core = new Set(((d.check && d.check.vocab) || []).map((word) => word.toLowerCase()));
  const words = (d.newWords || []).filter((word) => core.has(word.t.toLowerCase()));
  $("todayWordList").innerHTML = words.length ? words.map((word) => {
    const line = d.dialogue[Number.isInteger(word.from) ? word.from : 0];
    return `<article class="today-word-card">
      <div class="today-word-main"><b>${word.t}</b><span>${word.ph || ""}</span><button class="icon-btn word-speak-btn" data-word="${word.t}" title="播放單字">🔊</button></div>
      <div class="today-word-zh">${word.zh}</div>
      <div class="today-word-example">${line ? line.en : ""}</div>
    </article>`;
  }).join("") : `<p class="course-hint">本日是綜合複習，不新增核心單字。</p>`;

  const groupIds = (typeof COURSE_DAY_WORD_GROUPS === "object" && COURSE_DAY_WORD_GROUPS[d.day]) || [];
  $("relatedWordGroups").innerHTML = groupIds.length
    ? `<h3 class="word-group-heading">同類單字提醒</h3>` + groupIds.map((id) => {
      const group = COURSE_WORD_GROUPS[id];
      const chips = group.words.map(([text, zh, firstDay]) => {
        const state = firstDay === d.day ? "today" : firstDay < d.day ? "learned" : "future";
        const note = state === "today" ? "今天" : state === "learned" ? `Day ${firstDay} 已學` : `Day ${firstDay} 學`;
        const info = wordInfo(text);
        return `<li class="related-word-item ${state}"><b>${text}</b><span>${zh}</span>${info && info.ph ? `<em>${info.ph}</em>` : ""}<small>${note}</small></li>`;
      }).join("");
      return `<details class="word-group-card"><summary>${group.label}</summary><ul class="related-word-list">${chips}</ul></details>`;
    }).join("")
    : `<p class="course-hint">本日沒有新增的同類字群。</p>`;
}

// 把完整形式轉成母語者的自然縮寫（只用在聽寫音檔，畫面上的字不動）
function contract(s) {
  return s
    .replace(/\bI am\b/g, "I'm").replace(/\bwhat is\b/gi, (m) => m[0] === "W" ? "What's" : "what's")
    .replace(/\bIt is\b/g, "It's").replace(/\bthat is\b/gi, (m) => m[0] === "T" ? "That's" : "that's")
    .replace(/\bHere is\b/g, "Here's").replace(/\bdo not\b/g, "don't")
    .replace(/\bis not\b/g, "isn't").replace(/\bare not\b/g, "aren't")
    .replace(/\bI will\b/g, "I'll").replace(/\bI have\b/g, "I've")
    .replace(/\bcould not\b/g, "couldn't").replace(/\bwould not\b/g, "wouldn't")
    .replace(/\bhe is\b/gi, (m) => m[0] === "H" ? "He's" : "he's");
}

// ---------- P4：Daily Check 計分 ----------
function normalizeEnglish(value) {
  return String(value || "").toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/\bi'm\b/g, "i am").replace(/\bwhat's\b/g, "what is")
    .replace(/\bit's\b/g, "it is").replace(/\bthat's\b/g, "that is")
    .replace(/\bhere's\b/g, "here is").replace(/\bdon't\b/g, "do not")
    .replace(/\bisn't\b/g, "is not").replace(/\baren't\b/g, "are not")
    .replace(/\bi'll\b/g, "i will").replace(/\bi've\b/g, "i have")
    .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function chineseAnswers(value) {
  const raw = String(value || "").toLowerCase().trim();
  const noNote = raw.replace(/[（(][^）)]*[）)]/g, "").trim();
  return [raw, noNote]
    .flatMap((s) => s.split(/[；;、，,／/]/))
    .map((s) => s.replace(/\s+/g, "").trim()).filter(Boolean);
}

function markAnswer(input, correct, answerText) {
  input.classList.toggle("correct", correct);
  input.classList.toggle("wrong", !correct);
  const row = input.closest(".check-row");
  let note = row.nextElementSibling;
  if (!note || !note.classList.contains("answer-note")) {
    note = document.createElement("span");
    note.className = "answer-note";
    row.insertAdjacentElement("afterend", note);
  }
  note.textContent = correct ? "答對" : `正確答案：${answerText}`;
}

async function injectNewWords(d) {
  if (!d) return 0;
  const itemsKey = "my_vocab_items_v1";
  const foldersKey = "my_vocab_folders_v1";
  const checkedKey = "my_vocab_checked_folders_v1";
  let localItems = [], localFolders = [];
  try { localItems = JSON.parse(localStorage.getItem(itemsKey) || "[]"); } catch { localItems = []; }
  try { localFolders = JSON.parse(localStorage.getItem(foldersKey) || "[]"); } catch { localFolders = []; }

  let cloudItems = [], cloudFolders = [];
  let mainRef = null;
  if (courseDb && courseUid) {
    mainRef = courseDb.collection("users").doc(courseUid).collection("data").doc("main");
    try {
      const snap = await mainRef.get();
      if (snap.exists) {
        cloudItems = snap.data().items || [];
        cloudFolders = snap.data().folders || [];
      }
    } catch { /* 離線時仍先寫本機 */ }
  }

  const byId = new Map([...cloudItems, ...localItems].map((item) => [item.id, item]));
  const items = [...byId.values()];
  const folderName = `三個月課程 Day ${d.day}`;
  const folders = [...cloudFolders, ...localFolders].filter((folder, index, list) =>
    list.findIndex((other) => other.id === folder.id) === index);
  let folder = folders.find((item) => item.name === folderName);
  if (!folder) {
    folder = { id: `course-day-${d.day}`, name: folderName, cat: "日常生活常用" };
    folders.push(folder);
  }

  const known = new Set(items.map((item) => String(item.text || "").toLowerCase()));
  let added = 0;
  (d.newWords || []).forEach((word, index) => {
    if (known.has(word.t.toLowerCase())) return;
    const lineIndex = Number.isInteger(word.from) ? word.from : 0;
    const example = word.example || (d.dialogue[lineIndex] ? d.dialogue[lineIndex].en : "");
    const reply = word.reply || (d.dialogue[lineIndex + 1] ? d.dialogue[lineIndex + 1].en : "");
    items.unshift({
      id: `course-${d.day}-${index}-${word.t.toLowerCase()}`,
      text: word.t, zh: word.zh, phonetic: word.ph || null,
      example, exampleZh: word.exampleZh || "", reply, replyZh: word.replyZh || "",
      sentence: false, folderId: folder.id, box: 0, due: Date.now(),
      source: "three-month-course", courseDay: d.day,
    });
    known.add(word.t.toLowerCase());
    added++;
  });

  localStorage.setItem(itemsKey, JSON.stringify(items));
  localStorage.setItem(foldersKey, JSON.stringify(folders));
  let checked = [];
  try { checked = JSON.parse(localStorage.getItem(checkedKey) || "[]"); } catch { checked = []; }
  if (!checked.includes(folder.id)) checked.push(folder.id);
  localStorage.setItem(checkedKey, JSON.stringify(checked));

  if (!courseState.injectedDays.includes(d.day)) courseState.injectedDays.push(d.day);
  courseState.injectedDays.sort((a, b) => a - b);
  saveCourseState();
  if (mainRef) {
    try { await mainRef.set({ items, folders, course: courseState }, { merge: true }); }
    catch { setSyncNote("新字已存本機；目前無法同步雲端。"); }
  }
  return added;
}

$("submitCheckBtn").addEventListener("click", async () => {
  const d = dayData(currentDay);
  if (!d) return;
  const dictInputs = [...document.querySelectorAll(".dictation-answer")];
  const vocabInputs = [...document.querySelectorAll(".vocab-answer")];

  let dictCorrect = 0;
  dictInputs.forEach((input) => {
    const answer = decodeURIComponent(input.dataset.answer || "");
    const correct = normalizeEnglish(input.value) === normalizeEnglish(answer);
    if (correct) dictCorrect++;
    markAnswer(input, correct, answer);
  });

  let vocabCorrect = 0;
  vocabInputs.forEach((input) => {
    const answer = decodeURIComponent(input.dataset.answer || "");
    const expected = chineseAnswers(answer);
    const given = input.value.replace(/\s+/g, "").toLowerCase();
    const correct = !!given && expected.some((item) => given === item);
    if (correct) vocabCorrect++;
    markAnswer(input, correct, answer);
  });

  const dictScore = dictInputs.length ? dictCorrect / dictInputs.length * 50 : 0;
  const vocabScore = vocabInputs.length ? vocabCorrect / vocabInputs.length * 50 : 0;
  const score = Math.round(dictScore + vocabScore);

  courseState.checkScores[currentDay] = score;
  if (!courseState.completed.includes(currentDay)) courseState.completed.push(currentDay);
  courseState.completed.sort((a, b) => a - b);
  saveCourseState();
  markSlotDone("check");
  const addedWords = await injectNewWords(d);

  const passed = score >= 70;
  $("checkNote").className = `check-result ${passed ? "pass" : "fail"}`;
  $("checkNote").textContent = passed
    ? `本次 ${score} 分，Daily Check 通過，進度已儲存${addedWords ? `，並加入 ${addedWords} 個新字` : ""}。`
    : `本次 ${score} 分，未達 70 分。進度已儲存${addedWords ? `，並加入 ${addedWords} 個新字` : ""}；請補強今天內容後再測一次。`;
});

// ---------- P4：階段考 75 分擋關 ----------
function renderExitExam(day) {
  const phaseByDay = { 35: 1, 70: 2, 91: 3 };
  const phase = phaseByDay[day];
  const box = $("exitExamBox");
  box.classList.toggle("hidden", !phase);
  if (!phase) return;
  const saved = courseState.exitExams[phase];
  $("exitExamNote").textContent = `Day ${day} 是 Phase ${phase} 階段考。輸入正式考試總分。`;
  $("exitExamScore").value = Number.isFinite(Number(saved)) ? saved : "";
  $("exitExamResult").textContent = Number.isFinite(Number(saved))
    ? (Number(saved) >= 75 ? `已通過：${saved} 分。` : `目前 ${saved} 分，需完成強化課程後重考。`)
    : "尚未輸入成績。";
}

$("saveExitExamBtn").addEventListener("click", () => {
  const phaseByDay = { 35: 1, 70: 2, 91: 3 };
  const phase = phaseByDay[currentDay];
  const score = Number($("exitExamScore").value);
  if (!phase || !Number.isFinite(score) || score < 0 || score > 100) {
    $("exitExamResult").textContent = "請輸入 0～100 的有效分數。";
    return;
  }
  courseState.exitExams[phase] = score;
  courseState.blockedAt = score >= 75 ? null : currentDay;
  saveCourseState();
  $("exitExamResult").textContent = score >= 75
    ? `已通過：${score} 分，可以進入下一階段。`
    : `目前 ${score} 分，未達 75 分，下一階段維持鎖定。`;
});

// ---------- P5：錄音（每日存在 IndexedDB，里程碑另同步 Firebase Storage） ----------
let recorderDbPromise = null;
let activeRecorder = null;
let activeRecordKey = "";
let activeRecordChunks = [];
let activeRecordDone = null;

function openRecorderDb() {
  if (recorderDbPromise) return recorderDbPromise;
  recorderDbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open("english_course_recordings", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("recordings");
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return recorderDbPromise;
}

async function putRecording(key, blob) {
  const db = await openRecorderDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("recordings", "readwrite");
    tx.objectStore("recordings").put(blob, key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function getRecording(key) {
  const db = await openRecorderDb();
  return new Promise((resolve, reject) => {
    const req = db.transaction("recordings").objectStore("recordings").get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function hasStoredRecording(key) {
  try { return !!(await getRecording(key)); } catch { return false; }
}

function recordKey(day, kind) { return `day-${day}-${kind}`; }

async function startRecording(key, onDone) {
  if (!navigator.mediaDevices || !window.MediaRecorder) throw new Error("unsupported");
  if (activeRecorder) throw new Error("busy");
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  activeRecordChunks = [];
  activeRecordKey = key;
  activeRecordDone = onDone;
  activeRecorder = new MediaRecorder(stream);
  activeRecorder.ondataavailable = (event) => { if (event.data.size) activeRecordChunks.push(event.data); };
  activeRecorder.onstop = async () => {
    const blob = new Blob(activeRecordChunks, { type: activeRecorder.mimeType || "audio/webm" });
    activeRecorder.stream.getTracks().forEach((track) => track.stop());
    await putRecording(activeRecordKey, blob);
    const done = activeRecordDone;
    activeRecorder = null; activeRecordKey = ""; activeRecordDone = null;
    if (typeof done === "function") done(blob);
  };
  activeRecorder.start();
}

function stopActiveRecording() {
  if (activeRecorder && activeRecorder.state !== "inactive") activeRecorder.stop();
}

async function playStoredRecording(key) {
  const blob = await getRecording(key);
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  const audio = new Audio(url);
  audio.onended = () => URL.revokeObjectURL(url);
  audio.onerror = () => URL.revokeObjectURL(url);
  audio.play();
}

async function toggleSpeakingRecording(btn) {
  const key = recordKey(currentDay, btn.dataset.recKey);
  if (activeRecorder && activeRecordKey === key) { stopActiveRecording(); return; }
  try {
    await startRecording(key, () => {
      btn.textContent = "重新錄音";
      btn.classList.remove("recording");
      const play = document.querySelector(`.speaking-play[data-rec-key="${btn.dataset.recKey}"]`);
      if (play) play.disabled = false;
    });
    btn.textContent = "停止";
    btn.classList.add("recording");
  } catch {
    $("checkNote").textContent = "無法使用麥克風，請允許瀏覽器的麥克風權限。";
  }
}

// ---------- 固定元件的事件（只綁一次）----------
$("prevDay").addEventListener("click", () => goDay(-1));
$("nextDay").addEventListener("click", () => goDay(1));
function goDay(delta) {
  const target = currentDay + delta;
  if (target < 1 || target > TOTAL_DAYS) return;
  if (activeRecorder) stopActiveRecording();
  const blockedAt = gateForDay(target);
  if (blockedAt && delta > 0) {
    courseState.blockedAt = blockedAt;
    saveCourseState();
    renderExitExam(currentDay);
    $("exitExamResult").textContent = `階段考未達 75 分，不能前往 Day ${target}。`;
    $("exitExamBox").scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  currentDay = target;
  courseState.blockedAt = null;
  saveCourseState();
  render(currentDay);
}

// 語速（與背單字頁共用同一個 localStorage key）
const $speed = $("courseSpeed"), $speedVal = $("courseSpeedVal");
$speed.value = speechRate;
$speedVal.textContent = speechRate.toFixed(1) + "×";
$speed.addEventListener("input", () => {
  speechRate = parseFloat($speed.value);
  localStorage.setItem("speech_rate", speechRate);
  $speedVal.textContent = speechRate.toFixed(1) + "×";
});

// 整段播放 / 停止
let playing = false;
$("playAllBtn").addEventListener("click", async () => {
  if (playing) return;
  const d = dayData(currentDay);
  if (!d) return;
  playing = true;
  const lines = [...document.querySelectorAll(".dlg-line")];
  for (const line of lines) {
    if (!playing) break;
    const { voice, rate } = voiceFor(d.dialogue[+line.dataset.i].v);
    line.classList.add("speaking");
    line.scrollIntoView({ block: "center", behavior: "smooth" });
    await speakAsync(line.querySelector(".dlg-en").textContent, voice, "en-US", rate);
    line.classList.remove("speaking");
    if (!playing) break;
    await new Promise((r) => setTimeout(r, 350));
  }
  playing = false;
  markSlotDone("listen");
});
$("stopBtn").addEventListener("click", () => {
  playing = false;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  document.querySelectorAll(".dlg-line.speaking").forEach((l) => l.classList.remove("speaking"));
});

// 蓋住逐字稿
$("hideScript").addEventListener("change", () => {
  const on = $("hideScript").checked;
  $("dialogue").classList.toggle("hide-script", on);
  if (!on) $("dialogue").querySelectorAll(".revealed").forEach((e) => e.classList.remove("revealed"));
});
$("dialogue").addEventListener("click", (e) => {
  if (!$("hideScript").checked) return;
  if (e.target.classList.contains("dlg-en")) e.target.classList.toggle("revealed");
});

// 短文發音
$("passageSpeak").addEventListener("click", () => {
  const d = dayData(currentDay);
  if (!d || !d.passage) return;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  speak(d.passage.en.replace(/\n/g, " "));
});

// 複製 AI prompt
$("copyPromptBtn").addEventListener("click", async () => {
  const btn = $("copyPromptBtn");
  const text = $("aiPromptText").textContent;
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "✅ 已複製";
  } catch {
    // 剪貼簿 API 在非 https 或舊 WebView 會失敗，退回選取讓使用者長按複製
    const r = document.createRange();
    r.selectNodeContents($("aiPromptText"));
    const sel = window.getSelection();
    sel.removeAllRanges(); sel.addRange(r);
    btn.textContent = "請長按複製";
  }
  setTimeout(() => (btn.textContent = "📋 複製指令"), 2000);
});

// 今日課表打勾（P3 仍只有視覺，進度儲存是 P4）
function renderSlotProgress(day) {
  const done = new Set(courseState.daySlots[day] || []);
  document.querySelectorAll(".slot").forEach((slot) => {
    const isDone = done.has(slot.dataset.slot);
    slot.classList.toggle("done", isDone);
    slot.querySelector(".slot-check").textContent = isDone ? "●" : "○";
  });
}

function markSlotDone(name) {
  const done = new Set(courseState.daySlots[currentDay] || []);
  done.add(name);
  courseState.daySlots[currentDay] = [...done];
  saveCourseState();
  renderSlotProgress(currentDay);
}

document.querySelectorAll(".slot").forEach((slot) => {
  slot.addEventListener("click", () => {
    const done = new Set(courseState.daySlots[currentDay] || []);
    if (done.has(slot.dataset.slot)) done.delete(slot.dataset.slot); else done.add(slot.dataset.slot);
    courseState.daySlots[currentDay] = [...done];
    saveCourseState();
    renderSlotProgress(currentDay);
  });
});

$("aiDoneBtn").addEventListener("click", () => {
  markSlotDone("ai");
  $("aiDoneBtn").textContent = "已完成";
});

// ---------- 啟動 ----------
setVoicesReadyCallback(() => { pickVoicePair(); checkVoiceAvailability(); });
render(currentDay);

function loadCourseScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function initCourseFirebase() {
  try {
    const base = "https://www.gstatic.com/firebasejs/10.14.1/";
    await loadCourseScript(base + "firebase-app-compat.js");
    await loadCourseScript(base + "firebase-auth-compat.js");
    await loadCourseScript(base + "firebase-firestore-compat.js");
    await loadCourseScript(base + "firebase-storage-compat.js");
    if (!firebase.apps.length) firebase.initializeApp({
      apiKey: "AIzaSyDq6JsRO2_FwoEsGtaiGvUcY2log58H_Js",
      authDomain: "english-e754f.firebaseapp.com",
      projectId: "english-e754f",
      storageBucket: "english-e754f.firebasestorage.app",
      messagingSenderId: "958567119066",
      appId: "1:958567119066:web:d1bd3be1cd7b7fa03d4de3",
    });
    courseDb = firebase.firestore();
    courseStorage = firebase.storage();
    courseDb.enablePersistence({ synchronizeTabs: true }).catch(() => {});
    const auth = firebase.auth();
    const status = document.getElementById("courseAccountStatus");
    const login = document.getElementById("courseGoogleLogin");
    const logout = document.getElementById("courseLogout");

    function updateCourseAccountUi(user, message) {
      status.textContent = message || EnglishSync.userLabel(user);
      login.classList.toggle("hidden", !!user && !user.isAnonymous);
      logout.classList.toggle("hidden", !user || user.isAnonymous);
    }

    login.addEventListener("click", async () => {
      login.disabled = true;
      updateCourseAccountUi(auth.currentUser, "正在開啟 Google 登入");
      try { await EnglishSync.signInWithGoogle(auth); }
      catch (error) {
        console.error(error);
        updateCourseAccountUi(auth.currentUser, "Google 登入未完成");
      } finally { login.disabled = false; }
    });
    logout.addEventListener("click", async () => {
      await auth.signOut();
      await auth.signInAnonymously();
    });

    auth.onAuthStateChanged(async (user) => {
      try {
        if (!user) { await auth.signInAnonymously(); return; }
        courseUid = user.uid;
        updateCourseAccountUi(user, user.isAnonymous ? "目前只存在這台裝置" : `已同步：${EnglishSync.userLabel(user)}`);
        const ref = courseDb.collection("users").doc(courseUid).collection("data").doc("main");
        const snap = await ref.get();
        const localItems = JSON.parse(localStorage.getItem("my_vocab_items_v1") || "[]");
        const localFolders = JSON.parse(localStorage.getItem("my_vocab_folders_v1") || "[]");
        const merged = EnglishSync.mergeMainData(snap.exists ? snap.data() : {}, {
          items: localItems, folders: localFolders, course: courseState,
        });
        courseState = merged.course;
        localStorage.setItem("my_vocab_items_v1", JSON.stringify(merged.items || []));
        localStorage.setItem("my_vocab_folders_v1", JSON.stringify(merged.folders || []));
        currentDay = gateForDay(courseState.currentDay) || Math.min(TOTAL_DAYS, Number(courseState.currentDay) || 1);
        await ref.set({ items: merged.items, folders: merged.folders, course: courseState }, { merge: true });
        localStorage.setItem(COURSE_STATE_KEY, JSON.stringify(courseState));
        localStorage.setItem("course_day", currentDay);
        render(currentDay);
      } catch (error) {
        console.error(error);
        updateCourseAccountUi(user, "本機進度正常；雲端同步失敗");
      }
    });
  } catch (error) {
    console.error(error);
    setSyncNote("進度已存本機；目前離線，恢復網路後再同步雲端。");
  }
}

initCourseFirebase();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
