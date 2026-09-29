// Truyen dai HSK6: cac truyen thanh ngu / dan gian co dien cua Trung Quoc (thuoc
// kho tang chung, khong vuong ban quyen), duoc soan lai bang tieng Trung trinh do
// cao. Cung cau truc voi stories.js: chuong -> cau {hanzi, pinyin, meaning} va
// bai doc hieu cuoi truyen, trong do options[0] la dap an dung.
export const STORIES_HSK6 = [
  {
    key: 'yugong-yishan',
    icon: '⛰️',
    title: 'Ngu Công dời núi',
    level: 'HSK6',
    chapters: [
      {
        title: 'Phần 1: Quyết định dọn núi',
        lines: [
          { hanzi: '很久以前，北山下住着一位九十岁的老人，名叫愚公。', pinyin: 'Hěn jiǔ yǐqián, Běishān xià zhùzhe yí wèi jiǔshí suì de lǎorén, míng jiào Yúgōng.', meaning: 'Ngày xưa, dưới chân núi Bắc có một cụ già chín mươi tuổi tên là Ngu Công.' },
          { hanzi: '他家门前有两座大山，挡住了去路，出门要绕很远的路。', pinyin: 'Tā jiā mén qián yǒu liǎng zuò dàshān, dǎngzhùle qùlù, chūmén yào rào hěn yuǎn de lù.', meaning: 'Trước cửa nhà ông có hai ngọn núi lớn chắn mất đường, ra ngoài phải đi vòng rất xa.' },
          { hanzi: '有一天，愚公召集全家人，说："我们一起把这两座山搬走，好不好？"', pinyin: 'Yǒu yì tiān, Yúgōng zhàojí quánjiā rén, shuō: "Wǒmen yìqǐ bǎ zhè liǎng zuò shān bānzǒu, hǎo bu hǎo?"', meaning: 'Một hôm, Ngu Công triệu tập cả nhà, nói: "Chúng ta cùng dọn hai ngọn núi này đi, được không?"' },
          { hanzi: '儿子和孙子们都表示赞成，只有他的妻子担心："你连一块小石头都搬不动，怎么能搬走大山呢？"', pinyin: 'Érzi hé sūnzimen dōu biǎoshì zànchéng, zhǐyǒu tā de qīzi dānxīn: "Nǐ lián yí kuài xiǎo shítou dōu bān bu dòng, zěnme néng bānzǒu dàshān ne?"', meaning: 'Con cháu đều tán thành, chỉ có vợ ông lo lắng: "Ông một hòn đá nhỏ còn không nhấc nổi, làm sao dọn được núi?"' }
        ]
      },
      {
        title: 'Phần 2: Lời chế giễu của Trí Tẩu',
        lines: [
          { hanzi: '愚公带着家人开始挖山，把石头和泥土运到很远的海边。', pinyin: 'Yúgōng dàizhe jiārén kāishǐ wā shān, bǎ shítou hé nítǔ yùndào hěn yuǎn de hǎibiān.', meaning: 'Ngu Công dẫn người nhà bắt đầu đào núi, chở đá và đất ra tận bờ biển xa xôi.' },
          { hanzi: '一个叫智叟的老人看见了，笑着说："你这么大年纪了，还能挖掉多少土？真是太愚蠢了！"', pinyin: 'Yí gè jiào Zhìsǒu de lǎorén kànjiànle, xiàozhe shuō: "Nǐ zhème dà niánjì le, hái néng wā diào duōshao tǔ? Zhēn shì tài yúchǔn le!"', meaning: 'Một cụ già tên Trí Tẩu trông thấy, cười nói: "Ông già thế này còn đào được bao nhiêu đất? Thật quá dại dột!"' },
          { hanzi: '愚公叹了口气，回答说："我死了还有儿子，儿子死了还有孙子，子子孙孙是挖不完的。"', pinyin: 'Yúgōng tànle kǒu qì, huídá shuō: "Wǒ sǐle hái yǒu érzi, érzi sǐle hái yǒu sūnzi, zǐzǐ-sūnsūn shì wā bu wán de."', meaning: 'Ngu Công thở dài đáp: "Ta chết rồi còn con, con chết rồi còn cháu, con cháu đời đời thì đào không hết."' },
          { hanzi: '"可是山却不会再长高，为什么挖不平呢？"智叟听了，一句话也说不出来。', pinyin: '"Kěshì shān què bú huì zài zhǎng gāo, wèishénme wā bu píng ne?" Zhìsǒu tīngle, yí jù huà yě shuō bu chūlái.', meaning: '"Mà núi thì không cao thêm nữa, sao lại không san bằng được?" Trí Tẩu nghe xong, không nói nổi một lời.' }
        ]
      },
      {
        title: 'Phần 3: Cảm động thiên đế',
        lines: [
          { hanzi: '山神听说了这件事，害怕愚公真的把山挖平，就报告了天帝。', pinyin: 'Shānshén tīngshuōle zhè jiàn shì, hàipà Yúgōng zhēn de bǎ shān wāpíng, jiù bàogàole Tiāndì.', meaning: 'Thần núi nghe chuyện, sợ Ngu Công đào bằng núi thật nên tâu lên Thiên Đế.' },
          { hanzi: '天帝被愚公的诚心感动了，命令两个大力神把两座山背走。', pinyin: 'Tiāndì bèi Yúgōng de chéngxīn gǎndòng le, mìnglìng liǎng gè dàlìshén bǎ liǎng zuò shān bēizǒu.', meaning: 'Thiên Đế cảm động trước tấm lòng thành của Ngu Công, ra lệnh cho hai vị lực thần cõng hai ngọn núi đi.' },
          { hanzi: '从此，愚公家门前再也没有大山挡路了。', pinyin: 'Cóngcǐ, Yúgōng jiā mén qián zài yě méiyǒu dàshān dǎng lù le.', meaning: 'Từ đó, trước cửa nhà Ngu Công không còn núi lớn nào chắn đường nữa.' },
          { hanzi: '这个故事告诉我们：只要有恒心、不放弃，再难的事情也能成功。', pinyin: 'Zhège gùshi gàosu wǒmen: zhǐyào yǒu héngxīn, bú fàngqì, zài nán de shìqing yě néng chénggōng.', meaning: 'Câu chuyện cho ta biết: chỉ cần có lòng kiên trì, không bỏ cuộc thì việc khó đến đâu cũng thành công.' }
        ]
      }
    ],
    quiz: [
      { question: '愚公为什么要搬山？', options: ['山挡住了出门的路', '想在山上盖房子', '山上没有水'] },
      { question: '智叟为什么笑愚公？', options: ['觉得他年纪大，做不成', '觉得他挖得太快', '觉得他很有钱'] },
      { question: '最后山是怎么被搬走的？', options: ['天帝派大力神背走', '愚公一个人挖完', '被大水冲走'] },
      { question: '这个故事告诉我们什么？', options: ['有恒心就能成功', '老人不能工作', '山是搬不走的'] }
    ]
  },
  {
    key: 'saiweng-shima',
    icon: '🐴',
    title: 'Ông lão mất ngựa',
    level: 'HSK6',
    chapters: [
      {
        title: 'Phần 1: Con ngựa chạy mất',
        lines: [
          { hanzi: '靠近边境的地方住着一位老人，大家都叫他塞翁。', pinyin: 'Kàojìn biānjìng de dìfang zhùzhe yí wèi lǎorén, dàjiā dōu jiào tā Sàiwēng.', meaning: 'Gần vùng biên giới có một cụ già, mọi người gọi là Tái Ông.' },
          { hanzi: '有一天，他家的马突然跑到了边境外面，再也找不到了。', pinyin: 'Yǒu yì tiān, tā jiā de mǎ tūrán pǎodàole biānjìng wàimiàn, zài yě zhǎo bu dào le.', meaning: 'Một hôm, con ngựa nhà ông bỗng chạy ra ngoài biên giới, không tìm thấy nữa.' },
          { hanzi: '邻居们都来安慰他，塞翁却笑着说："这怎么知道不是一件好事呢？"', pinyin: 'Línjūmen dōu lái ānwèi tā, Sàiwēng què xiàozhe shuō: "Zhè zěnme zhīdào bú shì yí jiàn hǎoshì ne?"', meaning: 'Hàng xóm đều đến an ủi, Tái Ông lại cười nói: "Sao biết đây không phải chuyện tốt?"' }
        ]
      },
      {
        title: 'Phần 2: Ngựa quý trở về',
        lines: [
          { hanzi: '几个月后，那匹马竟然自己回来了，还带回来一匹漂亮的骏马。', pinyin: 'Jǐ gè yuè hòu, nà pǐ mǎ jìngrán zìjǐ huílái le, hái dàihuílái yì pǐ piàoliang de jùnmǎ.', meaning: 'Vài tháng sau, con ngựa ấy lại tự trở về, còn dẫn theo một con tuấn mã đẹp.' },
          { hanzi: '邻居们纷纷来祝贺，塞翁却皱着眉头说："这怎么知道不是一件坏事呢？"', pinyin: 'Línjūmen fēnfēn lái zhùhè, Sàiwēng què zhòuzhe méitóu shuō: "Zhè zěnme zhīdào bú shì yí jiàn huàishì ne?"', meaning: 'Hàng xóm lũ lượt đến chúc mừng, Tái Ông lại nhíu mày nói: "Sao biết đây không phải chuyện xấu?"' }
        ]
      },
      {
        title: 'Phần 3: Phúc họa khó lường',
        lines: [
          { hanzi: '塞翁的儿子喜欢骑马，有一天不小心从骏马上摔下来，把腿摔断了。', pinyin: 'Sàiwēng de érzi xǐhuan qí mǎ, yǒu yì tiān bù xiǎoxīn cóng jùnmǎ shàng shuāi xiàlái, bǎ tuǐ shuāiduàn le.', meaning: 'Con trai Tái Ông thích cưỡi ngựa, một hôm bất cẩn ngã từ trên tuấn mã xuống, gãy chân.' },
          { hanzi: '邻居们又来安慰，塞翁还是平静地说："这怎么知道不是一件好事呢？"', pinyin: 'Línjūmen yòu lái ānwèi, Sàiwēng háishi píngjìng de shuō: "Zhè zěnme zhīdào bú shì yí jiàn hǎoshì ne?"', meaning: 'Hàng xóm lại đến an ủi, Tái Ông vẫn bình thản nói: "Sao biết đây không phải chuyện tốt?"' },
          { hanzi: '一年以后，边境发生了战争，年轻人都被叫去打仗，死了很多人。', pinyin: 'Yì nián yǐhòu, biānjìng fāshēngle zhànzhēng, niánqīngrén dōu bèi jiào qù dǎzhàng, sǐle hěn duō rén.', meaning: 'Một năm sau, biên giới nổ ra chiến tranh, thanh niên đều bị gọi đi đánh trận, chết rất nhiều người.' },
          { hanzi: '塞翁的儿子因为腿断了，不用上战场，父子俩平安地活了下来。', pinyin: 'Sàiwēng de érzi yīnwèi tuǐ duàn le, bú yòng shàng zhànchǎng, fùzǐ liǎ píng\'ān de huóle xiàlái.', meaning: 'Con trai Tái Ông vì gãy chân nên không phải ra chiến trường, hai cha con bình an sống sót.' },
          { hanzi: '这就是"塞翁失马，焉知非福"：好事和坏事常常互相转化。', pinyin: 'Zhè jiùshì "sàiwēng shī mǎ, yān zhī fēi fú": hǎoshì hé huàishì chángcháng hùxiāng zhuǎnhuà.', meaning: 'Đó chính là "Tái Ông mất ngựa, biết đâu là phúc": chuyện tốt và chuyện xấu thường chuyển hóa lẫn nhau.' }
        ]
      }
    ],
    quiz: [
      { question: '塞翁的马后来怎么样了？', options: ['自己回来了，还带回一匹好马', '再也没有回来', '被邻居偷走了'] },
      { question: '塞翁的儿子为什么受伤？', options: ['从马上摔了下来', '在战场上受了伤', '生了一场大病'] },
      { question: '儿子为什么没有去打仗？', options: ['因为腿断了', '因为年纪太小', '因为不想去'] },
      { question: '这个故事的意思是什么？', options: ['好事和坏事会互相转化', '有了马就一定幸福', '不应该养马'] }
    ]
  },
  {
    key: 'yegong-hao-long',
    icon: '🐉',
    title: 'Diệp Công thích rồng',
    level: 'HSK6',
    chapters: [
      {
        title: 'Phần 1: Người mê rồng',
        lines: [
          { hanzi: '古时候有一个人，人们叫他叶公，他特别喜欢龙。', pinyin: 'Gǔ shíhou yǒu yí gè rén, rénmen jiào tā Yègōng, tā tèbié xǐhuan lóng.', meaning: 'Ngày xưa có một người, mọi người gọi là Diệp Công, ông đặc biệt thích rồng.' },
          { hanzi: '他家的墙上画着龙，柱子上刻着龙，连衣服和茶杯上也都是龙的图案。', pinyin: 'Tā jiā de qiáng shàng huàzhe lóng, zhùzi shàng kèzhe lóng, lián yīfu hé chábēi shàng yě dōu shì lóng de tú\'àn.', meaning: 'Tường nhà ông vẽ rồng, cột nhà khắc rồng, đến quần áo và chén trà cũng đều có hoa văn rồng.' },
          { hanzi: '他常常对别人说："我最爱龙了，没有什么比龙更美！"', pinyin: 'Tā chángcháng duì biérén shuō: "Wǒ zuì ài lóng le, méiyǒu shénme bǐ lóng gèng měi!"', meaning: 'Ông thường nói với người khác: "Tôi yêu rồng nhất, không gì đẹp hơn rồng!"' }
        ]
      },
      {
        title: 'Phần 2: Rồng thật đến thăm',
        lines: [
          { hanzi: '天上的真龙听说了这件事，非常感动，决定去拜访这位朋友。', pinyin: 'Tiānshàng de zhēn lóng tīngshuōle zhè jiàn shì, fēicháng gǎndòng, juédìng qù bàifǎng zhè wèi péngyou.', meaning: 'Rồng thật trên trời nghe chuyện, vô cùng cảm động, quyết định đến thăm người bạn này.' },
          { hanzi: '一天，真龙从天上飞下来，把头伸进叶公家的窗户，尾巴拖在院子里。', pinyin: 'Yì tiān, zhēn lóng cóng tiānshàng fēi xiàlái, bǎ tóu shēnjìn Yègōng jiā de chuānghu, wěiba tuō zài yuànzi lǐ.', meaning: 'Một hôm, rồng thật từ trên trời bay xuống, thò đầu vào cửa sổ nhà Diệp Công, đuôi kéo lê trong sân.' },
          { hanzi: '叶公一看，吓得脸色发白，转身就跑，连声大叫："妖怪！救命啊！"', pinyin: 'Yègōng yí kàn, xià de liǎnsè fābái, zhuǎnshēn jiù pǎo, liánshēng dàjiào: "Yāoguài! Jiùmìng a!"', meaning: 'Diệp Công vừa nhìn thấy, sợ đến tái mặt, quay người bỏ chạy, la lớn liên hồi: "Yêu quái! Cứu tôi với!"' }
        ]
      },
      {
        title: 'Phần 3: Thích giả không thích thật',
        lines: [
          { hanzi: '真龙又失望又奇怪，只好飞回天上。', pinyin: 'Zhēn lóng yòu shīwàng yòu qíguài, zhǐhǎo fēihuí tiānshàng.', meaning: 'Rồng thật vừa thất vọng vừa lấy làm lạ, đành bay về trời.' },
          { hanzi: '原来，叶公并不是真的喜欢龙，他喜欢的只是像龙的东西。', pinyin: 'Yuánlái, Yègōng bìng bú shì zhēn de xǐhuan lóng, tā xǐhuan de zhǐshì xiàng lóng de dōngxi.', meaning: 'Hóa ra Diệp Công không thật sự thích rồng, ông chỉ thích những thứ giống rồng.' },
          { hanzi: '后来人们用"叶公好龙"来比喻嘴上说爱好某事物，实际上并不真爱。', pinyin: 'Hòulái rénmen yòng "Yègōng hào lóng" lái bǐyù zuǐ shàng shuō àihào mǒu shìwù, shíjì shang bìng bú zhēn ài.', meaning: 'Về sau người ta dùng "Diệp Công thích rồng" để ví người ngoài miệng nói yêu thích điều gì đó, nhưng thực ra không thật lòng.' }
        ]
      }
    ],
    quiz: [
      { question: '叶公家里到处都有什么？', options: ['龙的图案', '马的图案', '花的图案'] },
      { question: '真龙来了以后，叶公有什么反应？', options: ['吓得转身就跑', '高兴地欢迎它', '拿出茶杯招待它'] },
      { question: '叶公喜欢的其实是什么？', options: ['像龙的东西', '真正的龙', '天上的云'] },
      { question: '"叶公好龙"比喻什么样的人？', options: ['嘴上喜欢，实际上并不真爱', '非常勇敢的人', '很会画画的人'] }
    ]
  },
  {
    key: 'woxin-changdan',
    icon: '🗡️',
    title: 'Nằm gai nếm mật',
    level: 'HSK6',
    chapters: [
      {
        title: 'Phần 1: Thất bại và nhục nhã',
        lines: [
          { hanzi: '春秋时期，越王勾践被吴国打败，成了吴王夫差的俘虏。', pinyin: 'Chūnqiū shíqī, Yuèwáng Gōujiàn bèi Wúguó dǎbài, chéngle Wúwáng Fūchāi de fúlǔ.', meaning: 'Thời Xuân Thu, Việt vương Câu Tiễn bị nước Ngô đánh bại, trở thành tù binh của Ngô vương Phù Sai.' },
          { hanzi: '他在吴国做了三年奴仆，每天喂马、干粗活，受尽了屈辱。', pinyin: 'Tā zài Wúguó zuòle sān nián núpú, měitiān wèi mǎ, gàn cūhuó, shòujìnle qūrǔ.', meaning: 'Ông làm nô bộc ở nước Ngô ba năm, hằng ngày cho ngựa ăn, làm việc nặng, chịu đủ nhục nhã.' },
          { hanzi: '夫差看他表现得很老实，终于放他回国。', pinyin: 'Fūchāi kàn tā biǎoxiàn de hěn lǎoshi, zhōngyú fàng tā huíguó.', meaning: 'Phù Sai thấy ông tỏ ra rất thật thà, cuối cùng thả ông về nước.' }
        ]
      },
      {
        title: 'Phần 2: Nuôi chí phục thù',
        lines: [
          { hanzi: '回到越国后，勾践下定决心，一定要报仇雪恨。', pinyin: 'Huídào Yuèguó hòu, Gōujiàn xiàdìng juéxīn, yídìng yào bàochóu xuěhèn.', meaning: 'Trở về nước Việt, Câu Tiễn hạ quyết tâm nhất định phải báo thù rửa hận.' },
          { hanzi: '他晚上睡在硬硬的柴草上，房间里挂着一个苦胆，每天早上起来都要尝一尝。', pinyin: 'Tā wǎnshang shuì zài yìngyìng de cháicǎo shàng, fángjiān lǐ guàzhe yí gè kǔdǎn, měitiān zǎoshang qǐlái dōu yào cháng yi cháng.', meaning: 'Đêm ông ngủ trên đống củi rơm cứng, trong phòng treo một túi mật đắng, mỗi sáng thức dậy đều nếm thử.' },
          { hanzi: '他这样做，是为了提醒自己不要忘记失败的耻辱。', pinyin: 'Tā zhèyàng zuò, shì wèile tíxǐng zìjǐ búyào wàngjì shībài de chǐrǔ.', meaning: 'Ông làm vậy là để nhắc nhở bản thân không quên nỗi nhục thất bại.' },
          { hanzi: '他还亲自种田，妻子也亲自织布，与百姓同甘共苦。', pinyin: 'Tā hái qīnzì zhòngtián, qīzi yě qīnzì zhībù, yǔ bǎixìng tónggān-gòngkǔ.', meaning: 'Ông còn tự mình cày cấy, vợ ông cũng tự dệt vải, đồng cam cộng khổ với dân chúng.' }
        ]
      },
      {
        title: 'Phần 3: Báo thù thành công',
        lines: [
          { hanzi: '经过二十年的努力，越国变得国富兵强。', pinyin: 'Jīngguò èrshí nián de nǔlì, Yuèguó biànde guófù-bīngqiáng.', meaning: 'Sau hai mươi năm nỗ lực, nước Việt trở nên nước giàu quân mạnh.' },
          { hanzi: '而吴王夫差骄傲自满，只知道享乐，不再关心国家大事。', pinyin: 'Ér Wúwáng Fūchāi jiāo\'ào zìmǎn, zhǐ zhīdào xiǎnglè, bú zài guānxīn guójiā dàshì.', meaning: 'Còn Ngô vương Phù Sai kiêu ngạo tự mãn, chỉ biết hưởng lạc, không còn quan tâm việc nước.' },
          { hanzi: '勾践趁机出兵，终于打败了吴国，报了仇。', pinyin: 'Gōujiàn chènjī chūbīng, zhōngyú dǎbàile Wúguó, bàole chóu.', meaning: 'Câu Tiễn nhân cơ hội xuất quân, cuối cùng đánh bại nước Ngô, báo được thù.' },
          { hanzi: '后来人们用"卧薪尝胆"来形容人刻苦自励，发愤图强。', pinyin: 'Hòulái rénmen yòng "wòxīn-chángdǎn" lái xíngróng rén kèkǔ zìlì, fāfèn-túqiáng.', meaning: 'Về sau người ta dùng "nằm gai nếm mật" để chỉ người chịu khó tự khích lệ, dốc chí vươn lên.' }
        ]
      }
    ],
    quiz: [
      { question: '勾践在吴国做了几年奴仆？', options: ['三年', '一年', '十年'] },
      { question: '回国后，勾践每天早上做什么？', options: ['尝一尝苦胆', '喝一杯热茶', '骑马打猎'] },
      { question: '勾践为什么睡在柴草上、尝苦胆？', options: ['提醒自己不忘耻辱', '因为家里很穷', '因为身体不好'] },
      { question: '夫差后来为什么失败了？', options: ['骄傲自满，只知享乐', '生病去世了', '军队太少'] }
    ]
  },
  {
    key: 'hualong-dianjing',
    icon: '🖌️',
    title: 'Vẽ rồng điểm mắt',
    level: 'HSK6',
    chapters: [
      {
        title: 'Phần 1: Họa sĩ tài ba',
        lines: [
          { hanzi: '南北朝时期，有一位著名的画家，名叫张僧繇。', pinyin: 'Nánběicháo shíqī, yǒu yí wèi zhùmíng de huàjiā, míng jiào Zhāng Sēngyáo.', meaning: 'Thời Nam Bắc triều, có một họa sĩ nổi tiếng tên là Trương Tăng Do.' },
          { hanzi: '他画的动物栩栩如生，人们都说像真的一样。', pinyin: 'Tā huà de dòngwù xǔxǔ-rúshēng, rénmen dōu shuō xiàng zhēn de yíyàng.', meaning: 'Những con vật ông vẽ sống động như thật, ai cũng nói giống hệt thật.' },
          { hanzi: '有一次，皇帝请他在寺庙的墙上画四条龙。', pinyin: 'Yǒu yí cì, huángdì qǐng tā zài sìmiào de qiáng shàng huà sì tiáo lóng.', meaning: 'Có lần, hoàng đế mời ông vẽ bốn con rồng lên tường chùa.' }
        ]
      },
      {
        title: 'Phần 2: Rồng không có mắt',
        lines: [
          { hanzi: '张僧繇画好了龙，鳞片闪闪发光，威风凛凛，可是每条龙都没有眼睛。', pinyin: 'Zhāng Sēngyáo huàhǎole lóng, línpiàn shǎnshǎn fāguāng, wēifēng-lǐnlǐn, kěshì měi tiáo lóng dōu méiyǒu yǎnjing.', meaning: 'Trương Tăng Do vẽ xong rồng, vảy lấp lánh, oai phong lẫm liệt, nhưng con nào cũng không có mắt.' },
          { hanzi: '人们觉得奇怪，问他为什么不画眼睛。', pinyin: 'Rénmen juéde qíguài, wèn tā wèishénme bú huà yǎnjing.', meaning: 'Mọi người thấy lạ, hỏi ông vì sao không vẽ mắt.' },
          { hanzi: '他说："画上眼睛，龙就会飞走的。"大家都不相信，觉得他在开玩笑。', pinyin: 'Tā shuō: "Huà shàng yǎnjing, lóng jiù huì fēizǒu de." Dàjiā dōu bù xiāngxìn, juéde tā zài kāi wánxiào.', meaning: 'Ông nói: "Vẽ mắt vào, rồng sẽ bay đi mất." Ai cũng không tin, cho rằng ông nói đùa.' }
        ]
      },
      {
        title: 'Phần 3: Rồng bay đi',
        lines: [
          { hanzi: '在大家的坚持下，张僧繇只好拿起笔，给其中两条龙点上了眼睛。', pinyin: 'Zài dàjiā de jiānchí xià, Zhāng Sēngyáo zhǐhǎo náqǐ bǐ, gěi qízhōng liǎng tiáo lóng diǎnshàngle yǎnjing.', meaning: 'Trước sự nài ép của mọi người, Trương Tăng Do đành cầm bút điểm mắt cho hai trong số các con rồng.' },
          { hanzi: '突然，天空中电闪雷鸣，两条龙冲破墙壁，腾空飞走了。', pinyin: 'Tūrán, tiānkōng zhōng diànshǎn-léimíng, liǎng tiáo lóng chōngpò qiángbì, téngkōng fēizǒu le.', meaning: 'Bỗng trên trời chớp giật sấm rền, hai con rồng phá tường lao ra, bay vút lên không trung.' },
          { hanzi: '墙上只剩下没有点眼睛的两条龙。', pinyin: 'Qiáng shàng zhǐ shèngxià méiyǒu diǎn yǎnjing de liǎng tiáo lóng.', meaning: 'Trên tường chỉ còn lại hai con rồng chưa điểm mắt.' },
          { hanzi: '后来"画龙点睛"比喻在关键处加上精辟的一笔，使内容更加生动传神。', pinyin: 'Hòulái "huà lóng diǎn jīng" bǐyù zài guānjiàn chù jiāshàng jīngpì de yì bǐ, shǐ nèiróng gèngjiā shēngdòng chuánshén.', meaning: 'Về sau "vẽ rồng điểm mắt" ví việc thêm một nét tinh túy ở chỗ then chốt, khiến nội dung sinh động và có hồn hơn.' }
        ]
      }
    ],
    quiz: [
      { question: '张僧繇在墙上画了几条龙？', options: ['四条', '两条', '八条'] },
      { question: '张僧繇一开始为什么不画龙的眼睛？', options: ['怕龙飞走', '忘记了', '没有颜色'] },
      { question: '点上眼睛以后，发生了什么？', options: ['两条龙飞走了', '四条龙都飞走了', '墙倒了'] },
      { question: '"画龙点睛"比喻什么？', options: ['在关键处加上精彩的一笔', '画画的速度很快', '画得很像真的'] }
    ]
  }
]
