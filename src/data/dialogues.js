// Hoi thoai ngan theo tinh huong thuc te, tu soan va kiem tra pinyin/thanh dieu
// thu cong (giong cach lam vi du cau da co), giup thay tieng Trung duoc dung
// nhu the nao trong cau chuyen that thay vi chi hoc tu rieng le.
export const DIALOGUES = [
  {
    key: 'greeting',
    icon: '👋',
    title: 'Chào hỏi làm quen',
    lines: [
      { speaker: 'A', hanzi: '你好！你叫什么名字？', pinyin: 'Nǐ hǎo! Nǐ jiào shénme míngzi?', meaning: 'Chào bạn! Bạn tên là gì?' },
      { speaker: 'B', hanzi: '我叫李明。你呢？', pinyin: 'Wǒ jiào Lǐ Míng. Nǐ ne?', meaning: 'Tôi tên là Lý Minh. Còn bạn?' },
      { speaker: 'A', hanzi: '我叫王芳，很高兴认识你。', pinyin: 'Wǒ jiào Wáng Fāng, hěn gāoxìng rènshi nǐ.', meaning: 'Tôi tên là Vương Phương, rất vui được quen bạn.' },
      { speaker: 'B', hanzi: '我也很高兴认识你。', pinyin: 'Wǒ yě hěn gāoxìng rènshi nǐ.', meaning: 'Tôi cũng rất vui được quen bạn.' }
    ]
  },
  {
    key: 'health',
    icon: '🙋',
    title: 'Hỏi thăm sức khỏe',
    lines: [
      { speaker: 'A', hanzi: '你好吗？', pinyin: 'Nǐ hǎo ma?', meaning: 'Bạn khỏe không?' },
      { speaker: 'B', hanzi: '我很好，谢谢。你呢？', pinyin: 'Wǒ hěn hǎo, xièxie. Nǐ ne?', meaning: 'Tôi khỏe, cảm ơn. Còn bạn?' },
      { speaker: 'A', hanzi: '我也很好。', pinyin: 'Wǒ yě hěn hǎo.', meaning: 'Tôi cũng khỏe.' }
    ]
  },
  {
    key: 'shopping',
    icon: '🛍️',
    title: 'Mua đồ, hỏi giá',
    lines: [
      { speaker: 'A', hanzi: '这个多少钱？', pinyin: 'Zhège duōshao qián?', meaning: 'Cái này bao nhiêu tiền?' },
      { speaker: 'B', hanzi: '二十块。', pinyin: 'Èrshí kuài.', meaning: 'Hai mươi đồng.' },
      { speaker: 'A', hanzi: '太贵了，便宜一点儿吧。', pinyin: 'Tài guì le, piányi yìdiǎnr ba.', meaning: 'Đắt quá, rẻ một chút đi.' },
      { speaker: 'B', hanzi: '好吧，十八块。', pinyin: 'Hǎo ba, shíbā kuài.', meaning: 'Được rồi, mười tám đồng.' }
    ]
  },
  {
    key: 'food',
    icon: '🍽️',
    title: 'Gọi món ăn',
    lines: [
      { speaker: 'A', hanzi: '你想吃什么？', pinyin: 'Nǐ xiǎng chī shénme?', meaning: 'Bạn muốn ăn gì?' },
      { speaker: 'B', hanzi: '我想吃米饭和菜。你呢？', pinyin: 'Wǒ xiǎng chī mǐfàn hé cài. Nǐ ne?', meaning: 'Tôi muốn ăn cơm và món ăn. Còn bạn?' },
      { speaker: 'A', hanzi: '我想喝茶。', pinyin: 'Wǒ xiǎng hē chá.', meaning: 'Tôi muốn uống trà.' }
    ]
  },
  {
    key: 'direction',
    icon: '🧭',
    title: 'Hỏi đường',
    lines: [
      { speaker: 'A', hanzi: '请问，医院在哪儿？', pinyin: 'Qǐngwèn, yīyuàn zài nǎr?', meaning: 'Xin hỏi, bệnh viện ở đâu?' },
      { speaker: 'B', hanzi: '在前面，不远。', pinyin: 'Zài qiánmiàn, bù yuǎn.', meaning: 'Ở phía trước, không xa.' },
      { speaker: 'A', hanzi: '谢谢你。', pinyin: 'Xièxie nǐ.', meaning: 'Cảm ơn bạn.' },
      { speaker: 'B', hanzi: '不客气。', pinyin: 'Bú kèqi.', meaning: 'Không có gì.' }
    ]
  },
  {
    key: 'plan',
    icon: '📅',
    title: 'Hẹn gặp mặt',
    lines: [
      { speaker: 'A', hanzi: '你今天忙吗？', pinyin: 'Nǐ jīntiān máng ma?', meaning: 'Hôm nay bạn có bận không?' },
      { speaker: 'B', hanzi: '不忙。你想做什么？', pinyin: 'Bù máng. Nǐ xiǎng zuò shénme?', meaning: 'Không bận. Bạn muốn làm gì?' },
      { speaker: 'A', hanzi: '我们一起去看电影吧。', pinyin: 'Wǒmen yìqǐ qù kàn diànyǐng ba.', meaning: 'Chúng ta cùng đi xem phim nhé.' },
      { speaker: 'B', hanzi: '好啊，几点？', pinyin: 'Hǎo a, jǐ diǎn?', meaning: 'Được, mấy giờ?' }
    ]
  },
  {
    key: 'weather',
    icon: '🌦️',
    title: 'Nói về thời tiết',
    lines: [
      { speaker: 'A', hanzi: '今天天气怎么样？', pinyin: 'Jīntiān tiānqì zěnmeyàng?', meaning: 'Hôm nay thời tiết thế nào?' },
      { speaker: 'B', hanzi: '今天很冷，下雪了。', pinyin: 'Jīntiān hěn lěng, xiàxuě le.', meaning: 'Hôm nay rất lạnh, có tuyết rơi.' },
      { speaker: 'A', hanzi: '那我们不去公园了。', pinyin: 'Nà wǒmen bú qù gōngyuán le.', meaning: 'Vậy chúng ta không đi công viên nữa.' }
    ]
  },
  {
    key: 'family',
    icon: '👨‍👩‍👧',
    title: 'Giới thiệu gia đình',
    lines: [
      { speaker: 'A', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', meaning: 'Nhà bạn có mấy người?' },
      { speaker: 'B', hanzi: '我家有四口人：爸爸、妈妈、哥哥和我。', pinyin: 'Wǒjiā yǒu sì kǒu rén: bàba, māma, gēge hé wǒ.', meaning: 'Nhà tôi có bốn người: bố, mẹ, anh trai và tôi.' },
      { speaker: 'A', hanzi: '你爸爸做什么工作？', pinyin: 'Nǐ bàba zuò shénme gōngzuò?', meaning: 'Bố bạn làm công việc gì?' },
      { speaker: 'B', hanzi: '他是医生。', pinyin: 'Tā shì yīshēng.', meaning: 'Bố tôi là bác sĩ.' }
    ]
  },
  {
    key: 'phone',
    icon: '📞',
    title: 'Gọi điện thoại',
    lines: [
      { speaker: 'A', hanzi: '喂，你好，是王芳吗？', pinyin: 'Wéi, nǐ hǎo, shì Wáng Fāng ma?', meaning: 'Alo, xin chào, có phải Vương Phương không?' },
      { speaker: 'B', hanzi: '是，我是。你是谁？', pinyin: 'Shì, wǒ shì. Nǐ shì shéi?', meaning: 'Đúng, là tôi. Bạn là ai?' },
      { speaker: 'A', hanzi: '我是李明。你在忙吗？', pinyin: 'Wǒ shì Lǐ Míng. Nǐ zài máng ma?', meaning: 'Tôi là Lý Minh. Bạn đang bận không?' },
      { speaker: 'B', hanzi: '没有，你有什么事？', pinyin: 'Méiyǒu, nǐ yǒu shénme shì?', meaning: 'Không, bạn có việc gì?' }
    ]
  },
  {
    key: 'learning',
    icon: '📖',
    title: 'Học tiếng Trung',
    lines: [
      { speaker: 'A', hanzi: '你会说汉语吗？', pinyin: 'Nǐ huì shuō Hànyǔ ma?', meaning: 'Bạn biết nói tiếng Hán không?' },
      { speaker: 'B', hanzi: '我会说一点儿。', pinyin: 'Wǒ huì shuō yìdiǎnr.', meaning: 'Tôi biết nói một chút.' },
      { speaker: 'A', hanzi: '你觉得汉语难吗？', pinyin: 'Nǐ juéde Hànyǔ nán ma?', meaning: 'Bạn thấy tiếng Hán khó không?' },
      { speaker: 'B', hanzi: '有点儿难，但是很有意思。', pinyin: 'Yǒudiǎnr nán, dànshì hěn yǒu yìsi.', meaning: 'Hơi khó, nhưng rất thú vị.' }
    ]
  },
  {
    key: 'taxi',
    icon: '🚕',
    title: 'Đi taxi',
    lines: [
      { speaker: 'A', hanzi: '师傅，我要去火车站。', pinyin: 'Shīfu, wǒ yào qù huǒchēzhàn.', meaning: 'Bác tài, tôi muốn đi ga tàu.' },
      { speaker: 'B', hanzi: '好的，请上车。', pinyin: 'Hǎo de, qǐng shàng chē.', meaning: 'Được, mời lên xe.' },
      { speaker: 'A', hanzi: '要多长时间？', pinyin: 'Yào duō cháng shíjiān?', meaning: 'Mất bao lâu?' },
      { speaker: 'B', hanzi: '大概二十分钟。', pinyin: 'Dàgài èrshí fēnzhōng.', meaning: 'Khoảng hai mươi phút.' }
    ]
  },
  {
    key: 'birthday',
    icon: '🎂',
    title: 'Sinh nhật',
    lines: [
      { speaker: 'A', hanzi: '今天是我的生日。', pinyin: 'Jīntiān shì wǒ de shēngrì.', meaning: 'Hôm nay là sinh nhật tôi.' },
      { speaker: 'B', hanzi: '生日快乐！', pinyin: 'Shēngrì kuàilè!', meaning: 'Chúc mừng sinh nhật!' },
      { speaker: 'A', hanzi: '谢谢你！', pinyin: 'Xièxie nǐ!', meaning: 'Cảm ơn bạn!' },
      { speaker: 'B', hanzi: '你今年多大了？', pinyin: 'Nǐ jīnnián duō dà le?', meaning: 'Năm nay bạn bao nhiêu tuổi?' }
    ]
  },
  {
    key: 'hsk9-xem-can-ho',
    icon: '🏢',
    title: 'Xem căn hộ và thương lượng giá',
    level: 'HSK7-9',
    lines: [
      { speaker: 'A', hanzi: '王先生，您好！欢迎光临，这套房子就是我昨天在电话里向您介绍的那一套。', pinyin: 'Wáng xiānsheng, nín hǎo! Huānyíng guānglín, zhè tào fángzi jiùshì wǒ zuótiān zài diànhuà lǐ xiàng nín jièshào de nà yí tào.', meaning: 'Chào anh Vương! Hoan nghênh anh, căn này chính là căn hôm qua tôi đã giới thiệu với anh qua điện thoại.' },
      { speaker: 'B', hanzi: '看起来采光不错，不过小区好像有点旧了，房龄多少年了？', pinyin: 'Kànqǐlái cǎiguāng búcuò, búguò xiǎoqū hǎoxiàng yǒudiǎn jiù le, fánglíng duōshao nián le?', meaning: 'Trông lấy sáng khá tốt, nhưng khu dân cư hình như hơi cũ rồi, tuổi nhà bao nhiêu năm rồi?' },
      { speaker: 'A', hanzi: '房龄八年，属于次新房。楼盘是由大型开发商建造的，物业管理也很规范，您放心。', pinyin: 'Fánglíng bā nián, shǔyú cìxīnfáng. Lóupán shì yóu dàxíng kāifāshāng jiànzào de, wùyè guǎnlǐ yě hěn guīfàn, nín fàngxīn.', meaning: 'Tuổi nhà tám năm, thuộc loại nhà gần mới. Dự án do chủ đầu tư lớn xây dựng, quản lý vận hành cũng rất bài bản, anh yên tâm.' },
      { speaker: 'B', hanzi: '户型我挺满意的，就是总价超出了我的预算。挂牌价是三百八十万，能不能再让一点？', pinyin: 'Hùxíng wǒ tǐng mǎnyì de, jiùshì zǒngjià chāochū le wǒ de yùsuàn. Guàpáijià shì sānbǎi bāshí wàn, néng bù néng zài ràng yìdiǎn?', meaning: 'Thiết kế căn hộ tôi khá ưng, chỉ là tổng giá vượt ngân sách. Giá niêm yết là 3,8 triệu tệ, có thể bớt thêm chút nữa không?' },
      { speaker: 'A', hanzi: '王先生，这个价位已经低于同小区的市场均价了。业主急着换房，才愿意把价格压得这么低。', pinyin: 'Wáng xiānsheng, zhège jiàwèi yǐjīng dīyú tóng xiǎoqū de shìchǎng jūnjià le. Yèzhǔ zhízhe huànfáng, cái yuànyì bǎ jiàgé yā de zhème dī.', meaning: 'Anh Vương, mức giá này đã thấp hơn giá trung bình thị trường cùng khu rồi. Chủ nhà đang gấp đổi nhà nên mới chịu ép giá xuống thấp thế này.' },
      { speaker: 'B', hanzi: '话虽如此，我手头的资金毕竟有限，而且还得向银行申请按揭贷款。如果您能谈到三百五十万，我今天就可以定下来。', pinyin: 'Huà suī rúcǐ, wǒ shǒutóu de zījīn bìjìng yǒuxiàn, érqiě hái děi xiàng yínháng shēnqǐng ànjiē dàikuǎn. Rúguǒ nín néng tándào sānbǎi wǔshí wàn, wǒ jīntiān jiù kěyǐ dìng xiàlái.', meaning: 'Nói thì nói vậy, nhưng vốn trong tay tôi rốt cuộc có hạn, lại còn phải vay thế chấp ngân hàng. Nếu chị thương lượng được 3,5 triệu, hôm nay tôi chốt luôn.' },
      { speaker: 'A', hanzi: '三百五十万恐怕业主不会接受。这样吧，我再跟他沟通一下，争取给您降到三百六十五万，您看怎么样？', pinyin: 'Sānbǎi wǔshí wàn kǒngpà yèzhǔ bú huì jiēshòu. Zhèyàng ba, wǒ zài gēn tā gōutōng yíxià, zhēngqǔ gěi nín jiàngdào sānbǎi liùshí wǔ wàn, nín kàn zěnmeyàng?', meaning: '3,5 triệu e là chủ nhà sẽ không chấp nhận. Thế này nhé, tôi trao đổi lại với chủ nhà, cố gắng xuống 3,65 triệu cho anh, anh thấy sao?' },
      { speaker: 'B', hanzi: '可以，不过我有个条件：家具和家电都要留下，而且过户产生的税费由卖方承担。', pinyin: 'Kěyǐ, búguò wǒ yǒu gè tiáojiàn: jiājù hé jiādiàn dōu yào liúxià, érqiě guòhù chǎnshēng de shuìfèi yóu màifāng chéngdān.', meaning: 'Được, nhưng tôi có một điều kiện: nội thất và đồ điện gia dụng đều phải để lại, và thuế phí phát sinh khi sang tên do bên bán chịu.' },
      { speaker: 'A', hanzi: '家具家电没问题，业主本来就打算留下。税费全部由卖方承担有点困难，不如双方各担一半，您觉得呢？', pinyin: 'Jiājù jiādiàn méi wèntí, yèzhǔ běnlái jiù dǎsuàn liúxià. Shuìfèi quánbù yóu màifāng chéngdān yǒudiǎn kùnnan, bùrú shuāngfāng gè dān yíbàn, nín juéde ne?', meaning: 'Nội thất, đồ điện không vấn đề, vốn dĩ chủ nhà định để lại. Bên bán chịu toàn bộ thuế phí thì hơi khó, chi bằng hai bên mỗi bên một nửa, anh thấy sao?' },
      { speaker: 'B', hanzi: '行，那就一人一半。您先和业主确认，价格谈妥了我们再约时间签约。', pinyin: 'Xíng, nà jiù yì rén yíbàn. Nín xiān hé yèzhǔ quèrèn, jiàgé tántuǒ le wǒmen zài yuē shíjiān qiānyuē.', meaning: 'Được, vậy mỗi bên một nửa. Chị xác nhận với chủ nhà trước, giá thỏa thuận xong chúng ta sẽ hẹn thời gian ký hợp đồng.' },
      { speaker: 'A', hanzi: '好的，我马上打电话。成交的话，今天就可以先交定金，锁定这套房子，免得被别人抢先。', pinyin: 'Hǎo de, wǒ mǎshàng dǎ diànhuà. Chéngjiāo dehuà, jīntiān jiù kěyǐ xiān jiāo dìngjīn, suǒdìng zhè tào fángzi, miǎnde bèi biérén qiǎngxiān.', meaning: 'Vâng, tôi gọi điện ngay. Nếu chốt được, hôm nay có thể nộp tiền đặt cọc trước để giữ căn này, tránh bị người khác nhanh chân hơn.' },
      { speaker: 'B', hanzi: '那就麻烦您了。能买到合适的房子，多花点时间也值得。', pinyin: 'Nà jiù máfan nín le. Néng mǎidào héshì de fángzi, duō huā diǎn shíjiān yě zhíde.', meaning: 'Vậy làm phiền chị. Mua được căn nhà phù hợp thì bỏ thêm chút thời gian cũng xứng đáng.' }
    ]
  },
  {
    key: 'hsk9-dat-coc-hop-dong',
    icon: '📝',
    title: 'Đặt cọc và đọc hợp đồng mua bán',
    level: 'HSK7-9',
    lines: [
      { speaker: 'A', hanzi: '李女士，这是买卖合同的初稿，请您仔细阅读每一项条款，有不明白的地方随时问我。', pinyin: 'Lǐ nǚshì, zhè shì mǎimài hétong de chūgǎo, qǐng nín zǐxì yuèdú měi yí xiàng tiáokuǎn, yǒu bù míngbai de dìfang suíshí wèn wǒ.', meaning: 'Chị Lý, đây là bản thảo hợp đồng mua bán, mời chị đọc kỹ từng điều khoản, chỗ nào chưa rõ cứ hỏi tôi bất cứ lúc nào.' },
      { speaker: 'B', hanzi: '好的。第三条写着定金是二十万，如果我反悔，定金就不退了，对吗？', pinyin: 'Hǎo de. Dì sān tiáo xiězhe dìngjīn shì èrshí wàn, rúguǒ wǒ fǎnhuǐ, dìngjīn jiù bú tuì le, duì ma?', meaning: 'Vâng. Điều 3 ghi tiền đặt cọc là 200 nghìn tệ, nếu tôi đổi ý thì cọc sẽ không được hoàn lại, đúng không?' },
      { speaker: 'A', hanzi: '对，这就是所谓的“定金罚则”：买方违约，无权要求返还定金；卖方违约，则须双倍返还定金。', pinyin: 'Duì, zhè jiùshì suǒwèi de "dìngjīn fázé": mǎifāng wéiyuē, wúquán yāoqiú fǎnhuán dìngjīn; màifāng wéiyuē, zé xū shuāngbèi fǎnhuán dìngjīn.', meaning: 'Đúng, đây là cái gọi là "quy tắc phạt cọc": bên mua vi phạm thì không có quyền đòi lại tiền cọc; bên bán vi phạm thì phải hoàn lại gấp đôi.' },
      { speaker: 'B', hanzi: '很公平。那逾期付款怎么算？我的首付款需要等银行审批，万一晚几天到账怎么办？', pinyin: 'Hěn gōngpíng. Nà yúqī fùkuǎn zěnme suàn? Wǒ de shǒufùkuǎn xūyào děng yínháng shěnpī, wànyī wǎn jǐ tiān dàozhàng zěnme bàn?', meaning: 'Rất công bằng. Vậy thanh toán trễ hạn tính thế nào? Tiền trả trước của tôi phải chờ ngân hàng duyệt, lỡ vài ngày sau mới về tài khoản thì sao?' },
      { speaker: 'A', hanzi: '第十二条规定，逾期付款超过十五日，卖方有权解除合同；逾期期间，每天按已付款项的万分之五支付违约金。', pinyin: 'Dì shí\'èr tiáo guīdìng, yúqī fùkuǎn chāoguò shíwǔ rì, màifāng yǒuquán jiěchú hétong; yúqī qījiān, měitiān àn yǐfù kuǎnxiàng de wànfēnzhī wǔ zhīfù wéiyuējīn.', meaning: 'Điều 12 quy định: thanh toán trễ quá 15 ngày thì bên bán có quyền hủy hợp đồng; trong thời gian trễ, mỗi ngày phải trả tiền phạt vi phạm bằng 0,05% số tiền đã thanh toán.' },
      { speaker: 'B', hanzi: '万分之五，一个月下来也不是小数目。那卖方迟迟不交房，又该怎么处理？', pinyin: 'Wànfēnzhī wǔ, yí gè yuè xiàlái yě bú shì xiǎo shùmù. Nà màifāng chíchí bù jiāofáng, yòu gāi zěnme chǔlǐ?', meaning: 'Năm phần vạn, tính cả tháng cũng không phải số nhỏ. Vậy nếu bên bán chần chừ không bàn giao nhà thì xử lý thế nào?' },
      { speaker: 'A', hanzi: '同样适用对等条款。按约定，卖方应在收到第二笔房款后三十日内交付房屋，逾期同样按日支付违约金，累计超过六十日，您可以要求解除合同。', pinyin: 'Tóngyàng shìyòng duìděng tiáokuǎn. Àn yuēdìng, màifāng yīng zài shōudào dì èr bǐ fángkuǎn hòu sānshí rì nèi jiāofù fángwū, yúqī tóngyàng àn rì zhīfù wéiyuējīn, lěijì chāoguò liùshí rì, nín kěyǐ yāoqiú jiěchú hétong.', meaning: 'Cũng áp dụng điều khoản đối ứng. Theo thỏa thuận, bên bán phải bàn giao nhà trong vòng 30 ngày sau khi nhận khoản tiền nhà thứ hai, trễ hạn cũng bị phạt theo ngày, cộng dồn quá 60 ngày thì chị có thể yêu cầu hủy hợp đồng.' },
      { speaker: 'B', hanzi: '明白了。还有一个关键问题：过户手续什么时候办？不动产权证书上登记我的名字，最迟要在什么时间之前？', pinyin: 'Míngbai le. Hái yǒu yí gè guānjiàn wèntí: guòhù shǒuxù shénme shíhou bàn? Búdòngchǎn quánzhèngshū shàng dēngjì wǒ de míngzi, zuì chí yào zài shénme shíjiān zhīqián?', meaning: 'Tôi hiểu rồi. Còn một vấn đề then chốt: thủ tục sang tên làm khi nào? Giấy chứng nhận quyền sở hữu bất động sản đăng ký tên tôi thì chậm nhất phải trước thời điểm nào?' },
      { speaker: 'A', hanzi: '合同约定，收到全部首付款后十个工作日内双方共同到不动产登记中心办理过户。评估、贷款审批由买方配合，卖方则负责提前结清原有的抵押贷款。', pinyin: 'Hétong yuēdìng, shōudào quánbù shǒufùkuǎn hòu shí gè gōngzuòrì nèi shuāngfāng gòngtóng dào bùdòngchǎn dēngjì zhōngxīn bànlǐ guòhù. Pínggū, dàikuǎn shěnpī yóu mǎifāng pèihé, màifāng zé fùzé tíqián jiéqīng yuán yǒu de dǐyā dàikuǎn.', meaning: 'Hợp đồng quy định: trong vòng 10 ngày làm việc sau khi nhận đủ tiền trả trước, hai bên cùng đến trung tâm đăng ký bất động sản làm thủ tục sang tên. Thẩm định, duyệt vay do bên mua phối hợp, bên bán thì phải tất toán trước khoản vay thế chấp cũ.' },
      { speaker: 'B', hanzi: '提前还清抵押贷款这一点很重要。我希望合同里补充一条：如果房子存在查封或者产权纠纷，买方有权终止交易并要求全额退还定金。', pinyin: 'Tíqián huánqīng dǐyā dàikuǎn zhè yì diǎn hěn zhòngyào. Wǒ xīwàng hétong lǐ bǔchōng yì tiáo: rúguǒ fángzi cúnzài cháfēng huòzhě chǎnquán jiūfēn, mǎifāng yǒuquán zhōngzhǐ jiāoyì bìng yāoqiú quán\'é tuìhuán dìngjīn.', meaning: 'Việc trả hết khoản vay thế chấp trước hạn rất quan trọng. Tôi muốn bổ sung vào hợp đồng một điều: nếu nhà bị phong tỏa hoặc có tranh chấp quyền sở hữu, bên mua có quyền chấm dứt giao dịch và đòi hoàn lại toàn bộ tiền cọc.' },
      { speaker: 'A', hanzi: '您考虑得很周到，我们完全可以写进补充条款。双方签字盖章后，合同即具有法律效力。', pinyin: 'Nín kǎolǜ de hěn zhōudào, wǒmen wánquán kěyǐ xiě jìn bǔchōng tiáokuǎn. Shuāngfāng qiānzì gàizhāng hòu, hétong jí jùyǒu fǎlǜ xiàolì.', meaning: 'Chị suy nghĩ rất chu đáo, chúng ta hoàn toàn có thể ghi vào điều khoản bổ sung. Sau khi hai bên ký tên đóng dấu, hợp đồng có hiệu lực pháp lý ngay.' },
      { speaker: 'B', hanzi: '好，那我先把补充条款加上，再请律师过目一遍，没有异议就当场签字交定金。', pinyin: 'Hǎo, nà wǒ xiān bǎ bǔchōng tiáokuǎn jiā shàng, zài qǐng lǜshī guòmù yí biàn, méiyǒu yìyì jiù dāngchǎng qiānzì jiāo dìngjīn.', meaning: 'Được, vậy tôi thêm điều khoản bổ sung trước, rồi nhờ luật sư xem lại một lượt, không có ý kiến gì thì ký và nộp cọc tại chỗ.' }
    ]
  },
  {
    key: 'hsk9-phap-ly-so-do',
    icon: '🏦',
    title: 'Pháp lý sổ đỏ, quy hoạch và vay thế chấp',
    level: 'HSK7-9',
    lines: [
      { speaker: 'A', hanzi: '陈经理，我看中了一套二手房，想先了解一下产权方面的情况。卖家提供的是红本，这和以前的房产证有什么区别？', pinyin: 'Chén jīnglǐ, wǒ kànzhòng le yí tào èrshǒufáng, xiǎng xiān liǎojiě yíxià chǎnquán fāngmiàn de qíngkuàng. Màijiā tígōng de shì hóngběn, zhè hé yǐqián de fángchǎnzhèng yǒu shénme qūbié?', meaning: 'Giám đốc Trần, tôi ưng một căn nhà cũ, muốn tìm hiểu trước về tình trạng quyền sở hữu. Người bán đưa sổ đỏ, cái này khác gì giấy chứng nhận nhà ở trước đây?' },
      { speaker: 'B', hanzi: '现在统一称为不动产权证书，俗称“红本”，把房屋所有权和土地使用权登记在同一本证书上。您可以到登记中心查询它是否存在抵押或查封。', pinyin: 'Xiànzài tǒngyī chēngwéi búdòngchǎn quánzhèngshū, súchēng "hóngběn", bǎ fángwū suǒyǒuquán hé tǔdì shǐyòngquán dēngjì zài tóng yì běn zhèngshū shàng. Nín kěyǐ dào dēngjì zhōngxīn cháxún tā shìfǒu cúnzài dǐyā huò cháfēng.', meaning: 'Hiện nay thống nhất gọi là giấy chứng nhận quyền sở hữu bất động sản, tục gọi là "sổ đỏ", ghi quyền sở hữu nhà và quyền sử dụng đất trên cùng một quyển. Anh có thể đến trung tâm đăng ký tra xem có đang thế chấp hay bị phong tỏa không.' },
      { speaker: 'A', hanzi: '这套房子的土地使用权还剩多少年？我听说住宅用地的年限是七十年，到期以后怎么办？', pinyin: 'Zhè tào fángzi de tǔdì shǐyòngquán hái shèng duōshao nián? Wǒ tīngshuō zhùzhái yòngdì de niánxiàn shì qīshí nián, dàoqī yǐhòu zěnme bàn?', meaning: 'Quyền sử dụng đất của căn này còn bao nhiêu năm? Tôi nghe nói đất ở có thời hạn bảy mươi năm, hết hạn thì làm sao?' },
      { speaker: 'B', hanzi: '没错，住宅用地使用权期限为七十年，这套房子还剩五十多年。到期后可以依法申请续期，不过具体政策要以届时的法律规定为准。', pinyin: 'Méicuò, zhùzhái yòngdì shǐyòngquán qīxiàn wéi qīshí nián, zhè tào fángzi hái shèng wǔshí duō nián. Dàoqī hòu kěyǐ yīfǎ shēnqǐng xùqī, búguò jùtǐ zhèngcè yào yǐ jièshí de fǎlǜ guīdìng wéi zhǔn.', meaning: 'Đúng vậy, thời hạn quyền sử dụng đất ở là 70 năm, căn này còn hơn 50 năm. Hết hạn có thể xin gia hạn theo luật, nhưng chính sách cụ thể phải lấy quy định pháp luật lúc đó làm chuẩn.' },
      { speaker: 'A', hanzi: '我还担心周边的规划。听说小区东面那块空地要建高架桥，会不会影响居住环境和房子的升值空间？', pinyin: 'Wǒ hái dānxīn zhōubiān de guīhuà. Tīngshuō xiǎoqū dōngmiàn nà kuài kòngdì yào jiàn gāojiàqiáo, huì bu huì yǐngxiǎng jūzhù huánjìng hé fángzi de shēngzhí kōngjiān?', meaning: 'Tôi còn lo về quy hoạch xung quanh. Nghe nói mảnh đất trống phía đông khu dân cư sắp xây cầu vượt, liệu có ảnh hưởng môi trường sống và khả năng tăng giá của căn nhà không?' },
      { speaker: 'B', hanzi: '这个问题问得好。建议您到自然资源和规划部门查一下该地块的控制性详细规划，确认用途是道路还是商业配套，再做决定。', pinyin: 'Zhège wèntí wèn de hǎo. Jiànyì nín dào zìrán zīyuán hé guīhuà bùmén chá yíxià gāi dìkuài de kòngzhìxìng xiángxì guīhuà, quèrèn yòngtú shì dàolù háishi shāngyè pèitào, zài zuò juédìng.', meaning: 'Câu hỏi hay. Tôi khuyên anh đến cơ quan tài nguyên và quy hoạch tra quy hoạch chi tiết mang tính kiểm soát của lô đất đó, xác nhận mục đích sử dụng là đường giao thông hay tiện ích thương mại rồi hãy quyết định.' },
      { speaker: 'A', hanzi: '好的，我会去查。另外，我打算申请商业贷款，首付三成，剩下的部分贷三十年。银行一般怎么审批？', pinyin: 'Hǎo de, wǒ huì qù chá. Lìngwài, wǒ dǎsuàn shēnqǐng shāngyè dàikuǎn, shǒufù sān chéng, shèngxià de bùfen dài sānshí nián. Yínháng yìbān zěnme shěnpī?', meaning: 'Vâng, tôi sẽ đi tra. Ngoài ra, tôi dự định xin vay thương mại, trả trước ba phần mười, phần còn lại vay ba mươi năm. Ngân hàng thường duyệt thế nào?' },
      { speaker: 'B', hanzi: '银行主要看三个方面：一是您的收入证明和银行流水，二是征信记录，三是房屋的评估价值。月供一般不能超过家庭月收入的一半。', pinyin: 'Yínháng zhǔyào kàn sān gè fāngmiàn: yī shì nín de shōurù zhèngmíng hé yínháng liúshuǐ, èr shì zhēngxìn jìlù, sān shì fángwū de pínggū jiàzhí. Yuègòng yìbān bù néng chāoguò jiātíng yuè shōurù de yíbàn.', meaning: 'Ngân hàng chủ yếu xem ba mặt: một là giấy chứng minh thu nhập và sao kê tài khoản, hai là lịch sử tín dụng, ba là giá trị thẩm định của căn nhà. Tiền trả góp hằng tháng thường không được vượt quá một nửa thu nhập hàng tháng của gia đình.' },
      { speaker: 'A', hanzi: '如果房子的评估价低于成交价，贷款额度会不会受到影响？', pinyin: 'Rúguǒ fángzi de pínggūjià dīyú chéngjiāojià, dàikuǎn édù huì bu huì shòudào yǐngxiǎng?', meaning: 'Nếu giá thẩm định của căn nhà thấp hơn giá giao dịch thì hạn mức vay có bị ảnh hưởng không?' },
      { speaker: 'B', hanzi: '会的。银行按评估价和成交价中较低的一个来计算贷款额度，差额部分需要您自己补足，所以最好提前做好资金准备。', pinyin: 'Huì de. Yínháng àn pínggūjià hé chéngjiāojià zhōng jiào dī de yí gè lái jìsuàn dàikuǎn édù, chā\'é bùfen xūyào nín zìjǐ bǔzú, suǒyǐ zuìhǎo tíqián zuòhǎo zījīn zhǔnbèi.', meaning: 'Có. Ngân hàng tính hạn mức vay theo giá thấp hơn giữa giá thẩm định và giá giao dịch, phần chênh lệch anh phải tự bù, nên tốt nhất chuẩn bị vốn trước.' },
      { speaker: 'A', hanzi: '我明白了。那么抵押登记和还款方面，我需要注意哪些风险？', pinyin: 'Wǒ míngbai le. Nàme dǐyā dēngjì hé huánkuǎn fāngmiàn, wǒ xūyào zhùyì nǎxiē fēngxiǎn?', meaning: 'Tôi hiểu rồi. Vậy về đăng ký thế chấp và trả nợ, tôi cần lưu ý những rủi ro nào?' },
      { speaker: 'B', hanzi: '贷款办下来后，银行会在不动产权证书上办理抵押登记；还清贷款之前，房子不能随意出售。若长期逾期还款，银行有权依法拍卖抵押房产。', pinyin: 'Dàikuǎn bàn xiàlái hòu, yínháng huì zài búdòngchǎn quánzhèngshū shàng bànlǐ dǐyā dēngjì; huánqīng dàikuǎn zhīqián, fángzi bù néng suíyì chūshòu. Ruò chángqī yúqī huánkuǎn, yínháng yǒuquán yīfǎ pāimài dǐyā fángchǎn.', meaning: 'Sau khi khoản vay được duyệt, ngân hàng sẽ đăng ký thế chấp trên giấy chứng nhận quyền sở hữu bất động sản; trước khi trả hết nợ, nhà không được tùy ý bán. Nếu trễ hạn trả nợ kéo dài, ngân hàng có quyền phát mãi tài sản thế chấp theo luật.' }
    ]
  },
  {
    key: 'advanced-job-interview',
    icon: '💼',
    title: 'Phỏng vấn vị trí quản lý',
    level: 'HSK7-9',
    lines: [
      { speaker: 'A', hanzi: '请先做个自我介绍，并谈谈您为什么应聘我们公司的销售经理一职。', pinyin: 'Qǐng xiān zuò ge zìwǒ jièshào, bìng tántan nín wèishénme yìngpìn wǒmen gōngsī de xiāoshòu jīnglǐ yì zhí.', meaning: 'Xin mời anh/chị tự giới thiệu, và cho biết vì sao ứng tuyển vị trí giám đốc kinh doanh của công ty chúng tôi.' },
      { speaker: 'B', hanzi: '好的。我在房地产行业干了十年，先后担任过置业顾问和团队主管，带过二十多人的团队。', pinyin: 'Hǎo de. Wǒ zài fángdìchǎn hángyè gàn le shí nián, xiānhòu dānrèn guo zhìyè gùwèn hé tuánduì zhǔguǎn, dài guo èrshí duō rén de tuánduì.', meaning: 'Vâng. Tôi làm trong ngành bất động sản mười năm, lần lượt đảm nhiệm chuyên viên tư vấn và trưởng nhóm, từng dẫn dắt đội ngũ hơn hai mươi người.' },
      { speaker: 'A', hanzi: '听起来经验很丰富。那您认为自己最大的优势是什么？', pinyin: 'Tīng qǐlái jīngyàn hěn fēngfù. Nà nín rènwéi zìjǐ zuì dà de yōushì shì shénme?', meaning: 'Nghe có vẻ kinh nghiệm rất phong phú. Vậy anh/chị cho rằng ưu thế lớn nhất của mình là gì?' },
      { speaker: 'B', hanzi: '我的优势是善于沟通，而且抗压能力强。去年市场低迷，我带领团队逆势而上，业绩反而增长了百分之三十。', pinyin: 'Wǒ de yōushì shì shànyú gōutōng, érqiě kàngyā nénglì qiáng. Qùnián shìchǎng dīmí, wǒ dàilǐng tuánduì nìshì ér shàng, yèjì fǎn\'ér zēngzhǎng le bǎi fēn zhī sānshí.', meaning: 'Ưu thế của tôi là giỏi giao tiếp và chịu áp lực tốt. Năm ngoái thị trường ảm đạm, tôi dẫn dắt đội ngũ đi ngược xu thế, doanh số lại tăng 30%.' },
      { speaker: 'A', hanzi: '很不错。那么，您觉得自己有哪些不足之处？', pinyin: 'Hěn búcuò. Nàme, nín juéde zìjǐ yǒu nǎxiē bùzú zhī chù?', meaning: 'Rất tốt. Vậy anh/chị thấy bản thân có những điểm yếu nào?' },
      { speaker: 'B', hanzi: '坦率地说，我有时过于追求完美，对下属要求比较严格。不过我正在学着放权，多给年轻人锻炼的机会。', pinyin: 'Tǎnshuài de shuō, wǒ yǒushí guòyú zhuīqiú wánměi, duì xiàshǔ yāoqiú bǐjiào yángé. Búguò wǒ zhèngzài xuézhe fàng quán, duō gěi niánqīngrén duànliàn de jīhuì.', meaning: 'Nói thẳng, đôi khi tôi quá cầu toàn, yêu cầu với cấp dưới khá nghiêm khắc. Có điều tôi đang học cách giao quyền, cho người trẻ nhiều cơ hội rèn luyện hơn.' },
      { speaker: 'A', hanzi: '这很难得。如果录用您，您能接受三个月的试用期吗？', pinyin: 'Zhè hěn nándé. Rúguǒ lùyòng nín, nín néng jiēshòu sān ge yuè de shìyòngqī ma?', meaning: 'Điều đó thật đáng quý. Nếu nhận anh/chị, anh/chị có chấp nhận thời gian thử việc ba tháng không?' },
      { speaker: 'B', hanzi: '当然可以。我相信凭实力说话，试用期正好让双方互相了解。', pinyin: 'Dāngrán kěyǐ. Wǒ xiāngxìn píng shílì shuōhuà, shìyòngqī zhènghǎo ràng shuāngfāng hùxiāng liǎojiě.', meaning: 'Tất nhiên được. Tôi tin vào việc dùng thực lực để chứng minh, thử việc vừa hay giúp hai bên hiểu nhau.' },
      { speaker: 'A', hanzi: '那关于薪资，您的期望是多少？', pinyin: 'Nà guānyú xīnzī, nín de qīwàng shì duōshao?', meaning: 'Vậy về lương, mức kỳ vọng của anh/chị là bao nhiêu?' },
      { speaker: 'B', hanzi: '我希望月薪三万，外加业绩提成。当然，具体数额还可以根据公司的薪酬制度再商量。', pinyin: 'Wǒ xīwàng yuèxīn sān wàn, wàijiā yèjì tíchéng. Dāngrán, jùtǐ shù\'é hái kěyǐ gēnjù gōngsī de xīnchóu zhìdù zài shāngliang.', meaning: 'Tôi mong lương tháng ba vạn, cộng thêm hoa hồng theo doanh số. Dĩ nhiên, con số cụ thể vẫn có thể bàn lại theo chế độ lương thưởng của công ty.' },
      { speaker: 'A', hanzi: '底薪我们可以给到两万五，提成比例按季度结算，另外还有五险一金。', pinyin: 'Dǐxīn wǒmen kěyǐ gěi dào liǎng wàn wǔ, tíchéng bǐlì àn jìdù jiésuàn, lìngwài hái yǒu wǔ xiǎn yì jīn.', meaning: 'Lương cơ bản chúng tôi có thể đưa tới hai vạn năm, tỷ lệ hoa hồng quyết toán theo quý, ngoài ra còn có năm loại bảo hiểm và quỹ nhà ở.' },
      { speaker: 'B', hanzi: '这个方案我可以接受。感谢您给我这次机会，我一定全力以赴。', pinyin: 'Zhège fāng\'àn wǒ kěyǐ jiēshòu. Gǎnxiè nín gěi wǒ zhè cì jīhuì, wǒ yídìng quánlì yǐfù.', meaning: 'Phương án này tôi có thể chấp nhận. Cảm ơn anh/chị đã cho tôi cơ hội này, tôi nhất định sẽ dốc toàn lực.' }
    ]
  },
  {
    key: 'advanced-business-negotiation',
    icon: '🤝',
    title: 'Đàm phán hợp tác kinh doanh',
    level: 'HSK7-9',
    lines: [
      { speaker: 'A', hanzi: '感谢贵公司百忙之中抽空前来，今天我们就合作的具体条款进行磋商。', pinyin: 'Gǎnxiè guì gōngsī bǎi máng zhī zhōng chōukòng qiánlái, jīntiān wǒmen jiù hézuò de jùtǐ tiáokuǎn jìnxíng cuōshāng.', meaning: 'Cảm ơn quý công ty đã bớt chút thời gian giữa lúc bận rộn tới đây, hôm nay chúng ta sẽ thương thảo các điều khoản cụ thể của việc hợp tác.' },
      { speaker: 'B', hanzi: '客气了。我方对这次合作非常重视，希望能达成互利共赢的协议。', pinyin: 'Kèqi le. Wǒ fāng duì zhè cì hézuò fēicháng zhòngshì, xīwàng néng dáchéng hùlì gòngyíng de xiéyì.', meaning: 'Anh quá khách sáo. Phía chúng tôi rất coi trọng lần hợp tác này, mong đạt được thỏa thuận đôi bên cùng có lợi.' },
      { speaker: 'A', hanzi: '那我先说一下我们的方案：由我方出资六成，贵方负责运营，合作期限定为五年。', pinyin: 'Nà wǒ xiān shuō yíxià wǒmen de fāng\'àn: yóu wǒ fāng chūzī liù chéng, guì fāng fùzé yùnyíng, hézuò qīxiàn dìng wéi wǔ nián.', meaning: 'Vậy tôi xin nêu phương án của chúng tôi: bên tôi góp vốn 60%, quý công ty phụ trách vận hành, thời hạn hợp tác định là năm năm.' },
      { speaker: 'B', hanzi: '出资比例我们没有异议，但利润分配方面，我们认为应该按投入的资源来计算，而不仅仅是资金。', pinyin: 'Chūzī bǐlì wǒmen méiyǒu yìyì, dàn lìrùn fēnpèi fāngmiàn, wǒmen rènwéi yīnggāi àn tóurù de zīyuán lái jìsuàn, ér bùjǐnjǐn shì zījīn.', meaning: 'Về tỷ lệ góp vốn chúng tôi không có ý kiến, nhưng về phân chia lợi nhuận, chúng tôi cho rằng nên tính theo nguồn lực đã đầu tư, chứ không chỉ riêng vốn.' },
      { speaker: 'A', hanzi: '这一点有道理。那您的具体建议是？', pinyin: 'Zhè yì diǎn yǒu dàolǐ. Nà nín de jùtǐ jiànyì shì?', meaning: 'Điểm này có lý. Vậy đề xuất cụ thể của anh là gì?' },
      { speaker: 'B', hanzi: '我们提出五五分成，因为我方掌握着渠道和客户资源，这是项目成败的关键。', pinyin: 'Wǒmen tíchū wǔwǔ fēnchéng, yīnwèi wǒ fāng zhǎngwò zhe qúdào hé kèhù zīyuán, zhè shì xiàngmù chéngbài de guānjiàn.', meaning: 'Chúng tôi đề xuất chia năm mươi năm mươi, vì phía tôi nắm kênh phân phối và nguồn khách hàng, đó là then chốt thành bại của dự án.' },
      { speaker: 'A', hanzi: '五五分成恐怕有些困难，毕竟前期投入大、风险也主要由我方承担。', pinyin: 'Wǔwǔ fēnchéng kǒngpà yǒuxiē kùnnan, bìjìng qiánqī tóurù dà, fēngxiǎn yě zhǔyào yóu wǒ fāng chéngdān.', meaning: 'Chia năm năm e là hơi khó, dù sao vốn đầu tư giai đoạn đầu lớn, rủi ro cũng chủ yếu do bên tôi gánh.' },
      { speaker: 'B', hanzi: '我们可以各让一步：前两年我方拿四成，待项目盈利稳定后再调整为五成。', pinyin: 'Wǒmen kěyǐ gè ràng yí bù: qián liǎng nián wǒ fāng ná sì chéng, dài xiàngmù yínglì wěndìng hòu zài tiáozhěng wéi wǔ chéng.', meaning: 'Hai bên có thể cùng nhường một bước: hai năm đầu bên tôi nhận 40%, đợi dự án có lãi ổn định rồi điều chỉnh lên 50%.' },
      { speaker: 'A', hanzi: '可以考虑。不过万一项目亏损，损失该如何分担？这一点必须在合同里写清楚。', pinyin: 'Kěyǐ kǎolǜ. Búguò wànyī xiàngmù kuīsǔn, sǔnshī gāi rúhé fēndān? Zhè yì diǎn bìxū zài hétong lǐ xiě qīngchu.', meaning: 'Có thể cân nhắc. Có điều nhỡ dự án thua lỗ thì tổn thất chia sẻ thế nào? Điểm này phải ghi rõ trong hợp đồng.' },
      { speaker: 'B', hanzi: '我建议按出资比例分担亏损，同时设立违约金条款，任何一方擅自退出都要赔偿对方损失。', pinyin: 'Wǒ jiànyì àn chūzī bǐlì fēndān kuīsǔn, tóngshí shèlì wéiyuējīn tiáokuǎn, rènhé yì fāng shànzì tuìchū dōu yào péicháng duìfāng sǔnshī.', meaning: 'Tôi đề nghị chia sẻ khoản lỗ theo tỷ lệ góp vốn, đồng thời đặt điều khoản tiền phạt vi phạm: bên nào tự ý rút lui đều phải bồi thường tổn thất cho bên kia.' },
      { speaker: 'A', hanzi: '好，另外还要加上保密协议，防止商业机密泄露。双方各自找律师审核后再签约。', pinyin: 'Hǎo, lìngwài hái yào jiā shàng bǎomì xiéyì, fángzhǐ shāngyè jīmì xièlòu. Shuāngfāng gèzì zhǎo lǜshī shěnhé hòu zài qiānyuē.', meaning: 'Được, ngoài ra cần thêm thỏa thuận bảo mật để ngăn rò rỉ bí mật kinh doanh. Hai bên mỗi bên nhờ luật sư rà soát rồi mới ký kết.' },
      { speaker: 'B', hanzi: '没问题。希望这次合作顺利，将来我们能携手开拓更大的市场。', pinyin: 'Méi wèntí. Xīwàng zhè cì hézuò shùnlì, jiānglái wǒmen néng xiéshǒu kāituò gèng dà de shìchǎng.', meaning: 'Không vấn đề. Mong lần hợp tác này thuận lợi, sau này hai bên có thể bắt tay mở rộng thị trường lớn hơn.' }
    ]
  },
  {
    key: 'advanced-ai-social-media-debate',
    icon: '🤖',
    title: 'Tranh luận về AI và mạng xã hội',
    level: 'HSK7-9',
    lines: [
      { speaker: 'A', hanzi: '我认为人工智能的普及利大于弊，它能把人从重复劳动中解放出来。', pinyin: 'Wǒ rènwéi réngōng zhìnéng de pǔjí lì dà yú bì, tā néng bǎ rén cóng chóngfù láodòng zhōng jiěfàng chūlái.', meaning: 'Tôi cho rằng việc phổ cập trí tuệ nhân tạo lợi nhiều hơn hại, nó giải phóng con người khỏi lao động lặp đi lặp lại.' },
      { speaker: 'B', hanzi: '话是这么说，但很多岗位会被取代，大量劳动者面临失业，这个代价谁来承担？', pinyin: 'Huà shì zhème shuō, dàn hěn duō gǎngwèi huì bèi qǔdài, dàliàng láodòngzhě miànlín shīyè, zhège dàijià shéi lái chéngdān?', meaning: 'Nói thì nói vậy, nhưng nhiều vị trí sẽ bị thay thế, rất đông người lao động đối mặt thất nghiệp, cái giá này ai gánh?' },
      { speaker: 'A', hanzi: '历史上每次技术革命都淘汰了一些行业，同时也创造了新的职业。关键在于加强职业培训。', pinyin: 'Lìshǐ shàng měi cì jìshù gémìng dōu táotài le yìxiē hángyè, tóngshí yě chuàngzào le xīn de zhíyè. Guānjiàn zàiyú jiāqiáng zhíyè péixùn.', meaning: 'Trong lịch sử, mỗi cuộc cách mạng kỹ thuật đều đào thải một số ngành, đồng thời tạo ra nghề mới. Mấu chốt là tăng cường đào tạo nghề.' },
      { speaker: 'B', hanzi: '培训哪有那么容易？况且算法还会带来隐私泄露和信息茧房的问题。', pinyin: 'Péixùn nǎ yǒu nàme róngyì? Kuàngqiě suànfǎ hái huì dàilái yǐnsī xièlòu hé xìnxī jiǎnfáng de wèntí.', meaning: 'Đào tạo đâu dễ vậy? Hơn nữa thuật toán còn gây ra vấn đề lộ quyền riêng tư và "kén thông tin".' },
      { speaker: 'A', hanzi: '你说的信息茧房，主要是社交媒体造成的吧？', pinyin: 'Nǐ shuō de xìnxī jiǎnfáng, zhǔyào shì shèjiāo méitǐ zàochéng de ba?', meaning: 'Cái "kén thông tin" bạn nói chủ yếu là do mạng xã hội gây ra phải không?' },
      { speaker: 'B', hanzi: '没错。平台为了吸引眼球，只推送你感兴趣的内容，久而久之，人们的视野越来越狭窄，观点也越来越极端。', pinyin: 'Méicuò. Píngtái wèile xīyǐn yǎnqiú, zhǐ tuīsòng nǐ gǎn xìngqù de nèiróng, jiǔ ér jiǔ zhī, rénmen de shìyě yuè lái yuè xiázhǎi, guāndiǎn yě yuè lái yuè jíduān.', meaning: 'Đúng vậy. Nền tảng để thu hút sự chú ý chỉ đẩy nội dung bạn quan tâm, lâu dần tầm nhìn của mọi người ngày càng hẹp, quan điểm cũng ngày càng cực đoan.' },
      { speaker: 'A', hanzi: '这确实是隐患。不过社交媒体也让普通人有了发声的渠道，信息传播比以前快得多。', pinyin: 'Zhè quèshí shì yǐnhuàn. Búguò shèjiāo méitǐ yě ràng pǔtōngrén yǒu le fāshēng de qúdào, xìnxī chuánbō bǐ yǐqián kuài de duō.', meaning: 'Đây đúng là mối họa tiềm ẩn. Nhưng mạng xã hội cũng cho người bình thường kênh lên tiếng, thông tin lan truyền nhanh hơn trước nhiều.' },
      { speaker: 'B', hanzi: '传播快也意味着谣言扩散快。很多人不加辨别就转发，真假难辨，甚至造成社会恐慌。', pinyin: 'Chuánbō kuài yě yìwèizhe yáoyán kuòsàn kuài. Hěn duō rén bù jiā biànbié jiù zhuǎnfā, zhēn jiǎ nán biàn, shènzhì zàochéng shèhuì kǒnghuāng.', meaning: 'Lan truyền nhanh cũng có nghĩa tin đồn lan nhanh. Nhiều người không phân biệt đã chia sẻ, thật giả khó phân, thậm chí gây hoang mang xã hội.' },
      { speaker: 'A', hanzi: '所以我们更需要完善监管，让企业对算法和内容承担责任，同时提高公众的媒介素养。', pinyin: 'Suǒyǐ wǒmen gèng xūyào wánshàn jiānguǎn, ràng qǐyè duì suànfǎ hé nèiróng chéngdān zérèn, tóngshí tígāo gōngzhòng de méijiè sùyǎng.', meaning: 'Vì thế càng cần hoàn thiện quản lý, buộc doanh nghiệp chịu trách nhiệm về thuật toán và nội dung, đồng thời nâng cao hiểu biết truyền thông của công chúng.' },
      { speaker: 'B', hanzi: '监管我赞成，但不能因噎废食。我担心的是，年轻人沉迷网络，逐渐丧失独立思考的能力。', pinyin: 'Jiānguǎn wǒ zànchéng, dàn bù néng yīnyēfèishí. Wǒ dānxīn de shì, niánqīngrén chénmí wǎngluò, zhújiàn sàngshī dúlì sīkǎo de nénglì.', meaning: 'Quản lý thì tôi tán thành, nhưng không thể vì sợ nghẹn mà bỏ ăn. Điều tôi lo là giới trẻ nghiện mạng, dần mất khả năng tư duy độc lập.' },
      { speaker: 'A', hanzi: '这就需要家庭和学校共同引导。工具本身没有对错，关键看人怎么使用。', pinyin: 'Zhè jiù xūyào jiātíng hé xuéxiào gòngtóng yǐndǎo. Gōngjù běnshēn méiyǒu duìcuò, guānjiàn kàn rén zěnme shǐyòng.', meaning: 'Việc này cần gia đình và nhà trường cùng định hướng. Công cụ tự nó không đúng sai, mấu chốt là con người dùng thế nào.' },
      { speaker: 'B', hanzi: '这一点我同意。技术越强大，我们越要保持清醒，别让自己成为技术的附庸。', pinyin: 'Zhè yì diǎn wǒ tóngyì. Jìshù yuè qiángdà, wǒmen yuè yào bǎochí qīngxǐng, bié ràng zìjǐ chéngwéi jìshù de fùyōng.', meaning: 'Điểm này tôi đồng ý. Công nghệ càng mạnh, chúng ta càng phải tỉnh táo, đừng để mình trở thành kẻ phụ thuộc vào công nghệ.' }
    ]
  }
]

export function getDialogue(key) {
  return DIALOGUES.find((d) => d.key === key)
}
