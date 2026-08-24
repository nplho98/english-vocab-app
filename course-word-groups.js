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
