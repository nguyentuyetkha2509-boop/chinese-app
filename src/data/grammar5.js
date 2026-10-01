// Ngu phap HSK5 theo chuan HSK 3.0 (21 diem). Xem ghi chu dau grammar.js.
export const HSK5_GRAMMAR = [
  {
    key: 'bude',
    level: 'HSK5',
    title: 'V + 不得 - Không được, không thể',
    pattern: 'Động từ + 不得',
    explanation: 'V + 不得 diễn tả không nên hoặc không thể làm vì lý do hoàn cảnh, quy định hay hậu quả. Hay đi với 马虎不得 (không được cẩu thả), 吃不得 (không ăn được), 动不得 (không được động vào), 笑不得 (không cười nổi). Khác V不+kết quả ở chỗ nhấn mạnh sự cấm kỵ hoặc điều kiện không cho phép.',
    examples: [
      { hanzi: '这种药吃不得。', pinyin: 'Zhè zhǒng yào chī bude.', meaning: 'Loại thuốc này không được uống.' },
      { hanzi: '这件事马虎不得。', pinyin: 'Zhè jiàn shì mǎhu bude.', meaning: 'Việc này không được cẩu thả.' },
      { hanzi: '他的话信不得。', pinyin: 'Tā de huà xìn bude.', meaning: 'Lời anh ta không tin được.' }
    ],
    quiz: [
      { question: '"Việc này không được cẩu thả" dịch đúng là:', options: ['这件事马虎不得。', '这件事不得马虎。', '这件事马虎得不。'] },
      { question: 'V + 不得 diễn tả:', options: ['Không nên, không thể (do hoàn cảnh, quy định)', 'Có thể làm được', 'Đã làm xong'] },
      { question: '"Lời anh ta không tin được" dịch đúng là:', options: ['他的话信不得。', '他的话不得信。', '他的话信得不。'] }
    ]
  },
  {
    key: 'qushi-shijian',
    level: 'HSK5',
    title: 'Bổ ngữ xu hướng chỉ thời gian - 起来 / 下去',
    pattern: 'Động từ + 起来 (bắt đầu) / 下去 (tiếp tục)',
    explanation: '起来 sau động từ nói hành động bắt đầu và tiếp diễn: 笑起来 (bật cười), 唱起来 (hát lên). 下去 nói hành động tiếp tục: 说下去 (nói tiếp), 学下去 (học tiếp).',
    examples: [
      { hanzi: '听到这个消息，大家都笑起来了。', pinyin: 'Tīngdào zhège xiāoxi, dàjiā dōu xiào qǐlai le.', meaning: 'Nghe tin này mọi người đều bật cười.' },
      { hanzi: '你说下去，我在听。', pinyin: 'Nǐ shuō xiàqu, wǒ zài tīng.', meaning: 'Bạn nói tiếp đi, tôi đang nghe.' },
      { hanzi: '天气慢慢冷起来了。', pinyin: 'Tiānqì mànmàn lěng qǐlai le.', meaning: 'Trời dần dần lạnh lên.' }
    ],
    quiz: [
      { question: '下去 sau động từ có nghĩa là:', options: ['Tiếp tục hành động', 'Bắt đầu hành động', 'Kết thúc hành động'] },
      { question: '"Mưa bắt đầu rơi" nói là:', options: ['下起雨来了。', '下下去雨了。', '雨下起来了下。'] },
      { question: '"Hãy học tiếp, đừng bỏ cuộc" dịch đúng là:', options: ['继续学下去，不要放弃。', '继续学起来，不要放弃。', '继续下去学，不要放弃。'] }
    ]
  },
  {
    key: 'chengdu-buyu2',
    level: 'HSK5',
    title: 'Bổ ngữ mức độ nâng cao - 得不得了 / 得厉害 / 坏了',
    pattern: 'Tính từ + 得不得了 / 得厉害 ; V / adj + 坏了 / 透了',
    explanation: 'Diễn tả mức độ rất cao. 得不得了 là "không chịu nổi", 得厉害 là "dữ dội", 坏了 và 透了 là "hỏng bét, thấu xương". Thường dùng khi bày tỏ cảm xúc hoặc thể trạng mạnh.',
    examples: [
      { hanzi: '今天热得不得了。', pinyin: 'Jīntiān rè de bùdéliǎo.', meaning: 'Hôm nay nóng không chịu nổi.' },
      { hanzi: '他头疼得厉害。', pinyin: 'Tā tóu téng de lìhai.', meaning: 'Anh ấy đau đầu dữ dội.' },
      { hanzi: '我今天累坏了。', pinyin: 'Wǒ jīntiān lèihuài le.', meaning: 'Hôm nay tôi mệt rã rời.' }
    ],
    quiz: [
      { question: '"Mệt rã rời" nói là:', options: ['累坏了', '坏累了', '累了坏'] },
      { question: '得不得了 diễn tả:', options: ['Mức độ rất cao', 'Mức độ thấp', 'Nguyên nhân'] },
      { question: '"Tôi vui không chịu nổi" dịch đúng là:', options: ['我高兴得不得了。', '我不得了高兴得。', '我高兴不得了得。'] }
    ]
  },
  {
    key: 'zhuangtai-buyu2',
    level: 'HSK5',
    title: 'Bổ ngữ trạng thái nâng cao - V / adj + 得 + cụm từ',
    pattern: 'Động từ + 得 + cụm động từ / cụm chủ vị',
    explanation: 'Sau 得 không chỉ là một tính từ mà có thể là cả một cụm từ để miêu tả kết quả hoặc trạng thái chi tiết hơn: 笑得肚子疼 (cười đau cả bụng), 高兴得说不出话来 (vui đến không nói nên lời).',
    examples: [
      { hanzi: '他笑得肚子都疼了。', pinyin: 'Tā xiào de dùzi dōu téng le.', meaning: 'Anh ấy cười đến đau cả bụng.' },
      { hanzi: '她高兴得说不出话来。', pinyin: 'Tā gāoxìng de shuō bu chū huà lái.', meaning: 'Cô ấy vui đến mức không nói nên lời.' },
      { hanzi: '他跑得满头大汗。', pinyin: 'Tā pǎo de mǎntóu-dàhàn.', meaning: 'Anh ấy chạy đến mướt mồ hôi.' }
    ],
    quiz: [
      { question: 'Sau 得 trong cấu trúc này có thể là:', options: ['Cụm từ miêu tả kết quả', 'Chỉ có số từ', 'Chỉ có danh từ'] },
      { question: '"Cô ấy khóc đến mắt đỏ hoe" dịch đúng là:', options: ['她哭得眼睛都红了。', '她哭眼睛得都红了。', '她得哭眼睛都红了。'] },
      { question: '得 trong cấu trúc này đứng:', options: ['Ngay sau động từ hoặc tính từ', 'Đầu câu', 'Cuối câu'] }
    ]
  },
  {
    key: 'youzhe',
    level: 'HSK5',
    title: '有着 / V有 - Có, mang',
    pattern: 'S + 有着 + O ; S + V + 有 + O',
    explanation: '有着 là cách nói trang trọng của 有, thường dùng với danh từ trừu tượng (历史, 影响, 关系): có lịch sử lâu đời. V + 有 diễn tả vật gì được ghi, viết, gắn trên đó: 上面写有 (trên đó có viết).',
    examples: [
      { hanzi: '这座城市有着悠久的历史。', pinyin: 'Zhè zuò chéngshì yǒuzhe yōujiǔ de lìshǐ.', meaning: 'Thành phố này có lịch sử lâu đời.' },
      { hanzi: '墙上挂有一张地图。', pinyin: 'Qiáng shàng guà yǒu yì zhāng dìtú.', meaning: 'Trên tường có treo một tấm bản đồ.' },
      { hanzi: '这件事有着重要的意义。', pinyin: 'Zhè jiàn shì yǒuzhe zhòngyào de yìyì.', meaning: 'Việc này có ý nghĩa quan trọng.' }
    ],
    quiz: [
      { question: '有着 thường đi với:', options: ['Danh từ trừu tượng, mang sắc thái trang trọng', 'Số từ nhỏ', 'Từ chỉ giờ giấc'] },
      { question: '"Hai nước có quan hệ chặt chẽ" dịch đúng là:', options: ['两国有着密切的关系。', '两国着有密切的关系。', '两国有密切着关系。'] },
      { question: '有着 so với 有 mang sắc thái:', options: ['Trang trọng hơn', 'Thân mật hơn', 'Phủ định'] }
    ]
  },
  {
    key: 'yinian-beidong',
    level: 'HSK5',
    title: 'Câu bị động ý niệm - Vật làm chủ ngữ, không cần 被',
    pattern: 'Chủ ngữ (vật) + V + bổ ngữ / đã + V',
    explanation: 'Trong tiếng Trung, nhiều câu có chủ ngữ là vật mà nghĩa là bị động nhưng không dùng 被: 饭做好了 (cơm nấu xong rồi), 信寄出去了 (thư đã gửi đi). Câu chủ yếu tả kết quả, trạng thái.',
    examples: [
      { hanzi: '饭做好了。', pinyin: 'Fàn zuòhǎo le.', meaning: 'Cơm đã nấu xong.' },
      { hanzi: '信已经寄出去了。', pinyin: 'Xìn yǐjīng jì chūqu le.', meaning: 'Thư đã gửi đi rồi.' },
      { hanzi: '问题解决了。', pinyin: 'Wèntí jiějué le.', meaning: 'Vấn đề đã được giải quyết.' }
    ],
    quiz: [
      { question: '"Bài tập làm xong rồi" dịch đúng là:', options: ['作业做完了。', '作业被做完了。', '作业把做完了。'] },
      { question: 'Câu bị động ý niệm có đặc điểm:', options: ['Chủ ngữ là vật chịu tác động, không dùng 被', 'Luôn dùng 被', 'Luôn có 把'] },
      { question: '"Cửa đã mở rồi" dịch đúng là:', options: ['门开了。', '门被开了的。', '门把开了。'] }
    ]
  },
  {
    key: 'shi-ling',
    level: 'HSK5',
    title: '使 / 令 / 让 - Khiến cho (nghĩa sai khiến)',
    pattern: 'A + 使 / 令 / 让 + người + V / adj',
    explanation: 'Dùng chủ ngữ là sự việc để nói nó làm cho ai đó có cảm giác hay trạng thái gì. 使 và 令 hơi trang trọng; 让 thường gặp trong khẩu ngữ. Theo sau là động từ tâm lý hoặc tính từ.',
    examples: [
      { hanzi: '这个消息使大家很高兴。', pinyin: 'Zhège xiāoxi shǐ dàjiā hěn gāoxìng.', meaning: 'Tin này khiến mọi người rất vui.' },
      { hanzi: '他的话令我很感动。', pinyin: 'Tā de huà lìng wǒ hěn gǎndòng.', meaning: 'Lời anh ấy làm tôi rất cảm động.' },
      { hanzi: '这件事让我很生气。', pinyin: 'Zhè jiàn shì ràng wǒ hěn shēngqì.', meaning: 'Việc này làm tôi rất tức giận.' }
    ],
    quiz: [
      { question: '"Điều này làm tôi rất lo" dịch đúng là:', options: ['这件事让我很担心。', '这件事我让很担心。', '让这件事我很担心。'] },
      { question: 'Trong loại câu này, chủ ngữ thường là:', options: ['Sự việc hoặc lời nói', 'Một số từ', 'Địa điểm'] },
      { question: 'Từ nào mang sắc thái trang trọng, văn viết?', options: ['令', '叫', '给'] }
    ]
  },
  {
    key: 'genxiangbi',
    level: 'HSK5',
    title: '跟...相比 / 比 + số lượng - So với..., hơn bao nhiêu',
    pattern: '跟 + B + 相比，A ... ; A + tính từ + B + số lượng',
    explanation: '跟...相比 là cách nêu sự so sánh một cách khách quan, tương tự "so với". Mệnh đề sau nói điểm khác biệt. Còn có mẫu A + tính từ + B + số lượng (A lớn hơn B bao nhiêu).',
    examples: [
      { hanzi: '跟去年相比，今年的房价上涨了。', pinyin: 'Gēn qùnián xiāngbǐ, jīnnián de fángjià shàngzhǎng le.', meaning: 'So với năm ngoái, giá nhà năm nay đã tăng.' },
      { hanzi: '跟城市相比，农村比较安静。', pinyin: 'Gēn chéngshì xiāngbǐ, nóngcūn bǐjiào ānjìng.', meaning: 'So với thành phố, nông thôn yên tĩnh hơn.' },
      { hanzi: '他高我五厘米。', pinyin: 'Tā gāo wǒ wǔ límǐ.', meaning: 'Anh ấy cao hơn tôi năm cen-ti-mét.' }
    ],
    quiz: [
      { question: '跟...相比 nghĩa là:', options: ['So với...', 'Cùng với...', 'Đối với...'] },
      { question: '"So với năm ngoái" nói là:', options: ['跟去年相比', '去年相比跟', '相比去年跟'] },
      { question: '"Anh ấy lớn hơn tôi hai tuổi" nói là:', options: ['他大我两岁。', '他我大两岁。', '他两岁大我。'] }
    ]
  },
  {
    key: 'jinguan-haishi',
    level: 'HSK5',
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
  },
  {
    key: 'jishi-ye',
    level: 'HSK5',
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
    key: 'zai-ye',
    level: 'HSK5',
    title: '再...也... - Dù...đến mấy cũng...',
    pattern: '再 + tính từ / động từ + 也 + kết quả',
    explanation: 'Nhấn mạnh dù mức độ cao đến đâu thì kết quả vẫn không đổi. 再 đứng trước tính từ hoặc động từ, 也 đứng trước vế sau.',
    examples: [
      { hanzi: '再难，我也要学下去。', pinyin: 'Zài nán, wǒ yě yào xué xiàqu.', meaning: 'Khó đến mấy tôi cũng học tiếp.' },
      { hanzi: '他再忙，也会回家吃饭。', pinyin: 'Tā zài máng, yě huì huíjiā chīfàn.', meaning: 'Anh ấy bận đến mấy cũng về nhà ăn cơm.' },
      { hanzi: '价格再便宜，质量不好我也不买。', pinyin: 'Jiàgé zài piányi, zhìliàng bù hǎo wǒ yě bù mǎi.', meaning: 'Giá rẻ đến mấy mà chất lượng không tốt tôi cũng không mua.' }
    ],
    quiz: [
      { question: '"Mệt đến mấy tôi cũng làm" dịch đúng là:', options: ['再累我也要做。', '再累我才要做。', '再累我就不做。'] },
      { question: '再...也... diễn tả:', options: ['Dù mức độ cao nhưng kết quả không đổi', 'Hành động lặp lại', 'Điều kiện duy nhất'] },
      { question: 'Từ dùng ở vế sau là:', options: ['也', '就', '才'] }
    ]
  },
  {
    key: 'zaiyebu',
    level: 'HSK5',
    title: '再也不 / 再也没 - Không bao giờ nữa',
    pattern: '再也 + 不 / 没 + động từ',
    explanation: 'Nhấn mạnh phủ định kéo dài từ nay về sau (再也不) hoặc từ một thời điểm đến nay (再也没). Thường đi kèm tâm trạng quyết tâm hay tiếc nuối.',
    examples: [
      { hanzi: '我再也不抽烟了。', pinyin: 'Wǒ zài yě bù chōuyān le.', meaning: 'Tôi sẽ không bao giờ hút thuốc nữa.' },
      { hanzi: '他走了以后，再也没有回来。', pinyin: 'Tā zǒule yǐhòu, zài yě méiyǒu huílai.', meaning: 'Từ khi anh ấy đi, không bao giờ trở lại.' },
      { hanzi: '我再也不会相信他了。', pinyin: 'Wǒ zài yě bú huì xiāngxìn tā le.', meaning: 'Tôi sẽ không bao giờ tin anh ta nữa.' }
    ],
    quiz: [
      { question: '"Tôi sẽ không bao giờ đến đó nữa" dịch đúng là:', options: ['我再也不去那儿了。', '我再也去不那儿了。', '我不再也去那儿了。'] },
      { question: '再也没 thường chỉ:', options: ['Việc chưa từng xảy ra lại từ một thời điểm', 'Việc sẽ làm', 'Điều kiện'] },
      { question: 'Câu 再也不...了 thể hiện:', options: ['Quyết tâm không làm nữa', 'Dự định làm lần sau', 'Đề nghị'] }
    ]
  },
  {
    key: 'ke-qiangdiao',
    level: 'HSK5',
    title: '可 - Nhấn mạnh (cảnh báo, nhắc nhở)',
    pattern: '可 + 要 / 别 / 不 / 是 ...',
    explanation: 'Phó từ 可 đứng trước động từ để nhấn mạnh giọng điệu, thường để nhắc nhở hoặc bày tỏ cảm xúc. 可别... là "đừng có", 可要... là "nhớ phải". Dùng nhiều trong khẩu ngữ.',
    examples: [
      { hanzi: '你可别忘了带钥匙。', pinyin: 'Nǐ kě bié wàngle dài yàoshi.', meaning: 'Bạn đừng có quên mang chìa khóa đấy.' },
      { hanzi: '这件事可不简单。', pinyin: 'Zhè jiàn shì kě bù jiǎndān.', meaning: 'Việc này đâu có đơn giản.' },
      { hanzi: '你可要小心点儿。', pinyin: 'Nǐ kě yào xiǎoxīn diǎnr.', meaning: 'Bạn nhớ phải cẩn thận đấy.' }
    ],
    quiz: [
      { question: '可别 + động từ có nghĩa:', options: ['Đừng có (nhắc nhở mạnh)', 'Có thể', 'Không cần'] },
      { question: '"Đừng đến muộn đấy" dịch đúng là:', options: ['你可别迟到。', '你别可迟到。', '你迟到可别。'] },
      { question: '可 trong những câu này dùng để:', options: ['Nhấn mạnh giọng điệu', 'Chỉ thời gian', 'Chỉ nơi chốn'] }
    ]
  },
  {
    key: 'chufei-cai',
    level: 'HSK5',
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
    key: 'yidan-jiu',
    level: 'HSK5',
    title: '一旦...就... - Một khi...thì...',
    pattern: '一旦 + điều kiện (thường khó đảo ngược), 就 + kết quả',
    explanation: 'Diễn tả một khi điều gì đó xảy ra (thường bất ngờ hoặc khó thay đổi), thì kết quả sẽ theo sau một cách tất yếu.',
    examples: [
      { hanzi: '一旦养成习惯，就很难改变。', pinyin: 'Yídàn yǎngchéng xíguàn, jiù hěn nán gǎibiàn.', meaning: 'Một khi đã hình thành thói quen, thì rất khó thay đổi.' },
      { hanzi: '一旦发现问题，请立刻报告。', pinyin: 'Yídàn fāxiàn wèntí, qǐng lìkè bàogào.', meaning: 'Một khi phát hiện vấn đề, xin hãy báo cáo ngay lập tức.' },
      { hanzi: '信任一旦失去，就很难再找回来。', pinyin: 'Xìnrèn yídàn shīqù, jiù hěn nán zài zhǎo huílái.', meaning: 'Niềm tin một khi đã mất đi, thì rất khó tìm lại được.' }
    ],
    quiz: [
      { question: '一旦...就... thường dùng cho loại tình huống nào?', options: ['Việc một khi xảy ra thì khó đảo ngược/kéo theo kết quả tất yếu', 'Việc chắc chắn không bao giờ xảy ra', 'Hai hành động xảy ra đồng thời'] },
      { question: '"Một khi quyết định rồi, thì đừng hối hận" dịch đúng là:', options: ['一旦决定了，就别后悔。', '一旦决定了，反而别后悔。', '决定了一旦，就别后悔。'] },
      { question: '"Sức khỏe một khi mất đi thì tiền bạc cũng vô nghĩa" dịch đúng là:', options: ['健康一旦失去，钱也没有意义了。', '健康何况失去，钱也没有意义了。', '一旦健康失去钱也没有意义了。'] }
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
  },
  {
    key: 'weideshi',
    level: 'HSK5',
    title: '为的是 / 以便 / 因而 - Chỉ mục đích, kết quả',
    pattern: '...，为的是 / 以便 + mục đích ; ...，因而 + kết quả',
    explanation: '为的是 và 以便 đứng ở vế sau để nêu mục đích của hành động ở vế trước. 因而 nêu kết quả suy ra từ vế trước và dùng trong văn viết.',
    examples: [
      { hanzi: '他每天早起，为的是锻炼身体。', pinyin: 'Tā měi tiān zǎoqǐ, wèideshì duànliàn shēntǐ.', meaning: 'Anh ấy ngày nào cũng dậy sớm để rèn luyện sức khỏe.' },
      { hanzi: '请留下你的电话，以便我们联系你。', pinyin: 'Qǐng liúxià nǐ de diànhuà, yǐbiàn wǒmen liánxì nǐ.', meaning: 'Xin để lại số điện thoại để chúng tôi liên lạc với bạn.' },
      { hanzi: '他很努力，因而取得了好成绩。', pinyin: "Tā hěn nǔlì, yīn'ér qǔdéle hǎo chéngjì.", meaning: 'Anh ấy rất chăm chỉ nên đạt kết quả tốt.' }
    ],
    quiz: [
      { question: '"Để tiện liên lạc" nói là:', options: ['以便联系', '以后联系', '以为联系'] },
      { question: '因而 thể hiện:', options: ['Kết quả', 'Điều kiện', 'Mục đích'] },
      { question: '为的是 đứng ở:', options: ['Vế sau, nêu mục đích', 'Cuối câu hỏi', 'Trước chủ ngữ vế đầu'] }
    ]
  },
  {
    key: 'meiyou-jiu-meiyou',
    level: 'HSK5',
    title: '没有...就没有... - Không có...thì không có...',
    pattern: '没有 + A，就没有 + B',
    explanation: 'Nhấn mạnh A là điều kiện cần thiết để có B. Nghĩa là nếu thiếu A thì không thể có B. Hay dùng để bày tỏ lòng biết ơn hoặc nhấn mạnh tầm quan trọng.',
    examples: [
      { hanzi: '没有你的帮助，就没有我的今天。', pinyin: 'Méiyǒu nǐ de bāngzhù, jiù méiyǒu wǒ de jīntiān.', meaning: 'Không có sự giúp đỡ của bạn thì không có tôi ngày hôm nay.' },
      { hanzi: '没有努力，就没有成功。', pinyin: 'Méiyǒu nǔlì, jiù méiyǒu chénggōng.', meaning: 'Không cố gắng thì không có thành công.' },
      { hanzi: '没有水，就没有生命。', pinyin: 'Méiyǒu shuǐ, jiù méiyǒu shēngmìng.', meaning: 'Không có nước thì không có sự sống.' }
    ],
    quiz: [
      { question: 'Cấu trúc này nhấn mạnh:', options: ['A là điều kiện cần để có B', 'A và B không liên quan', 'B xảy ra trước A'] },
      { question: '"Không có thời gian thì không thể học" dịch đúng là:', options: ['没有时间，就没有学习。', '有时间，就没有学习。', '没有时间，才没有学习。'] },
      { question: 'Vế sau của cấu trúc dùng:', options: ['就没有', '才有', '也有'] }
    ]
  },
  {
    key: 'conglaikan',
    level: 'HSK5',
    title: '从...来看 / 在...看来 / 拿...来说 - Nhìn từ...; theo...; lấy...mà nói',
    pattern: '从 / 拿 + danh từ + 来看 / 来说 ; 在 + người + 看来',
    explanation: 'Nêu góc nhìn, căn cứ hoặc lấy ví dụ để đánh giá. 从...来看: xét từ. 在...看来: theo quan điểm của ai. 拿...来说: lấy ... làm ví dụ.',
    examples: [
      { hanzi: '从价格来看，这个房子不贵。', pinyin: 'Cóng jiàgé lái kàn, zhège fángzi bú guì.', meaning: 'Xét về giá, căn nhà này không đắt.' },
      { hanzi: '在我看来，这是个好办法。', pinyin: 'Zài wǒ kànlái, zhè shì gè hǎo bànfǎ.', meaning: 'Theo tôi, đây là cách hay.' },
      { hanzi: '拿汉语来说，声调是最难的部分。', pinyin: 'Ná Hànyǔ lái shuō, shēngdiào shì zuì nán de bùfen.', meaning: 'Lấy tiếng Trung làm ví dụ, thanh điệu là phần khó nhất.' }
    ],
    quiz: [
      { question: '"Theo tôi" nói là:', options: ['在我看来', '对我看来', '从我看来'] },
      { question: '拿...来说 dùng để:', options: ['Lấy làm ví dụ', 'Xin phép', 'Hỏi giá'] },
      { question: '"Xét về chất lượng" dịch đúng là:', options: ['从质量来看', '在质量来看', '对质量看来'] }
    ]
  },
  {
    key: 'daowei-zhi',
    level: 'HSK5',
    title: '到...为止 / 够...的 - Cho đến...; khá...lắm',
    pattern: '到 + mốc + 为止 ; 够 + tính từ + 的',
    explanation: '到...为止: cho đến mốc nào đó thì dừng (thời gian, số lượng). 够...的: dùng để nhận xét mức độ đủ cao, thường mang ý đánh giá hoặc cảm thán ("khá là", "quả là").',
    examples: [
      { hanzi: '到现在为止，我已经学了五百个汉字。', pinyin: 'Dào xiànzài wéizhǐ, wǒ yǐjīng xuéle wǔbǎi gè Hànzì.', meaning: 'Cho đến nay tôi đã học năm trăm chữ Hán.' },
      { hanzi: '今天的活动到下午五点为止。', pinyin: 'Jīntiān de huódòng dào xiàwǔ wǔ diǎn wéizhǐ.', meaning: 'Hoạt động hôm nay đến năm giờ chiều là kết thúc.' },
      { hanzi: '这个房间够大的。', pinyin: 'Zhège fángjiān gòu dà de.', meaning: 'Căn phòng này khá lớn đấy.' }
    ],
    quiz: [
      { question: '到...为止 nghĩa là:', options: ['Cho đến mốc đó thì dừng', 'Bắt đầu từ mốc đó', 'Bất cứ lúc nào'] },
      { question: '"Cho đến hôm nay" dịch đúng là:', options: ['到今天为止', '为止到今天', '到为止今天'] },
      { question: '够...的 thường dùng để:', options: ['Nhận xét, đánh giá mức độ', 'Hỏi đường', 'Đếm số'] }
    ]
  }
]
