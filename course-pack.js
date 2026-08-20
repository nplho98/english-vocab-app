// course-pack.js — 三個月英文課程包（零基礎 → 高中）
// 內容依據：100_Todo/projects/英文三個月_零基礎到高中_課程計畫_2026-08-13_v1.2.md（三階段皆通過美國同齡人角色審查）
//
// ── 欄位說明 ──────────────────────────────────────────────
// day        第幾天（1–91）
// phase      1=國小 2=國中 3=高中
// week       第幾週（1–13）
// title      當日主題
// scene      情境設定（給學習者看，說明這段對話發生在哪）
// dialogue   對話。who=角色名 v=聲音(f/m) en=英文
// contractions  口語縮寫提示。full 必須逐字引用 dialogue 裡出現過的句子（見下方鐵則）
// fixed      本篇「固定說法」：用到當週還沒教的動詞、但高頻到不能不教的句子。整句背，不拆文法。
// drills     句型替換練習。pattern 用 ___ 表示要替換的位置
// newWords   當日新字。ph（音標）由 CMU 腳本產生，不手寫；from = 該字出現在 dialogue 的第幾句（索引從 0）
// passage    當日短文（可為 null，前幾天還讀不了）
// check      Daily Check 小測：dictation=聽寫 speaking=看中文說英文 vocab=單字測驗
// aiPrompt   貼到 Claude App 做角色扮演用的 prompt（方案 A）
//
// ── 三條鐵則（違反會被審查退回，前幾版都栽在這）────────────
// 1. contractions 的 full 必須「逐字」出現在同一天的 dialogue 裡，不可自己另造一句，
//    也不可換句（What can I get you? 的縮讀是 What can I getcha?，不是 Whaddaya want?）
// 2. 教材正文一律「不縮寫」（I am / do not / cannot），縮寫只出現在 contractions 欄。
//    唯一例外是 That's it. / What's up? 這類固定慣用語，那是一整個詞組。
// 3. W1 只有 be 動詞（am/is/are）。任何用到別的動詞的句子（meet / have / see / do…）
//    **一律要進 fixed 欄並註明「整句背」**，不可散落在 dialogue 裡當成理所當然。
//
// ── aiPrompt 的鐵則 ──────────────────────────────────────
// 允許句型清單必須「夠學習者把這段對話走完」，包含：
//   - 否定回答（問 Are you ___? 就必須有 No, I am not.，否則 AI 只能說謊）
//   - 聽不懂時的求助句（Again, please. / Slowly, please.）
//   - 道別句
//   - drills 教過的句子（教了卻不准用等於沒教）
// 而且角色台詞不可混淆：扮店員就只給店員的台詞，不要把顧客台詞也丟進清單。

