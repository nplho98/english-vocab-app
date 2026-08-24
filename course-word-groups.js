// Day 1–7 單字分類樣板。分類結果必須逐組查核後才能加入。
const COURSE_WORD_GROUPS = {
  greetings: { label: "打招呼與道別", words: [["hello", "你好", 1], ["hi", "嗨", 1], ["good morning", "早安", 2], ["see you", "再見／回頭見", 2]] },
  pronouns: { label: "人稱代名詞", words: [["I", "我", 1], ["you", "你／你們", 1], ["he", "他", 5], ["she", "她", 8], ["we", "我們", 9], ["they", "他們／它們", 12]] },
  possessives: { label: "所有格", words: [["my", "我的", 1], ["your", "你的", 1], ["his", "他的", 8], ["her", "她的", 8], ["our", "我們的", 9], ["their", "他們的", 12]] },
  be_verbs: { label: "be 動詞搭配", words: [["I am", "我是", 1], ["you are", "你是", 2], ["he is", "他是", 5], ["she is", "她是", 8], ["we are", "我們是", 9], ["they are", "他們是", 12]] },
  feelings: { label: "狀態與感受", words: [["fine", "很好", 2], ["OK", "還可以", 2], ["tired", "累的", 2], ["busy", "忙碌的", 2], ["happy", "開心的", 2]] },
  time_of_day: { label: "一天中的時段", words: [["morning", "早上", 2], ["afternoon", "下午", 2], ["evening", "傍晚／晚上", 2], ["night", "夜晚", 20]] },
  numbers_0_20: { label: "數字 0–20", words: [["zero", "零", 3], ["one", "一", 3], ["two", "二", 3], ["three", "三", 3], ["four", "四", 3], ["five", "五", 3], ["six", "六", 3], ["seven", "七", 3], ["eight", "八", 3], ["nine", "九", 3], ["ten", "十", 3], ["eleven", "十一", 3], ["twelve", "十二", 3], ["thirteen", "十三", 3], ["fourteen", "十四", 3], ["fifteen", "十五", 3], ["sixteen", "十六", 3], ["seventeen", "十七", 3], ["eighteen", "十八", 3], ["nineteen", "十九", 3], ["twenty", "二十", 4]] },
  tens: { label: "整十數", words: [["twenty", "二十", 4], ["thirty", "三十", 4], ["forty", "四十", 4], ["fifty", "五十", 4], ["sixty", "六十", 4], ["seventy", "七十", 4], ["eighty", "八十", 4], ["ninety", "九十", 4], ["one hundred", "一百", 4]] },
  payment: { label: "付款方式", words: [["cash", "現金", 4], ["card", "卡片／信用卡", 4]] },
  countries: { label: "國家與地點", words: [["Taiwan", "台灣", 5], ["Taipei", "台北", 5], ["Canada", "加拿大", 5], ["Japan", "日本", 5], ["the US", "美國", 5]] },
  jobs: { label: "職業", words: [["engineer", "工程師", 5], ["teacher", "老師", 5], ["doctor", "醫師", 5], ["artist", "藝術家", 6], ["assistant", "助理", 6]] },
};

const COURSE_DAY_WORD_GROUPS = {
  1: ["greetings", "pronouns", "possessives", "be_verbs"],
  2: ["feelings", "time_of_day", "be_verbs"],
  3: ["numbers_0_20"],
  4: ["tens", "payment"],
  5: ["countries", "jobs", "pronouns", "be_verbs"],
  6: ["greetings", "countries", "jobs"],
  7: ["pronouns", "numbers_0_20", "countries", "jobs"],
};

// Day 8–91：先依語意規則產生候選，再以課程實際出現日與中文逐組核對。
function addCourseWordGroup(id, label, words) {
  const entries = [];
  for (const text of words) {
    let found = null;
    let firstDay = 91;
    for (const lesson of COURSE_PACK) {
      const word = (lesson.newWords || []).find((item) => item.t.toLowerCase() === text.toLowerCase());
      if (word && lesson.day < firstDay) { found = word; firstDay = lesson.day; }
    }
    if (found) entries.push([found.t, found.zh, firstDay]);
  }
  if (entries.length) COURSE_WORD_GROUPS[id] = { label, words: entries };
}

