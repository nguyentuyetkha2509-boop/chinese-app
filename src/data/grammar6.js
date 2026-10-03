// Ngu phap HSK6 theo chuan HSK 3.0 (13 diem, cac diem "mo rong" da chuyen sang grammar7.js). Xem ghi chu dau grammar.js.
export const HSK6_GRAMMAR = [
  {
    key: 'qushi-zhuangtai',
    level: 'HSK6',
    title: 'Bổ ngữ xu hướng chỉ trạng thái - 下来 / 下去 / 起来 / 过来',
    pattern: 'Động từ / tính từ + 下来 / 下去 / 起来 / 过来',
    explanation: 'Các bổ ngữ hướng này còn diễn tả sự thay đổi trạng thái. 下来: chuyển sang tĩnh, chậm, tối. 下去: tiếp tục xấu đi hoặc giữ nguyên. 起来: bắt đầu, trở nên. 过来: hồi lại trạng thái bình thường.',
    examples: [
      { hanzi: '天渐渐黑下来了。', pinyin: 'Tiān jiànjiàn hēi xiàlai le.', meaning: 'Trời dần tối lại.' },
      { hanzi: '他的病慢慢好起来了。', pinyin: 'Tā de bìng mànmàn hǎo qǐlai le.', meaning: 'Bệnh của anh ấy dần khá lên.' },
      { hanzi: '他终于醒过来了。', pinyin: 'Tā zhōngyú xǐng guòlai le.', meaning: 'Cuối cùng anh ấy đã tỉnh lại.' }
    ],
    quiz: [
      { question: '"Anh ấy dần bình tĩnh lại" dịch đúng là:', options: ['他慢慢安静下来了。', '他慢慢安静起去了。', '他慢慢安静出来了。'] },
      { question: '醒过来 có nghĩa là:', options: ['Tỉnh lại', 'Ngủ tiếp', 'Đứng dậy'] },
      { question: '"Mùa đông đến, trời lạnh dần" dịch đúng là:', options: ['冬天到了，天气冷起来了。', '冬天到了，天气冷出去了。', '冬天到了，天气冷上来了。'] }
    ]
  },
  {
    key: 'ba-zhishi',
    level: 'HSK6',
    title: 'Câu 把 nghĩa khiến cho',
    pattern: 'Sự việc + 把 + người / vật + V + kết quả',
    explanation: 'Chủ ngữ là sự việc hoặc hiện tượng (không phải người chủ động), 把 đưa đối tượng bị tác động lên trước động từ để nhấn mạnh kết quả mà sự việc đó gây ra, thường là cảm xúc hay trạng thái.',
    examples: [
      { hanzi: '这件事把他气坏了。', pinyin: 'Zhè jiàn shì bǎ tā qìhuài le.', meaning: 'Việc này làm anh ấy tức điên.' },
      { hanzi: '大雨把路都淹了。', pinyin: 'Dàyǔ bǎ lù dōu yān le.', meaning: 'Mưa lớn làm ngập hết đường.' },
      { hanzi: '他的话把大家逗笑了。', pinyin: 'Tā de huà bǎ dàjiā dòuxiào le.', meaning: 'Lời anh ấy làm mọi người bật cười.' }
    ],
    quiz: [
      { question: '"Tin này làm tôi sợ hãi" dịch đúng là:', options: ['这个消息把我吓坏了。', '这个消息我把吓坏了。', '把这个消息我吓坏了。'] },
      { question: 'Chủ ngữ của câu 把 khiến cho thường là:', options: ['Sự việc hoặc hiện tượng', 'Con số', 'Địa điểm'] },
      { question: 'Sau động từ trong câu 把 cần có:', options: ['Kết quả hoặc thành phần khác', 'Chỉ cần động từ trơn', 'Câu hỏi'] }
    ]
  },
  {
    key: 'bei-gei',
    level: 'HSK6',
    title: '被 / 叫 / 让 + người + 给 + V - Bị động nhấn mạnh',
    pattern: 'Chủ ngữ + 被 / 叫 / 让 + người + 给 + động từ + thành phần khác',
    explanation: 'Thêm 给 trước động từ trong câu bị động để nhấn mạnh sự việc xảy ra ngoài ý muốn hoặc mang sắc thái khẩu ngữ. 给 không thể thay 被, nhưng có thể bỏ đi mà nghĩa không đổi.',
    examples: [
      { hanzi: '我的钱包被小偷给偷走了。', pinyin: 'Wǒ de qiánbāo bèi xiǎotōu gěi tōuzǒu le.', meaning: 'Ví tiền của tôi bị kẻ trộm lấy mất.' },
      { hanzi: '杯子叫他给打碎了。', pinyin: 'Bēizi jiào tā gěi dǎsuì le.', meaning: 'Cái cốc bị anh ấy làm vỡ rồi.' },
      { hanzi: '那本书让朋友给借走了。', pinyin: 'Nà běn shū ràng péngyou gěi jièzǒu le.', meaning: 'Quyển sách đó bị bạn mượn đi mất rồi.' }
    ],
    quiz: [
      { question: '"Xe của tôi bị anh ấy lái đi mất" dịch đúng là:', options: ['我的车被他给开走了。', '我的车给被他开走了。', '我的车他被给开走了。'] },
      { question: '给 trong câu bị động đứng ở:', options: ['Ngay trước động từ', 'Ngay sau chủ ngữ', 'Cuối câu'] },
      { question: '给 trong cấu trúc này giúp:', options: ['Nhấn mạnh sắc thái, thêm tính khẩu ngữ', 'Chuyển thành câu hỏi', 'Biến thành phủ định'] }
    ]
  },
  {
    key: 'budanbu-faner',
    level: 'HSK6',
    title: '不但不 / 不但没...，反而... - Không những không...mà còn...',
    pattern: '不但不 / 不但没有 + A，反而 + B',
    explanation: 'Kết quả trái với mong đợi: lẽ ra phải A nhưng ngược lại lại B. Khác với 不但...而且...: ở đây vế đầu là phủ định, vế sau là điều ngược lại.',
    examples: [
      { hanzi: '他不但没有生气，反而笑了。', pinyin: "Tā búdàn méiyǒu shēngqì, fǎn'ér xiào le.", meaning: 'Anh ấy không những không giận mà còn cười.' },
      { hanzi: '吃了药，他的病不但没好，反而更严重了。', pinyin: "Chīle yào, tā de bìng búdàn méi hǎo, fǎn'ér gèng yánzhòng le.", meaning: 'Uống thuốc rồi mà bệnh không những chưa khỏi lại còn nặng hơn.' },
      { hanzi: '价格不但没有降，反而涨了。', pinyin: "Jiàgé búdàn méiyǒu jiàng, fǎn'ér zhǎng le.", meaning: 'Giá không những không giảm mà còn tăng.' }
    ],
    quiz: [
      { question: '不但不...，反而... diễn tả:', options: ['Kết quả ngược với mong đợi', 'Sự nối tiếp', 'Điều kiện'] },
      { question: '"Không những không rẻ mà còn đắt hơn" dịch đúng là:', options: ['不但没便宜，反而更贵了。', '不但便宜，反而更贵了。', '不但没便宜，所以更贵了。'] },
      { question: 'Vế thứ hai thường bắt đầu bằng:', options: ['反而', '所以', '如果'] }
    ]
  },
  {
    key: 'yaome',
    level: 'HSK6',
    title: '要么...要么... - Hoặc là...hoặc là...',
    pattern: '要么 + A，要么 + B',
    explanation: 'Đưa ra hai lựa chọn, thường để người nghe chọn một trong hai hoặc nói rằng chỉ có hai khả năng. Hơi khẩu ngữ hơn 或者...或者....',
    examples: [
      { hanzi: '周末我们要么去爬山，要么在家休息。', pinyin: 'Zhōumò wǒmen yàome qù páshān, yàome zài jiā xiūxi.', meaning: 'Cuối tuần chúng ta hoặc đi leo núi, hoặc ở nhà nghỉ.' },
      { hanzi: '要么你来，要么我去。', pinyin: 'Yàome nǐ lái, yàome wǒ qù.', meaning: 'Hoặc bạn đến, hoặc tôi đi.' },
      { hanzi: '晚饭要么吃面条，要么吃米饭。', pinyin: 'Wǎnfàn yàome chī miàntiáo, yàome chī mǐfàn.', meaning: 'Bữa tối hoặc ăn mì, hoặc ăn cơm.' }
    ],
    quiz: [
      { question: '"Hoặc là học, hoặc là chơi" dịch đúng là:', options: ['要么学习，要么玩儿。', '要么学习，所以玩儿。', '要么学习，虽然玩儿。'] },
      { question: '要么...要么... biểu thị:', options: ['Hai lựa chọn', 'Nguyên nhân kết quả', 'Sự tăng tiến'] },
      { question: 'Từ nào có thể thay 要么?', options: ['或者', '因为', '如果'] }
    ]
  },
  {
    key: 'fanshi',
    level: 'HSK6',
    title: '凡是...都... - Hễ là...đều...',
    pattern: '凡是 + phạm vi, 都 + kết luận',
    explanation: 'Nêu một phạm vi chung rồi khẳng định tất cả trong phạm vi đó đều như vậy, không có ngoại lệ. Trang trọng hơn 所有...都.... Vế sau bắt buộc có 都.',
    examples: [
      { hanzi: '凡是来过这里的人，都喜欢这里。', pinyin: 'Fánshì láiguo zhèlǐ de rén, dōu xǐhuan zhèlǐ.', meaning: 'Hễ là người từng đến đây đều thích nơi này.' },
      { hanzi: '凡是重要的事，他都亲自去做。', pinyin: 'Fánshì zhòngyào de shì, tā dōu qīnzì qù zuò.', meaning: 'Việc nào quan trọng anh ấy đều tự mình làm.' },
      { hanzi: '凡是学生都要遵守规定。', pinyin: 'Fánshì xuésheng dōu yào zūnshǒu guīdìng.', meaning: 'Hễ là học sinh đều phải tuân thủ quy định.' }
    ],
    quiz: [
      { question: 'Vế sau của 凡是 thường có:', options: ['都', '才', '就'] },
      { question: '"Hễ là việc tốt, anh ấy đều làm" dịch đúng là:', options: ['凡是好事，他都做。', '凡是好事，他才做。', '凡是好事，他不都做。'] },
      { question: '凡是 khác 所有 ở chỗ:', options: ['Sắc thái trang trọng, nhấn mạnh không có ngoại lệ', 'Dùng cho số lượng', 'Chỉ dùng trong hỏi đáp'] }
    ]
  },
  {
    key: 'jiusuan',
    level: 'HSK6',
    title: '就算 / 就是...也... - Cho dù...cũng...',
    pattern: '就算 / 就是 + giả thiết, 也 + kết quả',
    explanation: 'Giống 即使 nhưng khẩu ngữ hơn. Thừa nhận một tình huống giả định, dù có xảy ra thì kết quả vẫn không đổi. 就算 hoặc 就是 đứng đầu vế đầu, 也 đứng trước động từ vế sau.',
    examples: [
      { hanzi: '就算你不说，我也知道。', pinyin: 'Jiùsuàn nǐ bù shuō, wǒ yě zhīdào.', meaning: 'Dù bạn không nói, tôi cũng biết.' },
      { hanzi: '就是下雪，我们也要出发。', pinyin: 'Jiùshì xiàxuě, wǒmen yě yào chūfā.', meaning: 'Dù có tuyết rơi, chúng tôi cũng sẽ lên đường.' },
      { hanzi: '就算再贵，我也要买。', pinyin: 'Jiùsuàn zài guì, wǒ yě yào mǎi.', meaning: 'Dù đắt đến mấy tôi cũng mua.' }
    ],
    quiz: [
      { question: '"Dù mệt tôi cũng làm" dịch đúng là:', options: ['就算累，我也要做。', '就算累，我才要做。', '就算累，我就不做。'] },
      { question: '就算...也... có sắc thái:', options: ['Khẩu ngữ, giả định', 'Văn viết trang trọng', 'Câu hỏi'] },
      { question: 'Từ ở vế sau luôn là:', options: ['也', '才', '又'] }
    ]
  },
  {
    key: 'yaobuoran',
    level: 'HSK6',
    title: '要不然 - Nếu không thì (khẩu ngữ)',
    pattern: '...，要不然...',
    explanation: 'Giống 否则 nhưng dùng trong khẩu ngữ. Nêu điều sẽ xảy ra (thường là xấu) nếu điều ở vế trước không thực hiện. Có thể nói 不然 hoặc 要不.',
    examples: [
      { hanzi: '快走吧，要不然来不及了。', pinyin: 'Kuài zǒu ba, yàobùrán lái bu jí le.', meaning: 'Đi nhanh đi, nếu không không kịp đâu.' },
      { hanzi: '我们得早点睡，要不然明天起不来。', pinyin: 'Wǒmen děi zǎodiǎn shuì, yàobùrán míngtiān qǐ bu lái.', meaning: 'Chúng ta phải ngủ sớm, nếu không mai không dậy nổi.' },
      { hanzi: '多穿点衣服，要不然会感冒。', pinyin: 'Duō chuān diǎn yīfu, yàobùrán huì gǎnmào.', meaning: 'Mặc thêm áo vào, nếu không sẽ bị cảm.' }
    ],
    quiz: [
      { question: '要不然 thường dùng trong văn phong:', options: ['Khẩu ngữ', 'Văn bản pháp lý', 'Thơ cổ'] },
      { question: '"Hãy nhớ mang ô, nếu không sẽ ướt" dịch đúng là:', options: ['记得带伞，要不然会淋湿。', '记得带伞，所以会淋湿。', '记得带伞，虽然会淋湿。'] },
      { question: 'Từ nào mang nghĩa gần với 要不然?', options: ['否则', '因为', '虽然'] }
    ]
  },
  {
    key: 'weile-er',
    level: 'HSK6',
    title: '为了...而... - Vì...mà...',
    pattern: '为了 + mục đích + 而 + hành động',
    explanation: 'Mẫu trang trọng, nêu mục đích và hành động vì mục đích đó. 而 nối mục đích với hành động và thường không dịch ra. Dùng nhiều trong văn viết hoặc phát biểu.',
    examples: [
      { hanzi: '他为了孩子的将来而努力工作。', pinyin: 'Tā wèile háizi de jiānglái ér nǔlì gōngzuò.', meaning: 'Anh ấy làm việc chăm chỉ vì tương lai của con.' },
      { hanzi: '为了健康而锻炼。', pinyin: 'Wèile jiànkāng ér duànliàn.', meaning: 'Rèn luyện vì sức khỏe.' },
      { hanzi: '她为了梦想而坚持。', pinyin: 'Tā wèile mèngxiǎng ér jiānchí.', meaning: 'Cô ấy kiên trì vì ước mơ.' }
    ],
    quiz: [
      { question: '"Vì hòa bình mà cố gắng" dịch đúng là:', options: ['为了和平而努力', '为了和平因为努力', '而为了和平努力'] },
      { question: '而 trong 为了...而... đóng vai trò:', options: ['Nối mục đích với hành động', 'Chỉ sự đối lập', 'Chỉ thời gian'] },
      { question: 'Mẫu này thường gặp trong:', options: ['Văn viết, phát biểu', 'Thân mật hàng ngày', 'Tin nhắn ngắn'] }
    ]
  },
  {
    key: 'fei-bukee',
    level: 'HSK6',
    title: '非...不可 - Nhất định phải...',
    pattern: '非 + V / O + 不可',
    explanation: 'Diễn tả sự cần thiết hay quyết tâm: nhất định phải, không thể không. Mẫu 非...不可 mang nghĩa phủ định kép nhấn mạnh. Có thể nói 非要...不可 để thể hiện sự cố chấp.',
    examples: [
      { hanzi: '这件事非你去不可。', pinyin: 'Zhè jiàn shì fēi nǐ qù bùkě.', meaning: 'Việc này nhất định phải do bạn đi.' },
      { hanzi: '感冒了，非吃药不可。', pinyin: 'Gǎnmào le, fēi chī yào bùkě.', meaning: 'Bị cảm rồi thì nhất định phải uống thuốc.' },
      { hanzi: '他非要买那个包不可。', pinyin: 'Tā fēi yào mǎi nàge bāo bùkě.', meaning: 'Anh ấy nhất định đòi mua cái túi đó.' }
    ],
    quiz: [
      { question: '非...不可 có nghĩa là:', options: ['Nhất định phải', 'Không cần', 'Có thể'] },
      { question: '"Ngày mai nhất định phải đến" dịch đúng là:', options: ['明天非来不可。', '明天非来可不。', '非明天来可不。'] },
      { question: '非要...不可 mang sắc thái:', options: ['Cố chấp, nhất định đòi', 'Do dự', 'Từ chối'] }
    ]
  },
  {
    key: 'shier-shier',
    level: 'HSK6',
    title: '时而...时而... - Lúc thì...lúc thì...',
    pattern: '时而 + A，时而 + B',
    explanation: 'Diễn tả hai trạng thái hoặc hành động thay phiên nhau xuất hiện trong cùng một khoảng thời gian. Dùng trong văn viết, miêu tả.',
    examples: [
      { hanzi: '天气时而晴朗，时而下雨。', pinyin: "Tiānqì shí'ér qínglǎng, shí'ér xiàyǔ.", meaning: 'Thời tiết lúc nắng đẹp lúc mưa.' },
      { hanzi: '他时而高兴，时而难过。', pinyin: "Tā shí'ér gāoxìng, shí'ér nánguò.", meaning: 'Anh ấy lúc vui lúc buồn.' },
      { hanzi: '声音时而大，时而小。', pinyin: "Shēngyīn shí'ér dà, shí'ér xiǎo.", meaning: 'Âm thanh lúc to lúc nhỏ.' }
    ],
    quiz: [
      { question: '时而...时而... diễn tả:', options: ['Hai trạng thái thay phiên', 'Hai sự việc cùng lúc', 'Hai điều kiện'] },
      { question: '"Lúc nhanh lúc chậm" dịch đúng là:', options: ['时而快，时而慢', '时而快时而是慢', '快时而慢时而'] },
      { question: 'Mẫu này thường gặp trong:', options: ['Văn miêu tả', 'Lời ra lệnh', 'Câu hỏi'] }
    ]
  },
  {
    key: 'bu-bu',
    level: 'HSK6',
    title: '不...不... - Không...thì không...',
    pattern: '不 + A，不 + B',
    explanation: 'Cấu trúc rút gọn: hai vế đều phủ định, vế đầu là điều kiện. Nghĩa là nếu không A thì không B. Thường gặp trong thành ngữ, tục ngữ hay khẩu hiệu.',
    examples: [
      { hanzi: '不见不散。', pinyin: 'Bú jiàn bú sàn.', meaning: 'Không gặp không về (hẹn nhất định gặp).' },
      { hanzi: '不努力不会成功。', pinyin: 'Bù nǔlì bú huì chénggōng.', meaning: 'Không cố gắng thì không thể thành công.' },
      { hanzi: '不看不知道，一看吓一跳。', pinyin: 'Bú kàn bù zhīdào, yí kàn xià yí tiào.', meaning: 'Không xem thì không biết, xem rồi giật mình.' }
    ],
    quiz: [
      { question: '不见不散 có nghĩa:', options: ['Hẹn nhất định gặp, không gặp không rời đi', 'Không gặp thì đi', 'Gặp rồi đi'] },
      { question: 'Cấu trúc 不A不B diễn đạt:', options: ['Nếu không A thì không B', 'A và B cùng xảy ra', 'A xảy ra sau B'] },
      { question: '"Không thử thì không biết" nói là:', options: ['不试不知道', '不试知道不', '知道不试不'] }
    ]
  },
  {
    key: 'bujin',
    level: 'HSK6',
    title: '不禁 - Không kìm được, bất giác',
    pattern: '不禁 + động từ (phản ứng/cảm xúc tự nhiên)',
    explanation: 'Diễn tả một phản ứng hoặc cảm xúc xảy ra một cách tự nhiên, không kiềm chế được.',
    examples: [
      { hanzi: '听到这个消息，她不禁哭了起来。', pinyin: 'Tīngdào zhège xiāoxi, tā bùjīn kūle qǐlái.', meaning: 'Nghe tin này, cô ấy không kìm được mà bật khóc.' },
      { hanzi: '看到这么美的风景，我不禁停下了脚步。', pinyin: 'Kàndào zhème měi de fēngjǐng, wǒ bùjīn tíngxiàle jiǎobù.', meaning: 'Thấy cảnh đẹp như vậy, tôi bất giác dừng bước.' },
      { hanzi: '大家听了他的笑话，不禁笑出声来。', pinyin: 'Dàjiā tīngle tā de xiàohua, bùjīn xiào chū shēng lái.', meaning: 'Mọi người nghe câu chuyện cười của anh ấy, không nhịn được mà bật cười thành tiếng.' }
    ],
    quiz: [
      { question: '不禁 diễn tả điều gì?', options: ['Phản ứng/cảm xúc tự nhiên, không kiềm chế được', 'Hành động được lên kế hoạch từ trước', 'Sự cấm đoán, không cho phép'] },
      { question: '"Nghe câu chuyện đó, tôi bất giác mỉm cười" dịch đúng là:', options: ['听了那个故事，我不禁笑了笑。', '听了那个故事，我岂止笑了笑。', '不禁听了那个故事我笑了笑。'] },
      { question: '"Thấy em bé đáng yêu quá, cô ấy không kìm được mà ôm lấy" dịch đúng là:', options: ['看到孩子太可爱了，她不禁抱了起来。', '看到孩子太可爱了，她未免抱了起来。', '不禁看到孩子太可爱了她抱了起来。'] }
    ]
  }
]
