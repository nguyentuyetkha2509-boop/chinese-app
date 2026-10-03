// Ngu phap HSK7-9 theo chuan HSK 3.0 (bac cao cap gop 7-9): 40 diem. 14 diem "mo rong" chuyen tu HSK6 (giu nguyen khoa)
// va 26 diem moi. Xem ghi chu dau grammar.js.
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
  },
  {
    key: 'tangruo-jiashi',
    level: 'HSK7-9',
    title: '倘若 / 假使...就... - Giả sử, nếu như',
    pattern: '倘若 / 假使 + giả thiết, (那么 / 就) + kết quả',
    explanation: 'Cách nói \'nếu\' mang sắc thái trang trọng, thường gặp trong văn viết, bình luận, diễn văn. Nhấn mạnh giả thiết trái với thực tế hoặc ít có khả năng xảy ra. Khẩu ngữ thường dùng 要是 / 如果 thay thế.',
    examples: [
      { hanzi: '倘若当初听了父母的劝告，他就不会走到今天这一步。', pinyin: 'Tǎngruò dāngchū tīng le fùmǔ de quàngào, tā jiù bú huì zǒudào jīntiān zhè yí bù.', meaning: 'Giả sử ngày trước nghe lời khuyên của cha mẹ, anh ấy đã không đến nông nỗi hôm nay.' },
      { hanzi: '假使明天下大雨，运动会就改期举行。', pinyin: 'Jiǎshǐ míngtiān xià dàyǔ, yùndònghuì jiù gǎiqī jǔxíng.', meaning: 'Giả sử ngày mai mưa lớn, hội thao sẽ dời ngày tổ chức.' },
      { hanzi: '倘若人类失去了森林，地球上的生态将无法维持。', pinyin: 'Tǎngruò rénlèi shīqù le sēnlín, dìqiú shàng de shēngtài jiāng wúfǎ wéichí.', meaning: 'Nếu loài người mất đi rừng, hệ sinh thái trên trái đất sẽ không thể duy trì.' }
    ],
    quiz: [
      { question: 'Chọn câu dùng đúng 倘若:', options: ['倘若你有困难，请随时告诉我。', '倘若昨天我去了北京，所以很累。', '我倘若吃饭了很好吃。'] },
      { question: 'So với 要是, 倘若 mang sắc thái:', options: ['Trang trọng, thiên về văn viết', 'Thân mật, chỉ dùng khi nói chuyện', 'Chỉ dùng cho câu hỏi'] },
      { question: 'Câu nào có vế sau phù hợp với 假使?', options: ['假使他不来，我们就先开始。', '假使他不来，我们昨天很高兴。', '假使他不来，我们已经吃完了的。'] }
    ]
  },
  {
    key: 'yizhi-yizhiyu',
    level: 'HSK7-9',
    title: '以致 / 以至于 - Đến nỗi, dẫn đến',
    pattern: 'Nguyên nhân / tình huống + 以致 / 以至于 + kết quả (thường không mong muốn)',
    explanation: 'Đặt ở vế sau để nêu kết quả do vế trước gây ra, phần lớn là kết quả xấu hoặc ngoài mong muốn (以致 gần như chỉ dùng với nghĩa này). 以至于 còn có thể chỉ mức độ \'đến nỗi\' và đi với kết quả bất ngờ. Là văn viết, không dùng trong câu có chủ ý chủ quan.',
    examples: [
      { hanzi: '他长期熬夜工作，以致身体严重透支。', pinyin: 'Tā chángqī áoyè gōngzuò, yǐzhì shēntǐ yánzhòng tòuzhī.', meaning: 'Anh ấy thức khuya làm việc lâu dài, đến nỗi cơ thể bị suy kiệt nghiêm trọng.' },
      { hanzi: '她太专注于看书，以至于连电话响了都没听见。', pinyin: 'Tā tài zhuānzhù yú kàn shū, yǐzhìyú lián diànhuà xiǎng le dōu méi tīngjiàn.', meaning: 'Cô ấy quá chú tâm đọc sách đến nỗi điện thoại reo cũng không nghe thấy.' },
      { hanzi: '管理上出现了漏洞，以致公司蒙受了巨大损失。', pinyin: 'Guǎnlǐ shàng chūxiàn le lòudòng, yǐzhì gōngsī méngshòu le jùdà sǔnshī.', meaning: 'Khâu quản lý xuất hiện sơ hở, dẫn đến công ty chịu tổn thất lớn.' }
    ],
    quiz: [
      { question: 'Câu nào dùng 以致 đúng?', options: ['他疏忽大意，以致出了严重的事故。', '我想早点到，以致我打车来了。', '以致天气很好，我们去公园玩。'] },
      { question: '以致 / 以至于 đứng ở vị trí nào trong câu?', options: ['Đầu vế sau, dẫn ra kết quả', 'Đầu vế trước, dẫn ra nguyên nhân', 'Cuối câu như trợ từ'] },
      { question: 'Câu nào KHÔNG phù hợp với 以致?', options: ['我努力学习，以致顺利通过了考试，大家都为我高兴。', '他骄傲自满，以致一败涂地。', '雨下得太大，以至于比赛被迫取消。'] }
    ]
  },
  {
    key: 'wulun-ruhe',
    level: 'HSK7-9',
    title: '无论如何 / 不管怎样 - Dù thế nào đi nữa',
    pattern: '无论如何 / 不管怎样 / 不管怎么样, + chủ ngữ + (也 / 都) + quyết tâm, kết luận không đổi',
    explanation: 'Là cụm cố định, đứng độc lập ở đầu vế sau, khác với 无论...都... cần có từ nghi vấn đi kèm ở vế trước. Nhấn mạnh quyết tâm hoặc kết luận không thay đổi dù tình huống ra sao. 无论如何 trang trọng hơn, 不管怎样 thiên về khẩu ngữ.',
    examples: [
      { hanzi: '这件事无论如何我也要弄个水落石出。', pinyin: 'Zhè jiàn shì wúlùn rúhé wǒ yě yào nòng ge shuǐluò-shíchū.', meaning: 'Chuyện này dù thế nào tôi cũng phải làm cho ra lẽ.' },
      { hanzi: '不管怎样，健康永远是第一位的。', pinyin: 'Bùguǎn zěnyàng, jiànkāng yǒngyuǎn shì dì-yī wèi de.', meaning: 'Dù thế nào đi nữa, sức khỏe mãi là điều quan trọng nhất.' },
      { hanzi: '明天的会议你无论如何要赶回来参加。', pinyin: 'Míngtiān de huìyì nǐ wúlùn rúhé yào gǎn huílai cānjiā.', meaning: 'Cuộc họp ngày mai dù thế nào bạn cũng phải kịp về tham dự.' }
    ],
    quiz: [
      { question: 'Chọn câu dùng 无论如何 đúng:', options: ['无论如何，我都不会放弃自己的梦想。', '无论如何你去不去，我都去。', '我无论如何昨天吃了很多。'] },
      { question: 'Điểm khác của 无论如何 so với 无论...都... là:', options: ['Là cụm cố định, không cần từ nghi vấn ở vế trước', 'Bắt buộc phải có từ nghi vấn như 谁 / 什么', 'Chỉ dùng trong câu hỏi'] },
      { question: '不管怎样, 我们明天出发 có nghĩa là:', options: ['Dù thế nào, ngày mai chúng ta cũng xuất phát', 'Nếu ngày mai ra sao thì chúng ta mới đi', 'Không biết ngày mai có xuất phát hay không'] }
    ]
  },
  {
    key: 'guran-danshi',
    level: 'HSK7-9',
    title: '固然...但是... - Đành là...nhưng...',
    pattern: 'A + 固然 + thừa nhận điều đúng, 但是 / 可是 / 然而 + B (ý chính)',
    explanation: 'Thừa nhận một sự thật hoặc ưu điểm ở vế trước, rồi chuyển ý ở vế sau để nêu điều quan trọng hơn hoặc mặt còn lại. Trọng tâm nằm ở vế sau. Thường dùng trong văn nghị luận, bình luận, mang sắc thái lịch sự, khách quan.',
    examples: [
      { hanzi: '网购固然方便，但是也有不少风险。', pinyin: 'Wǎnggòu gùrán fāngbiàn, dànshì yě yǒu bùshǎo fēngxiǎn.', meaning: 'Mua sắm trực tuyến đành là tiện lợi, nhưng cũng có không ít rủi ro.' },
      { hanzi: '天赋固然重要，可是后天的努力更不可缺少。', pinyin: 'Tiānfù gùrán zhòngyào, kěshì hòutiān de nǔlì gèng bùkě quēshǎo.', meaning: 'Thiên phú đành là quan trọng, nhưng nỗ lực về sau càng không thể thiếu.' },
      { hanzi: '他的做法固然有道理，然而没有考虑到别人的感受。', pinyin: 'Tā de zuòfǎ gùrán yǒu dàolǐ, rán\'ér méiyǒu kǎolǜ dào biérén de gǎnshòu.', meaning: 'Cách làm của anh ấy đành là có lý, nhưng chưa tính đến cảm nhận của người khác.' }
    ],
    quiz: [
      { question: 'Ý chính của câu 价格固然便宜，但是质量不太好 là:', options: ['Chất lượng không tốt lắm', 'Giá rẻ', 'Giá và chất lượng đều tốt'] },
      { question: 'Chọn câu dùng 固然 đúng:', options: ['住在城市固然方便，但是空气不如农村好。', '住在城市固然方便，所以我很喜欢。', '固然我很忙，因为我没时间。'] },
      { question: 'Vế đứng sau 固然 thường diễn tả:', options: ['Sự thừa nhận, vế sau mới chuyển ý', 'Nguyên nhân dẫn đến kết quả', 'Một câu hỏi'] }
    ]
  },
  {
    key: 'yaobushi-jiu',
    level: 'HSK7-9',
    title: '要不是...早就... - Nếu không phải...thì đã...',
    pattern: '要不是 / 若不是 / 如果不是 + nguyên nhân thực tế, (早)就 + kết quả giả định đã xảy ra',
    explanation: 'Giả thiết ngược với sự thật đã xảy ra: nhờ (hoặc vì) có nguyên nhân ở vế trước nên kết quả ở vế sau mới không xảy ra hoặc xảy ra khác đi. Vế sau thường có 早就 / 恐怕 / 才. Dùng được cả khẩu ngữ lẫn văn viết, 若不是 trang trọng hơn.',
    examples: [
      { hanzi: '要不是你及时提醒，我早就把这件事忘了。', pinyin: 'Yàobushì nǐ jíshí tíxǐng, wǒ zǎojiù bǎ zhè jiàn shì wàng le.', meaning: 'Nếu không phải bạn nhắc kịp thời, tôi đã quên chuyện này từ lâu rồi.' },
      { hanzi: '若不是医生全力抢救，他恐怕早已离开人世。', pinyin: 'Ruò bú shì yīshēng quánlì qiǎngjiù, tā kǒngpà zǎoyǐ líkāi rénshì.', meaning: 'Nếu không phải bác sĩ dốc sức cấp cứu, e rằng ông ấy đã qua đời từ lâu.' },
      { hanzi: '要不是堵车，我们早就到家了。', pinyin: 'Yàobushì dǔchē, wǒmen zǎojiù dào jiā le.', meaning: 'Nếu không kẹt xe, chúng tôi đã về đến nhà từ lâu.' }
    ],
    quiz: [
      { question: '要不是下雨，我们早就出发了 ngụ ý rằng:', options: ['Thực tế trời mưa nên chưa xuất phát', 'Thực tế trời không mưa và đã xuất phát', 'Trời sẽ mưa vào ngày mai'] },
      { question: 'Chọn câu dùng 要不是 đúng:', options: ['要不是你帮忙，这个项目早就失败了。', '要不是你帮忙，这个项目一定会成功的。', '要不是你来了，我们明天去看电影。'] },
      { question: 'Vế sau của 要不是...thường đi với:', options: ['早就 / 恐怕 / 才 chỉ kết quả giả định', 'Câu mệnh lệnh', 'Từ nghi vấn 什么'] }
    ]
  },
  {
    key: 'kuangqie-zaishuo',
    level: 'HSK7-9',
    title: '况且 / 再说 - Hơn nữa, vả lại',
    pattern: 'Lý do thứ nhất, 况且 / 再说 + lý do bổ sung (thường mạnh hơn) + kết luận',
    explanation: 'Bổ sung thêm một lý do, thường là lý do quan trọng hơn hoặc thuyết phục hơn, để củng cố kết luận. Khác với 何况 mang nghĩa \'huống chi\' (so sánh bậc thang), 况且 chỉ đơn thuần thêm lý do. 况且 hơi trang trọng, 再说 thiên về khẩu ngữ.',
    examples: [
      { hanzi: '这家店离家很近，况且价格也公道，我们就在这儿买吧。', pinyin: 'Zhè jiā diàn lí jiā hěn jìn, kuàngqiě jiàgé yě gōngdào, wǒmen jiù zài zhèr mǎi ba.', meaning: 'Tiệm này gần nhà, hơn nữa giá cũng phải chăng, mình mua ở đây đi.' },
      { hanzi: '现在去已经太晚了，再说外面还下着雨。', pinyin: 'Xiànzài qù yǐjīng tài wǎn le, zàishuō wàimiàn hái xià zhe yǔ.', meaning: 'Bây giờ đi thì đã quá muộn, vả lại bên ngoài còn đang mưa.' },
      { hanzi: '他不愿意搬家，况且新房子离工作的地方也更远。', pinyin: 'Tā bú yuànyì bānjiā, kuàngqiě xīn fángzi lí gōngzuò de dìfang yě gèng yuǎn.', meaning: 'Anh ấy không muốn chuyển nhà, hơn nữa nhà mới còn xa chỗ làm hơn.' }
    ],
    quiz: [
      { question: 'Chức năng của 况且 trong câu là:', options: ['Bổ sung thêm một lý do cho kết luận', 'Biểu thị sự đối lập', 'Đặt câu hỏi'] },
      { question: 'Chọn câu dùng 再说 đúng:', options: ['我不想去，再说我明天还有考试。', '我不想去，再说因为我很喜欢。', '再说我不想去，我不想去。'] },
      { question: 'Điểm khác giữa 况且 và 何况 là:', options: ['况且 chỉ thêm lý do, 何况 so sánh theo bậc thang', '况且 chỉ dùng trong câu hỏi, 何况 thì không', 'Hai từ hoàn toàn trái nghĩa'] }
    ]
  },
  {
    key: 'weibi-bujiande',
    level: 'HSK7-9',
    title: '未必 / 不见得 - Chưa chắc, không hẳn',
    pattern: 'Chủ ngữ + 未必 / 不见得 + động từ / tính từ',
    explanation: 'Dùng để phủ định nhẹ một phán đoán, nghĩa là "chưa chắc là", "không hẳn". 未必 thiên về văn viết, 不见得 mang khẩu khí hơn. Không dùng để phủ định dứt khoát như 不 hay 没.',
    examples: [
      { hanzi: '价格高的房子未必就是好房子。', pinyin: 'Jiàgé gāo de fángzi wèibì jiù shì hǎo fángzi.', meaning: 'Nhà giá cao chưa chắc đã là nhà tốt.' },
      { hanzi: '他嘴上答应了，实际上不见得会去做。', pinyin: 'Tā zuǐ shang dāying le, shíjì shang bújiànde huì qù zuò.', meaning: 'Miệng anh ấy đã nhận lời, nhưng thực tế chưa chắc sẽ làm.' },
      { hanzi: '名牌大学毕业的学生未必都有出色的能力。', pinyin: 'Míngpái dàxué bìyè de xuésheng wèibì dōu yǒu chūsè de nénglì.', meaning: 'Sinh viên tốt nghiệp trường danh tiếng chưa chắc ai cũng có năng lực xuất sắc.' }
    ],
    quiz: [
      { question: '"Người giàu chưa chắc đã hạnh phúc" dịch đúng là:', options: ['有钱人未必幸福。', '有钱人未必不幸福的。', '有钱人未必了幸福。'] },
      { question: '不见得 có nghĩa gần nhất với:', options: ['Không hẳn, chưa chắc', 'Nhất định', 'Tuyệt đối không'] },
      { question: 'Câu nào dùng 未必 đúng?', options: ['这种方法未必有效。', '这种方法有未必效。', '这种方法未必有效吗不。'] }
    ]
  },
  {
    key: 'jianzhi',
    level: 'HSK7-9',
    title: '简直 - Quả thực, hầu như là',
    pattern: 'Chủ ngữ + 简直 + động từ / tính từ (thường kèm so sánh cường điệu)',
    explanation: 'Phó từ nhấn mạnh mức độ, mang ý cường điệu, diễn tả "quả thực", "chẳng khác nào". Thường dùng trong khẩu ngữ để bộc lộ cảm xúc ngạc nhiên, bực bội hoặc khen. Không dùng với câu phủ định đơn thuần.',
    examples: [
      { hanzi: '这里的风景简直像一幅画。', pinyin: 'Zhèlǐ de fēngjǐng jiǎnzhí xiàng yì fú huà.', meaning: 'Phong cảnh nơi đây quả thực đẹp như một bức tranh.' },
      { hanzi: '他说的话简直让人无法相信。', pinyin: 'Tā shuō de huà jiǎnzhí ràng rén wúfǎ xiāngxìn.', meaning: 'Lời anh ta nói quả thực khiến người ta không thể tin nổi.' },
      { hanzi: '夏天的中午，外面简直热得受不了。', pinyin: 'Xiàtiān de zhōngwǔ, wàimiàn jiǎnzhí rè de shòubuliǎo.', meaning: 'Trưa mùa hè, bên ngoài nóng quả thực không chịu nổi.' }
    ],
    quiz: [
      { question: '简直 thể hiện sắc thái:', options: ['Cường điệu, nhấn mạnh', 'Phủ định hoàn toàn', 'Suy đoán dè dặt'] },
      { question: '"Anh ấy chạy nhanh đến mức như bay" dịch đúng là:', options: ['他跑得简直像飞一样。', '他简直跑得像飞不一样。', '他跑得像飞一样简直不。'] },
      { question: 'Câu nào dùng 简直 tự nhiên?', options: ['这道题简直太难了。', '这道题简直不太难一点。', '简直这道题难了太。'] }
    ]
  },
  {
    key: 'bijing-zhongjiu',
    level: 'HSK7-9',
    title: '毕竟 / 终究 - Rốt cuộc, suy cho cùng',
    pattern: 'Chủ ngữ + 毕竟 / 终究 + là + lý do / kết luận',
    explanation: 'Nhấn mạnh một sự thật căn bản không thể thay đổi, thường để giải thích hay biện hộ. 毕竟 thiên về nêu lý do ("dù sao thì"); 终究 thiên về kết quả cuối cùng ("sớm muộn cũng"). Đặt sau chủ ngữ hoặc đầu câu.',
    examples: [
      { hanzi: '他毕竟还是个孩子，别对他要求太高。', pinyin: 'Tā bìjìng háishi ge háizi, bié duì tā yāoqiú tài gāo.', meaning: 'Suy cho cùng nó vẫn chỉ là đứa trẻ, đừng đòi hỏi quá cao.' },
      { hanzi: '谎言终究会被揭穿的。', pinyin: 'Huǎngyán zhōngjiū huì bèi jiēchuān de.', meaning: 'Lời nói dối rốt cuộc rồi cũng bị vạch trần.' },
      { hanzi: '老房子毕竟住了几十年，我舍不得卖。', pinyin: 'Lǎo fángzi bìjìng zhù le jǐ shí nián, wǒ shěbude mài.', meaning: 'Dù sao cũng ở căn nhà cũ mấy chục năm, tôi không nỡ bán.' }
    ],
    quiz: [
      { question: '毕竟 thường dùng để:', options: ['Nêu lý do căn bản, biện hộ', 'Hỏi một câu hỏi', 'Liệt kê thứ tự'] },
      { question: '"Sự thật rốt cuộc cũng sẽ sáng tỏ" dịch đúng là:', options: ['真相终究会大白。', '真相终究不会大白吗。', '终究真相会不大白。'] },
      { question: 'Câu nào dùng 毕竟 đúng?', options: ['他毕竟是专家，说得有道理。', '他毕竟是不专家，说得有道理。', '毕竟他专家是，说得有道理。'] }
    ]
  },
  {
    key: 'pianpian-pian',
    level: 'HSK7-9',
    title: '偏偏 / 偏 - Cứ khăng khăng, trớ trêu thay',
    pattern: 'Chủ ngữ + 偏偏 / 偏 + động từ (trái ý mong muốn)',
    explanation: 'Có hai nghĩa: (1) cố tình làm trái lời khuyên, mong muốn; (2) sự việc xảy ra trái với kỳ vọng, "trớ trêu thay". 偏 ngắn gọn, khẩu ngữ hơn; 偏偏 mạnh hơn và dùng được trong cả hai nghĩa.',
    examples: [
      { hanzi: '大家都劝他别去，他偏要去。', pinyin: 'Dàjiā dōu quàn tā bié qù, tā piān yào qù.', meaning: 'Mọi người đều khuyên đừng đi, anh ta cứ khăng khăng đòi đi.' },
      { hanzi: '我正要出门，偏偏下起雨来了。', pinyin: 'Wǒ zhèng yào chūmén, piānpiān xià qǐ yǔ lái le.', meaning: 'Tôi vừa định ra ngoài thì trớ trêu thay trời lại đổ mưa.' },
      { hanzi: '别人都准时到了，偏偏他迟到了。', pinyin: 'Biérén dōu zhǔnshí dào le, piānpiān tā chídào le.', meaning: 'Người khác đều đến đúng giờ, vậy mà riêng anh ta lại đến muộn.' }
    ],
    quiz: [
      { question: '"Càng bảo đừng làm, nó càng cứ làm" dịch đúng là:', options: ['你越说不让做，他偏要做。', '你越说不让做，他偏不要做的。', '你越说不让做，偏他要做了。'] },
      { question: '偏偏 trong "我要用车，偏偏车坏了" mang nghĩa:', options: ['Trớ trêu, trái mong đợi', 'Vui mừng', 'Chắc chắn'] },
      { question: 'Câu nào dùng 偏偏 đúng?', options: ['天气预报说晴天，偏偏下雨了。', '天气预报说晴天，偏偏很晴天了。', '偏偏天气预报说晴天不。'] }
    ]
  },
  {
    key: 'hechang',
    level: 'HSK7-9',
    title: '何尝 - Đâu có, nào phải',
    pattern: 'Chủ ngữ + 何尝 + động từ / 不 + động từ (câu hỏi tu từ)',
    explanation: 'Câu hỏi tu từ mang tính văn viết, nghĩa "đâu có, nào phải". Dạng 何尝 + khẳng định mang nghĩa phủ định; 何尝不 + động từ mang nghĩa khẳng định mạnh ("làm sao lại không"). Thường đi với 呢 hoặc 吗 ở cuối.',
    examples: [
      { hanzi: '我何尝不想早点回家，可是工作走不开。', pinyin: 'Wǒ hécháng bù xiǎng zǎodiǎn huí jiā, kěshì gōngzuò zǒubukāi.', meaning: 'Tôi đâu có không muốn về nhà sớm, chỉ là công việc không rời được.' },
      { hanzi: '他何尝说过这样的话？', pinyin: 'Tā hécháng shuō guo zhèyàng de huà?', meaning: 'Anh ấy đã bao giờ nói lời như vậy đâu?' },
      { hanzi: '父母何尝不希望孩子过得幸福呢？', pinyin: 'Fùmǔ hécháng bù xīwàng háizi guò de xìngfú ne?', meaning: 'Cha mẹ nào lại không mong con cái sống hạnh phúc?' }
    ],
    quiz: [
      { question: '我何尝不知道这很难 có nghĩa là:', options: ['Tôi biết rõ việc này rất khó', 'Tôi không biết việc này khó', 'Tôi chưa từng nghe việc này'] },
      { question: '何尝 thuộc loại cách nói:', options: ['Câu hỏi tu từ mang tính văn viết', 'Câu mệnh lệnh', 'Câu cảm thán đơn thuần'] },
      { question: '"Anh ấy đâu có từng học tiếng Trung" dịch đúng là:', options: ['他何尝学过中文？', '他何尝不学过中文了。', '何尝他中文学过是。'] }
    ]
  },
  {
    key: 'mofei',
    level: 'HSK7-9',
    title: '莫非 - Lẽ nào, phải chăng',
    pattern: '莫非 + suy đoán (+ 吗 / 不成)',
    explanation: 'Dùng trong câu hỏi suy đoán khi người nói nghi ngờ nhưng thấy khó tin, nghĩa "lẽ nào", "phải chăng". Thường đứng đầu câu hoặc sau chủ ngữ, cuối câu hay có 不成 hoặc 吗. Mang sắc thái văn viết hoặc tự hỏi.',
    examples: [
      { hanzi: '灯还亮着，莫非他还没睡？', pinyin: 'Dēng hái liàng zhe, mòfēi tā hái méi shuì?', meaning: 'Đèn vẫn sáng, lẽ nào anh ấy chưa ngủ?' },
      { hanzi: '他今天一句话也不说，莫非出了什么事？', pinyin: 'Tā jīntiān yí jù huà yě bù shuō, mòfēi chū le shénme shì?', meaning: 'Hôm nay anh ấy không nói một lời, phải chăng đã xảy ra chuyện gì?' },
      { hanzi: '莫非你想一个人把这件事扛下来不成？', pinyin: 'Mòfēi nǐ xiǎng yí ge rén bǎ zhè jiàn shì káng xiàlái bùchéng?', meaning: 'Lẽ nào bạn định một mình gánh hết việc này sao?' }
    ],
    quiz: [
      { question: '莫非 dùng để:', options: ['Đưa ra suy đoán đầy nghi hoặc', 'Ra lệnh cho người khác', 'Khẳng định chắc chắn'] },
      { question: 'Câu nào dùng 莫非 đúng?', options: ['莫非他生病了不成？', '莫非他生病了，一定的。', '他莫非生病了了的。'] },
      { question: '"Lẽ nào trời sắp mưa?" dịch đúng là:', options: ['莫非要下雨了？', '莫非下雨了的不是。', '要下雨莫非了的。'] }
    ]
  },
  {
    key: 'wufei-buwaihu',
    level: 'HSK7-9',
    title: '无非 / 不外乎 - Chẳng qua là, không ngoài',
    pattern: 'Chủ ngữ + 无非 + là + điều nhỏ / quen thuộc; 不外乎 + A、B (và C)',
    explanation: 'Nhấn mạnh phạm vi chỉ có thế, "chẳng qua là", "không gì khác ngoài". 无非 thường đi với 是 hoặc động từ, hơi coi nhẹ. 不外乎 dùng để liệt kê một số khả năng đã hạn định, thiên về văn viết.',
    examples: [
      { hanzi: '他无非是想引起大家的注意。', pinyin: 'Tā wúfēi shì xiǎng yǐnqǐ dàjiā de zhùyì.', meaning: 'Anh ta chẳng qua chỉ muốn thu hút sự chú ý của mọi người.' },
      { hanzi: '人们买房的原因不外乎结婚、上学和投资。', pinyin: 'Rénmen mǎi fáng de yuányīn búwàihū jiéhūn, shàngxué hé tóuzī.', meaning: 'Lý do người ta mua nhà không ngoài kết hôn, đi học và đầu tư.' },
      { hanzi: '周末他无非就是在家看看书、睡睡觉。', pinyin: 'Zhōumò tā wúfēi jiùshì zài jiā kànkan shū, shuìshui jiào.', meaning: 'Cuối tuần anh ấy chẳng qua chỉ ở nhà đọc sách, ngủ nghỉ.' }
    ],
    quiz: [
      { question: '不外乎 thường đi với:', options: ['Liệt kê vài khả năng đã hạn định', 'Một con số cụ thể', 'Một mệnh lệnh'] },
      { question: '"Anh ta chẳng qua là nói đùa" dịch đúng là:', options: ['他无非是开玩笑。', '他无非不是开玩笑的。', '无非他开玩笑不是。'] },
      { question: 'Câu nào dùng 不外乎 đúng?', options: ['成功的秘诀不外乎勤奋和坚持。', '成功的秘诀不外乎一个人。', '不外乎成功秘诀的勤奋坚持不。'] }
    ]
  },
  {
    key: 'suizhe-de',
    level: 'HSK7-9',
    title: '随着...的... - Cùng với (sự)...thì...',
    pattern: '随着 + sự việc / quá trình + 的 + động từ danh hoá，+ kết quả thay đổi',
    explanation: 'Dùng trong văn viết và bản tin để nêu một quá trình đang diễn ra làm nền, kéo theo sự thay đổi ở vế sau. Phần sau 随着 thường là danh từ hoặc cụm có 的 (như 随着...的发展 / 提高 / 推进), vế sau mới là câu hoàn chỉnh, không đặt 随着 sau chủ ngữ.',
    examples: [
      { hanzi: '随着城市化进程的加快，农村人口逐年减少。', pinyin: 'Suízhe chéngshìhuà jìnchéng de jiākuài, nóngcūn rénkǒu zhúnián jiǎnshǎo.', meaning: 'Cùng với tiến trình đô thị hoá được đẩy nhanh, dân số nông thôn giảm dần theo từng năm.' },
      { hanzi: '随着科技的进步，人们的生活方式发生了巨大变化。', pinyin: 'Suízhe kējì de jìnbù, rénmen de shēnghuó fāngshì fāshēngle jùdà biànhuà.', meaning: 'Cùng với sự tiến bộ của khoa học kỹ thuật, lối sống của con người đã thay đổi rất lớn.' },
      { hanzi: '随着年龄的增长，他对家乡的思念越来越深。', pinyin: 'Suízhe niánlíng de zēngzhǎng, tā duì jiāxiāng de sīniàn yuèláiyuè shēn.', meaning: 'Cùng với tuổi tác tăng lên, nỗi nhớ quê hương của ông ấy ngày càng sâu đậm.' }
    ],
    quiz: [
      { question: 'Câu nào dùng 随着 đúng?', options: ['随着经济的发展，人们的收入提高了。', '人们随着经济的发展，的收入提高了。', '随着经济发展了，人们的收入提高。'] },
      { question: '"Cùng với việc giao thông được cải thiện, du lịch phát triển nhanh" dịch đúng là:', options: ['随着交通的改善，旅游业迅速发展起来。', '旅游业随着交通改善的，迅速发展起来。', '交通的改善随着，旅游业迅速发展。'] },
      { question: 'Vế sau 随着...的... thường diễn tả:', options: ['Sự thay đổi kéo theo', 'Một câu hỏi', 'Một lời cấm đoán'] }
    ]
  },
  {
    key: 'jiu-eryan',
    level: 'HSK7-9',
    title: '就...而言 / 以...而言 - Xét về...',
    pattern: '就 / 以 + đối tượng / phương diện + 而言，+ nhận định',
    explanation: 'Giới hạn phạm vi đánh giá vào một đối tượng hoặc phương diện cụ thể, nghĩa gần "xét về...", "nói riêng về...". Mang sắc thái văn viết, thường dùng trong bình luận, báo cáo; đặt đầu câu, sau 而言 có dấu phẩy.',
    examples: [
      { hanzi: '就这座城市而言，房价上涨的速度确实过快了。', pinyin: 'Jiù zhè zuò chéngshì ér yán, fángjià shàngzhǎng de sùdù quèshí guò kuài le.', meaning: 'Xét riêng thành phố này, tốc độ tăng giá nhà quả thực quá nhanh.' },
      { hanzi: '以教学质量而言，这所学校在全省名列前茅。', pinyin: 'Yǐ jiàoxué zhìliàng ér yán, zhè suǒ xuéxiào zài quánshěng míngliè qiánmáo.', meaning: 'Xét về chất lượng giảng dạy, trường này đứng hàng đầu toàn tỉnh.' },
      { hanzi: '就个人而言，我更愿意选择稳定的工作。', pinyin: 'Jiù gèrén ér yán, wǒ gèng yuànyì xuǎnzé wěndìng de gōngzuò.', meaning: 'Xét về cá nhân tôi, tôi thích chọn công việc ổn định hơn.' }
    ],
    quiz: [
      { question: 'Câu nào dùng 就...而言 đúng?', options: ['就环境而言，这里比市中心安静得多。', '这里就环境，比市中心而言安静得多。', '就环境这里而言比市中心安静得多。'] },
      { question: '就...而言 mang sắc thái:', options: ['Văn viết, nêu phạm vi đánh giá', 'Khẩu ngữ, nêu mệnh lệnh', 'Chỉ thời gian đã qua'] },
      { question: '"Xét về giá cả, sản phẩm này rất có sức cạnh tranh" dịch đúng là:', options: ['以价格而言，这款产品很有竞争力。', '价格而言以，这款产品很有竞争力。', '而言价格就，这款产品很有竞争力。'] }
    ]
  },
  {
    key: 'ping-pingjie',
    level: 'HSK7-9',
    title: '凭 / 凭借 - Dựa vào, nhờ vào',
    pattern: '凭 / 凭借 + năng lực / điều kiện / chứng cứ + ，+ đạt được điều gì',
    explanation: 'Chỉ cơ sở, điều kiện hoặc thế mạnh để làm nên việc gì. 凭 dùng cả khẩu ngữ lẫn văn viết, còn dùng với giấy tờ (凭票入场), hoặc trong câu hỏi bực dọc (凭什么). 凭借 trang trọng hơn, thường đi với năng lực, ưu thế, kinh nghiệm.',
    examples: [
      { hanzi: '他凭借多年积累的经验，成功化解了这场危机。', pinyin: 'Tā píngjiè duōnián jīlěi de jīngyàn, chénggōng huàjiěle zhè chǎng wēijī.', meaning: 'Nhờ kinh nghiệm tích luỹ nhiều năm, ông ấy đã hoá giải thành công cuộc khủng hoảng này.' },
      { hanzi: '游客须凭有效证件入园。', pinyin: 'Yóukè xū píng yǒuxiào zhèngjiàn rù yuán.', meaning: 'Du khách phải xuất trình giấy tờ hợp lệ mới được vào công viên.' },
      { hanzi: '这个年轻的球队凭着顽强的意志赢得了冠军。', pinyin: 'Zhè ge niánqīng de qiúduì píngzhe wánqiáng de yìzhì yíngdéle guànjūn.', meaning: 'Đội bóng trẻ này dựa vào ý chí kiên cường đã giành chức vô địch.' }
    ],
    quiz: [
      { question: '"Cô ấy nhờ tài năng mà đỗ vào trường danh tiếng" dịch đúng là:', options: ['她凭借自己的才华考上了名校。', '她考上了名校凭借自己的才华了。', '她自己的才华凭借，考上了名校。'] },
      { question: 'Sau 凭借 thường là:', options: ['Năng lực hoặc ưu thế', 'Một địa điểm', 'Một con số chỉ giờ'] },
      { question: '凭什么...? trong khẩu ngữ biểu thị:', options: ['Chất vấn, bất bình: dựa vào đâu mà...', 'Lời cảm ơn lịch sự', 'Một lời chào hỏi'] }
    ]
  },
  {
    key: 'wei-suo',
    level: 'HSK7-9',
    title: '为...所... - Bị...(bởi), văn viết',
    pattern: 'Chủ ngữ + 为 + tác nhân + 所 + động từ',
    explanation: 'Cấu trúc bị động của văn viết cổ điển, nghĩa như 被...所..., dùng trong văn trang trọng, thành ngữ hoặc bài báo. Động từ thường là hai âm tiết (如 感动、吸引、困扰), tác nhân đi sau 为 và không bỏ 所. Có thể gặp dạng 为...所...的 hoặc rút gọn 为人所知.',
    examples: [
      { hanzi: '他的善举深为人们所感动。', pinyin: 'Tā de shànjǔ shēn wéi rénmen suǒ gǎndòng.', meaning: 'Việc thiện của anh ấy khiến mọi người vô cùng cảm động.' },
      { hanzi: '这位作家的作品早已为广大读者所熟知。', pinyin: 'Zhè wèi zuòjiā de zuòpǐn zǎoyǐ wéi guǎngdà dúzhě suǒ shúzhī.', meaning: 'Tác phẩm của nhà văn này từ lâu đã được đông đảo độc giả biết đến.' },
      { hanzi: '长期失眠为许多现代人所困扰。', pinyin: 'Chángqī shīmián wéi xǔduō xiàndàirén suǒ kùnrǎo.', meaning: 'Chứng mất ngủ kéo dài đang làm phiền não nhiều người hiện đại.' }
    ],
    quiz: [
      { question: 'Câu nào dùng 为...所... đúng?', options: ['这种做法已为大多数人所接受。', '这种做法已所大多数人为接受。', '这种做法已为大多数人接受所。'] },
      { question: '为...所... có nghĩa gần với:', options: ['被...所...', '把...给...', '让...去...'] },
      { question: 'Cấu trúc 为...所... thường gặp trong:', options: ['Văn viết, báo chí, trang trọng', 'Lời chào hỏi hằng ngày', 'Tin nhắn thân mật'] }
    ]
  },
  {
    key: 'jiayi-yuyi',
    level: 'HSK7-9',
    title: '加以 / 予以 - Tiến hành, cho (trang trọng)',
    pattern: 'Chủ ngữ / đối tượng + 加以 / 予以 + động từ hai âm tiết',
    explanation: 'Hai động từ hình thức trong văn bản trang trọng, bản thân gần như không mang nghĩa, nghĩa nằm ở động từ sau. Đối tượng thường đặt trước (làm chủ đề); động từ theo sau phải là hai âm tiết, không có tân ngữ. 予以 thường đi với 批准、重视、表扬、处罚、肯定; 加以 thường đi với 分析、研究、改进、利用.',
    examples: [
      { hanzi: '对这些数据，我们必须加以认真分析。', pinyin: 'Duì zhèxiē shùjù, wǒmen bìxū jiāyǐ rènzhēn fēnxī.', meaning: 'Đối với những số liệu này, chúng ta phải tiến hành phân tích nghiêm túc.' },
      { hanzi: '对于见义勇为的行为，政府应予以表彰。', pinyin: 'Duìyú jiànyì yǒngwéi de xíngwéi, zhèngfǔ yīng yǔyǐ biǎozhāng.', meaning: 'Đối với hành vi dũng cảm vì việc nghĩa, chính phủ nên biểu dương.' },
      { hanzi: '这一提议已经得到领导的重视，并予以采纳。', pinyin: 'Zhè yī tíyì yǐjīng dédào lǐngdǎo de zhòngshì, bìng yǔyǐ cǎinà.', meaning: 'Đề xuất này đã được lãnh đạo coi trọng và chấp nhận.' }
    ],
    quiz: [
      { question: 'Câu nào dùng 加以 đúng?', options: ['这个问题需要加以研究。', '这个问题需要加以研究一下书。', '这个问题需要加以。'] },
      { question: 'Sau 加以 / 予以 thường là:', options: ['Động từ hai âm tiết', 'Danh từ chỉ người', 'Số lượng từ'] },
      { question: 'Câu nào KHÔNG đúng ngữ pháp?', options: ['我们应该加以看。', '对违规行为要予以处罚。', '对旧设备应加以改造。'] }
    ]
  },
  {
    key: 'jiyu-jianyu',
    level: 'HSK7-9',
    title: '基于 / 鉴于 - Dựa trên, xét thấy',
    pattern: '基于 + cơ sở，+ kết luận；鉴于 + tình hình，+ quyết định',
    explanation: 'Cả hai là giới từ văn viết dùng ở đầu câu. 基于 nêu cơ sở, căn cứ cho một phán đoán hoặc hành động ("dựa trên"). 鉴于 nêu tình hình có sẵn, từ đó đưa ra quyết định hoặc biện pháp ("xét thấy, xét rằng"), thường dùng trong văn bản, thông báo, hợp đồng.',
    examples: [
      { hanzi: '基于大量的实地调查，专家提出了新的保护方案。', pinyin: 'Jīyú dàliàng de shídì diàochá, zhuānjiā tíchūle xīn de bǎohù fāng\'àn.', meaning: 'Dựa trên rất nhiều khảo sát thực địa, các chuyên gia đã đưa ra phương án bảo vệ mới.' },
      { hanzi: '鉴于天气恶劣，主办方决定取消今天的比赛。', pinyin: 'Jiànyú tiānqì èliè, zhǔbànfāng juédìng qǔxiāo jīntiān de bǐsài.', meaning: 'Xét thấy thời tiết xấu, ban tổ chức quyết định huỷ trận đấu hôm nay.' },
      { hanzi: '鉴于目前的市场形势，公司暂不扩大生产规模。', pinyin: 'Jiànyú mùqián de shìchǎng xíngshì, gōngsī zàn bù kuòdà shēngchǎn guīmó.', meaning: 'Xét tình hình thị trường hiện nay, công ty tạm thời chưa mở rộng quy mô sản xuất.' }
    ],
    quiz: [
      { question: 'Câu nào dùng 鉴于 đúng?', options: ['鉴于情况特殊，学校允许他延期提交论文。', '学校允许他延期提交论文，鉴于情况特殊的。', '他鉴于，情况特殊学校允许延期。'] },
      { question: '基于 mang nghĩa gần nhất với:', options: ['Dựa trên (cơ sở)', 'Mặc dù', 'Cho dù'] },
      { question: 'Vế sau 鉴于...，thường là:', options: ['Quyết định hoặc biện pháp rút ra', 'Một câu cảm thán về quá khứ', 'Một câu chào hỏi'] }
    ]
  },
  {
    key: 'dongbudong-jiu',
    level: 'HSK7-9',
    title: '动不动就... - Hơi tí là...',
    pattern: 'Chủ ngữ + 动不动就 + động từ / hành động',
    explanation: 'Diễn tả một việc (thường không mong muốn) xảy ra rất dễ dàng, rất thường xuyên, chỉ một chút là xảy ra. Mang sắc thái phàn nàn, chê trách, dùng nhiều trong khẩu ngữ.',
    examples: [
      { hanzi: '他脾气很大，动不动就发火。', pinyin: 'Tā píqi hěn dà, dòngbudòng jiù fāhuǒ.', meaning: 'Anh ấy nóng tính lắm, hơi tí là nổi giận.' },
      { hanzi: '现在的孩子动不动就说压力大。', pinyin: 'Xiànzài de háizi dòngbudòng jiù shuō yālì dà.', meaning: 'Trẻ con bây giờ hơi tí là than áp lực lớn.' },
      { hanzi: '这台旧电脑动不动就死机，真让人头疼。', pinyin: 'Zhè tái jiù diànnǎo dòngbudòng jiù sǐjī, zhēn ràng rén tóuténg.', meaning: 'Chiếc máy tính cũ này hơi tí là treo máy, thật đau đầu.' }
    ],
    quiz: [
      { question: '"Anh ấy hơi tí là khóc" dịch đúng là:', options: ['他动不动就哭。', '他动不动哭就。', '他不动动就哭。'] },
      { question: '动不动就 thường dùng để nói về việc:', options: ['Không mong muốn mà xảy ra thường xuyên', 'Việc tốt hiếm khi xảy ra', 'Việc đã xảy ra đúng một lần'] },
      { question: 'Câu nào đúng ngữ pháp?', options: ['他动不动就生气。', '动不动就他生气。', '他生气动不动就。'] }
    ]
  },
  {
    key: 'buyoude-qingbuzijin',
    level: 'HSK7-9',
    title: '不由得 / 情不自禁 - Không kìm được, không khỏi',
    pattern: 'Chủ ngữ + 不由得 / 情不自禁地 + động từ',
    explanation: 'Diễn tả hành động hay cảm xúc xảy ra ngoài ý muốn, bị hoàn cảnh thúc đẩy nên không thể kiềm chế. 情不自禁 thường thêm 地 trước động từ, sắc thái văn chương hơn.',
    examples: [
      { hanzi: '听到这首老歌，她不由得红了眼眶。', pinyin: 'Tīngdào zhè shǒu lǎo gē, tā bùyóude hóngle yǎnkuàng.', meaning: 'Nghe bài hát cũ này, cô ấy không khỏi đỏ hoe mắt.' },
      { hanzi: '看着孩子们天真的笑脸，我情不自禁地笑了起来。', pinyin: 'Kànzhe háizimen tiānzhēn de xiàoliǎn, wǒ qíngbùzìjīn de xiào le qǐlai.', meaning: 'Nhìn gương mặt tươi cười ngây thơ của lũ trẻ, tôi không kìm được bật cười.' },
      { hanzi: '站在长城上，他不由得感叹祖国山河的壮丽。', pinyin: 'Zhàn zài Chángchéng shàng, tā bùyóude gǎntàn zǔguó shānhé de zhuànglì.', meaning: 'Đứng trên Vạn Lý Trường Thành, anh không khỏi cảm thán sự hùng vĩ của non sông đất nước.' }
    ],
    quiz: [
      { question: '情不自禁 có nghĩa là:', options: ['Không kìm được lòng mình', 'Không có tình cảm', 'Không được tự do'] },
      { question: '不由得 diễn tả hành động:', options: ['Xảy ra ngoài ý muốn, khó kiềm chế', 'Đã được cân nhắc kỹ từ trước', 'Mang tính mệnh lệnh bắt buộc'] },
      { question: 'Câu nào đúng ngữ pháp?', options: ['她情不自禁地哼起歌来。', '她情不自禁哼的起歌来。', '她情不自禁了哼歌。'] }
    ]
  },
  {
    key: 'nanyi-bubian',
    level: 'HSK7-9',
    title: '难以 / 不便 - Khó mà, bất tiện',
    pattern: 'Chủ ngữ + 难以 / 不便 + động từ',
    explanation: '难以 + động từ nghĩa là khó mà làm được, mang sắc thái văn viết, thường đi với động từ song âm tiết (难以想象, 难以置信). 不便 + động từ nghĩa là không tiện làm gì, dùng lịch sự, trang trọng.',
    examples: [
      { hanzi: '这种感受难以用语言形容。', pinyin: 'Zhè zhǒng gǎnshòu nányǐ yòng yǔyán xíngróng.', meaning: 'Cảm giác này khó mà diễn tả bằng lời.' },
      { hanzi: '他的处境十分尴尬，实在难以开口。', pinyin: 'Tā de chǔjìng shífēn gāngà, shízài nányǐ kāikǒu.', meaning: 'Hoàn cảnh của anh ấy rất khó xử, thật khó mà mở lời.' },
      { hanzi: '这件事涉及隐私，我不便多说。', pinyin: 'Zhè jiàn shì shèjí yǐnsī, wǒ búbiàn duō shuō.', meaning: 'Việc này liên quan đến riêng tư, tôi không tiện nói nhiều.' }
    ],
    quiz: [
      { question: '难以 thường đứng trước:', options: ['Động từ (văn viết)', 'Danh từ', 'Số từ'] },
      { question: '"Khó mà tin được" dịch đúng là:', options: ['难以置信', '难以不信', '难以相信不'] },
      { question: '不便 trong "我不便多说" có nghĩa:', options: ['Không tiện nói nhiều', 'Rất tiện nói nhiều', 'Không cần nói nữa'] }
    ]
  },
  {
    key: 'nanguai-guaibude',
    level: 'HSK7-9',
    title: '难怪 / 怪不得 - Thảo nào',
    pattern: 'Nguyên nhân (vừa biết) + 难怪 / 怪不得 + kết quả   hoặc   难怪 / 怪不得 + kết quả，原来 + nguyên nhân',
    explanation: 'Diễn tả sự vỡ lẽ: sau khi biết nguyên nhân thì thấy hiện tượng trước đó là chuyện hợp lý, không còn lấy làm lạ. 难怪 và 怪不得 dùng thay nhau được, 怪不得 khẩu ngữ hơn.',
    examples: [
      { hanzi: '原来他是北方人，难怪不怕冷。', pinyin: 'Yuánlái tā shì běifāng rén, nánguài bú pà lěng.', meaning: 'Hóa ra anh ấy là người miền Bắc, thảo nào không sợ lạnh.' },
      { hanzi: '外面下了一夜的雪，怪不得今天这么冷。', pinyin: 'Wàimiàn xiàle yí yè de xuě, guàibude jīntiān zhème lěng.', meaning: 'Bên ngoài tuyết rơi suốt đêm, thảo nào hôm nay lạnh thế.' },
      { hanzi: '你熬了三天夜，难怪脸色这么差。', pinyin: 'Nǐ áole sān tiān yè, nánguài liǎnsè zhème chà.', meaning: 'Bạn thức ba đêm liền, thảo nào sắc mặt tệ vậy.' }
    ],
    quiz: [
      { question: '难怪 mang nghĩa:', options: ['Thảo nào (hiểu ra lý do)', 'Rất kỳ lạ', 'Không thích'] },
      { question: '"Thảo nào hôm nay đường kẹt xe thế" dịch đúng là:', options: ['怪不得今天路上这么堵。', '怪不得今天路上堵不得。', '不怪得今天路上这么堵。'] },
      { question: '难怪 và 怪不得 quan hệ thế nào?', options: ['Cùng nghĩa, dùng thay nhau được', 'Nghĩa trái ngược nhau', 'Chỉ 难怪 mới dùng được trong câu'] }
    ]
  },
  {
    key: 'bufang',
    level: 'HSK7-9',
    title: '不妨 - Cứ thử, không ngại gì',
    pattern: 'Chủ ngữ + 不妨 + động từ (+ 试试 / 看看)',
    explanation: 'Dùng để đề nghị nhẹ nhàng, ý là làm việc đó cũng không có hại gì, không ngại thử. Thường dùng khi đưa lời khuyên, gợi ý cho người khác, giọng lịch sự.',
    examples: [
      { hanzi: '如果你拿不定主意，不妨先问问专家的意见。', pinyin: 'Rúguǒ nǐ ná bú dìng zhǔyi, bùfáng xiān wènwen zhuānjiā de yìjiàn.', meaning: 'Nếu bạn chưa quyết được, cứ hỏi ý kiến chuyên gia trước cũng không sao.' },
      { hanzi: '周末天气好，不妨带家人去郊外走走。', pinyin: 'Zhōumò tiānqì hǎo, bùfáng dài jiārén qù jiāowài zǒuzou.', meaning: 'Cuối tuần trời đẹp, cứ đưa gia đình ra ngoại ô dạo chơi.' },
      { hanzi: '这个办法虽然没人试过，但不妨一试。', pinyin: 'Zhège bànfǎ suīrán méi rén shìguo, dàn bùfáng yí shì.', meaning: 'Cách này tuy chưa ai thử, nhưng cứ thử một lần cũng không hại gì.' }
    ],
    quiz: [
      { question: '不妨 có nghĩa gần nhất là:', options: ['Cứ thử cũng không sao', 'Nhất định không được', 'Không thể làm'] },
      { question: '"Khuyên bạn cứ thử xem" dịch đúng là:', options: ['你不妨试试看。', '你妨不试试看。', '你不妨别试看不。'] },
      { question: '不妨 thường dùng khi:', options: ['Gợi ý nhẹ nhàng cho việc không gây hại', 'Ra lệnh bắt buộc', 'Cảnh báo có nguy hiểm'] }
    ]
  },
  {
    key: 'zai-buguole',
    level: 'HSK7-9',
    title: '再...不过了 - Không gì...bằng',
    pattern: 'Chủ ngữ + 再 + tính từ + 不过了',
    explanation: 'Cấu trúc so sánh cực hạn: không có gì tính từ hơn thế nữa, tức là nhất, tuyệt nhất. Dù hình thức phủ định nhưng ý nghĩa rất khẳng định; tính từ thường là loại tích cực như 好, 方便, 合适, 简单.',
    examples: [
      { hanzi: '这家餐厅环境好，价格也合理，再适合聚会不过了。', pinyin: 'Zhè jiā cāntīng huánjìng hǎo, jiàgé yě hélǐ, zài shìhé jùhuì bú guò le.', meaning: 'Nhà hàng này không gian đẹp, giá cũng hợp lý, không gì thích hợp để tụ họp bằng.' },
      { hanzi: '能和你一起去旅行，那再好不过了。', pinyin: 'Néng hé nǐ yìqǐ qù lǚxíng, nà zài hǎo bú guò le.', meaning: 'Được đi du lịch cùng bạn thì còn gì tuyệt hơn.' },
      { hanzi: '他对这一带了如指掌，让他带路再合适不过了。', pinyin: 'Tā duì zhè yídài liǎo rú zhǐ zhǎng, ràng tā dàilù zài héshì bú guò le.', meaning: 'Anh ấy rất rành khu này, để anh ấy dẫn đường là hợp nhất.' }
    ],
    quiz: [
      { question: '再好不过了 có nghĩa là:', options: ['Tốt nhất rồi, không gì tốt hơn', 'Không tốt lắm', 'Tốt hơn trước một chút'] },
      { question: '"Không gì tiện hơn" dịch đúng là:', options: ['再方便不过了。', '再方便过不了。', '不再方便过了。'] },
      { question: 'Giữa 再 và 不过了 thường là:', options: ['Tính từ', 'Danh từ chỉ nơi chốn', 'Phó từ phủ định 没'] }
    ]
  },
  {
    key: 'bumian-nanmian',
    level: 'HSK7-9',
    title: '不免 / 难免 - Khó tránh khỏi',
    pattern: 'Chủ ngữ + 不免 / 难免 + (会) + kết quả',
    explanation: 'Diễn tả một kết quả (thường không như ý) khó tránh khỏi trong hoàn cảnh nào đó. 难免 có thể làm vị ngữ (这是难免的) hoặc đứng trước động từ, còn 不免 chỉ làm trạng ngữ trước động từ; cả hai đều thiên về văn viết.',
    examples: [
      { hanzi: '第一次上台演讲，难免会紧张。', pinyin: 'Dì yī cì shàng tái yǎnjiǎng, nánmiǎn huì jǐnzhāng.', meaning: 'Lần đầu lên sân khấu diễn thuyết, khó tránh khỏi hồi hộp.' },
      { hanzi: '离家多年，他不免有些想念故乡。', pinyin: 'Lí jiā duō nián, tā bùmiǎn yǒuxiē xiǎngniàn gùxiāng.', meaning: 'Xa nhà nhiều năm, anh ấy không khỏi nhớ quê hương đôi chút.' },
      { hanzi: '在人生的路上，谁都难免遇到挫折。', pinyin: 'Zài rénshēng de lù shang, shéi dōu nánmiǎn yùdào cuòzhé.', meaning: 'Trên đường đời, ai cũng khó tránh gặp trắc trở.' }
    ],
    quiz: [
      { question: '难免 có nghĩa là:', options: ['Khó tránh khỏi', 'Có thể tránh được', 'Rất hiếm khi xảy ra'] },
      { question: '"Mới học nên khó tránh khỏi sai" dịch đúng là:', options: ['刚学，难免会出错。', '刚学，难免不会出错。', '刚学，难免没出错。'] },
      { question: 'Điểm khác giữa 难免 và 不免:', options: ['难免 có thể nói 是难免的, 不免 thì không', '不免 có thể nói 是不免的, 难免 thì không', 'Hai từ nghĩa hoàn toàn trái nhau'] }
    ]
  }
]