function assignCourseWordGroups(days, groups) {
  for (const day of days) COURSE_DAY_WORD_GROUPS[day] = [...new Set([...(COURSE_DAY_WORD_GROUPS[day] || []), ...groups])];
}

addCourseWordGroup("family", "家庭成員", ["family", "wife", "son", "daughter", "brother", "sister"]);
addCourseWordGroup("rooms", "住家空間", ["home", "living", "room", "kitchen", "bathroom", "bedroom", "balcony"]);
addCourseWordGroup("home_objects", "居家物品", ["lamp", "table", "chair", "window", "keys", "book", "phone"]);
addCourseWordGroup("positions", "位置與方位", ["here", "there", "on", "under", "in", "inside", "outside", "front", "nearby"]);
addCourseWordGroup("routine", "生活作息", ["get", "up", "brush", "eat", "breakfast", "leave", "start", "lunch", "end", "rest", "cook", "dinner"]);
addCourseWordGroup("clock_time", "時間表達", ["time", "late", "minutes", "today", "tomorrow", "yesterday", "noon", "hour", "night", "afternoon", "evening"]);
addCourseWordGroup("transport", "交通方式", ["bus", "drive", "ride", "bike", "train", "airport", "station", "travel"]);
addCourseWordGroup("weekdays", "星期", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
addCourseWordGroup("food_drink", "食物與飲料", ["egg", "sandwich", "drink", "orange", "juice", "coffee", "food", "fish", "chicken", "rice", "milk", "bread", "apples", "noodles", "meal"]);
addCourseWordGroup("shopping_payment", "購物與付款", ["menu", "cash", "card", "total", "receipt", "price", "pay", "cost", "store", "delivery", "order"]);
addCourseWordGroup("weather", "天氣", ["weather", "hot", "sunny", "cool", "raining", "rain", "wind", "strong", "cold", "warm"]);
addCourseWordGroup("clothing", "衣物與尺寸", ["jacket", "wear", "sleeves", "size", "medium", "large", "fit", "fits"]);
addCourseWordGroup("health", "症狀與身體狀況", ["feel", "well", "headache", "fever", "tired", "cough", "chest", "painful", "throat", "sore", "temperature", "infection", "allergic"]);
addCourseWordGroup("medicine", "醫療與用藥", ["tablets", "effects", "sleepy", "medications", "prescribe", "antibiotics", "pill", "medical"]);
addCourseWordGroup("past_time", "過去時間", ["yesterday", "last", "weekend", "first", "then", "finally", "after", "before"]);
addCourseWordGroup("past_actions", "過去式動作", ["did", "stayed", "rested", "watched", "cooked", "went", "visited", "ate", "walked", "drove", "waited", "stopped", "checked", "replaced", "entered"]);
addCourseWordGroup("travel_places", "旅行與地點", ["trip", "travel", "temple", "river", "cafe", "airport", "station", "train", "hotel", "harbor", "market", "Kaohsiung"]);
addCourseWordGroup("machine_problem", "設備與故障", ["machine", "power", "cables", "loose", "fix", "warning", "sensor", "pressure", "damaged", "installation", "unstable"]);
addCourseWordGroup("scheduling", "時間安排", ["free", "scheduled", "arrive", "available", "reservation", "booked", "plan", "stay", "nights"]);
addCourseWordGroup("comparison", "比較", ["cheaper", "larger", "powerful", "expensive", "stronger", "longer", "less", "reliable", "smaller", "quieter", "clearer", "darker"]);
addCourseWordGroup("preference", "偏好與決定", ["prefer", "rather", "quality", "performance", "important", "choice", "decided", "choose", "opinion", "comfort"]);
addCourseWordGroup("customer_service", "客訴與售後", ["warranty", "repairs", "repair", "exchange", "replace", "solve", "package", "missing", "mistake", "tracking"]);
addCourseWordGroup("phone_work", "職場電話", ["company", "speak", "calling", "hold", "leave", "message", "back"]);
addCourseWordGroup("email_work", "工作 Email", ["email", "attach", "updated", "changes", "subject", "reply", "copy", "forward", "respond", "replied"]);
addCourseWordGroup("handover", "請假與交接", ["cover", "supplier", "medical", "note", "covering", "prepare", "shared", "folder", "urgent"]);
addCourseWordGroup("project_status", "專案狀態與數據", ["estimate", "accurate", "completed", "remains", "provided", "defects", "figures", "status", "measurable"]);
addCourseWordGroup("process", "流程與被動語態", ["received", "packed", "verified", "inspected", "sealed", "issued", "collected"]);
addCourseWordGroup("conditions_risk", "條件與風險", ["conditions", "specifications", "considered", "results", "risk", "guarantee", "capacity", "workable", "backup"]);
addCourseWordGroup("experience", "經驗與成果", ["experience", "achievement", "efficiency", "redesign", "reduced", "technical", "international"]);
addCourseWordGroup("delay", "延誤與處理", ["slipped", "shipment", "paperwork", "urgency", "confirmation", "realistic", "resolved"]);
addCourseWordGroup("remote_work", "遠端工作", ["remote", "hybrid", "commuting", "productivity", "isolated", "flexible", "permanent", "trial", "retention"]);
addCourseWordGroup("argument", "立場與論證", ["option", "advantage", "disadvantage", "factor", "concerns", "demand", "argument", "evidence", "fair", "policy"]);
addCourseWordGroup("formal_register", "正式語域", ["confident", "requirements", "unlikely", "directness", "context", "sufficient", "approved", "additional", "funding", "postpone"]);
addCourseWordGroup("responsibility", "責任與協調", ["evidence", "originated", "traced", "component", "external", "vendor", "defensive", "coordinating", "responsible"]);
addCourseWordGroup("resources", "人力與資源", ["recover", "assigning", "resources", "milestone", "available", "support"]);
addCourseWordGroup("production_report", "生產與交接回報", ["production", "valve", "fuel", "inspection", "revised", "shift", "distributed", "detected", "handover"]);

assignCourseWordGroups([8, 9, 13, 14], ["family"]);
assignCourseWordGroups([10, 11, 12, 13, 14], ["rooms", "home_objects", "positions"]);
assignCourseWordGroups([15, 18, 20, 21], ["routine", "clock_time"]);
assignCourseWordGroups([16, 19, 20, 21, 43, 44, 49], ["clock_time", "weekdays"]);
assignCourseWordGroups([17, 19, 20, 21], ["transport"]);
assignCourseWordGroups([22, 23, 24, 25, 26, 27, 28], ["food_drink", "shopping_payment"]);
assignCourseWordGroups([29, 30, 31, 32, 33, 34, 35], ["weather", "health"]);
assignCourseWordGroups([30, 54], ["clothing"]);
assignCourseWordGroups([36, 37, 38, 39, 40, 41, 42], ["past_time", "past_actions", "travel_places"]);
assignCourseWordGroups([40, 73, 76], ["machine_problem"]);
assignCourseWordGroups([43, 44, 45, 46, 47, 48, 49], ["scheduling", "travel_places", "transport"]);
assignCourseWordGroups([50, 51, 52, 53, 54, 55, 56], ["comparison", "preference", "shopping_payment"]);
assignCourseWordGroups([57, 58, 60, 63], ["health", "medicine"]);
assignCourseWordGroups([59, 61, 62, 63], ["customer_service"]);
assignCourseWordGroups([64, 65, 68], ["phone_work"]);
assignCourseWordGroups([66, 67], ["email_work"]);
assignCourseWordGroups([68, 69, 70], ["handover"]);
assignCourseWordGroups([71, 72, 73, 74, 75, 76, 77], ["project_status"]);
assignCourseWordGroups([72], ["process"]);
assignCourseWordGroups([74, 76, 77, 81, 82], ["conditions_risk"]);
assignCourseWordGroups([75, 77, 91], ["experience"]);
assignCourseWordGroups([76], ["delay"]);
assignCourseWordGroups([78, 79, 80, 81, 82, 83, 84], ["remote_work", "argument"]);
assignCourseWordGroups([85, 86, 87, 88, 89, 90, 91], ["formal_register"]);
assignCourseWordGroups([87, 90], ["responsibility"]);
assignCourseWordGroups([88], ["resources"]);
assignCourseWordGroups([89, 91], ["production_report"]);
