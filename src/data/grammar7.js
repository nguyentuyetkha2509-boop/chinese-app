// Ngu phap HSK7-9 theo chuan HSK 3.0 (bac cao cap gop 7-9). Gom cac diem "mo rong" chuyen tu HSK6 (giu nguyen khoa)
// va cac diem moi. Xem ghi chu dau grammar.js.
export const HSK7_GRAMMAR = [
  {
    key: 'ningke-yebu',
    level: 'HSK7-9',
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
    level: 'HSK7-9',
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
    level: 'HSK7-9',
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
    key: 'yimian',
    level: 'HSK7-9',
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
    key: 'xingkui',
    level: 'HSK7-9',
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
    key: 'hekuang',
    level: 'HSK7-9',
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
    key: 'zhi-wenyan',
    level: 'HSK7-9',
    title: '之 - "của" trong văn viết trang trọng',
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
    level: 'HSK7-9',
    title: '者 - Hậu tố "người..." trong văn viết',
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
    level: 'HSK7-9',
    title: '以...为... - Lấy...làm...',
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
    level: 'HSK7-9',
    title: '何必 - Cần gì phải..., việc gì phải...',
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
    level: 'HSK7-9',
    title: '岂止 - Đâu chỉ, há chỉ (còn hơn thế)',
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
    level: 'HSK7-9',
    title: '与其说...不如说... - Nói là...chẳng bằng nói là...',
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
    level: 'HSK7-9',
    title: '未免 - Hơi, chưa tránh khỏi (nhận xét nhẹ nhàng)',
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
    level: 'HSK7-9',
    title: '生怕 - Rất sợ, chỉ sợ rằng',
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
