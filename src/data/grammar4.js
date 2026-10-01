// Ngu phap HSK4 theo chuan HSK 3.0 (21 diem). Xem ghi chu dau grammar.js.
export const HSK4_GRAMMAR = [
  {
    key: 'qushi-yinshen',
    level: 'HSK4',
    title: 'Bổ ngữ xu hướng nghĩa mở rộng - 上 / 出 / 起 / 下',
    pattern: 'Động từ + 上 / 出 / 起 / 下 (nghĩa kết quả)',
    explanation: 'Ngoài nghĩa chỉ hướng, các từ này sau động từ còn mang nghĩa kết quả: 考上 (thi đỗ), 想出 (nghĩ ra), 想起 (nhớ ra), 留下 (để lại), 看出 (nhìn ra).',
    examples: [
      { hanzi: '他考上了大学。', pinyin: 'Tā kǎoshàngle dàxué.', meaning: 'Anh ấy thi đỗ đại học rồi.' },
      { hanzi: '我终于想出了一个办法。', pinyin: 'Wǒ zhōngyú xiǎngchūle yí gè bànfǎ.', meaning: 'Cuối cùng tôi nghĩ ra một cách.' },
      { hanzi: '我突然想起一件事。', pinyin: 'Wǒ tūrán xiǎngqǐ yí jiàn shì.', meaning: 'Tôi chợt nhớ ra một việc.' }
    ],
    quiz: [
      { question: '"Tôi nhớ ra tên anh ấy rồi" dịch đúng là:', options: ['我想起他的名字了。', '我想上他的名字了。', '我想下他的名字了。'] },
      { question: '想出 có nghĩa là:', options: ['Nghĩ ra (một cách, ý tưởng)', 'Nhớ lại việc cũ', 'Quên mất'] },
      { question: '"Cô ấy thi đỗ trường tốt" dịch đúng là:', options: ['她考上了一所好学校。', '她考出了一所好学校。', '她考起了一所好学校。'] }
    ]
  },
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
    key: 'chuxian',
    level: 'HSK4',
    title: 'Câu tồn tại chỉ xuất hiện, biến mất',
    pattern: 'Nơi chốn + V + 了 + số lượng + người / vật',
    explanation: 'Mô tả có thêm hoặc mất đi một người, một vật tại một nơi. Nơi chốn đứng đầu, động từ có 了, người hoặc vật không xác định đứng cuối. Dùng 来, 出, 少, 丢, 死...',
    examples: [
      { hanzi: '前面开来了一辆车。', pinyin: 'Qiánmiàn kāilái le yí liàng chē.', meaning: 'Phía trước có một chiếc xe chạy tới.' },
      { hanzi: '家里来了几位客人。', pinyin: 'Jiālǐ láile jǐ wèi kèrén.', meaning: 'Ở nhà có mấy vị khách đến.' },
      { hanzi: '书架上少了一本书。', pinyin: 'Shūjià shàng shǎole yì běn shū.', meaning: 'Trên giá sách thiếu mất một quyển.' }
    ],
    quiz: [
      { question: 'Trong câu "家里来了几位客人", 客人 là:', options: ['Người xuất hiện, đứng cuối câu', 'Chủ ngữ đứng đầu', 'Địa điểm'] },
      { question: '"Phòng này mất một cái ghế" dịch đúng là:', options: ['房间里少了一把椅子。', '一把椅子房间里少了。', '少了房间里一把椅子。'] },
      { question: 'Loại câu này dùng để:', options: ['Mô tả sự xuất hiện hoặc biến mất', 'Ra lệnh', 'Hỏi giờ giấc'] }
    ]
  },
  {
    key: 'zaifangmian',
    level: 'HSK4',
    title: '在...方面 / 上 / 下 / 中 - Về mặt..., trong...',
    pattern: '在 + danh từ + 方面 / 上 / 下 / 中',
    explanation: 'Nêu phạm vi hoặc điều kiện của sự việc. 在...方面: về mặt. 在...上: trong lĩnh vực. 在...下: dưới sự (giúp đỡ, lãnh đạo...). 在...中: trong (quá trình, hoàn cảnh).',
    examples: [
      { hanzi: '在学习方面，他很努力。', pinyin: 'Zài xuéxí fāngmiàn, tā hěn nǔlì.', meaning: 'Về học tập, anh ấy rất chăm.' },
      { hanzi: '在朋友的帮助下，我完成了工作。', pinyin: 'Zài péngyou de bāngzhù xià, wǒ wánchéngle gōngzuò.', meaning: 'Nhờ sự giúp đỡ của bạn bè, tôi đã hoàn thành công việc.' },
      { hanzi: '在生活中，我们要学会感谢。', pinyin: 'Zài shēnghuó zhōng, wǒmen yào xuéhuì gǎnxiè.', meaning: 'Trong cuộc sống, chúng ta cần học cách biết ơn.' }
    ],
    quiz: [
      { question: '"Nhờ sự giúp đỡ của thầy" dịch đúng là:', options: ['在老师的帮助下', '在老师的帮助上', '在老师的帮助中'] },
      { question: '"Về công việc" có thể nói là:', options: ['在工作方面', '在工作下面', '工作在方面'] },
      { question: '在...下 thường dùng với danh từ như:', options: ['帮助, 领导, 影响', '苹果, 桌子, 杯子', '昨天, 今天, 明天'] }
    ]
  },
  {
    key: 'bushi-ershi',
    level: 'HSK4',
    title: '不是...而是... - Không phải...mà là...',
    pattern: '不是 + A，而是 + B',
    explanation: 'Phủ định A rồi khẳng định B để sửa lại nhận định. Hai vế thường cùng loại thông tin. Có thể bỏ 而 và nói 不是...是....',
    examples: [
      { hanzi: '这不是我的错，而是他的错。', pinyin: 'Zhè búshì wǒ de cuò, ér shì tā de cuò.', meaning: 'Đây không phải lỗi của tôi mà là lỗi của anh ấy.' },
      { hanzi: '他不是老师，而是医生。', pinyin: 'Tā búshì lǎoshī, ér shì yīshēng.', meaning: 'Anh ấy không phải giáo viên mà là bác sĩ.' },
      { hanzi: '不是我不想去，而是没有时间。', pinyin: 'Búshì wǒ bù xiǎng qù, érshì méiyǒu shíjiān.', meaning: 'Không phải tôi không muốn đi, mà là không có thời gian.' }
    ],
    quiz: [
      { question: '"Không phải tôi quên mà là không biết" dịch đúng là:', options: ['不是我忘了，而是我不知道。', '不是我忘了，但是我不知道。', '我不是忘了，所以我不知道。'] },
      { question: 'Cấu trúc này dùng để:', options: ['Phủ định một ý rồi khẳng định ý đúng', 'Nêu hai việc cùng lúc', 'Nêu giả thiết'] },
      { question: 'Từ nối đứng ở vế sau là:', options: ['而是', '然后', '所以'] }
    ]
  },
  {
    key: 'ji-you',
    level: 'HSK4',
    title: '既...又... - Vừa...vừa...',
    pattern: '既 + A + 又 / 也 + B',
    explanation: 'Nối hai tính chất hoặc hai hành động của cùng một chủ ngữ, nhấn mạnh cả hai đều đúng. Trang trọng hơn 又...又.... A và B thường cùng loại từ.',
    examples: [
      { hanzi: '这个房子既大又便宜。', pinyin: 'Zhège fángzi jì dà yòu piányi.', meaning: 'Căn nhà này vừa rộng vừa rẻ.' },
      { hanzi: '她既会唱歌，又会跳舞。', pinyin: 'Tā jì huì chànggē, yòu huì tiàowǔ.', meaning: 'Cô ấy vừa biết hát vừa biết múa.' },
      { hanzi: '他既是我的老师，也是我的朋友。', pinyin: 'Tā jì shì wǒ de lǎoshī, yě shì wǒ de péngyou.', meaning: 'Anh ấy vừa là thầy vừa là bạn tôi.' }
    ],
    quiz: [
      { question: '"Cái điện thoại này vừa đẹp vừa rẻ" dịch đúng là:', options: ['这个手机既好看又便宜。', '这个手机既好看又不便宜。', '这个手机好看既便宜又。'] },
      { question: '既...又... diễn đạt:', options: ['Hai đặc điểm cùng tồn tại', 'Nguyên nhân và kết quả', 'Sự đối lập'] },
      { question: 'Vế sau của 既 có thể dùng:', options: ['又 hoặc 也', '但是', '所以'] }
    ]
  },
  {
    key: 'yushi',
    level: 'HSK4',
    title: '于是 - Thế là, do đó',
    pattern: '...，于是...',
    explanation: 'Nối hai sự việc nối tiếp, sự việc sau là kết quả hay phản ứng tự nhiên của sự việc trước. Thường dùng khi kể chuyện.',
    examples: [
      { hanzi: '天黑了，于是我们回家了。', pinyin: 'Tiān hēi le, yúshì wǒmen huíjiā le.', meaning: 'Trời tối rồi, thế là chúng tôi về nhà.' },
      { hanzi: '他没带钥匙，于是在门口等了很久。', pinyin: 'Tā méi dài yàoshi, yúshì zài ménkǒu děngle hěn jiǔ.', meaning: 'Anh ấy không mang chìa khóa, nên đã đợi ở cửa rất lâu.' },
      { hanzi: '大家都同意，于是我们决定下周出发。', pinyin: 'Dàjiā dōu tóngyì, yúshì wǒmen juédìng xià zhōu chūfā.', meaning: 'Mọi người đều đồng ý, thế là chúng tôi quyết định tuần sau lên đường.' }
    ],
    quiz: [
      { question: '于是 dùng để:', options: ['Nối hai việc nối tiếp, việc sau là hệ quả của việc trước', 'Nêu điều kiện', 'Nêu sự đối lập'] },
      { question: '"Trời mưa, thế là chúng tôi ở nhà" dịch đúng là:', options: ['下雨了，于是我们待在家里。', '下雨了，虽然我们待在家里。', '下雨了，除非我们待在家里。'] },
      { question: '于是 thường dùng trong:', options: ['Câu kể sự việc đã xảy ra', 'Câu mệnh lệnh', 'Câu hỏi'] }
    ]
  },
  {
    key: 'fouze',
    level: 'HSK4',
    title: '否则 - Nếu không thì',
    pattern: '...，否则...',
    explanation: 'Nêu hậu quả xấu nếu điều ở vế trước không xảy ra. Vế trước thường là lời khuyên hay yêu cầu, vế sau nói điều sẽ xảy ra nếu không làm theo.',
    examples: [
      { hanzi: '快走吧，否则会迟到。', pinyin: 'Kuài zǒu ba, fǒuzé huì chídào.', meaning: 'Đi nhanh đi, nếu không sẽ muộn.' },
      { hanzi: '你必须按时吃药，否则病不会好。', pinyin: 'Nǐ bìxū ànshí chī yào, fǒuzé bìng bú huì hǎo.', meaning: 'Bạn phải uống thuốc đúng giờ, nếu không bệnh sẽ không khỏi.' },
      { hanzi: '我们要早点出发，否则赶不上火车。', pinyin: 'Wǒmen yào zǎodiǎn chūfā, fǒuzé gǎn bu shàng huǒchē.', meaning: 'Chúng ta phải xuất phát sớm, nếu không sẽ không kịp tàu.' }
    ],
    quiz: [
      { question: '"Phải nhanh lên, nếu không sẽ không kịp" dịch đúng là:', options: ['要快点，否则来不及。', '要快点，所以来不及。', '要快点，虽然来不及。'] },
      { question: '否则 đứng ở vị trí nào?', options: ['Đầu vế sau', 'Cuối câu', 'Trước chủ ngữ của vế đầu'] },
      { question: 'Vế sau của 否则 thường nói:', options: ['Hậu quả không tốt', 'Lời cảm ơn', 'Câu hỏi'] }
    ]
  },
  {
    key: 'jiran-jiu',
    level: 'HSK4',
    title: '既然...就... - Đã...thì...',
    pattern: '既然 + sự thật, 就 + hệ quả',
    explanation: 'Dựa trên một sự thật đã rõ để đưa ra kết luận hay đề nghị. 既然 nêu cái đã biết, 就 dẫn ra điều nên làm hoặc suy luận.',
    examples: [
      { hanzi: '既然你不舒服，就在家休息吧。', pinyin: 'Jìrán nǐ bù shūfu, jiù zài jiā xiūxi ba.', meaning: 'Đã không khỏe thì ở nhà nghỉ đi.' },
      { hanzi: '既然大家都来了，我们就开始吧。', pinyin: 'Jìrán dàjiā dōu lái le, wǒmen jiù kāishǐ ba.', meaning: 'Mọi người đã đến cả rồi thì chúng ta bắt đầu đi.' },
      { hanzi: '既然决定了，就不要后悔。', pinyin: 'Jìrán juédìng le, jiù búyào hòuhuǐ.', meaning: 'Đã quyết định thì đừng hối hận.' }
    ],
    quiz: [
      { question: '既然 nêu:', options: ['Sự việc đã rõ, dùng làm căn cứ', 'Giả thiết chưa xảy ra', 'Mục đích'] },
      { question: '"Đã mệt thì nghỉ đi" dịch đúng là:', options: ['既然累了，就休息吧。', '如果累了，既然休息吧。', '既然累了，所以休息吧。'] },
      { question: 'Khác biệt với 如果 là:', options: ['既然 nói điều đã là sự thật', '既然 nói điều chưa chắc', 'Hai từ giống nhau'] }
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
    key: 'wulun-dou',
    level: 'HSK4',
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
    key: 'nashi',
    level: 'HSK4',
    title: '哪怕...也... - Cho dù...cũng...',
    pattern: '哪怕 + giả thiết cực đoan, 也 / 还 + kết quả',
    explanation: 'Nhấn mạnh dù tình huống rất khó hoặc rất tệ, kết quả vẫn không thay đổi. Mạnh hơn 即使, thường mang giọng khẩu ngữ.',
    examples: [
      { hanzi: '哪怕下雨，我也要去。', pinyin: 'Nǎpà xiàyǔ, wǒ yě yào qù.', meaning: 'Dù trời mưa tôi cũng đi.' },
      { hanzi: '哪怕只有一个人，他也坚持上课。', pinyin: 'Nǎpà zhǐyǒu yí gè rén, tā yě jiānchí shàngkè.', meaning: 'Dù chỉ có một người, thầy vẫn kiên trì lên lớp.' },
      { hanzi: '哪怕再累，我也要完成。', pinyin: 'Nǎpà zài lèi, wǒ yě yào wánchéng.', meaning: 'Dù mệt đến mấy, tôi cũng phải hoàn thành.' }
    ],
    quiz: [
      { question: '"Dù khó khăn, chúng tôi cũng không bỏ cuộc" dịch đúng là:', options: ['哪怕很难，我们也不放弃。', '哪怕很难，我们就不放弃。', '哪怕很难，我们才不放弃。'] },
      { question: '哪怕...也... có nghĩa gần với:', options: ['Cho dù...cũng...', 'Vì...nên...', 'Chỉ cần...là...'] },
      { question: 'Vế sau của 哪怕 thường dùng:', options: ['也', '才', '不但'] }
    ]
  },
  {
    key: 'wanyi',
    level: 'HSK4',
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
    key: 'fan-er',
    level: 'HSK4',
    title: '反而 - Trái lại, ngược lại',
    pattern: '(không những không...) A, 反而 + B (kết quả trái ngược mong đợi)',
    explanation: 'Diễn tả kết quả B trái ngược hẳn với điều lẽ ra phải xảy ra hoặc điều được mong đợi từ A.',
    examples: [
      { hanzi: '吃了药，病反而更重了。', pinyin: "Chīle yào, bìng fǎn'ér gèng zhòng le.", meaning: 'Uống thuốc rồi, bệnh trái lại còn nặng hơn.' },
      { hanzi: '他不但不生气，反而笑了。', pinyin: "Tā búdàn bù shēngqì, fǎn'ér xiào le.", meaning: 'Anh ấy không những không giận, trái lại còn cười.' },
      { hanzi: '我帮了他，他反而怪我多管闲事。', pinyin: "Wǒ bāngle tā, tā fǎn'ér guài wǒ duō guǎn xiánshì.", meaning: 'Tôi đã giúp anh ấy, anh ấy ngược lại còn trách tôi nhiều chuyện.' }
    ],
    quiz: [
      { question: '反而 diễn tả điều gì?', options: ['Kết quả trái ngược với điều mong đợi', 'Kết quả đúng như dự đoán', 'Nguyên nhân của sự việc'] },
      { question: '"Càng giải thích, cô ấy càng hiểu lầm hơn" (dùng 反而) dịch đúng là:', options: ['解释了半天，她反而更误会了。', '解释了半天，她万一更误会了。', '她反而解释了半天更误会了。'] },
      { question: '"Trời lạnh hơn, nhưng anh ấy trái lại mặc ít đồ hơn" dịch đúng là:', options: ['天更冷了，他反而穿得更少。', '天更冷了，他何况穿得更少。', '他反而天更冷了穿得更少。'] }
    ]
  },
  {
    key: 'shenzhi',
    level: 'HSK4',
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
    key: 'shuobuding',
    level: 'HSK4',
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
    key: 'shuangchong-fouding',
    level: 'HSK4',
    title: 'Phủ định kép - 不得不 / 不能不 / 没有...不...',
    pattern: '不得不 + V ; 没有 + người + 不 + V',
    explanation: 'Hai lần phủ định tạo nghĩa khẳng định mạnh. 不得不 là "buộc phải", 不能不 là "không thể không, phải", 没有...不... là "ai cũng". Giọng nhấn mạnh hơn câu khẳng định thường.',
    examples: [
      { hanzi: '我不得不去。', pinyin: 'Wǒ bùdébù qù.', meaning: 'Tôi buộc phải đi.' },
      { hanzi: '没有人不喜欢他。', pinyin: 'Méiyǒu rén bù xǐhuan tā.', meaning: 'Không ai là không thích anh ấy.' },
      { hanzi: '你不能不吃饭。', pinyin: 'Nǐ bù néng bù chīfàn.', meaning: 'Bạn không thể không ăn cơm.' }
    ],
    quiz: [
      { question: '不得不 có nghĩa là:', options: ['Buộc phải, đành phải', 'Không được làm', 'Không muốn làm'] },
      { question: '"Ai cũng biết" có thể nói bằng phủ định kép là:', options: ['没有人不知道', '没有人知道', '有人不知道'] },
      { question: '"Tôi buộc phải làm việc ngày nghỉ" dịch đúng là:', options: ['我不得不在假期工作。', '我得不不在假期工作。', '我不不得在假期工作。'] }
    ]
  },
  {
    key: 'lian-dou',
    level: 'HSK4',
    title: '连...也 / 都... - Ngay cả...cũng...',
    pattern: '连 + từ nhấn mạnh + 也 / 都 + động từ',
    explanation: 'Đưa ra một ví dụ cực đoan để nhấn mạnh: ngay cả cái đó còn thế thì những cái khác càng thế. 也 / 都 đứng ngay trước động từ, thường kèm phủ định.',
    examples: [
      { hanzi: '他忙得连饭也没吃。', pinyin: 'Tā máng de lián fàn yě méi chī.', meaning: 'Anh ấy bận đến nỗi cơm cũng chưa ăn.' },
      { hanzi: '这个问题连老师都不会。', pinyin: 'Zhège wèntí lián lǎoshī dōu bú huì.', meaning: 'Câu này ngay cả thầy cũng không biết làm.' },
      { hanzi: '他连自己的名字都不会写。', pinyin: 'Tā lián zìjǐ de míngzi dōu bú huì xiě.', meaning: 'Anh ấy ngay cả tên mình cũng không biết viết.' }
    ],
    quiz: [
      { question: '"Ngay cả trẻ con cũng biết" dịch đúng là:', options: ['连小孩子都知道。', '连都小孩子知道。', '小孩子连知道都。'] },
      { question: '连...都... thường dùng để:', options: ['Nhấn mạnh bằng ví dụ cực đoan', 'Nêu thứ tự', 'Nêu giả thiết'] },
      { question: '"Tôi ngay cả thời gian ngủ cũng không có" dịch đúng là:', options: ['我连睡觉的时间都没有。', '我连都睡觉的时间没有。', '连我睡觉的时间都没。'] }
    ]
  },
  {
    key: 'fenshu',
    level: 'HSK4',
    title: 'Phân số, phần trăm, bội số',
    pattern: '三分之一 ; 百分之五十 ; 是...的两倍',
    explanation: 'Phân số: mẫu số + 分之 + tử số (三分之一 là 1/3). Phần trăm: 百分之 + số. Bội số: A 是 B 的 + số + 倍. Nói tăng thêm bao nhiêu lần dùng 增加了 + số + 倍.',
    examples: [
      { hanzi: '三分之一的学生是女生。', pinyin: 'Sān fēnzhī yī de xuésheng shì nǚshēng.', meaning: 'Một phần ba học sinh là nữ.' },
      { hanzi: '这个城市的人口增加了百分之十。', pinyin: 'Zhège chéngshì de rénkǒu zēngjiāle bǎi fēnzhī shí.', meaning: 'Dân số thành phố này tăng 10%.' },
      { hanzi: '他的工资是我的两倍。', pinyin: 'Tā de gōngzī shì wǒ de liǎng bèi.', meaning: 'Lương của anh ấy gấp hai lần tôi.' }
    ],
    quiz: [
      { question: '1/4 đọc là:', options: ['四分之一', '一分之四', '一四分之'] },
      { question: '50% đọc là:', options: ['百分之五十', '五十百分之', '五十分之百'] },
      { question: '"Gấp ba lần" nói là:', options: ['三倍', '三个倍', '倍三'] }
    ]
  },
  {
    key: 'yilai',
    level: 'HSK4',
    title: '(自)...以来 - Từ...đến nay',
    pattern: '自 + mốc thời gian + 以来',
    explanation: 'Chỉ khoảng thời gian từ một mốc trong quá khứ kéo dài đến hiện tại. Thường theo sau là 一直 hoặc kết quả diễn ra liên tục trong thời gian đó.',
    examples: [
      { hanzi: '自去年以来，他一直在学汉语。', pinyin: 'Zì qùnián yǐlái, tā yìzhí zài xué Hànyǔ.', meaning: 'Từ năm ngoái đến nay, anh ấy luôn học tiếng Trung.' },
      { hanzi: '毕业以来，我一直在北京工作。', pinyin: 'Bìyè yǐlái, wǒ yìzhí zài Běijīng gōngzuò.', meaning: 'Từ khi tốt nghiệp đến nay, tôi luôn làm việc ở Bắc Kinh.' },
      { hanzi: '来中国以来，我认识了很多朋友。', pinyin: 'Lái Zhōngguó yǐlái, wǒ rènshile hěn duō péngyou.', meaning: 'Từ khi đến Trung Quốc, tôi quen được nhiều bạn.' }
    ],
    quiz: [
      { question: '以来 chỉ khoảng thời gian:', options: ['Từ một mốc trong quá khứ đến hiện tại', 'Từ hiện tại đến tương lai', 'Chỉ trong tương lai'] },
      { question: '"Từ khi dọn nhà đến nay" nói là:', options: ['搬家以来', '以来搬家', '搬以来家'] },
      { question: 'Sau (自)...以来 thường đi với:', options: ['一直', '马上', '将要'] }
    ]
  }
]
