// 發佈前靜態查核：版本、快取、HTML 元素、同步功能與教材禁字。
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const root = path.resolve(__dirname, "..");
let failures = 0;
function fail(message) { console.error(`BAD  ${message}`); failures++; }
function read(name) { return fs.readFileSync(path.join(root, name), "utf8"); }

const files = ["index.html", "course.html", "app.js", "course.js", "course-word-groups.js", "sync.js", "sw.js"];
for (const file of files) if (!fs.existsSync(path.join(root, file))) fail(`缺少 ${file}`);

const version = "1.23.0";
for (const file of ["index.html", "course.html", "sw.js"]) {
  if (!read(file).includes(version)) fail(`${file} 版本號不是 ${version}`);
}

const sw = read("sw.js");
const assetsMatch = sw.match(/const ASSETS = \[([\s\S]*?)\];/);
if (!assetsMatch) fail("無法解析 Service Worker 資產清單");
else {
  const assets = vm.runInNewContext(`[${assetsMatch[1]}]`);
  for (const asset of assets) {
    if (asset === "./") continue;
    const filename = asset.split("?")[0];
    if (!fs.existsSync(path.join(root, filename))) fail(`離線快取指向不存在的檔案：${asset}`);
  }
}

const courseHtml = read("course.html");
const indexHtml = read("index.html");
for (const id of ["todayWordList", "relatedWordGroups"]) {
  if (!courseHtml.includes(`id="${id}"`)) fail(`課程頁缺少 #${id}`);
}
if (!(courseHtml.indexOf("🎧 今日對話") < courseHtml.indexOf('id="todayWordsBox"') &&
      courseHtml.indexOf('id="todayWordsBox"') < courseHtml.indexOf("🔁 句型替換練習"))) {
  fail("章節順序必須是今日對話 → 今日對話單字 → 句型替換練習");
}
if (!read("course.js").includes("renderTodayWords")) fail("課程程式缺少每日單字渲染");
if (courseHtml.includes("checkSpeaking") || courseHtml.includes("口說錄音")) fail("Daily Check 仍含口說錄音區塊");
if (!courseHtml.includes("① 聽寫") || !courseHtml.includes("50 分") || !courseHtml.includes("② 單字")) fail("Daily Check 配分不是聽寫 50／單字 50");
for (const id of ["courseAccountStatus", "courseGoogleLogin", "courseLogout"]) {
  if (!courseHtml.includes(`id="${id}"`)) fail(`課程頁缺少 #${id}`);
}
for (const id of ["accountStatus", "googleLogin", "googleLogout"]) {
  if (!indexHtml.includes(`id="${id}"`)) fail(`單字頁缺少 #${id}`);
}

const sync = read("sync.js");
for (const token of ["mergeCourse", "mergeMainData", "GoogleAuthProvider", "signInWithPopup"]) {
  if (!sync.includes(token)) fail(`同步模組缺少 ${token}`);
}
if (!read("app.js").includes("{ merge: true }")) fail("單字同步未使用 Firestore 合併寫入");

const vocab = read("course-vocab-extra.js");
for (const fake of ["administerary", "advocateful", "generateable", "Please review the"]) {
  if (vocab.includes(fake)) fail(`CEFR 字庫仍含舊假資料：${fake}`);
}
for (const simplified of ["他们", "放弃", "遗弃", "汽车", "词汇", "级别", "数据", "网络", "错误"]) {
  if (vocab.includes(simplified)) fail(`CEFR 字庫仍含簡體文字：${simplified}`);
}

console.log(failures ? `共 ${failures} 項異常` : "發佈前靜態查核全部通過");
process.exit(failures ? 1 : 0);