const COURSE_PACK = [

// ═══════════════════════════════════════════════════════
// W1：打招呼、自我介紹、數字 0–100
// ═══════════════════════════════════════════════════════

{
  day: 1, phase: 1, week: 1,
  title: "第一次見面：說出自己的名字",
  scene: "你今天第一天到新公司。走進辦公室，旁邊坐的同事轉過來看你。",
  dialogue: [
    { who: "Ben",  v: "m", en: "Hello." },
    { who: "Sara", v: "f", en: "Hi." },
    { who: "Ben",  v: "m", en: "My name is Ben. What is your name?" },
    { who: "Sara", v: "f", en: "I am Sara. Nice to meet you." },
    { who: "Ben",  v: "m", en: "Nice to meet you, too." },
  ],
  contractions: [
    { full: "What is your name?", short: "What's your name?" },
    { full: "I am Sara.", short: "I'm Sara." },
  ],
  fixed: [
    { en: "Nice to meet you.", zh: "很高興認識你。", note: "meet 這個動詞這週還沒教，整句背起來直接用" },
    { en: "Nice to meet you, too.", zh: "我也很高興認識你。", note: "對方先說時的回法，加 too" },
  ],
  drills: [
    { pattern: "My name is ___.", slots: ["Ben", "Sara", "Mark", "Amy", "Tom"] },
    { pattern: "I am ___.", slots: ["Ben", "Sara", "Mark", "Amy", "Tom"] },
  ],
  newWords: [
    { t: "hello", zh: "你好", ph: "", from: 0 },
    { t: "hi", zh: "嗨", ph: "", from: 1 },
    { t: "my", zh: "我的", ph: "", from: 2 },
    { t: "name", zh: "名字", ph: "", from: 2 },
    { t: "is", zh: "是（他/她/它）", ph: "", from: 2 },
    { t: "what", zh: "什麼", ph: "", from: 2 },
    { t: "your", zh: "你的", ph: "", from: 2 },
    { t: "I", zh: "我", ph: "", from: 3 },
    { t: "am", zh: "是（我）", ph: "", from: 3 },
    { t: "nice", zh: "好的；愉快的", ph: "", from: 3 },
    { t: "meet", zh: "見面", ph: "", from: 3 },
    { t: "you", zh: "你", ph: "", from: 3 },
    { t: "too", zh: "也", ph: "", from: 4 },
  ],
  passage: null,
  check: {
    dictation: ["Hello.", "My name is Ben.", "What is your name?", "I am Sara.", "Nice to meet you, too."],
    speaking: ["你好。", "我叫 Ben。", "你叫什麼名字？", "很高興認識你。"],
    vocab: ["hello", "name", "meet", "nice", "too"],
  },
  aiPrompt:
    "你是 Sara，我的新同事。今天是我第一天上班。\n" +
    "請只用英文跟我對話，【只能使用這些句型】：\n" +
    "Hello. / Hi. / My name is ___. / What is your name? / I am ___. / Nice to meet you. / Nice to meet you, too.\n" +
    "規則：\n" +
    "1. 每次只講一句，然後等我回答。\n" +
    "2. 絕對不要使用上面清單以外的句子，我是零基礎，看到別的句子會完全看不懂。\n" +
    "3. 如果我講錯，直接給我正確的那一句，不要解釋文法。\n" +
    "4. 不要用縮寫（不要寫 I'm，要寫 I am）。\n" +
    "現在請你先開口打招呼。",
},

{
  day: 2, phase: 1, week: 1,
  title: "你好嗎：早上遇到同事",
  scene: "上班第二天早上，你在茶水間遇到 Sara。",
  dialogue: [
    { who: "Sara", v: "f", en: "Good morning, Ben." },
    { who: "Ben",  v: "m", en: "Good morning, Sara. How are you?" },
    { who: "Sara", v: "f", en: "I am fine, thank you. And you?" },
    { who: "Ben",  v: "m", en: "I am OK. I am a little tired." },
    { who: "Sara", v: "f", en: "Me too. I am very busy today." },
    { who: "Ben",  v: "m", en: "Have a good day, Sara." },
    { who: "Sara", v: "f", en: "You too. See you." },
  ],
  contractions: [
    { full: "I am fine, thank you.", short: "I'm fine, thank you." },
    { full: "I am a little tired.", short: "I'm a little tired." },
    { full: "I am very busy today.", short: "I'm very busy today." },
  ],
  fixed: [
    { en: "Have a good day.", zh: "祝你有美好的一天。", note: "have 這週還沒教，整句背" },
    { en: "You too.", zh: "你也是。", note: "回應 Have a good day 的固定說法" },
    { en: "See you.", zh: "再見／回頭見。", note: "see 這週還沒教。同事之間道別最常用這句，比 Goodbye 更自然" },
    { en: "I am good, thanks.", zh: "我很好，謝謝。", note: "跟 I am fine, thank you. 意思一樣，但美國人日常更常說這句。兩句都要會聽" },
  ],
  drills: [
    { pattern: "I am ___.", slots: ["fine", "OK", "tired", "happy", "busy"] },
    { pattern: "Good ___.", slots: ["morning", "afternoon", "evening", "night"] },
  ],
  newWords: [
    { t: "good", zh: "好的", ph: "", from: 0 },
    { t: "morning", zh: "早上", ph: "", from: 0 },
    { t: "how", zh: "如何", ph: "", from: 1 },
    { t: "are", zh: "是（你/我們/他們）", ph: "", from: 1 },
    { t: "fine", zh: "很好", ph: "", from: 2 },
    { t: "thank", zh: "謝謝", ph: "", from: 2 },
    { t: "and", zh: "和；那麼", ph: "", from: 2 },
    { t: "OK", zh: "還可以", ph: "", from: 3 },
    { t: "little", zh: "小的（a little = 有一點）", ph: "", from: 3 },
    { t: "tired", zh: "累的", ph: "", from: 3 },
    { t: "very", zh: "非常", ph: "", from: 4 },
    { t: "busy", zh: "忙碌的", ph: "", from: 4 },
    { t: "today", zh: "今天", ph: "", from: 4 },
    { t: "day", zh: "一天", ph: "", from: 5 },
  ],
  passage: null,
  check: {
    dictation: ["Good morning, Ben.", "How are you?", "I am fine, thank you.", "I am a little tired.", "I am very busy today."],
    speaking: ["早安。", "你好嗎？", "我很好，謝謝。", "我有一點累。", "我今天很忙。"],
    vocab: ["morning", "fine", "tired", "busy", "today"],
  },
  aiPrompt:
    "你是 Sara，我的同事。現在是早上，我們在茶水間遇到。\n" +
    "請只用英文跟我對話，【只能使用這些句型】：\n" +
    "Good morning. / Good afternoon. / How are you? / I am fine, thank you. / I am good, thanks. / And you? / I am OK. / I am a little tired. / I am very busy today. / I am happy. / Me too. / Have a good day. / You too. / See you.\n" +
    "以及第一天學過的：Hello. / Hi. / My name is ___. / What is your name? / I am ___. / Nice to meet you.\n" +
    "規則：\n" +
    "1. 每次只講一句，然後等我回答。\n" +
    "2. 絕對不要使用清單以外的句子，我是零基礎。\n" +
    "3. 我講錯就直接給我正確的那一句，不要解釋文法。\n" +
    "4. 不要用縮寫（不要寫 I'm，要寫 I am）。\n" +
    "5. 聊完請用 Have a good day. 或 See you. 收尾。\n" +
    "現在請你先跟我打招呼。",
},

{
  day: 3, phase: 1, week: 1,
  title: "數字 0–20：給對方電話號碼",
  scene: "同事 Mark 要跟你交換電話號碼。你講太快，他請你重講一次。",
  dialogue: [
    { who: "Mark", v: "m", en: "Ben, what is your phone number?" },
    { who: "Ben",  v: "m", en: "It is oh-nine-one-two, three-four-five, six-seven-eight." },
    { who: "Mark", v: "m", en: "Slowly, please." },
    { who: "Ben",  v: "m", en: "OK. Zero, nine, one, two." },
    { who: "Mark", v: "m", en: "Zero, nine, one, two. And?" },
    { who: "Ben",  v: "m", en: "Three, four, five, six, seven, eight." },
    { who: "Mark", v: "m", en: "Again, please. The last three." },
    { who: "Ben",  v: "m", en: "Six, seven, eight." },
    { who: "Mark", v: "m", en: "Is that right? Zero, nine, one, two." },
    { who: "Ben",  v: "m", en: "Yes, that is right." },
    { who: "Mark", v: "m", en: "Thank you. Here is my number." },
  ],
  contractions: [
    { full: "Ben, what is your phone number?", short: "Ben, what's your phone number?" },
    { full: "Yes, that is right.", short: "Yes, that's right." },
    { full: "Here is my number.", short: "Here's my number." },
  ],
  fixed: [
    { en: "Slowly, please.", zh: "請說慢一點。", note: "聽不懂時最有用的一句，一定要背" },
    { en: "Again, please.", zh: "請再說一次。", note: "跟 Slowly, please. 是零基礎階段的兩根救命稻草" },
  ],
  drills: [
    { pattern: "My number is ___.", slots: ["one", "two", "three", "four", "five"] },
    { pattern: "It is ___.", slots: ["six", "seven", "eight", "nine", "ten"] },
  ],
  newWords: [
    { t: "phone", zh: "電話", ph: "", from: 0 },
    { t: "number", zh: "號碼", ph: "", from: 0 },
    { t: "it", zh: "它", ph: "", from: 1 },
    { t: "slowly", zh: "慢慢地", ph: "", from: 2 },
    { t: "please", zh: "請", ph: "", from: 2 },
    { t: "zero", zh: "零", ph: "", from: 3 },
    { t: "one", zh: "一", ph: "", from: 3 },
    { t: "two", zh: "二", ph: "", from: 3 },
    { t: "nine", zh: "九", ph: "", from: 3 },
    { t: "three", zh: "三", ph: "", from: 5 },
    { t: "four", zh: "四", ph: "", from: 5 },
    { t: "five", zh: "五", ph: "", from: 5 },
    { t: "six", zh: "六", ph: "", from: 5 },
    { t: "seven", zh: "七", ph: "", from: 5 },
    { t: "eight", zh: "八", ph: "", from: 5 },
    { t: "again", zh: "再一次", ph: "", from: 6 },
    { t: "last", zh: "最後的", ph: "", from: 6 },
    { t: "right", zh: "對的；正確的", ph: "", from: 8 },
    { t: "here", zh: "這裡", ph: "", from: 10 },
  ],
  passage: null,
  check: {
    dictation: ["Ben, what is your phone number?", "Slowly, please.", "Again, please.", "Is that right?", "Yes, that is right."],
    speaking: ["你的電話號碼是幾號？", "請說慢一點。", "請再說一次。", "對，沒錯。"],
    vocab: ["phone", "number", "slowly", "again", "right"],
  },
  aiPrompt:
    "你是 Mark，我的同事。你想跟我交換電話號碼。\n" +
    "請只用英文跟我對話，【只能使用這些句型】：\n" +
    "Ben, what is your phone number? / It is ___. / Slowly, please. / Again, please. / The last three. / And? / Is that right? / Yes, that is right. / My number is ___. / Here is my number. / Thank you.\n" +
    "以及數字 zero 到 twenty（一個一個唸）。\n" +
    "規則：\n" +
    "1. 每次只講一句，然後等我回答。\n" +
    "2. 數字請一個一個唸，不要唸成 nine hundred 這種整數。\n" +
    "3. 請故意有一次沒聽清楚，用 Slowly, please. 或 Again, please. 要我重講——這兩句是我最需要練的。\n" +
    "4. 絕對不要使用清單以外的句子，我是零基礎。\n" +
    "5. 不要用縮寫（不要寫 It's，要寫 It is）。\n" +
    "現在請你先問我電話號碼。",
},

{
  day: 4, phase: 1, week: 1,
  title: "數字 21–100：在便利商店結帳",
  scene: "下班後你去便利商店買東西，在櫃台結帳。",
  dialogue: [
    { who: "Clerk", v: "f", en: "Hello." },
    { who: "Ben",   v: "m", en: "Hello. How much is it?" },
    { who: "Clerk", v: "f", en: "It is eighty-five dollars." },
    { who: "Ben",   v: "m", en: "Eighty-five?" },
    { who: "Clerk", v: "f", en: "Yes. Cash or card?" },
    { who: "Ben",   v: "m", en: "Cash. Here you go." },
    { who: "Clerk", v: "f", en: "Thank you. A bag?" },
    { who: "Ben",   v: "m", en: "Yes, please." },
    { who: "Clerk", v: "f", en: "Have a good day." },
    { who: "Ben",   v: "m", en: "You too." },
  ],
  contractions: [
    { full: "It is eighty-five dollars.", short: "It's eighty-five dollars." },
    { full: "How much is it?", short: "How much is it?（這句本來就沒有可縮的地方，照原樣講）" },
  ],
  fixed: [
    { en: "Here you go.", zh: "（把東西遞給對方時說）給你。", note: "付錢、遞東西都用這句。go 這週還沒教，整句背" },
  ],
  drills: [
    { pattern: "It is ___ dollars.", slots: ["twenty", "thirty-five", "fifty", "sixty-eight", "one hundred"] },
    { pattern: "How much is ___?", slots: ["it", "this", "the coffee", "the bag"] },
  ],
  newWords: [
    { t: "much", zh: "多少", ph: "", from: 1 },
    { t: "eighty", zh: "八十", ph: "", from: 2 },
    { t: "dollars", zh: "元", ph: "", from: 2 },
    { t: "yes", zh: "是的", ph: "", from: 4 },
    { t: "cash", zh: "現金", ph: "", from: 4 },
    { t: "or", zh: "或", ph: "", from: 4 },
    { t: "card", zh: "卡片；信用卡", ph: "", from: 4 },
    { t: "bag", zh: "袋子", ph: "", from: 6 },
    { t: "twenty", zh: "二十", ph: "", from: 2 },
    { t: "thirty", zh: "三十", ph: "", from: 2 },
    { t: "forty", zh: "四十", ph: "", from: 2 },
    { t: "fifty", zh: "五十", ph: "", from: 2 },
    { t: "sixty", zh: "六十", ph: "", from: 2 },
    { t: "seventy", zh: "七十", ph: "", from: 2 },
    { t: "ninety", zh: "九十", ph: "", from: 2 },
    { t: "hundred", zh: "百", ph: "", from: 2 },
  ],
  passage: null,
  check: {
    dictation: ["How much is it?", "It is eighty-five dollars.", "Cash or card?", "A bag?", "Yes, please."],
    speaking: ["這個多少錢？", "八十五元。", "現金還是刷卡？", "好，麻煩你。"],
    vocab: ["much", "dollars", "cash", "card", "bag"],
  },
  aiPrompt:
    "你是便利商店店員。我是來結帳的客人。\n" +
    "請只用英文跟我對話，【你這個角色只能使用這些句型】：\n" +
    "Hello. / It is ___ dollars. / Yes. / Cash or card? / A bag? / Thank you. / Have a good day.\n" +
    "以及數字 twenty 到 one hundred。\n" +
    "規則：\n" +
    "1. 每次只講一句，然後等我回答。\n" +
    "2. 【重要】你是店員，不要講客人的台詞。How much is it? / Here you go. / You too. 那些是我要講的，你不要說。\n" +
    "3. 價格請用 20 到 100 之間的數字。\n" +
    "4. 絕對不要使用清單以外的句子，我是零基礎。\n" +
    "5. 不要用縮寫（不要寫 It's，要寫 It is）。\n" +
    "現在請你先跟我打招呼。",
},

{
  day: 5, phase: 1, week: 1,
  title: "你從哪裡來：跟外國同事聊天（W1 綜合）",
  scene: "公司來了一位加拿大同事 Mike，午休時你們聊了幾句。",
  dialogue: [
    { who: "Mike", v: "m", en: "Hi. I am Mike." },
    { who: "Ben",  v: "m", en: "Hi Mike. My name is Ben. Nice to meet you." },
    { who: "Mike", v: "m", en: "Nice to meet you, too. Where are you from?" },
    { who: "Ben",  v: "m", en: "I am from Taiwan. I am from Taipei." },
    { who: "Mike", v: "m", en: "I am from Canada." },
    { who: "Ben",  v: "m", en: "Are you an engineer?" },
    { who: "Mike", v: "m", en: "No, I am not. I am a teacher." },
    { who: "Mike", v: "m", en: "What about you?" },
    { who: "Ben",  v: "m", en: "I am an engineer." },
    { who: "Mike", v: "m", en: "Nice. See you, Ben." },
    { who: "Ben",  v: "m", en: "See you." },
  ],
  contractions: [
    { full: "I am Mike.", short: "I'm Mike." },
    { full: "I am from Taiwan.", short: "I'm from Taiwan." },
    { full: "No, I am not.", short: "No, I'm not." },
  ],
  fixed: [
    { en: "What do you do?", zh: "你做什麼工作？", note: "美國人問職業最常用這句。do 這週還沒教，先認得就好，自己回答時說 I am an engineer." },
    { en: "What about you?", zh: "那你呢？", note: "把問題丟回去給對方，聊天時一直會用到" },
    { en: "See you.", zh: "再見／回頭見。", note: "see 這週還沒教，整句背" },
  ],
  drills: [
    { pattern: "I am from ___.", slots: ["Taiwan", "Taipei", "Canada", "Japan", "the US"] },
    { pattern: "Are you ___?", slots: ["an engineer", "a teacher", "a doctor", "busy", "tired"] },
    { pattern: "No, I am not. I am ___.", slots: ["a teacher", "an engineer", "a doctor", "busy"] },
  ],
  newWords: [
    { t: "where", zh: "哪裡", ph: "", from: 2 },
    { t: "from", zh: "從", ph: "", from: 2 },
    { t: "Taiwan", zh: "台灣", ph: "", from: 3 },
    { t: "Taipei", zh: "台北", ph: "", from: 3 },
    { t: "Canada", zh: "加拿大", ph: "", from: 4 },
    { t: "an", zh: "一個（母音前）", ph: "", from: 5 },
    { t: "engineer", zh: "工程師", ph: "", from: 5 },
    { t: "no", zh: "不；不是", ph: "", from: 6 },
    { t: "not", zh: "不", ph: "", from: 6 },
    { t: "a", zh: "一個", ph: "", from: 6 },
    { t: "teacher", zh: "老師", ph: "", from: 6 },
    { t: "about", zh: "關於", ph: "", from: 7 },
    { t: "see", zh: "看見", ph: "", from: 9 },
  ],
  passage: {
    en: "My name is Ben. I am from Taipei.\nI am an engineer. I am busy, but I am OK.\nMike is my friend. He is from Canada.\nHe is not an engineer. He is a teacher.",
    zh: "我叫 Ben。我來自台北。\n我是工程師。我很忙，但我還好。\nMike 是我的朋友。他來自加拿大。\n他不是工程師。他是老師。",
  },
  check: {
    dictation: ["Where are you from?", "I am from Taiwan.", "Are you an engineer?", "No, I am not.", "What about you?"],
    speaking: ["你從哪裡來？", "我來自台灣。", "你是工程師嗎？", "不，我不是。", "那你呢？"],
    vocab: ["where", "from", "engineer", "teacher", "about"],
  },
  aiPrompt:
    "你是 Mike，一位從加拿大來的新同事。現在是午休，我們第一次聊天。\n" +
    "請只用英文跟我對話，【只能使用這些句型】：\n" +
    "Hi. / I am ___. / My name is ___. / Nice to meet you. / Nice to meet you, too. / Where are you from? / I am from ___. / Are you ___? / Yes, I am. / No, I am not. / What about you? / Nice. / Have a good day. / You too. / See you.\n" +
    "規則：\n" +
    "1. 每次只講一句，然後等我回答。\n" +
    "2. 我問 Are you ___? 的時候，請有時候回 Yes, I am.、有時候回 No, I am not. 再說你真正的職業——我需要練聽否定回答。\n" +
    "3. 絕對不要使用清單以外的句子，我是零基礎。特別是不要用 What do you do?、Do you like...? 這種 do 開頭的問句，我還沒學到。\n" +
    "4. 我講錯就直接給我正確的那一句，不要解釋文法。\n" +
    "5. 不要用縮寫（不要寫 I'm，要寫 I am）。\n" +
    "6. 聊到最後請用 See you. 跟我道別。\n" +
    "現在請你先自我介紹。",
},

];

