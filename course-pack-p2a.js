// course-pack-p2a.js — Phase 2 教材追加包：Day 43–56
// 載入順序：course-pack.js 之後。本檔沿用既有 makeLesson() 與 COURSE_PACK。

// ═══════════════════════════════════════════════════════
// W7：約時間、行程、旅行安排
// ═══════════════════════════════════════════════════════
COURSE_PACK.push(
  makeLesson({
    day: 43, phase: 2, week: 7, title: "詢問週五是否有空", scene: "你想約同事週五下班後一起吃晚餐。",
    dialogue: [
      ["Ben", "m", "Are you free on Friday evening?"], ["Sara", "f", "Yes, I am free after six."],
      ["Ben", "m", "Would you like to have dinner together?"], ["Sara", "f", "Yes, that sounds good."],
      ["Ben", "m", "How about the restaurant near the station?"], ["Sara", "f", "Great. I will meet you there at seven."],
    ],
    contractions: [
      { full: "I will meet you there at seven.", short: "I'll meet you there at seven." },
    ],
    fixed: [{ en: "Would you like to have dinner together?", zh: "你想一起吃晚餐嗎？", note: "禮貌邀約的完整問句" }],
    drills: [
      { pattern: "Are you free on ___?", slots: ["Friday", "Saturday", "Monday evening", "Sunday afternoon"] },
      { pattern: "I will meet you at ___.", slots: ["six", "seven", "noon", "the station"] },
    ],
    newWords: [["free", "有空的", 0], ["Friday", "星期五", 0], ["evening", "晚上", 0], ["after", "在……之後", 1], ["together", "一起", 2], ["sounds", "聽起來", 3], ["restaurant", "餐廳", 4], ["station", "車站", 4], ["meet", "見面", 5]],
    speaking: ["你星期五晚上有空嗎？", "你想一起吃晚餐嗎？", "我七點在那裡見你。"],
  }),
  makeLesson({
    day: 44, phase: 2, week: 7, title: "改約另一個時間", scene: "原定週五的晚餐有衝突，你打電話跟 Sara 改時間。",
    dialogue: [
      ["Ben", "m", "I cannot make it on Friday."], ["Sara", "f", "No problem. What happened?"],
      ["Ben", "m", "My manager scheduled a late meeting."], ["Sara", "f", "Would Saturday evening work for you?"],
      ["Ben", "m", "Saturday works, but I may arrive late."], ["Sara", "f", "That is fine. Let us meet at seven thirty."],
    ],
    contractions: [
      { full: "I cannot make it on Friday.", short: "I can't make it on Friday." },
      { full: "That is fine.", short: "That's fine." },
      { full: "Let us meet at seven thirty.", short: "Let's meet at seven thirty." },
    ],
    fixed: [{ en: "I cannot make it on Friday.", zh: "我星期五無法赴約。", note: "改約時的常用說法" }],
    drills: [
      { pattern: "I cannot make it on ___.", slots: ["Friday", "Monday", "Saturday morning", "Tuesday afternoon"] },
      { pattern: "Would ___ work for you?", slots: ["Saturday", "Sunday evening", "seven thirty", "next week"] },
    ],
    newWords: [["cannot", "不能", 0], ["problem", "問題", 1], ["manager", "主管", 2], ["scheduled", "排定了", 2], ["late", "晚的；遲到的", 2], ["Saturday", "星期六", 3], ["work", "適合；可行", 3], ["may", "可能", 4], ["arrive", "抵達", 4]],
    speaking: ["我星期五無法赴約。", "星期六晚上可以嗎？", "我可能會晚到。"],
  }),
  makeLesson({
    day: 45, phase: 2, week: 7, title: "安排接送時間", scene: "你和朋友確認週末出遊的接送地點與時間。",
    dialogue: [
      ["May", "f", "How will we get to the airport?"], ["Ben", "m", "I will pick you up at seven."],
      ["May", "f", "Can you come to my apartment?"], ["Ben", "m", "Yes, but please be ready outside."],
      ["May", "f", "How long will the drive take?"], ["Ben", "m", "It will take about forty minutes."],
      ["May", "f", "Good. I will wait by the front door."], ["Ben", "m", "I will call when I arrive."],
    ],
    contractions: [
      { full: "I will pick you up at seven.", short: "I'll pick you up at seven." },
      { full: "It will take about forty minutes.", short: "It'll take about forty minutes." },
    ],
    fixed: [{ en: "I will pick you up at seven.", zh: "我七點去接你。", note: "pick up 必須連在一起理解為接人" }],
    drills: [
      { pattern: "I will pick you up at ___.", slots: ["six", "seven", "eight thirty", "noon"] },
      { pattern: "It will take about ___.", slots: ["twenty minutes", "forty minutes", "one hour", "two hours"] },
    ],
    newWords: [["airport", "機場", 0], ["pick", "接人；挑選", 1], ["apartment", "公寓", 2], ["ready", "準備好的", 3], ["outside", "外面", 3], ["drive", "車程；開車", 4], ["take", "花費（時間）", 4], ["minutes", "分鐘", 5], ["front", "前面的", 6], ["arrive", "抵達", 7]],
    speaking: ["我七點去接你。", "請在外面準備好。", "車程大約四十分鐘。"],
  }),
  makeLesson({
    day: 46, phase: 2, week: 7, title: "預訂火車票", scene: "你在車站櫃檯預訂週末去高雄的車票。",
    dialogue: [
      ["Clerk", "f", "Where would you like to go?"], ["Ben", "m", "I would like a ticket to Kaohsiung."],
      ["Clerk", "f", "What day will you travel?"], ["Ben", "m", "I will leave on Saturday morning."],
      ["Clerk", "f", "The eight fifteen train has seats available."], ["Ben", "m", "That time works for me."],
      ["Clerk", "f", "Would you like a window or aisle seat?"], ["Ben", "m", "A window seat, please."],
    ],
    contractions: [
      { full: "I will leave on Saturday morning.", short: "I'll leave on Saturday morning." },
    ],
    drills: [
      { pattern: "I would like a ticket to ___.", slots: ["Kaohsiung", "Tainan", "Taipei", "Taichung"] },
      { pattern: "I will leave on ___.", slots: ["Saturday morning", "Friday evening", "Sunday", "Monday afternoon"] },
    ],
    newWords: [["ticket", "票", 1], ["Kaohsiung", "高雄", 1], ["travel", "旅行；出行", 2], ["leave", "出發；離開", 3], ["train", "火車", 4], ["seats", "座位（複數）", 4], ["available", "可用的；有空位的", 4], ["window", "窗戶；靠窗的", 6], ["aisle", "走道", 6]],
    speaking: ["我想買一張去高雄的票。", "我星期六早上出發。", "我要靠窗座位。"],
  }),
  makeLesson({
    day: 47, phase: 2, week: 7, title: "確認飯店預訂", scene: "出發前，你打電話向飯店確認房間與入住時間。",
    dialogue: [
      ["Clerk", "f", "Good afternoon. How may I help you?"], ["Ben", "m", "I am calling about my hotel reservation."],
      ["Clerk", "f", "May I have your name, please?"], ["Ben", "m", "The reservation is under Ben Lin."],
      ["Clerk", "f", "You booked one room for two nights."], ["Ben", "m", "Yes. What time can we check in?"],
      ["Clerk", "f", "You can check in after three."], ["Ben", "m", "Thank you. We will arrive around four."],
    ],
    contractions: [
      { full: "I am calling about my hotel reservation.", short: "I'm calling about my hotel reservation." },
      { full: "We will arrive around four.", short: "We'll arrive around four." },
    ],
    fixed: [{ en: "The reservation is under Ben Lin.", zh: "訂位姓名是 Ben Lin。", note: "查詢訂房姓名的固定說法" }],
    drills: [
      { pattern: "The reservation is under ___.", slots: ["Ben Lin", "May Chen", "Sara Lee", "John Wu"] },
      { pattern: "We will arrive around ___.", slots: ["three", "four", "six thirty", "noon"] },
    ],
    newWords: [["hotel", "飯店", 1], ["reservation", "預訂", 1], ["under", "以……名義", 3], ["booked", "預訂了", 4], ["room", "房間", 4], ["nights", "晚（住宿單位）", 4], ["check", "辦理手續；檢查", 5], ["around", "大約", 7]],
    speaking: ["我打來詢問飯店預訂。", "訂位姓名是 Ben Lin。", "我們大約四點抵達。"],
  }),
  makeLesson({
    day: 48, phase: 2, week: 7, title: "說明完整旅行行程", scene: "你把週末兩天的旅行安排告訴家人。",
    dialogue: [
      ["May", "f", "What is our plan for Saturday?"], ["Ben", "m", "We will take the morning train south."],
      ["Ben", "m", "After lunch, we will visit the harbor."], ["May", "f", "Where will we stay that night?"],
      ["Ben", "m", "We booked a hotel near the river."], ["May", "f", "What will we do on Sunday?"],
      ["Ben", "m", "We will explore the market before going home."], ["May", "f", "That sounds like a busy weekend."],
    ],
    contractions: [
      { full: "We will take the morning train south.", short: "We'll take the morning train south." },
    ],
    drills: [
      { pattern: "We will visit ___.", slots: ["the harbor", "a museum", "the old town", "the market"] },
      { pattern: "We booked a hotel near ___.", slots: ["the river", "the station", "the beach", "downtown"] },
    ],
    newWords: [["plan", "計畫", 0], ["south", "向南；南方", 1], ["harbor", "港口", 2], ["stay", "住宿；停留", 3], ["night", "夜晚", 3], ["explore", "探索", 6], ["market", "市場", 6], ["before", "在……之前", 6]],
    speaking: ["我們會搭早班火車南下。", "午餐後會參觀港口。", "回家前會逛市場。"],
    passage: { en: "We will leave on Saturday morning and take the train south. After lunch, we will visit the harbor. We booked a hotel near the river. On Sunday, we will explore the market before going home.", zh: "我們星期六早上出發並搭火車南下。午餐後會參觀港口。我們訂了河邊的飯店。星期日回家前會逛市場。" },
  }),
  makeLesson({
    day: 49, phase: 2, week: 7, title: "W7 週考：約時間與旅行安排", scene: "完成第七週週考，實際約時間並說明旅行行程。",
    dialogue: [
      ["Teacher", "f", "Are you free this Saturday?"], ["Ben", "m", "I cannot meet in the morning."],
      ["Teacher", "f", "Would Saturday afternoon work for you?"], ["Ben", "m", "Yes. I will meet you at two."],
      ["Teacher", "f", "How will you get to the station?"], ["Ben", "m", "May will pick me up at one."],
      ["Teacher", "f", "What will you do after that?"], ["Ben", "m", "I will take the train to Kaohsiung."],
    ],
    contractions: [
      { full: "I cannot meet in the morning.", short: "I can't meet in the morning." },
      { full: "I will take the train to Kaohsiung.", short: "I'll take the train to Kaohsiung." },
    ],
    drills: [
      { pattern: "Would ___ work for you?", slots: ["Saturday afternoon", "Friday evening", "Sunday morning"] },
      { pattern: "I will ___ at two.", slots: ["meet you", "leave", "arrive", "check in"] },
      { pattern: "___ will pick me up.", slots: ["May", "Sara", "My friend", "My wife"] },
    ],
    newWords: [["afternoon", "下午", 2]],
    speaking: ["改約一個可行時間。", "說明誰會接你。", "說出兩天旅行計畫。"],
    passage: { en: "I cannot leave on Friday, so Saturday works better. May will pick me up at seven. We will take the morning train to Kaohsiung. After checking in, we will visit the harbor and have dinner near the river.", zh: "我星期五不能出發，所以星期六比較適合。May 會七點接我。我們會搭早班火車到高雄。入住後會參觀港口，並在河邊吃晚餐。" },
  })
);

