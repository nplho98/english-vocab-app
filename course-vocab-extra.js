// Phase 3 CEFR 補充字彙。
// 資料來源：lratusa/wordmaster-wordlists（MIT）；CEFR B1/B2。
// 中文已用 OpenCC 轉為臺灣繁體；保留來源音標與雙語例句。
(function () {
  const entries = [
  {
    "t": "abnormal",
    "zh": "不正常的；異常的",
    "ph": "/æbˈnɔːrməl/",
    "example": "The doctor noticed an abnormal growth during the examination.",
    "exampleZh": "醫生在檢查中發現了一個不正常的生長物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aboard",
    "zh": "在船上；在飛機上",
    "ph": "/əˈbɔːrd/",
    "example": "All passengers are now aboard the plane.",
    "exampleZh": "所有乘客現在都在飛機上了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aborigine",
    "zh": "原住民",
    "ph": "/ˌæbəˈrɪdʒəni/",
    "example": "We learned about the traditions of the local aborigine community.",
    "exampleZh": "我們瞭解了當地原住民社區的傳統。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "absence",
    "zh": "缺席；缺乏",
    "ph": "/ˈæbsəns/",
    "example": "Her absence from the meeting was noted.",
    "exampleZh": "她缺席會議被記錄在案。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "absolutely",
    "zh": "絕對地；完全地",
    "ph": "/ˌæbsəˈluːtli/",
    "example": "I absolutely agree with you.",
    "exampleZh": "我完全同意你的看法。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "absorb",
    "zh": "吸收；吸引",
    "ph": "/əbˈzɔːrb/",
    "example": "The sponge will absorb the water.",
    "exampleZh": "海綿會吸收水分。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "abstract",
    "zh": "抽象的；摘要",
    "ph": "/ˈæbstrækt/",
    "example": "Abstract art is often difficult to understand.",
    "exampleZh": "抽象藝術通常很難理解。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "abundance",
    "zh": "豐富；大量",
    "ph": "/əˈbʌndəns/",
    "example": "There was an abundance of food at the party.",
    "exampleZh": "聚會上有很多食物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "abundant",
    "zh": "豐富的；大量的",
    "ph": "/əˈbʌndənt/",
    "example": "Rainfall is abundant in this area.",
    "exampleZh": "這個地區的降雨量很豐富。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "academic",
    "zh": "學術的；學院的",
    "ph": "/ˌækəˈdemɪk/",
    "example": "She has a strong academic record.",
    "exampleZh": "她有很強的學術記錄。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "academy",
    "zh": "學院；研究院",
    "ph": "/əˈkædəmi/",
    "example": "She attends a prestigious music academy.",
    "exampleZh": "她在一所著名的音樂學院學習。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accent",
    "zh": "口音；重音",
    "ph": "/ˈæksent/",
    "example": "He has a strong Scottish accent.",
    "exampleZh": "他有很重的蘇格蘭口音。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "acceptance",
    "zh": "接受；認可",
    "ph": "/əkˈseptəns/",
    "example": "Her acceptance into the university was a great achievement.",
    "exampleZh": "她被大學錄取是一項偉大的成就。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accessible",
    "zh": "可訪問的；易懂的",
    "ph": "/əkˈsesəbl/",
    "example": "The building is accessible to wheelchair users.",
    "exampleZh": "這座建築對輪椅使用者來說是可訪問的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accessory",
    "zh": "配件；飾品",
    "ph": "/əkˈsesəri/",
    "example": "She wore a beautiful scarf as an accessory.",
    "exampleZh": "她戴了一條漂亮的圍巾作為飾品。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accidental",
    "zh": "意外的；偶然的",
    "ph": "/ˌæksɪˈdentl/",
    "example": "The meeting was an accidental encounter.",
    "exampleZh": "這次會面是一次偶然的相遇。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accidentally",
    "zh": "意外地；偶然地",
    "ph": "/ˌæksɪˈdentəli/",
    "example": "I accidentally deleted the file.",
    "exampleZh": "我不小心刪除了文件。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accompany",
    "zh": "陪伴；伴隨",
    "ph": "/əˈkʌmpəni/",
    "example": "I will accompany you to the doctor.",
    "exampleZh": "我將陪你去看醫生。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accomplish",
    "zh": "完成；實現",
    "ph": "/əˈkʌmplɪʃ/",
    "example": "We need to accomplish this task by Friday.",
    "exampleZh": "我們需要在星期五之前完成這項任務。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accountant",
    "zh": "會計師",
    "ph": "/əˈkaʊntənt/",
    "example": "The accountant helps us manage our finances.",
    "exampleZh": "會計師幫助我們管理財務。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accuracy",
    "zh": "準確性；精確性",
    "ph": "/ˈækjərəsi/",
    "example": "The accuracy of the data is very important.",
    "exampleZh": "數據的準確性非常重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accurately",
    "zh": "準確地；精確地",
    "ph": "/ˈækjərətli/",
    "example": "The report accurately reflects the current situation.",
    "exampleZh": "這份報告準確地反映了當前的情況。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accuse",
    "zh": "指控；控告",
    "ph": "/əˈkjuːz/",
    "example": "Don't accuse me of something you can't prove.",
    "exampleZh": "不要指控我你無法證明的事情。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "accustom",
    "zh": "使習慣；使適應",
    "ph": "/əˈkʌstəm/",
    "example": "It takes time to accustom yourself to a new environment.",
    "exampleZh": "適應新環境需要時間。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ache",
    "zh": "疼痛；痠痛",
    "ph": "/eɪk/",
    "example": "She had a terrible ache in her back.",
    "exampleZh": "她的背部劇烈疼痛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "acknowledgment",
    "zh": "承認；感謝",
    "ph": "/əkˈnɒlɪdʒmənt/",
    "example": "The author included an acknowledgment of all the people who helped him.",
    "exampleZh": "作者感謝了所有幫助過他的人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "acquaintance",
    "zh": "熟人；認識",
    "ph": "/əˈkweɪntəns/",
    "example": "He is just a casual acquaintance from work.",
    "exampleZh": "他只是一個在工作中認識的普通熟人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "acquire",
    "zh": "獲得；取得",
    "ph": "/əˈkwaɪər/",
    "example": "The company plans to acquire several smaller businesses.",
    "exampleZh": "該公司計劃收購幾家較小的企業。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "active",
    "zh": "積極的；活躍的",
    "ph": "/ˈæktɪv/",
    "example": "He is a very active member of the community.",
    "exampleZh": "他是社區裡非常活躍的成員。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ad",
    "zh": "廣告",
    "ph": "/æd/",
    "example": "I saw an ad for a new car on television.",
    "exampleZh": "我在電視上看到了一個新車的廣告。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "addressee",
    "zh": "收件人；受話人",
    "ph": "/ˌæd.rɛˈsiː/",
    "example": "Please ensure the addressee's name is clearly written on the envelope.",
    "exampleZh": "請確保收件人的名字清楚地寫在信封上。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "administration",
    "zh": "管理；行政；政府",
    "ph": "/ədˌmɪn.ɪˈstreɪ.ʃən/",
    "example": "The school's administration is responsible for maintaining order and discipline.",
    "exampleZh": "學校的管理部門負責維持秩序和紀律。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "admiration",
    "zh": "欽佩；讚賞",
    "ph": "/ˌæd.məˈreɪ.ʃən/",
    "example": "I have great admiration for her dedication to her work.",
    "exampleZh": "我非常欽佩她對工作的奉獻。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "admission",
    "zh": "承認；准入；入場費",
    "ph": "/ədˈmɪʃ.ən/",
    "example": "Her admission of guilt surprised everyone in the courtroom.",
    "exampleZh": "她在法庭上承認有罪讓所有人都感到驚訝。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "adopt",
    "zh": "採用；收養",
    "ph": "/əˈdɒpt/",
    "example": "The company decided to adopt a new marketing strategy.",
    "exampleZh": "公司決定採用一種新的營銷策略。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "adorable",
    "zh": "可愛的；迷人的",
    "ph": "/əˈdɔː.rə.bəl/",
    "example": "The puppy is absolutely adorable.",
    "exampleZh": "這隻小狗真是太可愛了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "adverb",
    "zh": "副詞",
    "ph": "/ˈæd.vɜːb/",
    "example": "In the sentence 'She sings beautifully,' 'beautifully' is an adverb.",
    "exampleZh": "在句子“她唱得很美”中，“很美”是一個副詞。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "adverbial",
    "zh": "副詞性的；作副詞用的",
    "ph": "/ədˈvɜː.bi.əl/",
    "example": "The phrase 'in the morning' is an adverbial phrase.",
    "exampleZh": "短語“在早上”是一個副詞短語。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "advert",
    "zh": "廣告",
    "ph": "/ˈæd.vɜːt/",
    "example": "I saw an advert for a new car on television.",
    "exampleZh": "我在電視上看到了一個關於新車的廣告。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "adviser",
    "zh": "顧問",
    "ph": "/ədˈvaɪ.zər/",
    "example": "He works as a financial adviser.",
    "exampleZh": "他擔任財務顧問。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aerobics",
    "zh": "有氧運動",
    "ph": "/eəˈrəʊ.bɪks/",
    "example": "She goes to aerobics classes three times a week.",
    "exampleZh": "她每週上三次有氧運動課。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "affect",
    "zh": "影響；感動",
    "ph": "/əˈfekt/",
    "example": "The weather can affect your mood.",
    "exampleZh": "天氣會影響你的情緒。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "affection",
    "zh": "喜愛；感情",
    "ph": "/əˈfek.ʃən/",
    "example": "He showed his affection by giving her a hug.",
    "exampleZh": "他通過擁抱來表達他的喜愛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "afterward",
    "zh": "之後；後來",
    "ph": "/ˈæftərwərd/",
    "example": "We went to a restaurant afterward.",
    "exampleZh": "之後我們去了一家餐館。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "afterwards",
    "zh": "之後；後來",
    "ph": "/ˈæftərwərdz/",
    "example": "Afterwards, we went for a walk in the park.",
    "exampleZh": "之後，我們去公園散步了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "agenda",
    "zh": "議程；計劃",
    "ph": "/əˈdʒendə/",
    "example": "What's on the agenda for today's meeting?",
    "exampleZh": "今天會議的議程是什麼？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aggressive",
    "zh": "好鬥的；積極的",
    "ph": "/əˈɡresɪv/",
    "example": "The company has an aggressive marketing strategy.",
    "exampleZh": "這家公司有一個積極的營銷策略。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "agreement",
    "zh": "協議；同意",
    "ph": "/əˈɡriːmənt/",
    "example": "They signed an agreement to end the dispute.",
    "exampleZh": "他們簽署了一項協議以結束爭端。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "agricultural",
    "zh": "農業的",
    "ph": "/ˌæɡrɪˈkʌltʃərəl/",
    "example": "The region is known for its agricultural production.",
    "exampleZh": "這個地區以其農業生產而聞名。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "agriculture",
    "zh": "農業",
    "ph": "/ˈæɡrɪkʌltʃər/",
    "example": "Agriculture is the backbone of the country's economy.",
    "exampleZh": "農業是國家經濟的支柱。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aim",
    "zh": "目標；瞄準",
    "ph": "/eɪm/",
    "example": "My aim is to improve my English skills.",
    "exampleZh": "我的目標是提高我的英語技能。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "airline",
    "zh": "航空公司",
    "ph": "/ˈerlaɪn/",
    "example": "Which airline are you flying with?",
    "exampleZh": "你乘坐哪家航空公司的航班？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "alarm",
    "zh": "警報；鬧鐘",
    "ph": "/əˈlɑːrm/",
    "example": "The alarm went off at 6 AM.",
    "exampleZh": "鬧鐘在早上六點響了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "alcoholic",
    "zh": "酒精的；酗酒者",
    "ph": "/ˌælkəˈhɒlɪk/",
    "example": "Alcoholic beverages are restricted to people over 18.",
    "exampleZh": "酒精飲料僅限於18歲以上的人飲用。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "alike",
    "zh": "相似的；同樣地",
    "ph": "/əˈlaɪk/",
    "example": "The two sisters look very alike.",
    "exampleZh": "這對姐妹看起來非常相似。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "allowance",
    "zh": "津貼；零用錢",
    "ph": "/əˈlaʊəns/",
    "example": "My parents give me a weekly allowance.",
    "exampleZh": "我的父母每週給我零用錢。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aloud",
    "zh": "大聲地",
    "ph": "/əˈlaʊd/",
    "example": "Please read the passage aloud.",
    "exampleZh": "請大聲朗讀這段文章。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "alphabet",
    "zh": "字母表",
    "ph": "/ˈælfəbet/",
    "example": "The English alphabet has 26 letters.",
    "exampleZh": "英語字母表有26個字母。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "alternative",
    "zh": "替代的；選擇",
    "ph": "/ɔːlˈtɜːrnətɪv/",
    "example": "We need to find an alternative solution.",
    "exampleZh": "我們需要找到一個替代方案。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "altogether",
    "zh": "總共；完全地",
    "ph": "/ˌɔːltəˈɡeðər/",
    "example": "Altogether, we spent $50.",
    "exampleZh": "總共我們花了50美元。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "amazed",
    "zh": "驚訝的；驚奇的",
    "ph": "/əˈmeɪzd/",
    "example": "I was amazed by her talent.",
    "exampleZh": "我對她的才華感到驚訝。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "amazing",
    "zh": "令人驚奇的；了不起的",
    "ph": "/əˈmeɪzɪŋ/",
    "example": "The view from the top of the mountain was amazing.",
    "exampleZh": "從山頂看到的景色令人驚歎。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ambitious",
    "zh": "有雄心的；有野心的",
    "ph": "/æmˈbɪʃəs/",
    "example": "She is an ambitious young woman.",
    "exampleZh": "她是一位有雄心的年輕女性。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ambulance",
    "zh": "救護車",
    "ph": "/ˈæmbjələns/",
    "example": "Call an ambulance immediately.",
    "exampleZh": "立即叫救護車。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "amount",
    "zh": "數量；總額",
    "ph": "/əˈmaʊnt/",
    "example": "The amount of rain this year has been very low.",
    "exampleZh": "今年的降雨量非常少。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "amusing",
    "zh": "有趣的；好笑的",
    "ph": "/əˈmjuːzɪŋ/",
    "example": "The movie was very amusing.",
    "exampleZh": "這部電影非常有趣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "analysis",
    "zh": "分析",
    "ph": "/əˈnæləsɪs/",
    "example": "The company conducted a thorough analysis of the market.",
    "exampleZh": "公司對市場進行了徹底的分析。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "analyze",
    "zh": "分析",
    "ph": "/ˈænəlaɪz/",
    "example": "We need to analyze the data before making a decision.",
    "exampleZh": "在做出決定之前，我們需要分析數據。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "anger",
    "zh": "憤怒；生氣",
    "ph": "/ˈæŋɡər/",
    "example": "He felt a surge of anger when he heard the news.",
    "exampleZh": "當他聽到這個消息時，他感到一股憤怒。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "animated",
    "zh": "動畫的；活潑的",
    "ph": "/ˈænɪmeɪtɪd/",
    "example": "The children enjoyed watching the animated movie.",
    "exampleZh": "孩子們喜歡看動畫電影。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "animation",
    "zh": "動畫",
    "ph": "/ˌænɪˈmeɪʃən/",
    "example": "Animation is a popular form of entertainment for all ages.",
    "exampleZh": "動畫是一種適合所有年齡段的流行娛樂形式。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "announce",
    "zh": "宣佈；宣告",
    "ph": "/əˈnaʊns/",
    "example": "The company will announce its new product next week.",
    "exampleZh": "公司將於下週宣佈其新產品。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "announcement",
    "zh": "公告；聲明",
    "ph": "/əˈnaʊnsmənt/",
    "example": "Did you hear the announcement about the new policy?",
    "exampleZh": "你聽到關於新政策的公告了嗎？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "annoyance",
    "zh": "煩惱；惱怒",
    "ph": "/əˈnɔɪəns/",
    "example": "The constant noise was a major annoyance.",
    "exampleZh": "持續的噪音是一個主要的煩惱。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "annoyed",
    "zh": "惱火的；生氣的",
    "ph": "/əˈnɔɪd/",
    "example": "She was annoyed by his constant complaining.",
    "exampleZh": "她對他的不斷抱怨感到惱火。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "annually",
    "zh": "每年地",
    "ph": "/ˈænjuəli/",
    "example": "The subscription fee is paid annually.",
    "exampleZh": "訂閱費是每年支付的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "anti",
    "zh": "反對；反",
    "ph": "/ˈænti/",
    "example": "He is anti-smoking and believes it should be banned.",
    "exampleZh": "他反對吸菸，並認為應該禁止吸菸。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "antique",
    "zh": "古董；古老的",
    "ph": "/ænˈtiːk/",
    "example": "She collects antique furniture and art.",
    "exampleZh": "她收藏古董傢俱和藝術品。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "antonym",
    "zh": "反義詞",
    "ph": "/ˈæntənɪm/",
    "example": "The antonym of 'hot' is 'cold'.",
    "exampleZh": "“熱”的反義詞是“冷”。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "anxiety",
    "zh": "焦慮；憂慮",
    "ph": "/æŋˈzaɪəti/",
    "example": "She felt a lot of anxiety before the exam.",
    "exampleZh": "考試前她感到非常焦慮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "anxiously",
    "zh": "焦慮地；不安地",
    "ph": "/ˈæŋkʃəsli/",
    "example": "He waited anxiously for the results.",
    "exampleZh": "他焦慮地等待著結果。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "anyhow",
    "zh": "無論如何；總之",
    "ph": "/ˈenihaʊ/",
    "example": "I didn't want to go, but I went anyhow.",
    "exampleZh": "我不想去，但無論如何我還是去了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ape",
    "zh": "猿",
    "ph": "/eɪp/",
    "example": "The zoo has several different species of ape.",
    "exampleZh": "動物園裡有幾種不同種類的猿。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "apology",
    "zh": "道歉",
    "ph": "/əˈpɒlədʒi/",
    "example": "He offered a sincere apology for his mistake.",
    "exampleZh": "他為自己的錯誤表達了真誠的道歉。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "appeal",
    "zh": "呼籲；吸引",
    "ph": "/əˈpiːl/",
    "example": "The charity made an appeal for donations.",
    "exampleZh": "慈善機構呼籲捐款。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "applaud",
    "zh": "鼓掌；稱讚",
    "ph": "/əˈplɔːd/",
    "example": "We applaud their efforts to improve the environment.",
    "exampleZh": "我們稱讚他們為改善環境所做的努力。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "applause",
    "zh": "掌聲",
    "ph": "/əˈplɔːz/",
    "example": "The speaker was greeted with enthusiastic applause.",
    "exampleZh": "演講者受到了熱烈的掌聲歡迎。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "application",
    "zh": "申請；應用",
    "ph": "/ˌæplɪˈkeɪʃn/",
    "example": "I sent in my application for the job.",
    "exampleZh": "我遞交了工作的申請。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "appreciation",
    "zh": "感謝；欣賞",
    "ph": "/əˌpriːʃiˈeɪʃn/",
    "example": "I want to express my appreciation for your help.",
    "exampleZh": "我想表達我對你的幫助的感謝。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "approach",
    "zh": "接近；方法",
    "ph": "/əˈprəʊtʃ/",
    "example": "We need a new approach to solve this problem.",
    "exampleZh": "我們需要一種新的方法來解決這個問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "approximately",
    "zh": "大約；近似地",
    "ph": "/əˈprɒksɪmətli/",
    "example": "The journey will take approximately three hours.",
    "exampleZh": "這段旅程大約需要三個小時。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "architect",
    "zh": "建築師",
    "ph": "/ˈɑːrkɪtekt/",
    "example": "The architect designed a beautiful and modern building.",
    "exampleZh": "這位建築師設計了一座美麗而現代的建築。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "arithmetic",
    "zh": "算術",
    "ph": "/əˈrɪθmətɪk/",
    "example": "Children learn basic arithmetic in primary school.",
    "exampleZh": "孩子們在小學學習基礎算術。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "army",
    "zh": "軍隊",
    "ph": "/ˈɑːrmi/",
    "example": "He served in the army for five years.",
    "exampleZh": "他在軍隊服役了五年。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "arrange",
    "zh": "安排；整理",
    "ph": "/əˈreɪndʒ/",
    "example": "I need to arrange a meeting with the client.",
    "exampleZh": "我需要安排與客戶的會面。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "arrangement",
    "zh": "安排；佈置",
    "ph": "/əˈreɪndʒmənt/",
    "example": "We have a special arrangement with the hotel for discounted rates.",
    "exampleZh": "我們與酒店有特別的安排，可以享受折扣價。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "arrow",
    "zh": "箭；箭頭",
    "ph": "/ˈæroʊ/",
    "example": "The archer aimed the arrow at the target.",
    "exampleZh": "弓箭手將箭瞄準目標。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "artist",
    "zh": "藝術家",
    "ph": "/ˈɑːrtɪst/",
    "example": "The artist is famous for his landscape paintings.",
    "exampleZh": "這位藝術家以其風景畫而聞名。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "artistic",
    "zh": "藝術的；有藝術天賦的",
    "ph": "/ɑːrˈtɪstɪk/",
    "example": "She has an artistic flair for interior design.",
    "exampleZh": "她在室內設計方面具有藝術天賦。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ashamed",
    "zh": "慚愧的；羞恥的",
    "ph": "/əˈʃeɪmd/",
    "example": "He felt ashamed of his behavior at the party.",
    "exampleZh": "他對自己在聚會上的行為感到慚愧。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aside",
    "zh": "在旁邊；到一邊",
    "ph": "/əˈsaɪd/",
    "example": "He pulled the curtain aside to look out the window.",
    "exampleZh": "他把窗簾拉到一邊，向窗外看去。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aspirin",
    "zh": "阿司匹林",
    "ph": "/ˈæsprɪn/",
    "example": "I took an aspirin to relieve my headache.",
    "exampleZh": "我吃了一片阿司匹林來緩解頭痛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "assign",
    "zh": "分配；指派",
    "ph": "/əˈsaɪn/",
    "example": "The teacher will assign homework for the weekend.",
    "exampleZh": "老師會佈置週末的作業。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "assignment",
    "zh": "作業；任務",
    "ph": "/əˈsaɪnmənt/",
    "example": "The assignment was more difficult than I expected.",
    "exampleZh": "這項任務比我預期的要困難。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "assist",
    "zh": "幫助；協助",
    "ph": "/əˈsɪst/",
    "example": "Can I assist you with your luggage?",
    "exampleZh": "我可以幫你拿行李嗎？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "associate",
    "zh": "聯繫；交往；夥伴",
    "ph": "/əˈsoʊʃieɪt/",
    "example": "I associate that song with my childhood.",
    "exampleZh": "我把那首歌和我的童年聯繫起來。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "assume",
    "zh": "假設；認為",
    "ph": "/əˈsuːm/",
    "example": "I assume you've already read the instructions.",
    "exampleZh": "我假設你已經閱讀了說明書。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "astronomer",
    "zh": "天文學家",
    "ph": "/əˈstrɒnəmər/",
    "example": "The astronomer studies the stars and planets.",
    "exampleZh": "天文學家研究恆星和行星。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "athletic",
    "zh": "運動的；健壯的",
    "ph": "/æθˈletɪk/",
    "example": "He is very athletic and enjoys playing sports.",
    "exampleZh": "他非常健壯，喜歡運動。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "Atlantic",
    "zh": "大西洋",
    "ph": "/ətˈlæntɪk/",
    "example": "The ship sailed across the Atlantic Ocean.",
    "exampleZh": "這艘船橫跨大西洋航行。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "atomic",
    "zh": "原子的",
    "ph": "/əˈtɒmɪk/",
    "example": "Atomic energy can be used for peaceful purposes.",
    "exampleZh": "原子能可以用於和平目的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "attachment",
    "zh": "附件；依戀",
    "ph": "/əˈtætʃmənt/",
    "example": "I've sent you an email with an attachment.",
    "exampleZh": "我給你發了一封帶有附件的電子郵件。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "attain",
    "zh": "達到；獲得",
    "ph": "/əˈteɪn/",
    "example": "He worked hard to attain his goals.",
    "exampleZh": "他努力工作以達到他的目標。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "attempt",
    "zh": "嘗試；企圖",
    "ph": "/əˈtempt/",
    "example": "I will attempt to finish the project by Friday.",
    "exampleZh": "我將嘗試在星期五之前完成這個項目。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "attraction",
    "zh": "吸引力；景點",
    "ph": "/əˈtrækʃn/",
    "example": "The Eiffel Tower is a major tourist attraction.",
    "exampleZh": "埃菲爾鐵塔是一個主要的旅遊景點。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "authority",
    "zh": "權力；權威",
    "ph": "/ɔːˈθɒrəti/",
    "example": "The police have the authority to arrest criminals.",
    "exampleZh": "警察有權逮捕罪犯。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "auxiliary",
    "zh": "輔助的；輔助",
    "ph": "/ɔːɡˈzɪliəri/",
    "example": "Auxiliary verbs are used to form tenses.",
    "exampleZh": "助動詞用於構成時態。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "avenue",
    "zh": "大街；途徑",
    "ph": "/ˈævənjuː/",
    "example": "The hotel is located on a wide avenue.",
    "exampleZh": "這家酒店位於一條寬闊的大街上。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "award",
    "zh": "獎勵；授予",
    "ph": "/əˈwɔːd/",
    "example": "She received an award for her outstanding performance.",
    "exampleZh": "她因其出色的表現而獲得了獎勵。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "aware",
    "zh": "意識到的；知道的",
    "ph": "/əˈweər/",
    "example": "I was not aware of the problem.",
    "exampleZh": "我沒有意識到這個問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "awareness",
    "zh": "意識；認識",
    "ph": "/əˈweənəs/",
    "example": "We need to raise awareness about climate change.",
    "exampleZh": "我們需要提高人們對氣候變化的認識。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "awesome",
    "zh": "極好的；令人驚歎的",
    "ph": "/ˈɔːsəm/",
    "example": "The concert was awesome; I really enjoyed it.",
    "exampleZh": "這場音樂會太棒了；我真的很喜歡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "awkward",
    "zh": "尷尬的；笨拙的",
    "ph": "/ˈɔːkwərd/",
    "example": "There was an awkward silence after his comment.",
    "exampleZh": "在他的評論之後，出現了一陣尷尬的沉默。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "babysit",
    "zh": "照看小孩",
    "ph": "/ˈbeɪbisɪt/",
    "example": "I often babysit my younger sister on weekends.",
    "exampleZh": "我經常在週末照看我的妹妹。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "babysitter",
    "zh": "保姆；臨時照看小孩者",
    "ph": "/ˈbeɪbisɪtər/",
    "example": "We need to find a reliable babysitter for our children.",
    "exampleZh": "我們需要為我們的孩子找一個可靠的保姆。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "backache",
    "zh": "背痛",
    "ph": "/ˈbækeɪk/",
    "example": "She has a terrible backache from sitting at her desk all day.",
    "exampleZh": "她因為整天坐在辦公桌前而感到嚴重的背痛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "backpacker",
    "zh": "揹包客",
    "ph": "/ˈbækpækər/",
    "example": "He is a backpacker who travels around the world on a budget.",
    "exampleZh": "他是一個揹包客，以有限的預算環遊世界。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "backpacking",
    "zh": "揹包旅行",
    "ph": "/ˈbækpækɪŋ/",
    "example": "They went backpacking through Europe last summer.",
    "exampleZh": "去年夏天，他們去歐洲揹包旅行。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bacon",
    "zh": "培根",
    "ph": "/ˈbeɪkən/",
    "example": "I like to have bacon and eggs for breakfast.",
    "exampleZh": "我喜歡早餐吃培根和雞蛋。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "baggage",
    "zh": "行李",
    "ph": "/ˈbæɡɪdʒ/",
    "example": "Where is the baggage claim area?",
    "exampleZh": "行李領取處在哪裡？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "baker",
    "zh": "麵包師",
    "ph": "/ˈbeɪkər/",
    "example": "The baker makes delicious cakes and pastries.",
    "exampleZh": "這位麵包師製作美味的蛋糕和糕點。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bakery",
    "zh": "麵包店",
    "ph": "/ˈbeɪkəri/",
    "example": "I bought a loaf of bread at the bakery.",
    "exampleZh": "我在麵包店買了一條麵包。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bald",
    "zh": "禿頭的",
    "ph": "/bɔːld/",
    "example": "He started going bald in his early thirties.",
    "exampleZh": "他在三十歲出頭就開始禿頂了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bang",
    "zh": "砰；巨響",
    "ph": "/bæŋ/",
    "example": "We heard a loud bang from the street.",
    "exampleZh": "我們聽到街上傳來一聲巨響。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bar",
    "zh": "酒吧；條；障礙",
    "ph": "/bɑːr/",
    "example": "They met at a bar after work.",
    "exampleZh": "他們下班後在酒吧見面了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bare",
    "zh": "赤裸的；光禿禿的",
    "ph": "/ber/",
    "example": "He walked around the house in his bare feet.",
    "exampleZh": "他在房子裡赤著腳走來走去。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "barely",
    "zh": " едва; 勉強；幾乎不",
    "ph": "/ˈberli/",
    "example": "I barely had enough money to pay the rent.",
    "exampleZh": "我勉強有足夠的錢來支付房租。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bark",
    "zh": "樹皮；吠叫",
    "ph": "/bɑːrk/",
    "example": "The dog started to bark loudly at the mailman.",
    "exampleZh": "狗開始對著郵遞員大聲吠叫。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "barman",
    "zh": "酒吧招待員",
    "ph": "/ˈbɑːrmən/",
    "example": "The barman mixed a delicious cocktail for her.",
    "exampleZh": "酒吧招待員為她調了一杯美味的雞尾酒。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "barrel",
    "zh": "桶",
    "ph": "/ˈbærəl/",
    "example": "They rolled the barrel down the hill.",
    "exampleZh": "他們把桶從山上滾了下來。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "base",
    "zh": "基礎；基地",
    "ph": "/beɪs/",
    "example": "The statue has a solid stone base.",
    "exampleZh": "這座雕像有一個堅固的石頭底座。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "basin",
    "zh": "盆；水池",
    "ph": "/ˈbeɪsn/",
    "example": "She washed her hands in the basin.",
    "exampleZh": "她在水池裡洗了手。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "basis",
    "zh": "基礎；根據",
    "ph": "/ˈbeɪsɪs/",
    "example": "The decision was made on the basis of the evidence.",
    "exampleZh": "這個決定是根據證據做出的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bathe",
    "zh": "洗澡；沐浴",
    "ph": "/beɪð/",
    "example": "I like to bathe in the evening to relax.",
    "exampleZh": "我喜歡在晚上洗澡放鬆。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "battle",
    "zh": "戰鬥；戰役",
    "ph": "/ˈbætl/",
    "example": "The soldiers prepared for the upcoming battle.",
    "exampleZh": "士兵們為即將到來的戰鬥做準備。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "beast",
    "zh": "野獸；牲畜",
    "ph": "/biːst/",
    "example": "The hunter tracked the beast through the forest.",
    "exampleZh": "獵人追蹤野獸穿過森林。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "beat",
    "zh": "打；擊敗",
    "ph": "/biːt/",
    "example": "The drummer began to beat the drums loudly.",
    "exampleZh": "鼓手開始大聲地敲鼓。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "beautifully",
    "zh": "美麗地；出色地",
    "ph": "/ˈbjuːtɪfəli/",
    "example": "She sings beautifully.",
    "exampleZh": "她唱得很動聽。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "beaver",
    "zh": "海狸",
    "ph": "/ˈbiːvər/",
    "example": "We saw a beaver swimming in the river.",
    "exampleZh": "我們看到一隻海狸在河裡游泳。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bedside",
    "zh": "床邊",
    "ph": "/ˈbedsaɪd/",
    "example": "She kept a glass of water on her bedside table.",
    "exampleZh": "她在床頭櫃上放了一杯水。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "behalf",
    "zh": "代表；為了",
    "ph": "/bɪˈhɑːf/",
    "example": "I am writing on behalf of my client.",
    "exampleZh": "我代表我的客戶寫信。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "behave",
    "zh": "表現；行為",
    "ph": "/bɪˈheɪv/",
    "example": "The children were told to behave themselves.",
    "exampleZh": "孩子們被告知要好好表現。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "beloved",
    "zh": "心愛的；摯愛的",
    "ph": "/bɪˈlʌvɪd/",
    "example": "She is a beloved member of the community.",
    "exampleZh": "她是社區裡一位受人愛戴的成員。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "beneath",
    "zh": "在...之下；低於",
    "ph": "/bɪˈniːθ/",
    "example": "The cat was hiding beneath the table.",
    "exampleZh": "貓藏在桌子下面。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bent",
    "zh": "彎曲的；決心的",
    "ph": "/bent/",
    "example": "The metal rod was bent out of shape.",
    "exampleZh": "那根金屬棒被彎曲變形了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "besides",
    "zh": "此外；而且",
    "ph": "/bɪˈsaɪdz/",
    "example": "Besides being intelligent, she is also very kind.",
    "exampleZh": "除了聰明之外，她還非常善良。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bet",
    "zh": "打賭；賭注",
    "ph": "/bet/",
    "example": "I bet you can't guess what I'm thinking.",
    "exampleZh": "我打賭你猜不到我在想什麼。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bilingual",
    "zh": "雙語的",
    "ph": "/baɪˈlɪŋɡwəl/",
    "example": "She is bilingual in English and French.",
    "exampleZh": "她精通英語和法語。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bin",
    "zh": "垃圾箱；箱子",
    "ph": "/bɪn/",
    "example": "Please put your rubbish in the bin.",
    "exampleZh": "請把你的垃圾扔進垃圾箱。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "biochemistry",
    "zh": "生物化學",
    "ph": "/ˌbaɪoʊˈkemɪstri/",
    "example": "She is studying biochemistry at university.",
    "exampleZh": "她正在大學學習生物化學。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "biography",
    "zh": "傳記",
    "ph": "/baɪˈɒɡrəfi/",
    "example": "I'm reading a biography of Marie Curie.",
    "exampleZh": "我正在讀瑪麗·居里的傳記。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "biology",
    "zh": "生物學",
    "ph": "/baɪˈɒlədʒi/",
    "example": "Biology is the study of living things.",
    "exampleZh": "生物學是對生物的研究。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bishop",
    "zh": "主教",
    "ph": "/ˈbɪʃəp/",
    "example": "The bishop gave a sermon at the cathedral.",
    "exampleZh": "主教在大教堂布道。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bite",
    "zh": "咬；一口",
    "ph": "/baɪt/",
    "example": "The dog tried to bite me.",
    "exampleZh": "那隻狗試圖咬我。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "blame",
    "zh": "責備；責任",
    "ph": "/bleɪm/",
    "example": "Don't blame me for your mistakes.",
    "exampleZh": "不要因為你的錯誤而責備我。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bleed",
    "zh": "流血",
    "ph": "/bliːd/",
    "example": "The cut on his finger started to bleed.",
    "exampleZh": "他手指上的傷口開始流血。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bless",
    "zh": "祝福；保佑",
    "ph": "/blɛs/",
    "example": "May God bless you and your family.",
    "exampleZh": "願上帝保佑你和你的家人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "blessing",
    "zh": "祝福；恩賜",
    "ph": "/ˈblɛsɪŋ/",
    "example": "Having a supportive family is a true blessing.",
    "exampleZh": "擁有一個支持你的家庭是一種真正的恩賜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "block",
    "zh": "塊；阻礙",
    "ph": "/blɒk/",
    "example": "A large block of ice blocked the road.",
    "exampleZh": "一大塊冰擋住了路。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "blog",
    "zh": "博客",
    "ph": "/blɒɡ/",
    "example": "She writes a blog about her travels.",
    "exampleZh": "她寫了一個關於她旅行的博客。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "blogger",
    "zh": "博主",
    "ph": "/ˈblɒɡər/",
    "example": "He is a popular blogger with thousands of followers.",
    "exampleZh": "他是一位受歡迎的博主，擁有成千上萬的粉絲。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "blush",
    "zh": "臉紅",
    "ph": "/blʌʃ/",
    "example": "His cheeks were flushed with a blush.",
    "exampleZh": "他的臉頰因臉紅而發紅。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "board",
    "zh": "木板；委員會",
    "ph": "/bɔːrd/",
    "example": "The company is run by a board of directors.",
    "exampleZh": "這家公司由董事會管理。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "boast",
    "zh": "吹噓；自誇",
    "ph": "/boʊst/",
    "example": "He likes to boast about his achievements.",
    "exampleZh": "他喜歡吹噓他的成就。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bold",
    "zh": "大膽的；勇敢的",
    "ph": "/boʊld/",
    "example": "She made a bold decision to quit her job.",
    "exampleZh": "她做出了一個大膽的決定，辭掉了她的工作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "boldly",
    "zh": "大膽地；勇敢地",
    "ph": "/ˈboʊldli/",
    "example": "She boldly expressed her opinion.",
    "exampleZh": "她大膽地表達了自己的觀點。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bond",
    "zh": "聯繫；債券",
    "ph": "/bɒnd/",
    "example": "There is a strong bond between them.",
    "exampleZh": "他們之間有很強的聯繫。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "booking",
    "zh": "預訂",
    "ph": "/ˈbʊkɪŋ/",
    "example": "I have a booking for a hotel room.",
    "exampleZh": "我預訂了一個酒店房間。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "boom",
    "zh": "繁榮；轟鳴",
    "ph": "/buːm/",
    "example": "The city experienced an economic boom after the new factory opened.",
    "exampleZh": "新工廠開業後，這座城市經歷了經濟繁榮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "border",
    "zh": "邊界；邊緣",
    "ph": "/ˈbɔːrdər/",
    "example": "The border between the two countries is heavily guarded.",
    "exampleZh": "兩國之間的邊界受到嚴密守衛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bore",
    "zh": "使厭煩；令人厭煩的人",
    "ph": "/bɔːr/",
    "example": "Long lectures tend to bore the students.",
    "exampleZh": "冗長的講座往往會讓學生感到厭煩。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "boredom",
    "zh": "厭倦；無聊",
    "ph": "/ˈbɔːrdəm/",
    "example": "She tried to alleviate her boredom by reading a book.",
    "exampleZh": "她試圖通過讀書來緩解她的無聊。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bother",
    "zh": "打擾；煩惱",
    "ph": "/ˈbɑːðər/",
    "example": "Please don't bother me when I'm working.",
    "exampleZh": "我工作的時候請不要打擾我。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bounce",
    "zh": "彈跳；反彈",
    "ph": "/baʊns/",
    "example": "The ball began to bounce higher and higher.",
    "exampleZh": "球開始越彈越高。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bound",
    "zh": "束縛；界限；註定的",
    "ph": "/baʊnd/",
    "example": "The prisoner was bound by chains.",
    "exampleZh": "囚犯被鏈條束縛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bow",
    "zh": "鞠躬；弓",
    "ph": "/baʊ/",
    "example": "The performer took a bow after the show.",
    "exampleZh": "表演者在演出結束後鞠了一躬。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "boxing",
    "zh": "拳擊",
    "ph": "/ˈbɑːksɪŋ/",
    "example": "He enjoys boxing as a way to stay fit.",
    "exampleZh": "他喜歡拳擊，以此來保持健康。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bracelet",
    "zh": "手鐲",
    "ph": "/ˈbreɪslət/",
    "example": "She wore a silver bracelet on her wrist.",
    "exampleZh": "她的手腕上戴著一個銀手鐲。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "brainstorming",
    "zh": "頭腦風暴",
    "ph": "/ˈbreɪnstɔːrmɪŋ/",
    "example": "The team had a brainstorming session to generate new ideas.",
    "exampleZh": "團隊進行了一次頭腦風暴會議，以產生新的想法。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "brand-new",
    "zh": "全新的",
    "ph": "/ˌbrænd ˈnuː/",
    "example": "She bought a brand-new car last week.",
    "exampleZh": "她上週買了一輛全新的汽車。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "brass",
    "zh": "黃銅；黃銅製品",
    "ph": "/bræs/",
    "example": "The door handle was made of solid brass.",
    "exampleZh": "門把手是用純黃銅製成的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bravely",
    "zh": "勇敢地；無畏地",
    "ph": "/ˈbreɪvli/",
    "example": "She bravely faced her fears and gave the speech.",
    "exampleZh": "她勇敢地面對恐懼，發表了演講。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "breakthrough",
    "zh": "突破；突破性進展",
    "ph": "/ˈbreɪkθruː/",
    "example": "Scientists have made a major breakthrough in cancer research.",
    "exampleZh": "科學家們在癌症研究方面取得了重大突破。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "breast",
    "zh": "胸部；乳房",
    "ph": "/brest/",
    "example": "She held the baby close to her breast.",
    "exampleZh": "她把嬰兒緊緊地抱在胸前。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "breath",
    "zh": "呼吸；氣息",
    "ph": "/breθ/",
    "example": "He took a deep breath before diving into the pool.",
    "exampleZh": "他深吸一口氣，然後跳入泳池。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "breathless",
    "zh": "氣喘吁吁的；屏息的",
    "ph": "/ˈbreθləs/",
    "example": "She was breathless after running up the stairs.",
    "exampleZh": "跑上樓梯後，她氣喘吁吁。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "breeding",
    "zh": "繁殖；教養",
    "ph": "/ˈbriːdɪŋ/",
    "example": "The breeding season for birds is in the spring.",
    "exampleZh": "鳥類的繁殖季節在春天。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "briefly",
    "zh": "簡短地；暫時地",
    "ph": "/ˈbriːfli/",
    "example": "Let me briefly explain the situation.",
    "exampleZh": "讓我簡短地解釋一下情況。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "brightly",
    "zh": "明亮地；鮮豔地",
    "ph": "/ˈbraɪtli/",
    "example": "The sun shone brightly in the sky.",
    "exampleZh": "太陽在天空中明亮地照耀。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "broad",
    "zh": "寬闊的；廣泛的",
    "ph": "/brɔːd/",
    "example": "The river is very broad at this point.",
    "exampleZh": "這條河在這個地方非常寬闊。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "broccoli",
    "zh": "西蘭花",
    "ph": "/ˈbrɒkəli/",
    "example": "I like to eat broccoli with cheese sauce.",
    "exampleZh": "我喜歡吃加了奶酪醬的西蘭花。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bronze",
    "zh": "青銅；青銅色",
    "ph": "/brɒnz/",
    "example": "The statue was made of bronze.",
    "exampleZh": "這座雕像是由青銅製成的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "brotherhood",
    "zh": "兄弟情誼；手足之情",
    "ph": "/ˈbrʌðərhʊd/",
    "example": "The club promotes a sense of brotherhood among its members.",
    "exampleZh": "這個俱樂部旨在促進成員之間的兄弟情誼。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "buddy",
    "zh": "夥伴；朋友",
    "ph": "/ˈbʌdi/",
    "example": "He's my best buddy at school.",
    "exampleZh": "他是我在學校最好的夥伴。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "builder",
    "zh": "建築工人；建造者",
    "ph": "/ˈbɪldər/",
    "example": "He is a skilled builder with many years of experience.",
    "exampleZh": "他是一位經驗豐富的熟練建築工人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bullet",
    "zh": "子彈",
    "ph": "/ˈbʊlɪt/",
    "example": "The police found a bullet at the crime scene.",
    "exampleZh": "警察在犯罪現場發現了一顆子彈。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bulletin",
    "zh": "公告；簡報",
    "ph": "/ˈbʊlətɪn/",
    "example": "The company publishes a weekly bulletin for its employees.",
    "exampleZh": "公司為員工出版每週簡報。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bump",
    "zh": "碰撞；顛簸",
    "ph": "/bʌmp/",
    "example": "The car hit a bump in the road.",
    "exampleZh": "汽車在路上撞到了一個顛簸。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bunch",
    "zh": "串；束；一群",
    "ph": "/bʌntʃ/",
    "example": "She bought a bunch of flowers for her mother.",
    "exampleZh": "她給她的母親買了一束花。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bureau",
    "zh": "局；辦事處",
    "ph": "/ˈbjʊəroʊ/",
    "example": "The travel bureau can help you plan your trip.",
    "exampleZh": "旅行社可以幫助你計劃你的旅行。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "burglar",
    "zh": "竊賊；盜賊",
    "ph": "/ˈbɜːrɡlər/",
    "example": "The burglar broke into the house through the back window.",
    "exampleZh": "竊賊從後窗闖入了房子。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "burn",
    "zh": "燒傷；燃燒",
    "ph": "/bɜːrn/",
    "example": "She got a burn while cooking dinner.",
    "exampleZh": "她在做晚飯時被燒傷了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "burning",
    "zh": "燃燒的；強烈的",
    "ph": "/ˈbɜːrnɪŋ/",
    "example": "The burning building was evacuated quickly.",
    "exampleZh": "燃燒的建築物很快被疏散了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "bust",
    "zh": "半身像；搜查",
    "ph": "/bʌst/",
    "example": "The museum has a bust of the famous poet.",
    "exampleZh": "博物館裡有一尊著名詩人的半身像。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "butcher",
    "zh": "屠夫；肉商",
    "ph": "/ˈbʊtʃər/",
    "example": "The butcher sells fresh meat every day.",
    "exampleZh": "屠夫每天都賣新鮮的肉。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "buyer",
    "zh": "買家；購買者",
    "ph": "/ˈbaɪər/",
    "example": "The buyer was happy with the price of the house.",
    "exampleZh": "買家對房子的價格很滿意。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cabbage",
    "zh": "捲心菜；洋白菜",
    "ph": "/ˈkæbɪdʒ/",
    "example": "We grew cabbage in our garden this year.",
    "exampleZh": "今年我們在花園裡種了捲心菜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cage",
    "zh": "籠子；牢籠",
    "ph": "/keɪdʒ/",
    "example": "The bird was kept in a cage.",
    "exampleZh": "鳥被關在籠子裡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "calculate",
    "zh": "計算；估算",
    "ph": "/ˈkælkjuleɪt/",
    "example": "You need to calculate the total cost before you buy it.",
    "exampleZh": "在購買之前，你需要計算總成本。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "calculation",
    "zh": "計算；估算",
    "ph": "/ˌkælkjuˈleɪʃən/",
    "example": "The calculation was incorrect, so we need to do it again.",
    "exampleZh": "計算不正確，所以我們需要重新計算。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "calculator",
    "zh": "計算器",
    "ph": "/ˈkælkjuleɪtər/",
    "example": "I used a calculator to solve the math problem.",
    "exampleZh": "我用計算器解決了這道數學題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "calf",
    "zh": "小牛；小腿",
    "ph": "/kæf/",
    "example": "He strained his calf muscle while running.",
    "exampleZh": "他跑步時拉傷了小腿肌肉。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "caller",
    "zh": "來電者；拜訪者",
    "ph": "/ˈkɔːlər/",
    "example": "The caller left a message on the answering machine.",
    "exampleZh": "來電者在答錄機上留言了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "calm",
    "zh": "平靜的；鎮定的",
    "ph": "/kɑːm/",
    "example": "The sea was calm this morning.",
    "exampleZh": "今天早上大海很平靜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "calmness",
    "zh": "平靜；鎮定",
    "ph": "/ˈkɑːmnəs/",
    "example": "She admired his calmness in the face of danger.",
    "exampleZh": "她欽佩他在危險面前的冷靜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "camel",
    "zh": "駱駝",
    "ph": "/ˈkæməl/",
    "example": "The trader used a camel to carry his goods across the desert.",
    "exampleZh": "商人用駱駝馱運貨物穿越沙漠。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "campsite",
    "zh": "營地；露營地",
    "ph": "/ˈkæmpsaɪt/",
    "example": "We found a beautiful campsite near the river.",
    "exampleZh": "我們在河邊找到一個美麗的營地。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cancel",
    "zh": "取消；作廢",
    "ph": "/ˈkænsəl/",
    "example": "I had to cancel my appointment because I was sick.",
    "exampleZh": "我因為生病不得不取消了我的預約。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cancer",
    "zh": "癌症",
    "ph": "/ˈkænsər/",
    "example": "Early detection is important in the treatment of cancer.",
    "exampleZh": "早期發現對於癌症的治療非常重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "canned",
    "zh": "罐裝的",
    "ph": "/kænd/",
    "example": "We bought some canned tomatoes for the pasta sauce.",
    "exampleZh": "我們買了一些罐裝番茄做意大利麵醬。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "canteen",
    "zh": "食堂；餐廳",
    "ph": "/kænˈtiːn/",
    "example": "The canteen offers a variety of affordable meals.",
    "exampleZh": "食堂提供各種價格實惠的飯菜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "capable",
    "zh": "有能力的；能幹的",
    "ph": "/ˈkeɪpəbəl/",
    "example": "She is a very capable manager.",
    "exampleZh": "她是一位非常有能力的經理。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "capsule",
    "zh": "膠囊；太空艙",
    "ph": "/ˈkæpsjuːl/",
    "example": "The medicine is in capsule form.",
    "exampleZh": "這種藥是膠囊形式的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "capture",
    "zh": "捕獲；俘獲；捕捉",
    "ph": "/ˈkæptʃər/",
    "example": "The soldiers managed to capture the enemy.",
    "exampleZh": "士兵們設法俘獲了敵人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "careless",
    "zh": "粗心的；漫不經心的",
    "ph": "/ˈkeərləs/",
    "example": "It was careless of you to leave the door unlocked.",
    "exampleZh": "你沒鎖門真是太粗心了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "carelessly",
    "zh": "粗心地；漫不經心地",
    "ph": "/ˈkeərləsli/",
    "example": "He carelessly left the door unlocked.",
    "exampleZh": "他粗心地忘了鎖門。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "carelessness",
    "zh": "粗心；疏忽",
    "ph": "/ˈkeərləsnəs/",
    "example": "His carelessness caused the accident.",
    "exampleZh": "他的粗心導致了事故。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "carpet",
    "zh": "地毯",
    "ph": "/ˈkɑːrpɪt/",
    "example": "We need to buy a new carpet for the living room.",
    "exampleZh": "我們需要為客廳買一塊新地毯。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "carriage",
    "zh": "馬車；車廂",
    "ph": "/ˈkærɪdʒ/",
    "example": "The queen arrived in a horse-drawn carriage.",
    "exampleZh": "女王乘坐一輛馬車抵達。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "carton",
    "zh": "紙箱；盒",
    "ph": "/ˈkɑːrtən/",
    "example": "She bought a carton of milk from the supermarket.",
    "exampleZh": "她從超市買了一盒牛奶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cashpoint",
    "zh": "自動取款機",
    "ph": "/ˈkæʃpɔɪnt/",
    "example": "I need to go to the cashpoint to withdraw some money.",
    "exampleZh": "我需要去自動取款機取一些錢。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "casual",
    "zh": "隨意的；非正式的",
    "ph": "/ˈkæʒuəl/",
    "example": "He wore casual clothes to the party.",
    "exampleZh": "他穿著休閒的衣服參加聚會。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "categorize",
    "zh": "分類；歸類",
    "ph": "/ˈkætəɡəraɪz/",
    "example": "We need to categorize these documents by date.",
    "exampleZh": "我們需要按日期對這些文件進行分類。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cattle",
    "zh": "牛；家畜",
    "ph": "/ˈkætl/",
    "example": "The farmer keeps cattle on his land.",
    "exampleZh": "農民在他的土地上養牛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "caution",
    "zh": "小心；謹慎；警告",
    "ph": "/ˈkɔːʃən/",
    "example": "Please proceed with caution on the icy roads.",
    "exampleZh": "在結冰的道路上行駛請小心。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cautious",
    "zh": "謹慎的；小心的",
    "ph": "/ˈkɔːʃəs/",
    "example": "She is a very cautious driver.",
    "exampleZh": "她是一位非常謹慎的司機。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cave",
    "zh": "洞穴",
    "ph": "/keɪv/",
    "example": "They explored the dark cave.",
    "exampleZh": "他們探索了黑暗的洞穴。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "CD-ROM",
    "zh": "光盤",
    "ph": "/ˌsiː ˈdiː rɒm/",
    "example": "The software came on a CD-ROM.",
    "exampleZh": "這個軟件裝在光盤裡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "celebrity",
    "zh": "名人；明星",
    "ph": "/səˈlebrəti/",
    "example": "She is a famous celebrity.",
    "exampleZh": "她是一位著名的名人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "central",
    "zh": "中心的；主要的",
    "ph": "/ˈsentrəl/",
    "example": "The hotel is in a central location, close to all the shops.",
    "exampleZh": "這家酒店位於市中心，靠近所有商店。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ceremony",
    "zh": "典禮；儀式",
    "ph": "/ˈserəməni/",
    "example": "The wedding ceremony was beautiful and moving.",
    "exampleZh": "婚禮典禮既美麗又感人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "certainty",
    "zh": "確定；肯定",
    "ph": "/ˈsɜːrtənti/",
    "example": "There is no absolute certainty about the future.",
    "exampleZh": "對於未來，沒有絕對的確定性。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "challenging",
    "zh": "具有挑戰性的",
    "ph": "/ˈtʃælɪndʒɪŋ/",
    "example": "This job is very challenging, but also rewarding.",
    "exampleZh": "這份工作非常具有挑戰性，但也很有回報。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "channel",
    "zh": "頻道；通道",
    "ph": "/ˈtʃænl/",
    "example": "What channel is the football match on?",
    "exampleZh": "足球比賽在哪個頻道播出？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "chaos",
    "zh": "混亂；紊亂",
    "ph": "/ˈkeɪɑːs/",
    "example": "The city was in chaos after the earthquake.",
    "exampleZh": "地震過後，這座城市一片混亂。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "characteristic",
    "zh": "特徵；特性",
    "ph": "/ˌkærəktəˈrɪstɪk/",
    "example": "This behavior is characteristic of him.",
    "exampleZh": "這種行為是他的典型特徵。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "characterize",
    "zh": "描述；使具有特徵",
    "ph": "/ˈkærəktəraɪz/",
    "example": "How would you characterize your relationship with your parents?",
    "exampleZh": "你如何描述你和你父母的關係？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "charge",
    "zh": "收費；指控；充電",
    "ph": "/tʃɑːrdʒ/",
    "example": "They charge $20 for delivery.",
    "exampleZh": "他們收取 20 美元的送貨費。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "charm",
    "zh": "魅力；吸引力",
    "ph": "/tʃɑːrm/",
    "example": "He has a lot of charm and is very popular.",
    "exampleZh": "他很有魅力，很受歡迎。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "chase",
    "zh": "追逐；追趕",
    "ph": "/tʃeɪs/",
    "example": "The dog started to chase the cat around the garden.",
    "exampleZh": "狗開始在花園裡追逐貓。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "checkout",
    "zh": "結賬；退房",
    "ph": "/ˈtʃekaʊt/",
    "example": "What time is the checkout at this hotel?",
    "exampleZh": "這家酒店的退房時間是什麼時候？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cheerful",
    "zh": "快樂的；愉快的",
    "ph": "/ˈtʃɪrfəl/",
    "example": "She is a cheerful person who always smiles.",
    "exampleZh": "她是一個總是微笑的快樂的人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "chemist",
    "zh": "化學家；藥劑師",
    "ph": "/ˈkemɪst/",
    "example": "The chemist is working on a new drug.",
    "exampleZh": "這位化學家正在研究一種新藥。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cherish",
    "zh": "珍惜；珍愛",
    "ph": "/ˈtʃerɪʃ/",
    "example": "I will always cherish the memories we made together.",
    "exampleZh": "我將永遠珍惜我們一起創造的回憶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "chief",
    "zh": "主要的；首領",
    "ph": "/tʃiːf/",
    "example": "The chief reason for the delay was the bad weather.",
    "exampleZh": "延誤的主要原因是惡劣的天氣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "choir",
    "zh": "合唱團",
    "ph": "/ˈkwaɪər/",
    "example": "She sings in the church choir every Sunday.",
    "exampleZh": "她每個星期天都在教堂合唱團唱歌。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "choke",
    "zh": "窒息；哽咽",
    "ph": "/tʃoʊk/",
    "example": "He started to choke on a piece of bread.",
    "exampleZh": "他開始被一塊麵包噎住了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "Christian",
    "zh": "基督教徒；基督徒的",
    "ph": "/ˈkrɪstʃən/",
    "example": "She is a devout Christian and goes to church every Sunday.",
    "exampleZh": "她是一位虔誠的基督教徒，每個星期天都去教堂。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "chronological",
    "zh": "按時間順序的",
    "ph": "/ˌkrɒnəˈlɒdʒɪkəl/",
    "example": "The documents were arranged in chronological order.",
    "exampleZh": "這些文件按時間順序排列。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "chuckle",
    "zh": "輕聲笑；竊笑",
    "ph": "/ˈtʃʌkəl/",
    "example": "She gave a soft chuckle.",
    "exampleZh": "她發出了一聲輕輕的笑聲。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "circle",
    "zh": "圓圈；圈子",
    "ph": "/ˈsɜːrkl/",
    "example": "Draw a circle around the correct answer.",
    "exampleZh": "在正確答案周圍畫一個圈。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "circular",
    "zh": "圓形的；循環的",
    "ph": "/ˈsɜːrkjələr/",
    "example": "The table has a circular top.",
    "exampleZh": "這張桌子有一個圓形的桌面。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "circus",
    "zh": "馬戲團；喧鬧",
    "ph": "/ˈsɜːrkəs/",
    "example": "We went to the circus and saw clowns and acrobats.",
    "exampleZh": "我們去了馬戲團，看到了小丑和雜技演員。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "citizenship",
    "zh": "公民身份；國籍",
    "ph": "/ˈsɪtɪzənʃɪp/",
    "example": "She applied for British citizenship.",
    "exampleZh": "她申請了英國國籍。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "civil",
    "zh": "文明的；民事的",
    "ph": "/ˈsɪvl/",
    "example": "Please be civil to each other.",
    "exampleZh": "請大家互相禮貌一點。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "civilization",
    "zh": "文明",
    "ph": "/ˌsɪvəlaɪˈzeɪʃən/",
    "example": "Ancient Egypt was a great civilization.",
    "exampleZh": "古埃及是一個偉大的文明。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "classify",
    "zh": "分類；歸類",
    "ph": "/ˈklæsɪfaɪ/",
    "example": "How would you classify this type of behavior?",
    "exampleZh": "你會如何對這種行為進行分類？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "clear",
    "zh": "清晰的；清楚的；明確的",
    "ph": "/klɪr/",
    "example": "The instructions were very clear.",
    "exampleZh": "這些說明非常清楚。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "click",
    "zh": "點擊；發出咔噠聲",
    "ph": "/klɪk/",
    "example": "Click on the link to download the file.",
    "exampleZh": "點擊鏈接下載文件。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cliff",
    "zh": "懸崖；峭壁",
    "ph": "/klɪf/",
    "example": "The village is situated on a cliff overlooking the sea.",
    "exampleZh": "這個村莊坐落在俯瞰大海的懸崖上。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "climber",
    "zh": "登山者；攀登者",
    "ph": "/ˈklaɪmər/",
    "example": "The climber reached the summit after a difficult ascent.",
    "exampleZh": "登山者經過艱難的攀登後到達了頂峰。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "clinic",
    "zh": "診所",
    "ph": "/ˈklɪnɪk/",
    "example": "She went to the clinic for a check-up.",
    "exampleZh": "她去診所做了檢查。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "closely",
    "zh": "密切地；仔細地",
    "ph": "/ˈkləʊsli/",
    "example": "The police are working closely with the community.",
    "exampleZh": "警方正在與社區密切合作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "coast",
    "zh": "海岸；海濱",
    "ph": "/kəʊst/",
    "example": "We spent our vacation on the coast.",
    "exampleZh": "我們在海邊度過了假期。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "coastal",
    "zh": "沿海的；海岸的",
    "ph": "/ˈkəʊstl/",
    "example": "The coastal region is popular with tourists.",
    "exampleZh": "沿海地區很受遊客歡迎。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cod",
    "zh": "鱈魚",
    "ph": "/kɒd/",
    "example": "Cod is a popular fish for making fish and chips.",
    "exampleZh": "鱈魚是製作炸魚薯條的常用魚。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "coffin",
    "zh": "棺材",
    "ph": "/ˈkɒfɪn/",
    "example": "The coffin was made of dark wood.",
    "exampleZh": "棺材是用深色木頭製成的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "collapse",
    "zh": "倒塌；崩潰",
    "ph": "/kəˈlæps/",
    "example": "The old building began to collapse.",
    "exampleZh": "那棟舊建築開始倒塌。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "collar",
    "zh": "衣領；項圈",
    "ph": "/ˈkɒlər/",
    "example": "He wore a shirt with a white collar.",
    "exampleZh": "他穿了一件白色衣領的襯衫。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "columnist",
    "zh": "專欄作家",
    "ph": "/ˈkɒləmnɪst/",
    "example": "She is a well-known columnist for a national newspaper.",
    "exampleZh": "她是一家全國性報紙的著名專欄作家。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "combine",
    "zh": "結合；聯合",
    "ph": "/kəmˈbaɪn/",
    "example": "We need to combine our efforts to finish the project on time.",
    "exampleZh": "我們需要結合我們的努力才能按時完成這個項目。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "comedian",
    "zh": "喜劇演員",
    "ph": "/kəˈmiːdiən/",
    "example": "The comedian told jokes that made the audience laugh.",
    "exampleZh": "這位喜劇演員講的笑話讓觀眾哈哈大笑。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "comet",
    "zh": "彗星",
    "ph": "/ˈkɒmɪt/",
    "example": "Scientists observed a comet passing near Earth.",
    "exampleZh": "科學家們觀察到一顆彗星從地球附近經過。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "comma",
    "zh": "逗號",
    "ph": "/ˈkɒmə/",
    "example": "Remember to use a comma to separate items in a list.",
    "exampleZh": "記住用逗號來分隔列表中的項目。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "command",
    "zh": "命令；指揮",
    "ph": "/kəˈmɑːnd/",
    "example": "The officer gave the command to advance.",
    "exampleZh": "軍官下達了前進的命令。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "commit",
    "zh": "承諾；犯（錯誤）",
    "ph": "/kəˈmɪt/",
    "example": "He decided to commit himself to learning a new language.",
    "exampleZh": "他決定致力於學習一門新語言。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "commonly",
    "zh": "通常地；普遍地",
    "ph": "/ˈkɒmənli/",
    "example": "This word is commonly used in everyday conversation.",
    "exampleZh": "這個詞通常在日常對話中使用。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "companion",
    "zh": "同伴；伴侶",
    "ph": "/kəmˈpæniən/",
    "example": "My dog is a loyal companion.",
    "exampleZh": "我的狗是一個忠實的伴侶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "comparison",
    "zh": "比較",
    "ph": "/kəmˈpærɪsn/",
    "example": "A comparison of the two products showed that one was better.",
    "exampleZh": "對這兩種產品的比較表明，其中一種更好。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "compete",
    "zh": "競爭",
    "ph": "/kəmˈpiːt/",
    "example": "Many athletes compete in the Olympic Games.",
    "exampleZh": "許多運動員參加奧林匹克運動會。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "competitive",
    "zh": "競爭的；好勝的",
    "ph": "/kəmˈpetətɪv/",
    "example": "The job market is very competitive, so you need to stand out.",
    "exampleZh": "就業市場競爭非常激烈，所以你需要脫穎而出。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "competitor",
    "zh": "競爭者；對手",
    "ph": "/kəmˈpetɪtər/",
    "example": "Our main competitor in the market is a large international company.",
    "exampleZh": "我們在市場上的主要競爭對手是一家大型國際公司。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "complement",
    "zh": "補充；補足",
    "ph": "/ˈkɒmplɪmənt/",
    "example": "Her skills complement mine, making us a great team.",
    "exampleZh": "她的技能補充了我的技能，使我們成為一個偉大的團隊。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "complete",
    "zh": "完成；完整的",
    "ph": "/kəmˈpliːt/",
    "example": "I need to complete this project by Friday.",
    "exampleZh": "我需要在星期五之前完成這個項目。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "completely",
    "zh": "完全地；徹底地",
    "ph": "/kəmˈpliːtli/",
    "example": "I completely forgot about our meeting this morning.",
    "exampleZh": "我完全忘記了今天早上的會議。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "complex",
    "zh": "複雜的；綜合的",
    "ph": "/ˈkɒmpleks/",
    "example": "The issue is quite complex and requires careful consideration.",
    "exampleZh": "這個問題非常複雜，需要仔細考慮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "complicated",
    "zh": "複雜的；難懂的",
    "ph": "/ˈkɒmplɪkeɪtɪd/",
    "example": "The instructions were too complicated for me to understand.",
    "exampleZh": "這些說明太複雜了，我無法理解。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "compliment",
    "zh": "稱讚；讚美",
    "ph": "/ˈkɒmplɪmənt/",
    "example": "I received a compliment on my new haircut.",
    "exampleZh": "我收到了關於我新發型的讚美。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "compose",
    "zh": "組成；創作",
    "ph": "/kəmˈpəʊz/",
    "example": "He is trying to compose a song for his girlfriend.",
    "exampleZh": "他正試圖為他的女朋友創作一首歌。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "compound",
    "zh": "化合物；複合物",
    "ph": "/ˈkɒmpaʊnd/",
    "example": "Salt is a chemical compound made of sodium and chlorine.",
    "exampleZh": "鹽是一種由鈉和氯組成的化合物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "compromise",
    "zh": "妥協；讓步",
    "ph": "/ˈkɒmprəmaɪz/",
    "example": "We had to compromise on the location of the meeting.",
    "exampleZh": "我們不得不在會議地點上做出妥協。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "concept",
    "zh": "概念；觀念",
    "ph": "/ˈkɒnsept/",
    "example": "The concept of democracy is based on freedom and equality.",
    "exampleZh": "民主的概念是基於自由和平等。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "concerned",
    "zh": "擔心的；關注的",
    "ph": "/kənˈsɜːrnd/",
    "example": "She was concerned about her son's health.",
    "exampleZh": "她很擔心她兒子的健康。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "conclude",
    "zh": "總結；結束；斷定",
    "ph": "/kənˈkluːd/",
    "example": "The meeting will conclude at 5 pm.",
    "exampleZh": "會議將於下午五點結束。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "conduct",
    "zh": "行為；進行；指揮",
    "ph": "/kənˈdʌkt/",
    "example": "The company will conduct a survey to gather feedback.",
    "exampleZh": "公司將進行一項調查來收集反饋。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "confidence",
    "zh": "信心；信任",
    "ph": "/ˈkɑːnfɪdəns/",
    "example": "She has a lot of confidence in her abilities.",
    "exampleZh": "她對自己的能力很有信心。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "confirm",
    "zh": "確認；證實",
    "ph": "/kənˈfɜːrm/",
    "example": "Please confirm your attendance by Friday.",
    "exampleZh": "請在星期五之前確認您的出席。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "confusing",
    "zh": "令人困惑的",
    "ph": "/kənˈfjuːzɪŋ/",
    "example": "The instructions were very confusing.",
    "exampleZh": "這些說明非常令人困惑。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "congratulate",
    "zh": "祝賀",
    "ph": "/kənˈɡrætʃuleɪt/",
    "example": "I want to congratulate you on your success.",
    "exampleZh": "我想祝賀你取得的成功。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "connect",
    "zh": "連接；聯繫",
    "ph": "/kəˈnekt/",
    "example": "You need to connect the printer to the computer.",
    "exampleZh": "你需要將打印機連接到電腦。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "connection",
    "zh": "連接；關係",
    "ph": "/kəˈnekʃn/",
    "example": "The internet connection is very slow.",
    "exampleZh": "互聯網連接非常慢。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "conscious",
    "zh": "有意識的；清醒的",
    "ph": "/ˈkɑːnʃəs/",
    "example": "He was conscious of the need to be polite.",
    "exampleZh": "他意識到需要有禮貌。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "consequently",
    "zh": "因此；所以",
    "ph": "/ˈkɒnsɪkwəntli/",
    "example": "The company performed poorly; consequently, several employees were laid off.",
    "exampleZh": "公司業績不佳；因此，幾名員工被解僱了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "conservation",
    "zh": "保護；節約",
    "ph": "/ˌkɒnsəˈveɪʃən/",
    "example": "Wildlife conservation is crucial for maintaining biodiversity.",
    "exampleZh": "野生動物保護對於維持生物多樣性至關重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "conservative",
    "zh": "保守的；謹慎的",
    "ph": "/kənˈsɜːrvətɪv/",
    "example": "He has a conservative approach to investing his money.",
    "exampleZh": "他對投資理財採取保守的態度。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "considerable",
    "zh": "相當大的；可觀的",
    "ph": "/kənˈsɪdərəbəl/",
    "example": "The project required a considerable amount of time and effort.",
    "exampleZh": "這個項目需要相當多的時間和精力。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "consideration",
    "zh": "考慮；關心",
    "ph": "/kənˌsɪdəˈreɪʃən/",
    "example": "We need to give careful consideration to all the options.",
    "exampleZh": "我們需要仔細考慮所有的選擇。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "consonant",
    "zh": "輔音",
    "ph": "/ˈkɒnsənənt/",
    "example": "The letter 'b' is a consonant.",
    "exampleZh": "字母 'b' 是一個輔音。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "constantly",
    "zh": "不斷地；經常地",
    "ph": "/ˈkɒnstəntli/",
    "example": "Technology is constantly evolving.",
    "exampleZh": "技術在不斷髮展。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "constitute",
    "zh": "構成；組成",
    "ph": "/ˈkɒnstɪtjuːt/",
    "example": "Twelve months constitute a year.",
    "exampleZh": "十二個月構成一年。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "constitution",
    "zh": "憲法；體質",
    "ph": "/ˌkɒnstɪˈtjuːʃən/",
    "example": "The constitution protects the rights of citizens.",
    "exampleZh": "憲法保護公民的權利。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "construct",
    "zh": "建造；構建",
    "ph": "/kənˈstrʌkt/",
    "example": "They are planning to construct a new bridge.",
    "exampleZh": "他們計劃建造一座新橋。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "construction",
    "zh": "建設；建造",
    "ph": "/kənˈstrʌkʃən/",
    "example": "The construction of the new hospital is underway.",
    "exampleZh": "新醫院的建設正在進行中。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "consume",
    "zh": "消耗；消費",
    "ph": "/kənˈsjuːm/",
    "example": "We consume a lot of electricity in the summer.",
    "exampleZh": "我們在夏天消耗大量的電力。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "consumption",
    "zh": "消費；消耗",
    "ph": "/kənˈsʌmpʃən/",
    "example": "The consumption of fossil fuels contributes to climate change.",
    "exampleZh": "化石燃料的消耗導致氣候變化。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "contain",
    "zh": "包含；容納",
    "ph": "/kənˈteɪn/",
    "example": "This box can contain all your books.",
    "exampleZh": "這個盒子可以容納你所有的書。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "content",
    "zh": "內容；滿意",
    "ph": "/ˈkɒntent/",
    "example": "The content of the book was very interesting.",
    "exampleZh": "這本書的內容非常有趣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "continual",
    "zh": "連續不斷的；頻繁的",
    "ph": "/kənˈtɪnjuəl/",
    "example": "There were continual interruptions during the meeting.",
    "exampleZh": "會議期間不斷有中斷。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "continually",
    "zh": "不斷地；頻繁地",
    "ph": "/kənˈtɪnjʊəli/",
    "example": "He continually checks his phone for messages.",
    "exampleZh": "他不斷地查看手機上的消息。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "continuous",
    "zh": "連續的；持續的",
    "ph": "/kənˈtɪnjʊəs/",
    "example": "There was a continuous line of traffic on the highway.",
    "exampleZh": "高速公路上有連續不斷的車流。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "continuously",
    "zh": "連續地；持續地",
    "ph": "/kənˈtɪnjʊəsli/",
    "example": "The machine has been running continuously for 24 hours.",
    "exampleZh": "這臺機器已經連續運行了24小時。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "contrary",
    "zh": "相反的；對立的",
    "ph": "/ˈkɒntrəri/",
    "example": "Contrary to popular belief, cats are quite intelligent.",
    "exampleZh": "與普遍的看法相反，貓非常聰明。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "contribution",
    "zh": "貢獻；捐款",
    "ph": "/ˌkɒntrɪˈbjuːʃən/",
    "example": "His contribution to the team was invaluable.",
    "exampleZh": "他對團隊的貢獻是無價的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "controversial",
    "zh": "有爭議的",
    "ph": "/ˌkɒntrəˈvɜːʃəl/",
    "example": "The new law is very controversial.",
    "exampleZh": "這項新法律非常有爭議。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "convey",
    "zh": "傳達；表達",
    "ph": "/kənˈveɪ/",
    "example": "Words can't convey how happy I am.",
    "exampleZh": "言語無法表達我有多高興。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "convince",
    "zh": "說服；使相信",
    "ph": "/kənˈvɪns/",
    "example": "I couldn't convince him to change his mind.",
    "exampleZh": "我無法說服他改變主意。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "copyright",
    "zh": "版權",
    "ph": "/ˈkɒpirait/",
    "example": "The book is protected by copyright.",
    "exampleZh": "這本書受版權保護。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "correction",
    "zh": "改正；修正",
    "ph": "/kəˈrekʃən/",
    "example": "I need to make a correction to what I said earlier.",
    "exampleZh": "我需要對我之前說的話做一個更正。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "council",
    "zh": "委員會；理事會",
    "ph": "/ˈkaʊnsəl/",
    "example": "The local council is responsible for maintaining the roads.",
    "exampleZh": "地方委員會負責維護道路。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "counseling",
    "zh": "諮詢；輔導",
    "ph": "/ˈkaʊnsəlɪŋ/",
    "example": "She is receiving counseling to help her deal with her anxiety.",
    "exampleZh": "她正在接受諮詢，以幫助她應對焦慮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "countless",
    "zh": "無數的；數不清的",
    "ph": "/ˈkaʊntləs/",
    "example": "There are countless stars in the sky.",
    "exampleZh": "天空中有著無數的星星。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "courage",
    "zh": "勇氣",
    "ph": "/ˈkʌrɪdʒ/",
    "example": "It takes courage to speak up for what you believe in.",
    "exampleZh": "為自己所相信的事情說話需要勇氣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "courageous",
    "zh": "勇敢的",
    "ph": "/kəˈreɪdʒəs/",
    "example": "The firefighter was courageous in rescuing the trapped people.",
    "exampleZh": "消防員勇敢地營救了被困的人們。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "courgette",
    "zh": "西葫蘆",
    "ph": "/kɔːˈʒet/",
    "example": "I added some courgette to the vegetable stew.",
    "exampleZh": "我在蔬菜燉肉里加了一些西葫蘆。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "crash",
    "zh": "碰撞；墜毀",
    "ph": "/kræʃ/",
    "example": "There was a car crash on the highway this morning.",
    "exampleZh": "今天早上高速公路上發生了一起車禍。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "creator",
    "zh": "創造者；創作者",
    "ph": "/kriˈeɪtər/",
    "example": "The creator of this artwork is unknown.",
    "exampleZh": "這件藝術品的創作者不為人知。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "criminal",
    "zh": "罪犯；犯罪的",
    "ph": "/ˈkrɪmɪnəl/",
    "example": "The police arrested the criminal for robbery.",
    "exampleZh": "警察逮捕了搶劫犯。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "crisis",
    "zh": "危機",
    "ph": "/ˈkraɪsɪs/",
    "example": "The company is facing a financial crisis.",
    "exampleZh": "該公司正面臨金融危機。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "critic",
    "zh": "評論家；批評者",
    "ph": "/ˈkrɪtɪk/",
    "example": "The film critic gave the movie a positive review.",
    "exampleZh": "這位影評家對這部電影給出了積極的評價。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "critical",
    "zh": "批判性的；至關重要的",
    "ph": "/ˈkrɪtɪkəl/",
    "example": "It is critical to follow the instructions carefully.",
    "exampleZh": "仔細遵循指示至關重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "crop",
    "zh": "農作物；收成",
    "ph": "/krɒp/",
    "example": "The main crop in this region is wheat.",
    "exampleZh": "這個地區的主要農作物是小麥。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "crossing",
    "zh": "交叉路口；橫渡",
    "ph": "/ˈkrɒsɪŋ/",
    "example": "Use the pedestrian crossing to cross the road safely.",
    "exampleZh": "使用人行橫道安全過馬路。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "crossroads",
    "zh": "十字路口；關鍵時刻",
    "ph": "/ˈkrɒsroʊdz/",
    "example": "The accident happened at the crossroads.",
    "exampleZh": "事故發生在十字路口。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "crow",
    "zh": "烏鴉",
    "ph": "/kroʊ/",
    "example": "A crow was sitting on the branch of the tree.",
    "exampleZh": "一隻烏鴉正坐在樹枝上。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cucumber",
    "zh": "黃瓜",
    "ph": "/ˈkjuːkʌmbər/",
    "example": "I added some cucumber to the salad.",
    "exampleZh": "我在沙拉里加了一些黃瓜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cultural",
    "zh": "文化的",
    "ph": "/ˈkʌltʃərəl/",
    "example": "The city has a rich cultural heritage.",
    "exampleZh": "這座城市擁有豐富的文化遺產。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "curiosity",
    "zh": "好奇心",
    "ph": "/ˌkjʊəriˈɒsəti/",
    "example": "Her curiosity led her to explore the unknown.",
    "exampleZh": "她的好奇心驅使她去探索未知的事物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "curious",
    "zh": "好奇的；奇怪的",
    "ph": "/ˈkjʊəriəs/",
    "example": "I am curious to know what happened.",
    "exampleZh": "我很想知道發生了什麼事。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "curiously",
    "zh": "好奇地；奇怪地",
    "ph": "/ˈkjʊəriəsli/",
    "example": "He looked at the package curiously.",
    "exampleZh": "他好奇地看著包裹。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "curly",
    "zh": "捲曲的",
    "ph": "/ˈkɜːrli/",
    "example": "She has long, curly hair.",
    "exampleZh": "她有長長的捲髮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "currency",
    "zh": "貨幣；流通",
    "ph": "/ˈkʌrənsi/",
    "example": "The local currency is the euro.",
    "exampleZh": "當地貨幣是歐元。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "current",
    "zh": "當前的；潮流；水流",
    "ph": "/ˈkʌrənt/",
    "example": "What is the current situation?",
    "exampleZh": "目前的情況是什麼？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "currently",
    "zh": "目前；現在",
    "ph": "/ˈkʌrəntli/",
    "example": "I am currently working on a new project.",
    "exampleZh": "我目前正在做一個新項目。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "curriculum",
    "zh": "課程；課程表",
    "ph": "/kəˈrɪkjələm/",
    "example": "The school curriculum includes science and mathematics.",
    "exampleZh": "學校的課程包括科學和數學。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cushion",
    "zh": "墊子；緩衝",
    "ph": "/ˈkʊʃn/",
    "example": "I put a cushion on the chair to make it more comfortable.",
    "exampleZh": "我在椅子上放了一個墊子，讓它更舒服。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "CV",
    "zh": "簡歷",
    "ph": "/ˌsiː ˈviː/",
    "example": "Please send me your CV and a cover letter.",
    "exampleZh": "請把你的簡歷和求職信發給我。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "cycle",
    "zh": "循環；週期；自行車",
    "ph": "/ˈsaɪkl/",
    "example": "The seasons follow a natural cycle.",
    "exampleZh": "季節遵循一個自然循環。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "daisy",
    "zh": "雛菊",
    "ph": "/ˈdeɪzi/",
    "example": "She picked a daisy and put it in her hair.",
    "exampleZh": "她摘了一朵雛菊，把它戴在頭髮上。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "damp",
    "zh": "潮溼的；溼氣",
    "ph": "/dæmp/",
    "example": "The clothes felt damp after being left outside in the fog.",
    "exampleZh": "衣服在霧中放在外面後感覺潮溼。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dangerously",
    "zh": "危險地",
    "ph": "/ˈdeɪndʒərəsli/",
    "example": "He was driving dangerously fast on the icy road.",
    "exampleZh": "他在結冰的路上危險地快速行駛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dare",
    "zh": "敢；膽敢",
    "ph": "/deər/",
    "example": "I didn't dare to ask him about his problems.",
    "exampleZh": "我不敢問他關於他的問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "darkness",
    "zh": "黑暗；陰暗",
    "ph": "/ˈdɑːrknəs/",
    "example": "The power outage plunged the city into darkness.",
    "exampleZh": "停電使整個城市陷入黑暗。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dating",
    "zh": "約會；交往",
    "ph": "/ˈdeɪtɪŋ/",
    "example": "She's been dating him for six months now.",
    "exampleZh": "她和他已經交往六個月了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "daze",
    "zh": "茫然；恍惚",
    "ph": "/deɪz/",
    "example": "He was in a daze after the accident.",
    "exampleZh": "事故發生後，他處於茫然狀態。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dazzle",
    "zh": "使眼花繚亂；使驚歎",
    "ph": "/ˈdæzl/",
    "example": "The sunlight reflecting off the snow can dazzle your eyes.",
    "exampleZh": "陽光從雪地反射出來會使你的眼睛眼花繚亂。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deadline",
    "zh": "截止日期；最後期限",
    "ph": "/ˈdedlaɪn/",
    "example": "The deadline for submitting the application is next Friday.",
    "exampleZh": "提交申請的截止日期是下週五。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deadly",
    "zh": "致命的；極度的",
    "ph": "/ˈdedli/",
    "example": "Carbon monoxide is a deadly gas.",
    "exampleZh": "一氧化碳是一種致命的氣體。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deal",
    "zh": "交易；處理",
    "ph": "/diːl/",
    "example": "They made a deal to sell the house.",
    "exampleZh": "他們達成了一項出售房屋的交易。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dealer",
    "zh": "經銷商；商人",
    "ph": "/ˈdiːlər/",
    "example": "He is a car dealer.",
    "exampleZh": "他是一名汽車經銷商。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "debris",
    "zh": "碎片；殘骸",
    "ph": "/dəˈbriː/",
    "example": "The storm left debris scattered all over the town.",
    "exampleZh": "暴風雨過後，城鎮各處散落著碎片。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "decision",
    "zh": "決定；決策",
    "ph": "/dɪˈsɪʒən/",
    "example": "Making a decision can be difficult when you have many options.",
    "exampleZh": "當有很多選擇時，做出決定可能很困難。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "declaration",
    "zh": "聲明；宣告",
    "ph": "/ˌdekləˈreɪʃən/",
    "example": "The government issued a declaration of emergency after the earthquake.",
    "exampleZh": "地震後，政府發佈了緊急狀態聲明。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "decline",
    "zh": "下降；拒絕",
    "ph": "/dɪˈklaɪn/",
    "example": "She had to decline the invitation due to a prior engagement.",
    "exampleZh": "由於事先有約，她不得不拒絕了邀請。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "decrease",
    "zh": "減少；降低",
    "ph": "/dɪˈkriːs/",
    "example": "We need to decrease our spending to save money.",
    "exampleZh": "我們需要減少開支來省錢。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deed",
    "zh": "行為；契約",
    "ph": "/diːd/",
    "example": "She signed the deed to the property.",
    "exampleZh": "她簽署了房產契約。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "defeat",
    "zh": "擊敗；戰勝",
    "ph": "/dɪˈfiːt/",
    "example": "Our team managed to defeat the opposing team in the final game.",
    "exampleZh": "我們的隊伍在決賽中成功擊敗了對方隊伍。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "defender",
    "zh": "防禦者；辯護人",
    "ph": "/dɪˈfendər/",
    "example": "He is a strong defender of human rights.",
    "exampleZh": "他是人權的堅定捍衛者。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "defense",
    "zh": "防禦；防衛",
    "ph": "/dɪˈfens/",
    "example": "The country needs a strong defense system.",
    "exampleZh": "這個國家需要一個強大的防禦系統。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deficiency",
    "zh": "缺乏；不足",
    "ph": "/dɪˈfɪʃənsi/",
    "example": "A vitamin deficiency can lead to health problems.",
    "exampleZh": "維生素缺乏會導致健康問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "definite",
    "zh": "明確的；肯定的",
    "ph": "/ˈdefɪnət/",
    "example": "We need a definite answer by tomorrow.",
    "exampleZh": "我們需要在明天之前得到明確的答覆。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "definitely",
    "zh": "肯定地；當然",
    "ph": "/ˈdefɪnətli/",
    "example": "I will definitely go to the party if I have time.",
    "exampleZh": "如果我有時間，我肯定會去參加聚會。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "definition",
    "zh": "定義；釋義",
    "ph": "/ˌdefɪˈnɪʃən/",
    "example": "What is the definition of 'irony'?",
    "exampleZh": "“諷刺”的定義是什麼？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "delay",
    "zh": "延遲；耽擱",
    "ph": "/dɪˈleɪ/",
    "example": "We should delay making a decision until we have more information.",
    "exampleZh": "我們應該推遲做決定，直到我們有更多的信息。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "delete",
    "zh": "刪除",
    "ph": "/dɪˈliːt/",
    "example": "You should delete any unnecessary emails to free up space.",
    "exampleZh": "你應該刪除任何不必要的電子郵件以釋放空間。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "delicate",
    "zh": "精緻的；脆弱的",
    "ph": "/ˈdelɪkət/",
    "example": "The antique vase is very delicate and needs to be handled with care.",
    "exampleZh": "這個古董花瓶非常精緻，需要小心處理。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "delight",
    "zh": "高興；快樂",
    "ph": "/dɪˈlaɪt/",
    "example": "The children squealed with delight when they saw the presents.",
    "exampleZh": "孩子們看到禮物時高興地尖叫起來。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "delighted",
    "zh": "高興的；愉快的",
    "ph": "/dɪˈlaɪtɪd/",
    "example": "I was delighted to hear about your success.",
    "exampleZh": "我很高興聽到你成功的消息。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "delightful",
    "zh": "令人愉快的；可愛的",
    "ph": "/dɪˈlaɪtfəl/",
    "example": "We had a delightful evening at the restaurant.",
    "exampleZh": "我們在餐廳度過了一個愉快的夜晚。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "democracy",
    "zh": "民主；民主制",
    "ph": "/dɪˈmɒkrəsi/",
    "example": "Democracy is a system of government where citizens vote for their leaders.",
    "exampleZh": "民主是一種公民投票選舉領導人的政府制度。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "democratic",
    "zh": "民主的；民主主義的",
    "ph": "/ˌdeməˈkrætɪk/",
    "example": "The company has a democratic decision-making process.",
    "exampleZh": "該公司有一個民主的決策過程。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "demonstrate",
    "zh": "演示；證明",
    "ph": "/ˈdemənstreɪt/",
    "example": "The teacher will demonstrate how to solve the problem.",
    "exampleZh": "老師將演示如何解決這個問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "depart",
    "zh": "離開；出發",
    "ph": "/dɪˈpɑːrt/",
    "example": "The train will depart from platform 3 in five minutes.",
    "exampleZh": "火車將在五分鐘後從3號站臺出發。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "department",
    "zh": "部門；系",
    "ph": "/dɪˈpɑːrtmənt/",
    "example": "She works in the marketing department of a large corporation.",
    "exampleZh": "她在一家大公司的市場部工作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "departure",
    "zh": "離開；出發",
    "ph": "/dɪˈpɑːrtʃər/",
    "example": "The flight's departure was delayed due to bad weather.",
    "exampleZh": "由於惡劣天氣，航班的出發被延誤了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dependent",
    "zh": "依賴的；依靠的",
    "ph": "/dɪˈpendənt/",
    "example": "Children are dependent on their parents for food and shelter.",
    "exampleZh": "孩子們依賴父母提供食物和住所。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deposit",
    "zh": "存款；押金",
    "ph": "/dɪˈpɑːzɪt/",
    "example": "I need to deposit some money into my bank account.",
    "exampleZh": "我需要存一些錢到我的銀行賬戶裡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "depressed",
    "zh": "沮喪的；抑鬱的",
    "ph": "/dɪˈprest/",
    "example": "She felt depressed after failing the exam.",
    "exampleZh": "考試不及格後，她感到很沮喪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "depressing",
    "zh": "令人沮喪的；令人壓抑的",
    "ph": "/dɪˈpresɪŋ/",
    "example": "The news about the economic crisis was very depressing.",
    "exampleZh": "關於經濟危機的消息非常令人沮喪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deprive",
    "zh": "剝奪；使喪失",
    "ph": "/dɪˈpraɪv/",
    "example": "The new law will deprive many people of their rights.",
    "exampleZh": "新法律將剝奪許多人的權利。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "depth",
    "zh": "深度；深處",
    "ph": "/depθ/",
    "example": "The lake has a depth of over 100 meters in some places.",
    "exampleZh": "這個湖在某些地方的深度超過100米。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "derive",
    "zh": "獲得；起源於",
    "ph": "/dɪˈraɪv/",
    "example": "Many English words derive from Latin.",
    "exampleZh": "許多英語單詞起源於拉丁語。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "deserve",
    "zh": "應得；值得",
    "ph": "/dɪˈzɜːrv/",
    "example": "They deserve to be punished for their crimes.",
    "exampleZh": "他們應該為他們的罪行受到懲罰。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "designer",
    "zh": "設計師",
    "ph": "/dɪˈzaɪnər/",
    "example": "He is a famous fashion designer.",
    "exampleZh": "他是一位著名的時裝設計師。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "desire",
    "zh": "渴望；慾望",
    "ph": "/dɪˈzaɪər/",
    "example": "I desire to travel the world someday.",
    "exampleZh": "我渴望有一天能環遊世界。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "despair",
    "zh": "絕望",
    "ph": "/dɪˈspeər/",
    "example": "She felt a sense of despair after failing the exam.",
    "exampleZh": "考試不及格後，她感到一種絕望。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "despite",
    "zh": "儘管；雖然",
    "ph": "/dɪˈspaɪt/",
    "example": "Despite the rain, we decided to go for a walk.",
    "exampleZh": "儘管下著雨，我們還是決定去散步。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "destination",
    "zh": "目的地",
    "ph": "/ˌdestɪˈneɪʃən/",
    "example": "Our final destination on the trip was Rome.",
    "exampleZh": "我們這次旅行的最終目的地是羅馬。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "destruction",
    "zh": "破壞；毀滅",
    "ph": "/dɪˈstrʌkʃən/",
    "example": "The earthquake caused widespread destruction in the city.",
    "exampleZh": "地震對該城市造成了廣泛的破壞。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "destructive",
    "zh": "破壞性的；毀滅性的",
    "ph": "/dɪˈstrʌktɪv/",
    "example": "His destructive behavior damaged his relationships.",
    "exampleZh": "他破壞性的行為損害了他的人際關係。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "detective",
    "zh": "偵探",
    "ph": "/dɪˈtektɪv/",
    "example": "The detective investigated the crime scene carefully.",
    "exampleZh": "偵探仔細調查了犯罪現場。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "determination",
    "zh": "決心；堅定",
    "ph": "/dɪˌtɜːrmɪˈneɪʃən/",
    "example": "Her determination to succeed was admirable.",
    "exampleZh": "她成功的決心令人欽佩。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "devastating",
    "zh": "毀滅性的；令人震驚的",
    "ph": "/ˈdevəsteɪtɪŋ/",
    "example": "The earthquake had a devastating impact on the region.",
    "exampleZh": "地震對該地區產生了毀滅性的影響。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "device",
    "zh": "設備；裝置",
    "ph": "/dɪˈvaɪs/",
    "example": "This device can be used to measure temperature.",
    "exampleZh": "這個設備可以用來測量溫度。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "devotion",
    "zh": "奉獻；忠誠",
    "ph": "/dɪˈvoʊʃən/",
    "example": "Her devotion to her family is unwavering.",
    "exampleZh": "她對家庭的奉獻是堅定不移的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diagram",
    "zh": "圖表；示意圖",
    "ph": "/ˈdaɪəɡræm/",
    "example": "The teacher drew a diagram on the board to explain the process.",
    "exampleZh": "老師在黑板上畫了一個圖表來解釋這個過程。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dial",
    "zh": "撥號盤；撥號",
    "ph": "/ˈdaɪəl/",
    "example": "He used the dial to change the radio station.",
    "exampleZh": "他用撥號盤來改變廣播電臺。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dialog",
    "zh": "對話；對白",
    "ph": "/ˈdaɪəlɒɡ/",
    "example": "The dialog in the movie was very realistic.",
    "exampleZh": "電影中的對白非常真實。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diameter",
    "zh": "直徑",
    "ph": "/daɪˈæmɪtər/",
    "example": "The diameter of the circle is 10 centimeters.",
    "exampleZh": "這個圓的直徑是10釐米。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diaper",
    "zh": "尿布",
    "ph": "/ˈdaɪpər/",
    "example": "The baby needs a clean diaper.",
    "exampleZh": "寶寶需要換一塊乾淨的尿布。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "differ",
    "zh": "不同；相異",
    "ph": "/ˈdɪfər/",
    "example": "Opinions differ on this matter.",
    "exampleZh": "在這個問題上，意見各不相同。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dig",
    "zh": "挖掘；挖",
    "ph": "/dɪɡ/",
    "example": "They had to dig deep to find the buried treasure.",
    "exampleZh": "他們必須深挖才能找到埋藏的寶藏。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diligence",
    "zh": "勤奮；努力",
    "ph": "/ˈdɪlɪdʒəns/",
    "example": "His diligence paid off with excellent grades.",
    "exampleZh": "他的勤奮得到了回報，取得了優異的成績。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diligent",
    "zh": "勤奮的；努力的",
    "ph": "/ˈdɪlɪdʒənt/",
    "example": "She is a very diligent student.",
    "exampleZh": "她是一個非常勤奮的學生。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dioxide",
    "zh": "二氧化物",
    "ph": "/daɪˈɒksaɪd/",
    "example": "Carbon dioxide is a greenhouse gas.",
    "exampleZh": "二氧化碳是一種溫室氣體。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "directly",
    "zh": "直接地；立即",
    "ph": "/dəˈrektli/",
    "example": "He went directly home after work.",
    "exampleZh": "他下班後直接回家了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dirt",
    "zh": "泥土；汙垢",
    "ph": "/dɜːrt/",
    "example": "The children were playing in the dirt.",
    "exampleZh": "孩子們在泥土裡玩耍。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disable",
    "zh": "使殘疾；禁用",
    "ph": "/dɪsˈeɪbəl/",
    "example": "You can disable the Wi-Fi connection in the settings.",
    "exampleZh": "你可以在設置中禁用無線網絡連接。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disabled",
    "zh": "殘疾的",
    "ph": "/dɪsˈeɪbəld/",
    "example": "The government provides support for disabled people.",
    "exampleZh": "政府為殘疾人提供支持。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disagreement",
    "zh": "分歧；不一致",
    "ph": "/ˌdɪsəˈɡriːmənt/",
    "example": "There was a strong disagreement between the two leaders.",
    "exampleZh": "兩位領導人之間存在嚴重的分歧。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disappoint",
    "zh": "使失望",
    "ph": "/ˌdɪsəˈpɔɪnt/",
    "example": "I don't want to disappoint my parents.",
    "exampleZh": "我不想讓我的父母失望。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disaster",
    "zh": "災難",
    "ph": "/dɪˈzɑːstər/",
    "example": "The earthquake was a major disaster.",
    "exampleZh": "這次地震是一場重大災難。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disastrous",
    "zh": "災難性的",
    "ph": "/dɪˈzæstrəs/",
    "example": "The company's financial year was disastrous.",
    "exampleZh": "公司本財政年度的情況是災難性的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "discomfort",
    "zh": "不適；不安",
    "ph": "/dɪsˈkʌmfərt/",
    "example": "I felt some discomfort after eating too much.",
    "exampleZh": "吃太多後，我感到有些不適。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "discount",
    "zh": "折扣",
    "ph": "/ˈdɪskaʊnt/",
    "example": "Students get a discount on train tickets.",
    "exampleZh": "學生購買火車票可以享受折扣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "discovery",
    "zh": "發現",
    "ph": "/dɪˈskʌvəri/",
    "example": "The discovery of penicillin was a major breakthrough.",
    "exampleZh": "青黴素的發現是一個重大突破。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "discrimination",
    "zh": "歧視",
    "ph": "/dɪˌskrɪmɪˈneɪʃən/",
    "example": "Discrimination based on race is illegal.",
    "exampleZh": "基於種族的歧視是非法的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disgusting",
    "zh": "令人厭惡的",
    "ph": "/dɪsˈɡʌstɪŋ/",
    "example": "The food was absolutely disgusting.",
    "exampleZh": "這食物絕對令人厭惡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dishwasher",
    "zh": "洗碗機",
    "ph": "/ˈdɪʃˌwɒʃər/",
    "example": "We loaded the dirty plates into the dishwasher after dinner.",
    "exampleZh": "晚飯後，我們將髒盤子放入洗碗機。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disk",
    "zh": "磁盤；碟",
    "ph": "/dɪsk/",
    "example": "I saved the document on a disk.",
    "exampleZh": "我將文件保存在磁盤上。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dislike",
    "zh": "不喜歡；厭惡",
    "ph": "/dɪsˈlaɪk/",
    "example": "I dislike getting up early in the morning.",
    "exampleZh": "我不喜歡早上早起。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "display",
    "zh": "展示；陳列",
    "ph": "/dɪˈspleɪ/",
    "example": "The museum has a fascinating display of ancient artifacts.",
    "exampleZh": "博物館展出了令人著迷的古代文物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "distance",
    "zh": "距離",
    "ph": "/ˈdɪstəns/",
    "example": "The distance between the two cities is about 200 kilometers.",
    "exampleZh": "這兩個城市之間的距離大約是200公里。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "distinction",
    "zh": "區別；差別",
    "ph": "/dɪˈstɪŋkʃən/",
    "example": "There is a clear distinction between right and wrong.",
    "exampleZh": "對與錯之間有明顯的區別。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "distinctly",
    "zh": "清晰地；明顯地",
    "ph": "/dɪˈstɪŋktli/",
    "example": "I distinctly remember seeing him at the party.",
    "exampleZh": "我清楚地記得在聚會上見過他。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "distinguish",
    "zh": "區分；辨別",
    "ph": "/dɪˈstɪŋɡwɪʃ/",
    "example": "Can you distinguish between these two similar paintings?",
    "exampleZh": "你能區分這兩幅相似的畫作嗎？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "distribute",
    "zh": "分發；分配",
    "ph": "/dɪˈstrɪbjuːt/",
    "example": "The teacher will distribute the exam papers.",
    "exampleZh": "老師將分發試卷。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "distribution",
    "zh": "分配；分發",
    "ph": "/ˌdɪstrɪˈbjuːʃən/",
    "example": "The distribution of wealth is not equal in many countries.",
    "exampleZh": "在許多國家，財富的分配是不平等的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "disturbance",
    "zh": "擾亂；騷亂",
    "ph": "/dɪˈstɜːrbəns/",
    "example": "I apologize for the disturbance, but we need to fix this issue.",
    "exampleZh": "我很抱歉打擾了，但我們需要解決這個問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diver",
    "zh": "潛水員",
    "ph": "/ˈdaɪvər/",
    "example": "The diver explored the coral reef.",
    "exampleZh": "潛水員探索了珊瑚礁。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diverse",
    "zh": "多樣的；不同的",
    "ph": "/daɪˈvɜːrs/",
    "example": "The city has a diverse population.",
    "exampleZh": "這座城市擁有多樣化的人口。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "divide",
    "zh": "劃分；分割",
    "ph": "/dɪˈvaɪd/",
    "example": "We need to divide the cake into equal pieces.",
    "exampleZh": "我們需要把蛋糕分成相等的幾塊。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "divine",
    "zh": "神聖的；極好的",
    "ph": "/dɪˈvaɪn/",
    "example": "Many people believe in a divine power.",
    "exampleZh": "許多人相信神聖的力量。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "diving",
    "zh": "潛水",
    "ph": "/ˈdaɪvɪŋ/",
    "example": "Diving is a popular sport in tropical areas.",
    "exampleZh": "潛水是熱帶地區一項受歡迎的運動。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "divorced",
    "zh": "離婚的",
    "ph": "/dɪˈvɔːrst/",
    "example": "She is divorced and raising her children alone.",
    "exampleZh": "她離婚了，獨自撫養孩子。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "DJ",
    "zh": "唱片騎師；DJ",
    "ph": "/ˈdiː dʒeɪ/",
    "example": "The DJ played some great music at the party.",
    "exampleZh": "那位DJ在派對上播放了一些很棒的音樂。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "doc",
    "zh": "醫生 (口語)",
    "ph": "/dɒk/",
    "example": "I need to see the doc about my cough.",
    "exampleZh": "我需要去看醫生，我的咳嗽很嚴重。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "documentary",
    "zh": "紀錄片",
    "ph": "/ˌdɒkjʊˈmentəri/",
    "example": "We watched a fascinating documentary about wildlife.",
    "exampleZh": "我們看了一部關於野生動物的精彩紀錄片。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dot",
    "zh": "點；圓點",
    "ph": "/dɒt/",
    "example": "Put a dot on the map to mark the location.",
    "exampleZh": "在地圖上畫一個點來標記位置。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "downward",
    "zh": "向下的；下降的",
    "ph": "/ˈdaʊnwərd/",
    "example": "The plane began a downward descent.",
    "exampleZh": "飛機開始向下下降。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "doze",
    "zh": "打盹；瞌睡",
    "ph": "/doʊz/",
    "example": "I like to doze in the sun.",
    "exampleZh": "我喜歡在陽光下打盹。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dramatic",
    "zh": "戲劇性的；引人注目的",
    "ph": "/drəˈmætɪk/",
    "example": "There was a dramatic increase in sales last month.",
    "exampleZh": "上個月的銷售額有了顯著的增長。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dude",
    "zh": "老兄；夥計",
    "ph": "/duːd/",
    "example": "Hey dude, what's up?",
    "exampleZh": "嘿，老兄，怎麼了？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dull",
    "zh": "乏味的；遲鈍的；陰沉的",
    "ph": "/dʌl/",
    "example": "The movie was so dull that I fell asleep.",
    "exampleZh": "這部電影太乏味了，我睡著了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dustbin",
    "zh": "垃圾箱",
    "ph": "/ˈdʌstbɪn/",
    "example": "Please put the empty bottles in the dustbin.",
    "exampleZh": "請把空瓶子放在垃圾箱裡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dusty",
    "zh": "佈滿灰塵的",
    "ph": "/ˈdʌsti/",
    "example": "The old books were covered in a layer of dusty.",
    "exampleZh": "那些舊書上覆蓋著一層灰塵。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "duty",
    "zh": "責任；義務；稅",
    "ph": "/ˈdjuːti/",
    "example": "It is your duty to report any suspicious activity.",
    "exampleZh": "報告任何可疑活動是你的責任。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "duty-free",
    "zh": "免稅的",
    "ph": "/ˌdjuːti ˈfriː/",
    "example": "I bought some perfume at the duty-free shop.",
    "exampleZh": "我在免稅店買了一些香水。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "duvet",
    "zh": "羽絨被",
    "ph": "/ˈduːveɪ/",
    "example": "I love sleeping under a warm duvet in winter.",
    "exampleZh": "我喜歡冬天睡在溫暖的羽絨被下。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "dynasty",
    "zh": "朝代",
    "ph": "/ˈdɪnəsti/",
    "example": "The Ming Dynasty ruled China for almost 300 years.",
    "exampleZh": "明朝統治中國近300年。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eager",
    "zh": "渴望的；熱切的",
    "ph": "/ˈiːɡər/",
    "example": "She was eager to start her new job.",
    "exampleZh": "她渴望開始她的新工作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eagerness",
    "zh": "渴望；熱切",
    "ph": "/ˈiːɡərnəs/",
    "example": "She showed great eagerness to learn a new language.",
    "exampleZh": "她表現出學習一門新語言的極大渴望。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "earache",
    "zh": "耳痛",
    "ph": "/ˈɪrˌeɪk/",
    "example": "I have an earache and it's really painful.",
    "exampleZh": "我耳朵疼，而且非常痛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "earnest",
    "zh": "認真的；誠摯的",
    "ph": "/ˈɜːrnɪst/",
    "example": "He made an earnest attempt to fix the problem.",
    "exampleZh": "他認真地嘗試解決這個問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eastern",
    "zh": "東方的；東部的",
    "ph": "/ˈiːstərn/",
    "example": "The eastern part of the country is known for its mountains.",
    "exampleZh": "這個國家的東部以其山脈而聞名。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "easygoing",
    "zh": "隨和的；悠閒的",
    "ph": "/ˌiːziˈɡoʊɪŋ/",
    "example": "He has an easygoing personality and gets along with everyone.",
    "exampleZh": "他性格隨和，和每個人都相處得很好。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eco",
    "zh": "生態的；環保的",
    "ph": "/ˈiːkoʊ/",
    "example": "The company is promoting eco-friendly products.",
    "exampleZh": "這家公司正在推廣環保產品。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ecological",
    "zh": "生態的",
    "ph": "/ˌiːkəˈlɑːdʒɪkəl/",
    "example": "The ecological balance of the forest is very delicate.",
    "exampleZh": "森林的生態平衡非常脆弱。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ecology",
    "zh": "生態學",
    "ph": "/iˈkɑːlədʒi/",
    "example": "She is studying ecology at university.",
    "exampleZh": "她正在大學學習生態學。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "economics",
    "zh": "經濟學",
    "ph": "/ˌiːkəˈnɑːmɪks/",
    "example": "He has a degree in economics.",
    "exampleZh": "他擁有經濟學學位。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "economy",
    "zh": "經濟",
    "ph": "/ɪˈkɑːnəmi/",
    "example": "The global economy has been affected by the pandemic.",
    "exampleZh": "全球經濟受到了疫情的影響。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ecosystem",
    "zh": "生態系統",
    "ph": "/ˈiːkoʊsɪstəm/",
    "example": "The rainforest is a complex ecosystem.",
    "exampleZh": "熱帶雨林是一個複雜的生態系統。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ecstasy",
    "zh": "狂喜；欣喜若狂",
    "ph": "/ˈekstəsi/",
    "example": "She was in ecstasy when she heard the good news.",
    "exampleZh": "當她聽到這個好消息時，她欣喜若狂。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "edge",
    "zh": "邊緣；優勢",
    "ph": "/edʒ/",
    "example": "Be careful not to fall off the edge of the cliff.",
    "exampleZh": "小心不要從懸崖邊上掉下去。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "effective",
    "zh": "有效的；生效的",
    "ph": "/ɪˈfektɪv/",
    "example": "Regular exercise is an effective way to improve your health.",
    "exampleZh": "有規律的鍛鍊是改善健康的有效方法。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "either",
    "zh": "也；或者",
    "ph": "/ˈaɪðər/",
    "example": "You can either stay here or come with me.",
    "exampleZh": "你可以留在這裡，也可以和我一起走。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "electrical",
    "zh": "電的；電氣的",
    "ph": "/ɪˈlektrɪkl/",
    "example": "The electrician is coming to fix the electrical wiring.",
    "exampleZh": "電工要來修理電線。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "electricity",
    "zh": "電；電力",
    "ph": "/ɪˌlekˈtrɪsəti/",
    "example": "The electricity went out during the storm.",
    "exampleZh": "暴風雨期間停電了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "electron",
    "zh": "電子",
    "ph": "/ɪˈlektrɑːn/",
    "example": "An electron is a subatomic particle with a negative electric charge.",
    "exampleZh": "電子是帶有負電荷的亞原子粒子。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "electronic",
    "zh": "電子的",
    "ph": "/ˌelekˈtrɑːnɪk/",
    "example": "I bought a new electronic device yesterday.",
    "exampleZh": "我昨天買了一個新的電子設備。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "element",
    "zh": "元素；要素",
    "ph": "/ˈelɪmənt/",
    "example": "Oxygen is an essential element for human life.",
    "exampleZh": "氧氣是人類生命的重要元素。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eliminate",
    "zh": "消除；淘汰",
    "ph": "/ɪˈlɪmɪneɪt/",
    "example": "We need to eliminate all sources of pollution.",
    "exampleZh": "我們需要消除所有汙染源。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "embarrass",
    "zh": "使尷尬；使難堪",
    "ph": "/ɪmˈbærəs/",
    "example": "Don't embarrass me in front of my friends.",
    "exampleZh": "不要在我的朋友面前讓我難堪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "embarrassed",
    "zh": "尷尬的；難堪的",
    "ph": "/ɪmˈbærəst/",
    "example": "I felt embarrassed when I spilled my drink.",
    "exampleZh": "我打翻飲料時感到很尷尬。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "embarrassment",
    "zh": "尷尬；窘迫",
    "ph": "/ɪmˈbærəsmənt/",
    "example": "She felt a deep embarrassment when she realized her mistake.",
    "exampleZh": "當她意識到自己的錯誤時，她感到非常尷尬。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "emotion",
    "zh": "情感；情緒",
    "ph": "/ɪˈmoʊʃən/",
    "example": "Love is a powerful emotion that can drive people to do great things.",
    "exampleZh": "愛是一種強大的情感，可以驅使人們去做偉大的事情。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "emotional",
    "zh": "情緒化的；情感的",
    "ph": "/ɪˈmoʊʃənəl/",
    "example": "She became very emotional when she talked about her childhood.",
    "exampleZh": "當她談到她的童年時，她變得非常情緒化。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "emotionally",
    "zh": "情緒上地；情感上地",
    "ph": "/ɪˈmoʊʃənəli/",
    "example": "He was emotionally exhausted after the long and difficult trial.",
    "exampleZh": "經過漫長而艱難的審判後，他在情緒上已經筋疲力盡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "emperor",
    "zh": "皇帝",
    "ph": "/ˈempərər/",
    "example": "The emperor ruled over a vast and powerful kingdom.",
    "exampleZh": "這位皇帝統治著一個廣闊而強大的王國。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "emphasize",
    "zh": "強調；著重",
    "ph": "/ˈemfəsaɪz/",
    "example": "The speaker wanted to emphasize the need for more funding.",
    "exampleZh": "演講者想強調需要更多的資金。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "empire",
    "zh": "帝國",
    "ph": "/ˈempaɪər/",
    "example": "The Roman Empire was one of the largest and most powerful empires in history.",
    "exampleZh": "羅馬帝國是歷史上最大和最強大的帝國之一。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "employment",
    "zh": "就業；工作",
    "ph": "/ɪmˈplɔɪmənt/",
    "example": "Finding employment can be difficult in the current economic climate.",
    "exampleZh": "在目前的經濟環境下，找到工作可能很困難。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "encounter",
    "zh": "遭遇；遇到",
    "ph": "/ɪnˈkaʊntər/",
    "example": "I had an unexpected encounter with an old friend at the airport.",
    "exampleZh": "我在機場意外地遇到了一個老朋友。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "encouragement",
    "zh": "鼓勵；激勵",
    "ph": "/ɪnˈkɜːrɪdʒmənt/",
    "example": "She needed some encouragement to pursue her dreams.",
    "exampleZh": "她需要一些鼓勵來追求她的夢想。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "encouraging",
    "zh": "令人鼓舞的；激勵的",
    "ph": "/ɪnˈkɜːrɪdʒɪŋ/",
    "example": "The news about the economy is encouraging.",
    "exampleZh": "關於經濟的消息令人鼓舞。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "encyclopedia",
    "zh": "百科全書",
    "ph": "/ɪnˌsaɪkləˈpiːdiə/",
    "example": "The encyclopedia contains a wealth of information on various subjects.",
    "exampleZh": "這本百科全書包含了關於各種主題的大量信息。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "endanger",
    "zh": "危及；危害",
    "ph": "/ɪnˈdeɪndʒər/",
    "example": "Pollution can endanger the lives of marine animals.",
    "exampleZh": "汙染會危及海洋動物的生命。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "endless",
    "zh": "無盡的；沒完沒了的",
    "ph": "/ˈendləs/",
    "example": "The desert seemed endless under the scorching sun.",
    "exampleZh": "在炎炎烈日下，沙漠似乎無邊無際。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "enemy",
    "zh": "敵人；仇敵",
    "ph": "/ˈenəmi/",
    "example": "He considered his competitor to be his enemy.",
    "exampleZh": "他認為他的競爭對手是他的敵人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "engage",
    "zh": "參與；訂婚；接合",
    "ph": "/ɪnˈɡeɪdʒ/",
    "example": "I want to engage in more community activities.",
    "exampleZh": "我想參與更多的社區活動。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "engaged",
    "zh": "訂婚的；忙碌的",
    "ph": "/ɪnˈɡeɪdʒd/",
    "example": "They are engaged to be married next summer.",
    "exampleZh": "他們訂婚了，將於明年夏天結婚。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "engine",
    "zh": "發動機；引擎",
    "ph": "/ˈendʒɪn/",
    "example": "The car engine needs to be serviced regularly.",
    "exampleZh": "汽車發動機需要定期保養。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "engineering",
    "zh": "工程；工程學",
    "ph": "/ˌendʒɪˈnɪərɪŋ/",
    "example": "She is studying engineering at university.",
    "exampleZh": "她正在大學學習工程學。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "Englishman",
    "zh": "英國男人",
    "ph": "/ˈɪŋɡlɪʃmən/",
    "example": "He is an Englishman who has lived in France for many years.",
    "exampleZh": "他是一位在法國生活多年的英國男人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "enjoyable",
    "zh": "令人愉快的；有趣的",
    "ph": "/ɪnˈdʒɔɪəbl/",
    "example": "The concert was very enjoyable.",
    "exampleZh": "那場音樂會非常令人愉快。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "enjoyment",
    "zh": "享受；樂趣",
    "ph": "/ɪnˈdʒɔɪmənt/",
    "example": "She gets a lot of enjoyment from reading books.",
    "exampleZh": "她從讀書中獲得了很多樂趣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "enrich",
    "zh": "豐富；使富裕",
    "ph": "/ɪnˈrɪtʃ/",
    "example": "Travel can enrich your understanding of different cultures.",
    "exampleZh": "旅行可以豐富你對不同文化的理解。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ensure",
    "zh": "確保；保證",
    "ph": "/ɪnˈʃʊər/",
    "example": "Please ensure that all doors are locked before you leave.",
    "exampleZh": "請確保在你離開之前所有門都已鎖好。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "entertain",
    "zh": "娛樂；招待",
    "ph": "/ˌentərˈteɪn/",
    "example": "We like to entertain friends at our house on weekends.",
    "exampleZh": "我們喜歡在週末在家招待朋友。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "entertainer",
    "zh": "藝人；表演者",
    "ph": "/ˌentərˈteɪnər/",
    "example": "The entertainer captivated the audience with her singing and dancing.",
    "exampleZh": "這位藝人以她的歌舞吸引了觀眾。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "enthusiasm",
    "zh": "熱情；熱忱",
    "ph": "/ɪnˈθjuːziæzəm/",
    "example": "Her enthusiasm for learning new languages is truly inspiring.",
    "exampleZh": "她學習新語言的熱情真是鼓舞人心。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "enthusiast",
    "zh": "愛好者；熱衷者",
    "ph": "/ɪnˈθjuːziæst/",
    "example": "He is a photography enthusiast and spends hours taking pictures.",
    "exampleZh": "他是一位攝影愛好者，花很多時間拍照。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "enthusiastic",
    "zh": "熱情的；熱衷的",
    "ph": "/ɪnˌθjuːziˈæstɪk/",
    "example": "The students were very enthusiastic about the upcoming school trip.",
    "exampleZh": "學生們對即將到來的學校旅行非常熱情。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "entirely",
    "zh": "完全地；徹底地",
    "ph": "/ɪnˈtaɪərli/",
    "example": "I am not entirely sure what you mean.",
    "exampleZh": "我不太確定你的意思。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "environmental",
    "zh": "環境的；有關環境的",
    "ph": "/ɪnˌvaɪrənˈmentl/",
    "example": "We need to be more aware of environmental issues.",
    "exampleZh": "我們需要更加關注環境問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "environmentalist",
    "zh": "環保主義者",
    "ph": "/ɪnˌvaɪrənˈmentəlɪst/",
    "example": "The environmentalist spoke passionately about the dangers of pollution.",
    "exampleZh": "這位環保主義者熱情地談論了汙染的危害。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "equal",
    "zh": "相等的；平等的",
    "ph": "/ˈiːkwəl/",
    "example": "All citizens should have equal rights under the law.",
    "exampleZh": "所有公民在法律面前都應該享有平等的權利。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "equality",
    "zh": "平等；均等",
    "ph": "/iˈkwɒləti/",
    "example": "The fight for gender equality is still ongoing.",
    "exampleZh": "爭取性別平等的鬥爭仍在繼續。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "equally",
    "zh": "相等地；平等地",
    "ph": "/ˈiːkwəli/",
    "example": "The work was divided equally among the team members.",
    "exampleZh": "這項工作在團隊成員之間平均分配。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "equipment",
    "zh": "設備；器材",
    "ph": "/ɪˈkwɪpmənt/",
    "example": "The gym has a wide range of exercise equipment.",
    "exampleZh": "健身房有各種各樣的健身器材。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "essence",
    "zh": "本質；精華",
    "ph": "/ˈesəns/",
    "example": "The essence of his argument was that all people are equal.",
    "exampleZh": "他論點的本質是所有人都是平等的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "essential",
    "zh": "必要的；本質的",
    "ph": "/ɪˈsenʃəl/",
    "example": "Water is essential for survival.",
    "exampleZh": "水是生存所必需的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "establishment",
    "zh": "建立；機構",
    "ph": "/ɪˈstæblɪʃmənt/",
    "example": "The establishment of the new company created many jobs.",
    "exampleZh": "新公司的建立創造了很多工作崗位。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eternal",
    "zh": "永恆的；永久的",
    "ph": "/ɪˈtɜːrnl/",
    "example": "Some people believe in eternal life.",
    "exampleZh": "有些人相信永生。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eternity",
    "zh": "永恆；永久",
    "ph": "/ɪˈtɜːrnəti/",
    "example": "Waiting for the bus felt like an eternity.",
    "exampleZh": "等公共汽車感覺像一個世紀那麼長。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "even",
    "zh": "甚至；均勻的",
    "ph": "/ˈiːvn/",
    "example": "Even if it rains, we will still go.",
    "exampleZh": "即使下雨，我們仍然會去。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "evenly",
    "zh": "均勻地；相等地",
    "ph": "/ˈiːvnli/",
    "example": "Spread the butter evenly on the bread.",
    "exampleZh": "將黃油均勻地塗在麵包上。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "evident",
    "zh": "明顯的；顯然的",
    "ph": "/ˈevɪdənt/",
    "example": "It was evident that she was unhappy.",
    "exampleZh": "很明顯她不高興。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "exact",
    "zh": "精確的；準確的",
    "ph": "/ɪɡˈzækt/",
    "example": "What is the exact time?",
    "exampleZh": "現在幾點整？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "examination",
    "zh": "考試；檢查",
    "ph": "/ɪɡˌzæmɪˈneɪʃn/",
    "example": "I have an examination next week.",
    "exampleZh": "我下週有個考試。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "examiner",
    "zh": "考官；檢查員",
    "ph": "/ɪɡˈzæmɪnər/",
    "example": "The examiner asked me some difficult questions.",
    "exampleZh": "考官問了我一些難題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "excellence",
    "zh": "卓越；優秀",
    "ph": "/ˈeksələns/",
    "example": "The school is known for its academic excellence.",
    "exampleZh": "這所學校以其卓越的學術水平而聞名。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "excess",
    "zh": "過量；過度",
    "ph": "/ɪkˈses/",
    "example": "An excess of sugar can be harmful to your health.",
    "exampleZh": "過量的糖可能對你的健康有害。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "excitedly",
    "zh": "興奮地",
    "ph": "/ɪkˈsaɪtɪdli/",
    "example": "The children excitedly opened their presents on Christmas morning.",
    "exampleZh": "孩子們在聖誕節早上興奮地打開了他們的禮物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "excitement",
    "zh": "興奮；激動",
    "ph": "/ɪkˈsaɪtmənt/",
    "example": "There was a lot of excitement in the air before the concert.",
    "exampleZh": "音樂會前空氣中充滿了興奮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "exclusive",
    "zh": "獨家的；專有的",
    "ph": "/ɪkˈskluːsɪv/",
    "example": "This is an exclusive interview with the famous actor.",
    "exampleZh": "這是對這位著名演員的獨家採訪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "exhausted",
    "zh": "精疲力盡的",
    "ph": "/ɪɡˈzɔːstɪd/",
    "example": "After the long hike, I felt completely exhausted.",
    "exampleZh": "長途跋涉後，我感到非常疲憊。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "exit",
    "zh": "出口",
    "ph": "/ˈeksɪt/",
    "example": "Please use the emergency exit in case of a fire.",
    "exampleZh": "發生火災時，請使用緊急出口。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "expand",
    "zh": "擴大；擴張",
    "ph": "/ɪkˈspænd/",
    "example": "The company plans to expand its business into new markets.",
    "exampleZh": "該公司計劃將其業務擴展到新市場。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "expense",
    "zh": "費用；開銷",
    "ph": "/ɪkˈspens/",
    "example": "Living in the city is a big expense.",
    "exampleZh": "在城市生活是一筆很大的開銷。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "experience",
    "zh": "經驗；經歷",
    "ph": "/ɪkˈspɪəriəns/",
    "example": "She has a lot of experience in marketing.",
    "exampleZh": "她在市場營銷方面有很多經驗。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "experienced",
    "zh": "有經驗的；熟練的",
    "ph": "/ɪkˈspɪəriənst/",
    "example": "We are looking for an experienced software developer.",
    "exampleZh": "我們正在尋找一位經驗豐富的軟件開發人員。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "exploration",
    "zh": "探索；勘探",
    "ph": "/ˌekspləˈreɪʃən/",
    "example": "The exploration of space continues to fascinate scientists.",
    "exampleZh": "對太空的探索持續吸引著科學家。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "explosion",
    "zh": "爆炸",
    "ph": "/ɪkˈsploʊʒən/",
    "example": "The explosion caused significant damage to the building.",
    "exampleZh": "爆炸對建築物造成了重大損害。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "extend",
    "zh": "延長；延伸",
    "ph": "/ɪkˈstend/",
    "example": "The company decided to extend the deadline for applications.",
    "exampleZh": "公司決定延長申請截止日期。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "extensively",
    "zh": "廣泛地；大量地",
    "ph": "/ɪkˈstensɪvli/",
    "example": "The research has been extensively documented in various publications.",
    "exampleZh": "這項研究已在各種出版物中得到廣泛記錄。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "extinct",
    "zh": "滅絕的",
    "ph": "/ɪkˈstɪŋkt/",
    "example": "Dinosaurs are an example of an extinct species.",
    "exampleZh": "恐龍是滅絕物種的一個例子。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "extinction",
    "zh": "滅絕",
    "ph": "/ɪkˈstɪŋkʃən/",
    "example": "The extinction of the dinosaurs is still a mystery to scientists.",
    "exampleZh": "恐龍的滅絕對科學家來說仍然是一個謎。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "extraordinary",
    "zh": "非凡的；特別的",
    "ph": "/ɪkˈstrɔːrdəneri/",
    "example": "She has an extraordinary talent for music.",
    "exampleZh": "她在音樂方面有著非凡的天賦。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "extreme",
    "zh": "極端的；極度的",
    "ph": "/ɪkˈstriːm/",
    "example": "The weather conditions were extreme, with temperatures below freezing.",
    "exampleZh": "天氣條件極端，氣溫低於冰點。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "eyesight",
    "zh": "視力",
    "ph": "/ˈaɪsaɪt/",
    "example": "His eyesight is getting worse as he gets older.",
    "exampleZh": "隨著年齡的增長，他的視力越來越差。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "face-to-face",
    "zh": "面對面",
    "ph": "/ˌfeɪs tə ˈfeɪs/",
    "example": "I prefer face-to-face meetings rather than phone calls.",
    "exampleZh": "我更喜歡面對面的會議，而不是電話。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "facility",
    "zh": "設施；設備",
    "ph": "/fəˈsɪləti/",
    "example": "This new facility will improve our research capabilities.",
    "exampleZh": "這個新設施將提高我們的研究能力。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fade",
    "zh": "褪色；消退",
    "ph": "/feɪd/",
    "example": "The color of the curtains will fade if they are left in direct sunlight.",
    "exampleZh": "如果窗簾一直暴露在陽光下，顏色會褪色。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "failure",
    "zh": "失敗；故障",
    "ph": "/ˈfeɪljər/",
    "example": "The project was a complete failure due to poor planning.",
    "exampleZh": "由於計劃不周，這個項目徹底失敗了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "faint",
    "zh": "昏厥；微弱的",
    "ph": "/feɪnt/",
    "example": "She felt faint and had to sit down.",
    "exampleZh": "她感到頭暈，不得不坐下。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "faithful",
    "zh": "忠實的；可靠的",
    "ph": "/ˈfeɪθfəl/",
    "example": "He has been a faithful employee for over twenty years.",
    "exampleZh": "他一直是位忠實的員工，已經超過二十年了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fall",
    "zh": "落下；秋天",
    "ph": "/fɔːl/",
    "example": "Be careful not to fall down the stairs.",
    "exampleZh": "小心不要從樓梯上摔下來。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fallen",
    "zh": "倒下的；墮落的",
    "ph": "/ˈfɔːlən/",
    "example": "Fallen leaves covered the ground.",
    "exampleZh": "落葉覆蓋了地面。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fantasy",
    "zh": "幻想；夢想",
    "ph": "/ˈfæntəsi/",
    "example": "Her biggest fantasy is to travel around the world.",
    "exampleZh": "她最大的夢想是環遊世界。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "faraway",
    "zh": "遙遠的",
    "ph": "/ˈfɑːrəweɪ/",
    "example": "They dreamed of visiting faraway lands.",
    "exampleZh": "他們夢想著去遙遠的國家旅行。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "farming",
    "zh": "農業；耕作",
    "ph": "/ˈfɑːrmɪŋ/",
    "example": "Farming is an important part of the country's economy.",
    "exampleZh": "農業是國家經濟的重要組成部分。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "farmland",
    "zh": "農田；耕地",
    "ph": "/ˈfɑːrmlænd/",
    "example": "The farmland stretched as far as the eye could see.",
    "exampleZh": "農田綿延至視線盡頭。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "farther",
    "zh": "更遠；更進一步",
    "ph": "/ˈfɑːrðər/",
    "example": "I can't walk any farther; I'm exhausted.",
    "exampleZh": "我不能再走了，我精疲力盡了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "farthest",
    "zh": "最遠；最遙遠",
    "ph": "/ˈfɑːrðɪst/",
    "example": "That is the farthest I've ever traveled.",
    "exampleZh": "那是我旅行過的最遠的地方。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fascinate",
    "zh": "使著迷；吸引",
    "ph": "/ˈfæsɪneɪt/",
    "example": "Ancient history continues to fascinate many people.",
    "exampleZh": "古代歷史持續吸引著許多人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fashionable",
    "zh": "時髦的；流行的",
    "ph": "/ˈfæʃənəbəl/",
    "example": "She always wears the most fashionable clothes.",
    "exampleZh": "她總是穿著最時髦的衣服。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fasten",
    "zh": "繫緊；扣緊",
    "ph": "/ˈfæsən/",
    "example": "Please fasten your seatbelts before the plane takes off.",
    "exampleZh": "飛機起飛前請繫好安全帶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "favorable",
    "zh": "有利的；贊成的",
    "ph": "/ˈfeɪvərəbəl/",
    "example": "The weather forecast is favorable for our picnic.",
    "exampleZh": "天氣預報對我們的野餐有利。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fax",
    "zh": "傳真；傳真機",
    "ph": "/fæks/",
    "example": "I will fax you the document later today.",
    "exampleZh": "我今天晚些時候會把文件傳真給你。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "feast",
    "zh": "盛宴；宴會",
    "ph": "/fiːst/",
    "example": "We had a wonderful feast for Thanksgiving.",
    "exampleZh": "我們在感恩節享用了一頓豐盛的盛宴。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fellow",
    "zh": "夥伴；同事",
    "ph": "/ˈfeloʊ/",
    "example": "He is a good fellow and always helps others.",
    "exampleZh": "他是個好夥伴，總是幫助別人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ferry",
    "zh": "渡輪；擺渡",
    "ph": "/ˈferi/",
    "example": "We took a ferry to the island.",
    "exampleZh": "我們乘渡輪去了那個島嶼。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "festive",
    "zh": "節日的；喜慶的",
    "ph": "/ˈfestɪv/",
    "example": "The atmosphere was very festive during the holiday season.",
    "exampleZh": "節日期間的氣氛非常喜慶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fetch",
    "zh": "取來；拿來",
    "ph": "/fetʃ/",
    "example": "Can you fetch me a glass of water?",
    "exampleZh": "你能幫我拿一杯水嗎？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "feverishly",
    "zh": "發燒地；狂熱地",
    "ph": "/ˈfiːvərɪʃli/",
    "example": "She worked feverishly to finish the project on time.",
    "exampleZh": "她拼命工作，以便按時完成項目。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fifth",
    "zh": "第五",
    "ph": "/fɪfθ/",
    "example": "Today is the fifth of May.",
    "exampleZh": "今天是五月五日。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "filling",
    "zh": "填充物；餡料",
    "ph": "/ˈfɪlɪŋ/",
    "example": "The filling in this cake is delicious.",
    "exampleZh": "這個蛋糕裡的餡料真好吃。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "film",
    "zh": "電影；膠捲",
    "ph": "/fɪlm/",
    "example": "We watched a great film last night.",
    "exampleZh": "我們昨晚看了一部很棒的電影。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "film-maker",
    "zh": "電影製作人",
    "ph": "/ˈfɪlmˌmeɪkər/",
    "example": "The film-maker is known for his documentaries.",
    "exampleZh": "這位電影製作人以他的紀錄片而聞名。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "filter",
    "zh": "過濾器；過濾",
    "ph": "/ˈfɪltər/",
    "example": "This water filter removes impurities.",
    "exampleZh": "這個濾水器可以去除雜質。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "finance",
    "zh": "金融；財政",
    "ph": "/faɪˈnæns/",
    "example": "She works in the finance industry.",
    "exampleZh": "她在金融行業工作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "financial",
    "zh": "金融的；財政的",
    "ph": "/faɪˈnænʃəl/",
    "example": "The project requires financial support.",
    "exampleZh": "這個項目需要財政支持。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "firefighter",
    "zh": "消防員",
    "ph": "/ˈfaɪərˌfaɪtər/",
    "example": "The firefighter rescued the cat from the tree.",
    "exampleZh": "消防員從樹上救下了貓。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "firm",
    "zh": "堅定的；公司",
    "ph": "/fɜːrm/",
    "example": "The company has a firm commitment to quality.",
    "exampleZh": "這家公司對質量有堅定的承諾。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "firmly",
    "zh": "堅定地；穩固地",
    "ph": "/ˈfɜːrmli/",
    "example": "She firmly believes in her principles.",
    "exampleZh": "她堅定地相信她的原則。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "first-floor",
    "zh": "一樓的",
    "ph": "/ˌfɜːrst ˈflɔːr/",
    "example": "Our office is on the first-floor.",
    "exampleZh": "我們的辦公室在一樓。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fitness",
    "zh": "健康；健身",
    "ph": "/ˈfɪtnəs/",
    "example": "Regular exercise is important for good fitness.",
    "exampleZh": "有規律的鍛鍊對保持健康很重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "flavor",
    "zh": "味道；風味",
    "ph": "/ˈfleɪvər/",
    "example": "What flavor of ice cream do you want?",
    "exampleZh": "你想要什麼口味的冰淇淋？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "float",
    "zh": "漂浮",
    "ph": "/floʊt/",
    "example": "The boat began to float on the water.",
    "exampleZh": "船開始在水上漂浮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "flock",
    "zh": "群；聚集",
    "ph": "/flɑːk/",
    "example": "A flock of birds flew overhead.",
    "exampleZh": "一群鳥從頭頂飛過。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "flood",
    "zh": "洪水；淹沒",
    "ph": "/flʌd/",
    "example": "The heavy rain caused a flood in the town.",
    "exampleZh": "大雨導致該鎮發生洪水。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "flow",
    "zh": "流動；流量",
    "ph": "/floʊ/",
    "example": "The flow of traffic was heavy this morning.",
    "exampleZh": "今天早上交通流量很大。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fluent",
    "zh": "流利的；流暢的",
    "ph": "/ˈfluːənt/",
    "example": "She is fluent in English and Spanish.",
    "exampleZh": "她的英語和西班牙語都很流利。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fluently",
    "zh": "流利地；流暢地",
    "ph": "/ˈfluːəntli/",
    "example": "She speaks French fluently after living in Paris for five years.",
    "exampleZh": "在巴黎生活了五年後，她能流利地說法語。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "flunk",
    "zh": "不及格；失敗",
    "ph": "/flʌŋk/",
    "example": "If you don't study hard, you might flunk the exam.",
    "exampleZh": "如果你不努力學習，你可能會考試不及格。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "flute",
    "zh": "長笛",
    "ph": "/fluːt/",
    "example": "She plays the flute in the school orchestra.",
    "exampleZh": "她在學校管絃樂隊裡吹長笛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fold",
    "zh": "摺疊；合攏",
    "ph": "/foʊld/",
    "example": "Please fold the laundry and put it away.",
    "exampleZh": "請把洗好的衣服疊好並收起來。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "folk",
    "zh": "人們；民族；民間的",
    "ph": "/foʊk/",
    "example": "These folk songs have been passed down through generations.",
    "exampleZh": "這些民歌代代相傳。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fond",
    "zh": "喜愛的；喜歡的",
    "ph": "/fɒnd/",
    "example": "I am very fond of my grandmother.",
    "exampleZh": "我非常喜歡我的祖母。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fondness",
    "zh": "喜愛；喜歡",
    "ph": "/ˈfɒndnəs/",
    "example": "He has a great fondness for animals.",
    "exampleZh": "他非常喜歡動物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "foolish",
    "zh": "愚蠢的；傻的",
    "ph": "/ˈfuːlɪʃ/",
    "example": "It was foolish of you to go out without a coat in this weather.",
    "exampleZh": "在這種天氣裡不穿外套就出去，你太傻了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "forbidden",
    "zh": "禁止的；不允許的",
    "ph": "/fərˈbɪdən/",
    "example": "Smoking is forbidden in this area.",
    "exampleZh": "禁止在該區域吸菸。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "forecast",
    "zh": "預報；預測",
    "ph": "/ˈfɔːrkæst/",
    "example": "The weather forecast predicts rain for tomorrow.",
    "exampleZh": "天氣預報預測明天有雨。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "forehead",
    "zh": "額頭",
    "ph": "/ˈfɔːrhed/",
    "example": "She wiped the sweat from her forehead.",
    "exampleZh": "她擦去了額頭上的汗水。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "form",
    "zh": "形式；表格；組成",
    "ph": "/fɔːrm/",
    "example": "Please fill out this form with your personal information.",
    "exampleZh": "請填寫這張表格，填寫您的個人信息。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "formally",
    "zh": "正式地；正規地",
    "ph": "/ˈfɔːrməli/",
    "example": "The agreement was formally signed yesterday.",
    "exampleZh": "該協議昨天正式簽署。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "format",
    "zh": "格式；版式",
    "ph": "/ˈfɔːrmæt/",
    "example": "The document is in PDF format.",
    "exampleZh": "這份文件是PDF格式的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "former",
    "zh": "以前的；前任的",
    "ph": "/ˈfɔːrmər/",
    "example": "He is a former employee of the company.",
    "exampleZh": "他是這家公司的前僱員。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "formula",
    "zh": "公式；配方",
    "ph": "/ˈfɔːrmjələ/",
    "example": "The formula for success is hard work and dedication.",
    "exampleZh": "成功的公式是努力工作和奉獻精神。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "forth",
    "zh": "向前；向外",
    "ph": "/fɔːrθ/",
    "example": "They set forth on their journey early in the morning.",
    "exampleZh": "他們清晨出發開始他們的旅程。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fortnight",
    "zh": "兩星期",
    "ph": "/ˈfɔːrtnaɪt/",
    "example": "We are going on holiday for a fortnight.",
    "exampleZh": "我們將去度假兩週。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fortunate",
    "zh": "幸運的；僥倖的",
    "ph": "/ˈfɔːrtʃənət/",
    "example": "I was fortunate to get the job.",
    "exampleZh": "我很幸運能得到這份工作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fountain",
    "zh": "噴泉；源泉",
    "ph": "/ˈfaʊntən/",
    "example": "There is a beautiful fountain in the park.",
    "exampleZh": "公園裡有一個美麗的噴泉。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fragment",
    "zh": "碎片；片段",
    "ph": "/ˈfræɡmənt/",
    "example": "I found a fragment of glass on the floor.",
    "exampleZh": "我在地板上發現了一塊玻璃碎片。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "freely",
    "zh": "自由地；隨意地",
    "ph": "/ˈfriːli/",
    "example": "You can speak freely here.",
    "exampleZh": "你可以在這裡自由發言。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "freezer",
    "zh": "冰櫃；冷凍箱",
    "ph": "/ˈfriːzər/",
    "example": "We keep ice cream in the freezer.",
    "exampleZh": "我們把冰淇淋放在冰櫃裡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "freezing",
    "zh": "冰凍的；極冷的",
    "ph": "/ˈfriːzɪŋ/",
    "example": "It's freezing outside; you should wear a coat.",
    "exampleZh": "外面非常冷；你應該穿件外套。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "frequency",
    "zh": "頻率；次數",
    "ph": "/ˈfriːkwənsi/",
    "example": "The frequency of buses has increased.",
    "exampleZh": "公共汽車的班次增加了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "frequent",
    "zh": "頻繁的；經常的",
    "ph": "/ˈfriːkwənt/",
    "example": "He is a frequent visitor to the library.",
    "exampleZh": "他是圖書館的常客。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "frequently",
    "zh": "經常地；頻繁地",
    "ph": "/ˈfriːkwəntli/",
    "example": "I frequently go to the gym after work.",
    "exampleZh": "我下班後經常去健身房。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "freshman",
    "zh": "新生；大學一年級學生",
    "ph": "/ˈfreʃmən/",
    "example": "She is a freshman at the local university.",
    "exampleZh": "她是當地大學的一名新生。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "friendliness",
    "zh": "友善；友好",
    "ph": "/ˈfrendlinəs/",
    "example": "I was impressed by the friendliness of the staff.",
    "exampleZh": "我對員工的友善印象深刻。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fright",
    "zh": "驚嚇；恐怖",
    "ph": "/fraɪt/",
    "example": "The loud noise gave her a fright.",
    "exampleZh": "巨大的噪音嚇了她一跳。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "frost",
    "zh": "霜；霜凍",
    "ph": "/frɒst/",
    "example": "There was frost on the ground this morning.",
    "exampleZh": "今天早上地面上有霜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "frozen",
    "zh": "冷凍的；凍結的",
    "ph": "/ˈfroʊzən/",
    "example": "The lake was frozen solid.",
    "exampleZh": "湖面完全凍結了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "frustrated",
    "zh": "沮喪的；灰心的",
    "ph": "/frʌˈstreɪtɪd/",
    "example": "I felt frustrated when I couldn't solve the problem.",
    "exampleZh": "當我無法解決問題時，我感到很沮喪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "frustration",
    "zh": "沮喪；挫折",
    "ph": "/frʌˈstreɪʃən/",
    "example": "He expressed his frustration with the slow service.",
    "exampleZh": "他對緩慢的服務表達了他的沮喪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fry",
    "zh": "油炸；煎",
    "ph": "/fraɪ/",
    "example": "I'm going to fry some eggs for breakfast.",
    "exampleZh": "我打算煎一些雞蛋當早餐。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "full-time",
    "zh": "全職",
    "ph": "/ˌfʊl ˈtaɪm/",
    "example": "She is looking for a full-time job after graduation.",
    "exampleZh": "她畢業後正在找一份全職工作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "function",
    "zh": "功能；作用",
    "ph": "/ˈfʌŋkʃən/",
    "example": "The main function of the heart is to pump blood around the body.",
    "exampleZh": "心臟的主要功能是將血液輸送到全身。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fund",
    "zh": "基金；資金",
    "ph": "/fʌnd/",
    "example": "They established a fund to support local artists.",
    "exampleZh": "他們建立了一個基金來支持當地藝術家。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fur",
    "zh": "毛皮",
    "ph": "/fɜːr/",
    "example": "The cat has soft, thick fur.",
    "exampleZh": "這隻貓有柔軟而濃密的毛皮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "furnish",
    "zh": "提供；佈置",
    "ph": "/ˈfɜːrnɪʃ/",
    "example": "The hotel will furnish all the rooms with new furniture.",
    "exampleZh": "酒店將為所有房間配備新傢俱。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "further",
    "zh": "更遠的；進一步的",
    "ph": "/ˈfɜːrðər/",
    "example": "I need further information before I can make a decision.",
    "exampleZh": "在我做出決定之前，我需要進一步的信息。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "furthermore",
    "zh": "此外；而且",
    "ph": "/ˌfɜːrðərˈmɔːr/",
    "example": "The plan is well-designed; furthermore, it is cost-effective.",
    "exampleZh": "這個計劃設計得很好；此外，它還具有成本效益。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "furthest",
    "zh": "最遠的",
    "ph": "/ˈfɜːrðɪst/",
    "example": "Which planet is the furthest from the sun?",
    "exampleZh": "哪個行星離太陽最遠？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "fuss",
    "zh": "大驚小怪；小題大做",
    "ph": "/fʌs/",
    "example": "Don't make such a fuss about a small mistake.",
    "exampleZh": "不要為一個小錯誤大驚小怪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gall",
    "zh": "膽汁；厚顏無恥",
    "ph": "/ɡɔːl/",
    "example": "He had the gall to ask me for money after he stole from me.",
    "exampleZh": "他偷了我的錢後，竟然還有臉向我要錢。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gallon",
    "zh": "加侖",
    "ph": "/ˈɡælən/",
    "example": "I need to buy a gallon of milk from the store.",
    "exampleZh": "我需要從商店買一加侖牛奶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gardening",
    "zh": "園藝",
    "ph": "/ˈɡɑːrdənɪŋ/",
    "example": "She enjoys gardening in her free time.",
    "exampleZh": "她空閒時喜歡園藝。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "garment",
    "zh": "服裝；衣服",
    "ph": "/ˈɡɑːrmənt/",
    "example": "This garment is made of high-quality cotton.",
    "exampleZh": "這件服裝是用優質棉製成的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gay",
    "zh": "同性戀的；快樂的",
    "ph": "/ɡeɪ/",
    "example": "He is openly gay and proud of it.",
    "exampleZh": "他公開承認自己是同性戀，併為此感到自豪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gee",
    "zh": "天啊；哎呀",
    "ph": "/dʒiː/",
    "example": "Gee, I didn't know that!",
    "exampleZh": "天啊，我不知道這件事！",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "generally",
    "zh": "通常；一般地",
    "ph": "/ˈdʒenərəli/",
    "example": "Generally speaking, the weather is good in the summer.",
    "exampleZh": "一般來說，夏天天氣很好。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "generous",
    "zh": "慷慨的；大方的",
    "ph": "/ˈdʒenərəs/",
    "example": "She is a generous person who always helps others.",
    "exampleZh": "她是一個慷慨的人，總是幫助別人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "genetic",
    "zh": "遺傳的",
    "ph": "/dʒəˈnetɪk/",
    "example": "There is a genetic link to this disease.",
    "exampleZh": "這種疾病與遺傳有關。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "genetically",
    "zh": "在遺傳上",
    "ph": "/dʒəˈnetɪkli/",
    "example": "The crop has been genetically modified to resist pests.",
    "exampleZh": "這種作物經過基因改造，可以抵抗害蟲。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "genetics",
    "zh": "遺傳學",
    "ph": "/dʒəˈnetɪks/",
    "example": "She is studying genetics at university.",
    "exampleZh": "她正在大學學習遺傳學。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "geographical",
    "zh": "地理的",
    "ph": "/ˌdʒiːəˈɡræfɪkl/",
    "example": "The geographical location of the city is important for trade.",
    "exampleZh": "這個城市的地理位置對貿易很重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "geography",
    "zh": "地理；地理學",
    "ph": "/dʒiˈɒɡrəfi/",
    "example": "She is studying geography at university.",
    "exampleZh": "她正在大學學習地理。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "geology",
    "zh": "地質學",
    "ph": "/dʒiˈɒlədʒi/",
    "example": "He has a degree in geology.",
    "exampleZh": "他擁有地質學學位。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gesture",
    "zh": "手勢；姿勢",
    "ph": "/ˈdʒestʃər/",
    "example": "He made a rude gesture.",
    "exampleZh": "他做了一個粗魯的手勢。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "giant",
    "zh": "巨人；巨大的",
    "ph": "/ˈdʒaɪənt/",
    "example": "The company is a giant in the industry.",
    "exampleZh": "這家公司是行業巨頭。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gifted",
    "zh": "有天賦的；天才的",
    "ph": "/ˈɡɪftɪd/",
    "example": "She is a gifted musician.",
    "exampleZh": "她是一位有天賦的音樂家。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "giggle",
    "zh": "咯咯笑；傻笑",
    "ph": "/ˈɡɪɡəl/",
    "example": "The children started to giggle.",
    "exampleZh": "孩子們開始咯咯地笑。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ginger",
    "zh": "姜",
    "ph": "/ˈdʒɪndʒər/",
    "example": "I added some ginger to the soup.",
    "exampleZh": "我在湯里加了一些姜。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "glide",
    "zh": "滑行；滑動",
    "ph": "/ɡlaɪd/",
    "example": "The bird began to glide effortlessly through the air.",
    "exampleZh": "鳥兒開始毫不費力地在空中滑翔。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "glimpse",
    "zh": "一瞥；瞥見",
    "ph": "/ɡlɪmps/",
    "example": "I caught a glimpse of her in the crowd.",
    "exampleZh": "我在人群中瞥見了她。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "glint",
    "zh": "閃光；閃爍",
    "ph": "/ɡlɪnt/",
    "example": "There was a glint of metal in the sunlight.",
    "exampleZh": "陽光下有一道金屬的閃光。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "global",
    "zh": "全球的；世界的",
    "ph": "/ˈɡloʊbəl/",
    "example": "Climate change is a global issue.",
    "exampleZh": "氣候變化是一個全球性問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "glorious",
    "zh": "光榮的；輝煌的",
    "ph": "/ˈɡlɔːriəs/",
    "example": "It was a glorious victory.",
    "exampleZh": "這是一場光榮的勝利。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "glory",
    "zh": "光榮；榮譽",
    "ph": "/ˈɡlɔːri/",
    "example": "They fought for the glory of their country.",
    "exampleZh": "他們為國家的榮譽而戰。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "goalkeeper",
    "zh": "守門員",
    "ph": "/ˈɡoʊlkiːpər/",
    "example": "The goalkeeper made a fantastic save.",
    "exampleZh": "守門員做出了一個精彩的撲救。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "goddess",
    "zh": "女神",
    "ph": "/ˈɡɑːdəs/",
    "example": "Aphrodite is the Greek goddess of love.",
    "exampleZh": "阿芙洛狄忒是希臘的愛神。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "golfer",
    "zh": "高爾夫球手",
    "ph": "/ˈɡɑːlfər/",
    "example": "He is a professional golfer who travels the world.",
    "exampleZh": "他是一位環遊世界的職業高爾夫球手。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "goodness",
    "zh": "善良；美德",
    "ph": "/ˈɡʊdnəs/",
    "example": "She is known for her goodness and generosity.",
    "exampleZh": "她以善良和慷慨而聞名。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "goods",
    "zh": "商品；貨物",
    "ph": "/ɡʊdz/",
    "example": "The shop sells a wide range of goods.",
    "exampleZh": "這家商店出售各種各樣的商品。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gorgeous",
    "zh": "華麗的；極好的",
    "ph": "/ˈɡɔːrdʒəs/",
    "example": "She looked gorgeous in her red dress.",
    "exampleZh": "她穿著紅色連衣裙看起來非常華麗。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gorilla",
    "zh": "大猩猩",
    "ph": "/ɡəˈrɪlə/",
    "example": "The gorilla is a powerful and intelligent animal.",
    "exampleZh": "大猩猩是一種強大而聰明的動物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "govern",
    "zh": "統治；管理",
    "ph": "/ˈɡʌvərn/",
    "example": "It's important to govern your emotions.",
    "exampleZh": "控制你的情緒很重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "governor",
    "zh": "州長；管理者",
    "ph": "/ˈɡʌvərnər/",
    "example": "The governor announced a new policy.",
    "exampleZh": "州長宣佈了一項新政策。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gown",
    "zh": "長袍；禮服",
    "ph": "/ɡaʊn/",
    "example": "She wore a beautiful gown to the ball.",
    "exampleZh": "她穿著一件漂亮的禮服參加舞會。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "grab",
    "zh": "抓住；奪取",
    "ph": "/ɡræb/",
    "example": "I need to grab my keys before we leave.",
    "exampleZh": "我們離開之前我需要抓住我的鑰匙。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "graceful",
    "zh": "優雅的；優美的",
    "ph": "/ˈɡreɪsfl/",
    "example": "The dancer was graceful and light on her feet.",
    "exampleZh": "這位舞蹈演員舞姿優雅，腳步輕盈。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "graduation",
    "zh": "畢業",
    "ph": "/ˌɡrædʒuˈeɪʃən/",
    "example": "My graduation ceremony will be held in June.",
    "exampleZh": "我的畢業典禮將在六月舉行。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "graph",
    "zh": "圖表",
    "ph": "/ɡræf/",
    "example": "The graph shows a significant increase in sales.",
    "exampleZh": "圖表顯示銷售額顯著增長。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "graphic",
    "zh": "圖像的；生動的",
    "ph": "/ˈɡræfɪk/",
    "example": "The newspaper included a graphic description of the accident.",
    "exampleZh": "報紙包含了一段對事故的生動描述。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "graphics",
    "zh": "圖像；圖形",
    "ph": "/ˈɡræfɪks/",
    "example": "The computer has excellent graphics capabilities.",
    "exampleZh": "這臺電腦具有出色的圖形處理能力。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gratitude",
    "zh": "感謝；感激",
    "ph": "/ˈɡrætɪtjuːd/",
    "example": "I expressed my gratitude for their help.",
    "exampleZh": "我表達了對他們幫助的感謝。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "grave",
    "zh": "墳墓；嚴重的",
    "ph": "/ɡreɪv/",
    "example": "The situation is very grave and requires immediate action.",
    "exampleZh": "情況非常嚴重，需要立即採取行動。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gravy",
    "zh": "肉汁",
    "ph": "/ˈɡreɪvi/",
    "example": "She poured gravy over the mashed potatoes.",
    "exampleZh": "她在土豆泥上澆了肉汁。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "greenhouse",
    "zh": "溫室",
    "ph": "/ˈɡriːnhaʊs/",
    "example": "The plants are grown in a greenhouse.",
    "exampleZh": "這些植物在溫室裡種植。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "groom",
    "zh": "新郎；打扮",
    "ph": "/ɡruːm/",
    "example": "The groom looked nervous before the wedding.",
    "exampleZh": "婚禮前新郎看起來很緊張。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "grouping",
    "zh": "分組；分類",
    "ph": "/ˈɡruːpɪŋ/",
    "example": "The data was analyzed by grouping similar items together.",
    "exampleZh": "通過將相似的項目分組在一起，對數據進行了分析。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "growth",
    "zh": "成長；增長",
    "ph": "/ɡroʊθ/",
    "example": "The company has experienced significant growth in recent years.",
    "exampleZh": "這家公司近年來經歷了顯著的增長。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "guess",
    "zh": "猜測；推測",
    "ph": "/ɡes/",
    "example": "I can only guess what happened.",
    "exampleZh": "我只能猜測發生了什麼。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "guidance",
    "zh": "指導；引導",
    "ph": "/ˈɡaɪdns/",
    "example": "The teacher provided guidance to the students.",
    "exampleZh": "老師為學生提供了指導。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "guide",
    "zh": "引導；指南",
    "ph": "/ɡaɪd/",
    "example": "The tour guide showed us around the city.",
    "exampleZh": "導遊帶領我們參觀了這座城市。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "guilt",
    "zh": "內疚；罪惡感",
    "ph": "/ɡɪlt/",
    "example": "She felt a sense of guilt for not helping her friend.",
    "exampleZh": "她因為沒有幫助她的朋友而感到內疚。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "guitarist",
    "zh": "吉他手",
    "ph": "/ɡɪˈtɑːrɪst/",
    "example": "He is a talented guitarist in a rock band.",
    "exampleZh": "他是一個搖滾樂隊裡很有才華的吉他手。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gym",
    "zh": "健身房",
    "ph": "/dʒɪm/",
    "example": "I go to the gym three times a week.",
    "exampleZh": "我每週去健身房三次。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "gymnastics",
    "zh": "體操",
    "ph": "/dʒɪmˈnæstɪks/",
    "example": "She is very good at gymnastics.",
    "exampleZh": "她非常擅長體操。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "habitat",
    "zh": "棲息地",
    "ph": "/ˈhæbɪtæt/",
    "example": "The destruction of the rainforest is destroying the habitat of many animals.",
    "exampleZh": "對熱帶雨林的破壞正在摧毀許多動物的棲息地。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hairdresser",
    "zh": "理髮師",
    "ph": "/ˈheərdresər/",
    "example": "I went to the hairdresser to get my hair cut.",
    "exampleZh": "我去理髮店剪了頭髮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hairdryer",
    "zh": "吹風機",
    "ph": "/ˈheərˌdraɪər/",
    "example": "I used the hairdryer to dry my hair.",
    "exampleZh": "我用吹風機吹乾了頭髮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "half",
    "zh": "一半",
    "ph": "/hæf/",
    "example": "I ate half of the pizza.",
    "exampleZh": "我吃了一半的披薩。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hammer",
    "zh": "錘子",
    "ph": "/ˈhæmər/",
    "example": "I used a hammer to nail the wood together.",
    "exampleZh": "我用錘子把木頭釘在一起。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hand-held",
    "zh": "手持的；便攜的",
    "ph": "/ˈhændˌheld/",
    "example": "The hand-held device is easy to carry around.",
    "exampleZh": "這個手持設備便於攜帶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "handball",
    "zh": "手球",
    "ph": "/ˈhændbɔːl/",
    "example": "Handball is a popular sport in Europe.",
    "exampleZh": "手球在歐洲是一項受歡迎的運動。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "handkerchief",
    "zh": "手帕",
    "ph": "/ˈhæŋkətʃiːf/",
    "example": "He pulled out a handkerchief to wipe his forehead.",
    "exampleZh": "他掏出手帕擦了擦額頭。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "handshake",
    "zh": "握手",
    "ph": "/ˈhændʃeɪk/",
    "example": "They sealed the agreement with a handshake.",
    "exampleZh": "他們通過握手達成了協議。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "handwriting",
    "zh": "筆跡；書法",
    "ph": "/ˈhændiˌraɪtɪŋ/",
    "example": "Her handwriting is very neat and easy to read.",
    "exampleZh": "她的筆跡非常整潔，容易辨認。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "handy",
    "zh": "方便的；有用的",
    "ph": "/ˈhændi/",
    "example": "This tool is very handy for small repairs.",
    "exampleZh": "這個工具對於小修理非常方便。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hanging",
    "zh": "懸掛的；絞刑",
    "ph": "/ˈhæŋɪŋ/",
    "example": "The hanging bridge swayed in the wind.",
    "exampleZh": "懸索橋在風中搖曳。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hard-working",
    "zh": "努力工作的；勤奮的",
    "ph": "/ˌhɑːrd ˈwɜːrkɪŋ/",
    "example": "She is a hard-working student who always gets good grades.",
    "exampleZh": "她是一個努力學習的學生，總是取得好成績。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hardship",
    "zh": "困難；艱辛",
    "ph": "/ˈhɑːrdʃɪp/",
    "example": "The family overcame their financial hardship.",
    "exampleZh": "這個家庭克服了他們的經濟困難。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "harness",
    "zh": "馬具；利用",
    "ph": "/ˈhɑːrnɪs/",
    "example": "The horse was wearing a leather harness.",
    "exampleZh": "這匹馬穿著皮革馬具。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hasty",
    "zh": "匆忙的；草率的",
    "ph": "/ˈheɪsti/",
    "example": "Don't make a hasty decision; think carefully.",
    "exampleZh": "不要做出草率的決定；仔細考慮。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hatch",
    "zh": "孵化；艙口",
    "ph": "/hætʃ/",
    "example": "The eggs will hatch in about three weeks.",
    "exampleZh": "這些蛋大約三週後會孵化。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "haunt",
    "zh": "縈繞；困擾",
    "ph": "/hɔːnt/",
    "example": "The memory of the accident continues to haunt him.",
    "exampleZh": "那場事故的記憶一直困擾著他。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "haven",
    "zh": "避風港；庇護所",
    "ph": "/ˈheɪvn/",
    "example": "The library is a haven for students seeking a quiet place to study.",
    "exampleZh": "圖書館是學生們尋求安靜學習場所的避風港。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hazard",
    "zh": "危險；危害",
    "ph": "/ˈhæzərd/",
    "example": "Smoking is a serious health hazard.",
    "exampleZh": "吸菸是一種嚴重的健康危害。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "headline",
    "zh": "標題；頭條",
    "ph": "/ˈhedlaɪn/",
    "example": "The headline of the newspaper announced the election results.",
    "exampleZh": "報紙的頭條宣佈了選舉結果。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "heal",
    "zh": "治癒；痊癒",
    "ph": "/hiːl/",
    "example": "It takes time for a broken heart to heal.",
    "exampleZh": "一顆破碎的心需要時間才能痊癒。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "healing",
    "zh": "治癒；康復",
    "ph": "/ˈhiːlɪŋ/",
    "example": "Music can have a healing effect on the mind.",
    "exampleZh": "音樂可以對心靈產生治癒作用。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hearing",
    "zh": "聽力；聽覺",
    "ph": "/ˈhɪərɪŋ/",
    "example": "He has a hearing problem and needs a hearing aid.",
    "exampleZh": "他有聽力問題，需要助聽器。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hearted",
    "zh": "有心的；衷心的",
    "ph": "/ˈhɑːrtɪd/",
    "example": "He is a kind-hearted man who always helps others.",
    "exampleZh": "他是一個心地善良的人，總是幫助別人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hearty",
    "zh": "豐盛的；衷心的",
    "ph": "/ˈhɑːrti/",
    "example": "We enjoyed a hearty breakfast before starting our hike.",
    "exampleZh": "我們在開始徒步旅行前享用了豐盛的早餐。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "heat",
    "zh": "熱；熱量",
    "ph": "/hiːt/",
    "example": "The heat was unbearable during the summer months.",
    "exampleZh": "在夏季，熱得令人難以忍受。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "heater",
    "zh": "加熱器；暖氣",
    "ph": "/ˈhiːtər/",
    "example": "The heater kept the room warm during the winter.",
    "exampleZh": "暖氣在冬天保持房間溫暖。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "heavenly",
    "zh": "天堂般的；極好的",
    "ph": "/ˈhevənli/",
    "example": "The choir's singing was heavenly.",
    "exampleZh": "合唱團的歌聲如天堂般美妙。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "heel",
    "zh": "腳後跟；鞋跟",
    "ph": "/hiːl/",
    "example": "My heel hurts after walking so much.",
    "exampleZh": "走了這麼多路後，我的腳後跟疼。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "helmet",
    "zh": "頭盔",
    "ph": "/ˈhelmɪt/",
    "example": "You must wear a helmet when riding a motorcycle.",
    "exampleZh": "騎摩托車時必須戴頭盔。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "helpless",
    "zh": "無助的；沒用的",
    "ph": "/ˈhelpləs/",
    "example": "I felt helpless when I couldn't find my keys.",
    "exampleZh": "當我找不到鑰匙時，我感到很無助。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "herd",
    "zh": "獸群；人群",
    "ph": "/hɜːrd/",
    "example": "We saw a herd of cows in the field.",
    "exampleZh": "我們在田野裡看到了一群牛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hesitate",
    "zh": "猶豫；躊躇",
    "ph": "/ˈhezɪteɪt/",
    "example": "Don't hesitate to ask if you need help.",
    "exampleZh": "如果你需要幫助，不要猶豫。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hidden",
    "zh": "隱藏的；隱蔽的",
    "ph": "/ˈhɪdn/",
    "example": "The treasure was hidden under the floorboards.",
    "exampleZh": "寶藏藏在地板下面。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "highlight",
    "zh": "突出；強調；亮點",
    "ph": "/ˈhaɪlaɪt/",
    "example": "The highlight of the trip was visiting the Eiffel Tower.",
    "exampleZh": "這次旅行的亮點是參觀埃菲爾鐵塔。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hire",
    "zh": "僱用；租用",
    "ph": "/ˈhaɪər/",
    "example": "The company is looking to hire new employees.",
    "exampleZh": "該公司正在尋找新員工。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "historian",
    "zh": "歷史學家",
    "ph": "/hɪˈstɔːriən/",
    "example": "The historian specializes in ancient Roman history.",
    "exampleZh": "這位歷史學家專門研究古羅馬歷史。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "historic",
    "zh": "具有歷史意義的",
    "ph": "/hɪˈstɒrɪk/",
    "example": "This is a historic building that dates back to the 18th century.",
    "exampleZh": "這是一座具有歷史意義的建築，可以追溯到18世紀。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "historical",
    "zh": "歷史的；有關歷史的",
    "ph": "/hɪˈstɒrɪkl/",
    "example": "The museum has a large collection of historical artifacts.",
    "exampleZh": "博物館收藏了大量的歷史文物。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hit",
    "zh": "打；擊中",
    "ph": "/hɪt/",
    "example": "The car hit a tree on the side of the road.",
    "exampleZh": "汽車撞到了路邊的一棵樹。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "HIV",
    "zh": "艾滋病毒",
    "ph": "/ˌeɪtʃ.aɪˈviː/",
    "example": "HIV is a virus that attacks the immune system.",
    "exampleZh": "艾滋病毒是一種攻擊免疫系統的病毒。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "homeless",
    "zh": "無家可歸的",
    "ph": "/ˈhoʊmləs/",
    "example": "The city provides shelters for homeless people during the winter.",
    "exampleZh": "這個城市在冬天為無家可歸的人提供庇護所。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "honest",
    "zh": "誠實的；坦率的",
    "ph": "/ˈɑːnɪst/",
    "example": "She is an honest person, and I trust her completely.",
    "exampleZh": "她是一個誠實的人，我完全信任她。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "honestly",
    "zh": "誠實地；坦白地",
    "ph": "/ˈɑːnɪstli/",
    "example": "Honestly, I don't know what happened.",
    "exampleZh": "老實說，我不知道發生了什麼。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "honesty",
    "zh": "誠實；正直",
    "ph": "/ˈɑːnəsti/",
    "example": "Honesty is the best policy.",
    "exampleZh": "誠實是最好的策略。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "honeymoon",
    "zh": "蜜月",
    "ph": "/ˈhʌnimuːn/",
    "example": "They went to Italy for their honeymoon.",
    "exampleZh": "他們去意大利度蜜月。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hop",
    "zh": "跳躍；單腳跳",
    "ph": "/hɑːp/",
    "example": "The rabbit began to hop across the field.",
    "exampleZh": "兔子開始在田野裡跳躍。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hopeful",
    "zh": "有希望的；抱有希望的",
    "ph": "/ˈhoʊpfəl/",
    "example": "We are hopeful that the negotiations will be successful.",
    "exampleZh": "我們希望談判能夠成功。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hopefully",
    "zh": "但願；希望地",
    "ph": "/ˈhoʊpfəli/",
    "example": "Hopefully, the weather will be better tomorrow.",
    "exampleZh": "但願明天的天氣會更好。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hopeless",
    "zh": "絕望的；沒有希望的",
    "ph": "/ˈhoʊpləs/",
    "example": "He felt hopeless after failing the exam.",
    "exampleZh": "考試不及格後，他感到絕望。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "horizon",
    "zh": "地平線；視野",
    "ph": "/həˈraɪzn/",
    "example": "The sun was setting below the horizon.",
    "exampleZh": "太陽正在地平線下落山。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "horn",
    "zh": "角；喇叭",
    "ph": "/hɔːrn/",
    "example": "The driver honked the horn to warn the pedestrian.",
    "exampleZh": "司機按喇叭警告行人。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "horrible",
    "zh": "可怕的；糟糕的",
    "ph": "/ˈhɒrɪbl/",
    "example": "The weather was horrible, so we stayed inside.",
    "exampleZh": "天氣很糟糕，所以我們待在室內。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hostel",
    "zh": "旅社；青年旅館",
    "ph": "/ˈhɒstl/",
    "example": "We stayed in a hostel to save money on accommodation.",
    "exampleZh": "我們住在旅社以節省住宿費用。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "housework",
    "zh": "家務",
    "ph": "/ˈhaʊswɜːk/",
    "example": "I hate doing housework, especially cleaning the bathroom.",
    "exampleZh": "我討厭做家務，尤其是打掃浴室。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "huge",
    "zh": "巨大的；龐大的",
    "ph": "/hjuːdʒ/",
    "example": "The elephant was huge and impressive.",
    "exampleZh": "這頭大象非常巨大，令人印象深刻。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "humanity",
    "zh": "人性；人類",
    "ph": "/hjuːˈmænəti/",
    "example": "We must appeal to the humanity of our leaders.",
    "exampleZh": "我們必須呼籲我們領導人的人性。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "humor",
    "zh": "幽默；詼諧",
    "ph": "/ˈhjuːmər/",
    "example": "He has a great sense of humor and always makes us laugh.",
    "exampleZh": "他很有幽默感，總是讓我們發笑。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "humorous",
    "zh": "幽默的；滑稽的",
    "ph": "/ˈhjuːmərəs/",
    "example": "The play was very humorous, and the audience loved it.",
    "exampleZh": "這部劇非常幽默，觀眾很喜歡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hunger",
    "zh": "飢餓；渴望",
    "ph": "/ˈhʌŋɡər/",
    "example": "After a long hike, I felt a strong hunger.",
    "exampleZh": "長途跋涉後，我感到非常飢餓。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hurriedly",
    "zh": "匆忙地；倉促地",
    "ph": "/ˈhʌrɪdli/",
    "example": "She hurriedly packed her bags and left for the airport.",
    "exampleZh": "她匆忙地收拾好行李，然後去了機場。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hurt",
    "zh": "受傷；疼痛；傷害",
    "ph": "/hɜːt/",
    "example": "I hurt my knee playing football.",
    "exampleZh": "我踢足球時傷到了膝蓋。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "hut",
    "zh": "小屋；茅舍",
    "ph": "/hʌt/",
    "example": "They lived in a small hut in the forest.",
    "exampleZh": "他們住在森林裡的一間小茅屋裡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "idiom",
    "zh": "習語；成語",
    "ph": "/ˈɪdiəm/",
    "example": "The idiom 'break a leg' means 'good luck'.",
    "exampleZh": "習語 'break a leg' 的意思是 '祝你好運'。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "idol",
    "zh": "偶像",
    "ph": "/ˈaɪdl/",
    "example": "She has always looked up to her older sister as an idol.",
    "exampleZh": "她一直把她的姐姐當作偶像來仰慕。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "illegally",
    "zh": "非法地；違法地",
    "ph": "/ɪˈliːɡəli/",
    "example": "They were accused of entering the country illegally.",
    "exampleZh": "他們被指控非法進入該國。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "illness",
    "zh": "疾病",
    "ph": "/ˈɪlnəs/",
    "example": "She was absent from work due to illness.",
    "exampleZh": "她因病缺席工作。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "illuminate",
    "zh": "照亮；闡明",
    "ph": "/ɪˈluːmɪneɪt/",
    "example": "The streetlights illuminate the road at night.",
    "exampleZh": "路燈在晚上照亮道路。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "imaginary",
    "zh": "想象的；虛構的",
    "ph": "/ɪˈmædʒɪneri/",
    "example": "He has an imaginary friend.",
    "exampleZh": "他有一個想象中的朋友。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "imitate",
    "zh": "模仿",
    "ph": "/ˈɪmɪteɪt/",
    "example": "Children often imitate their parents.",
    "exampleZh": "孩子們經常模仿他們的父母。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "immediately",
    "zh": "立刻；馬上",
    "ph": "/ɪˈmiːdiətli/",
    "example": "Please come here immediately.",
    "exampleZh": "請立刻到這裡來。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "immigrate",
    "zh": "移民",
    "ph": "/ˈɪmɪɡreɪt/",
    "example": "Many people immigrate to find better opportunities.",
    "exampleZh": "許多人為了尋找更好的機會而移民。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "immigration",
    "zh": "移民；入境",
    "ph": "/ˌɪmɪˈɡreɪʃən/",
    "example": "Immigration policies have changed significantly in recent years.",
    "exampleZh": "近年來，移民政策發生了顯著變化。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "impair",
    "zh": "損害；削弱",
    "ph": "/ɪmˈpeər/",
    "example": "Drinking alcohol can impair your judgment.",
    "exampleZh": "飲酒會損害你的判斷力。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "impression",
    "zh": "印象",
    "ph": "/ɪmˈpreʃən/",
    "example": "He made a good impression on his first day at work.",
    "exampleZh": "他在上班的第一天給人留下了好印象。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "impressive",
    "zh": "令人印象深刻的",
    "ph": "/ɪmˈpresɪv/",
    "example": "The view from the top of the mountain was impressive.",
    "exampleZh": "從山頂看到的景色令人印象深刻。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "improper",
    "zh": "不適當的；不正確的",
    "ph": "/ɪmˈprɒpər/",
    "example": "It is improper to speak loudly in a library.",
    "exampleZh": "在圖書館大聲喧譁是不適當的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "improvement",
    "zh": "改進；提高",
    "ph": "/ɪmˈpruːvmənt/",
    "example": "There has been a significant improvement in her health.",
    "exampleZh": "她的健康狀況有了顯著改善。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "including",
    "zh": "包括",
    "ph": "/ɪnˈkluːdɪŋ/",
    "example": "We invited several guests, including my parents and siblings.",
    "exampleZh": "我們邀請了幾位客人，包括我的父母和兄弟姐妹。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "inconvenient",
    "zh": "不方便的",
    "ph": "/ˌɪnkənˈviːniənt/",
    "example": "It's inconvenient to travel during rush hour.",
    "exampleZh": "在高峰時段旅行很不方便。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "incorrect",
    "zh": "不正確的；錯誤的",
    "ph": "/ˌɪnkəˈrekt/",
    "example": "The answer you gave is incorrect.",
    "exampleZh": "你給出的答案是不正確的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "increase",
    "zh": "增加；增長",
    "ph": "/ɪnˈkriːs/",
    "example": "There has been an increase in the number of students.",
    "exampleZh": "學生人數有所增加。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "increasingly",
    "zh": "越來越；逐漸地",
    "ph": "/ɪnˈkriːsɪŋli/",
    "example": "It is becoming increasingly difficult to find a job.",
    "exampleZh": "找工作變得越來越困難。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "incredible",
    "zh": "難以置信的；極好的",
    "ph": "/ɪnˈkredəbl/",
    "example": "The view from the top of the mountain was incredible.",
    "exampleZh": "從山頂看到的景色令人難以置信。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "incredibly",
    "zh": "難以置信地；非常",
    "ph": "/ɪnˈkredɪbli/",
    "example": "The concert was incredibly loud.",
    "exampleZh": "那場音樂會非常吵。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "independent",
    "zh": "獨立的；自主的",
    "ph": "/ˌɪndɪˈpendənt/",
    "example": "She is an independent woman who runs her own business.",
    "exampleZh": "她是一位經營自己事業的獨立女性。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "indirect",
    "zh": "間接的；迂迴的",
    "ph": "/ˌɪndɪˈrekt/",
    "example": "He made an indirect reference to the problem.",
    "exampleZh": "他間接地提到了這個問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "indirectly",
    "zh": "間接地；迂迴地",
    "ph": "/ˌɪndɪˈrektli/",
    "example": "The news affected her indirectly through her family.",
    "exampleZh": "這個消息通過她的家人間接地影響了她。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "individual",
    "zh": "個人的；單獨的；個體",
    "ph": "/ˌɪndɪˈvɪdʒuəl/",
    "example": "Each individual has their own unique talents.",
    "exampleZh": "每個人都有自己獨特的才能。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "indoors",
    "zh": "在室內；戶內",
    "ph": "/ˌɪnˈdɔːrz/",
    "example": "It's raining, so let's stay indoors.",
    "exampleZh": "下雨了，所以我們待在室內吧。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "industry",
    "zh": "工業；產業",
    "ph": "/ˈɪndəstri/",
    "example": "The tourism industry is very important to the local economy.",
    "exampleZh": "旅遊業對當地經濟非常重要。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "inevitable",
    "zh": "不可避免的；必然的",
    "ph": "/ɪnˈevɪtəbl/",
    "example": "It was inevitable that the company would close down.",
    "exampleZh": "這家公司倒閉是不可避免的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "infinitive",
    "zh": "不定式",
    "ph": "/ɪnˈfɪnətɪv/",
    "example": "The infinitive form of the verb is 'to be'.",
    "exampleZh": "動詞的不定式形式是“to be”。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "inform",
    "zh": "通知；告知",
    "ph": "/ɪnˈfɔːrm/",
    "example": "Please inform me if you have any questions.",
    "exampleZh": "如果您有任何問題，請通知我。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "informative",
    "zh": "提供信息的；增長見聞的",
    "ph": "/ɪnˈfɔːrmətɪv/",
    "example": "The documentary was very informative.",
    "exampleZh": "這部紀錄片很有信息量。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ingredient",
    "zh": "成分；原料",
    "ph": "/ɪnˈɡriːdiənt/",
    "example": "Hard work is a key ingredient to success.",
    "exampleZh": "努力工作是成功的關鍵要素。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "inhale",
    "zh": "吸入",
    "ph": "/ɪnˈheɪl/",
    "example": "The doctor asked him to inhale deeply during the examination.",
    "exampleZh": "醫生要求他在檢查時深吸一口氣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "initial",
    "zh": "最初的；開始的",
    "ph": "/ɪˈnɪʃəl/",
    "example": "My initial reaction was one of surprise.",
    "exampleZh": "我最初的反應是驚訝。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "initially",
    "zh": "最初；起初",
    "ph": "/ɪˈnɪʃəli/",
    "example": "Initially, I didn't like the idea, but I've changed my mind.",
    "exampleZh": "最初，我不喜歡這個想法，但我已經改變了主意。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "inject",
    "zh": "注射；注入",
    "ph": "/ɪnˈdʒekt/",
    "example": "The doctor will inject the patient with a painkiller.",
    "exampleZh": "醫生會給病人注射止痛藥。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ink",
    "zh": "墨水",
    "ph": "/ɪŋk/",
    "example": "The pen ran out of ink.",
    "exampleZh": "這支筆沒墨水了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "innermost",
    "zh": "最裡面的；內心深處的",
    "ph": "/ˈɪnərˌmoʊst/",
    "example": "He shared his innermost thoughts with his best friend.",
    "exampleZh": "他與他最好的朋友分享了他內心深處的想法。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "innocent",
    "zh": "無辜的；清白的",
    "ph": "/ˈɪnəsənt/",
    "example": "The court declared him innocent of the crime.",
    "exampleZh": "法院宣佈他無罪。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "innovator",
    "zh": "創新者",
    "ph": "/ˈɪnəveɪtər/",
    "example": "He is considered an innovator in the field of technology.",
    "exampleZh": "他被認為是技術領域的創新者。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "inquiry",
    "zh": "詢問；調查",
    "ph": "/ɪnˈkwaɪəri/",
    "example": "The police are conducting an inquiry into the incident.",
    "exampleZh": "警方正在對這起事件進行調查。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "insane",
    "zh": "精神失常的；瘋狂的",
    "ph": "/ɪnˈseɪn/",
    "example": "The idea seemed insane at first, but it actually worked.",
    "exampleZh": "這個想法起初看起來很瘋狂，但實際上奏效了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "inscription",
    "zh": "銘文；題字",
    "ph": "/ɪnˈskrɪpʃən/",
    "example": "The inscription on the tombstone was difficult to read.",
    "exampleZh": "墓碑上的銘文很難辨認。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "insight",
    "zh": "洞察力；領悟",
    "ph": "/ˈɪnsaɪt/",
    "example": "Her comments offered a new insight into the problem.",
    "exampleZh": "她的評論為這個問題提供了一種新的見解。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "insist",
    "zh": "堅持；堅決要求",
    "ph": "/ɪnˈsɪst/",
    "example": "I insist that you tell me the truth.",
    "exampleZh": "我堅持你告訴我真相。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "install",
    "zh": "安裝；設置",
    "ph": "/ɪnˈstɔːl/",
    "example": "We need to install a new security system.",
    "exampleZh": "我們需要安裝一個新的安全系統。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "institute",
    "zh": "學院；研究所；設立",
    "ph": "/ˈɪnstɪtjuːt/",
    "example": "The institute conducts research on renewable energy.",
    "exampleZh": "該研究所進行可再生能源的研究。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "instructor",
    "zh": "指導員；教練",
    "ph": "/ɪnˈstrʌktər/",
    "example": "Our driving instructor was very patient.",
    "exampleZh": "我們的駕駛教練非常有耐心。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "insurance",
    "zh": "保險",
    "ph": "/ɪnˈʃʊərəns/",
    "example": "Do you have travel insurance?",
    "exampleZh": "你有旅遊保險嗎？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "intend",
    "zh": "打算；計劃",
    "ph": "/ɪnˈtend/",
    "example": "I intend to study abroad next year.",
    "exampleZh": "我打算明年出國留學。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "intense",
    "zh": "強烈的；緊張的",
    "ph": "/ɪnˈtens/",
    "example": "The pain was intense.",
    "exampleZh": "疼痛非常強烈。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "intensive",
    "zh": "密集的；加強的",
    "ph": "/ɪnˈtensɪv/",
    "example": "She took an intensive language course.",
    "exampleZh": "她參加了一個密集的語言課程。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "intention",
    "zh": "意圖；目的",
    "ph": "/ɪnˈtenʃən/",
    "example": "I have no intention of resigning.",
    "exampleZh": "我沒有辭職的打算。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "intentionally",
    "zh": "故意地",
    "ph": "/ɪnˈtenʃənəli/",
    "example": "He intentionally broke the vase.",
    "exampleZh": "他故意打碎了花瓶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "interact",
    "zh": "互動；交流",
    "ph": "/ˌɪntərˈækt/",
    "example": "The students interact with each other during group projects.",
    "exampleZh": "學生們在小組項目中互相互動。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "interaction",
    "zh": "互動；相互作用",
    "ph": "/ˌɪntərˈækʃən/",
    "example": "The interaction between the two chemicals caused a reaction.",
    "exampleZh": "兩種化學物質之間的相互作用引起了反應。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "interest",
    "zh": "興趣；利益",
    "ph": "/ˈɪntrəst/",
    "example": "She has a strong interest in learning foreign languages.",
    "exampleZh": "她對學習外語有濃厚的興趣。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "intermediate",
    "zh": "中級的；中間的",
    "ph": "/ˌɪntərˈmiːdiət/",
    "example": "This course is designed for intermediate learners of English.",
    "exampleZh": "這門課程是為英語中級學習者設計的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "intermission",
    "zh": "中場休息；暫停",
    "ph": "/ˌɪntərˈmɪʃən/",
    "example": "There will be a 15-minute intermission after the first act.",
    "exampleZh": "第一幕結束後將有15分鐘的中場休息。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "internationally",
    "zh": "國際地",
    "ph": "/ˌɪntərˈnæʃənəli/",
    "example": "The company operates internationally, with offices in several countries.",
    "exampleZh": "該公司在國際上運營，在多個國家設有辦事處。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "interrupt",
    "zh": "打斷；中斷",
    "ph": "/ˌɪntəˈrʌpt/",
    "example": "Please don't interrupt me when I'm speaking.",
    "exampleZh": "請在我說話時不要打斷我。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "interval",
    "zh": "間隔；間隙",
    "ph": "/ˈɪntərvl/",
    "example": "There was a long interval between the two events.",
    "exampleZh": "這兩個事件之間有很長的時間間隔。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "interview",
    "zh": "面試；採訪",
    "ph": "/ˈɪntərˌvjuː/",
    "example": "I have a job interview next week.",
    "exampleZh": "我下週有一個工作面試。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "interviewee",
    "zh": "被面試者",
    "ph": "/ˌɪntərˌvjuːˈiː/",
    "example": "The interviewee answered all the questions confidently.",
    "exampleZh": "被面試者自信地回答了所有問題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "introduction",
    "zh": "介紹；引言",
    "ph": "/ˌɪntrəˈdʌkʃən/",
    "example": "The introduction of the book provides a brief overview of the topic.",
    "exampleZh": "這本書的引言簡要概述了該主題。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "invest",
    "zh": "投資；投入",
    "ph": "/ɪnˈvest/",
    "example": "It's wise to invest money for the future.",
    "exampleZh": "為未來投資是明智的。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "investigation",
    "zh": "調查；偵查",
    "ph": "/ɪnˌvestɪˈɡeɪʃən/",
    "example": "The police are conducting an investigation into the crime.",
    "exampleZh": "警方正在對這起犯罪進行調查。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "invitation",
    "zh": "邀請；請柬",
    "ph": "/ˌɪnvɪˈteɪʃən/",
    "example": "I received an invitation to her birthday party.",
    "exampleZh": "我收到了她生日聚會的邀請函。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "involuntarily",
    "zh": "不由自主地；非自願地",
    "ph": "/ɪnˈvɒləntərəli/",
    "example": "He involuntarily flinched when he heard the loud noise.",
    "exampleZh": "聽到巨大的噪音時，他不由自主地畏縮了一下。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "involve",
    "zh": "涉及；包含；參與",
    "ph": "/ɪnˈvɒlv/",
    "example": "The job will involve a lot of travelling.",
    "exampleZh": "這份工作將涉及大量的旅行。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "involved",
    "zh": "參與的；有關的；複雜的",
    "ph": "/ɪnˈvɒlvd/",
    "example": "She is actively involved in the local community.",
    "exampleZh": "她積極參與當地社區的活動。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ironing",
    "zh": "熨燙",
    "ph": "/ˈaɪənɪŋ/",
    "example": "I hate ironing, it's such a boring chore.",
    "exampleZh": "我討厭熨燙，這真是一件無聊的家務。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "irregular",
    "zh": "不規則的；不規律的",
    "ph": "/ɪˈreɡjələr/",
    "example": "The building has an irregular shape.",
    "exampleZh": "這座建築的形狀不規則。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "irritate",
    "zh": "刺激；使惱火",
    "ph": "/ˈɪrɪteɪt/",
    "example": "The smoke can irritate your eyes.",
    "exampleZh": "煙霧會刺激你的眼睛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "isle",
    "zh": "小島",
    "ph": "/aɪl/",
    "example": "They spent their vacation on a small, tropical isle.",
    "exampleZh": "他們在熱帶小島上度過了假期。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "isolation",
    "zh": "隔離；孤立",
    "ph": "/ˌaɪsəˈleɪʃən/",
    "example": "The patient was placed in isolation to prevent the spread of the disease.",
    "exampleZh": "病人被隔離以防止疾病傳播。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "ivory",
    "zh": "象牙；象牙色",
    "ph": "/ˈaɪvəri/",
    "example": "The antique piano had ivory keys.",
    "exampleZh": "這架古董鋼琴有象牙琴鍵。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jade",
    "zh": "玉；翡翠",
    "ph": "/dʒeɪd/",
    "example": "She wore a necklace made of jade.",
    "exampleZh": "她戴著一條用玉製成的項鍊。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jar",
    "zh": "罐子；廣口瓶",
    "ph": "/dʒɑːr/",
    "example": "She opened a jar of jam.",
    "exampleZh": "她打開了一罐果醬。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jazz",
    "zh": "爵士樂",
    "ph": "/dʒæz/",
    "example": "I enjoy listening to jazz music in the evening.",
    "exampleZh": "我喜歡在晚上聽爵士樂。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jewel",
    "zh": "珠寶；寶石",
    "ph": "/ˈdʒuːəl/",
    "example": "The queen wore a beautiful jewel on her crown.",
    "exampleZh": "女王的王冠上戴著一顆美麗的珠寶。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jogging",
    "zh": "慢跑",
    "ph": "/ˈdʒɒɡɪŋ/",
    "example": "Jogging is a good way to stay in shape.",
    "exampleZh": "慢跑是保持身材的好方法。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "joint",
    "zh": "關節；連接",
    "ph": "/dʒɔɪnt/",
    "example": "He has a pain in his knee joint.",
    "exampleZh": "他的膝關節疼痛。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "journal",
    "zh": "日記；雜誌",
    "ph": "/ˈdʒɜːrnl/",
    "example": "She writes in her journal every night before bed.",
    "exampleZh": "她每天晚上睡覺前在日記裡寫字。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "journalist",
    "zh": "記者",
    "ph": "/ˈdʒɜːrnəlɪst/",
    "example": "The journalist interviewed the president.",
    "exampleZh": "記者採訪了總統。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "judgment",
    "zh": "判斷；判決",
    "ph": "/ˈdʒʌdʒmənt/",
    "example": "His judgment was clouded by emotion.",
    "exampleZh": "他的判斷被情緒矇蔽了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jug",
    "zh": "水罐；壺",
    "ph": "/dʒʌɡ/",
    "example": "She filled the jug with water.",
    "exampleZh": "她用水把水罐裝滿了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "juicy",
    "zh": "多汁的；有趣的",
    "ph": "/ˈdʒuːsi/",
    "example": "This orange is very juicy.",
    "exampleZh": "這個橙子很多汁。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jumper",
    "zh": "毛衣；跳躍者",
    "ph": "/ˈdʒʌmpər/",
    "example": "She wore a warm jumper to protect herself from the cold.",
    "exampleZh": "她穿了一件暖和的毛衣來禦寒。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "jungle",
    "zh": "叢林",
    "ph": "/ˈdʒʌŋɡl/",
    "example": "The explorers ventured into the dense jungle.",
    "exampleZh": "探險家們冒險進入了茂密的叢林。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "justice",
    "zh": "正義；公正",
    "ph": "/ˈdʒʌstɪs/",
    "example": "Everyone deserves justice under the law.",
    "exampleZh": "在法律面前，人人平等。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "kettle",
    "zh": "水壺",
    "ph": "/ˈketl/",
    "example": "The kettle is boiling; would you like some tea?",
    "exampleZh": "水壺正在燒水；你想喝點茶嗎？",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "keyboard",
    "zh": "鍵盤",
    "ph": "/ˈkiːbɔːrd/",
    "example": "I need to buy a new keyboard because some of the keys are broken.",
    "exampleZh": "我需要買一個新的鍵盤，因為有些鍵壞了。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "kid",
    "zh": "小孩；小山羊",
    "ph": "/kɪd/",
    "example": "The kid was playing in the park with his friends.",
    "exampleZh": "那個小孩和他的朋友們在公園裡玩耍。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "killing",
    "zh": "殺害；殺死",
    "ph": "/ˈkɪlɪŋ/",
    "example": "The killing of the rare animal caused public outrage.",
    "exampleZh": "殺害稀有動物引起了公眾的憤怒。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "kindly",
    "zh": "親切地；和藹地",
    "ph": "/ˈkaɪndli/",
    "example": "She kindly offered me a cup of coffee.",
    "exampleZh": "她親切地給我提供了一杯咖啡。",
    "reply": "",
    "replyZh": ""
  },
  {
    "t": "kindness",
    "zh": "仁慈；善良",
    "ph": "/ˈkaɪndnəs/",
    "example": "Her kindness towards strangers is truly admirable.",
    "exampleZh": "她對陌生人的仁慈真是令人欽佩。",
    "reply": "",
    "replyZh": ""
  }
];
  addCourseVocabulary(3, entries);
})();
