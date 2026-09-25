// Diem ngu phap HSK2 - tiep noi grammar.js (HSK1). Cung cau truc, cung do
// nghiem ngat ve pinyin/thanh dieu da kiem tra thu cong.
export const HSK2_GRAMMAR = [
  {
    key: 'zhengzai',
    level: 'HSK2',
    title: '正在...呢 - Đang làm gì',
    pattern: '正在 + động từ (+ 呢)',
    explanation: 'Diễn tả hành động đang diễn ra tại thời điểm nói, giống "đang" trong tiếng Việt.',
    examples: [
      { hanzi: '我正在吃饭呢。', pinyin: 'Wǒ zhèngzài chīfàn ne.', meaning: 'Tôi đang ăn cơm.' },
      { hanzi: '他正在打电话。', pinyin: 'Tā zhèngzài dǎ diànhuà.', meaning: 'Anh ấy đang gọi điện thoại.' },
      { hanzi: '你正在做什么呢？', pinyin: 'Nǐ zhèngzài zuò shénme ne?', meaning: 'Bạn đang làm gì vậy?' }
    ],
    quiz: [
      { question: '"Tôi đang xem tivi" dịch đúng là:', options: ['我正在看电视。', '我看正在电视。', '我电视正在看。'] },
      { question: 'Từ nào diễn tả hành động đang diễn ra?', options: ['正在', '已经', '就要'] },
      { question: '他____打电话呢。 Chọn từ đúng:', options: ['正在', '了', '过'] }
    ]
  },
  {
    key: 'bi',
    level: 'HSK2',
    title: '比 - So sánh hơn',
    pattern: 'A + 比 + B + tính từ',
    explanation: 'Dùng để so sánh A hơn B ở một đặc điểm nào đó.',
    examples: [
      { hanzi: '今天比昨天冷。', pinyin: 'Jīntiān bǐ zuótiān lěng.', meaning: 'Hôm nay lạnh hơn hôm qua.' },
      { hanzi: '他比我高。', pinyin: 'Tā bǐ wǒ gāo.', meaning: 'Anh ấy cao hơn tôi.' },
      { hanzi: '这个比那个贵。', pinyin: 'Zhège bǐ nàge guì.', meaning: 'Cái này đắt hơn cái kia.' }
    ],
    quiz: [
      { question: '"Chị gái tôi lớn hơn tôi" dịch đúng là:', options: ['我姐姐比我大。', '我姐姐大比我。', '比我姐姐大。'] },
      { question: 'Cấu trúc đúng của câu so sánh 比 là:', options: ['A + 比 + B + tính từ', 'A + tính từ + 比 + B', '比 + A + B + tính từ'] },
      { question: '"Quyển sách này dày hơn quyển kia" dịch đúng là:', options: ['这本书比那本厚。', '这本书厚比那本。', '比这本书那本厚。'] }
    ]
  },
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
    key: 'ba',
    level: 'HSK2',
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
    key: 'chule-yiwai',
    level: 'HSK2',
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
  }
]