// ═══════════════════════════════════════════════════════
// P6 第一批：Day 6–14（W1 收尾＋W2 家裡、家人、物品位置）
// ═══════════════════════════════════════════════════════
function makeLesson(spec) {
  const dialogue = spec.dialogue.map(([who, v, en]) => ({ who, v, en }));
  const newWords = spec.newWords.map(([t, zh, from]) => ({ t, zh, ph: "", from }));
  return {
    day: spec.day, phase: spec.phase || 1, week: spec.week, title: spec.title, scene: spec.scene,
    dialogue,
    contractions: spec.contractions || [],
    fixed: spec.fixed || [],
    drills: spec.drills,
    newWords,
    passage: spec.passage || null,
    check: {
      dictation: (spec.dictation || dialogue.slice(0, 5).map((line) => line.en)),
      speaking: spec.speaking,
      vocab: (spec.vocab || newWords.slice(0, 10).map((word) => word.t)),
    },
    aiPrompt:
      `${spec.scene}\n請扮演對話中的另一個角色，只用下列句子與我做英文對話：\n` +
      dialogue.map((line) => line.en).join(" / ") +
      "\n每次只說一句並等我回答。我說錯時，直接提供正確句子。不要使用縮寫，也不要解釋文法。",
  };
}

COURSE_PACK.push(
  makeLesson({
    day: 6, week: 1, title: "W1 綜合：認識新同事", scene: "公司新人說明會，你跟三位新同事交換基本資料。",
    dialogue: [
      ["Amy", "f", "Hello. My name is Amy."], ["Ben", "m", "Hi Amy. I am Ben."],
      ["Amy", "f", "Nice to meet you, Ben."], ["Ben", "m", "Nice to meet you, too."],
      ["Amy", "f", "Where are you from?"], ["Ben", "m", "I am from Taiwan."],
      ["Amy", "f", "Are you an engineer?"], ["Ben", "m", "Yes, I am an engineer."],
    ],
    contractions: [
      { full: "My name is Amy.", short: "My name's Amy." },
      { full: "I am from Taiwan.", short: "I'm from Taiwan." },
    ],
    fixed: [{ en: "Nice to meet you.", zh: "很高興認識你。", note: "整句複習" }],
    drills: [
      { pattern: "My name is ___.", slots: ["Amy", "Ben", "Lisa", "John", "Eric"] },
      { pattern: "I am from ___.", slots: ["Taiwan", "Japan", "Canada", "Korea", "Taipei"] },
      { pattern: "I am an ___.", slots: ["engineer", "artist", "owner", "assistant"] },
    ],
    newWords: [],
    speaking: ["我叫 Ben。", "我來自台灣。", "我是工程師。"],
  }),
  makeLesson({
    day: 7, week: 1, title: "W1 週考：自我介紹與數字", scene: "完成第一週聽說讀寫週考，檢查自我介紹與數字是否熟練。",
    dialogue: [
      ["Teacher", "f", "Hello. What is your name?"], ["Ben", "m", "My name is Ben."],
      ["Teacher", "f", "Where are you from?"], ["Ben", "m", "I am from Taipei."],
      ["Teacher", "f", "What is your phone number?"], ["Ben", "m", "It is zero-nine-one-two."],
      ["Teacher", "f", "Are you an engineer?"], ["Ben", "m", "Yes, I am."],
    ],
    contractions: [
      { full: "What is your name?", short: "What's your name?" },
      { full: "I am from Taipei.", short: "I'm from Taipei." },
    ],
    drills: [
      { pattern: "My name is ___.", slots: ["Ben", "Amy", "John", "Lisa"] },
      { pattern: "I am from ___.", slots: ["Taipei", "Tainan", "Taiwan", "Canada"] },
    ],
    newWords: [],
    speaking: ["說出你的名字。", "說出你來自哪裡。", "慢慢說出電話號碼。"],
    passage: { en: "My name is Ben. I am from Taipei. I am an engineer. My phone number is zero-nine-one-two.", zh: "我叫 Ben。我來自台北。我是工程師。我的電話號碼是 0912。" },
  }),
  makeLesson({
    day: 8, week: 2, title: "介紹家人", scene: "午休時，你拿出手機裡的家庭照片給同事看。",
    dialogue: [
      ["Sara", "f", "Who is this?"], ["Ben", "m", "This is my wife, May."],
      ["Sara", "f", "Is this your son?"], ["Ben", "m", "Yes. His name is Leo."],
      ["Sara", "f", "Who is that?"], ["Ben", "m", "That is my daughter, Ann."],
      ["Sara", "f", "Your family is lovely."], ["Ben", "m", "Thank you."],
    ],
    contractions: [
      { full: "Who is this?", short: "Who's this?" },
      { full: "That is my daughter, Ann.", short: "That's my daughter, Ann." },
    ],
    drills: [
      { pattern: "This is my ___.", slots: ["wife", "husband", "son", "daughter", "mother"] },
      { pattern: "His name is ___.", slots: ["Leo", "Tom", "Jack", "Eric"] },
    ],
    newWords: [["who", "誰", 0], ["this", "這個", 0], ["wife", "妻子", 1], ["son", "兒子", 2], ["his", "他的", 3], ["that", "那個", 4], ["daughter", "女兒", 5], ["family", "家人；家庭", 6], ["lovely", "可愛的；令人喜愛的", 6]],
    speaking: ["這是我的妻子。", "這是你的兒子嗎？", "那是我的女兒。"],
  }),
  makeLesson({
    day: 9, week: 2, title: "家裡有哪些人", scene: "新同事問你和誰一起住。",
    dialogue: [
      ["Mike", "m", "Is your family big?"], ["Ben", "m", "No. My family is small."],
      ["Mike", "m", "How many people are there?"], ["Ben", "m", "There are four people."],
      ["Mike", "m", "Do you have a brother?"], ["Ben", "m", "Yes. I have one brother."],
      ["Mike", "m", "Do you have a sister?"], ["Ben", "m", "No, I do not."],
    ],
    contractions: [
      { full: "There are four people.", short: "There're four people." },
      { full: "No, I do not.", short: "No, I don't." },
    ],
    fixed: [{ en: "How many people are there?", zh: "有幾個人？", note: "整句背" }],
    drills: [
      { pattern: "There are ___ people.", slots: ["two", "three", "four", "five", "six"] },
      { pattern: "I have one ___.", slots: ["brother", "sister", "son", "daughter"] },
    ],
    newWords: [["big", "大的", 0], ["small", "小的", 1], ["many", "許多", 2], ["people", "人", 2], ["there", "那裡；有", 2], ["four", "四", 3], ["have", "有", 4], ["brother", "兄弟", 4], ["sister", "姊妹", 6]],
    speaking: ["我的家庭很小。", "家裡有四個人。", "我有一個兄弟。"],
  }),
  makeLesson({
    day: 10, week: 2, title: "家裡的房間", scene: "朋友第一次來你家，你帶他看看各個房間。",
    dialogue: [
      ["Ben", "m", "This is the living room."], ["Tom", "m", "It is very bright."],
      ["Ben", "m", "The kitchen is over there."], ["Tom", "m", "Is that the bathroom?"],
      ["Ben", "m", "No. That is the bedroom."], ["Tom", "m", "Where is the bathroom?"],
      ["Ben", "m", "It is next to the bedroom."], ["Tom", "m", "Your home is nice."],
    ],
    contractions: [
      { full: "It is very bright.", short: "It's very bright." },
      { full: "Where is the bathroom?", short: "Where's the bathroom?" },
    ],
    drills: [
      { pattern: "This is the ___.", slots: ["kitchen", "bedroom", "bathroom", "living room"] },
      { pattern: "The ___ is over there.", slots: ["kitchen", "door", "table", "chair"] },
    ],
    newWords: [["living", "居住的；客廳（見 living room）", 0], ["room", "房間", 0], ["bright", "明亮的", 1], ["kitchen", "廚房", 2], ["bathroom", "浴室", 3], ["bedroom", "臥室", 4], ["next", "下一個；緊鄰", 6], ["home", "家", 7]],
    speaking: ["這是客廳。", "廚房在那裡。", "浴室在哪裡？"],
  }),
  makeLesson({
    day: 11, week: 2, title: "房間裡的物品", scene: "你和室友整理客廳，確認每樣物品。",
    dialogue: [
      ["Amy", "f", "What is this?"], ["Ben", "m", "It is a lamp."],
      ["Amy", "f", "Is that a new table?"], ["Ben", "m", "Yes. It is new."],
      ["Amy", "f", "Where is the chair?"], ["Ben", "m", "It is by the window."],
      ["Amy", "f", "The room looks good."], ["Ben", "m", "Yes. It is clean now."],
    ],
    contractions: [
      { full: "What is this?", short: "What's this?" },
      { full: "It is by the window.", short: "It's by the window." },
    ],
    drills: [
      { pattern: "It is a ___.", slots: ["lamp", "table", "chair", "sofa", "clock"] },
      { pattern: "It is by the ___.", slots: ["window", "door", "table", "sofa"] },
    ],
    newWords: [["lamp", "燈", 1], ["new", "新的", 2], ["table", "桌子", 2], ["chair", "椅子", 4], ["window", "窗戶", 5], ["looks", "看起來", 6], ["clean", "乾淨的", 7], ["now", "現在", 7]],
    speaking: ["這是一盞燈。", "那是一張新桌子嗎？", "椅子在窗戶旁。"],
  }),
  makeLesson({
    day: 12, week: 2, title: "東西放在哪裡", scene: "出門前找不到鑰匙，你請家人一起找。",
    dialogue: [
      ["Ben", "m", "Where are my keys?"], ["May", "f", "They are on the table."],
      ["Ben", "m", "They are not there."], ["May", "f", "Look under the book."],
      ["Ben", "m", "I see them now."], ["May", "f", "Is your phone in the bag?"],
      ["Ben", "m", "Yes. It is in the bag."], ["May", "f", "Good. We can go."],
    ],
    contractions: [
      { full: "Where are my keys?", short: "Where're my keys?" },
      { full: "They are on the table.", short: "They're on the table." },
    ],
    fixed: [{ en: "Look under the book.", zh: "看看書下面。", note: "整句背" }],
    drills: [
      { pattern: "It is on the ___.", slots: ["table", "chair", "sofa", "bed"] },
      { pattern: "It is in the ___.", slots: ["bag", "box", "room", "car"] },
      { pattern: "It is under the ___.", slots: ["book", "table", "chair", "bed"] },
    ],
    newWords: [["keys", "鑰匙", 0], ["they", "他們；它們", 1], ["on", "在上面", 1], ["under", "在下面", 3], ["book", "書", 3], ["them", "他們；它們（受詞）", 4], ["phone", "電話", 5], ["in", "在裡面", 5], ["go", "走；前往", 7]],
    speaking: ["我的鑰匙在哪裡？", "鑰匙在桌上。", "手機在袋子裡。"],
  }),
  makeLesson({
    day: 13, week: 2, title: "帶客人參觀住家", scene: "外國朋友第一次來，你用簡單英文介紹住家。",
    dialogue: [
      ["Ben", "m", "Welcome to my home."], ["Lisa", "f", "Thank you. It is lovely."],
      ["Ben", "m", "There is a kitchen here."], ["Lisa", "f", "Where is the living room?"],
      ["Ben", "m", "It is next to the kitchen."], ["Lisa", "f", "Is there a balcony?"],
      ["Ben", "m", "Yes. It is over there."], ["Lisa", "f", "The view is beautiful."],
    ],
    contractions: [
      { full: "There is a kitchen here.", short: "There's a kitchen here." },
      { full: "It is next to the kitchen.", short: "It's next to the kitchen." },
    ],
    fixed: [{ en: "Welcome to my home.", zh: "歡迎來我家。", note: "招呼客人的固定說法" }],
    drills: [
      { pattern: "There is a ___ here.", slots: ["kitchen", "bathroom", "bedroom", "balcony"] },
      { pattern: "Is there a ___?", slots: ["balcony", "table", "window", "sofa"] },
    ],
    newWords: [["welcome", "歡迎", 0], ["here", "這裡", 2], ["balcony", "陽台", 5], ["view", "景色", 7], ["beautiful", "美麗的", 7]],
    speaking: ["歡迎來我家。", "這裡有一間廚房。", "有陽台嗎？"],
    passage: { en: "This is my home. There is a living room and a kitchen. My bedroom is next to the bathroom. The balcony is small, but the view is beautiful.", zh: "這是我家。這裡有客廳和廚房。我的臥室在浴室旁。陽台很小，但景色很美。" },
  }),
  makeLesson({
    day: 14, week: 2, title: "W2 週考：家人與住家", scene: "完成第二週週考，介紹家人並說明家中物品的位置。",
    dialogue: [
      ["Teacher", "f", "Who is this?"], ["Ben", "m", "This is my daughter."],
      ["Teacher", "f", "How many people are there?"], ["Ben", "m", "There are four people."],
      ["Teacher", "f", "Where are your keys?"], ["Ben", "m", "They are on the table."],
      ["Teacher", "f", "Is there a balcony?"], ["Ben", "m", "Yes. It is over there."],
    ],
    contractions: [
      { full: "Who is this?", short: "Who's this?" },
      { full: "They are on the table.", short: "They're on the table." },
    ],
    drills: [
      { pattern: "This is my ___.", slots: ["wife", "son", "daughter", "brother"] },
      { pattern: "It is on the ___.", slots: ["table", "chair", "sofa", "bed"] },
      { pattern: "There are ___ people.", slots: ["two", "three", "four", "five"] },
    ],
    newWords: [],
    speaking: ["介紹一位家人。", "說出家裡有幾個人。", "說出鑰匙的位置。"],
    passage: { en: "My family has four people. This is my wife, and this is my daughter. We have a small home. The keys are on the table. The phone is in the bag.", zh: "我家有四個人。這是我的妻子，這是我的女兒。我們有一個小家。鑰匙在桌上。手機在袋子裡。" },
  }),
);

