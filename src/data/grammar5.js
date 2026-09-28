// Diem ngu phap HSK5 - nang cao, tiep noi grammar.js/grammar2/3/4.js.
export const HSK5_GRAMMAR = [
  {
    key: 'shuobuding',
    level: 'HSK5',
    title: '说不定 - Biết đâu, có khi (khả năng chưa chắc chắn)',
    pattern: '说不定 + mệnh đề (khả năng có thể xảy ra)',
    explanation: 'Dùng để phỏng đoán một khả năng chưa chắc chắn, tương đương "biết đâu", "có khi", "có thể".',
    examples: [
      { hanzi: '他说不定已经到了。', pinyin: 'Tā shuōbudìng yǐjīng dào le.', meaning: 'Biết đâu anh ấy đã đến rồi.' },
      { hanzi: '明天说不定会下雨，你带把伞吧。', pinyin: 'Míngtiān shuōbudìng huì xiàyǔ, nǐ dài bǎ sǎn ba.', meaning: 'Ngày mai biết đâu sẽ mưa, bạn mang theo ô đi.' },
      { hanzi: '这件事说不定对你有好处。', pinyin: 'Zhè jiàn shì shuōbudìng duì nǐ yǒu hǎochù.', meaning: 'Chuyện này biết đâu lại có lợi cho bạn.' }
    ],
    quiz: [
      { question: '说不定 dùng để diễn tả điều gì?', options: ['Một khả năng chưa chắc chắn, kiểu phỏng đoán "biết đâu"', 'Một sự thật hiển nhiên, chắc chắn', 'Một mệnh lệnh yêu cầu'] },
      { question: '"Biết đâu anh ấy đã quên mất rồi" dịch đúng là:', options: ['他说不定已经忘了。', '他已经说不定忘了。', '说不定他忘了已经。'] },
      { question: '"Có khi ngày mai cô ấy sẽ đến" dịch đúng là:', options: ['明天说不定她会来。', '明天她说不定会来以便。', '说不定明天来她会。'] }
    ]
  },
  {
    key: 'wulun-dou',
    level: 'HSK5',
    title: '无论...都... - Bất luận...đều...',
    pattern: '无论 + từ nghi vấn (什么/谁/怎么样...) hoặc lựa chọn, 都 + kết quả không đổi',
    explanation: 'Giống 不管...都... nhưng trang trọng hơn, thường xuất hiện trong văn viết hoặc lời nói nghiêm túc.',
    examples: [
      { hanzi: '无论多忙，她都会锻炼身体。', pinyin: 'Wúlùn duō máng, tā dōu huì duànliàn shēntǐ.', meaning: 'Bất luận bận đến đâu, cô ấy đều tập thể dục.' },
      { hanzi: '无论遇到什么困难，我们都不能放弃。', pinyin: 'Wúlùn yùdào shénme kùnnan, wǒmen dōu bù néng fàngqì.', meaning: 'Bất luận gặp khó khăn gì, chúng ta đều không được bỏ cuộc.' },
      { hanzi: '无论是谁，都要遵守规则。', pinyin: 'Wúlùn shì shéi, dōu yào zūnshǒu guīzé.', meaning: 'Bất luận là ai, đều phải tuân thủ quy tắc.' }
    ],
    quiz: [
      { question: '"Bất luận trời nóng hay lạnh, anh ấy đều chạy bộ" dịch đúng là:', options: ['无论天气冷还是热，他都跑步。', '天气无论冷还是热，跑步他都。', '他都跑步，无论天气冷还是热都。'] },
      { question: 'Sau 无论 thường xuất hiện loại từ gì?', options: ['Từ nghi vấn hoặc cấu trúc lựa chọn (什么/谁/A还是B...)', 'Chỉ có danh từ đơn giản', 'Chỉ có động từ mệnh lệnh'] },
      { question: '"Bất luận bạn nói gì, tôi đều không tin" dịch đúng là:', options: ['无论你说什么，我都不相信。', '你说什么无论，我都不相信。', '我都不相信，无论什么你说。'] }
    ]
  },
  {
    key: 'yibian',
    level: 'HSK5',
    title: '以便 - Để mà, nhằm tiện cho...',
    pattern: 'Mệnh đề A, 以便 + mục đích thuận lợi B',
    explanation: 'Nối hai mệnh đề: vế sau 以便 nêu mục đích để việc gì đó được thuận lợi, dễ dàng hơn. Thường dùng trong văn viết, thông báo trang trọng.',
    examples: [
      { hanzi: '请提前预订，以便安排座位。', pinyin: 'Qǐng tíqián yùdìng, yǐbiàn ānpái zuòwèi.', meaning: 'Xin hãy đặt trước, để tiện sắp xếp chỗ ngồi.' },
      { hanzi: '他把资料整理好，以便大家查阅。', pinyin: 'Tā bǎ zīliào zhěnglǐ hǎo, yǐbiàn dàjiā cháyuè.', meaning: 'Anh ấy sắp xếp tài liệu gọn gàng, để mọi người tiện tra cứu.' },
      { hanzi: '请留下手机号码，以便我们联系你。', pinyin: 'Qǐng liú xià shǒujī hàomǎ, yǐbiàn wǒmen liánxì nǐ.', meaning: 'Xin để lại số điện thoại, để chúng tôi tiện liên lạc với bạn.' }
    ],
    quiz: [
      { question: '以便 dùng để nêu điều gì?', options: ['Mục đích để việc gì đó thuận lợi hơn', 'Điều cần tránh xảy ra', 'Nguyên nhân của một kết quả'] },
      { question: '"Xin đến sớm 10 phút, để tiện chuẩn bị" dịch đúng là:', options: ['请提前十分钟到，以便做准备。', '请提前十分钟到，以免做准备。', '以便请提前十分钟到做准备。'] },
      { question: '"Anh ấy ghi lại địa chỉ, để tiện lần sau tìm đến" dịch đúng là:', options: ['他记下了地址，以便下次找过来。', '他记下了地址，以免下次找过来。', '以便他记下了地址下次找过来。'] }
    ]
  },
  {
    key: 'yimian',
    level: 'HSK5',
    title: '以免 - Để tránh, kẻo',
    pattern: 'Mệnh đề A, 以免 + điều không mong muốn B',
    explanation: 'Vế sau 以免 nêu một điều KHÔNG mong muốn cần tránh xảy ra - ngược nghĩa mục đích với 以便.',
    examples: [
      { hanzi: '出门带把伞，以免被雨淋湿。', pinyin: 'Chūmén dài bǎ sǎn, yǐmiǎn bèi yǔ lín shī.', meaning: 'Ra ngoài mang theo ô, kẻo bị mưa làm ướt.' },
      { hanzi: '早点出发，以免迟到。', pinyin: 'Zǎodiǎn chūfā, yǐmiǎn chídào.', meaning: 'Xuất phát sớm một chút, kẻo trễ giờ.' },
      { hanzi: '请小声说话，以免吵醒孩子。', pinyin: 'Qǐng xiǎo shēng shuōhuà, yǐmiǎn chǎo xǐng háizi.', meaning: 'Xin nói nhỏ tiếng, kẻo đánh thức đứa trẻ.' }
    ],
    quiz: [
      { question: '以免 và 以便 khác nhau ở điểm nào?', options: ['以免 nêu điều cần TRÁNH, 以便 nêu mục đích thuận lợi', 'Hai từ hoàn toàn giống nhau', '以免 chỉ dùng ở đầu câu'] },
      { question: '"Hãy cất tiền cẩn thận, kẻo bị mất" dịch đúng là:', options: ['把钱收好，以免丢了。', '把钱收好，以便丢了。', '以免把钱收好丢了。'] },
      { question: '"Ăn chậm thôi, kẻo bị nghẹn" dịch đúng là:', options: ['慢点吃，以免噎着。', '慢点吃，以便噎着。', '以免慢点吃噎着。'] }
    ]
  },
  {
    key: 'wanyi',
    level: 'HSK5',
    title: '万一 - Lỡ như, nhỡ đâu',
    pattern: '万一 + tình huống xấu ít khả năng xảy ra, (就) + cách xử lý',
    explanation: 'Diễn tả một khả năng xấu RẤT ÍT xảy ra nhưng vẫn cần đề phòng, đặt trước điều kiện giả định đó.',
    examples: [
      { hanzi: '万一下雨，我们就取消野餐。', pinyin: 'Wànyī xiàyǔ, wǒmen jiù qǔxiāo yěcān.', meaning: 'Lỡ như trời mưa, chúng ta sẽ hủy buổi dã ngoại.' },
      { hanzi: '你多带点钱，万一不够用呢。', pinyin: 'Nǐ duō dài diǎn qián, wànyī bú gòu yòng ne.', meaning: 'Bạn mang thêm ít tiền, lỡ đâu không đủ dùng.' },
      { hanzi: '万一他不同意，我们该怎么办？', pinyin: 'Wànyī tā bù tóngyì, wǒmen gāi zěnme bàn?', meaning: 'Lỡ như anh ấy không đồng ý, chúng ta nên làm sao?' }
    ],
    quiz: [
      { question: '万一 dùng để diễn tả loại tình huống nào?', options: ['Khả năng xấu, ít xảy ra nhưng cần đề phòng', 'Điều chắc chắn sẽ xảy ra', 'Việc đã xảy ra trong quá khứ'] },
      { question: '"Mang theo áo mưa, lỡ đâu trời đổ mưa" dịch đúng là:', options: ['带上雨衣，万一下雨呢。', '带上雨衣，尽管下雨呢。', '万一带上雨衣下雨呢。'] },
      { question: '"Lỡ như xe hỏng thì sao?" dịch đúng là:', options: ['万一车坏了怎么办？', '车万一坏了怎么办以便？', '怎么办万一车坏了？'] }
    ]
  },
  {
    key: 'xingkui',
    level: 'HSK5',
    title: '幸亏 - May mà',
    pattern: '幸亏 + điều may mắn, (要不然/否则) + hậu quả xấu giả định',
    explanation: 'Nhấn mạnh nhờ có một điều may mắn mà tránh được hậu quả xấu; thường kết hợp với 要不然/不然/否则 ở vế sau để nêu hậu quả nếu không có điều may mắn đó.',
    examples: [
      { hanzi: '幸亏你提醒我，要不然我就忘了。', pinyin: 'Xìngkuī nǐ tíxǐng wǒ, yàoburán wǒ jiù wàng le.', meaning: 'May mà bạn nhắc tôi, nếu không thì tôi đã quên mất.' },
      { hanzi: '幸亏带了雨伞，不然全身都湿了。', pinyin: 'Xìngkuī dàile yǔsǎn, bùrán quánshēn dōu shī le.', meaning: 'May mà mang theo ô, không thì ướt hết cả người.' },
      { hanzi: '幸亏医生来得及时，他才脱离危险。', pinyin: 'Xìngkuī yīshēng lái de jíshí, tā cái tuōlí wēixiǎn.', meaning: 'May mà bác sĩ đến kịp thời, anh ấy mới thoát khỏi nguy hiểm.' }
    ],
    quiz: [
      { question: '幸亏 thường đi kèm ý nghĩa gì ở vế sau?', options: ['Hậu quả xấu giả định nếu không có điều may mắn đó', 'Một mục đích cần đạt được', 'Một điều kiện chưa chắc xảy ra'] },
      { question: '"May mà tôi mang theo chìa khóa dự phòng" dịch đúng là:', options: ['幸亏我带了备用钥匙。', '万一我带了备用钥匙。', '我幸亏了带备用钥匙。'] },
      { question: '"May mà phát hiện sớm, nếu không bệnh sẽ nặng hơn" dịch đúng là:', options: ['幸亏发现得早，要不然病情会更严重。', '万一发现得早，要不然病情会更严重。', '发现得早幸亏，病情会更严重要不然。'] }
    ]
  },
  {
    key: 'fan-er',
    level: 'HSK5',
    title: '反而 - Trái lại, ngược lại',
    pattern: '(không những không...) A, 反而 + B (kết quả trái ngược mong đợi)',
    explanation: 'Diễn tả kết quả B trái ngược hẳn với điều lẽ ra phải xảy ra hoặc điều được mong đợi từ A.',
    examples: [
      { hanzi: '吃了药，病反而更重了。', pinyin: 'Chīle yào, bìng fǎn\'ér gèng zhòng le.', meaning: 'Uống thuốc rồi, bệnh trái lại còn nặng hơn.' },
      { hanzi: '他不但不生气，反而笑了。', pinyin: 'Tā búdàn bù shēngqì, fǎn\'ér xiào le.', meaning: 'Anh ấy không những không giận, trái lại còn cười.' },
      { hanzi: '我帮了他，他反而怪我多管闲事。', pinyin: 'Wǒ bāngle tā, tā fǎn\'ér guài wǒ duō guǎn xiánshì.', meaning: 'Tôi đã giúp anh ấy, anh ấy ngược lại còn trách tôi nhiều chuyện.' }
    ],
    quiz: [
      { question: '反而 diễn tả điều gì?', options: ['Kết quả trái ngược với điều mong đợi', 'Kết quả đúng như dự đoán', 'Nguyên nhân của sự việc'] },
      { question: '"Càng giải thích, cô ấy càng hiểu lầm hơn" (dùng 反而) dịch đúng là:', options: ['解释了半天，她反而更误会了。', '解释了半天，她万一更误会了。', '她反而解释了半天更误会了。'] },
      { question: '"Trời lạnh hơn, nhưng anh ấy trái lại mặc ít đồ hơn" dịch đúng là:', options: ['天更冷了，他反而穿得更少。', '天更冷了，他何况穿得更少。', '他反而天更冷了穿得更少。'] }
    ]
  },
  {
    key: 'hekuang',
    level: 'HSK5',
    title: '何况 - Huống chi, huống hồ',
    pattern: 'A (điều đơn giản/hiển nhiên), 何况 + B (điều khó/lớn hơn)',
    explanation: 'Dùng để bổ sung lý lẽ: nếu điều đơn giản A đã như vậy, thì điều khó hơn B càng đúng, không cần bàn cãi thêm.',
    examples: [
      { hanzi: '这道题大人都不会做，何况是孩子呢。', pinyin: 'Zhè dào tí dàrén dōu bú huì zuò, hékuàng shì háizi ne.', meaning: 'Bài này người lớn còn không làm được, huống chi là trẻ con.' },
      { hanzi: '我连一公里都跑不动，何况十公里。', pinyin: 'Wǒ lián yì gōnglǐ dōu pǎo bu dòng, hékuàng shí gōnglǐ.', meaning: 'Tôi một cây số còn chạy không nổi, huống chi mười cây số.' },
      { hanzi: '他普通话都说不好，何况英语。', pinyin: 'Tā pǔtōnghuà dōu shuō bu hǎo, hékuàng Yīngyǔ.', meaning: 'Anh ấy tiếng phổ thông còn nói không tốt, huống chi tiếng Anh.' }
    ],
    quiz: [
      { question: '何况 dùng để làm gì?', options: ['Bổ sung lý lẽ cho điều đã nêu, nhấn mạnh điều sau còn đúng hơn', 'Nêu một mục đích', 'Diễn tả kết quả bất ngờ'] },
      { question: '"Anh ấy 5 phút còn ngồi không yên, huống chi 5 tiếng" dịch đúng là:', options: ['他五分钟都坐不住，何况五个小时。', '他五分钟都坐不住，反而五个小时。', '何况他五分钟都坐不住五个小时。'] },
      { question: '"Người khỏe mạnh còn thấy mệt, huống chi người mới ốm dậy" dịch đúng là:', options: ['身体好的人都觉得累，何况刚生病的人。', '身体好的人都觉得累，万一刚生病的人。', '何况身体好的人都觉得累刚生病的人。'] }
    ]
  },
  {
    key: 'shenzhi',
    level: 'HSK5',
    title: '甚至 - Thậm chí',
    pattern: 'A, 甚至(连) + B + 都/也 + vị ngữ',
    explanation: 'Nhấn mạnh một mức độ cao hơn, bất ngờ hơn so với những gì vừa được nêu ở vế trước.',
    examples: [
      { hanzi: '他很喜欢中国文化，甚至比中国人还了解。', pinyin: 'Tā hěn xǐhuan Zhōngguó wénhuà, shènzhì bǐ Zhōngguórén hái liǎojiě.', meaning: 'Anh ấy rất thích văn hóa Trung Quốc, thậm chí còn hiểu hơn cả người Trung Quốc.' },
      { hanzi: '他忙得甚至连饭都忘了吃。', pinyin: 'Tā máng de shènzhì lián fàn dōu wàngle chī.', meaning: 'Anh ấy bận đến mức thậm chí quên cả ăn cơm.' },
      { hanzi: '这里的冬天很冷，甚至会下雪。', pinyin: 'Zhèlǐ de dōngtiān hěn lěng, shènzhì huì xiàxuě.', meaning: 'Mùa đông ở đây rất lạnh, thậm chí có tuyết rơi.' }
    ],
    quiz: [
      { question: '甚至 thường kết hợp với cấu trúc nào để nhấn mạnh?', options: ['连...都/也...', '不但...而且...', '因为...所以...'] },
      { question: '"Cô ấy bận đến mức thậm chí quên cả sinh nhật mình" dịch đúng là:', options: ['她忙得甚至忘了自己的生日。', '她忙得反而忘了自己的生日。', '甚至她忙得忘了自己的生日。'] },
      { question: '"Anh ấy thậm chí không nhớ nổi tên tôi" dịch đúng là:', options: ['他甚至想不起我的名字。', '他何况想不起我的名字。', '甚至他想不起我的名字。'] }
    ]
  },
  {
    key: 'buran',
    level: 'HSK5',
    title: '不然 - Nếu không thì',
    pattern: 'Mệnh đề A (khuyên/yêu cầu), 不然 + hậu quả nếu không làm A',
    explanation: 'Đứng sau một lời khuyên hoặc yêu cầu, nêu hậu quả sẽ xảy ra nếu không thực hiện điều đó; gần nghĩa với 要不然/否则.',
    examples: [
      { hanzi: '快点走吧，不然要迟到了。', pinyin: 'Kuài diǎn zǒu ba, bùrán yào chídào le.', meaning: 'Đi nhanh lên, không thì trễ giờ mất.' },
      { hanzi: '多穿点衣服，不然会感冒的。', pinyin: 'Duō chuān diǎn yīfu, bùrán huì gǎnmào de.', meaning: 'Mặc thêm quần áo, không thì sẽ bị cảm đấy.' },
      { hanzi: '你得道歉，不然她不会原谅你。', pinyin: 'Nǐ děi dàoqiàn, bùrán tā bú huì yuánliàng nǐ.', meaning: 'Bạn phải xin lỗi, không thì cô ấy sẽ không tha thứ cho bạn.' }
    ],
    quiz: [
      { question: '不然 đứng ở vị trí nào trong câu?', options: ['Đầu vế câu thứ hai, nêu hậu quả nếu không làm theo vế trước', 'Cuối câu, làm trợ từ nghi vấn', 'Giữa chủ ngữ và động từ'] },
      { question: '"Bạn nên đặt vé sớm, không thì hết chỗ" dịch đúng là:', options: ['你应该早点订票，不然没位子了。', '你应该早点订票，何况没位子了。', '不然你应该早点订票没位子了。'] },
      { question: '"Phải ôn bài, không thì thi trượt đấy" dịch đúng là:', options: ['得复习，不然考试会不及格的。', '得复习，甚至考试会不及格的。', '不然得复习考试会不及格的。'] }
    ]
  }
]