// ═══════════════════════════════════════════════════════
// W8：購物比價、偏好與意見
// ═══════════════════════════════════════════════════════
COURSE_PACK.push(
  makeLesson({
    day: 50, phase: 2, week: 8, title: "比較兩件商品的價格", scene: "你在家電行比較兩台電風扇的價格。",
    dialogue: [
      ["Clerk", "f", "These two fans are our most popular models."], ["Ben", "m", "This one is cheaper than that one."],
      ["Clerk", "f", "Yes, but the larger one is more powerful."], ["Ben", "m", "How much does each one cost?"],
      ["Clerk", "f", "The small one costs forty dollars."], ["Clerk", "f", "The large one costs sixty dollars."],
      ["Ben", "m", "I need time to compare them."], ["Clerk", "f", "Of course. Please take your time."],
    ],
    contractions: [],
    drills: [
      { pattern: "This one is ___ than that one.", slots: ["cheaper", "smaller", "lighter", "better"] },
      { pattern: "The ___ one costs sixty dollars.", slots: ["large", "new", "black", "better"] },
    ],
    newWords: [["fans", "電風扇（複數）", 0], ["popular", "受歡迎的", 0], ["models", "型號（複數）", 0], ["cheaper", "較便宜的", 1], ["larger", "較大的", 2], ["powerful", "強力的", 2], ["each", "每一個", 3], ["cost", "花費；價格為", 3], ["compare", "比較", 6]],
    speaking: ["這台比那台便宜。", "大台的比較強力。", "我需要時間比較。"],
  }),
  makeLesson({
    day: 51, phase: 2, week: 8, title: "比較品質與使用時間", scene: "店員解釋兩台機器價格不同的原因。",
    dialogue: [
      ["Ben", "m", "Why is this model more expensive?"], ["Clerk", "f", "It uses stronger parts and lasts longer."],
      ["Ben", "m", "Is the cheaper model less reliable?"], ["Clerk", "f", "It is reliable, but it has a shorter warranty."],
      ["Ben", "m", "How long is the better warranty?"], ["Clerk", "f", "It covers repairs for three years."],
      ["Ben", "m", "That difference is important to me."], ["Clerk", "f", "Then the better model may suit you."],
    ],
    contractions: [],
    drills: [
      { pattern: "This model is more ___.", slots: ["expensive", "powerful", "reliable", "popular"] },
      { pattern: "It has a ___ warranty.", slots: ["longer", "shorter", "one-year", "three-year"] },
    ],
    newWords: [["expensive", "昂貴的", 0], ["stronger", "較堅固的；較強的", 1], ["parts", "零件", 1], ["lasts", "持續；耐用", 1], ["longer", "更久；較長的", 1], ["less", "較少；較不", 2], ["reliable", "可靠的", 2], ["warranty", "保固", 3], ["covers", "涵蓋", 5], ["repairs", "維修", 5], ["suit", "適合", 7]],
    speaking: ["為什麼這個型號比較貴？", "它的零件更堅固而且更耐用。", "它有比較長的保固。"],
  }),
  makeLesson({
    day: 52, phase: 2, week: 8, title: "表達自己的購買偏好", scene: "你和 Sara 討論願意多付錢買哪一台。",
    dialogue: [
      ["Sara", "f", "Which fan do you prefer?"], ["Ben", "m", "I prefer the smaller and quieter one."],
      ["Sara", "f", "The quieter one costs more."], ["Ben", "m", "I would rather pay more for better quality."],
      ["Sara", "f", "Do you care about the color?"], ["Ben", "m", "No. Performance is more important than color."],
      ["Sara", "f", "Then I think this model is best."], ["Ben", "m", "I agree with your choice."],
    ],
    contractions: [],
    drills: [
      { pattern: "I prefer the ___ one.", slots: ["smaller", "quieter", "cheaper", "stronger"] },
      { pattern: "I would rather pay more for ___.", slots: ["better quality", "a longer warranty", "faster service", "stronger parts"] },
    ],
    newWords: [["prefer", "偏好", 0], ["smaller", "較小的", 1], ["quieter", "較安靜的", 1], ["rather", "寧願", 3], ["pay", "付款", 3], ["quality", "品質", 3], ["care", "在意", 4], ["performance", "效能", 5], ["important", "重要的", 5], ["agree", "同意", 7], ["choice", "選擇", 7]],
    speaking: ["我偏好比較安靜的那台。", "我寧願多付一點買好品質。", "效能比顏色重要。"],
  }),
  makeLesson({
    day: 53, phase: 2, week: 8, title: "詢問並說明意見", scene: "你請同事對兩款工作用耳機提供意見。",
    dialogue: [
      ["Ben", "m", "What do you think about these headphones?"], ["Mike", "m", "In my opinion, the black pair looks better."],
      ["Ben", "m", "Do you think they are comfortable?"], ["Mike", "m", "Yes, and they also sound clearer."],
      ["Ben", "m", "The gray pair is much cheaper."], ["Mike", "m", "True, but comfort matters during long meetings."],
      ["Ben", "m", "That is a good point."], ["Mike", "m", "You should try both pairs before deciding."],
    ],
    contractions: [
      { full: "That is a good point.", short: "That's a good point." },
    ],
    drills: [
      { pattern: "What do you think about ___?", slots: ["these headphones", "this model", "the price", "the color"] },
      { pattern: "In my opinion, ___ looks better.", slots: ["the black pair", "this one", "the smaller model", "the new design"] },
    ],
    newWords: [["think", "認為；思考", 0], ["headphones", "耳機", 0], ["opinion", "意見", 1], ["pair", "一副；一對", 1], ["comfortable", "舒適的", 2], ["clearer", "更清楚的", 3], ["gray", "灰色的", 4], ["comfort", "舒適性", 5], ["matters", "很重要；有影響", 5], ["point", "觀點；重點", 6], ["deciding", "做決定", 7]],
    speaking: ["你覺得這副耳機怎麼樣？", "依我看，黑色的比較好看。", "舒適性在長會議中很重要。"],
  }),
  makeLesson({
    day: 54, phase: 2, week: 8, title: "試穿並比較尺寸", scene: "你在服飾店試穿兩件外套，請店員給建議。",
    dialogue: [
      ["Clerk", "f", "How does the blue jacket fit?"], ["Ben", "m", "It feels comfortable, but the sleeves are long."],
      ["Clerk", "f", "Would you like to try a smaller size?"], ["Ben", "m", "Yes. Do you have this in medium?"],
      ["Clerk", "f", "Here you are. This one fits better."], ["Ben", "m", "I agree, but I prefer the darker color."],
      ["Clerk", "f", "The dark jacket is available online."], ["Ben", "m", "Good. I will order it tonight."],
    ],
    contractions: [
      { full: "I will order it tonight.", short: "I'll order it tonight." },
    ],
    drills: [
      { pattern: "Do you have this in ___?", slots: ["medium", "large", "blue", "black"] },
      { pattern: "I prefer the ___ color.", slots: ["darker", "lighter", "blue", "gray"] },
    ],
    newWords: [["jacket", "外套", 0], ["fit", "合身；適合", 0], ["feels", "感覺", 1], ["sleeves", "袖子（複數）", 1], ["size", "尺寸", 2], ["medium", "中號；中等的", 3], ["fits", "合身", 4], ["darker", "較深色的", 5], ["online", "線上的", 6], ["order", "訂購", 7], ["tonight", "今晚", 7]],
    speaking: ["這件很舒服，但袖子太長。", "有中號的嗎？", "我偏好深一點的顏色。"],
  }),
  makeLesson({
    day: 55, phase: 2, week: 8, title: "做出購買決定並說理由", scene: "比較完成後，你向店員說明最後的購買決定。",
    dialogue: [
      ["Clerk", "f", "Have you decided which fan you want?"], ["Ben", "m", "Yes. I will take the more expensive one."],
      ["Clerk", "f", "What made you choose that model?"], ["Ben", "m", "It is quieter and has a longer warranty."],
      ["Clerk", "f", "Would you like delivery or store pickup?"], ["Ben", "m", "Delivery is easier because I do not drive."],
      ["Clerk", "f", "We can deliver it on Tuesday."], ["Ben", "m", "Perfect. I will pay by card."],
    ],
    contractions: [
      { full: "I will take the more expensive one.", short: "I'll take the more expensive one." },
      { full: "I do not drive.", short: "I don't drive." },
    ],
    drills: [
      { pattern: "I will take the ___ one.", slots: ["more expensive", "cheaper", "quieter", "smaller"] },
      { pattern: "I chose it because ___.", slots: ["it lasts longer", "it is quieter", "the warranty is better", "delivery is free"] },
    ],
    newWords: [["decided", "決定了", 0], ["choose", "選擇", 2], ["model", "型號", 2], ["delivery", "配送", 4], ["store", "商店", 4], ["pickup", "取貨", 4], ["easier", "較容易的", 5], ["because", "因為", 5], ["deliver", "配送", 6], ["Tuesday", "星期二", 6], ["card", "卡片；信用卡", 7]],
    speaking: ["我要買比較貴的那台。", "我選它是因為它更安靜。", "配送比較方便，因為我不開車。"],
    passage: { en: "I compared two fans at the store. The first one was cheaper, but the second one was quieter and lasted longer. I would rather pay more for better quality, so I chose the second one with delivery.", zh: "我在店裡比較了兩台電風扇。第一台較便宜，但第二台較安靜也更耐用。我寧願多付一點買較好的品質，所以選了第二台並請店家配送。" },
  }),
  makeLesson({
    day: 56, phase: 2, week: 8, title: "W8 週考：比價、偏好與意見", scene: "完成第八週週考，比較商品並說出有理由的選擇。",
    dialogue: [
      ["Teacher", "f", "Please compare these two coffee machines."], ["Ben", "m", "This one is cheaper, but that one lasts longer."],
      ["Teacher", "f", "Which one do you prefer, and why?"], ["Ben", "m", "I prefer that one because it is more reliable."],
      ["Teacher", "f", "Would you pay more for it?"], ["Ben", "m", "Yes. I would rather get the better one."],
      ["Teacher", "f", "What is your opinion about the warranty?"], ["Ben", "m", "The longer warranty makes it a safer choice."],
    ],
    contractions: [],
    drills: [
      { pattern: "This one is ___, but that one ___.", slots: ["cheaper / lasts longer", "smaller / is stronger", "lighter / works better"] },
      { pattern: "I prefer ___ because ___.", slots: ["this one / it is cheaper", "that one / it is reliable", "the black one / it looks better"] },
      { pattern: "I would rather get ___.", slots: ["the better one", "the quieter one", "the cheaper one"] },
    ],
    newWords: [["machines", "機器（複數）", 0], ["safer", "較安全的", 7]],
    speaking: ["比較兩件商品的價格與品質。", "說出偏好並提供理由。", "針對保固提出意見。"],
    passage: { en: "The first coffee machine is cheaper, but the second one is more reliable and lasts longer. In my opinion, the longer warranty is important. I would rather pay more and get the better machine because it is a safer choice.", zh: "第一台咖啡機較便宜，但第二台更可靠也更耐用。依我看，較長的保固很重要。我寧願多付錢買較好的機器，因為那是較安全的選擇。" },
  })
);

COURSE_PACK.sort((a, b) => a.day - b.day);
