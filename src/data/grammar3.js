// Ngu phap HSK3 theo chuan HSK 3.0 (19 diem). Xem ghi chu dau grammar.js.
export const HSK3_GRAMMAR = [
  {
    key: 'ba',
    level: 'HSK3',
    title: '把 - Câu chữ 把 cơ bản',
    pattern: 'Chủ ngữ + 把 + tân ngữ + động từ + thành phần khác',
    explanation: 'Dùng để nhấn mạnh tân ngữ bị tác động như thế nào bởi hành động, thường dùng khi có kết quả rõ ràng.',
    examples: [
      { hanzi: '请把门关上。', pinyin: 'Qǐng bǎ mén guānshàng.', meaning: 'Xin hãy đóng cửa lại.' },
      { hanzi: '我把作业做完了。', pinyin: 'Wǒ bǎ zuòyè zuò wán le.', meaning: 'Tôi đã làm xong bài tập rồi.' },
      { hanzi: '他把书放在桌子上。', pinyin: 'Tā bǎ shū fàng zài zhuōzi shàng.', meaning: 'Anh ấy đặt sách lên bàn.' }
    ],
    quiz: [
      { question: '"Xin hãy mở cửa sổ ra" dịch đúng là:', options: ['请把窗户打开。', '请打开把窗户。', '把请窗户打开。'] },
      { question: 'Trong câu chữ 把, tân ngữ đứng ở đâu?', options: ['Sau 把, trước động từ', 'Sau động từ', 'Đầu câu'] },
      { question: '"Tôi đã ăn hết cơm rồi" dịch đúng là:', options: ['我把米饭吃完了。', '我吃把米饭完了。', '把我米饭吃完了。'] }
    ]
  },
  {
    key: 'bei',
    level: 'HSK3',
    title: '被 - Câu bị động',
    pattern: 'Chủ ngữ (bị tác động) + 被 + (tác nhân) + động từ + kết quả',
    explanation: 'Dùng để diễn tả chủ ngữ bị/được ai đó làm gì, giống câu bị động trong tiếng Việt.',
    examples: [
      { hanzi: '我的手机被弟弟弄坏了。', pinyin: 'Wǒ de shǒujī bèi dìdi nòng huài le.', meaning: 'Điện thoại của tôi bị em trai làm hỏng.' },
      { hanzi: '蛋糕被他吃完了。', pinyin: 'Dàngāo bèi tā chī wán le.', meaning: 'Bánh kem bị anh ấy ăn hết rồi.' },
      { hanzi: '那本书被借走了。', pinyin: 'Nà běn shū bèi jiè zǒu le.', meaning: 'Quyển sách đó bị mượn mất rồi.' }
    ],
    quiz: [
      { question: '"Cửa sổ bị gió thổi mở" dịch đúng là:', options: ['窗户被风吹开了。', '窗户吹被风开了。', '被窗户风吹开了。'] },
      { question: 'Trong câu bị động 被, thành phần nào đứng trước 被?', options: ['Người/vật bị tác động', 'Người/vật gây ra hành động', 'Động từ'] },
      { question: '"Chiếc xe bị anh ấy sửa xong rồi" dịch đúng là:', options: ['车被他修好了。', '车修被他好了。', '被车他修好了。'] }
    ]
  },
  {
    key: 'jianyu',
    level: 'HSK3',
    title: 'Câu kiêm ngữ - 让 / 叫 / 请 / 派',
    pattern: 'S + 让 / 叫 / 请 / 派 + người + V',
    explanation: 'Một người ra lệnh hoặc nhờ người khác làm gì. Tân ngữ của động từ đầu (người) đồng thời là chủ ngữ của động từ sau. 请 mang sắc thái lịch sự, 让 và 叫 là "bảo, để cho", 派 là "cử".',
    examples: [
      { hanzi: '老师让我们回答问题。', pinyin: 'Lǎoshī ràng wǒmen huídá wèntí.', meaning: 'Thầy giáo cho chúng tôi trả lời câu hỏi.' },
      { hanzi: '妈妈叫我去买菜。', pinyin: 'Māma jiào wǒ qù mǎi cài.', meaning: 'Mẹ bảo tôi đi mua thức ăn.' },
      { hanzi: '公司派他去上海。', pinyin: 'Gōngsī pài tā qù Shànghǎi.', meaning: 'Công ty cử anh ấy đi Thượng Hải.' }
    ],
    quiz: [
      { question: '"Tôi mời bạn đến nhà tôi" dịch đúng là:', options: ['我请你来我家。', '我请来你我家。', '我你请来我家。'] },
      { question: 'Từ nào mang nghĩa lịch sự "mời, nhờ" trong câu kiêm ngữ?', options: ['请', '派', '叫'] },
      { question: '"Mẹ bảo tôi làm bài tập" dịch đúng là:', options: ['妈妈让我做作业。', '妈妈做作业让我。', '我让妈妈做作业。'] }
    ]
  },
  {
    key: 'kenengbuyu',
    level: 'HSK3',
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
  },
  {
    key: 'chengdu-buyu',
    level: 'HSK3',
    title: 'Bổ ngữ mức độ - 得很 / 极了 / 死了',
    pattern: 'Tính từ + 得很 / 极了 / 死了',
    explanation: 'Đặt sau tính từ hoặc động từ chỉ cảm xúc để nhấn mạnh mức độ rất cao: 热得很, 好看极了, 累死了. 极了 và 死了 thường đi với cuối câu.',
    examples: [
      { hanzi: '今天热得很。', pinyin: 'Jīntiān rè de hěn.', meaning: 'Hôm nay nóng lắm.' },
      { hanzi: '我累死了。', pinyin: 'Wǒ lèisǐ le.', meaning: 'Tôi mệt chết đi được.' },
      { hanzi: '这个电影好看极了。', pinyin: 'Zhège diànyǐng hǎokàn jí le.', meaning: 'Bộ phim này hay cực kỳ.' }
    ],
    quiz: [
      { question: '"Hôm nay lạnh lắm" dịch đúng là:', options: ['今天冷得很。', '今天得很冷。', '今天冷很得。'] },
      { question: '"Món này ngon cực kỳ" dịch đúng là:', options: ['这个菜好吃极了。', '这个菜极了好吃。', '这个菜好吃了极。'] },
      { question: '"Mệt chết đi được" nói là:', options: ['累死了', '死累了', '累了死'] }
    ]
  },
  {
    key: 'shiliang-buyu',
    level: 'HSK3',
    title: 'Bổ ngữ thời lượng - V + 了 + thời gian',
    pattern: 'Động từ + 了 + khoảng thời gian',
    explanation: 'Đặt sau động từ để nói hành động kéo dài bao lâu. Nếu có tân ngữ thì thường nói: V + 了 + thời gian + (的) + tân ngữ. Nếu việc vẫn đang tiếp diễn thì cuối câu thêm 了.',
    examples: [
      { hanzi: '我学了两年汉语。', pinyin: 'Wǒ xuéle liǎng nián Hànyǔ.', meaning: 'Tôi đã học tiếng Trung hai năm.' },
      { hanzi: '他睡了八个小时。', pinyin: 'Tā shuìle bā gè xiǎoshí.', meaning: 'Anh ấy ngủ tám tiếng.' },
      { hanzi: '我来北京三个月了。', pinyin: 'Wǒ lái Běijīng sān gè yuè le.', meaning: 'Tôi đến Bắc Kinh được ba tháng rồi.' }
    ],
    quiz: [
      { question: '"Tôi đợi anh ấy một tiếng" dịch đúng là:', options: ['我等了他一个小时。', '我一个小时等了他。', '我等一个小时了他。'] },
      { question: 'Từ chỉ khoảng thời gian (như 两年) đứng ở đâu?', options: ['Sau động từ', 'Trước chủ ngữ', 'Cuối câu sau 吗'] },
      { question: '"Tôi học tiếng Anh ba năm" dịch đúng là:', options: ['我学了三年英语。', '我三年学了英语。', '我学英语了三年。'] }
    ]
  },
  {
    key: 'fuhe-qushi',
    level: 'HSK3',
    title: 'Bổ ngữ xu hướng ghép - 出来 / 回去 / 起来',
    pattern: 'Động từ + 上 / 下 / 进 / 出 / 回 / 过 / 起 + 来 / 去',
    explanation: 'Ghép hướng chính (上, 下, 进, 出, 回, 过, 起) với 来 hoặc 去 để chỉ hướng của hành động rõ hơn. Nếu có tân ngữ chỉ nơi chốn thì đặt giữa hai phần: 走进教室来.',
    examples: [
      { hanzi: '他从楼上走下来了。', pinyin: 'Tā cóng lóu shàng zǒu xiàlai le.', meaning: 'Anh ấy từ trên lầu đi xuống rồi.' },
      { hanzi: '孩子跑出去了。', pinyin: 'Háizi pǎo chūqu le.', meaning: 'Đứa bé chạy ra ngoài rồi.' },
      { hanzi: '老师走进教室来了。', pinyin: 'Lǎoshī zǒu jìn jiàoshì lái le.', meaning: 'Thầy giáo bước vào lớp rồi.' }
    ],
    quiz: [
      { question: '"Bé chạy ra ngoài rồi" dịch đúng là:', options: ['孩子跑出去了。', '孩子出跑去了。', '孩子跑去出了。'] },
      { question: 'Khi có địa điểm, địa điểm đặt ở đâu?', options: ['Giữa hai phần của bổ ngữ như 走进教室来', 'Sau 来', 'Trước chủ ngữ'] },
      { question: '"Anh ấy đi về rồi" dịch đúng là:', options: ['他走回去了。', '他走去回了。', '他回走去了。'] }
    ]
  },
  {
    key: 'chongdong',
    level: 'HSK3',
    title: 'Lặp động từ - V + O + V + 得 + tính từ',
    pattern: 'Chủ ngữ + V + tân ngữ + V + 得 + bổ ngữ',
    explanation: 'Khi động từ có tân ngữ mà còn muốn thêm bổ ngữ trạng thái (得...), ta nhắc lại động từ: lần một đi với tân ngữ, lần hai đi với 得. Có thể bỏ động từ lần một nếu đặt tân ngữ lên trước.',
    examples: [
      { hanzi: '他说汉语说得很好。', pinyin: 'Tā shuō Hànyǔ shuō de hěn hǎo.', meaning: 'Anh ấy nói tiếng Trung rất giỏi.' },
      { hanzi: '我写汉字写得不太好。', pinyin: 'Wǒ xiě Hànzì xiě de bú tài hǎo.', meaning: 'Tôi viết chữ Hán không giỏi lắm.' },
      { hanzi: '她做饭做得很快。', pinyin: 'Tā zuòfàn zuò de hěn kuài.', meaning: 'Cô ấy nấu cơm rất nhanh.' }
    ],
    quiz: [
      { question: '"Cô ấy hát rất hay" dịch đúng là:', options: ['她唱歌唱得很好。', '她唱歌得很好。', '她唱得歌很好。'] },
      { question: 'Trong câu lặp động từ, 得 đứng ngay sau:', options: ['Động từ lần hai', 'Tân ngữ', 'Chủ ngữ'] },
      { question: '"Anh ấy lái xe rất tốt" dịch đúng là:', options: ['他开车开得很好。', '他开车得很好。', '他开得车很好。'] }
    ]
  },
  {
    key: 'bijiao-de',
    level: 'HSK3',
    title: 'So sánh với 得 và số lượng - A 比 B + V 得 + tính từ',
    pattern: 'A + V + 得 + 比 B + tính từ ; A 比 B + 早 / 多 + V + số lượng',
    explanation: 'Nói người nào làm việc gì hơn người khác: 他跑得比我快 (hoặc 他比我跑得快). Chênh lệch cụ thể đặt sau tính từ hoặc sau 早 / 晚 / 多 / 少 + động từ. Phủ định mềm dùng 不比.',
    examples: [
      { hanzi: '他跑得比我快。', pinyin: 'Tā pǎo de bǐ wǒ kuài.', meaning: 'Anh ấy chạy nhanh hơn tôi.' },
      { hanzi: '他比我早到十分钟。', pinyin: 'Tā bǐ wǒ zǎo dào shí fēnzhōng.', meaning: 'Anh ấy đến sớm hơn tôi mười phút.' },
      { hanzi: '她不比我高。', pinyin: 'Tā bù bǐ wǒ gāo.', meaning: 'Cô ấy không cao hơn tôi.' }
    ],
    quiz: [
      { question: '"Anh ấy chạy nhanh hơn tôi" dịch đúng là:', options: ['他跑得比我快。', '他比我跑快得。', '他得跑比我快。'] },
      { question: '"Anh ấy đến sớm hơn tôi 10 phút" dịch đúng là:', options: ['他比我早到十分钟。', '他早比我到十分钟。', '他比我到早十分钟了很。'] },
      { question: '不比 mang ý nghĩa:', options: ['Không hơn (bằng hoặc kém)', 'Rất nhiều', 'Hơn rất xa'] }
    ]
  },
  {
    key: 'zhuweiyu',
    level: 'HSK3',
    title: 'Câu vị ngữ chủ vị - 我头疼',
    pattern: 'Chủ ngữ lớn + (chủ ngữ nhỏ + vị ngữ)',
    explanation: 'Vị ngữ của câu bản thân là một cụm chủ vị. Dùng để miêu tả bộ phận, đặc điểm của một người hoặc sự vật: người/vật lớn đứng trước, bộ phận hay đặc điểm đứng sau và có vị ngữ riêng.',
    examples: [
      { hanzi: '我头疼。', pinyin: 'Wǒ tóu téng.', meaning: 'Tôi đau đầu.' },
      { hanzi: '他身体很好。', pinyin: 'Tā shēntǐ hěn hǎo.', meaning: 'Sức khỏe anh ấy rất tốt.' },
      { hanzi: '这个城市天气很热。', pinyin: 'Zhège chéngshì tiānqì hěn rè.', meaning: 'Thành phố này thời tiết rất nóng.' }
    ],
    quiz: [
      { question: '"Cô ấy tính tình rất tốt" dịch đúng là:', options: ['她脾气很好。', '她很好脾气。', '脾气她很好。'] },
      { question: 'Trong 我头疼, "头疼" là:', options: ['Cụm chủ vị làm vị ngữ', 'Tân ngữ', 'Bổ ngữ kết quả'] },
      { question: '"Anh ấy mắt không tốt" dịch đúng là:', options: ['他眼睛不太好。', '他不太好眼睛。', '眼睛他不太好。'] }
    ]
  },
  {
    key: 'chule-yiwai',
    level: 'HSK3',
    title: '除了...以外 - Ngoài...ra',
    pattern: '除了 + A + 以外, (还/都) + B',
    explanation: 'Dùng để nói ngoài A ra thì còn có B, hoặc ngoài A ra thì tất cả đều B.',
    examples: [
      { hanzi: '除了苹果以外，我还喜欢香蕉。', pinyin: 'Chúle píngguǒ yǐwài, wǒ hái xǐhuan xiāngjiāo.', meaning: 'Ngoài táo ra, tôi còn thích chuối.' },
      { hanzi: '除了他以外，大家都来了。', pinyin: 'Chúle tā yǐwài, dàjiā dōu lái le.', meaning: 'Ngoài anh ấy ra, mọi người đều đến rồi.' },
      { hanzi: '除了下雨以外，天气都很好。', pinyin: 'Chúle xiàyǔ yǐwài, tiānqì dōu hěn hǎo.', meaning: 'Ngoài lúc trời mưa ra, thời tiết đều rất đẹp.' }
    ],
    quiz: [
      { question: '"Ngoài tiếng Anh ra, tôi còn học tiếng Hán" dịch đúng là:', options: ['除了英语以外，我还学汉语。', '我除了英语，以外还学汉语。', '英语除了以外，我还学汉语。'] },
      { question: '除了...以外 thường đi cùng từ nào ở mệnh đề sau?', options: ['还 / 都', '就 / 才', '也不'] },
      { question: '"Ngoài chị gái ra, cả nhà tôi đều thích ăn cay" dịch đúng là:', options: ['除了姐姐以外，我家人都喜欢吃辣。', '姐姐除了以外，我家人都喜欢吃辣。', '除了我家人以外，姐姐都喜欢吃辣。'] }
    ]
  },
  {
    key: 'yue-yue',
    level: 'HSK3',
    title: '越...越... - Càng...càng...',
    pattern: '越 + A, 越 + B',
    explanation: 'Diễn tả B thay đổi theo mức độ của A, "càng A thì càng B".',
    examples: [
      { hanzi: '你越说，我越不明白。', pinyin: 'Nǐ yuè shuō, wǒ yuè bù míngbai.', meaning: 'Bạn càng nói, tôi càng không hiểu.' },
      { hanzi: '越学越有意思。', pinyin: 'Yuè xué yuè yǒu yìsi.', meaning: 'Càng học càng thấy thú vị.' },
      { hanzi: '他越忙越高兴。', pinyin: 'Tā yuè máng yuè gāoxìng.', meaning: 'Anh ấy càng bận càng vui.' }
    ],
    quiz: [
      { question: '"Càng nhìn càng thích" dịch đúng là:', options: ['越看越喜欢。', '看越喜欢越。', '越越看喜欢。'] },
      { question: 'Cấu trúc 越...越... khác 越来越 ở điểm nào?', options: ['Có 2 vế phụ thuộc lẫn nhau', 'Chỉ có 1 vế', 'Không có tính từ'] },
      { question: '"Càng chạy càng mệt" dịch đúng là:', options: ['越跑越累。', '跑越累越。', '越越跑累。'] }
    ]
  },
  {
    key: 'bujin-hai',
    level: 'HSK3',
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
    key: 'yaoshi-jiu',
    level: 'HSK3',
    title: '要是...就... - Nếu như...thì...',
    pattern: '要是 + giả thiết, 就 + kết quả',
    explanation: 'Giống 如果...就... nhưng thân mật, hay dùng trong lời nói. 要是 đứng đầu vế giả thiết, 就 đứng trước động từ ở vế kết quả. Cuối vế giả thiết có thể thêm 的话.',
    examples: [
      { hanzi: '要是你不想去，就别去了。', pinyin: 'Yàoshi nǐ bù xiǎng qù, jiù bié qù le.', meaning: 'Nếu bạn không muốn đi thì đừng đi nữa.' },
      { hanzi: '我要是有钱，就买一套大房子。', pinyin: 'Wǒ yàoshi yǒu qián, jiù mǎi yí tào dà fángzi.', meaning: 'Nếu có tiền thì tôi mua một căn nhà lớn.' },
      { hanzi: '要是天气好，我们就去公园。', pinyin: 'Yàoshi tiānqì hǎo, wǒmen jiù qù gōngyuán.', meaning: 'Nếu thời tiết tốt thì chúng ta đi công viên.' }
    ],
    quiz: [
      { question: '"Nếu mai rảnh thì tôi đến tìm bạn" dịch đúng là:', options: ['要是明天有空，我就去找你。', '要是明天有空，我去找你就。', '就明天有空，我要是去找你。'] },
      { question: '要是 thường dùng trong văn phong nào?', options: ['Nói chuyện thân mật hàng ngày', 'Văn bản pháp luật', 'Thơ cổ'] },
      { question: 'Từ nào có thể thay 要是 mà nghĩa không đổi?', options: ['如果', '因为', '虽然'] }
    ]
  },
  {
    key: 'zhiyou-cai',
    level: 'HSK3',
    title: '只有...才... - Chỉ có...mới...',
    pattern: '只有 + điều kiện duy nhất, 才 + kết quả',
    explanation: 'Điều kiện duy nhất để kết quả xảy ra. 只有 đứng đầu vế đầu, 才 đứng trước động từ ở vế sau. Khác với 只要...就... (chỉ cần là đủ), 只有...才... nói điều kiện bắt buộc.',
    examples: [
      { hanzi: '只有努力学习，才能考好。', pinyin: 'Zhǐyǒu nǔlì xuéxí, cái néng kǎo hǎo.', meaning: 'Chỉ có chăm chỉ học thì mới thi tốt được.' },
      { hanzi: '只有你去，他才会同意。', pinyin: 'Zhǐyǒu nǐ qù, tā cái huì tóngyì.', meaning: 'Chỉ có bạn đi thì anh ấy mới đồng ý.' },
      { hanzi: '只有多听多说，才能学好汉语。', pinyin: 'Zhǐyǒu duō tīng duō shuō, cái néng xuéhǎo Hànyǔ.', meaning: 'Chỉ có nghe nói nhiều mới học tốt tiếng Trung.' }
    ],
    quiz: [
      { question: '"Chỉ có luyện tập mới tiến bộ" dịch đúng là:', options: ['只有练习，才能进步。', '只有练习，就能进步。', '才有练习，只能进步。'] },
      { question: '只有...才... khác 只要...就... ở điểm nào?', options: ['只有 nói điều kiện bắt buộc, duy nhất', '只有 nói điều kiện dễ hơn', 'Hai cấu trúc giống hệt'] },
      { question: 'Vế sau của 只有...才... dùng:', options: ['才', '就', '也'] }
    ]
  },
  {
    key: 'weile',
    level: 'HSK3',
    title: '为了 - Để, vì (mục đích)',
    pattern: '为了 + mục đích, ...',
    explanation: 'Nêu mục đích của hành động. 为了 đứng đầu vế nói mục đích, có thể theo sau là cụm động từ hoặc danh từ. Thường đứng đầu câu, sau đó là hành động.',
    examples: [
      { hanzi: '为了学好汉语，他每天都听录音。', pinyin: 'Wèile xuéhǎo Hànyǔ, tā měi tiān dōu tīng lùyīn.', meaning: 'Để học tốt tiếng Trung, ngày nào anh ấy cũng nghe băng.' },
      { hanzi: '为了健康，他不再抽烟了。', pinyin: 'Wèile jiànkāng, tā bú zài chōuyān le.', meaning: 'Vì sức khỏe, anh ấy không hút thuốc nữa.' },
      { hanzi: '我们为了你的生日准备了蛋糕。', pinyin: 'Wǒmen wèile nǐ de shēngrì zhǔnbèile dàngāo.', meaning: 'Chúng tôi chuẩn bị bánh vì sinh nhật của bạn.' }
    ],
    quiz: [
      { question: '"Để mua nhà, anh ấy tiết kiệm tiền" dịch đúng là:', options: ['为了买房子，他存钱。', '为了他存钱，买房子。', '买房子为了，他存钱。'] },
      { question: '为了 diễn tả điều gì?', options: ['Mục đích', 'Nguyên nhân đã xảy ra', 'Kết quả'] },
      { question: '"Vì gia đình, anh ấy làm việc rất vất vả" dịch đúng là:', options: ['为了家人，他工作很辛苦。', '他为家人了，工作很辛苦。', '为了他工作，家人很辛苦。'] }
    ]
  },
  {
    key: 'duilai-shuo',
    level: 'HSK3',
    title: '对...来说 - Đối với...mà nói',
    pattern: '对 + người / nhóm + 来说, ...',
    explanation: 'Nêu góc nhìn của một người hoặc một nhóm. Đặt ở đầu câu, theo sau là nhận xét. Có thể thay bằng 对...而言 trong văn viết.',
    examples: [
      { hanzi: '对我来说，汉字很难。', pinyin: 'Duì wǒ lái shuō, Hànzì hěn nán.', meaning: 'Đối với tôi, chữ Hán rất khó.' },
      { hanzi: '对学生来说，时间非常重要。', pinyin: 'Duì xuésheng lái shuō, shíjiān fēicháng zhòngyào.', meaning: 'Đối với học sinh, thời gian rất quan trọng.' },
      { hanzi: '对中国人来说，春节是最重要的节日。', pinyin: 'Duì Zhōngguó rén lái shuō, Chūnjié shì zuì zhòngyào de jiérì.', meaning: 'Đối với người Trung Quốc, Tết là ngày lễ quan trọng nhất.' }
    ],
    quiz: [
      { question: '"Đối với tôi, việc này rất đơn giản" dịch đúng là:', options: ['对我来说，这件事很简单。', '来说对我，这件事很简单。', '对来说我，这件事很简单。'] },
      { question: 'Phần nào đứng ngay sau 对...来说?', options: ['Nhận xét hoặc đánh giá', 'Danh từ chỉ nơi chốn', 'Từ chỉ thời gian'] },
      { question: '"Đối với trẻ em" dịch đúng là:', options: ['对孩子来说', '孩子来说对', '来说孩子对'] }
    ]
  },
  {
    key: 'yidianr-bu',
    level: 'HSK3',
    title: '一点儿也不 / 一...也不 - Nhấn mạnh phủ định',
    pattern: '一点儿 + 也 / 都 + 不 / 没 ; 一 + lượng từ + 也 / 都 + 不 / 没',
    explanation: 'Phủ định hoàn toàn, nghĩa là "một chút cũng không, một ... cũng không". Sau 一 là lượng từ (có thể kèm danh từ), tiếp theo là 也 hoặc 都, rồi đến 不 hay 没.',
    examples: [
      { hanzi: '我一点儿也不累。', pinyin: 'Wǒ yìdiǎnr yě bú lèi.', meaning: 'Tôi không mệt chút nào.' },
      { hanzi: '他一句话也不说。', pinyin: 'Tā yí jù huà yě bù shuō.', meaning: 'Anh ấy không nói một câu nào.' },
      { hanzi: '我一个人也不认识。', pinyin: 'Wǒ yí gè rén yě bú rènshi.', meaning: 'Tôi không quen một ai cả.' }
    ],
    quiz: [
      { question: '"Tôi không đói chút nào" dịch đúng là:', options: ['我一点儿也不饿。', '我也一点儿不饿。', '我不一点儿也饿。'] },
      { question: 'Sau 一 + lượng từ trong cấu trúc này là:', options: ['也 hoặc 都 rồi 不 / 没', '吗', '了'] },
      { question: '"Hôm nay anh ấy không ăn gì cả" dịch đúng là:', options: ['今天他一口饭也没吃。', '今天他也一口饭没吃。', '今天他一口饭没也吃。'] }
    ]
  },
  {
    key: 'fanwen',
    level: 'HSK3',
    title: 'Câu hỏi tu từ - 不是...吗？ / 难道...吗？',
    pattern: '不是...吗？ ; 难道...吗？',
    explanation: 'Dùng câu hỏi để nhấn mạnh điều ai cũng biết hoặc thể hiện ngạc nhiên. 不是...吗 nghĩa "chẳng phải ... sao", 难道...吗 nghĩa "chẳng lẽ ... sao". Người nói không thật sự cần đáp án.',
    examples: [
      { hanzi: '你不是去过北京吗？', pinyin: 'Nǐ búshì qùguo Běijīng ma?', meaning: 'Chẳng phải bạn đã đến Bắc Kinh rồi sao?' },
      { hanzi: '难道你不知道吗？', pinyin: 'Nándào nǐ bù zhīdào ma?', meaning: 'Chẳng lẽ bạn không biết sao?' },
      { hanzi: '这不是你的书吗？', pinyin: 'Zhè búshì nǐ de shū ma?', meaning: 'Đây chẳng phải sách của bạn sao?' }
    ],
    quiz: [
      { question: '难道...吗？ biểu thị:', options: ['Chẳng lẽ... sao (ngạc nhiên, nhấn mạnh)', 'Hỏi để biết thông tin mới', 'Xin phép'] },
      { question: '"Chẳng phải bạn nói rồi sao?" dịch đúng là:', options: ['你不是说过吗？', '你说不是过吗？', '不是你说过了？'] },
      { question: 'Câu hỏi tu từ 不是...吗 thực chất ngụ ý:', options: ['Điều đó đúng, ai cũng biết', 'Điều đó sai', 'Tôi không biết'] }
    ]
  }
]
