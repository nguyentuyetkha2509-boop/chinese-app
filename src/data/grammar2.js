// Ngu phap HSK2 theo chuan HSK 3.0 (25 diem). Xem ghi chu dau grammar.js.
export const HSK2_GRAMMAR = [
  {
    key: 'yidianr-youdianr',
    level: 'HSK2',
    title: '一点儿 / 有点儿 - Một chút / Hơi',
    pattern: 'Tính từ + 一点儿  ·  有点儿 + tính từ',
    explanation: '一点儿 đứng SAU tính từ, thường dùng khi so sánh ("rẻ hơn một chút"). 有点儿 đứng TRƯỚC tính từ, diễn tả mức độ nhẹ, thường mang ý không hài lòng.',
    examples: [
      { hanzi: '便宜一点儿吧。', pinyin: 'Piányi yìdiǎnr ba.', meaning: 'Rẻ hơn một chút đi.' },
      { hanzi: '这件衣服有点儿贵。', pinyin: 'Zhè jiàn yīfu yǒudiǎnr guì.', meaning: 'Cái áo này hơi đắt.' },
      { hanzi: '今天有点儿冷。', pinyin: 'Jīntiān yǒudiǎnr lěng.', meaning: 'Hôm nay hơi lạnh.' }
    ],
    quiz: [
      { question: 'Từ nào đứng TRƯỚC tính từ?', options: ['有点儿', '一点儿', 'Cả hai đều đứng sau'] },
      { question: '"Cái này hơi nhỏ" dịch đúng là:', options: ['这个有点儿小。', '这个小有点儿。', '有点儿这个小。'] },
      { question: '"Nói chậm một chút" dịch đúng là:', options: ['说慢一点儿。', '说一点儿慢。', '有点儿说慢。'] }
    ]
  },
  {
    key: 'jieguo-buyu',
    level: 'HSK2',
    title: 'Bổ ngữ kết quả - V + 完 / 懂 / 好 / 错',
    pattern: 'Động từ + 完 / 懂 / 好 / 到 / 错',
    explanation: 'Đặt ngay sau động từ để nói hành động đạt kết quả gì: 做完 (làm xong), 听懂 (nghe hiểu), 写错 (viết sai), 看到 (nhìn thấy). Phủ định dùng 没(有), ví dụ 没听懂.',
    examples: [
      { hanzi: '我做完作业了。', pinyin: 'Wǒ zuòwán zuòyè le.', meaning: 'Tôi làm xong bài tập rồi.' },
      { hanzi: '你听懂了吗？', pinyin: 'Nǐ tīngdǒng le ma?', meaning: 'Bạn nghe hiểu chưa?' },
      { hanzi: '他写错了一个字。', pinyin: 'Tā xiěcuò le yí gè zì.', meaning: 'Anh ấy viết sai một chữ.' }
    ],
    quiz: [
      { question: '"Tôi xem xong phim rồi" dịch đúng là:', options: ['我看完电影了。', '我完看电影了。', '我看电影完了。'] },
      { question: '"Tôi nghe không hiểu" ở quá khứ (chưa hiểu) nói là:', options: ['我没听懂。', '我不听懂。', '我听没懂。'] },
      { question: 'Bổ ngữ kết quả đứng ở vị trí nào?', options: ['Ngay sau động từ', 'Trước động từ', 'Cuối câu sau 了'] }
    ]
  },
  {
    key: 'qushi-buyu',
    level: 'HSK2',
    title: 'Bổ ngữ xu hướng - V + 来 / 去 / 上 / 下 / 进 / 出',
    pattern: 'Động từ + 来 / 去',
    explanation: 'Thêm 来 hoặc 去 sau động từ để chỉ hướng của hành động: 来 là tiến về phía người nói, 去 là rời xa người nói. Có thể ghép 上 下 进 出 回 trước 来/去: 进来, 下去, 回去. Có địa điểm thì đặt giữa: 跑回家去.',
    examples: [
      { hanzi: '请进来。', pinyin: 'Qǐng jìnlai.', meaning: 'Mời vào (người nói ở trong phòng).' },
      { hanzi: '我下去买东西。', pinyin: 'Wǒ xiàqu mǎi dōngxi.', meaning: 'Tôi xuống dưới mua đồ.' },
      { hanzi: '他跑回家去了。', pinyin: 'Tā pǎo huí jiā qù le.', meaning: 'Anh ấy chạy về nhà rồi.' }
    ],
    quiz: [
      { question: 'Hướng tiến về phía người nói dùng:', options: ['来', '去', '过'] },
      { question: 'Người nói đang ở trong phòng, muốn bảo người ngoài vào, nói:', options: ['请进来。', '请进去。', '请来进。'] },
      { question: '"Anh ấy chạy về nhà rồi" dịch đúng là:', options: ['他跑回家去了。', '他跑家回去了。', '他回跑家去了。'] }
    ]
  },
  {
    key: 'de-buyu',
    level: 'HSK2',
    title: 'V + 得 + tính từ - Bổ ngữ trình độ',
    pattern: 'Động từ + 得 + tính từ',
    explanation: 'Dùng 得 để nối động từ với phần miêu tả mức độ/trạng thái của hành động đó, giống "...rất..." trong tiếng Việt.',
    examples: [
      { hanzi: '他说得很快。', pinyin: 'Tā shuō de hěn kuài.', meaning: 'Anh ấy nói rất nhanh.' },
      { hanzi: '你写得很好。', pinyin: 'Nǐ xiě de hěn hǎo.', meaning: 'Bạn viết rất đẹp.' },
      { hanzi: '她跑得很慢。', pinyin: 'Tā pǎo de hěn màn.', meaning: 'Cô ấy chạy rất chậm.' }
    ],
    quiz: [
      { question: '"Anh ấy hát rất hay" dịch đúng là:', options: ['他唱得很好。', '他很好唱得。', '他得唱很好。'] },
      { question: 'Chữ 得 trong bổ ngữ trình độ đứng ở đâu?', options: ['Ngay sau động từ', 'Trước động từ', 'Cuối câu'] },
      { question: '"Cô ấy làm việc rất chăm chỉ" dịch đúng là:', options: ['她工作得很努力。', '她努力得工作。', '她得工作很努力。'] }
    ]
  },
  {
    key: 'dongliang-buyu',
    level: 'HSK2',
    title: 'Bổ ngữ số lần - V + 一次 / 一遍 / 一下',
    pattern: 'Động từ + số + 次 / 遍 / 下',
    explanation: 'Đặt sau động từ để nói hành động diễn ra bao nhiêu lần. 次 là số lần chung, 遍 là từ đầu đến cuối một lượt, 下 là "một chút, thử xem".',
    examples: [
      { hanzi: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', meaning: 'Xin nói lại một lần nữa.' },
      { hanzi: '你等一下。', pinyin: 'Nǐ děng yíxià.', meaning: 'Bạn đợi một chút.' },
      { hanzi: '我看过三次这部电影。', pinyin: 'Wǒ kànguo sān cì zhè bù diànyǐng.', meaning: 'Tôi đã xem bộ phim này ba lần.' }
    ],
    quiz: [
      { question: '"Xin nói lại một lần nữa" dịch đúng là:', options: ['请再说一遍。', '请说再一遍。', '请一遍再说。'] },
      { question: '遍 nhấn mạnh điều gì?', options: ['Làm trọn một lượt từ đầu đến cuối', 'Làm trong thời gian ngắn', 'Làm vào buổi sáng'] },
      { question: '"Bạn thử một chút xem" dịch đúng là:', options: ['你试一下。', '你一下试。', '一下你试。'] }
    ]
  },
  {
    key: 'liandong',
    level: 'HSK2',
    title: 'Câu liên động - Hai động từ nối tiếp',
    pattern: 'S + V1 (+ O) + V2 (+ O)',
    explanation: 'Hai hoặc nhiều động từ cùng chủ ngữ nối nhau, không có từ nối. Động từ xảy ra trước đứng trước. Thường dùng để nói đi đâu để làm gì, hoặc làm gì bằng cách nào.',
    examples: [
      { hanzi: '我去超市买东西。', pinyin: 'Wǒ qù chāoshì mǎi dōngxi.', meaning: 'Tôi đi siêu thị mua đồ.' },
      { hanzi: '他坐飞机去北京。', pinyin: 'Tā zuò fēijī qù Běijīng.', meaning: 'Anh ấy đi máy bay đến Bắc Kinh.' },
      { hanzi: '她开车回家。', pinyin: 'Tā kāichē huíjiā.', meaning: 'Cô ấy lái xe về nhà.' }
    ],
    quiz: [
      { question: '"Tôi đi thư viện mượn sách" dịch đúng là:', options: ['我去图书馆借书。', '我借书去图书馆。', '我图书馆去借书。'] },
      { question: 'Trong câu liên động, các động từ sắp xếp theo:', options: ['Thứ tự hành động xảy ra', 'Số nét chữ', 'Tùy ý, đổi chỗ thoải mái'] },
      { question: '"Anh ấy đi tàu điện ngầm đi làm" dịch đúng là:', options: ['他坐地铁去上班。', '他去上班坐地铁。', '他上班去坐地铁。'] }
    ]
  },
  {
    key: 'shuangbinyu',
    level: 'HSK2',
    title: 'Câu hai tân ngữ - 给 / 教 / 告诉',
    pattern: 'S + V + người + vật',
    explanation: 'Một số động từ như 给, 教, 告诉, 送, 问 đi với hai tân ngữ: người nhận đứng trước, vật hoặc nội dung đứng sau.',
    examples: [
      { hanzi: '老师教我们汉语。', pinyin: 'Lǎoshī jiāo wǒmen Hànyǔ.', meaning: 'Thầy giáo dạy chúng tôi tiếng Trung.' },
      { hanzi: '他给我一本书。', pinyin: 'Tā gěi wǒ yì běn shū.', meaning: 'Anh ấy đưa cho tôi một quyển sách.' },
      { hanzi: '我告诉你一个好消息。', pinyin: 'Wǒ gàosu nǐ yí gè hǎo xiāoxi.', meaning: 'Tôi báo cho bạn một tin tốt.' }
    ],
    quiz: [
      { question: '"Mẹ tặng tôi một chiếc đồng hồ" dịch đúng là:', options: ['妈妈送我一块手表。', '妈妈送一块手表我。', '妈妈我送一块手表。'] },
      { question: 'Trong câu hai tân ngữ, tân ngữ chỉ người đứng:', options: ['Trước tân ngữ chỉ vật', 'Sau tân ngữ chỉ vật', 'Trước chủ ngữ'] },
      { question: '"Thầy dạy chúng tôi tiếng Anh" dịch đúng là:', options: ['老师教我们英语。', '老师教英语我们。', '老师我们教英语。'] }
    ]
  },
  {
    key: 'cunxian',
    level: 'HSK2',
    title: 'Câu tồn tại - 处所 + V着 + 名词',
    pattern: 'Nơi chốn + động từ + 着 + người / vật',
    explanation: 'Dùng để nói ở một nơi nào đó có cái gì, đang ở tư thế hay trạng thái gì. Nơi chốn đứng đầu câu, vật hoặc người đứng cuối. Câu này mô tả cảnh, không dùng 是 hay 在.',
    examples: [
      { hanzi: '墙上挂着一张照片。', pinyin: 'Qiáng shàng guàzhe yì zhāng zhàopiàn.', meaning: 'Trên tường treo một tấm ảnh.' },
      { hanzi: '门口站着一个人。', pinyin: 'Ménkǒu zhànzhe yí gè rén.', meaning: 'Ở cửa có một người đứng.' },
      { hanzi: '桌子上放着几本书。', pinyin: 'Zhuōzi shàng fàngzhe jǐ běn shū.', meaning: 'Trên bàn đặt mấy quyển sách.' }
    ],
    quiz: [
      { question: '"Trên tường treo một tấm ảnh" dịch đúng là:', options: ['墙上挂着一张照片。', '一张照片挂着墙上。', '挂着墙上一张照片。'] },
      { question: 'Trong câu tồn tại, nơi chốn thường đứng ở:', options: ['Đầu câu', 'Cuối câu', 'Giữa hai động từ'] },
      { question: '"Ở cửa có một người đứng" dịch đúng là:', options: ['门口站着一个人。', '一个人站着门口。', '站着一个人门口。'] }
    ]
  },
  {
    key: 'zhe',
    level: 'HSK2',
    title: 'V + 着 - Trạng thái đang tiếp diễn',
    pattern: 'Động từ + 着',
    explanation: 'Diễn tả một trạng thái đang duy trì sau khi hành động xảy ra, giống "đang ở trạng thái..." trong tiếng Việt.',
    examples: [
      { hanzi: '门开着。', pinyin: 'Mén kāizhe.', meaning: 'Cửa đang mở.' },
      { hanzi: '她拿着一本书。', pinyin: 'Tā názhe yì běn shū.', meaning: 'Cô ấy đang cầm một quyển sách.' },
      { hanzi: '墙上挂着一张照片。', pinyin: 'Qiáng shàng guàzhe yì zhāng zhàopiàn.', meaning: 'Trên tường đang treo một tấm ảnh.' }
    ],
    quiz: [
      { question: '"Đèn đang sáng" dịch đúng là:', options: ['灯开着。', '灯着开。', '着灯开。'] },
      { question: '着 dùng để diễn tả điều gì?', options: ['Trạng thái đang duy trì', 'Hành động đã hoàn thành', 'Kinh nghiệm trong quá khứ'] },
      { question: '"Cô ấy đang mặc một cái áo màu đỏ" dịch đúng là:', options: ['她穿着一件红色的衣服。', '她着穿一件红色的衣服。', '着她穿一件红色的衣服。'] }
    ]
  },
  {
    key: 'guo',
    level: 'HSK2',
    title: 'V + 过 - Kinh nghiệm đã từng làm',
    pattern: 'Động từ + 过',
    explanation: 'Diễn tả đã từng có kinh nghiệm làm việc gì đó, giống "đã từng..." trong tiếng Việt.',
    examples: [
      { hanzi: '我去过北京。', pinyin: 'Wǒ qùguo Běijīng.', meaning: 'Tôi đã từng đi Bắc Kinh.' },
      { hanzi: '他吃过中国菜。', pinyin: 'Tā chīguo Zhōngguó cài.', meaning: 'Anh ấy đã từng ăn món Trung Quốc.' },
      { hanzi: '我没看过这个电影。', pinyin: 'Wǒ méi kànguo zhège diànyǐng.', meaning: 'Tôi chưa từng xem bộ phim này.' }
    ],
    quiz: [
      { question: '"Tôi đã từng học tiếng Hán" dịch đúng là:', options: ['我学过汉语。', '我过学汉语。', '过我学汉语。'] },
      { question: '过 diễn tả điều gì?', options: ['Kinh nghiệm đã từng làm', 'Hành động đang diễn ra', 'Hành động sắp xảy ra'] },
      { question: '"Anh ấy chưa từng đến Việt Nam" dịch đúng là:', options: ['他没去过越南。', '他去没过越南。', '没他去过越南。'] }
    ]
  },
  {
    key: 'shi-de',
    level: 'HSK2',
    title: '是...的 - Nhấn mạnh thời gian/cách thức',
    pattern: '是 + (thời gian/cách thức/nơi chốn) + động từ + 的',
    explanation: 'Dùng để nhấn mạnh một chi tiết cụ thể của việc đã xảy ra rồi (khi nào, ở đâu, bằng cách nào).',
    examples: [
      { hanzi: '我是昨天到的。', pinyin: 'Wǒ shì zuótiān dào de.', meaning: 'Tôi đến (là) vào hôm qua đó.' },
      { hanzi: '他是坐飞机来的。', pinyin: 'Tā shì zuò fēijī lái de.', meaning: 'Anh ấy đến (là) bằng máy bay đó.' },
      { hanzi: '这是在北京买的。', pinyin: 'Zhè shì zài Běijīng mǎi de.', meaning: 'Cái này (là) mua ở Bắc Kinh đó.' }
    ],
    quiz: [
      { question: '是...的 dùng để nhấn mạnh điều gì?', options: ['Chi tiết của việc đã xảy ra rồi', 'Việc sắp xảy ra', 'Câu hỏi có/không'] },
      { question: '"Tôi học tiếng Hán ở Việt Nam đó" dịch đúng là:', options: ['我是在越南学汉语的。', '我在越南是学汉语的。', '我在越南学是汉语的。'] },
      { question: '"Anh ấy là đi tàu điện đến đó" dịch đúng là:', options: ['他是坐地铁来的。', '他坐是地铁来的。', '他坐地铁是来的。'] }
    ]
  },
  {
    key: 'bijiao-yiyang',
    level: 'HSK2',
    title: '没有 / 不如 / 跟...一样 - So sánh',
    pattern: 'A 没有 B + tính từ ; A 跟 B 一样 + tính từ',
    explanation: '没有 dùng để nói A kém B (không bằng). 不如 cũng có nghĩa "không bằng". 跟...一样 nói hai bên bằng nhau. Khác với 比, các câu này không dùng 很 trước tính từ.',
    examples: [
      { hanzi: '今天没有昨天热。', pinyin: 'Jīntiān méiyǒu zuótiān rè.', meaning: 'Hôm nay không nóng bằng hôm qua.' },
      { hanzi: '他跟我一样高。', pinyin: 'Tā gēn wǒ yíyàng gāo.', meaning: 'Anh ấy cao bằng tôi.' },
      { hanzi: '这个不如那个好。', pinyin: 'Zhège bùrú nàge hǎo.', meaning: 'Cái này không tốt bằng cái kia.' }
    ],
    quiz: [
      { question: '"Anh ấy cao bằng tôi" dịch đúng là:', options: ['他跟我一样高。', '他比我一样高。', '他一样跟我高。'] },
      { question: '"Hôm nay không nóng bằng hôm qua" dịch đúng là:', options: ['今天没有昨天热。', '今天没有热昨天。', '今天不比昨天没热。'] },
      { question: '"Không bằng" có thể nói bằng:', options: ['没有 hoặc 不如', '比 hoặc 更', '一样 hoặc 都'] }
    ]
  },
  {
    key: 'yuelaiyue',
    level: 'HSK2',
    title: '越来越 - Càng ngày càng',
    pattern: '越来越 + tính từ/động từ',
    explanation: 'Diễn tả một xu hướng thay đổi tăng dần theo thời gian.',
    examples: [
      { hanzi: '天气越来越冷了。', pinyin: 'Tiānqì yuè lái yuè lěng le.', meaning: 'Thời tiết càng ngày càng lạnh.' },
      { hanzi: '他的汉语越来越好。', pinyin: 'Tā de Hànyǔ yuè lái yuè hǎo.', meaning: 'Tiếng Hán của anh ấy càng ngày càng giỏi.' },
      { hanzi: '城市越来越大。', pinyin: 'Chéngshì yuè lái yuè dà.', meaning: 'Thành phố càng ngày càng lớn.' }
    ],
    quiz: [
      { question: '"Cô ấy càng ngày càng xinh" dịch đúng là:', options: ['她越来越漂亮。', '她漂亮越来越。', '越来越她漂亮。'] },
      { question: '越来越 diễn tả điều gì?', options: ['Xu hướng tăng dần theo thời gian', 'So sánh hai vật', 'Nguyên nhân kết quả'] },
      { question: '"Người ngày càng nhiều" dịch đúng là:', options: ['人越来越多。', '人多越来越。', '越来越人多。'] }
    ]
  },
  {
    key: 'yao-le',
    level: 'HSK2',
    title: '要 / 快要 / 就要...了 - Sắp...rồi',
    pattern: '要 / 快要 / 就要 + động từ + 了',
    explanation: 'Nói việc sắp xảy ra. 要...了 và 快要...了 đi với động từ; 就要...了 nhấn mạnh sắp tới rất gần và có thể kèm từ chỉ thời gian cụ thể, còn 快要 thì không.',
    examples: [
      { hanzi: '火车要开了。', pinyin: 'Huǒchē yào kāi le.', meaning: 'Tàu sắp chạy rồi.' },
      { hanzi: '快要考试了。', pinyin: 'Kuàiyào kǎoshì le.', meaning: 'Sắp thi rồi.' },
      { hanzi: '他下个月就要毕业了。', pinyin: 'Tā xià ge yuè jiù yào bìyè le.', meaning: 'Tháng sau anh ấy sắp tốt nghiệp rồi.' }
    ],
    quiz: [
      { question: '"Sắp đến Tết rồi" dịch đúng là:', options: ['快要过年了。', '快要过年。', '快过年要了。'] },
      { question: 'Câu có từ chỉ thời gian "tháng sau", nên dùng:', options: ['就要...了', '快要...了', '不要...了'] },
      { question: '"Mưa sắp rơi rồi" dịch đúng là:', options: ['要下雨了。', '下雨要了。', '要了下雨。'] }
    ]
  },
  {
    key: 'xushu-gaishu',
    level: 'HSK2',
    title: 'Số thứ tự và số ước chừng - 第 / 多 / 几',
    pattern: '第 + số ; số + 多 + lượng từ ; 十几',
    explanation: '第 đặt trước số để chỉ thứ tự: 第一, 第二天. Số + 多 nghĩa "hơn": 三十多岁 (hơn ba mươi tuổi). 十几 nghĩa "mười mấy". Với số từ 10 trở lên, 多 đứng sau số tròn.',
    examples: [
      { hanzi: '今天是第一天上课。', pinyin: 'Jīntiān shì dì yī tiān shàngkè.', meaning: 'Hôm nay là ngày đầu tiên đi học.' },
      { hanzi: '他三十多岁。', pinyin: 'Tā sānshí duō suì.', meaning: 'Anh ấy hơn ba mươi tuổi.' },
      { hanzi: '我有十几本书。', pinyin: 'Wǒ yǒu shí jǐ běn shū.', meaning: 'Tôi có mười mấy quyển sách.' }
    ],
    quiz: [
      { question: '"Hơn ba mươi tuổi" nói là:', options: ['三十多岁', '三多十岁', '多三十岁'] },
      { question: '"Thứ ba" nói là:', options: ['第三', '三第', '第个三'] },
      { question: '十几 có nghĩa là:', options: ['Mười mấy (từ 11 đến 19)', 'Mười lần', 'Mười hai'] }
    ]
  },
  {
    key: 'jiu-qiangdiao',
    level: 'HSK2',
    title: '就 - Nhấn mạnh sớm, nhanh, chính là',
    pattern: '就 + động từ / 是 / 在',
    explanation: '就 đứng trước động từ để nhấn mạnh sự việc xảy ra sớm hoặc nhanh, hoặc nhấn mạnh "chính là, ngay tại". 就是 nhấn mạnh sự xác nhận, 就在 nhấn mạnh vị trí.',
    examples: [
      { hanzi: '他六点就起床了。', pinyin: 'Tā liù diǎn jiù qǐchuáng le.', meaning: 'Anh ấy sáu giờ đã dậy rồi.' },
      { hanzi: '我家就在学校旁边。', pinyin: 'Wǒ jiā jiù zài xuéxiào pángbiān.', meaning: 'Nhà tôi ngay cạnh trường.' },
      { hanzi: '这就是我要找的书。', pinyin: 'Zhè jiù shì wǒ yào zhǎo de shū.', meaning: 'Đây chính là quyển sách tôi cần tìm.' }
    ],
    quiz: [
      { question: '"Nhà tôi ngay cạnh trường" dịch đúng là:', options: ['我家就在学校旁边。', '我家在就学校旁边。', '就我家在学校旁边。'] },
      { question: '就 trong 他六点就起床了 nhấn mạnh điều gì?', options: ['Anh ấy dậy sớm', 'Anh ấy dậy muộn', 'Anh ấy không dậy'] },
      { question: '"Đây chính là nhà tôi" dịch đúng là:', options: ['这就是我家。', '这是就我家。', '就这是我家。'] }
    ]
  },
  {
    key: 'haoma-ba',
    level: 'HSK2',
    title: '好吗 / 吧 / 怎么样 - Hỏi xin ý kiến',
    pattern: '..., 好吗？ ; ...吧？ ; ..., 怎么样？',
    explanation: '好吗 / 行吗 / 可以吗 đặt cuối lời đề nghị để xin ý kiến. 怎么样 hỏi "thế nào". 吧 ở cuối câu hỏi nghĩa là đoán và muốn xác nhận ("phải không nhỉ").',
    examples: [
      { hanzi: '我们一起去，好吗？', pinyin: 'Wǒmen yìqǐ qù, hǎo ma?', meaning: 'Chúng ta cùng đi, được không?' },
      { hanzi: '你是新同学吧？', pinyin: 'Nǐ shì xīn tóngxué ba?', meaning: 'Bạn là bạn học mới phải không?' },
      { hanzi: '这个周末去爬山，怎么样？', pinyin: 'Zhège zhōumò qù páshān, zěnmeyàng?', meaning: 'Cuối tuần này đi leo núi, thấy sao?' }
    ],
    quiz: [
      { question: 'Để xin ý kiến sau một lời đề nghị, ta thêm:', options: ['好吗？', '了吗？', '过吗？'] },
      { question: '吧 trong câu hỏi như 你是新同学吧？ thể hiện:', options: ['Đoán và muốn xác nhận', 'Ra lệnh', 'Phủ định'] },
      { question: '"Chúng ta ăn cơm nhé, được không?" dịch đúng là:', options: ['我们吃饭，好吗？', '我们好吗，吃饭？', '好吗我们吃饭？'] }
    ]
  },
  {
    key: 'xian-ranhou',
    level: 'HSK2',
    title: '先...然后... - Trước...sau đó...',
    pattern: '先 + hành động 1, 然后 + hành động 2',
    explanation: 'Diễn tả thứ tự thực hiện hành động, giống "trước...sau đó..." trong tiếng Việt.',
    examples: [
      { hanzi: '我先吃饭，然后洗澡。', pinyin: 'Wǒ xiān chīfàn, ránhòu xǐzǎo.', meaning: 'Tôi ăn cơm trước, sau đó tắm.' },
      { hanzi: '先做作业，然后看电视。', pinyin: 'Xiān zuò zuòyè, ránhòu kàn diànshì.', meaning: 'Làm bài tập trước, sau đó xem tivi.' },
      { hanzi: '我们先去超市，然后回家。', pinyin: 'Wǒmen xiān qù chāoshì, ránhòu huíjiā.', meaning: 'Chúng tôi đi siêu thị trước, sau đó về nhà.' }
    ],
    quiz: [
      { question: '"Tôi rửa mặt trước, sau đó ăn sáng" dịch đúng là:', options: ['我先洗脸，然后吃早饭。', '我然后洗脸，先吃早饭。', '先我洗脸然后吃早饭。'] },
      { question: '先 đứng trước hành động nào?', options: ['Hành động xảy ra trước', 'Hành động xảy ra sau', 'Không xác định'] },
      { question: '"Học xong rồi mới chơi" gần nghĩa nhất với:', options: ['先学习，然后玩儿。', '然后学习，先玩儿。', '玩儿先然后学习。'] }
    ]
  },
  {
    key: 'you-you',
    level: 'HSK2',
    title: '又...又... - Vừa...vừa...',
    pattern: '又 + tính từ/động từ 1 + 又 + tính từ/động từ 2',
    explanation: 'Dùng để diễn tả hai đặc điểm/hành động cùng tồn tại, giống "vừa...vừa..." trong tiếng Việt.',
    examples: [
      { hanzi: '这个菜又好吃又便宜。', pinyin: 'Zhège cài yòu hǎochī yòu piányi.', meaning: 'Món này vừa ngon vừa rẻ.' },
      { hanzi: '她又高又漂亮。', pinyin: 'Tā yòu gāo yòu piàoliang.', meaning: 'Cô ấy vừa cao vừa xinh.' },
      { hanzi: '这个房间又大又干净。', pinyin: 'Zhège fángjiān yòu dà yòu gānjìng.', meaning: 'Căn phòng này vừa to vừa sạch.' }
    ],
    quiz: [
      { question: '"Anh ấy vừa thông minh vừa chăm chỉ" dịch đúng là:', options: ['他又聪明又努力。', '他聪明又努力又。', '又他聪明又努力。'] },
      { question: '又...又... dùng để nối loại từ nào?', options: ['Tính từ hoặc động từ', 'Chỉ danh từ', 'Chỉ số từ'] },
      { question: '"Trời vừa nóng vừa ẩm" dịch đúng là:', options: ['天气又热又潮湿。', '天气热又潮湿又。', '又天气热又潮湿。'] }
    ]
  },
  {
    key: 'budan-erqie',
    level: 'HSK2',
    title: '不但...而且... - Không những...mà còn...',
    pattern: '不但 + A, 而且 + B',
    explanation: 'Diễn tả sự bổ sung, tăng tiến: không chỉ A mà còn B nữa.',
    examples: [
      { hanzi: '他不但聪明，而且很努力。', pinyin: 'Tā búdàn cōngming, érqiě hěn nǔlì.', meaning: 'Anh ấy không những thông minh mà còn rất chăm chỉ.' },
      { hanzi: '这个菜不但好吃，而且便宜。', pinyin: 'Zhège cài búdàn hǎochī, érqiě piányi.', meaning: 'Món này không những ngon mà còn rẻ.' },
      { hanzi: '她不但会说汉语，而且会说英语。', pinyin: 'Tā búdàn huì shuō Hànyǔ, érqiě huì shuō Yīngyǔ.', meaning: 'Cô ấy không những biết nói tiếng Hán mà còn biết nói tiếng Anh.' }
    ],
    quiz: [
      { question: '"Anh ấy không những cao mà còn khỏe" dịch đúng là:', options: ['他不但高，而且身体很好。', '他而且高，不但身体很好。', '不但他高而且身体很好。'] },
      { question: '不但...而且... diễn tả quan hệ gì?', options: ['Tăng tiến, bổ sung', 'Tương phản', 'Nguyên nhân kết quả'] },
      { question: '"Cô ấy không những xinh đẹp mà còn tốt bụng" dịch đúng là:', options: ['她不但漂亮，而且很善良。', '她而且漂亮，不但很善良。', '不但她漂亮而且善良。'] }
    ]
  },
  {
    key: 'yinwei-suoyi',
    level: 'HSK2',
    title: '因为...所以... - Vì...nên...',
    pattern: '因为 + nguyên nhân, 所以 + kết quả',
    explanation: 'Dùng để nối một câu nguyên nhân với kết quả của nó, giống "vì...nên..." trong tiếng Việt.',
    examples: [
      { hanzi: '因为下雨，所以我们没去公园。', pinyin: 'Yīnwèi xiàyǔ, suǒyǐ wǒmen méi qù gōngyuán.', meaning: 'Vì trời mưa nên chúng tôi không đi công viên.' },
      { hanzi: '因为很忙，所以他没有时间吃饭。', pinyin: 'Yīnwèi hěn máng, suǒyǐ tā méiyǒu shíjiān chīfàn.', meaning: 'Vì rất bận nên anh ấy không có thời gian ăn cơm.' },
      { hanzi: '因为身体不好，所以他没去上班。', pinyin: 'Yīnwèi shēntǐ bù hǎo, suǒyǐ tā méi qù shàngbān.', meaning: 'Vì sức khỏe không tốt nên anh ấy không đi làm.' }
    ],
    quiz: [
      { question: '"Vì trời lạnh nên tôi mặc nhiều áo" dịch đúng là:', options: ['因为天冷，所以我穿很多衣服。', '所以天冷，因为我穿很多衣服。', '天冷所以，因为我穿很多衣服。'] },
      { question: '因为 dùng để giới thiệu phần nào của câu?', options: ['Nguyên nhân', 'Kết quả', 'Câu hỏi'] },
      { question: '"Vì bận nên anh ấy không đến" dịch đúng là:', options: ['因为忙，所以他没来。', '所以忙，因为他没来。', '因为他没来，所以忙。'] }
    ]
  },
  {
    key: 'suiran-danshi',
    level: 'HSK2',
    title: '虽然...但是... - Tuy...nhưng...',
    pattern: '虽然 + mệnh đề 1, 但是 + mệnh đề 2',
    explanation: 'Dùng để nối hai mệnh đề có ý nghĩa tương phản, giống "tuy...nhưng..." trong tiếng Việt.',
    examples: [
      { hanzi: '虽然很累，但是他还在工作。', pinyin: 'Suīrán hěn lèi, dànshì tā hái zài gōngzuò.', meaning: 'Tuy rất mệt nhưng anh ấy vẫn đang làm việc.' },
      { hanzi: '虽然下雨，但是我们还是去了。', pinyin: 'Suīrán xiàyǔ, dànshì wǒmen háishi qù le.', meaning: 'Tuy trời mưa nhưng chúng tôi vẫn đi.' },
      { hanzi: '虽然汉语难，但是很有意思。', pinyin: 'Suīrán Hànyǔ nán, dànshì hěn yǒu yìsi.', meaning: 'Tuy tiếng Hán khó nhưng rất thú vị.' }
    ],
    quiz: [
      { question: '"Tuy đắt nhưng rất ngon" dịch đúng là:', options: ['虽然贵，但是很好吃。', '但是贵，虽然很好吃。', '贵虽然，好吃但是。'] },
      { question: '但是 mang nghĩa gì?', options: ['Nhưng', 'Vì vậy', 'Và'] },
      { question: '"Tuy nhỏ nhưng rất đẹp" dịch đúng là:', options: ['虽然小，但是很漂亮。', '但是小，虽然很漂亮。', '小虽然，漂亮但是。'] }
    ]
  },
  {
    key: 'ruguo-jiu',
    level: 'HSK2',
    title: '如果...就... - Nếu...thì...',
    pattern: '如果 + điều kiện, 就 + kết quả',
    explanation: 'Nêu một giả thiết rồi nói kết quả. 如果 đứng đầu vế đầu (có thể sau chủ ngữ), 就 đứng trước động từ ở vế sau. Có thể bỏ 如果 hoặc đổi thành ...的话.',
    examples: [
      { hanzi: '如果明天下雨，我就不去了。', pinyin: 'Rúguǒ míngtiān xiàyǔ, wǒ jiù bú qù le.', meaning: 'Nếu mai trời mưa thì tôi không đi nữa.' },
      { hanzi: '如果你有时间，就来我家吧。', pinyin: 'Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā ba.', meaning: 'Nếu bạn có thời gian thì đến nhà tôi nhé.' },
      { hanzi: '你如果累了，就休息一下。', pinyin: 'Nǐ rúguǒ lèi le, jiù xiūxi yíxià.', meaning: 'Nếu bạn mệt thì nghỉ một chút.' }
    ],
    quiz: [
      { question: '"Nếu bạn đồng ý thì tôi đi" dịch đúng là:', options: ['如果你同意，我就去。', '如果你同意，我去就。', '就你同意，我如果去。'] },
      { question: '就 trong 如果...就... đứng ở đâu?', options: ['Trước động từ ở vế sau', 'Đầu cả câu', 'Cuối câu'] },
      { question: 'Cuối vế giả thiết, từ nào có nghĩa "nếu như" (như 明天下雨的话)?', options: ['的话', '因为', '但是'] }
    ]
  },
  {
    key: 'zhiyao-jiu',
    level: 'HSK2',
    title: '只要...就... - Chỉ cần...thì...',
    pattern: '只要 + điều kiện, 就 + kết quả',
    explanation: 'Diễn tả điều kiện đủ để dẫn đến kết quả: chỉ cần có A là sẽ có B.',
    examples: [
      { hanzi: '只要努力，就能成功。', pinyin: 'Zhǐyào nǔlì, jiù néng chénggōng.', meaning: 'Chỉ cần cố gắng là có thể thành công.' },
      { hanzi: '只要你来，我就高兴。', pinyin: 'Zhǐyào nǐ lái, wǒ jiù gāoxìng.', meaning: 'Chỉ cần bạn đến là tôi vui rồi.' },
      { hanzi: '只要天气好，我们就去爬山。', pinyin: 'Zhǐyào tiānqì hǎo, wǒmen jiù qù páshān.', meaning: 'Chỉ cần thời tiết đẹp là chúng tôi sẽ đi leo núi.' }
    ],
    quiz: [
      { question: '"Chỉ cần có tiền là mua được" dịch đúng là:', options: ['只要有钱，就能买。', '就有钱，只要能买。', '有只要钱就能买。'] },
      { question: '只要...就... diễn tả loại điều kiện nào?', options: ['Điều kiện đủ (chỉ cần có là được)', 'Điều kiện cần duy nhất', 'Điều kiện không thể'] },
      { question: '"Chỉ cần bạn nói, tôi sẽ nghe" dịch đúng là:', options: ['只要你说，我就听。', '就你说，只要我听。', '你只要说我就听。'] }
    ]
  },
  {
    key: 'yi-jiu',
    level: 'HSK2',
    title: '一...就... - Vừa...là...(liền)',
    pattern: '一 + hành động 1, 就 + hành động 2',
    explanation: 'Diễn tả hành động 2 xảy ra ngay sau hành động 1, "vừa...là...liền..."',
    examples: [
      { hanzi: '我一到家就吃饭。', pinyin: 'Wǒ yí dào jiā jiù chīfàn.', meaning: 'Tôi vừa về đến nhà là ăn cơm liền.' },
      { hanzi: '他一看见我就笑了。', pinyin: 'Tā yí kànjiàn wǒ jiù xiào le.', meaning: 'Anh ấy vừa nhìn thấy tôi liền cười.' },
      { hanzi: '一下课，学生们就跑出去了。', pinyin: 'Yí xiàkè, xuéshengmen jiù pǎo chūqù le.', meaning: 'Vừa tan học, các học sinh liền chạy ra ngoài.' }
    ],
    quiz: [
      { question: '"Tôi vừa nghe là hiểu ngay" dịch đúng là:', options: ['我一听就明白。', '我就听一明白。', '一我听就明白。'] },
      { question: '一...就... diễn tả điều gì?', options: ['Hai hành động xảy ra liên tiếp ngay sau nhau', 'Hai hành động trái ngược', 'So sánh'] },
      { question: '"Trời vừa tối là anh ấy về nhà ngay" dịch đúng là:', options: ['天一黑他就回家。', '天就黑他一回家。', '一天黑就他回家。'] }
    ]
  }
]
