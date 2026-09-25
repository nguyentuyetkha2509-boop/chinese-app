// Diem ngu phap HSK4 - nang cao, tiep noi grammar.js/grammar2.js/grammar3.js.
export const HSK4_GRAMMAR = [
  {
    key: 'ba-nangcao',
    level: 'HSK4',
    title: '把 nâng cao - Kết hợp bổ ngữ phức tạp',
    pattern: 'Chủ ngữ + 把 + tân ngữ + động từ + bổ ngữ kết quả/phương hướng',
    explanation: 'Câu chữ 把 ở trình độ cao hơn, tân ngữ được xử lý và có kết quả/phương hướng rõ ràng sau động từ.',
    examples: [
      { hanzi: '请把这些文件交给经理。', pinyin: 'Qǐng bǎ zhèxiē wénjiàn jiāo gěi jīnglǐ.', meaning: 'Xin hãy đưa những tài liệu này cho giám đốc.' },
      { hanzi: '他把车开到了公司门口。', pinyin: 'Tā bǎ chē kāi dàole gōngsī ménkǒu.', meaning: 'Anh ấy lái xe đến trước cửa công ty.' },
      { hanzi: '我把这件事忘得干干净净。', pinyin: 'Wǒ bǎ zhè jiàn shì wàng de gānganjìngjìng.', meaning: 'Tôi quên chuyện này sạch sẽ luôn.' }
    ],
    quiz: [
      { question: '"Xin hãy chuyển bức thư này cho anh ấy" dịch đúng là:', options: ['请把这封信转给他。', '请转把这封信给他。', '把请这封信转给他。'] },
      { question: 'Câu chữ 把 nâng cao thường đi kèm với gì sau động từ?', options: ['Bổ ngữ kết quả/phương hướng rõ ràng', 'Không cần gì thêm', 'Chỉ cần 了'] },
      { question: '"Anh ấy đem chiếc xe đẩy đến cổng" dịch đúng là:', options: ['他把车推到了门口。', '他推把车到了门口。', '把他车推到了门口。'] }
    ]
  },
  {
    key: 'bei-nangcao',
    level: 'HSK4',
    title: '被 nâng cao - Bị động với kết quả',
    pattern: 'Chủ ngữ + 被 + (tác nhân) + động từ + bổ ngữ kết quả',
    explanation: 'Câu bị động ở trình độ cao, thường kết hợp bổ ngữ kết quả/phương hướng để diễn tả kết quả cụ thể của hành động bị động.',
    examples: [
      { hanzi: '这个问题被他解决了。', pinyin: 'Zhège wèntí bèi tā jiějué le.', meaning: 'Vấn đề này đã được anh ấy giải quyết.' },
      { hanzi: '那些垃圾被清理干净了。', pinyin: 'Nàxiē lājī bèi qīnglǐ gānjìng le.', meaning: 'Đống rác đó đã được dọn sạch sẽ.' },
      { hanzi: '他被公司派到上海工作。', pinyin: 'Tā bèi gōngsī pài dào Shànghǎi gōngzuò.', meaning: 'Anh ấy được công ty cử đến Thượng Hải làm việc.' }
    ],
    quiz: [
      { question: '"Vấn đề đã được giải quyết xong" dịch đúng là:', options: ['问题被解决好了。', '问题解决被好了。', '被问题解决好了。'] },
      { question: '被 nâng cao khác gì so với 被 cơ bản?', options: ['Có bổ ngữ kết quả cụ thể hơn', 'Không có tân ngữ', 'Không cần động từ'] },
      { question: '"Anh ấy bị công ty điều đến Bắc Kinh" dịch đúng là:', options: ['他被公司调到北京了。', '他公司被调到北京了。', '被他公司调到北京了。'] }
    ]
  },
  {
    key: 'jishi-ye',
    level: 'HSK4',
    title: '即使...也... - Cho dù...cũng...',
    pattern: '即使 + tình huống giả định, 也 + kết quả không đổi',
    explanation: 'Diễn tả dù tình huống giả định (chưa chắc xảy ra) có xảy ra thì kết quả vẫn không đổi.',
    examples: [
      { hanzi: '即使下雨，我也要去。', pinyin: 'Jíshǐ xiàyǔ, wǒ yě yào qù.', meaning: 'Cho dù trời mưa, tôi cũng phải đi.' },
      { hanzi: '即使很难，他也不放弃。', pinyin: 'Jíshǐ hěn nán, tā yě bú fàngqì.', meaning: 'Cho dù rất khó, anh ấy cũng không bỏ cuộc.' },
      { hanzi: '即使没有钱，他也很开心。', pinyin: 'Jíshǐ méiyǒu qián, tā yě hěn kāixīn.', meaning: 'Cho dù không có tiền, anh ấy vẫn rất vui.' }
    ],
    quiz: [
      { question: '"Cho dù bận, tôi cũng sẽ đến" dịch đúng là:', options: ['即使忙，我也会来。', '也忙，即使我会来。', '忙即使，我也会来。'] },
      { question: '即使...也... khác 虽然...但是... ở điểm nào?', options: ['即使 dùng cho tình huống giả định, chưa chắc xảy ra', '即使 dùng cho việc đã xảy ra rồi', 'Hai cấu trúc giống hệt nhau'] },
      { question: '"Cho dù thất bại, anh ấy cũng không hối hận" dịch đúng là:', options: ['即使失败，他也不后悔。', '也失败，即使他不后悔。', '失败即使，他也不后悔。'] }
    ]
  },
  {
    key: 'buguan-dou',
    level: 'HSK4',
    title: '不管...都... - Bất kể...đều...',
    pattern: '不管 + từ nghi vấn (什么/怎么/谁...), 都 + kết quả',
    explanation: 'Diễn tả trong mọi trường hợp/điều kiện thì kết quả vẫn không đổi.',
    examples: [
      { hanzi: '不管多难，我都要学会。', pinyin: 'Bùguǎn duō nán, wǒ dōu yào xuéhuì.', meaning: 'Bất kể khó đến đâu, tôi đều phải học được.' },
      { hanzi: '不管你说什么，我都相信你。', pinyin: 'Bùguǎn nǐ shuō shénme, wǒ dōu xiāngxìn nǐ.', meaning: 'Bất kể bạn nói gì, tôi đều tin bạn.' },
      { hanzi: '不管天气怎么样，比赛都会进行。', pinyin: 'Bùguǎn tiānqì zěnmeyàng, bǐsài dōu huì jìnxíng.', meaning: 'Bất kể thời tiết thế nào, trận đấu vẫn sẽ diễn ra.' }
    ],
    quiz: [
      { question: '"Bất kể ai đến, tôi đều sẽ tiếp đón" dịch đúng là:', options: ['不管谁来，我都会接待。', '都谁来，不管我会接待。', '谁不管来，我都会接待。'] },
      { question: 'Sau 不管 thường có từ loại nào?', options: ['Từ nghi vấn: 什么/谁/怎么样...', '因为/所以', '虽然/但是'] },
      { question: '"Bất kể mấy giờ, anh ấy đều sẽ đợi tôi" dịch đúng là:', options: ['不管几点，他都会等我。', '都几点，不管他会等我。', '几点不管，他都会等我。'] }
    ]
  },
  {
    key: 'ningke-yebu',
    level: 'HSK4',
    title: '宁可...也不... - Thà...chứ không...',
    pattern: '宁可 + phương án A (chấp nhận), 也不 + phương án B (từ chối)',
    explanation: 'Diễn tả thà chọn A (dù A không tốt lắm) còn hơn làm B.',
    examples: [
      { hanzi: '我宁可走路，也不想等公交车。', pinyin: 'Wǒ nìngkě zǒulù, yě bù xiǎng děng gōngjiāochē.', meaning: 'Tôi thà đi bộ chứ không muốn đợi xe buýt.' },
      { hanzi: '他宁可饿着，也不吃这种菜。', pinyin: 'Tā nìngkě èzhe, yě bù chī zhè zhǒng cài.', meaning: 'Anh ấy thà chịu đói chứ không ăn món này.' },
      { hanzi: '她宁可加班，也不想麻烦别人。', pinyin: 'Tā nìngkě jiābān, yě bù xiǎng máfan biérén.', meaning: 'Cô ấy thà tăng ca chứ không muốn làm phiền người khác.' }
    ],
    quiz: [
      { question: '"Tôi thà không ngủ chứ không muốn bỏ lỡ trận đấu" dịch đúng là:', options: ['我宁可不睡觉，也不想错过比赛。', '我也不睡觉，宁可不想错过比赛。', '不睡觉我宁可，也不想错过比赛。'] },
      { question: '宁可...也不... diễn tả điều gì?', options: ['Sự lựa chọn ưu tiên giữa 2 phương án', 'Nguyên nhân kết quả', 'So sánh mức độ'] },
      { question: '"Anh ấy thà đợi chứ không muốn chen lấn" dịch đúng là:', options: ['他宁可等着，也不想挤。', '他也不等着，宁可想挤。', '等着他宁可，也不想挤。'] }
    ]
  },
  {
    key: 'yuqi-buru',
    level: 'HSK4',
    title: '与其...不如... - Thà...còn hơn...',
    pattern: '与其 + phương án A, 不如 + phương án B (tốt hơn)',
    explanation: 'So sánh 2 phương án và cho rằng B tốt hơn A, khuyên nên chọn B.',
    examples: [
      { hanzi: '与其在家等，不如出去找工作。', pinyin: 'Yǔqí zài jiā děng, bùrú chūqù zhǎo gōngzuò.', meaning: 'Thay vì ở nhà chờ, chi bằng ra ngoài tìm việc.' },
      { hanzi: '与其买新的，不如修一下旧的。', pinyin: 'Yǔqí mǎi xīn de, bùrú xiū yíxià jiù de.', meaning: 'Thay vì mua cái mới, chi bằng sửa lại cái cũ.' },
      { hanzi: '与其抱怨，不如努力改变。', pinyin: 'Yǔqí bàoyuàn, bùrú nǔlì gǎibiàn.', meaning: 'Thay vì than phiền, chi bằng cố gắng thay đổi.' }
    ],
    quiz: [
      { question: 'Trong 与其...不如..., phương án nào được đánh giá tốt hơn?', options: ['Phương án sau 不如', 'Phương án sau 与其', 'Cả hai bằng nhau'] },
      { question: '"Thay vì xem tivi, chi bằng đọc sách" dịch đúng là:', options: ['与其看电视，不如看书。', '不如看电视，与其看书。', '看电视与其，不如看书。'] },
      { question: '"Thay vì tranh cãi, chi bằng bình tĩnh nói chuyện" dịch đúng là:', options: ['与其吵架，不如好好说话。', '不如吵架，与其好好说话。', '吵架与其，不如好好说话。'] }
    ]
  },
  {
    key: 'zhisuoyi-shiyinwei',
    level: 'HSK4',
    title: '之所以...是因为... - Sở dĩ...là vì...',
    pattern: '之所以 + kết quả, 是因为 + nguyên nhân',
    explanation: 'Nhấn mạnh nguyên nhân của một sự việc, thường dùng khi giải thích lý do sâu xa.',
    examples: [
      { hanzi: '他之所以成功，是因为他很努力。', pinyin: 'Tā zhīsuǒyǐ chénggōng, shì yīnwèi tā hěn nǔlì.', meaning: 'Sở dĩ anh ấy thành công là vì anh ấy rất chăm chỉ.' },
      { hanzi: '我之所以迟到，是因为路上堵车。', pinyin: 'Wǒ zhīsuǒyǐ chídào, shì yīnwèi lùshang dǔchē.', meaning: 'Sở dĩ tôi đến muộn là vì đường tắc.' },
      { hanzi: '她之所以生气，是因为你没告诉她。', pinyin: 'Tā zhīsuǒyǐ shēngqì, shì yīnwèi nǐ méi gàosu tā.', meaning: 'Sở dĩ cô ấy giận là vì bạn không nói cho cô ấy biết.' }
    ],
    quiz: [
      { question: '之所以...是因为... nhấn mạnh vào phần nào?', options: ['Nguyên nhân sâu xa của một kết quả', 'Kết quả của hành động', 'Thời gian xảy ra'] },
      { question: '"Sở dĩ tôi học tiếng Hán là vì tôi thích văn hóa Trung Quốc" dịch đúng là:', options: ['我之所以学汉语，是因为我喜欢中国文化。', '我是因为学汉语，之所以我喜欢中国文化。', '之所以我学汉语是因为，我喜欢中国文化。'] },
      { question: 'Trong cấu trúc này, phần đứng sau 之所以 là gì?', options: ['Kết quả', 'Nguyên nhân', 'Câu hỏi'] }
    ]
  },
  {
    key: 'chufei-cai',
    level: 'HSK4',
    title: '除非...才... - Trừ khi...mới...',
    pattern: '除非 + điều kiện duy nhất, 才 + kết quả',
    explanation: 'Diễn tả chỉ có MỘT điều kiện duy nhất mới dẫn đến kết quả, nếu không có điều kiện đó thì không có kết quả.',
    examples: [
      { hanzi: '除非你道歉，我才原谅你。', pinyin: 'Chúfēi nǐ dàoqiàn, wǒ cái yuánliàng nǐ.', meaning: 'Trừ khi bạn xin lỗi, tôi mới tha thứ cho bạn.' },
      { hanzi: '除非下大雨，比赛才会取消。', pinyin: 'Chúfēi xià dà yǔ, bǐsài cái huì qǔxiāo.', meaning: 'Trừ khi mưa to, trận đấu mới bị hủy.' },
      { hanzi: '除非有特殊情况，他才会请假。', pinyin: 'Chúfēi yǒu tèshū qíngkuàng, tā cái huì qǐngjià.', meaning: 'Trừ khi có tình huống đặc biệt, anh ấy mới xin nghỉ.' }
    ],
    quiz: [
      { question: '除非...才... khác 只要...就... ở điểm nào?', options: ['除非 là điều kiện duy nhất, không có thì không được', 'Hai cấu trúc giống hệt nhau', '除非 chỉ dùng cho quá khứ'] },
      { question: '"Trừ khi trời mưa, chúng tôi mới không đi" dịch đúng là:', options: ['除非下雨，我们才不去。', '才下雨，除非我们不去。', '下雨除非，我们才不去。'] },
      { question: '"Trừ khi được phép, bạn mới có thể vào" dịch đúng là:', options: ['除非得到允许，你才能进去。', '才得到允许，除非你能进去。', '得到允许除非，你才能进去。'] }
    ]
  },
  {
    key: 'bujin-hai',
    level: 'HSK4',
    title: '不仅...还... - Không chỉ...còn...',
    pattern: '不仅 + A, 还 + B',
    explanation: 'Tương tự 不但...而且..., nhấn mạnh không chỉ A mà còn B, thường dùng trong văn viết/trang trọng hơn.',
    examples: [
      { hanzi: '他不仅会说汉语，还会说日语。', pinyin: 'Tā bùjǐn huì shuō Hànyǔ, hái huì shuō Rìyǔ.', meaning: 'Anh ấy không chỉ biết nói tiếng Hán, còn biết nói tiếng Nhật.' },
      { hanzi: '这本书不仅有意思，还很有用。', pinyin: 'Zhè běn shū bùjǐn yǒu yìsi, hái hěn yǒuyòng.', meaning: 'Quyển sách này không chỉ thú vị, còn rất hữu ích.' },
      { hanzi: '她不仅漂亮，还很聪明。', pinyin: 'Tā bùjǐn piàoliang, hái hěn cōngming.', meaning: 'Cô ấy không chỉ xinh đẹp, còn rất thông minh.' }
    ],
    quiz: [
      { question: '"Anh ấy không chỉ cao mà còn khỏe" dịch đúng là:', options: ['他不仅高，还很壮。', '他还高，不仅很壮。', '不仅他高还很壮。'] },
      { question: '不仅...还... gần nghĩa nhất với cấu trúc nào đã học?', options: ['不但...而且...', '虽然...但是...', '因为...所以...'] },
      { question: '"Thành phố này không chỉ đẹp, còn rất an toàn" dịch đúng là:', options: ['这个城市不仅漂亮，还很安全。', '这个城市还漂亮，不仅很安全。', '不仅这个城市漂亮还很安全。'] }
    ]
  },
  {
    key: 'kenengbuyu',
    level: 'HSK4',
    title: 'V得/不 + kết quả - Bổ ngữ khả năng',
    pattern: 'Động từ + 得/不 + bổ ngữ kết quả/phương hướng',
    explanation: 'Diễn tả có khả năng hay không có khả năng đạt được kết quả của hành động.',
    examples: [
      { hanzi: '这个字我看不懂。', pinyin: 'Zhège zì wǒ kàn bu dǒng.', meaning: 'Chữ này tôi nhìn không hiểu.' },
      { hanzi: '声音太小，我听不清楚。', pinyin: 'Shēngyīn tài xiǎo, wǒ tīng bu qīngchu.', meaning: 'Âm thanh quá nhỏ, tôi nghe không rõ.' },
      { hanzi: '这么多东西，我拿得动。', pinyin: 'Zhème duō dōngxi, wǒ ná de dòng.', meaning: 'Nhiều đồ thế này, tôi cầm nổi.' }
    ],
    quiz: [
      { question: '"Tôi nghe không hiểu" dịch đúng là:', options: ['我听不懂。', '我不听懂。', '我懂不听。'] },
      { question: 'Bổ ngữ khả năng dùng để diễn tả điều gì?', options: ['Có khả năng hay không đạt được kết quả', 'Đã từng làm', 'Đang làm'] },
      { question: '"Đường quá xa, tôi đi bộ không nổi" dịch đúng là:', options: ['路太远，我走不动。', '路太远，我不走动。', '路太远，我动不走。'] }
    ]
  }
]