// ═══════════════════════════════════════════════════════
// P6 第三批：Day 22–28（W4 食物、點餐、買東西）
// ═══════════════════════════════════════════════════════
COURSE_PACK.push(
  makeLesson({
    day: 22, week: 4, title: "看懂早餐菜單", scene: "上班前到早餐店，你向店員詢問菜單內容。",
    dialogue: [
      ["Clerk", "f", "Good morning. Here is the menu."], ["Ben", "m", "Thank you. What is this?"],
      ["Clerk", "f", "It is an egg sandwich."], ["Ben", "m", "Is it hot?"],
      ["Clerk", "f", "Yes. It is hot and fresh."], ["Ben", "m", "What is that drink?"],
      ["Clerk", "f", "That is orange juice."], ["Ben", "m", "The juice looks good."],
    ],
    contractions: [
      { full: "It is an egg sandwich.", short: "It's an egg sandwich." },
      { full: "That is orange juice.", short: "That's orange juice." },
    ],
    drills: [
      { pattern: "It is a ___.", slots: ["sandwich", "salad", "bagel", "cake"] },
      { pattern: "That is ___ juice.", slots: ["orange", "apple", "grape", "lemon"] },
    ],
    newWords: [["menu", "菜單", 0], ["egg", "蛋", 2], ["sandwich", "三明治", 2], ["hot", "熱的", 3], ["fresh", "新鮮的", 4], ["drink", "飲料", 5], ["orange", "柳橙", 6], ["juice", "果汁", 6]],
    speaking: ["這是什麼？", "這是蛋三明治。", "那是柳橙汁。"],
  }),
  makeLesson({
    day: 23, week: 4, title: "點一份早餐", scene: "你決定好早餐，向店員點餐並確認價格。",
    dialogue: [
      ["Clerk", "f", "What would you like?"], ["Ben", "m", "I would like a sandwich."],
      ["Clerk", "f", "Would you like a drink?"], ["Ben", "m", "Yes. Orange juice, please."],
      ["Clerk", "f", "Anything else?"], ["Ben", "m", "No, thank you."],
      ["Clerk", "f", "It is ninety dollars."], ["Ben", "m", "Here you go."],
    ],
    contractions: [],
    fixed: [
      { en: "What would you like?", zh: "你想要什麼？", note: "店員常用問法，整句背" },
      { en: "Anything else?", zh: "還需要別的嗎？", note: "結帳前常聽到" },
    ],
    drills: [
      { pattern: "I would like a ___.", slots: ["sandwich", "bagel", "salad", "coffee"] },
      { pattern: "___, please.", slots: ["Orange juice", "Hot tea", "A coffee", "A bag"] },
    ],
    newWords: [["would", "會；在 would like 表示想要", 0], ["like", "喜歡；想要", 0], ["anything", "任何東西", 4], ["else", "其他", 4], ["ninety", "九十", 6]],
    speaking: ["我想要一份三明治。", "我要柳橙汁，謝謝。", "不用了，謝謝。"],
  }),
  makeLesson({
    day: 24, week: 4, title: "在咖啡店點餐", scene: "午休時到咖啡店，完成尺寸、冷熱與內用外帶的點餐。",
    dialogue: [
      ["Clerk", "f", "Hi. What can I get you?"], ["Ben", "m", "A coffee, please."],
      ["Clerk", "f", "Hot or iced?"], ["Ben", "m", "Hot, please."],
      ["Clerk", "f", "Small, medium, or large?"], ["Ben", "m", "Medium."],
      ["Clerk", "f", "For here or to go?"], ["Ben", "m", "To go, please."],
      ["Clerk", "f", "Anything else?"], ["Ben", "m", "No, that's it."],
      ["Ben", "m", "How much is it?"], ["Clerk", "f", "Four fifty. Card or cash?"],
      ["Ben", "m", "Card, please."], ["Clerk", "f", "Here you go. Have a good day."],
      ["Ben", "m", "Thank you. You too."],
    ],
    contractions: [{ full: "What can I get you?", short: "What can I getcha?" }],
    fixed: [
      { en: "For here or to go?", zh: "內用還是外帶？", note: "整句背" },
      { en: "No, that's it.", zh: "不用了，就這些。", note: "固定慣用語" },
    ],
    drills: [
      { pattern: "A ___, please.", slots: ["coffee", "tea", "bagel", "water", "sandwich"] },
      { pattern: "___, please.", slots: ["Hot", "Iced", "Medium", "To go", "For here"] },
    ],
    newWords: [["coffee", "咖啡", 1], ["iced", "冰的", 2], ["medium", "中杯；中等的", 4], ["large", "大杯；大的", 4], ["card", "卡片；信用卡", 11]],
    speaking: ["我要一杯咖啡。", "熱的，謝謝。", "外帶，謝謝。"],
  }),
  makeLesson({
    day: 25, week: 4, title: "說出喜歡與不喜歡", scene: "午餐時，同事詢問你喜歡哪些食物。",
    dialogue: [
      ["Sara", "f", "Do you like spicy food?"], ["Ben", "m", "Yes. I like spicy food."],
      ["Sara", "f", "Do you like fish?"], ["Ben", "m", "No. I do not like fish."],
      ["Sara", "f", "What food do you like?"], ["Ben", "m", "I like chicken and rice."],
      ["Sara", "f", "That sounds good."], ["Ben", "m", "It is my favorite meal."],
    ],
    contractions: [
      { full: "I do not like fish.", short: "I don't like fish." },
      { full: "It is my favorite meal.", short: "It's my favorite meal." },
    ],
    drills: [
      { pattern: "I like ___.", slots: ["chicken", "rice", "fish", "noodles", "salad"] },
      { pattern: "I do not like ___.", slots: ["spicy food", "fish", "milk", "cheese"] },
    ],
    newWords: [["spicy", "辣的", 0], ["food", "食物", 0], ["fish", "魚", 2], ["chicken", "雞肉", 5], ["rice", "米飯", 5], ["sounds", "聽起來", 6], ["favorite", "最喜歡的", 7], ["meal", "一餐", 7]],
    speaking: ["我喜歡辣的食物。", "我不喜歡魚。", "我喜歡雞肉和米飯。"],
  }),
  makeLesson({
    day: 26, week: 4, title: "在超市買東西", scene: "下班後到超市，你向店員詢問商品位置和價格。",
    dialogue: [
      ["Ben", "m", "Excuse me. Where is the milk?"], ["Clerk", "f", "It is by the bread."],
      ["Ben", "m", "Where are the apples?"], ["Clerk", "f", "They are over there."],
      ["Ben", "m", "How much are these apples?"], ["Clerk", "f", "They are sixty dollars."],
      ["Ben", "m", "I will take four."], ["Clerk", "f", "Do you need a bag?"],
    ],
    contractions: [
      { full: "It is by the bread.", short: "It's by the bread." },
      { full: "They are over there.", short: "They're over there." },
      { full: "I will take four.", short: "I'll take four." },
    ],
    fixed: [
      { en: "Excuse me.", zh: "不好意思。", note: "開口詢問前先說" },
      { en: "I will take four.", zh: "我要買四個。", note: "will 在這裡整句背" },
    ],
    drills: [
      { pattern: "Where is the ___?", slots: ["milk", "bread", "cheese", "rice"] },
      { pattern: "I will take ___.", slots: ["one", "two", "three", "four"] },
    ],
    newWords: [["excuse", "原諒；在 Excuse me 表示不好意思", 0], ["milk", "牛奶", 0], ["bread", "麵包", 1], ["apples", "蘋果", 2], ["these", "這些", 4], ["sixty", "六十", 5], ["need", "需要", 7]],
    speaking: ["不好意思，牛奶在哪裡？", "這些蘋果多少錢？", "我要買四個。"],
  }),
  makeLesson({
    day: 27, week: 4, title: "結帳與確認金額", scene: "你在超市櫃台結帳，確認總金額與付款方式。",
    dialogue: [
      ["Cashier", "f", "Hello. Do you need a bag?"], ["Ben", "m", "Yes, please."],
      ["Cashier", "f", "Your total is three hundred."], ["Ben", "m", "Three hundred dollars?"],
      ["Cashier", "f", "Yes. Card or cash?"], ["Ben", "m", "Card, please."],
      ["Cashier", "f", "Please tap your card here."], ["Ben", "m", "OK. Is that all?"],
      ["Cashier", "f", "Yes. Here is your receipt."], ["Ben", "m", "Thank you."],
    ],
    contractions: [],
    fixed: [
      { en: "Please tap your card here.", zh: "請在這裡感應卡片。", note: "結帳常用句" },
      { en: "Here is your receipt.", zh: "這是你的收據。", note: "整句背" },
    ],
    drills: [
      { pattern: "Your total is ___.", slots: ["one hundred", "two hundred", "three hundred", "five hundred"] },
      { pattern: "___, please.", slots: ["Card", "Cash", "A bag", "The receipt"] },
    ],
    newWords: [["total", "總金額", 2], ["three", "三", 2], ["hundred", "百", 2], ["tap", "輕觸；感應", 6], ["receipt", "收據", 8]],
    speaking: ["需要袋子嗎？", "總共三百元。", "刷卡，謝謝。"],
    passage: { en: "I go to the supermarket after work. I buy milk, bread, and four apples. The total is three hundred dollars. I pay by card and take my receipt.", zh: "我下班後去超市。我買牛奶、麵包和四顆蘋果。總共三百元。我刷卡付款並拿收據。" },
  }),
  makeLesson({
    day: 28, week: 4, title: "W4 週考：點餐與購物", scene: "完成第四週週考，從點餐一路練到付款。",
    dialogue: [
      ["Clerk", "f", "What would you like?"], ["Ben", "m", "A coffee and a sandwich, please."],
      ["Clerk", "f", "For here or to go?"], ["Ben", "m", "To go, please."],
      ["Clerk", "f", "Anything else?"], ["Ben", "m", "No, that's it."],
      ["Clerk", "f", "Your total is one hundred."], ["Ben", "m", "Card, please."],
    ],
    contractions: [],
    fixed: [{ en: "No, that's it.", zh: "不用了，就這些。", note: "固定慣用語" }],
    drills: [
      { pattern: "A ___, please.", slots: ["coffee", "sandwich", "bagel", "salad"] },
      { pattern: "I like ___.", slots: ["coffee", "chicken", "rice", "fish"] },
      { pattern: "I do not like ___.", slots: ["fish", "milk", "cheese", "spicy food"] },
    ],
    newWords: [],
    speaking: ["完成一組點餐。", "說出喜歡與不喜歡的食物。", "確認金額並選付款方式。"],
    passage: { en: "I would like a hot coffee and a sandwich. I do not need a bag. My total is one hundred dollars. I pay by card. The food is fresh and good.", zh: "我想要熱咖啡和三明治。我不需要袋子。總共一百元。我刷卡付款。食物新鮮又好吃。" },
  }),
);

