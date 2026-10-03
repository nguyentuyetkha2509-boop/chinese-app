// Truyen dai HSK7-9: cac truyen thanh ngu / lich su co dien cua Trung Quoc (thuoc kho tang chung,
// khong vuong ban quyen), soan lai bang tieng Trung trinh do cao cap. Cung cau truc voi stories6.js:
// chuong -> cau {hanzi, pinyin, meaning} va bai doc hieu cuoi truyen, trong do options[0] la dap an dung.
export const STORIES_HSK7 = [
  {
    key: 'wanbi-guizhao',
    icon: '💎',
    title: 'Hoàn bích về Triệu (完璧归赵)',
    level: 'HSK7-9',
    chapters: [
      {
        title: 'Phần 1: Viên ngọc giá trị liền thành',
        lines: [
          { hanzi: '战国时期，赵惠文王得到了一块举世闻名的和氏璧，价值连城。', pinyin: 'Zhànguó shíqī, Zhào Huìwénwáng dédàole yí kuài jǔshì wénmíng de Héshìbì, jiàzhí liánchéng.', meaning: 'Thời Chiến Quốc, Triệu Huệ Văn Vương có được một viên ngọc Hòa thị nổi tiếng thiên hạ, giá trị liền thành.' },
          { hanzi: '强大的秦国听说以后，便派使者送信，声称愿意用十五座城池来交换这块宝玉。', pinyin: 'Qiángdà de Qínguó tīngshuō yǐhòu, biàn pài shǐzhě sòng xìn, shēngchēng yuànyì yòng shíwǔ zuò chéngchí lái jiāohuàn zhè kuài bǎoyù.', meaning: 'Nước Tần hùng mạnh nghe tin liền sai sứ giả đưa thư, tuyên bố sẵn lòng đổi mười lăm thành trì lấy viên ngọc quý này.' },
          { hanzi: '赵王明知秦国不怀好意，可是又怕得罪强邻，招来战祸，因此左右为难。', pinyin: 'Zhào Wáng míng zhī Qínguó bù huái hǎoyì, kěshì yòu pà dézuì qiánglín, zhāolái zhànhuò, yīncǐ zuǒyòu wéinán.', meaning: 'Triệu Vương biết rõ nước Tần không có ý tốt, nhưng lại sợ đắc tội với nước láng giềng mạnh, rước họa chiến tranh, nên tiến thoái lưỡng nan.' },
          { hanzi: '这时，宦官缪贤的门客蔺相如挺身而出，自愿带着宝玉出使秦国。', pinyin: 'Zhè shí, huànguān Miào Xián de ménkè Lìn Xiàngrú tǐngshēn ér chū, zìyuàn dàizhe bǎoyù chūshǐ Qínguó.', meaning: 'Lúc này, môn khách của hoạn quan Mậu Hiền là Lận Tương Như đứng ra, tình nguyện mang ngọc đi sứ nước Tần.' },
          { hanzi: '他向赵王保证："如果秦国交不出城池，我一定把宝玉完好无损地带回赵国。"', pinyin: 'Tā xiàng Zhào Wáng bǎozhèng: "Rúguǒ Qínguó jiāo bu chū chéngchí, wǒ yídìng bǎ bǎoyù wánhǎo wúsǔn de dàihuí Zhàoguó."', meaning: 'Ông hứa với Triệu Vương: "Nếu nước Tần không giao ra thành trì, thần nhất định mang ngọc nguyên vẹn về nước Triệu."' }
        ]
      },
      {
        title: 'Phần 2: Đấu trí trên điện Chương Đài',
        lines: [
          { hanzi: '秦王在章台接见蔺相如，接过宝玉后爱不释手，还传给左右的大臣和美人观赏。', pinyin: 'Qín Wáng zài Zhāngtái jiējiàn Lìn Xiàngrú, jiēguò bǎoyù hòu ài bú shì shǒu, hái chuángěi zuǒyòu de dàchén hé měirén guānshǎng.', meaning: 'Tần Vương tiếp kiến Lận Tương Như ở Chương Đài, cầm được ngọc thì yêu thích không rời tay, còn chuyền cho các đại thần và mỹ nhân hai bên xem.' },
          { hanzi: '蔺相如看出秦王根本没有交割城池的诚意，心生一计。', pinyin: 'Lìn Xiàngrú kànchū Qín Wáng gēnběn méiyǒu jiāogē chéngchí de chéngyì, xīn shēng yí jì.', meaning: 'Lận Tương Như nhận ra Tần Vương hoàn toàn không có thành ý giao thành trì, bèn nghĩ ra một kế.' },
          { hanzi: '他走上前去说："这块玉上有一点小瑕疵，请让我指给大王看。"', pinyin: 'Tā zǒu shàngqián qù shuō: "Zhè kuài yù shàng yǒu yìdiǎn xiǎo xiácī, qǐng ràng wǒ zhǐgěi dàwáng kàn."', meaning: 'Ông bước lên nói: "Viên ngọc này có một vết nhỏ, xin để thần chỉ cho đại vương xem."' },
          { hanzi: '宝玉一回到手里，他立刻后退几步，靠着柱子，怒发冲冠地说道。', pinyin: 'Bǎoyù yì huídào shǒu lǐ, tā lìkè hòutuì jǐ bù, kàozhe zhùzi, nùfà chōngguān de shuōdào.', meaning: 'Ngọc vừa về đến tay, ông lập tức lùi mấy bước, tựa vào cột, giận đến tóc dựng ngược mà nói.' },
          { hanzi: '"大王若是强行夺玉，我宁可让我的头和这块璧一起撞碎在柱子上！"', pinyin: '"Dàwáng ruòshì qiángxíng duó yù, wǒ nìngkě ràng wǒ de tóu hé zhè kuài bì yìqǐ zhuàngsuì zài zhùzi shàng!"', meaning: '"Nếu đại vương cưỡng đoạt ngọc, thần thà để đầu mình cùng viên ngọc này đập nát trên cột!"' },
          { hanzi: '秦王担心玉被撞坏，只好假意答应斋戒五天，再举行隆重的接受仪式。', pinyin: 'Qín Wáng dānxīn yù bèi zhuànghuài, zhǐhǎo jiǎyì dāying zhāijiè wǔ tiān, zài jǔxíng lóngzhòng de jiēshòu yíshì.', meaning: 'Tần Vương sợ ngọc bị đập vỡ, đành giả vờ nhận lời trai giới năm ngày rồi mới cử hành nghi lễ nhận ngọc long trọng.' }
        ]
      },
      {
        title: 'Phần 3: Ngọc về nguyên vẹn',
        lines: [
          { hanzi: '蔺相如料定秦王不会真心割城，当晚就派随从穿着粗布衣服，把宝玉悄悄送回了赵国。', pinyin: 'Lìn Xiàngrú liàodìng Qín Wáng bú huì zhēnxīn gē chéng, dàngwǎn jiù pài suícóng chuānzhe cūbù yīfu, bǎ bǎoyù qiāoqiāo sònghuíle Zhàoguó.', meaning: 'Lận Tương Như đoán chắc Tần Vương không thật lòng cắt thành, ngay đêm đó sai tùy tùng mặc áo vải thô, lén đưa ngọc về nước Triệu.' },
          { hanzi: '五天以后，他在朝堂上坦然地对秦王说，宝玉已经回到了赵国。', pinyin: 'Wǔ tiān yǐhòu, tā zài cháotáng shàng tǎnrán de duì Qín Wáng shuō, bǎoyù yǐjīng huídàole Zhàoguó.', meaning: 'Năm ngày sau, ông thản nhiên nói với Tần Vương trên triều đường rằng ngọc đã về đến nước Triệu.' },
          { hanzi: '他还说："秦国若真有诚意，先割十五座城给赵国，赵国岂敢留下宝玉而得罪大王？"', pinyin: 'Tā hái shuō: "Qínguó ruò zhēn yǒu chéngyì, xiān gē shíwǔ zuò chéng gěi Zhàoguó, Zhàoguó qǐ gǎn liúxià bǎoyù ér dézuì dàwáng?"', meaning: 'Ông còn nói: "Nếu nước Tần thật có thành ý, cứ cắt mười lăm thành cho nước Triệu trước, nước Triệu há dám giữ ngọc mà đắc tội với đại vương?"' },
          { hanzi: '秦王听了又气又无奈，考虑到杀了使者会失信于天下，最后还是放他回国。', pinyin: 'Qín Wáng tīngle yòu qì yòu wúnài, kǎolǜ dào shāle shǐzhě huì shīxìn yú tiānxià, zuìhòu háishi fàng tā huíguó.', meaning: 'Tần Vương nghe xong vừa tức vừa bất lực, nghĩ đến việc giết sứ giả sẽ mất tín với thiên hạ, cuối cùng vẫn thả ông về nước.' },
          { hanzi: '蔺相如凭着过人的胆识和智慧，终于使宝玉完整无缺地回到了赵国。', pinyin: 'Lìn Xiàngrú píngzhe guòrén de dǎnshí hé zhìhuì, zhōngyú shǐ bǎoyù wánzhěng wúquē de huídàole Zhàoguó.', meaning: 'Nhờ đởm lược và trí tuệ hơn người, Lận Tương Như rốt cuộc đã đưa ngọc trở về nước Triệu nguyên vẹn không sứt mẻ.' },
          { hanzi: '后来，人们就用"完璧归赵"这个成语，比喻把原物完好地归还给原主。', pinyin: 'Hòulái, rénmen jiù yòng "wán bì guī Zhào" zhège chéngyǔ, bǐyù bǎ yuánwù wánhǎo de guīhuán gěi yuánzhǔ.', meaning: 'Về sau, người ta dùng thành ngữ "hoàn bích quy Triệu" để ví việc trả lại vật cũ nguyên vẹn cho chủ cũ.' }
        ]
      }
    ],
    quiz: [
      { question: '秦国为什么想要和氏璧？', options: ['声称愿意用十五座城来交换', '赵王主动送给秦王', '秦王想把它献给赵国'] },
      { question: '蔺相如是怎么从秦王手里拿回宝玉的？', options: ['说玉上有瑕疵，借机拿回玉', '派士兵把玉抢了回来', '用十五座城把玉买了回来'] },
      { question: '蔺相如靠着柱子，说如果秦王强行夺玉会怎样？', options: ['他会和玉一起撞碎在柱子上', '他会马上带兵攻打秦国', '他会把玉扔进江里'] },
      { question: '"完璧归赵"这个成语比喻什么？', options: ['把原物完好地归还给原主', '用珍宝换取城池', '向别人认错赔罪'] }
    ]
  },
  {
    key: 'fujing-qingzui',
    icon: '🎋',
    title: 'Cõng roi mây xin chịu tội (负荆请罪)',
    level: 'HSK7-9',
    chapters: [
      {
        title: 'Phần 1: Lòng bất bình của Liêm Pha',
        lines: [
          { hanzi: '蔺相如因为完璧归赵和渑池之会立了大功，被赵王封为上卿，职位比大将军廉颇还高。', pinyin: 'Lìn Xiàngrú yīnwèi wán bì guī Zhào hé Miǎnchí zhī huì lìle dàgōng, bèi Zhào Wáng fēngwéi shàngqīng, zhíwèi bǐ dà jiāngjūn Lián Pō hái gāo.', meaning: 'Lận Tương Như nhờ lập công lớn trong việc hoàn bích quy Triệu và hội Dân Trì, được Triệu Vương phong làm thượng khanh, chức vị còn cao hơn đại tướng quân Liêm Pha.' },
          { hanzi: '廉颇对此愤愤不平，说："我身经百战，攻城野战，立下无数战功；他不过靠一张嘴，地位却在我之上！"', pinyin: 'Lián Pō duì cǐ fènfèn bùpíng, shuō: "Wǒ shēn jīng bǎi zhàn, gōngchéng yězhàn, lìxià wúshù zhàngōng; tā búguò kào yì zhāng zuǐ, dìwèi què zài wǒ zhī shàng!"', meaning: 'Liêm Pha bất bình, nói: "Ta trăm trận chinh chiến, đánh thành đánh đồng, lập vô số chiến công; hắn chỉ dựa vào một cái miệng mà địa vị lại ở trên ta!"' },
          { hanzi: '他还公开扬言："我见到蔺相如，一定要当面羞辱他！"', pinyin: 'Tā hái gōngkāi yángyán: "Wǒ jiàndào Lìn Xiàngrú, yídìng yào dāngmiàn xiūrǔ tā!"', meaning: 'Ông còn công khai tuyên bố: "Gặp Lận Tương Như, ta nhất định phải sỉ nhục hắn trước mặt!"' },
          { hanzi: '蔺相如听说以后，处处避让，每逢上朝，常常称病不去，免得与廉颇争位次。', pinyin: 'Lìn Xiàngrú tīngshuō yǐhòu, chùchù bìràng, měiféng shàngcháo, chángcháng chēngbìng bú qù, miǎnde yǔ Lián Pō zhēng wèicì.', meaning: 'Lận Tương Như nghe vậy, nhường nhịn mọi nơi, mỗi khi vào triều thường cáo bệnh không đi, để khỏi tranh thứ bậc với Liêm Pha.' },
          { hanzi: '有一次，他在路上远远看见廉颇的车马，立刻吩咐车夫掉头躲进小巷。', pinyin: 'Yǒu yí cì, tā zài lùshàng yuǎnyuǎn kànjiàn Lián Pō de chēmǎ, lìkè fēnfù chēfū diàotóu duǒjìn xiǎoxiàng.', meaning: 'Có lần, ông từ xa trông thấy xe ngựa của Liêm Pha trên đường, lập tức bảo người đánh xe quay đầu trốn vào ngõ nhỏ.' }
        ]
      },
      {
        title: 'Phần 2: Việc nước trước, thù riêng sau',
        lines: [
          { hanzi: '门客们觉得很丢脸，纷纷请求告辞，说："我们是仰慕您的品德才来投奔的，您却如此怕廉将军。"', pinyin: 'Ménkèmen juéde hěn diūliǎn, fēnfēn qǐngqiú gàocí, shuō: "Wǒmen shì yǎngmù nín de pǐndé cái lái tóubèn de, nín què rúcǐ pà Lián jiāngjūn."', meaning: 'Các môn khách thấy mất mặt, lần lượt xin cáo từ, nói: "Chúng tôi ngưỡng mộ phẩm đức của ngài mới đến nương tựa, vậy mà ngài lại sợ tướng quân Liêm đến thế."' },
          { hanzi: '蔺相如问他们："廉将军和秦王相比，谁更厉害？"', pinyin: 'Lìn Xiàngrú wèn tāmen: "Lián jiāngjūn hé Qín Wáng xiāngbǐ, shéi gèng lìhai?"', meaning: 'Lận Tương Như hỏi họ: "Tướng quân Liêm so với Tần Vương, ai lợi hại hơn?"' },
          { hanzi: '门客们答道："当然是秦王更厉害。"', pinyin: 'Ménkèmen dádào: "Dāngrán shì Qín Wáng gèng lìhai."', meaning: 'Các môn khách đáp: "Đương nhiên là Tần Vương lợi hại hơn."' },
          { hanzi: '蔺相如说："我连秦王都敢在朝堂上斥责，难道还会怕廉将军吗？"', pinyin: 'Lìn Xiàngrú shuō: "Wǒ lián Qín Wáng dōu gǎn zài cháotáng shàng chìzé, nándào hái huì pà Lián jiāngjūn ma?"', meaning: 'Lận Tương Như nói: "Ta còn dám quở trách cả Tần Vương trên triều đường, lẽ nào lại sợ tướng quân Liêm sao?"' },
          { hanzi: '"我只是想，强大的秦国之所以不敢进攻赵国，就是因为有我们两个人在。"', pinyin: '"Wǒ zhǐshì xiǎng, qiángdà de Qínguó zhī suǒyǐ bù gǎn jìngōng Zhàoguó, jiù shì yīnwèi yǒu wǒmen liǎng gè rén zài."', meaning: '"Ta chỉ nghĩ rằng, nước Tần hùng mạnh sở dĩ không dám tấn công nước Triệu chính là vì có hai chúng ta ở đây."' },
          { hanzi: '"两虎相争，必有一伤；我把国家的危难放在前面，把个人的私怨放在后面。"', pinyin: '"Liǎng hǔ xiāng zhēng, bì yǒu yì shāng; wǒ bǎ guójiā de wēinàn fàng zài qiánmiàn, bǎ gèrén de sīyuàn fàng zài hòumiàn."', meaning: '"Hai hổ đánh nhau, ắt có một bên bị thương; ta đặt nguy nan của quốc gia lên trước, đặt oán riêng của cá nhân ra sau."' }
        ]
      },
      {
        title: 'Phần 3: Cõng roi mây tạ tội',
        lines: [
          { hanzi: '这番话后来传到了廉颇的耳朵里，他听后惭愧万分，深深感到自己的狭隘。', pinyin: 'Zhè fān huà hòulái chuándàole Lián Pō de ěrduo lǐ, tā tīng hòu cánkuì wànfēn, shēnshēn gǎndào zìjǐ de xiá\'ài.', meaning: 'Những lời này sau đó đến tai Liêm Pha, ông nghe xong hổ thẹn vô cùng, thấm thía sự hẹp hòi của mình.' },
          { hanzi: '于是，廉颇脱去上衣，露出脊背，背着一根荆条，来到了蔺相如的府上。', pinyin: 'Yúshì, Lián Pō tuōqù shàngyī, lùchū jǐbèi, bēizhe yì gēn jīngtiáo, láidàole Lìn Xiàngrú de fǔ shàng.', meaning: 'Thế là Liêm Pha cởi áo trên, để trần lưng, cõng một cây roi mây, đến phủ của Lận Tương Như.' },
          { hanzi: '他跪在地上说："我是个粗野浅薄的人，想不到您竟然如此宽宏大量，请您责罚我吧！"', pinyin: 'Tā guì zài dìshàng shuō: "Wǒ shì ge cūyě qiǎnbó de rén, xiǎng bu dào nín jìngrán rúcǐ kuānhóng dàliàng, qǐng nín zéfá wǒ ba!"', meaning: 'Ông quỳ xuống đất nói: "Ta là kẻ thô lỗ nông cạn, không ngờ ngài lại khoan hồng độ lượng đến thế, xin ngài trách phạt ta!"' },
          { hanzi: '蔺相如连忙亲手扶起廉颇，两人紧紧握手，相对而笑，从此冰释前嫌。', pinyin: 'Lìn Xiàngrú liánmáng qīnshǒu fúqǐ Lián Pō, liǎng rén jǐnjǐn wòshǒu, xiāng duì ér xiào, cóngcǐ bīngshì qiánxián.', meaning: 'Lận Tương Như vội đích thân đỡ Liêm Pha dậy, hai người nắm chặt tay, nhìn nhau mỉm cười, từ đó tan băng hiềm khích cũ.' },
          { hanzi: '他们结为生死与共的好友，同心协力辅佐赵王，秦国因此多年不敢来犯。', pinyin: 'Tāmen jiéwéi shēngsǐ yǔ gòng de hǎoyǒu, tóngxīn xiélì fǔzuǒ Zhào Wáng, Qínguó yīncǐ duōnián bù gǎn lái fàn.', meaning: 'Hai người kết thành bạn thân sống chết có nhau, đồng tâm hiệp lực phò tá Triệu Vương, nhờ vậy nhiều năm nước Tần không dám xâm phạm.' },
          { hanzi: '"负荆请罪"这个成语，就是形容主动向别人认错赔罪的诚恳态度。', pinyin: '"Fù jīng qǐng zuì" zhège chéngyǔ, jiù shì xíngróng zhǔdòng xiàng biérén rèncuò péizuì de chéngkěn tàidu.', meaning: 'Thành ngữ "phụ kinh thỉnh tội" dùng để chỉ thái độ chân thành chủ động nhận lỗi, tạ tội với người khác.' }
        ]
      }
    ],
    quiz: [
      { question: '廉颇为什么对蔺相如不满？', options: ['蔺相如凭口才立功，职位却比他高', '蔺相如抢走了他的兵权', '蔺相如当面骂过他'] },
      { question: '蔺相如为什么处处避让廉颇？', options: ['把国家的安危放在个人恩怨之前', '他真的害怕廉颇', '他想让廉颇丢掉官位'] },
      { question: '廉颇知道真相以后是怎么做的？', options: ['背着荆条到蔺相如家请罪', '向赵王告发蔺相如', '带着军队离开了赵国'] },
      { question: '"负荆请罪"这个成语形容什么？', options: ['主动认错赔罪的诚恳态度', '两个人互相争斗', '用计谋夺回宝物'] }
    ]
  },
  {
    key: 'caochuan-jiejian',
    icon: '🚣',
    title: 'Thuyền cỏ mượn tên (草船借箭)',
    level: 'HSK7-9',
    chapters: [
      {
        title: 'Phần 1: Quân lệnh trạng ba ngày',
        lines: [
          { hanzi: '赤壁大战前夕，吴蜀两国联合抗击曹操，诸葛亮受命前往东吴协助周瑜。', pinyin: 'Chìbì dàzhàn qiánxī, Wú Shǔ liǎng guó liánhé kàngjī Cáo Cāo, Zhūgě Liàng shòumìng qiánwǎng Dōngwú xiézhù Zhōu Yú.', meaning: 'Trước trận Xích Bích, hai nước Ngô và Thục liên minh chống Tào Tháo, Gia Cát Lượng nhận lệnh đến Đông Ngô giúp Chu Du.' },
          { hanzi: '周瑜见诸葛亮才智过人，心生嫉妒，想借机除掉他。', pinyin: 'Zhōu Yú jiàn Zhūgě Liàng cáizhì guòrén, xīn shēng jídù, xiǎng jièjī chúdiào tā.', meaning: 'Chu Du thấy Gia Cát Lượng tài trí hơn người, sinh lòng ghen ghét, muốn nhân cơ hội trừ khử ông.' },
          { hanzi: '一天，周瑜对诸葛亮说："水上交战，最需要的兵器是弓箭，请先生在十天之内造好十万支箭。"', pinyin: 'Yì tiān, Zhōu Yú duì Zhūgě Liàng shuō: "Shuǐshàng jiāozhàn, zuì xūyào de bīngqì shì gōngjiàn, qǐng xiānsheng zài shí tiān zhī nèi zàohǎo shí wàn zhī jiàn."', meaning: 'Một hôm, Chu Du nói với Gia Cát Lượng: "Đánh nhau trên sông, binh khí cần nhất là cung tên, xin tiên sinh trong vòng mười ngày làm xong mười vạn mũi tên."' },
          { hanzi: '诸葛亮却从容答道："曹军随时会来，十天太久，我只需要三天。"', pinyin: 'Zhūgě Liàng què cóngróng dádào: "Cáojūn suíshí huì lái, shí tiān tài jiǔ, wǒ zhǐ xūyào sān tiān."', meaning: 'Gia Cát Lượng lại ung dung đáp: "Quân Tào có thể đến bất cứ lúc nào, mười ngày quá lâu, tôi chỉ cần ba ngày."' },
          { hanzi: '他甚至当场立下军令状，说如果三天造不好，甘愿受罚。', pinyin: 'Tā shènzhì dāngchǎng lìxià jūnlìngzhuàng, shuō rúguǒ sān tiān zào bu hǎo, gānyuàn shòufá.', meaning: 'Ông thậm chí lập quân lệnh trạng ngay tại chỗ, nói nếu ba ngày làm không xong thì cam chịu phạt.' }
        ]
      },
      {
        title: 'Phần 2: Kế hoạch bí mật',
        lines: [
          { hanzi: '周瑜暗自高兴，吩咐工匠故意拖延，不给诸葛亮提供材料，准备到时候治他的罪。', pinyin: 'Zhōu Yú ànzì gāoxìng, fēnfù gōngjiàng gùyì tuōyán, bù gěi Zhūgě Liàng tígōng cáiliào, zhǔnbèi dào shíhou zhì tā de zuì.', meaning: 'Chu Du thầm vui mừng, dặn thợ thủ công cố tình trì hoãn, không cung cấp vật liệu cho Gia Cát Lượng, định đến lúc đó trị tội ông.' },
          { hanzi: '诸葛亮却不慌不忙，私下请鲁肃借给他二十条船，每条船上各配三十名士兵。', pinyin: 'Zhūgě Liàng què bù huāng bù máng, sīxià qǐng Lǔ Sù jiègěi tā èrshí tiáo chuán, měi tiáo chuán shàng gè pèi sānshí míng shìbīng.', meaning: 'Gia Cát Lượng lại thong thả không vội, riêng mượn Lỗ Túc hai mươi chiếc thuyền, mỗi thuyền bố trí ba mươi quân sĩ.' },
          { hanzi: '他还要求把船用青布幔子遮起来，两侧摆上一千多个草把子，并嘱咐鲁肃不要告诉周瑜。', pinyin: 'Tā hái yāoqiú bǎ chuán yòng qīngbù mànzi zhē qǐlái, liǎng cè bǎishàng yì qiān duō ge cǎobǎzi, bìng zhǔfù Lǔ Sù bú yào gàosu Zhōu Yú.', meaning: 'Ông còn yêu cầu dùng màn vải xanh che thuyền lại, hai bên mạn xếp hơn một nghìn bó cỏ, và dặn Lỗ Túc đừng nói cho Chu Du biết.' },
          { hanzi: '头两天，诸葛亮毫无动静，鲁肃心里十分着急，不明白他究竟在打什么主意。', pinyin: 'Tóu liǎng tiān, Zhūgě Liàng háowú dòngjìng, Lǔ Sù xīnlǐ shífēn zháojí, bù míngbai tā jiūjìng zài dǎ shénme zhǔyi.', meaning: 'Hai ngày đầu, Gia Cát Lượng không có động tĩnh gì, Lỗ Túc trong lòng rất sốt ruột, không hiểu rốt cuộc ông tính toán điều gì.' },
          { hanzi: '原来他早已凭借天文知识，料定第三天夜里江上会有大雾。', pinyin: 'Yuánlái tā zǎo yǐ píngjiè tiānwén zhīshi, liàodìng dì-sān tiān yèlǐ jiāng shàng huì yǒu dàwù.', meaning: 'Thì ra ông đã sớm dựa vào kiến thức thiên văn mà đoán chắc đêm thứ ba trên sông sẽ có sương mù dày đặc.' },
          { hanzi: '到了第三天凌晨四更，江面上大雾弥漫，对面几乎看不清人影。', pinyin: 'Dàole dì-sān tiān língchén sì gēng, jiāngmiàn shàng dàwù mímàn, duìmiàn jīhū kàn bu qīng rényǐng.', meaning: 'Đến canh tư rạng sáng ngày thứ ba, mặt sông sương mù mịt mù, đối diện gần như không nhìn rõ bóng người.' }
        ]
      },
      {
        title: 'Phần 3: Mượn tên của Tào Tháo',
        lines: [
          { hanzi: '诸葛亮请鲁肃上船，命令二十条船用绳索连在一起，向曹军水寨驶去。', pinyin: 'Zhūgě Liàng qǐng Lǔ Sù shàng chuán, mìnglìng èrshí tiáo chuán yòng shéngsuǒ lián zài yìqǐ, xiàng Cáojūn shuǐzhài shǐqù.', meaning: 'Gia Cát Lượng mời Lỗ Túc lên thuyền, ra lệnh nối hai mươi chiếc thuyền bằng dây thừng, tiến về thủy trại quân Tào.' },
          { hanzi: '船队接近曹营时，他下令擂鼓呐喊，装出要进攻的样子。', pinyin: 'Chuánduì jiējìn Cáoyíng shí, tā xiàlìng léigǔ nàhǎn, zhuāngchū yào jìngōng de yàngzi.', meaning: 'Khi đội thuyền đến gần doanh trại Tào, ông hạ lệnh đánh trống hò reo, giả bộ như sắp tấn công.' },
          { hanzi: '曹操担心大雾中有埋伏，不敢出战，只命令弓箭手朝江面拼命放箭。', pinyin: 'Cáo Cāo dānxīn dàwù zhōng yǒu máifu, bù gǎn chūzhàn, zhǐ mìnglìng gōngjiànshǒu cháo jiāngmiàn pīnmìng fàngjiàn.', meaning: 'Tào Tháo lo trong sương mù có mai phục, không dám xuất chiến, chỉ ra lệnh cho cung thủ hết sức bắn tên về phía mặt sông.' },
          { hanzi: '密密麻麻的箭像雨点一样射在草把子上，不久，草把子上都插满了箭。', pinyin: 'Mìmì mámá de jiàn xiàng yǔdiǎn yíyàng shè zài cǎobǎzi shàng, bùjiǔ, cǎobǎzi shàng dōu chāmǎnle jiàn.', meaning: 'Tên dày đặc như mưa bắn vào các bó cỏ, chẳng bao lâu, trên bó cỏ cắm đầy tên.' },
          { hanzi: '天快亮时，诸葛亮下令调转船头返航，让士兵齐声高喊："谢谢曹丞相赠箭！"', pinyin: 'Tiān kuài liàng shí, Zhūgě Liàng xiàlìng diàozhuǎn chuántóu fǎnháng, ràng shìbīng qíshēng gāohǎn: "Xièxie Cáo chéngxiàng zèng jiàn!"', meaning: 'Trời gần sáng, Gia Cát Lượng hạ lệnh quay mũi thuyền trở về, bảo quân sĩ đồng thanh hô: "Đa tạ Tào thừa tướng tặng tên!"' },
          { hanzi: '等曹操明白过来，船队早已顺流而下，追之不及。', pinyin: 'Děng Cáo Cāo míngbai guòlái, chuánduì zǎo yǐ shùn liú ér xià, zhuī zhī bù jí.', meaning: 'Đến khi Tào Tháo hiểu ra, đội thuyền đã xuôi dòng đi xa, đuổi không kịp.' },
          { hanzi: '回营清点，共得箭十万多支，周瑜听后长叹道："诸葛亮神机妙算，我不如他。"', pinyin: 'Huí yíng qīngdiǎn, gòng dé jiàn shí wàn duō zhī, Zhōu Yú tīng hòu chángtàn dào: "Zhūgě Liàng shénjī miàosuàn, wǒ bùrú tā."', meaning: 'Về doanh kiểm đếm, tổng cộng được hơn mười vạn mũi tên, Chu Du nghe xong thở dài: "Gia Cát Lượng liệu việc như thần, ta không bằng ông ấy."' }
        ]
      }
    ],
    quiz: [
      { question: '周瑜为什么要诸葛亮在短时间内造十万支箭？', options: ['嫉妒他的才智，想借机除掉他', '军中真的缺少弓箭手', '想考验他的武艺'] },
      { question: '诸葛亮向鲁肃借了什么？', options: ['二十条船和三十名士兵', '十万支箭', '一千个工匠'] },
      { question: '诸葛亮的计划为什么能成功？', options: ['他料定会有大雾，曹操不敢出战', '曹军士兵都睡着了', '周瑜暗中派人帮忙'] },
      { question: '最后诸葛亮一共得到了多少支箭？', options: ['十万多支', '一千多支', '三十多支'] }
    ]
  },
  {
    key: 'maosui-zijian',
    icon: '🗡️',
    title: 'Mao Toại tự cử (毛遂自荐)',
    level: 'HSK7-9',
    chapters: [
      {
        title: 'Phần 1: Đại quân Tần vây Hàm Đan',
        lines: [
          { hanzi: '战国时期，秦国大军包围了赵国的都城邯郸，形势万分危急。', pinyin: 'Zhànguó shíqī, Qínguó dàjūn bāowéile Zhàoguó de dūchéng Hándān, xíngshì wànfēn wēijí.', meaning: 'Thời Chiến Quốc, đại quân nước Tần bao vây kinh đô Hàm Đan của nước Triệu, tình thế vô cùng nguy cấp.' },
          { hanzi: '赵王派平原君前往楚国，希望说服楚王联合抗秦，共渡难关。', pinyin: 'Zhàowáng pài Píngyuánjūn qiánwǎng Chǔguó, xīwàng shuōfú Chǔwáng liánhé kàng Qín, gòng dù nánguān.', meaning: 'Vua Triệu phái Bình Nguyên Quân sang nước Sở, hy vọng thuyết phục vua Sở liên minh chống Tần, cùng vượt qua khó khăn.' },
          { hanzi: '平原君打算从门下三千多位食客中挑选二十名文武双全的人同去。', pinyin: 'Píngyuánjūn dǎsuàn cóng ménxià sānqiān duō wèi shíkè zhōng tiāoxuǎn èrshí míng wénwǔ shuāngquán de rén tóng qù.', meaning: 'Bình Nguyên Quân định chọn trong hơn ba nghìn thực khách dưới trướng hai mươi người văn võ song toàn cùng đi.' },
          { hanzi: '可是挑来挑去，只选出十九个人，剩下的那个怎么也凑不齐。', pinyin: 'Kěshì tiāo lái tiāo qù, zhǐ xuǎnchū shíjiǔ gè rén, shèngxià de nàge zěnme yě còu bu qí.', meaning: 'Nhưng chọn đi chọn lại, chỉ được mười chín người, người còn lại thế nào cũng không đủ.' },
          { hanzi: '就在平原君愁眉不展的时候，一个名叫毛遂的食客走上前来，主动请求同行。', pinyin: 'Jiù zài Píngyuánjūn chóuméi-bùzhǎn de shíhou, yí gè míng jiào Máo Suì de shíkè zǒu shàng qián lái, zhǔdòng qǐngqiú tóngxíng.', meaning: 'Đúng lúc Bình Nguyên Quân đang ủ rũ lo âu, một thực khách tên Mao Toại bước lên, chủ động xin đi cùng.' }
        ]
      },
      {
        title: 'Phần 2: Chiếc dùi trong túi',
        lines: [
          { hanzi: '平原君上下打量了他一番，问道："先生来到我门下几年了？"', pinyin: 'Píngyuánjūn shàngxià dǎliangle tā yì fān, wèn dào: "Xiānsheng láidào wǒ ménxià jǐ nián le?"', meaning: 'Bình Nguyên Quân nhìn ông từ đầu đến chân, hỏi: "Tiên sinh đến dưới trướng ta được mấy năm rồi?"' },
          { hanzi: '毛遂回答说："已经三年了。"', pinyin: 'Máo Suì huídá shuō: "Yǐjīng sān nián le."', meaning: 'Mao Toại đáp: "Đã ba năm rồi."' },
          { hanzi: '平原君说："真正有才能的人，就像锥子放在口袋里，尖端马上就会露出来。可先生在这里三年，从没有人称赞过你，说明你并没有什么特别的本领。"', pinyin: 'Píngyuánjūn shuō: "Zhēnzhèng yǒu cáinéng de rén, jiù xiàng zhuīzi fàng zài kǒudài lǐ, jiānduān mǎshàng jiù huì lòu chūlái. Kě xiānsheng zài zhèlǐ sān nián, cóng méiyǒu rén chēngzànguo nǐ, shuōmíng nǐ bìng méiyǒu shénme tèbié de běnlǐng."', meaning: 'Bình Nguyên Quân nói: "Người thật sự có tài giống như chiếc dùi để trong túi, mũi nhọn sẽ lập tức lộ ra. Nhưng tiên sinh ở đây ba năm, chưa từng có ai khen ngợi, chứng tỏ ông chẳng có bản lĩnh gì đặc biệt."' },
          { hanzi: '毛遂不慌不忙地说："那是因为我今天才请求您把我放进口袋里。要是早些放进去，整个锥子都会脱颖而出，哪里只是露出尖端而已！"', pinyin: 'Máo Suì bù huāng bù máng de shuō: "Nà shì yīnwèi wǒ jīntiān cái qǐngqiú nín bǎ wǒ fàng jìn kǒudài lǐ. Yàoshi zǎo xiē fàng jìnqù, zhěng gè zhuīzi dōu huì tuōyǐng\'érchū, nǎlǐ zhǐshì lòuchū jiānduān éryǐ!"', meaning: 'Mao Toại thong thả nói: "Đó là vì hôm nay tôi mới xin ngài bỏ tôi vào túi. Nếu bỏ vào sớm hơn, cả chiếc dùi đã vượt ra ngoài, đâu chỉ lộ mỗi mũi nhọn!"' },
          { hanzi: '平原君见他对答如流、胆识过人，便答应带上他，凑足了二十人。', pinyin: 'Píngyuánjūn jiàn tā duìdá-rúliú, dǎnshí guòrén, biàn dāying dàishàng tā, còuzúle èrshí rén.', meaning: 'Bình Nguyên Quân thấy ông đối đáp trôi chảy, đởm lược hơn người, bèn đồng ý cho đi cùng, đủ hai mươi người.' },
          { hanzi: '另外十九个人表面上不说什么，心里却暗暗发笑，觉得毛遂是在夸夸其谈。', pinyin: 'Lìngwài shíjiǔ gè rén biǎomiàn shang bù shuō shénme, xīnlǐ què ànàn fāxiào, juéde Máo Suì shì zài kuākuā-qítán.', meaning: 'Mười chín người kia bề ngoài không nói gì, trong lòng lại thầm cười, cho rằng Mao Toại chỉ nói khoác.' }
        ]
      },
      {
        title: 'Phần 3: Thuyết phục vua Sở',
        lines: [
          { hanzi: '到了楚国，平原君与楚王谈判，从清晨一直谈到中午，仍然毫无结果。', pinyin: 'Dàole Chǔguó, Píngyuánjūn yǔ Chǔwáng tánpàn, cóng qīngchén yìzhí tán dào zhōngwǔ, réngrán háowú jiéguǒ.', meaning: 'Đến nước Sở, Bình Nguyên Quân đàm phán với vua Sở, từ sáng sớm đến trưa mà vẫn không có kết quả gì.' },
          { hanzi: '十九个人在台阶下急得团团转，只好推毛遂上去试一试。', pinyin: 'Shíjiǔ gè rén zài táijiē xià jí de tuántuánzhuàn, zhǐhǎo tuī Máo Suì shàngqù shì yi shì.', meaning: 'Mười chín người dưới bậc thềm sốt ruột quay như chong chóng, đành đẩy Mao Toại lên thử xem.' },
          { hanzi: '毛遂手按宝剑，一步一步登上台阶，对楚王说："联合抗秦的利害，两句话就能说清楚，为什么谈了一上午还没有定下来？"', pinyin: 'Máo Suì shǒu àn bǎojiàn, yí bù yí bù dēngshàng táijiē, duì Chǔwáng shuō: "Liánhé kàng Qín de lìhài, liǎng jù huà jiù néng shuō qīngchu, wèishénme tánle yí shàngwǔ hái méiyǒu dìng xiàlái?"', meaning: 'Mao Toại tay đặt lên bảo kiếm, từng bước bước lên thềm, nói với vua Sở: "Lợi hại của việc liên minh chống Tần, hai câu là nói rõ, sao bàn cả buổi sáng vẫn chưa quyết?"' },
          { hanzi: '楚王怒斥道："我正在同你的主人说话，你来干什么？"毛遂毫不退让："大王之所以敢呵斥我，不过是仗着楚国人多势众。可现在十步之内，大王的性命就在我手里！"', pinyin: 'Chǔwáng nùchì dào: "Wǒ zhèngzài tóng nǐ de zhǔrén shuōhuà, nǐ lái gàn shénme?" Máo Suì háo bù tuìràng: "Dàwáng zhī suǒyǐ gǎn hēchì wǒ, búguò shì zhàngzhe Chǔguó rén duō shì zhòng. Kě xiànzài shí bù zhī nèi, dàwáng de xìngmìng jiù zài wǒ shǒu lǐ!"', meaning: 'Vua Sở quát: "Ta đang nói chuyện với chủ của ngươi, ngươi đến làm gì?" Mao Toại không chút lùi bước: "Đại vương dám quát tôi chẳng qua nhờ nước Sở đông người thế mạnh. Nhưng trong vòng mười bước này, tính mạng đại vương nằm trong tay tôi!"' },
          { hanzi: '他接着说："楚国地方五千里，兵力上百万，本是称霸天下的资本。可白起不过是个无名小辈，带着几万人就攻下了郢都，烧了夷陵，羞辱了大王的祖先。"', pinyin: 'Tā jiēzhe shuō: "Chǔguó dìfang wǔqiān lǐ, bīnglì shàng bǎi wàn, běn shì chēng bà tiānxià de zīběn. Kě Bái Qǐ búguò shì gè wúmíng xiǎobèi, dàizhe jǐ wàn rén jiù gōngxiàle Yǐngdū, shāole Yílíng, xiūrǔle dàwáng de zǔxiān."', meaning: 'Ông nói tiếp: "Nước Sở đất rộng năm nghìn dặm, quân hơn một triệu, vốn là vốn liếng để xưng bá thiên hạ. Vậy mà Bạch Khởi chỉ là kẻ vô danh tiểu tốt, dẫn vài vạn quân đã hạ Dĩnh Đô, đốt Di Lăng, làm nhục tổ tiên của đại vương."' },
          { hanzi: '"这是百世不忘的仇恨，连赵国都替楚国感到羞耻，大王却不以为耻！联合抗秦，是为楚国，不是为赵国啊！"', pinyin: '"Zhè shì bǎi shì bú wàng de chóuhèn, lián Zhàoguó dōu tì Chǔguó gǎndào xiūchǐ, dàwáng què bù yǐwéi chǐ! Liánhé kàng Qín, shì wèi Chǔguó, bú shì wèi Zhàoguó a!"', meaning: '"Đây là mối thù trăm đời không quên, đến nước Triệu còn thấy xấu hổ thay cho nước Sở, đại vương lại không coi là nhục! Liên minh chống Tần là vì nước Sở, chứ không phải vì nước Triệu đâu!"' }
        ]
      },
      {
        title: 'Phần 4: Thành công trở về',
        lines: [
          { hanzi: '楚王听得连连点头，说："先生说得对，寡人愿意出兵。"毛遂又问："那么盟约定下了吗？"', pinyin: 'Chǔwáng tīng de liánlián diǎntóu, shuō: "Xiānsheng shuō de duì, guǎrén yuànyì chūbīng." Máo Suì yòu wèn: "Nàme méngyuē dìngxiàle ma?"', meaning: 'Vua Sở nghe mà gật đầu liên tục, nói: "Tiên sinh nói phải, quả nhân bằng lòng xuất binh." Mao Toại lại hỏi: "Vậy minh ước đã định rồi chứ?"' },
          { hanzi: '楚王答："定了。"毛遂便叫人取来鸡、狗、马的血，捧着铜盘请楚王先歃血，再请平原君和自己依次歃血，订立了盟约。', pinyin: 'Chǔwáng dá: "Dìng le." Máo Suì biàn jiào rén qǔlái jī, gǒu, mǎ de xuè, pěngzhe tóngpán qǐng Chǔwáng xiān shàxuè, zài qǐng Píngyuánjūn hé zìjǐ yīcì shàxuè, dìnglìle méngyuē.', meaning: 'Vua Sở đáp: "Định rồi." Mao Toại bèn sai người lấy máu gà, chó, ngựa, bưng mâm đồng mời vua Sở uống máu ăn thề trước, rồi đến Bình Nguyên Quân và bản thân lần lượt làm lễ, lập xong minh ước.' },
          { hanzi: '回到赵国后，平原君感慨地说："我再也不敢随便评价人才了！毛先生一到楚国，就使赵国的地位比九鼎大吕还要贵重。"', pinyin: 'Huídào Zhàoguó hòu, Píngyuánjūn gǎnkǎi de shuō: "Wǒ zài yě bù gǎn suíbiàn píngjià réncái le! Máo xiānsheng yí dào Chǔguó, jiù shǐ Zhàoguó de dìwèi bǐ jiǔdǐng-dàlǚ hái yào guìzhòng."', meaning: 'Về đến nước Triệu, Bình Nguyên Quân cảm khái nói: "Ta không dám tùy tiện đánh giá nhân tài nữa! Mao tiên sinh vừa đến nước Sở đã khiến địa vị nước Triệu quý hơn cả cửu đỉnh đại lữ."' },
          { hanzi: '他还说，毛先生那三寸不烂之舌，胜过百万雄师。', pinyin: 'Tā hái shuō, Máo xiānsheng nà sān cùn bú làn zhī shé, shèngguò bǎi wàn xióngshī.', meaning: 'Ông còn nói, cái lưỡi ba tấc không nát của Mao tiên sinh hơn cả trăm vạn hùng binh.' },
          { hanzi: '后来，人们就用"毛遂自荐"这个成语，形容自告奋勇、主动推荐自己去承担任务的人。', pinyin: 'Hòulái, rénmen jiù yòng "Máo Suì zìjiàn" zhège chéngyǔ, xíngróng zìgào-fènyǒng, zhǔdòng tuījiàn zìjǐ qù chéngdān rènwu de rén.', meaning: 'Về sau, người ta dùng thành ngữ "Mao Toại tự cử" để chỉ người xung phong, chủ động tiến cử mình đảm nhận nhiệm vụ.' }
        ]
      }
    ],
    quiz: [
      { question: '毛遂为什么能跟平原君去楚国？', options: ['他主动请求同行，并说明自己的本领', '他是平原君的亲戚', '楚王点名要他去'] },
      { question: '平原君用什么比喻说明有才能的人？', options: ['锥子放在口袋里', '宝剑放在盒子里', '金子埋在土里'] },
      { question: '毛遂是怎样说服楚王的？', options: ['手按宝剑，讲明联合抗秦对楚国有利', '送给楚王许多礼物', '答应让赵国向楚国称臣'] },
      { question: '“毛遂自荐”形容什么样的人？', options: ['主动推荐自己的人', '不愿意做事的人', '喜欢批评别人的人'] }
    ]
  },
  {
    key: 'zhishang-tanbing',
    icon: '📜',
    title: 'Triệu Quát bàn binh trên giấy (纸上谈兵)',
    level: 'HSK7-9',
    chapters: [
      {
        title: 'Phần 1: Con nhà tướng',
        lines: [
          { hanzi: '战国时期，赵国名将赵奢有个儿子，名叫赵括。', pinyin: 'Zhànguó shíqī, Zhàoguó míngjiàng Zhào Shē yǒu gè érzi, míng jiào Zhào Kuò.', meaning: 'Thời Chiến Quốc, danh tướng nước Triệu là Triệu Xa có một người con trai tên Triệu Quát.' },
          { hanzi: '赵括从小熟读兵书，谈起用兵之道来滔滔不绝，连父亲也驳不倒他。', pinyin: 'Zhào Kuò cóng xiǎo shúdú bīngshū, tán qǐ yòngbīng zhī dào lái tāotāo-bùjué, lián fùqin yě bó bu dǎo tā.', meaning: 'Triệu Quát từ nhỏ đã đọc thuộc binh thư, bàn về đạo dụng binh thì thao thao bất tuyệt, đến cha cũng không bác nổi.' },
          { hanzi: '赵括因此十分自负，觉得天下没有人比自己更会打仗。', pinyin: 'Zhào Kuò yīncǐ shífēn zìfù, juéde tiānxià méiyǒu rén bǐ zìjǐ gèng huì dǎzhàng.', meaning: 'Vì thế Triệu Quát rất tự phụ, cho rằng thiên hạ không ai biết đánh trận hơn mình.' },
          { hanzi: '可是赵奢听了，却从来没有夸奖过他，反而忧心忡忡。', pinyin: 'Kěshì Zhào Shē tīngle, què cónglái méiyǒu kuājiǎngguo tā, fǎn\'ér yōuxīn-chōngchōng.', meaning: 'Nhưng Triệu Xa nghe xong chưa từng khen con, trái lại còn lo lắng nặng nề.' },
          { hanzi: '赵奢对妻子说："打仗是关系生死存亡的大事，他却把它说得那么轻松。将来赵国要是任用他当将军，毁掉赵军的，必定就是他。"', pinyin: 'Zhào Shē duì qīzi shuō: "Dǎzhàng shì guānxì shēngsǐ cúnwáng de dàshì, tā què bǎ tā shuō de nàme qīngsōng. Jiānglái Zhàoguó yàoshi rènyòng tā dāng jiāngjūn, huǐdiào Zhàojūn de, bìdìng jiù shì tā."', meaning: 'Triệu Xa nói với vợ: "Đánh trận là việc lớn liên quan sống chết còn mất, nó lại nói nhẹ nhàng như vậy. Sau này nếu nước Triệu dùng nó làm tướng, kẻ hủy quân Triệu chắc chắn chính là nó."' }
        ]
      },
      {
        title: 'Phần 2: Thay tướng ở Trường Bình',
        lines: [
          { hanzi: '赵奢去世后，秦国大举进攻赵国，两军在长平对峙。', pinyin: 'Zhào Shē qùshì hòu, Qínguó dàjǔ jìngōng Zhàoguó, liǎng jūn zài Chángpíng duìzhì.', meaning: 'Sau khi Triệu Xa qua đời, nước Tần ồ ạt tấn công nước Triệu, hai quân đối đầu ở Trường Bình.' },
          { hanzi: '老将廉颇坚守不出，秦军久攻不下，粮草也渐渐不足。', pinyin: 'Lǎojiàng Lián Pō jiānshǒu bù chū, Qínjūn jiǔ gōng bú xià, liángcǎo yě jiànjiàn bù zú.', meaning: 'Lão tướng Liêm Pha cố thủ không ra, quân Tần đánh mãi không hạ được, lương thảo cũng dần thiếu.' },
          { hanzi: '于是秦国派人到赵国散布谣言，说秦军最害怕的不是廉颇，而是赵括。', pinyin: 'Yúshì Qínguó pài rén dào Zhàoguó sànbù yáoyán, shuō Qínjūn zuì hàipà de bú shì Lián Pō, ér shì Zhào Kuò.', meaning: 'Thế là nước Tần phái người sang nước Triệu tung tin đồn, nói quân Tần sợ nhất không phải Liêm Pha mà là Triệu Quát.' },
          { hanzi: '赵王中了反间计，不顾群臣劝阻，决定让赵括代替廉颇。', pinyin: 'Zhàowáng zhòngle fǎnjiànjì, búgù qúnchén quànzǔ, juédìng ràng Zhào Kuò dàitì Lián Pō.', meaning: 'Vua Triệu trúng kế phản gián, bất chấp quần thần can ngăn, quyết định cho Triệu Quát thay Liêm Pha.' },
          { hanzi: '病重的蔺相如劝道："大王只凭名声任用赵括，就像用胶把瑟柱粘死再去弹瑟，一点也不懂得变通啊！"', pinyin: 'Bìngzhòng de Lìn Xiàngrú quàn dào: "Dàwáng zhǐ píng míngshēng rènyòng Zhào Kuò, jiù xiàng yòng jiāo bǎ sè zhù zhānsǐ zài qù tán sè, yìdiǎn yě bù dǒngde biàntōng a!"', meaning: 'Lận Tương Như bệnh nặng khuyên: "Đại vương chỉ dựa vào danh tiếng mà dùng Triệu Quát, chẳng khác nào dùng keo dán chết trụ đàn sắt rồi mới gảy, hoàn toàn không biết biến thông!"' },
          { hanzi: '赵括的母亲也上书恳求赵王收回成命，赵王却不肯改变主意。', pinyin: 'Zhào Kuò de mǔqin yě shàngshū kěnqiú Zhàowáng shōuhuí chéngmìng, Zhàowáng què bù kěn gǎibiàn zhǔyi.', meaning: 'Mẹ của Triệu Quát cũng dâng thư khẩn cầu vua Triệu thu hồi mệnh lệnh, nhưng vua Triệu không chịu đổi ý.' },
          { hanzi: '她只好请求赵王答应：如果儿子打了败仗，不要牵连家人。', pinyin: 'Tā zhǐhǎo qǐngqiú Zhàowáng dāying: rúguǒ érzi dǎle bàizhàng, bú yào qiānlián jiārén.', meaning: 'Bà đành xin vua Triệu hứa: nếu con trai đánh thua thì đừng liên lụy người nhà.' }
        ]
      },
      {
        title: 'Phần 3: Thảm bại',
        lines: [
          { hanzi: '赵括一到前线，就把廉颇定下的规矩全部推翻，还撤换了许多军官。', pinyin: 'Zhào Kuò yí dào qiánxiàn, jiù bǎ Lián Pō dìngxià de guījǔ quánbù tuīfān, hái chèhuànle xǔduō jūnguān.', meaning: 'Triệu Quát vừa đến tiền tuyến liền lật đổ toàn bộ quy củ Liêm Pha đặt ra, lại còn thay đổi nhiều quân quan.' },
          { hanzi: '秦国得知消息，暗中派名将白起为主帅，并下令泄露主帅身份者斩。', pinyin: 'Qínguó dézhī xiāoxi, ànzhōng pài míngjiàng Bái Qǐ wéi zhǔshuài, bìng xiàlìng xièlòu zhǔshuài shēnfen zhě zhǎn.', meaning: 'Nước Tần biết tin, ngầm phái danh tướng Bạch Khởi làm chủ soái, và ra lệnh kẻ nào tiết lộ thân phận chủ soái sẽ bị chém.' },
          { hanzi: '白起假装战败撤退，把赵括引进了预先设好的埋伏圈。', pinyin: 'Bái Qǐ jiǎzhuāng zhànbài chètuì, bǎ Zhào Kuò yǐnjìnle yùxiān shèhǎo de máifú quān.', meaning: 'Bạch Khởi giả vờ thua trận rút lui, dụ Triệu Quát vào vòng phục kích đã bố trí sẵn.' },
          { hanzi: '秦军随即截断了赵军的退路和粮道，把四十多万赵军团团围困了四十多天。', pinyin: 'Qínjūn suíjí jiéduànle Zhàojūn de tuìlù hé liángdào, bǎ sìshí duō wàn Zhàojūn tuántuán wéikùnle sìshí duō tiān.', meaning: 'Quân Tần lập tức cắt đứt đường lui và đường lương của quân Triệu, vây chặt hơn bốn mươi vạn quân Triệu hơn bốn mươi ngày.' },
          { hanzi: '赵军断粮，士兵饥饿难耐，士气全无，赵括只好带着精兵拼死突围，结果被乱箭射死。', pinyin: 'Zhàojūn duàn liáng, shìbīng jī\'è nánnài, shìqì quán wú, Zhào Kuò zhǐhǎo dàizhe jīngbīng pīnsǐ tūwéi, jiéguǒ bèi luàn jiàn shèsǐ.', meaning: 'Quân Triệu hết lương, binh sĩ đói không chịu nổi, sĩ khí tan hết, Triệu Quát đành dẫn tinh binh liều chết phá vòng vây, kết quả bị loạn tên bắn chết.' },
          { hanzi: '剩下的赵军只得投降，赵国从此元气大伤，再也无力抵抗秦国。', pinyin: 'Shèngxià de Zhàojūn zhǐdé tóuxiáng, Zhàoguó cóngcǐ yuánqì dà shāng, zài yě wúlì dǐkàng Qínguó.', meaning: 'Quân Triệu còn lại đành đầu hàng, nước Triệu từ đó nguyên khí đại thương, không còn sức chống lại nước Tần.' }
        ]
      },
      {
        title: 'Phần 4: Bài học',
        lines: [
          { hanzi: '长平之战是战国时期规模最大、最惨烈的战役之一。', pinyin: 'Chángpíng zhī zhàn shì Zhànguó shíqī guīmó zuì dà, zuì cǎnliè de zhànyì zhī yī.', meaning: 'Trận Trường Bình là một trong những chiến dịch quy mô lớn nhất, thảm khốc nhất thời Chiến Quốc.' },
          { hanzi: '赵括满腹兵法，却不懂得根据实际情况灵活应对，最终害了自己，也害了赵国。', pinyin: 'Zhào Kuò mǎnfù bīngfǎ, què bù dǒngde gēnjù shíjì qíngkuàng línghuó yìngduì, zuìzhōng hàile zìjǐ, yě hàile Zhàoguó.', meaning: 'Triệu Quát đầy một bụng binh pháp nhưng không biết ứng biến linh hoạt theo tình hình thực tế, cuối cùng hại mình, cũng hại nước Triệu.' },
          { hanzi: '后来人们用"纸上谈兵"比喻只会空谈理论，不能解决实际问题。', pinyin: 'Hòulái rénmen yòng "zhǐ shàng tán bīng" bǐyù zhǐ huì kōngtán lǐlùn, bù néng jiějué shíjì wèntí.', meaning: 'Về sau người ta dùng "bàn binh trên giấy" để ví người chỉ biết nói suông lý thuyết, không giải quyết được vấn đề thực tế.' },
          { hanzi: '这个成语提醒我们：知识必须和实践结合，才能真正发挥作用。', pinyin: 'Zhège chéngyǔ tíxǐng wǒmen: zhīshi bìxū hé shíjiàn jiéhé, cáinéng zhēnzhèng fāhuī zuòyòng.', meaning: 'Thành ngữ này nhắc chúng ta: tri thức phải kết hợp với thực tiễn mới thật sự phát huy tác dụng.' },
          { hanzi: '无论读了多少书，如果不肯脚踏实地、虚心学习，终究难成大事。', pinyin: 'Wúlùn dúle duōshao shū, rúguǒ bù kěn jiǎotà-shídì, xūxīn xuéxí, zhōngjiū nán chéng dàshì.', meaning: 'Dù đọc bao nhiêu sách, nếu không chịu bước chân xuống đất, khiêm tốn học hỏi thì rốt cuộc khó làm nên việc lớn.' }
        ]
      }
    ],
    quiz: [
      { question: '赵奢为什么为儿子担心？', options: ['他认为赵括把打仗说得太轻松', '赵括不爱读书', '赵括身体不好'] },
      { question: '秦国用什么办法让赵王换掉廉颇？', options: ['散布谣言，说秦军只怕赵括', '送给赵王很多金银', '派大军攻下都城'] },
      { question: '长平之战赵军为什么失败？', options: ['赵括不知变通，中了白起的埋伏', '廉颇临阵逃走', '赵军没有武器'] },
      { question: '“纸上谈兵”比喻什么？', options: ['只会空谈理论，不能解决实际问题', '在纸上画地图', '认真研究兵书'] }
    ]
  },
  {
    key: 'sangu-maolu',
    icon: '🏚️',
    title: 'Lưu Bị ba lần đến lều tranh (三顾茅庐)',
    level: 'HSK7-9',
    chapters: [
      {
        title: 'Phần 1: Tìm người hiền tài',
        lines: [
          { hanzi: '东汉末年，天下大乱，刘备虽然是皇室后代，却兵少将寡，只能暂时驻扎在新野。', pinyin: 'Dōnghàn mònián, tiānxià dàluàn, Liú Bèi suīrán shì huángshì hòudài, què bīng shǎo jiàng guǎ, zhǐnéng zànshí zhùzhā zài Xīnyě.', meaning: 'Cuối thời Đông Hán, thiên hạ đại loạn, Lưu Bị tuy là dòng dõi hoàng thất nhưng quân ít tướng thưa, chỉ có thể tạm đóng quân ở Tân Dã.' },
          { hanzi: '他常常感叹，自己缺少一位能够运筹帷幄的谋士。', pinyin: 'Tā chángcháng gǎntàn, zìjǐ quēshǎo yí wèi nénggòu yùnchóu-wéiwò de móushì.', meaning: 'Ông thường than rằng mình thiếu một mưu sĩ có thể trù tính chiến lược trong màn trướng.' },
          { hanzi: '徐庶向他推荐说："隆中有一位诸葛亮，号称卧龙，才学过人。这样的人只能亲自去拜访，不可能把他召来。"', pinyin: 'Xú Shù xiàng tā tuījiàn shuō: "Lóngzhōng yǒu yí wèi Zhūgě Liàng, hàochēng Wòlóng, cáixué guòrén. Zhèyàng de rén zhǐ néng qīnzì qù bàifǎng, bù kěnéng bǎ tā zhàolái."', meaning: 'Từ Thứ tiến cử với ông: "Ở Long Trung có một người tên Gia Cát Lượng, hiệu Ngọa Long, tài học hơn người. Người như vậy chỉ có thể đích thân đến thăm, không thể gọi đến được."' },
          { hanzi: '刘备听了十分欣喜，立刻带着关羽、张飞，备下厚礼，前往隆中。', pinyin: 'Liú Bèi tīngle shífēn xīnxǐ, lìkè dàizhe Guān Yǔ, Zhāng Fēi, bèixià hòulǐ, qiánwǎng Lóngzhōng.', meaning: 'Lưu Bị nghe xong vô cùng vui mừng, lập tức dẫn Quan Vũ, Trương Phi, chuẩn bị hậu lễ, đi đến Long Trung.' },
          { hanzi: '谁知诸葛亮恰好外出，只有一个童子在家，说不准先生何时回来。', pinyin: 'Shéi zhī Zhūgě Liàng qiàhǎo wàichū, zhǐyǒu yí gè tóngzǐ zài jiā, shuō bu zhǔn xiānsheng héshí huílái.', meaning: 'Nào ngờ Gia Cát Lượng vừa hay đi vắng, chỉ có một đồng tử ở nhà, không biết bao giờ tiên sinh trở về.' },
          { hanzi: '刘备只好留下姓名，嘱咐童子转告，才失望地返回。', pinyin: 'Liú Bèi zhǐhǎo liúxià xìngmíng, zhǔfù tóngzǐ zhuǎngào, cái shīwàng de fǎnhuí.', meaning: 'Lưu Bị đành để lại tên họ, dặn đồng tử chuyển lời, rồi thất vọng quay về.' }
        ]
      },
      {
        title: 'Phần 2: Hai lần chưa gặp',
        lines: [
          { hanzi: '隆冬时节，朔风凛冽，大雪纷飞，刘备却决定再去隆中拜访。', pinyin: 'Lóngdōng shíjié, shuòfēng lǐnliè, dàxuě fēnfēi, Liú Bèi què juédìng zài qù Lóngzhōng bàifǎng.', meaning: 'Giữa mùa đông giá rét, gió bấc căm căm, tuyết rơi dày đặc, Lưu Bị vẫn quyết định đến Long Trung thăm lần nữa.' },
          { hanzi: '张飞不满地嘟囔："这么冷的天，为一个乡下书生跑这么远，派人把他叫来不就行了吗？"', pinyin: 'Zhāng Fēi bùmǎn de dūnang: "Zhème lěng de tiān, wèi yí gè xiāngxià shūshēng pǎo zhème yuǎn, pài rén bǎ tā jiào lái bú jiù xíng le ma?"', meaning: 'Trương Phi bất mãn lẩm bẩm: "Trời lạnh thế này, vì một anh thư sinh nhà quê mà chạy xa như vậy, cho người gọi hắn đến chẳng phải xong sao?"' },
          { hanzi: '刘备严肃地说："孔明是当世大贤，怎么可以随便召唤？你若不愿意去，就留在城里吧。"', pinyin: 'Liú Bèi yánsù de shuō: "Kǒngmíng shì dāngshì dàxián, zěnme kěyǐ suíbiàn zhàohuàn? Nǐ ruò bú yuànyì qù, jiù liú zài chéng lǐ ba."', meaning: 'Lưu Bị nghiêm nghị nói: "Khổng Minh là bậc đại hiền đương thời, sao có thể tùy tiện triệu gọi? Em nếu không muốn đi thì ở lại trong thành."' },
          { hanzi: '到了隆中，诸葛亮仍然不在家，只有他的弟弟诸葛均出来接待。', pinyin: 'Dàole Lóngzhōng, Zhūgě Liàng réngrán bú zài jiā, zhǐyǒu tā de dìdi Zhūgě Jūn chūlái jiēdài.', meaning: 'Đến Long Trung, Gia Cát Lượng vẫn không có nhà, chỉ có em trai ông là Gia Cát Quân ra tiếp.' },
          { hanzi: '刘备留下一封信，诚恳地写道，自己想挽救国家的危局，请先生出山相助。', pinyin: 'Liú Bèi liúxià yì fēng xìn, chéngkěn de xiědào, zìjǐ xiǎng wǎnjiù guójiā de wēijú, qǐng xiānsheng chūshān xiāngzhù.', meaning: 'Lưu Bị để lại một bức thư, chân thành viết rằng mình muốn cứu vãn cục diện nguy nan của đất nước, mong tiên sinh xuất sơn giúp đỡ.' },
          { hanzi: '回去的路上，风雪扑面，刘备却毫无怨言，仍然惦记着那位素未谋面的贤人。', pinyin: 'Huíqù de lùshang, fēngxuě pūmiàn, Liú Bèi què háowú yuànyán, réngrán diànjìzhe nà wèi sù wèi móumiàn de xiánrén.', meaning: 'Trên đường về, gió tuyết táp vào mặt, Lưu Bị lại không một lời oán trách, vẫn canh cánh nhớ bậc hiền nhân chưa từng gặp mặt kia.' }
        ]
      },
      {
        title: 'Phần 3: Lần thứ ba',
        lines: [
          { hanzi: '开春以后，刘备选了一个吉日，沐浴更衣，准备第三次去隆中。', pinyin: 'Kāichūn yǐhòu, Liú Bèi xuǎnle yí gè jírì, mùyù gēngyī, zhǔnbèi dì sān cì qù Lóngzhōng.', meaning: 'Sau khi sang xuân, Lưu Bị chọn một ngày lành, tắm gội thay y phục, chuẩn bị đến Long Trung lần thứ ba.' },
          { hanzi: '关羽也劝他："哥哥两次登门，礼数已经很周到，恐怕这位诸葛亮只是徒有虚名。"', pinyin: 'Guān Yǔ yě quàn tā: "Gēge liǎng cì dēngmén, lǐshù yǐjīng hěn zhōudào, kǒngpà zhè wèi Zhūgě Liàng zhǐshì túyǒu-xūmíng."', meaning: 'Quan Vũ cũng khuyên: "Anh hai lần đến tận cửa, lễ nghĩa đã rất chu đáo, e rằng vị Gia Cát Lượng này chỉ hữu danh vô thực."' },
          { hanzi: '刘备摇摇头，说求贤就应当像口渴求水一样迫切，哪里能怕多跑几趟？', pinyin: 'Liú Bèi yáoyao tóu, shuō qiú xián jiù yīngdāng xiàng kǒu kě qiú shuǐ yíyàng pòqiè, nǎlǐ néng pà duō pǎo jǐ tàng?', meaning: 'Lưu Bị lắc đầu, nói cầu hiền phải khẩn thiết như người khát tìm nước, sao có thể ngại đi thêm vài chuyến?' },
          { hanzi: '这一次，诸葛亮正在草堂里午睡。刘备吩咐关羽、张飞在门外等候，自己恭恭敬敬地站在台阶下。', pinyin: 'Zhè yí cì, Zhūgě Liàng zhèngzài cǎotáng lǐ wǔshuì. Liú Bèi fēnfù Guān Yǔ, Zhāng Fēi zài mén wài děnghòu, zìjǐ gōnggōng-jìngjìng de zhàn zài táijiē xià.', meaning: 'Lần này Gia Cát Lượng đang ngủ trưa trong thảo đường. Lưu Bị dặn Quan Vũ, Trương Phi chờ ngoài cửa, còn mình cung kính đứng dưới bậc thềm.' },
          { hanzi: '过了很久，诸葛亮才睡醒，见刘备一直站在阶下，连忙起身迎接。', pinyin: 'Guòle hěn jiǔ, Zhūgě Liàng cái shuìxǐng, jiàn Liú Bèi yìzhí zhàn zài jiē xià, liánmáng qǐshēn yíngjiē.', meaning: 'Một lúc lâu sau Gia Cát Lượng mới tỉnh, thấy Lưu Bị vẫn đứng dưới thềm, vội đứng dậy đón tiếp.' },
          { hanzi: '二人在草堂中促膝长谈，诸葛亮为他分析天下大势。', pinyin: 'Liǎng rén zài cǎotáng zhōng cùxī-chángtán, Zhūgě Liàng wèi tā fēnxī tiānxià dàshì.', meaning: 'Hai người ngồi sát gối trò chuyện lâu trong thảo đường, Gia Cát Lượng phân tích đại thế thiên hạ cho ông.' },
          { hanzi: '他说，曹操占着天时，孙权占着地利，将军应当占据荆州和益州，联合孙权，共同对抗曹操。', pinyin: 'Tā shuō, Cáo Cāo zhànzhe tiānshí, Sūn Quán zhànzhe dìlì, jiāngjūn yīngdāng zhànjù Jīngzhōu hé Yìzhōu, liánhé Sūn Quán, gòngtóng duìkàng Cáo Cāo.', meaning: 'Ông nói, Tào Tháo chiếm thiên thời, Tôn Quyền chiếm địa lợi, tướng quân nên chiếm Kinh Châu và Ích Châu, liên minh với Tôn Quyền, cùng chống Tào Tháo.' }
        ]
      },
      {
        title: 'Phần 4: Như cá gặp nước',
        lines: [
          { hanzi: '刘备听后茅塞顿开，诚恳地请诸葛亮出山辅佐自己。', pinyin: 'Liú Bèi tīnghòu máosè-dùnkāi, chéngkěn de qǐng Zhūgě Liàng chūshān fǔzuǒ zìjǐ.', meaning: 'Lưu Bị nghe xong chợt thông suốt, chân thành mời Gia Cát Lượng xuất sơn giúp mình.' },
          { hanzi: '诸葛亮被他的诚意打动，终于答应离开隆中，从此成为刘备最信赖的军师。', pinyin: 'Zhūgě Liàng bèi tā de chéngyì dǎdòng, zhōngyú dāying líkāi Lóngzhōng, cóngcǐ chéngwéi Liú Bèi zuì xìnlài de jūnshī.', meaning: 'Gia Cát Lượng cảm động trước thành ý của ông, cuối cùng đồng ý rời Long Trung, từ đó trở thành quân sư được Lưu Bị tin cậy nhất.' },
          { hanzi: '刘备常说，自己得到诸葛亮，就像鱼儿得到了水。', pinyin: 'Liú Bèi cháng shuō, zìjǐ dédào Zhūgě Liàng, jiù xiàng yú\'ér dédàole shuǐ.', meaning: 'Lưu Bị thường nói, mình có được Gia Cát Lượng giống như cá gặp được nước.' },
          { hanzi: '关羽和张飞起初不服气，后来看到诸葛亮用兵如神，才心悦诚服。', pinyin: 'Guān Yǔ hé Zhāng Fēi qǐchū bù fúqì, hòulái kàndào Zhūgě Liàng yòngbīng rú shén, cái xīnyuè-chéngfú.', meaning: 'Quan Vũ và Trương Phi lúc đầu không phục, về sau thấy Gia Cát Lượng dụng binh như thần mới tâm phục khẩu phục.' },
          { hanzi: '后人用"三顾茅庐"形容诚心诚意地一再拜访、邀请有才能的人。', pinyin: 'Hòurén yòng "sān gù máolú" xíngróng chéngxīn-chéngyì de yízài bàifǎng, yāoqǐng yǒu cáinéng de rén.', meaning: 'Người đời sau dùng "ba lần đến lều tranh" để chỉ việc thành tâm thành ý nhiều lần đến thăm, mời người có tài.' }
        ]
      }
    ],
    quiz: [
      { question: '徐庶向刘备推荐了谁？', options: ['诸葛亮', '诸葛均', '周瑜'] },
      { question: '刘备第二次去隆中遇到了什么情况？', options: ['风雪交加，诸葛亮不在家', '诸葛亮正在午睡', '诸葛亮热情接待'] },
      { question: '第三次诸葛亮为什么没有立刻出来？', options: ['他正在午睡，刘备站在阶下等候', '他不愿意见刘备', '他在外面访友'] },
      { question: '“三顾茅庐”形容什么？', options: ['诚心诚意一再邀请人才', '三次搬家', '三次修房子'] }
    ]
  }
]
