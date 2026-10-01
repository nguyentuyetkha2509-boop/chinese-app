// Ngu phap HSK6 theo chuan HSK 3.0 (27 diem). Xem ghi chu dau grammar.js.
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
  },
  {
    key: 'ningke-yebu',
    level: 'HSK6',
    title: '宁可...也不... - Thà...chứ không... · mở rộng',
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
    level: 'HSK6',
    title: '与其...不如... - Thà...còn hơn... · mở rộng',
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
    level: 'HSK6',
    title: '之所以...是因为... - Sở dĩ...là vì... · mở rộng',
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
    key: 'yimian',
    level: 'HSK6',
    title: '以免 - Để tránh, kẻo · mở rộng',
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
    key: 'xingkui',
    level: 'HSK6',
    title: '幸亏 - May mà · mở rộng',
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
    key: 'hekuang',
    level: 'HSK6',
    title: '何况 - Huống chi, huống hồ · mở rộng',
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
    key: 'zhi-wenyan',
    level: 'HSK6',
    title: '之 - "của" trong văn viết trang trọng · mở rộng',
    pattern: 'A + 之 + B (thay cho 的 trong văn viết/thành ngữ)',
    explanation: '之 là hình thức trang trọng, mang màu sắc văn viết cổ điển của 的, thường xuất hiện trong văn viết học thuật, bài phát biểu, thành ngữ, tên gọi.',
    examples: [
      { hanzi: '这是我们成功之路。', pinyin: 'Zhè shì wǒmen chénggōng zhī lù.', meaning: 'Đây là con đường thành công của chúng ta.' },
      { hanzi: '长江是中华民族之骄傲。', pinyin: "Chángjiāng shì Zhōnghuá mínzú zhī jiāo'ào.", meaning: 'Trường Giang là niềm tự hào của dân tộc Trung Hoa.' },
      { hanzi: '父母之爱，无以言表。', pinyin: 'Fùmǔ zhī ài, wúyǐ yánbiǎo.', meaning: 'Tình yêu của cha mẹ, không lời nào diễn tả hết.' }
    ],
    quiz: [
      { question: '之 trong văn viết trang trọng tương đương với từ nào trong khẩu ngữ?', options: ['的', '了', '着'] },
      { question: '"Tương lai của đất nước" (văn viết trang trọng) dịch đúng là:', options: ['国家之未来', '国家未来之', '之国家未来'] },
      { question: '之 thường xuất hiện nhiều nhất ở loại văn bản nào?', options: ['Văn viết học thuật, thành ngữ, tên gọi trang trọng', 'Tin nhắn chat hằng ngày', 'Khẩu ngữ ngoài chợ'] }
    ]
  },
  {
    key: 'zhe-wenyan',
    level: 'HSK6',
    title: '者 - Hậu tố "người..." trong văn viết · mở rộng',
    pattern: 'Động từ/cụm từ + 者',
    explanation: '者 gắn sau động từ hoặc cụm từ để chỉ người thực hiện hành động đó hoặc thuộc nhóm đó - giống "...giả", "người...", dùng nhiều trong văn viết, học thuật.',
    examples: [
      { hanzi: '这次比赛的获胜者将获得奖金。', pinyin: 'Zhè cì bǐsài de huòshèngzhě jiāng huòdé jiǎngjīn.', meaning: 'Người chiến thắng cuộc thi lần này sẽ nhận được tiền thưởng.' },
      { hanzi: '读者可以在网上留言。', pinyin: 'Dúzhě kěyǐ zài wǎngshàng liúyán.', meaning: 'Độc giả có thể để lại bình luận trên mạng.' },
      { hanzi: '这本书的作者是一位有名的学者。', pinyin: 'Zhè běn shū de zuòzhě shì yí wèi yǒumíng de xuézhě.', meaning: 'Tác giả cuốn sách này là một học giả nổi tiếng.' }
    ],
    quiz: [
      { question: '者 gắn sau động từ/cụm từ để chỉ điều gì?', options: ['Người thực hiện hành động đó hoặc thuộc nhóm đó', 'Thời gian xảy ra hành động', 'Địa điểm xảy ra hành động'] },
      { question: '"Người tiêu dùng" (dùng 者) dịch đúng là:', options: ['消费者', '消费的', '消费之'] },
      { question: 'Từ nào dưới đây KHÔNG dùng hậu tố 者?', options: ['学生', '读者', '作者'] }
    ]
  },
  {
    key: 'yi-wei',
    level: 'HSK6',
    title: '以...为... - Lấy...làm... · mở rộng',
    pattern: '以 + A + 为 + B',
    explanation: 'Diễn tả lấy A làm B (tiêu chuẩn, mục tiêu, trung tâm...) - cấu trúc trang trọng, thường dùng trong văn viết, khẩu hiệu, quy định.',
    examples: [
      { hanzi: '这家公司以质量为第一。', pinyin: 'Zhè jiā gōngsī yǐ zhìliàng wéi dì-yī.', meaning: 'Công ty này lấy chất lượng làm hàng đầu.' },
      { hanzi: '我们要以学习为重。', pinyin: 'Wǒmen yào yǐ xuéxí wéi zhòng.', meaning: 'Chúng ta phải lấy việc học làm trọng.' },
      { hanzi: '他一直以父亲为榜样。', pinyin: 'Tā yìzhí yǐ fùqīn wéi bǎngyàng.', meaning: 'Anh ấy luôn lấy cha làm tấm gương.' }
    ],
    quiz: [
      { question: '以...为... dùng để diễn tả điều gì?', options: ['Lấy A làm tiêu chuẩn/mục tiêu/trung tâm B', 'So sánh A với B', 'A là nguyên nhân của B'] },
      { question: '"Trường học lấy học sinh làm trung tâm" dịch đúng là:', options: ['学校以学生为中心。', '学校学生以为中心。', '以学校学生为中心。'] },
      { question: '"Anh ấy lấy sự trung thực làm nguyên tắc sống" dịch đúng là:', options: ['他以诚实为做人的原则。', '他诚实以为做人的原则。', '以他诚实为做人的原则。'] }
    ]
  },
  {
    key: 'hebi',
    level: 'HSK6',
    title: '何必 - Cần gì phải..., việc gì phải... · mở rộng',
    pattern: '何必 + động từ/cụm từ (+ 呢)',
    explanation: 'Dùng dưới dạng câu hỏi tu từ để khuyên ai đó rằng không cần thiết phải làm gì, mang sắc thái "chẳng cần phải như vậy".',
    examples: [
      { hanzi: '都是老朋友了，何必这么客气呢。', pinyin: 'Dōu shì lǎo péngyou le, hébì zhème kèqi ne.', meaning: 'Đều là bạn cũ cả rồi, cần gì phải khách sáo như vậy.' },
      { hanzi: '他会主动道歉的，你何必生气呢。', pinyin: 'Tā huì zhǔdòng dàoqiàn de, nǐ hébì shēngqì ne.', meaning: 'Anh ấy sẽ tự xin lỗi thôi, bạn việc gì phải giận.' },
      { hanzi: '既然知道结果，又何必再问呢。', pinyin: 'Jìrán zhīdào jiéguǒ, yòu hébì zài wèn ne.', meaning: 'Đã biết kết quả rồi, còn cần gì phải hỏi lại nữa.' }
    ],
    quiz: [
      { question: '何必...呢 mang sắc thái gì?', options: ['Khuyên ai đó rằng không cần thiết phải làm gì', 'Ra lệnh bắt buộc phải làm', 'Hỏi thông tin khách quan'] },
      { question: '"Chỉ là chuyện nhỏ, cần gì phải để trong lòng" dịch đúng là:', options: ['只是小事，何必放在心上呢。', '只是小事，何况放在心上呢。', '何必只是小事放在心上呢。'] },
      { question: '"Đằng nào cũng phải đi, việc gì phải phàn nàn" dịch đúng là:', options: ['反正都要去，何必抱怨呢。', '反正都要去，何必了抱怨呢。', '何必反正都要去抱怨呢。'] }
    ]
  },
  {
    key: 'qizhi',
    level: 'HSK6',
    title: '岂止 - Đâu chỉ, há chỉ (còn hơn thế) · mở rộng',
    pattern: '岂止 + A，(简直/甚至) + B (mức độ lớn hơn A)',
    explanation: 'Dùng để nhấn mạnh rằng sự thật còn vượt xa những gì vừa nêu (A), không chỉ dừng lại ở đó - mang sắc thái văn viết, hùng biện.',
    examples: [
      { hanzi: '他岂止是聪明，简直是天才。', pinyin: 'Tā qǐzhǐ shì cōngmíng, jiǎnzhí shì tiāncái.', meaning: 'Anh ấy đâu chỉ là thông minh, đơn giản là thiên tài.' },
      { hanzi: '这件事岂止影响了他一个人。', pinyin: 'Zhè jiàn shì qǐzhǐ yǐngxiǎngle tā yí ge rén.', meaning: 'Chuyện này đâu chỉ ảnh hưởng đến một mình anh ấy.' },
      { hanzi: '迟到岂止一次，他已经迟到五次了。', pinyin: 'Chídào qǐzhǐ yí cì, tā yǐjīng chídào wǔ cì le.', meaning: 'Trễ giờ đâu chỉ một lần, anh ấy đã trễ giờ năm lần rồi.' }
    ],
    quiz: [
      { question: '岂止 mang ý nghĩa gần nhất với cụm nào?', options: ['Đâu chỉ có vậy, còn hơn thế nữa', 'Chắc chắn không phải vậy', 'Có lẽ là như vậy'] },
      { question: '"Cô ấy đâu chỉ xinh đẹp, còn rất tài giỏi" dịch đúng là:', options: ['她岂止漂亮，还很有才华。', '她岂止漂亮，何必很有才华。', '岂止她漂亮还很有才华。'] },
      { question: '岂止 thường xuất hiện trong loại câu nào?', options: ['Câu nhấn mạnh, mang tính hùng biện/văn viết', 'Câu hỏi thăm sức khỏe thông thường', 'Câu chào hỏi xã giao'] }
    ]
  },
  {
    key: 'yuqishuo-buruishuo',
    level: 'HSK6',
    title: '与其说...不如说... - Nói là...chẳng bằng nói là... · mở rộng',
    pattern: '与其说 + cách nói A, 不如说 + cách nói B (phù hợp hơn)',
    explanation: 'Dùng khi muốn điều chỉnh lại cách diễn đạt: cho rằng cách nói B phản ánh đúng bản chất sự việc hơn cách nói A.',
    examples: [
      { hanzi: '与其说他是老师，不如说他是朋友。', pinyin: 'Yǔqí shuō tā shì lǎoshī, bùrú shuō tā shì péngyou.', meaning: 'Nói anh ấy là thầy giáo, chẳng bằng nói anh ấy là bạn.' },
      { hanzi: '与其说是运气，不如说是努力的结果。', pinyin: 'Yǔqí shuō shì yùnqi, bùrú shuō shì nǔlì de jiéguǒ.', meaning: 'Nói là may mắn, chẳng bằng nói đó là kết quả của sự nỗ lực.' },
      { hanzi: '与其说他不在乎，不如说他在假装。', pinyin: 'Yǔqí shuō tā bú zàihu, bùrú shuō tā zài jiǎzhuāng.', meaning: 'Nói anh ấy không quan tâm, chẳng bằng nói anh ấy đang giả vờ.' }
    ],
    quiz: [
      { question: 'Trong 与其说...不如说..., cách nói nào được xem là chính xác/phù hợp hơn?', options: ['Cách nói sau 不如说', 'Cách nói sau 与其说', 'Cả hai như nhau'] },
      { question: '"Nói đây là thất bại, chẳng bằng nói đây là bài học" dịch đúng là:', options: ['与其说这是失败，不如说这是教训。', '与其说这是失败，不如这是教训说。', '不如说这是失败，与其说这是教训。'] },
      { question: '与其说...不如说... khác 与其...不如... (chọn phương án) ở điểm nào?', options: ['与其说...不如说... dùng để so sánh 2 CÁCH DIỄN ĐẠT về cùng một việc', '与其说...不如说... dùng để chọn giữa 2 hành động khác nhau', 'Hai cấu trúc hoàn toàn giống nhau về nghĩa'] }
    ]
  },
  {
    key: 'weimian',
    level: 'HSK6',
    title: '未免 - Hơi, chưa tránh khỏi (nhận xét nhẹ nhàng) · mở rộng',
    pattern: 'Chủ ngữ + 未免 + tính từ/cụm từ đánh giá',
    explanation: 'Dùng để nhận xét rằng điều gì đó hơi quá mức, không hợp lý lắm - thường mang ý chê nhẹ, lịch sự.',
    examples: [
      { hanzi: '你这样说，未免太武断了。', pinyin: 'Nǐ zhèyàng shuō, wèimiǎn tài wǔduàn le.', meaning: 'Bạn nói như vậy, thì hơi võ đoán quá.' },
      { hanzi: '一件小事就生这么大的气，未免小题大做。', pinyin: 'Yí jiàn xiǎoshì jiù shēng zhème dà de qì, wèimiǎn xiǎotí-dàzuò.', meaning: 'Một chuyện nhỏ mà giận đến vậy, thì hơi bé xé to rồi.' },
      { hanzi: '这个价格未免太贵了吧。', pinyin: 'Zhège jiàgé wèimiǎn tài guì le ba.', meaning: 'Giá này thì hơi đắt quá đấy.' }
    ],
    quiz: [
      { question: '未免 mang sắc thái đánh giá như thế nào?', options: ['Chê nhẹ, cho rằng hơi quá mức/không hợp lý', 'Khen ngợi hết lời', 'Hoàn toàn trung lập, không đánh giá'] },
      { question: '"Mới gặp lần đầu đã hỏi chuyện riêng tư, thì hơi đường đột quá" dịch đúng là:', options: ['第一次见面就问隐私，未免太唐突了。', '第一次见面就问隐私，何必太唐突了。', '未免第一次见面就问隐私太唐突了。'] },
      { question: '"Anh ấy còn trẻ như vậy đã làm giám đốc, thì hơi quá nhanh" dịch đúng là:', options: ['他这么年轻就当经理，未免太快了。', '他这么年轻就当经理，不禁太快了。', '未免他这么年轻就当经理太快了。'] }
    ]
  },
  {
    key: 'shengpa',
    level: 'HSK6',
    title: '生怕 - Rất sợ, chỉ sợ rằng · mở rộng',
    pattern: 'Chủ ngữ + 生怕 + điều lo sợ xảy ra',
    explanation: 'Diễn tả tâm lý rất lo lắng, sợ một điều gì đó xảy ra nên chủ động hành động để đề phòng.',
    examples: [
      { hanzi: '妈妈生怕孩子着凉，给他多穿了一件衣服。', pinyin: 'Māma shēngpà háizi zháoliáng, gěi tā duō chuānle yí jiàn yīfu.', meaning: 'Mẹ rất sợ con bị lạnh, nên mặc thêm cho con một chiếc áo.' },
      { hanzi: '他说话很小声，生怕吵到别人。', pinyin: 'Tā shuōhuà hěn xiǎo shēng, shēngpà chǎo dào biérén.', meaning: 'Anh ấy nói rất khẽ, chỉ sợ làm phiền người khác.' },
      { hanzi: '我生怕迟到，提前一个小时就出门了。', pinyin: 'Wǒ shēngpà chídào, tíqián yí ge xiǎoshí jiù chūmén le.', meaning: 'Tôi rất sợ trễ giờ, nên đã ra khỏi nhà sớm một tiếng.' }
    ],
    quiz: [
      { question: '生怕 diễn tả tâm lý gì?', options: ['Rất lo lắng, sợ một điều gì đó xảy ra', 'Rất vui mừng, mong chờ điều gì đó', 'Hoàn toàn không quan tâm đến điều gì'] },
      { question: '"Cô ấy đi rất nhẹ, chỉ sợ đánh thức em bé" dịch đúng là:', options: ['她走得很轻，生怕吵醒宝宝。', '她走得很轻，未免吵醒宝宝。', '生怕她走得很轻吵醒宝宝。'] },
      { question: '"Tôi kiểm tra lại ba lần, chỉ sợ viết sai" dịch đúng là:', options: ['我检查了三遍，生怕写错了。', '我检查了三遍，岂止写错了。', '生怕我检查了三遍写错了。'] }
    ]
  }
]
