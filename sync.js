// sync.js — 手機 APK 與電腦網頁共用的登入與資料合併規則。
(function () {
  function unique(values) {
    return [...new Set((values || []).filter((value) => value !== null && value !== undefined))];
  }

  function mergeScoreMap(cloud, local) {
    const result = { ...(cloud || {}) };
    for (const [key, value] of Object.entries(local || {})) {
      const oldValue = Number(result[key]);
      const newValue = Number(value);
      result[key] = Number.isFinite(oldValue) && Number.isFinite(newValue)
        ? Math.max(oldValue, newValue)
        : value;
    }
    return result;
  }

  function mergeDaySlots(cloud, local) {
    const result = { ...(cloud || {}) };
    for (const [day, slots] of Object.entries(local || {})) {
      result[day] = unique([...(result[day] || []), ...(slots || [])]);
    }
    return result;
  }

  function mergeCourse(cloud, local) {
    const remote = cloud && typeof cloud === "object" ? cloud : {};
    const device = local && typeof local === "object" ? local : {};
    return {
      ...remote,
      ...device,
      currentDay: Math.max(Number(remote.currentDay) || 1, Number(device.currentDay) || 1),
      completed: unique([...(remote.completed || []), ...(device.completed || [])]).sort((a, b) => a - b),
      checkScores: mergeScoreMap(remote.checkScores, device.checkScores),
      weeklyScores: mergeScoreMap(remote.weeklyScores, device.weeklyScores),
      exitExams: mergeScoreMap(remote.exitExams, device.exitExams),
      recordings: { ...(remote.recordings || {}), ...(device.recordings || {}) },
      daySlots: mergeDaySlots(remote.daySlots, device.daySlots),
      injectedDays: unique([...(remote.injectedDays || []), ...(device.injectedDays || [])]).sort((a, b) => a - b),
    };
  }

  function mergeById(cloud, local) {
    const result = new Map();
    for (const entry of cloud || []) if (entry && entry.id) result.set(entry.id, entry);
    for (const entry of local || []) if (entry && entry.id) result.set(entry.id, { ...(result.get(entry.id) || {}), ...entry });
    return [...result.values()];
  }

  function mergeMainData(cloud, local) {
    return {
      ...(cloud || {}),
      ...(local || {}),
      items: mergeById(cloud && cloud.items, local && local.items),
      folders: mergeById(cloud && cloud.folders, local && local.folders),
      course: mergeCourse(cloud && cloud.course, local && local.course),
    };
  }

  function userLabel(user) {
    if (!user || user.isAnonymous) return "目前只存在這台裝置";
    return user.displayName || user.email || "Google 帳號已登入";
  }

  async function signInWithGoogle(auth) {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    return auth.signInWithPopup(provider);
  }

  window.EnglishSync = { mergeCourse, mergeMainData, userLabel, signInWithGoogle };
})();
