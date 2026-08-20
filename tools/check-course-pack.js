// 課程包自動查核 + 音標查表。用法：node tools/check-course-pack.js
//
// 查的都是實際犯過的錯：
//   1. contractions.full 沒有逐字出現在 dialogue 裡（前幾版連錯兩次）
//   2. 教材正文出現縮寫（政策是正文一律完整形式）
//   3. newWords.from 索引指到不存在的句子
//   4. check.dictation 的句子不在 dialogue 裡
// 順便回報 newWords 的音標能不能從既有單字包查到（音標一律查表，不手寫、不用 LLM 生）

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");

function loadGlobals(files) {
  const ctx = { localStorage: { getItem: () => null }, window: undefined };
  vm.createContext(ctx);
  for (const f of files) {
    const src = fs.readFileSync(path.join(ROOT, f), "utf8");
    vm.runInContext(src, ctx, { filename: f });
  }
  // const/let 是詞法宣告，不會掛到 context 物件上，要另外求值取回
  ctx.get = (name) => {
    try { return vm.runInContext(name, ctx); } catch { return undefined; }
  };
  return ctx;
}

// 固定慣用語白名單：這些是一整個詞組，不算違反「正文不縮寫」
const IDIOM_WHITELIST = [/that's it\./gi, /what's up\?/gi, /let's\b/gi];

function checkPack() {
  const ctx = loadGlobals([
    "starter-pack.js", "pack-jhs1.js", "pack-jhs2.js", "pack-jhs3.js",
    "pack-sent-ph.js",
    "course-pack.js", "course-pack-p2a.js", "course-pack-p2b.js",
    "course-pack-p3.js", "course-vocab-base.js", "course-vocab-extra.js", "course-phonetics.js",
    "course-pack-finalize.js",
  ]);
  const pack = ctx.get("COURSE_PACK");
  let fails = 0;
  const fail = (day, msg) => { console.log(`  BAD  Day ${day}: ${msg}`); fails++; };

  const days = pack.map((d) => d.day);
  if (pack.length !== 91) fail(0, `課程總天數應為 91，目前是 ${pack.length}`);
  days.forEach((day, index) => {
    if (day !== index + 1) fail(day, `日期順序不連續，位置 ${index + 1} 應為 Day ${index + 1}`);
  });

  for (const d of pack) {
    const expectedPhase = d.day <= 35 ? 1 : d.day <= 70 ? 2 : 3;
    const expectedWeek = Math.ceil(d.day / 7);
    if (d.phase !== expectedPhase) fail(d.day, `phase 應為 ${expectedPhase}，目前是 ${d.phase}`);
    if (d.week !== expectedWeek) fail(d.day, `week 應為 ${expectedWeek}，目前是 ${d.week}`);
    if (!d.check || (d.check.dictation || []).length < 5) fail(d.day, "Daily Check 聽寫少於 5 題");
    if (!d.check || (d.check.speaking || []).length < 3) fail(d.day, "Daily Check 口說少於 3 題");
    if (d.day % 7 === 0 && !d.passage) fail(d.day, "週考／階段考缺少閱讀短文");
    const lines = d.dialogue.map((x) => x.en);
    const corpus = lines.join("\n");

    // 1. contractions.full 必須逐字出現在 dialogue
    for (const c of d.contractions || []) {
      if (!corpus.includes(c.full.replace(/…$/, ""))) {
        fail(d.day, `contractions 的 full 在對話中查無此句 → "${c.full}"`);
      }
    }

    // 2. 正文不可有縮寫（白名單除外）
    for (const line of lines) {
      let probe = line;
      for (const w of IDIOM_WHITELIST) probe = probe.replace(w, "");
      const m = probe.match(/\b[A-Za-z]+'(s|t|m|re|ve|ll|d)\b/);
      if (m) fail(d.day, `正文出現縮寫 "${m[0]}" → "${line}"`);
    }

    // 3. newWords.from 索引要有效
    for (const w of d.newWords || []) {
      if (w.example) {
        if (!w.example.toLowerCase().includes(w.t.toLowerCase())) {
          fail(d.day, `補充新字 "${w.t}" 沒有出現在自帶例句 → "${w.example}"`);
        }
      } else if (typeof w.from !== "number" || !lines[w.from]) {
        fail(d.day, `newWords "${w.t}" 的 from=${w.from} 指不到對話句`);
      } else if (d.day >= 6) {
        // Day 1–5 已定稿且不可自行改教材；P6 新增內容開始嚴格要求字與例句一致。
        const escaped = w.t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (!new RegExp(`\\b${escaped}\\b`, "i").test(lines[w.from])) {
          fail(d.day, `newWords "${w.t}" 沒有出現在 from=${w.from} 的句子 → "${lines[w.from]}"`);
        }
      }
    }

    // 4. dictation 的句子要來自 dialogue（大小寫與標點需一致）
    for (const s of (d.check && d.check.dictation) || []) {
      if (!lines.some((l) => l.includes(s.replace(/[.?]$/, "")))) {
        fail(d.day, `dictation 句子不在對話中 → "${s}"`);
      }
    }

    // 5. drills 的 pattern 要有替換位置
    for (const dr of d.drills || []) {
      if (!dr.pattern.includes("___")) fail(d.day, `drill 缺少 ___ → "${dr.pattern}"`);
    }

    // 6. 句長上限（課程計畫的硬規格：Phase 1 最長 7 字、Phase 2 最長 14 字、Phase 3 不限）
    //    要按「句」數，不是按「行」數 —— 一行可以有兩三個短句
    const MAX = { 1: 7, 2: 14 }[d.phase];
    if (MAX) {
      for (const line of lines) {
        for (const s of line.split(/(?<=[.?!])\s+/)) {
          // 數字串接（oh-nine-one-two）唸的是單一號碼，算一個單位
          const n = s.trim().split(/\s+/).filter(Boolean).length;
          if (n > MAX) fail(d.day, `句長 ${n} 字超過 Phase ${d.phase} 上限 ${MAX} → "${s.trim()}"`);
        }
      }
    }
  }

  const fullCorpus = pack.flatMap((d) => d.dialogue.map((line) => line.en)).join("\n").toLowerCase();
  const requiredPhrases = [
    "pick up", "find out", "take care of", "cover for", "take a look at",
    "call back", "go over", "if we had", "having reviewed",
    "while i see your point", "comfortable committing",
  ];
  for (const phrase of requiredPhrases) {
    const present = phrase === "pick up"
      ? /\bpick\b[^\n]*\bup\b/.test(fullCorpus)
      : fullCorpus.includes(phrase);
    if (!present) fail(0, `課綱指定句型／片語未出現在對話：${phrase}`);
  }
  return { pack, fails };
}

function checkPhonetics(pack) {
  // 從既有單字包與句子音標表建索引
  const ctx = loadGlobals(["dict.js", "starter-pack.js", "pack-jhs1.js", "pack-jhs2.js", "pack-jhs3.js", "pack-sent-ph.js"]);
  const table = {};
  const eat = (arr) => (arr || []).forEach((lv) => (lv.words || []).forEach((w) => { if (w.t && w.ph) table[w.t.toLowerCase()] = w.ph; }));
  Object.assign(table, ctx.get("PHONETIC_DICT") || {});
  for (const name of ["STARTER_PACK", "JHS1_PACK", "JHS2_PACK", "JHS3_PACK"]) eat(ctx.get(name));
  Object.assign(table, ctx.get("SENT_PH_EXTRA") || {});

  const hit = [], miss = [];
  for (const d of pack) {
    for (const w of d.newWords || []) {
      const key = w.t.toLowerCase();
      (w.ph || table[key] ? hit : miss).push(w.t);
    }
  }
  return { hit, miss, table };
}

const { pack, fails } = checkPack();
console.log("=== 課程包查核 ===");
console.log(fails === 0 ? "  全部通過" : `  共 ${fails} 項異常`);

const { hit, miss } = checkPhonetics(pack);
console.log("=== 音標查表 ===");
console.log(`  查到 ${hit.length} 字，查不到 ${miss.length} 字`);
if (miss.length) console.log("  查不到（需另外用 CMU 腳本補）：" + miss.join(", "));

process.exit(fails ? 1 : 0);