// ═══════════════════════════════════════════════════════
// P6 第二批：Day 15–21（W3 每日作息、時間、星期）
// ═══════════════════════════════════════════════════════
COURSE_PACK.push(
  makeLesson({
    day: 15, week: 3, title: "早上的生活作息", scene: "早餐時間，你跟室友說明平日早上的作息。",
    dialogue: [
      ["Amy", "f", "What time do you get up?"], ["Ben", "m", "I get up at six."],
      ["Amy", "f", "What do you do next?"], ["Ben", "m", "I brush my teeth."],
      ["Amy", "f", "Do you eat breakfast?"], ["Ben", "m", "Yes. I eat at seven."],
      ["Amy", "f", "When do you leave home?"], ["Ben", "m", "I leave at seven thirty."],
    ],
    contractions: [],
    fixed: [{ en: "What do you do next?", zh: "你接下來做什麼？", note: "整句背" }],
    drills: [
      { pattern: "I get up at ___.", slots: ["six", "six thirty", "seven", "seven thirty"] },
      { pattern: "I ___ at seven.", slots: ["eat", "shower", "leave", "exercise"] },
    ],
    newWords: [["time", "時間", 0], ["get", "取得；在 get up 表示起床", 0], ["up", "向上；在 get up 表示起床", 0], ["brush", "刷", 3], ["teeth", "牙齒", 3], ["eat", "吃", 4], ["breakfast", "早餐", 4], ["when", "何時", 6], ["leave", "離開", 6], ["thirty", "三十", 7]],
    speaking: ["我六點起床。", "我刷牙。", "我七點半離開家。"],
  }),
  makeLesson({
    day: 16, week: 3, title: "詢問現在時間", scene: "辦公室的時鐘停了，你向同事詢問時間。",
    dialogue: [
      ["Ben", "m", "What time is it?"], ["Sara", "f", "It is nine fifteen."],
      ["Ben", "m", "Is the meeting at ten?"], ["Sara", "f", "No. It is at nine thirty."],
      ["Ben", "m", "Am I late?"], ["Sara", "f", "No. You have fifteen minutes."],
      ["Ben", "m", "Thank you. I am ready."], ["Sara", "f", "Good. We can go now."],
    ],
    contractions: [
      { full: "It is nine fifteen.", short: "It's nine fifteen." },
      { full: "I am ready.", short: "I'm ready." },
    ],
    drills: [
      { pattern: "It is ___.", slots: ["nine", "nine fifteen", "nine thirty", "nine forty-five"] },
      { pattern: "The meeting is at ___.", slots: ["nine", "ten", "eleven", "one"] },
    ],
    newWords: [["meeting", "會議", 2], ["ten", "十", 2], ["late", "遲到的", 4], ["fifteen", "十五", 5], ["minutes", "分鐘", 5], ["ready", "準備好的", 6]],
    speaking: ["現在幾點？", "現在九點十五分。", "會議在九點半。"],
  }),
  makeLesson({
    day: 17, week: 3, title: "怎麼去上班", scene: "同事在電梯裡問你每天怎麼到公司。",
    dialogue: [
      ["Tom", "m", "How do you go to work?"], ["Ben", "m", "I take the bus."],
      ["Tom", "m", "Is the bus fast?"], ["Ben", "m", "Yes. It takes thirty minutes."],
      ["Tom", "m", "Do you drive sometimes?"], ["Ben", "m", "No, I do not drive."],
      ["Tom", "m", "I ride my bike."], ["Ben", "m", "That is good exercise."],
    ],
    contractions: [{ full: "No, I do not drive.", short: "No, I don't drive." }],
    fixed: [{ en: "I take the bus.", zh: "我搭公車。", note: "交通工具用 take" }],
    drills: [
      { pattern: "I take the ___.", slots: ["bus", "train", "subway", "taxi"] },
      { pattern: "I ___ to work.", slots: ["drive", "walk", "ride", "run"] },
    ],
    newWords: [["work", "工作；上班", 0], ["take", "搭乘；花費", 1], ["bus", "公車", 1], ["fast", "快的", 2], ["takes", "花費（時間）", 3], ["drive", "開車", 4], ["sometimes", "有時候", 4], ["ride", "騎乘", 6], ["bike", "腳踏車", 6], ["exercise", "運動", 7]],
    speaking: ["我搭公車上班。", "車程要三十分鐘。", "我不開車。"],
  }),
  makeLesson({
    day: 18, week: 3, title: "一天的工作時間", scene: "新同事詢問公司的上下班和午休時間。",
    dialogue: [
      ["Amy", "f", "When does work start?"], ["Ben", "m", "Work starts at eight thirty."],
      ["Amy", "f", "When is lunch?"], ["Ben", "m", "Lunch is at twelve."],
      ["Amy", "f", "What time does work end?"], ["Ben", "m", "It ends at five thirty."],
      ["Amy", "f", "Do we work late?"], ["Ben", "m", "Sometimes, but not every day."],
    ],
    contractions: [],
    drills: [
      { pattern: "Work starts at ___.", slots: ["eight", "eight thirty", "nine", "nine thirty"] },
      { pattern: "___ is at twelve.", slots: ["Lunch", "The meeting", "The class", "My break"] },
    ],
    newWords: [["start", "開始", 0], ["starts", "開始（第三人稱）", 1], ["lunch", "午餐", 2], ["twelve", "十二", 3], ["end", "結束", 4], ["ends", "結束（第三人稱）", 5], ["five", "五", 5], ["every", "每一個", 7]],
    speaking: ["工作八點半開始。", "午餐在十二點。", "工作五點半結束。"],
  }),
  makeLesson({
    day: 19, week: 3, title: "星期與工作安排", scene: "你和同事確認本週每天的工作安排。",
    dialogue: [
      ["Sara", "f", "What day is it today?"], ["Ben", "m", "Today is Monday."],
      ["Sara", "f", "Is the meeting on Tuesday?"], ["Ben", "m", "Yes. It is on Tuesday."],
      ["Sara", "f", "What happens on Wednesday?"], ["Ben", "m", "We visit a customer."],
      ["Sara", "f", "Are you free on Thursday?"], ["Ben", "m", "Yes. Thursday is free."],
    ],
    contractions: [
      { full: "It is on Tuesday.", short: "It's on Tuesday." },
    ],
    fixed: [{ en: "What happens on Wednesday?", zh: "星期三有什麼安排？", note: "整句背" }],
    drills: [
      { pattern: "Today is ___.", slots: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
      { pattern: "The meeting is on ___.", slots: ["Monday", "Tuesday", "Wednesday", "Friday"] },
    ],
    newWords: [["Monday", "星期一", 1], ["Tuesday", "星期二", 2], ["happens", "發生", 4], ["Wednesday", "星期三", 4], ["visit", "拜訪", 5], ["customer", "客戶", 5], ["free", "有空的", 6], ["Thursday", "星期四", 6]],
    speaking: ["今天星期一。", "會議在星期二。", "星期四我有空。"],
  }),
  makeLesson({
    day: 20, week: 3, title: "下班後與週末", scene: "星期五下午，你跟同事聊下班後和週末安排。",
    dialogue: [
      ["Mike", "m", "What do you do after work?"], ["Ben", "m", "I go home and rest."],
      ["Mike", "m", "Do you cook dinner?"], ["Ben", "m", "Yes. I cook at seven."],
      ["Mike", "m", "What about Friday night?"], ["Ben", "m", "I watch a movie."],
      ["Mike", "m", "Do you work on Saturday?"], ["Ben", "m", "No. Saturday is my day off."],
    ],
    contractions: [],
    fixed: [{ en: "Saturday is my day off.", zh: "星期六是我的休假日。", note: "day off 表示休假日" }],
    drills: [
      { pattern: "I ___ after work.", slots: ["rest", "cook", "walk", "exercise"] },
      { pattern: "I ___ on Saturday.", slots: ["rest", "shop", "cook", "clean"] },
    ],
    newWords: [["after", "在之後", 0], ["rest", "休息", 1], ["cook", "煮飯", 2], ["dinner", "晚餐", 2], ["Friday", "星期五", 4], ["night", "晚上", 4], ["watch", "觀看", 5], ["movie", "電影", 5], ["Saturday", "星期六", 6], ["off", "休假的；離開", 7]],
    speaking: ["我下班後回家休息。", "我七點煮晚餐。", "星期六是我的休假日。"],
    passage: { en: "I work from Monday to Friday. I get up at six. I take the bus to work. Work starts at eight thirty. I go home at five thirty. I rest on Saturday.", zh: "我從星期一工作到星期五。我六點起床，搭公車上班。工作八點半開始。我五點半回家，星期六休息。" },
  }),
  makeLesson({
    day: 21, week: 3, title: "W3 週考：作息與時間", scene: "完成第三週週考，說明一天作息與本週安排。",
    dialogue: [
      ["Teacher", "f", "What time do you get up?"], ["Ben", "m", "I get up at six."],
      ["Teacher", "f", "How do you go to work?"], ["Ben", "m", "I take the bus."],
      ["Teacher", "f", "When does work start?"], ["Ben", "m", "It starts at eight thirty."],
      ["Teacher", "f", "Do you work on Saturday?"], ["Ben", "m", "No. Saturday is my day off."],
    ],
    contractions: [],
    drills: [
      { pattern: "I get up at ___.", slots: ["six", "seven", "eight"] },
      { pattern: "I take the ___.", slots: ["bus", "train", "subway"] },
      { pattern: "Work starts at ___.", slots: ["eight", "eight thirty", "nine"] },
    ],
    newWords: [],
    speaking: ["說出起床時間。", "說出上班交通方式。", "說出星期六的安排。"],
    passage: { en: "Today is Monday. I get up at six and eat breakfast. I take the bus at seven thirty. Work starts at eight thirty. Lunch is at twelve. I go home after work.", zh: "今天星期一。我六點起床並吃早餐。七點半搭公車。八點半開始工作，十二點吃午餐。下班後回家。" },
  }),
);

// ═══════════════════════════════════════════════════════
// P6 第四批：Day 29–35（W5 天氣、身體不舒服、Phase 1 階段考）
// ═══════════════════════════════════════════════════════
COURSE_PACK.push(
  makeLesson({
    day: 29, week: 5, title: "談今天的天氣", scene: "早上進辦公室，你跟同事聊今天的天氣。",
    dialogue: [
      ["Sara", "f", "Good morning. How is the weather?"], ["Ben", "m", "It is hot and sunny."],
      ["Sara", "f", "Is it hot outside?"], ["Ben", "m", "Yes. It is very hot."],
      ["Sara", "f", "Do you like hot weather?"], ["Ben", "m", "No. I like cool weather."],
      ["Sara", "f", "The office is cool today."], ["Ben", "m", "Yes. It feels good."],
    ],
    contractions: [
      { full: "It is hot and sunny.", short: "It's hot and sunny." },
      { full: "It is very hot.", short: "It's very hot." },
    ],
    drills: [
      { pattern: "It is ___ today.", slots: ["hot", "cold", "warm", "cool", "sunny"] },
      { pattern: "I like ___ weather.", slots: ["warm", "cool", "sunny", "cold"] },
    ],
    newWords: [["weather", "天氣", 0], ["hot", "熱的", 1], ["sunny", "晴朗的", 1], ["outside", "外面", 2], ["cool", "涼爽的", 5], ["office", "辦公室", 6], ["feels", "感覺起來", 7]],
    speaking: ["今天天氣很熱。", "外面是晴天。", "我喜歡涼爽的天氣。"],
  }),
  makeLesson({
    day: 30, week: 5, title: "下雨與準備外出", scene: "下班前開始下雨，你和同事準備離開公司。",
    dialogue: [
      ["Mike", "m", "Look outside. It is raining."], ["Ben", "m", "Oh no. I need an umbrella."],
      ["Mike", "m", "Do you have a jacket?"], ["Ben", "m", "Yes. It is in my car."],
      ["Mike", "m", "The wind is strong."], ["Ben", "m", "Is it cold outside?"],
      ["Mike", "m", "Yes. Please wear your jacket."], ["Ben", "m", "Thank you. I will wear it."],
    ],
    contractions: [
      { full: "It is raining.", short: "It's raining." },
      { full: "I will wear it.", short: "I'll wear it." },
    ],
    fixed: [{ en: "Please wear your jacket.", zh: "請穿上外套。", note: "整句背" }],
    drills: [
      { pattern: "I need an ___.", slots: ["umbrella", "umbrella now", "extra jacket"] },
      { pattern: "It is ___ outside.", slots: ["cold", "windy", "raining", "dark"] },
    ],
    newWords: [["raining", "正在下雨", 0], ["umbrella", "雨傘", 1], ["jacket", "外套", 2], ["car", "汽車", 3], ["wind", "風", 4], ["strong", "強的", 4], ["cold", "冷的", 5], ["wear", "穿著", 6]],
    speaking: ["外面正在下雨。", "我需要一把雨傘。", "請穿上你的外套。"],
  }),
  makeLesson({
    day: 31, week: 5, title: "說明身體不舒服", scene: "早上到公司後，你向同事說明身體狀況。",
    dialogue: [
      ["Sara", "f", "Good morning. Are you OK?"], ["Ben", "m", "No. I do not feel well."],
      ["Sara", "f", "What is wrong?"], ["Ben", "m", "I have a headache."],
      ["Sara", "f", "Do you have a fever?"], ["Ben", "m", "No. I feel very tired."],
      ["Sara", "f", "Please sit down and rest."], ["Ben", "m", "Thank you, Sara."],
    ],
    contractions: [
      { full: "I do not feel well.", short: "I don't feel well." },
      { full: "What is wrong?", short: "What's wrong?" },
    ],
    fixed: [{ en: "Please sit down and rest.", zh: "請坐下休息。", note: "關心對方的固定說法" }],
    drills: [
      { pattern: "I have a ___.", slots: ["headache", "fever", "cold", "cough"] },
      { pattern: "I feel ___.", slots: ["tired", "sick", "cold", "better"] },
    ],
    newWords: [["feel", "感覺", 1], ["well", "健康的；狀況良好", 1], ["wrong", "怎麼了；哪裡不舒服", 2], ["headache", "頭痛", 3], ["fever", "發燒", 4], ["tired", "疲倦的", 5], ["sit", "坐", 6], ["down", "向下；坐下", 6]],
    speaking: ["我不舒服。", "我頭痛。", "我覺得很累。"],
  }),
  makeLesson({
    day: 32, week: 5, title: "請同事幫忙", scene: "你身體不舒服，需要同事協助處理工作。",
    dialogue: [
      ["Ben", "m", "Sara, can you help me?"], ["Sara", "f", "Yes. What do you need?"],
      ["Ben", "m", "Please call the customer."], ["Sara", "f", "OK. I can call her."],
      ["Ben", "m", "Can you move the meeting?"], ["Sara", "f", "Yes. What time is good?"],
      ["Ben", "m", "Tomorrow morning is good."], ["Sara", "f", "OK. Please go home and rest."],
    ],
    contractions: [],
    fixed: [
      { en: "Can you help me?", zh: "你可以幫我嗎？", note: "請求幫忙的核心句" },
      { en: "Please go home and rest.", zh: "請回家休息。", note: "整句背" },
    ],
    drills: [
      { pattern: "Can you ___?", slots: ["help me", "call her", "move it", "come here"] },
      { pattern: "I can ___.", slots: ["help", "call", "wait", "go"] },
    ],
    newWords: [["help", "幫助", 0], ["call", "打電話", 2], ["move", "移動；改期", 4], ["tomorrow", "明天", 6]],
    speaking: ["你可以幫我嗎？", "請打電話給客戶。", "可以把會議改期嗎？"],
  }),
  makeLesson({
    day: 33, week: 5, title: "跟同事說自己不舒服", scene: "早上在公司，你不舒服，需要提早回家休息。",
    dialogue: [
      ["Ben", "m", "Good morning, Sara."], ["Sara", "f", "Morning, Ben. Are you OK?"],
      ["Ben", "m", "No. I do not feel well."], ["Sara", "f", "Oh no. What is wrong?"],
      ["Ben", "m", "I have a headache. I am very tired."], ["Sara", "f", "Oh no. Do you need anything?"],
      ["Ben", "m", "No, thank you."], ["Ben", "m", "I need to go home early."],
      ["Sara", "f", "You should tell Mark."], ["Sara", "f", "He is in his office."],
      ["Ben", "m", "OK. I will talk to him now."], ["Sara", "f", "Get some rest."],
      ["Sara", "f", "I hope you feel better."], ["Ben", "m", "Thank you, Sara. See you tomorrow."],
    ],
    contractions: [
      { full: "I do not feel well.", short: "I don't feel well." },
      { full: "What is wrong?", short: "What's wrong?" },
      { full: "I am very tired.", short: "I'm very tired." },
      { full: "He is in his office.", short: "He's in his office." },
      { full: "I will talk to him now.", short: "I'll talk to him now." },
    ],
    fixed: [
      { en: "Do you need anything?", zh: "你需要什麼嗎？", note: "關心對方的固定說法" },
      { en: "Get some rest.", zh: "好好休息。", note: "整句背" },
      { en: "I hope you feel better.", zh: "希望你早點好起來。", note: "整句背" },
    ],
    drills: [
      { pattern: "I have a ___.", slots: ["headache", "fever", "cold", "cough"] },
      { pattern: "I need to ___.", slots: ["go home", "rest", "see a doctor", "call Mark"] },
    ],
    newWords: [["anything", "任何東西", 5], ["early", "提早地", 7], ["should", "應該", 8], ["tell", "告訴", 8], ["him", "他（受詞）", 10], ["hope", "希望", 12], ["better", "更好的；好轉的", 12], ["tomorrow", "明天", 13]],
    speaking: ["我不舒服。", "我需要提早回家。", "我會現在去跟他說。"],
  }),
  makeLesson({
    day: 34, week: 5, title: "休息後恢復上班", scene: "休息一天後回公司，同事詢問你是否好一點。",
    dialogue: [
      ["Sara", "f", "Good morning. How are you today?"], ["Ben", "m", "I feel much better."],
      ["Sara", "f", "Do you still have a headache?"], ["Ben", "m", "No. My headache is gone."],
      ["Sara", "f", "That is good."], ["Ben", "m", "Thank you for your help."],
      ["Sara", "f", "Do you need more rest?"], ["Ben", "m", "No. I am ready to work."],
    ],
    contractions: [
      { full: "That is good.", short: "That's good." },
      { full: "I am ready to work.", short: "I'm ready to work." },
    ],
    drills: [
      { pattern: "I feel ___.", slots: ["better", "good", "tired", "sick"] },
      { pattern: "My ___ is gone.", slots: ["headache", "fever", "cough", "pain"] },
    ],
    newWords: [["much", "非常；多得多", 1], ["still", "仍然", 2], ["gone", "消失的；不見的", 3], ["more", "更多", 6]],
    speaking: ["我好多了。", "我的頭痛消失了。", "我準備好工作了。"],
    passage: { en: "Yesterday I did not feel well. I had a headache and felt tired. Sara helped me at work. I went home early and rested. Today I feel much better.", zh: "昨天我不舒服。我頭痛而且很累。Sara 在工作上幫助我。我提早回家休息。今天我好多了。" },
  }),
  makeLesson({
    day: 35, week: 5, title: "Phase 1 階段考", scene: "完成國小階段出口考：自我介紹、住家、作息、點餐與求助。",
    dialogue: [
      ["Teacher", "f", "Please tell me about yourself."], ["Ben", "m", "My name is Ben."],
      ["Ben", "m", "I am from Taiwan."], ["Ben", "m", "I am an engineer."],
      ["Teacher", "f", "What time do you get up?"], ["Ben", "m", "I get up at six."],
      ["Teacher", "f", "Where do you live?"], ["Ben", "m", "I live in Taipei."],
      ["Teacher", "f", "What would you like?"], ["Ben", "m", "A hot coffee, please."],
      ["Teacher", "f", "How do you feel today?"], ["Ben", "m", "I feel good today."],
      ["Teacher", "f", "You feel sick. What do you need?"], ["Ben", "m", "Can you call Sara?"],
    ],
    contractions: [
      { full: "I am from Taiwan.", short: "I'm from Taiwan." },
      { full: "I am an engineer.", short: "I'm an engineer." },
    ],
    fixed: [{ en: "Please tell me about yourself.", zh: "請介紹你自己。", note: "階段考指示句" }],
    drills: [
      { pattern: "My name is ___.", slots: ["Ben", "Amy", "John"] },
      { pattern: "I get up at ___.", slots: ["six", "seven", "eight"] },
      { pattern: "A ___, please.", slots: ["coffee", "sandwich", "bagel"] },
    ],
    newWords: [["yourself", "你自己", 0]],
    speaking: ["完成三十秒自我介紹。", "說明一天作息。", "完成一次點餐與求助。"],
    passage: { en: "My name is Ben, and I am from Taiwan. I live in a small home in Taipei. I am an engineer. I get up at six and take the bus to work. I like coffee and sandwiches. When I feel sick, I ask for help.", zh: "我叫 Ben，來自台灣。我住在台北的一個小家。我是工程師。我六點起床並搭公車上班。我喜歡咖啡和三明治。身體不舒服時，我會求助。" },
  }),
);

// ═══════════════════════════════════════════════════════
// P6 第五批：Day 36–42（W6 昨天與上週末）
// ═══════════════════════════════════════════════════════
COURSE_PACK.push(
  makeLesson({
    day: 36, phase: 2, week: 6, title: "昨天做了什麼", scene: "星期一早上，同事問你昨天做了什麼。",
    dialogue: [
      ["Sara", "f", "What did you do yesterday?"], ["Ben", "m", "I stayed home and rested."],
      ["Sara", "f", "Did you watch any movies?"], ["Ben", "m", "Yes. I watched a comedy."],
      ["Sara", "f", "Was it good?"], ["Ben", "m", "Yes. It was very funny."],
      ["Sara", "f", "What did you eat?"], ["Ben", "m", "I cooked noodles for dinner."],
    ],
    contractions: [],
    drills: [
      { pattern: "I ___ yesterday.", slots: ["stayed home", "worked", "rested", "cooked dinner"] },
      { pattern: "I watched a ___.", slots: ["comedy", "movie", "show", "video"] },
    ],
    newWords: [["did", "做了；助動詞過去式", 0], ["yesterday", "昨天", 0], ["stayed", "停留了", 1], ["rested", "休息了", 1], ["watched", "觀看了", 3], ["comedy", "喜劇", 3], ["was", "是（過去式）", 4], ["funny", "好笑的", 5], ["cooked", "煮了", 7], ["noodles", "麵條", 7]],
    speaking: ["我昨天待在家休息。", "我看了一部喜劇。", "我煮麵當晚餐。"],
  }),
  makeLesson({
    day: 37, phase: 2, week: 6, title: "上週末去了哪裡", scene: "午休時，你和同事聊上週末去過的地方。",
    dialogue: [
      ["Mike", "m", "Where did you go last weekend?"], ["Ben", "m", "I went to Tainan."],
      ["Mike", "m", "Who did you go with?"], ["Ben", "m", "I went with my wife."],
      ["Mike", "m", "How was the weather?"], ["Ben", "m", "It was warm and sunny."],
      ["Mike", "m", "Did you have a good time?"], ["Ben", "m", "Yes. We had a great time."],
    ],
    contractions: [],
    drills: [
      { pattern: "I went to ___.", slots: ["Tainan", "Taipei", "the beach", "the park"] },
      { pattern: "I went with my ___.", slots: ["wife", "friend", "family", "brother"] },
    ],
    newWords: [["last", "上一個；最後的", 0], ["weekend", "週末", 0], ["went", "去了", 1], ["with", "和；與", 2], ["warm", "溫暖的", 5], ["had", "有；度過（過去式）", 7], ["great", "很棒的", 7]],
    speaking: ["我上週末去了台南。", "我和妻子一起去。", "我們玩得很開心。"],
  }),
  makeLesson({
    day: 38, phase: 2, week: 6, title: "依順序說旅行經過", scene: "同事想知道你的台南行程，你按順序說明。",
    dialogue: [
      ["Sara", "f", "What did you do first?"], ["Ben", "m", "First, we visited an old temple."],
      ["Sara", "f", "What happened after that?"], ["Ben", "m", "Then we ate lunch nearby."],
      ["Sara", "f", "What did you do next?"], ["Ben", "m", "Next, we walked by the river."],
      ["Sara", "f", "What did you do finally?"], ["Ben", "m", "Finally, we drove home."],
    ],
    contractions: [],
    fixed: [{ en: "What happened after that?", zh: "那之後發生什麼事？", note: "敘述經過的核心問句" }],
    drills: [
      { pattern: "First, we ___.", slots: ["visited a temple", "ate lunch", "took photos", "bought tickets"] },
      { pattern: "Then we ___.", slots: ["walked", "rested", "drove home", "had coffee"] },
    ],
    newWords: [["first", "首先", 0], ["visited", "拜訪了；參觀了", 1], ["old", "古老的；舊的", 1], ["temple", "寺廟", 1], ["happened", "發生了", 2], ["then", "然後", 3], ["ate", "吃了", 3], ["nearby", "附近", 3], ["walked", "走路了", 5], ["river", "河流", 5], ["finally", "最後", 6], ["drove", "開車了", 7]],
    speaking: ["首先，我們參觀寺廟。", "然後，我們在附近吃午餐。", "最後，我們開車回家。"],
  }),
  makeLesson({
    day: 39, phase: 2, week: 6, title: "說明沒照計畫進行", scene: "旅行中遇到下雨，你說明原本計畫如何改變。",
    dialogue: [
      ["Mike", "m", "Did everything go as planned?"], ["Ben", "m", "No. It started raining at noon."],
      ["Mike", "m", "What did you do then?"], ["Ben", "m", "We went into a small cafe."],
      ["Mike", "m", "How long did you wait?"], ["Ben", "m", "We waited for about one hour."],
      ["Mike", "m", "Did the rain stop?"], ["Ben", "m", "Yes, so we continued our trip."],
    ],
    contractions: [],
    drills: [
      { pattern: "It started ___ at noon.", slots: ["raining", "snowing", "getting cold"] },
      { pattern: "We waited for ___.", slots: ["one hour", "thirty minutes", "the bus", "our food"] },
    ],
    newWords: [["everything", "每件事", 0], ["planned", "計畫好的", 0], ["started", "開始了", 1], ["noon", "中午", 1], ["into", "進入", 3], ["cafe", "咖啡館", 3], ["long", "長的；多久", 4], ["waited", "等待了", 5], ["hour", "小時", 5], ["rain", "雨", 6], ["continued", "繼續了", 7], ["trip", "旅行", 7]],
    speaking: ["中午開始下雨。", "我們進入一家小咖啡館。", "雨停後，我們繼續旅行。"],
  }),
  makeLesson({
    day: 40, phase: 2, week: 6, title: "回報昨天的工作問題", scene: "晨會上，你向主管回報昨天設備停機的經過。",
    dialogue: [
      ["Manager", "m", "What happened yesterday afternoon?"], ["Ben", "m", "The machine stopped at three."],
      ["Manager", "m", "What did you check first?"], ["Ben", "m", "I checked the power and cables."],
      ["Manager", "m", "Did you find the problem?"], ["Ben", "m", "Yes. One cable was loose."],
      ["Manager", "m", "How did you fix it?"], ["Ben", "m", "I replaced the cable."],
      ["Manager", "m", "Did the machine start again?"], ["Ben", "m", "Yes. It started right away."],
    ],
    contractions: [],
    drills: [
      { pattern: "The ___ stopped at three.", slots: ["machine", "motor", "pump", "computer"] },
      { pattern: "I checked the ___.", slots: ["power", "cables", "motor", "switch"] },
    ],
    newWords: [["machine", "機器", 1], ["stopped", "停止了", 1], ["checked", "檢查了", 3], ["power", "電源；電力", 3], ["cables", "電纜", 3], ["find", "找到", 4], ["loose", "鬆動的", 5], ["fix", "修理", 6], ["replaced", "更換了", 7], ["again", "再次", 8]],
    speaking: ["機器昨天下午停了。", "我先檢查電源與電纜。", "我更換了鬆動的電纜。"],
  }),
  makeLesson({
    day: 41, phase: 2, week: 6, title: "把事件說成完整短文", scene: "你把週末旅行整理成一段完整的口頭敘述。",
    dialogue: [
      ["Sara", "f", "Tell me about your weekend."], ["Ben", "m", "I went to Tainan with May."],
      ["Ben", "m", "First, we visited an old temple."], ["Ben", "m", "Then we ate lunch nearby."],
      ["Ben", "m", "It rained, so we entered a cafe."], ["Ben", "m", "After one hour, the rain stopped."],
      ["Ben", "m", "Finally, we walked by the river."], ["Sara", "f", "That sounds like a good weekend."],
    ],
    contractions: [],
    drills: [
      { pattern: "First, we ___.", slots: ["visited a temple", "ate breakfast", "took a train"] },
      { pattern: "Finally, we ___.", slots: ["walked by the river", "drove home", "had dinner"] },
    ],
    newWords: [["tell", "告訴；講述", 0], ["about", "關於", 0], ["rained", "下雨了", 4], ["entered", "進入了", 4], ["after", "在之後", 5]],
    speaking: ["按順序說出三件週末做過的事。", "說明一個意外狀況。", "說出最後如何結束。"],
    passage: { en: "Last weekend, I went to Tainan with my wife. First, we visited an old temple. Then we ate lunch nearby. It started raining, so we waited in a cafe. Finally, we walked by the river and drove home.", zh: "上週末我和妻子去了台南。首先參觀古老寺廟，接著在附近吃午餐。開始下雨後，我們在咖啡館等待。最後沿著河邊散步並開車回家。" },
  }),
  makeLesson({
    day: 42, phase: 2, week: 6, title: "W6 週考：敘述過去事件", scene: "完成第六週週考，依序說出週末與工作事件。",
    dialogue: [
      ["Teacher", "f", "Where did you go last weekend?"], ["Ben", "m", "I went to Tainan."],
      ["Teacher", "f", "What did you do first?"], ["Ben", "m", "First, I visited a temple."],
      ["Teacher", "f", "What happened after that?"], ["Ben", "m", "It rained, so I waited inside."],
      ["Teacher", "f", "What did you do finally?"], ["Ben", "m", "Finally, I drove home."],
    ],
    contractions: [],
    drills: [
      { pattern: "I went to ___.", slots: ["Tainan", "Taipei", "the beach"] },
      { pattern: "First, I ___.", slots: ["visited a temple", "ate lunch", "checked the machine"] },
      { pattern: "Finally, I ___.", slots: ["drove home", "finished work", "called my wife"] },
    ],
    newWords: [["inside", "在裡面", 5]],
    speaking: ["用過去式說出去過哪裡。", "依序說出三件事情。", "說明一個意外與處理方式。"],
    passage: { en: "Yesterday the machine stopped at work. I checked the power first. Then I found a loose cable. I replaced it, and the machine started again. I finished the repair before lunch.", zh: "昨天工作時機器停了。我先檢查電源，接著找到鬆動的電纜。我更換電纜後機器再次啟動，並在午餐前完成維修。" },
  }),
);

// 各批內容可能分段追加，交給畫面前固定依 Day 排序。
COURSE_PACK.sort((a, b) => a.day - b.day);
