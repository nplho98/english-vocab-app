// course-vocab-base.js — 用既有單字包補足三階段課程字量。
// 先重用已查核過的中文、音標與例句，再由 course-vocab-extra.js 補不足的高階字。
(function () {
  const TARGETS = { 1: 600, 2: 1000, 3: 1200 };
  const builtInPacks = [STARTER_PACK, JHS1_PACK, JHS2_PACK, JHS3_PACK];
  const builtInWords = builtInPacks.flatMap((pack) =>
    (pack || []).flatMap((level) => level.words || []));
  const globallyUsed = new Set(COURSE_PACK.flatMap((day) =>
    (day.newWords || []).map((word) => word.t.toLowerCase())));

  function phaseDays(phase) {
    return COURSE_PACK.filter((day) => day.phase === phase);
  }

  function phaseUniqueCount(phase) {
    return new Set(phaseDays(phase).flatMap((day) =>
      (day.newWords || []).map((word) => word.t.toLowerCase()))).size;
  }

  function appendWord(day, source) {
    day.newWords.push({
      t: source.t, zh: source.zh || "", ph: source.ph || "",
      example: source.ex || source.example || `This lesson uses the word ${source.t}.`,
      exampleZh: source.exZh || source.exampleZh || "",
      reply: source.re || source.reply || "",
      replyZh: source.reZh || source.replyZh || "",
    });
    globallyUsed.add(source.t.toLowerCase());
  }

  function fillPhaseFromList(phase, sourceWords) {
    const days = phaseDays(phase);
    let count = phaseUniqueCount(phase);
    let cursor = 0;
    for (const word of sourceWords) {
      if (count >= TARGETS[phase]) break;
      if (!word || !word.t || !word.zh || globallyUsed.has(word.t.toLowerCase())) continue;
      appendWord(days[cursor % days.length], word);
      cursor++;
      count++;
    }
    return count;
  }

  // 由淺到深依序分配，確保 Phase 1 優先拿基礎字，Phase 3 拿後段字。
  for (const phase of [1, 2, 3]) fillPhaseFromList(phase, builtInWords);

  globalThis.addCourseVocabulary = function (phase, entries) {
    const prepared = (entries || []).map((entry) => {
      if (!Array.isArray(entry)) return entry;
      const [t, zh, example] = entry;
      return { t, zh, example };
    });
    return fillPhaseFromList(phase, prepared);
  };

  globalThis.finalizeCourseVocabulary = function () {
    for (const phase of [1, 2, 3]) {
      const count = phaseUniqueCount(phase);
      if (count < TARGETS[phase]) throw new Error(`Phase ${phase} 新字不足：${count}/${TARGETS[phase]}`);
    }
    for (const day of COURSE_PACK) {
      for (const word of day.newWords || []) {
        if (!word.ph && globalThis.COURSE_PHONETICS) {
          word.ph = globalThis.COURSE_PHONETICS[word.t.toLowerCase()] || "";
        }
      }
      day.check.vocab = day.newWords.slice(0, 10).map((word) => word.t);
    }
  };
})();
