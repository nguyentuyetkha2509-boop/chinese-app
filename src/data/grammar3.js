// Diem ngu phap HSK3 - tiep noi grammar.js (HSK1) va grammar2.js (HSK2).
export const HSK3_GRAMMAR = [
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
    key: 'shi-de',
    level: 'HSK3',
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
    key: 'yuelaiyue',
    level: 'HSK3',
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
    key: 'budan-erqie',
    level: 'HSK3',
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
    key: 'zhiyao-jiu',
    level: 'HSK3',
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
    level: 'HSK3',
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
  },
  {
    key: 'zhe',
    level: 'HSK3',
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
    level: 'HSK3',
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
    key: 'jinguan-haishi',
    level: 'HSK3',
    title: '尽管...还是... - Mặc dù...vẫn...',
    pattern: '尽管 + mệnh đề 1, 还是 + mệnh đề 2',
    explanation: 'Tương tự 虽然...但是... nhưng nhấn mạnh hơn: dù có điều kiện bất lợi vẫn giữ nguyên kết quả.',
    examples: [
      { hanzi: '尽管很累，他还是坚持工作。', pinyin: 'Jǐnguǎn hěn lèi, tā háishi jiānchí gōngzuò.', meaning: 'Mặc dù rất mệt, anh ấy vẫn kiên trì làm việc.' },
      { hanzi: '尽管下雨，我们还是出发了。', pinyin: 'Jǐnguǎn xiàyǔ, wǒmen háishi chūfā le.', meaning: 'Mặc dù trời mưa, chúng tôi vẫn xuất phát.' },
      { hanzi: '尽管价格贵，他还是买了。', pinyin: 'Jǐnguǎn jiàgé guì, tā háishi mǎi le.', meaning: 'Mặc dù giá đắt, anh ấy vẫn mua.' }
    ],
    quiz: [
      { question: '"Mặc dù khó, tôi vẫn muốn học" dịch đúng là:', options: ['尽管难，我还是想学。', '还是难，尽管我想学。', '难尽管，还是我想学。'] },
      { question: '尽管...还是... gần nghĩa nhất với cấu trúc nào đã học?', options: ['虽然...但是...', '因为...所以...', '只要...就...'] },
      { question: '"Mặc dù trời lạnh, anh ấy vẫn đi bơi" dịch đúng là:', options: ['尽管天冷，他还是去游泳。', '还是天冷，尽管他去游泳。', '天冷尽管，还是他去游泳。'] }
    ]
  }
]
