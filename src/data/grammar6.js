// Diem ngu phap HSK6 - van viet trang trong, tiep noi grammar.js/grammar2/3/4/5.js.
export const HSK6_GRAMMAR = [
  {
    key: 'zhi-wenyan',
    level: 'HSK6',
    title: '之 - "của" trong văn viết trang trọng',
    pattern: 'A + 之 + B (thay cho 的 trong văn viết/thành ngữ)',
    explanation: '之 là hình thức trang trọng, mang màu sắc văn viết cổ điển của 的, thường xuất hiện trong văn viết học thuật, bài phát biểu, thành ngữ, tên gọi.',
    examples: [
      { hanzi: '这是我们成功之路。', pinyin: 'Zhè shì wǒmen chénggōng zhī lù.', meaning: 'Đây là con đường thành công của chúng ta.' },
      { hanzi: '长江是中华民族之骄傲。', pinyin: 'Chángjiāng shì Zhōnghuá mínzú zhī jiāo\'ào.', meaning: 'Trường Giang là niềm tự hào của dân tộc Trung Hoa.' },
      { hanzi: '父母之爱，无以言表。', pinyin: 'Fùmǔ zhī ài, wúyǐ yánbiǎo.', meaning: 'Tình yêu của cha mẹ, không lời nào diễn tả hết.' }
    ],
    quiz: [
      { question: '之 trong văn viết trang trọng tương đương với từ nào trong khẩu ngữ?', options: ['的', '了', '着'], },
      { question: '"Tương lai của đất nước" (văn viết trang trọng) dịch đúng là:', options: ['国家之未来', '国家未来之', '之国家未来'] },
      { question: '之 thường xuất hiện nhiều nhất ở loại văn bản nào?', options: ['Văn viết học thuật, thành ngữ, tên gọi trang trọng', 'Tin nhắn chat hằng ngày', 'Khẩu ngữ ngoài chợ'] }
    ]
  },
  {
    key: 'zhe-wenyan',
    level: 'HSK6',
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
    level: 'HSK6',
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
    key: 'yidan-jiu',
    level: 'HSK6',
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
    key: 'hebi',
    level: 'HSK6',
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
    level: 'HSK6',
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
    level: 'HSK6',
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
    key: 'weimian',
    level: 'HSK6',
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
    level: 'HSK6',
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
