// Thu gui chinh minh bang tieng Trung, TU SOAN (khong lay tu sach nao). Nguoi
// hoc tu dich ca la thu ra tieng Viet truoc, bam xac nhan thi app moi hien
// phien am va nghia tung doan (xem LetterDetailPage). Moi doan gom nhieu cau
// lien nhau; doan cuoi la loi ky ten.
export const LETTERS = [
  {
    key: 'thu-gui-chinh-minh',
    icon: '💌',
    title: 'Một ngày mới',
    level: 'HSK2-3',
    paragraphs: [
      {
        hanzi: '亲爱的自己：你好！今天是新的一天，我想给你写一封信。',
        pinyin: "Qīn'ài de zìjǐ: nǐ hǎo! Jīntiān shì xīn de yìtiān, wǒ xiǎng gěi nǐ xiě yì fēng xìn.",
        meaning: 'Thân gửi chính mình: xin chào! Hôm nay là một ngày mới, tôi muốn viết cho bạn một lá thư.'
      },
      {
        hanzi: '这一年你很努力，虽然有时候很累，但是你没有放弃。我为你感到骄傲。',
        pinyin: "Zhè yì nián nǐ hěn nǔlì, suīrán yǒu shíhou hěn lèi, dànshì nǐ méiyǒu fàngqì. Wǒ wèi nǐ gǎndào jiāo'ào.",
        meaning: 'Năm nay bạn rất nỗ lực, tuy đôi lúc rất mệt nhưng bạn không bỏ cuộc. Tôi tự hào về bạn.'
      },
      {
        hanzi: '请记住，不要和别人比较。每个人都有自己的路，慢一点也没关系。',
        pinyin: 'Qǐng jìzhù, búyào hé biérén bǐjiào. Měi ge rén dōu yǒu zìjǐ de lù, màn yìdiǎn yě méi guānxi.',
        meaning: 'Hãy nhớ, đừng so sánh với người khác. Mỗi người đều có con đường của riêng mình, chậm một chút cũng không sao.'
      },
      {
        hanzi: '明天，你要好好吃饭，早点睡觉，多笑一笑。只要你不停地向前走，好运一定会来。',
        pinyin: 'Míngtiān, nǐ yào hǎohāo chīfàn, zǎodiǎn shuìjiào, duō xiào yi xiào. Zhǐyào nǐ bù tíng de xiàng qián zǒu, hǎoyùn yídìng huì lái.',
        meaning: 'Ngày mai, bạn hãy ăn uống đàng hoàng, đi ngủ sớm, cười nhiều hơn. Chỉ cần bạn không ngừng tiến về phía trước, may mắn nhất định sẽ đến.'
      },
      {
        hanzi: '永远爱你的，自己。',
        pinyin: 'Yǒngyuǎn ài nǐ de, zìjǐ.',
        meaning: 'Người luôn yêu bạn, chính bạn.'
      }
    ]
  },
  {
    key: 'khi-cam-thay-met',
    icon: '🌙',
    title: 'Khi bạn thấy mệt',
    level: 'HSK3',
    paragraphs: [
      {
        hanzi: '亲爱的自己：今天是不是很累？我知道，你每天都在努力，很少停下来休息。',
        pinyin: "Qīn'ài de zìjǐ: jīntiān shì bu shì hěn lèi? Wǒ zhīdào, nǐ měitiān dōu zài nǔlì, hěn shǎo tíng xiàlái xiūxi.",
        meaning: 'Thân gửi chính mình: hôm nay có phải rất mệt không? Tôi biết, ngày nào bạn cũng cố gắng, rất ít khi dừng lại nghỉ ngơi.'
      },
      {
        hanzi: '累了没有关系，你可以哭，也可以安静地坐一会儿。休息不是放弃，只是为了走得更远。',
        pinyin: 'Lèi le méiyǒu guānxi, nǐ kěyǐ kū, yě kěyǐ ānjìng de zuò yíhuìr. Xiūxi bú shì fàngqì, zhǐshì wèile zǒu de gèng yuǎn.',
        meaning: 'Mệt cũng không sao, bạn có thể khóc, cũng có thể lặng lẽ ngồi một lát. Nghỉ ngơi không phải là bỏ cuộc, chỉ là để đi được xa hơn.'
      },
      {
        hanzi: '今晚请把手机放下，喝一杯热水，洗个热水澡，然后早点睡觉。所有的烦恼，都留到明天再想。',
        pinyin: 'Jīnwǎn qǐng bǎ shǒujī fàngxià, hē yì bēi rè shuǐ, xǐ ge rèshuǐ zǎo, ránhòu zǎodiǎn shuìjiào. Suǒyǒu de fánnǎo, dōu liú dào míngtiān zài xiǎng.',
        meaning: 'Đêm nay hãy đặt điện thoại xuống, uống một cốc nước nóng, tắm nước nóng, rồi đi ngủ sớm. Mọi phiền muộn, hãy để đến ngày mai rồi nghĩ.'
      },
      {
        hanzi: '你已经做得很好了。不管今天发生了什么，我都会陪着你。晚安。',
        pinyin: "Nǐ yǐjīng zuò de hěn hǎo le. Bùguǎn jīntiān fāshēng le shénme, wǒ dōu huì péizhe nǐ. Wǎn'ān.",
        meaning: 'Bạn đã làm rất tốt rồi. Dù hôm nay xảy ra chuyện gì, tôi cũng sẽ ở bên bạn. Ngủ ngon.'
      },
      {
        hanzi: '爱你的，自己',
        pinyin: 'Ài nǐ de, zìjǐ',
        meaning: 'Người yêu bạn, chính bạn'
      }
    ]
  },
  {
    key: 've-giac-mo',
    icon: '🌟',
    title: 'Về giấc mơ của bạn',
    level: 'HSK3-4',
    paragraphs: [
      {
        hanzi: '亲爱的自己：还记得小时候的梦想吗？那时候你说，长大以后要做一个有用的人。',
        pinyin: "Qīn'ài de zìjǐ: hái jìde xiǎoshíhou de mèngxiǎng ma? Nà shíhou nǐ shuō, zhǎngdà yǐhòu yào zuò yí ge yǒuyòng de rén.",
        meaning: 'Thân gửi chính mình: còn nhớ ước mơ hồi nhỏ không? Lúc đó bạn nói, lớn lên sẽ làm một người có ích.'
      },
      {
        hanzi: '后来生活很忙，你几乎忘记了自己的梦想。可是没关系，现在开始也不晚。',
        pinyin: 'Hòulái shēnghuó hěn máng, nǐ jīhū wàngjì le zìjǐ de mèngxiǎng. Kěshì méi guānxi, xiànzài kāishǐ yě bù wǎn.',
        meaning: 'Sau này cuộc sống bận rộn, bạn gần như quên mất ước mơ của mình. Nhưng không sao, bắt đầu từ bây giờ cũng không muộn.'
      },
      {
        hanzi: '请每天做一件小事，靠近你的梦想：读十页书，学十个新词，或者认真地练习一次。小小的努力，会慢慢变成大大的力量。',
        pinyin: 'Qǐng měitiān zuò yí jiàn xiǎo shì, kàojìn nǐ de mèngxiǎng: dú shí yè shū, xué shí ge xīn cí, huòzhě rènzhēn de liànxí yí cì. Xiǎoxiǎo de nǔlì, huì mànmàn biànchéng dàdà de lìliang.',
        meaning: 'Hãy mỗi ngày làm một việc nhỏ để đến gần ước mơ: đọc mười trang sách, học mười từ mới, hoặc nghiêm túc luyện tập một lần. Nỗ lực nhỏ bé sẽ dần dần biến thành sức mạnh lớn.'
      },
      {
        hanzi: '也许路上会有困难，也许有人不相信你。但是只要你相信自己，就已经赢了一半。',
        pinyin: 'Yěxǔ lùshang huì yǒu kùnnan, yěxǔ yǒu rén bù xiāngxìn nǐ. Dànshì zhǐyào nǐ xiāngxìn zìjǐ, jiù yǐjīng yíng le yíbàn.',
        meaning: 'Có thể trên đường sẽ có khó khăn, có thể có người không tin bạn. Nhưng chỉ cần bạn tin vào chính mình, là bạn đã thắng một nửa.'
      },
      {
        hanzi: '相信你的，自己',
        pinyin: 'Xiāngxìn nǐ de, zìjǐ',
        meaning: 'Người tin ở bạn, chính bạn'
      }
    ]
  },
  {
    key: 'khi-cong-viec-kho-khan',
    icon: '💼',
    title: 'Khi công việc chưa suôn sẻ',
    level: 'HSK3-4',
    paragraphs: [
      {
        hanzi: '亲爱的自己：这个月的客户不多，你可能有点着急。我想告诉你，慢慢来，不要怕。',
        pinyin: "Qīn'ài de zìjǐ: zhè ge yuè de kèhù bù duō, nǐ kěnéng yǒudiǎn zháojí. Wǒ xiǎng gàosu nǐ, mànmān lái, búyào pà.",
        meaning: 'Thân gửi chính mình: tháng này khách không nhiều, có lẽ bạn hơi sốt ruột. Tôi muốn nói với bạn, cứ từ từ, đừng sợ.'
      },
      {
        hanzi: '做生意就像盖房子，需要一块一块地慢慢盖。今天认识的每一位客人，都可能是明天的朋友。',
        pinyin: 'Zuò shēngyi jiù xiàng gài fángzi, xūyào yí kuài yí kuài de mànmān gài. Jīntiān rènshi de měi yí wèi kèrén, dōu kěnéng shì míngtiān de péngyou.',
        meaning: 'Làm ăn giống như xây nhà, cần xây từng viên một cách từ từ. Mỗi vị khách bạn quen hôm nay đều có thể là bạn của ngày mai.'
      },
      {
        hanzi: '请记住，客户相信的是你这个人，而不只是房子。所以要诚实，说话算数，认真回答每一个问题。',
        pinyin: 'Qǐng jìzhù, kèhù xiāngxìn de shì nǐ zhège rén, ér bù zhǐshì fángzi. Suǒyǐ yào chéngshí, shuōhuà suànshù, rènzhēn huídá měi yí ge wèntí.',
        meaning: 'Hãy nhớ, khách hàng tin ở con người bạn chứ không chỉ ngôi nhà. Vì vậy phải trung thực, nói lời giữ lời, nghiêm túc trả lời từng câu hỏi.'
      },
      {
        hanzi: '遇到失败的时候，不要怪自己。把经验写下来，明天做得更好。你一定可以的。',
        pinyin: 'Yùdào shībài de shíhou, búyào guài zìjǐ. Bǎ jīngyàn xiě xiàlái, míngtiān zuò de gèng hǎo. Nǐ yídìng kěyǐ de.',
        meaning: 'Khi gặp thất bại, đừng trách bản thân. Hãy viết kinh nghiệm ra, ngày mai làm tốt hơn. Bạn nhất định làm được.'
      },
      {
        hanzi: '支持你的，自己',
        pinyin: 'Zhīchí nǐ de, zìjǐ',
        meaning: 'Người ủng hộ bạn, chính bạn'
      }
    ]
  },
  {
    key: 'gui-chinh-minh-mot-nam-sau',
    icon: '⏳',
    title: 'Gửi chính mình một năm sau',
    level: 'HSK4',
    paragraphs: [
      {
        hanzi: '亲爱的一年后的自己：你好！我是一年前的你。写这封信的时候，我心里有点紧张，也有点期待。',
        pinyin: "Qīn'ài de yì nián hòu de zìjǐ: nǐ hǎo! Wǒ shì yì nián qián de nǐ. Xiě zhè fēng xìn de shíhou, wǒ xīnli yǒudiǎn jǐnzhāng, yě yǒudiǎn qīdài.",
        meaning: 'Gửi chính mình của một năm sau: xin chào! Tôi là bạn của một năm trước. Lúc viết lá thư này, trong lòng tôi hơi lo lắng và cũng hơi mong đợi.'
      },
      {
        hanzi: '我想问你：你现在快乐吗？你有没有每天运动、认真工作，还有时间陪家人和朋友？',
        pinyin: 'Wǒ xiǎng wèn nǐ: nǐ xiànzài kuàilè ma? Nǐ yǒu méiyǒu měitiān yùndòng, rènzhēn gōngzuò, hái yǒu shíjiān péi jiārén hé péngyou?',
        meaning: 'Tôi muốn hỏi bạn: bây giờ bạn có vui không? Bạn có tập thể dục mỗi ngày, làm việc nghiêm túc, và còn có thời gian ở bên gia đình bạn bè không?'
      },
      {
        hanzi: '今年我给自己定了三个目标：多学一门语言，存一笔钱，还要每个月读一本好书。不知道你有没有做到。',
        pinyin: 'Jīnnián wǒ gěi zìjǐ dìng le sān ge mùbiāo: duō xué yì mén yǔyán, cún yì bǐ qián, hái yào měi ge yuè dú yì běn hǎo shū. Bù zhīdào nǐ yǒu méiyǒu zuòdào.',
        meaning: 'Năm nay tôi đặt cho mình ba mục tiêu: học thêm một ngôn ngữ, tiết kiệm một khoản tiền, và mỗi tháng đọc một cuốn sách hay. Không biết bạn có làm được không.'
      },
      {
        hanzi: '如果你做到了，请好好奖励自己。如果没有做到，也不要难过，因为你已经比一年前的我更勇敢、更成熟。',
        pinyin: 'Rúguǒ nǐ zuòdào le, qǐng hǎohāo jiǎnglì zìjǐ. Rúguǒ méiyǒu zuòdào, yě búyào nánguò, yīnwèi nǐ yǐjīng bǐ yì nián qián de wǒ gèng yǒnggǎn, gèng chéngshú.',
        meaning: 'Nếu bạn làm được, hãy thưởng cho mình thật xứng đáng. Nếu chưa làm được, cũng đừng buồn, vì bạn đã dũng cảm và trưởng thành hơn tôi của một năm trước.'
      },
      {
        hanzi: '一年前的你',
        pinyin: 'Yì nián qián de nǐ',
        meaning: 'Bạn của một năm trước'
      }
    ]
  },
  {
    key: 'hoc-cach-yeu-ban-than',
    icon: '🌷',
    title: 'Học cách yêu bản thân',
    level: 'HSK3-4',
    paragraphs: [
      {
        hanzi: '亲爱的自己：你有多久没有夸过自己了？你总是对别人很温柔，却对自己很严格。',
        pinyin: "Qīn'ài de zìjǐ: nǐ yǒu duōjiǔ méiyǒu kuā guo zìjǐ le? Nǐ zǒngshì duì biérén hěn wēnróu, què duì zìjǐ hěn yángé.",
        meaning: 'Thân gửi chính mình: đã bao lâu rồi bạn chưa khen mình? Bạn luôn dịu dàng với người khác nhưng lại rất nghiêm khắc với bản thân.'
      },
      {
        hanzi: '从今天开始，请像对待好朋友一样对待自己。你难过的时候，要安慰自己；你做对了，要夸奖自己。',
        pinyin: 'Cóng jīntiān kāishǐ, qǐng xiàng duìdài hǎo péngyou yíyàng duìdài zìjǐ. Nǐ nánguò de shíhou, yào ānwèi zìjǐ; nǐ zuò duì le, yào kuājiǎng zìjǐ.',
        meaning: 'Từ hôm nay, hãy đối xử với bản thân như đối xử với người bạn tốt. Khi bạn buồn, hãy an ủi mình; khi bạn làm đúng, hãy khen ngợi mình.'
      },
      {
        hanzi: '你不需要做到完美。每个人都会犯错，每个人也都会有不喜欢自己的时候。重要的是，你还愿意站起来，继续往前走。',
        pinyin: 'Nǐ bù xūyào zuòdào wánměi. Měi ge rén dōu huì fàncuò, měi ge rén yě dōu huì yǒu bù xǐhuan zìjǐ de shíhou. Zhòngyào de shì, nǐ hái yuànyì zhàn qǐlái, jìxù wǎng qián zǒu.',
        meaning: 'Bạn không cần phải hoàn hảo. Ai cũng sẽ mắc lỗi, ai cũng có lúc không thích chính mình. Quan trọng là bạn vẫn sẵn lòng đứng dậy, tiếp tục đi về phía trước.'
      },
      {
        hanzi: '最后我想对你说：谢谢你一直没有放弃。你是我这辈子最重要的人。',
        pinyin: 'Zuìhòu wǒ xiǎng duì nǐ shuō: xièxie nǐ yìzhí méiyǒu fàngqì. Nǐ shì wǒ zhè bèizi zuì zhòngyào de rén.',
        meaning: 'Cuối cùng tôi muốn nói với bạn: cảm ơn bạn đã luôn không bỏ cuộc. Bạn là người quan trọng nhất trong đời tôi.'
      },
      {
        hanzi: '永远陪着你的，自己',
        pinyin: 'Yǒngyuǎn péizhe nǐ de, zìjǐ',
        meaning: 'Người luôn ở bên bạn, chính bạn'
      }
    ]
  },
  {
    key: 'gui-minh-nhung-ngay-sau',
    icon: '🌿',
    title: 'Gửi mình của những ngày sau này',
    level: 'HSK5-6',
    // Thu do chu du an viet bang tieng Viet, ban tieng Tau (y theo ban chu du an
    // dua) duoc chia doan, them phien am. Phan nghia tieng Viet bam loi goc cua
    // chu du an; cac doan ban tieng Tau co them thi da dich them tuong ung.
    paragraphs: [
      {
        hanzi: '写给未来的自己',
        pinyin: 'Xiě gěi wèilái de zìjǐ',
        meaning: 'Gửi mình của những ngày sau này,'
      },
      {
        hanzi: '不知道等你再次读到这些文字的时候，你在哪里，又过着怎样的生活。不知道那时候的你，还记不记得今天的自己。',
        pinyin: 'Bù zhīdào děng nǐ zàicì dú dào zhèxiē wénzì de shíhou, nǐ zài nǎlǐ, yòu guòzhe zěnyàng de shēnghuó. Bù zhīdào nà shíhou de nǐ, hái jì bu jìde jīntiān de zìjǐ.',
        meaning: 'Không biết đến lúc đọc lại những dòng này, cậu đang ở đâu, và đang sống một cuộc sống như thế nào. Không biết cậu của khi ấy còn nhớ mình của hôm nay không.'
      },
      {
        hanzi: '那个曾经很认真地爱过一个人，也曾经把很多期待，都放在一段感情里的自己。曾经以为，只要足够真诚，只要两个人足够爱彼此，这段感情就一定会有一个圆满的结局。',
        pinyin: 'Nàge céngjīng hěn rènzhēn de ài guo yí ge rén, yě céngjīng bǎ hěn duō qīdài, dōu fàng zài yí duàn gǎnqíng lǐ de zìjǐ. Céngjīng yǐwéi, zhǐyào zúgòu zhēnchéng, zhǐyào liǎng ge rén zúgòu ài bǐcǐ, zhè duàn gǎnqíng jiù yídìng huì yǒu yí ge yuánmǎn de jiéjú.',
        meaning: 'Một người đã từng yêu rất nhiều, từng đặt rất nhiều hy vọng vào một mối tình. Từng nghĩ rằng chỉ cần đủ chân thành, chỉ cần hai người đủ yêu nhau, thì mối tình này nhất định sẽ có một cái kết trọn vẹn.'
      },
      {
        hanzi: '可是后来才明白，爱情并不总是这样。有些人来到你的生命里，是为了留下。而有些人，只是陪你走过一段路。',
        pinyin: 'Kěshì hòulái cái míngbai, àiqíng bìng bù zǒngshì zhèyàng. Yǒuxiē rén láidào nǐ de shēngmìng lǐ, shì wèile liúxià. Ér yǒuxiē rén, zhǐshì péi nǐ zǒuguò yí duàn lù.',
        meaning: 'Nhưng sau này mới hiểu, tình yêu không phải lúc nào cũng như vậy. Có những người bước vào cuộc đời mình để ở lại. Cũng có những người chỉ đi cùng mình một đoạn đường.'
      },
      {
        hanzi: '他们离开以后，会留下一些美好的回忆，一些无法解释的遗憾，一些没有答案的问题，还有一个和从前不太一样的自己。',
        pinyin: "Tāmen líkāi yǐhòu, huì liúxià yìxiē měihǎo de huíyì, yìxiē wúfǎ jiěshì de yíhàn, yìxiē méiyǒu dá'àn de wèntí, hái yǒu yí ge hé cóngqián bú tài yíyàng de zìjǐ.",
        meaning: 'Sau khi họ rời đi, họ để lại những kỷ niệm đẹp, những nuối tiếc không thể giải thích, những câu hỏi không có lời giải, và cả một phiên bản không còn giống trước kia của chính mình.'
      },
      {
        hanzi: '我不知道以后你会爱上谁，也不知道那个人，会不会就是今天的那个人。但我希望，无论未来发生什么，你都不要忘记今天的自己。',
        pinyin: 'Wǒ bù zhīdào yǐhòu nǐ huì àishang shéi, yě bù zhīdào nàge rén, huì bu huì jiù shì jīntiān de nàge rén. Dàn wǒ xīwàng, wúlùn wèilái fāshēng shénme, nǐ dōu búyào wàngjì jīntiān de zìjǐ.',
        meaning: 'Mình không biết sau này cậu sẽ yêu ai, cũng không biết người ấy có phải là người của hôm nay hay không. Nhưng mình mong, dù tương lai xảy ra chuyện gì, cậu cũng đừng quên mình của ngày hôm nay.'
      },
      {
        hanzi: '不要因为曾经受过伤，就觉得爱情是一件可怕的事情。不要因为曾经爱错了人，就认为自己不值得被好好爱一次。',
        pinyin: 'Búyào yīnwèi céngjīng shòu guo shāng, jiù juéde àiqíng shì yí jiàn kěpà de shìqing. Búyào yīnwèi céngjīng ài cuò le rén, jiù rènwéi zìjǐ bù zhídé bèi hǎohāo ài yí cì.',
        meaning: 'Đừng vì từng bị tổn thương mà nghĩ rằng tình yêu là điều đáng sợ. Đừng vì từng yêu sai người mà nghĩ rằng mình không xứng đáng được yêu đúng cách.'
      },
      {
        hanzi: '如果以后你再次爱上一个人，请记得——去爱，但不要弄丢自己。想说的话，就勇敢地说出来。遇见真心对你的人，就好好珍惜。',
        pinyin: 'Rúguǒ yǐhòu nǐ zàicì àishang yí ge rén, qǐng jìde——qù ài, dàn búyào nòngdiū zìjǐ. Xiǎng shuō de huà, jiù yǒnggǎn de shuō chūlái. Yùjiàn zhēnxīn duì nǐ de rén, jiù hǎohāo zhēnxī.',
        meaning: 'Nếu sau này cậu lại yêu một người, hãy nhớ — hãy yêu, nhưng đừng đánh mất mình. Điều muốn nói thì hãy dũng cảm nói ra. Gặp người thật lòng với mình thì hãy trân trọng.'
      },
      {
        hanzi: '但如果一段感情只剩下委屈和勉强，也请你学会离开。',
        pinyin: 'Dàn rúguǒ yí duàn gǎnqíng zhǐ shèngxià wěiqu hé miǎnqiǎng, yě qǐng nǐ xuéhuì líkāi.',
        meaning: 'Nhưng nếu một mối tình chỉ còn lại tủi thân và gượng ép, cũng xin cậu hãy học cách rời đi.'
      },
      {
        hanzi: '我曾经以为，爱一个人就是无论如何都要把他留在身边。后来才懂得，有时候，爱也是一种放手。不是因为不爱了，而是因为终于明白——有些人，即使很爱，也注定无法陪你走完最后的路。',
        pinyin: 'Wǒ céngjīng yǐwéi, ài yí ge rén jiù shì wúlùn rúhé dōu yào bǎ tā liú zài shēnbiān. Hòulái cái dǒngde, yǒu shíhou, ài yě shì yì zhǒng fàngshǒu. Bú shì yīnwèi bú ài le, ér shì yīnwèi zhōngyú míngbai——yǒuxiē rén, jíshǐ hěn ài, yě zhùdìng wúfǎ péi nǐ zǒuwán zuìhòu de lù.',
        meaning: 'Mình từng nghĩ yêu một người là phải giữ họ ở bên bằng mọi giá. Sau này mới hiểu, đôi khi yêu cũng là biết buông tay. Không phải vì hết yêu, mà vì cuối cùng cũng hiểu rằng có những người dù rất thương cũng định sẵn không thể cùng cậu đi hết đoạn đường cuối cùng.'
      },
      {
        hanzi: '如果有一天，你依然会想起那个曾经让你心动过很多次的人，也没有关系。不是所有我们爱过的人，最后都必须成为陪我们走到最后的人。有些人，只要曾经出现在生命里，就已经足够成为青春的一部分。',
        pinyin: 'Rúguǒ yǒu yì tiān, nǐ yīrán huì xiǎngqǐ nàge céngjīng ràng nǐ xīndòng guo hěn duō cì de rén, yě méiyǒu guānxi. Bú shì suǒyǒu wǒmen ài guo de rén, zuìhòu dōu bìxū chéngwéi péi wǒmen zǒudào zuìhòu de rén. Yǒuxiē rén, zhǐyào céngjīng chūxiàn zài shēngmìng lǐ, jiù yǐjīng zúgòu chéngwéi qīngchūn de yí bùfen.',
        meaning: 'Và nếu một ngày nào đó cậu vẫn còn nhớ về người từng khiến trái tim mình rung động rất nhiều lần, thì cũng không sao cả. Không phải mọi người mình từng yêu, cuối cùng đều phải trở thành người đi cùng mình đến cuối con đường. Có những người chỉ cần từng xuất hiện trong đời cũng đã đủ để trở thành một phần của tuổi trẻ.'
      },
      {
        hanzi: '但我希望，经历过这一切以后，你依然愿意相信爱情。相信有一种爱情，不会让你一直猜测自己到底重不重要。相信有一种爱情，不会让你不停地问自己：“是不是我哪里做错了？”',
        pinyin: 'Dàn wǒ xīwàng, jīnglì guo zhè yíqiè yǐhòu, nǐ yīrán yuànyì xiāngxìn àiqíng. Xiāngxìn yǒu yì zhǒng àiqíng, bú huì ràng nǐ yìzhí cāicè zìjǐ dàodǐ zhòng bu zhòngyào. Xiāngxìn yǒu yì zhǒng àiqíng, bú huì ràng nǐ bù tíng de wèn zìjǐ: “Shì bu shì wǒ nǎlǐ zuò cuò le?”',
        meaning: 'Nhưng mình mong, sau tất cả, cậu vẫn còn muốn tin vào tình yêu. Tin rằng có một tình yêu không khiến cậu cứ phải đoán xem mình có quan trọng hay không. Tin rằng có một tình yêu không khiến cậu liên tục tự hỏi: “Mình đã làm gì sai?”'
      },
      {
        hanzi: '相信有一天，你会遇见一个人，你们都愿意留下，都愿意努力，也都愿意一次又一次地选择彼此。不是只有开心的时候选择彼此，而是在那些难熬的日子里，依然愿意牵着对方的手。',
        pinyin: "Xiāngxìn yǒu yì tiān, nǐ huì yùjiàn yí ge rén, nǐmen dōu yuànyì liúxià, dōu yuànyì nǔlì, yě dōu yuànyì yí cì yòu yí cì de xuǎnzé bǐcǐ. Bú shì zhǐyǒu kāixīn de shíhou xuǎnzé bǐcǐ, ér shì zài nàxiē nán'áo de rìzi lǐ, yīrán yuànyì qiānzhe duìfāng de shǒu.",
        meaning: 'Tin rằng sẽ có một ngày, cậu gặp một người mà hai người đều muốn ở lại, đều cố gắng, và đều sẵn lòng chọn nhau hết lần này đến lần khác. Không phải chỉ chọn nhau lúc vui, mà cả trong những ngày khó khăn vẫn sẵn lòng nắm tay nhau.'
      },
      {
        hanzi: '如果那个人还没有出现，也没有关系。请好好生活。一个人的时候，也可以拥有自己的生活。不要因为暂时没有爱情，就觉得人生少了一些什么。',
        pinyin: 'Rúguǒ nàge rén hái méiyǒu chūxiàn, yě méiyǒu guānxi. Qǐng hǎohāo shēnghuó. Yí ge rén de shíhou, yě kěyǐ yōngyǒu zìjǐ de shēnghuó. Búyào yīnwèi zànshí méiyǒu àiqíng, jiù juéde rénshēng shǎo le yìxiē shénme.',
        meaning: 'Nếu người ấy vẫn chưa xuất hiện, cũng không sao. Hãy sống thật tốt. Khi ở một mình, cậu cũng có thể có cuộc sống của riêng mình. Đừng vì tạm thời chưa có tình yêu mà thấy cuộc đời thiếu mất điều gì.'
      },
      {
        hanzi: '因为你还有很多路没有走过，很多地方没有去过，很多风景没有见过，还有很多人没有遇见。所以，不要急着否定自己的人生。有些空白，并不是一定要等另一个人来填满。有时候，那些空白只是留给你的时间，让你学会成长，让你学会和自己相处。',
        pinyin: 'Yīnwèi nǐ hái yǒu hěn duō lù méiyǒu zǒuguò, hěn duō dìfang méiyǒu qùguò, hěn duō fēngjǐng méiyǒu jiànguò, hái yǒu hěn duō rén méiyǒu yùjiàn. Suǒyǐ, búyào jízhe fǒudìng zìjǐ de rénshēng. Yǒuxiē kòngbái, bìng bú shì yídìng yào děng lìng yí ge rén lái tiánmǎn. Yǒu shíhou, nàxiē kòngbái zhǐshì liú gěi nǐ de shíjiān, ràng nǐ xuéhuì chéngzhǎng, ràng nǐ xuéhuì hé zìjǐ xiāngchǔ.',
        meaning: 'Vì cậu vẫn còn nhiều con đường chưa đi, nhiều nơi chưa đến, nhiều cảnh đẹp chưa thấy, và còn nhiều người chưa gặp. Vì vậy, đừng vội phủ nhận cuộc đời của mình. Có những khoảng trống không nhất thiết phải chờ một người khác đến lấp đầy. Đôi khi, những khoảng trống ấy chỉ là thời gian dành cho cậu, để cậu học cách trưởng thành, học cách sống cùng chính mình.'
      },
      {
        hanzi: '如果未来的某一天，你依然一个人，也没关系。至少你要记得——宁愿一个人安静地生活，也不要在一段感情里感到孤独。',
        pinyin: 'Rúguǒ wèilái de mǒu yì tiān, nǐ yīrán yí ge rén, yě méi guānxi. Zhìshǎo nǐ yào jìde——nìngyuàn yí ge rén ānjìng de shēnghuó, yě búyào zài yí duàn gǎnqíng lǐ gǎndào gūdú.',
        meaning: 'Và nếu đến một ngày nào đó trong tương lai, cậu vẫn đang một mình, cũng chẳng sao. Ít nhất cậu hãy nhớ — thà một mình sống bình yên, còn hơn cảm thấy cô đơn ngay trong một mối tình.'
      },
      {
        hanzi: '如果你已经遇见了那个真正想和你走下去的人，请一定要好好珍惜。不要因为已经拥有，就忘记曾经为什么会选择彼此。不要让生活里的琐碎，一点一点磨掉最初的喜欢。',
        pinyin: 'Rúguǒ nǐ yǐjīng yùjiàn le nàge zhēnzhèng xiǎng hé nǐ zǒu xiàqù de rén, qǐng yídìng yào hǎohāo zhēnxī. Búyào yīnwèi yǐjīng yōngyǒu, jiù wàngjì céngjīng wèishénme huì xuǎnzé bǐcǐ. Búyào ràng shēnghuó lǐ de suǒsuì, yì diǎn yì diǎn módiào zuìchū de xǐhuan.',
        meaning: 'Còn nếu cậu đã gặp được người thật sự muốn cùng cậu đi tiếp, xin nhất định hãy trân trọng. Đừng vì đã có được mà quên mất lý do ban đầu đã chọn nhau. Đừng để những điều nhỏ nhặt trong cuộc sống mòn đi từng chút cảm giác thích ban đầu.'
      },
      {
        hanzi: '如果你还没有遇见那个人，那就慢慢来。也许有一天，你会遇见一个人，让你终于明白：原来，那些曾经受过的伤，并不是为了证明爱情不存在。它们只是带你走过了一些必须经历的路，最后，让你来到真正属于自己的地方。',
        pinyin: 'Rúguǒ nǐ hái méiyǒu yùjiàn nàge rén, nà jiù mànmān lái. Yěxǔ yǒu yì tiān, nǐ huì yùjiàn yí ge rén, ràng nǐ zhōngyú míngbai: yuánlái, nàxiē céngjīng shòu guo de shāng, bìng bú shì wèile zhèngmíng àiqíng bù cúnzài. Tāmen zhǐshì dài nǐ zǒuguò le yìxiē bìxū jīnglì de lù, zuìhòu, ràng nǐ láidào zhēnzhèng shǔyú zìjǐ de dìfang.',
        meaning: 'Nếu cậu vẫn chưa gặp người ấy, thì cứ từ từ. Rồi một ngày, có thể cậu sẽ gặp một người khiến cậu cuối cùng cũng hiểu rằng: hóa ra những vết thương từng có không phải để chứng minh rằng tình yêu không tồn tại. Chúng chỉ đưa cậu đi qua những đoạn đường phải trải qua, để rồi cuối cùng, đưa cậu đến đúng nơi thật sự thuộc về mình.'
      },
      {
        hanzi: '所以，无论你以后爱谁，和谁在一起，或者依然一个人，请永远记得：先好好爱自己。',
        pinyin: 'Suǒyǐ, wúlùn nǐ yǐhòu ài shéi, hé shéi zài yìqǐ, huòzhě yīrán yí ge rén, qǐng yǒngyuǎn jìde: xiān hǎohāo ài zìjǐ.',
        meaning: 'Vì vậy, mong rằng dù sau này cậu yêu ai, ở bên ai hay vẫn một mình, cậu vẫn luôn nhớ yêu thương chính mình trước.'
      },
      {
        hanzi: '希望未来的你，依然温柔，依然勇敢。也希望你终于拥有了那个曾经一直期待的答案。而如果还没有——也请不要着急。因为你值得被爱。只是属于你的那个人，也许还在来的路上。',
        pinyin: "Xīwàng wèilái de nǐ, yīrán wēnróu, yīrán yǒnggǎn. Yě xīwàng nǐ zhōngyú yōngyǒu le nàge céngjīng yìzhí qīdài de dá'àn. Ér rúguǒ hái méiyǒu——yě qǐng búyào zháojí. Yīnwèi nǐ zhídé bèi ài. Zhǐshì shǔyú nǐ de nàge rén, yěxǔ hái zài lái de lùshang.",
        meaning: 'Mong cậu của tương lai vẫn dịu dàng, vẫn dũng cảm. Cũng mong cậu cuối cùng đã có được câu trả lời mà mình từng luôn mong đợi. Còn nếu chưa — cũng xin đừng vội. Vì cậu xứng đáng được yêu. Chỉ là người thuộc về cậu, có lẽ vẫn đang trên đường đến.'
      },
      {
        hanzi: '爱你。来自今天的自己。',
        pinyin: 'Ài nǐ. Láizì jīntiān de zìjǐ.',
        meaning: 'Thương cậu, mình của ngày hôm nay.'
      }
    ]
  },
  {
    key: 'gui-minh-truoc-ngay-re-lon',
    icon: '🧭',
    title: 'Trước ngã rẽ lớn',
    level: 'HSK7-9',
    paragraphs: [
      {
        hanzi: '亲爱的自己：见字如面。写这封信的时候，你正站在人生的又一个路口，手里攥着那份尚未签字的聘书，心里却翻江倒海。',
        pinyin: 'Qīn\'ài de zìjǐ: jiàn zì rú miàn. Xiě zhè fēng xìn de shíhou, nǐ zhèng zhàn zài rénshēng de yòu yí gè lùkǒu, shǒu li zuàn zhe nà fèn shàng wèi qiānzì de pìnshū, xīn li què fān jiāng dǎo hǎi.',
        meaning: 'Thân gửi chính mình: đọc thư như gặp mặt. Khi viết lá thư này, bạn đang đứng trước thêm một ngã rẽ của cuộc đời, tay nắm chặt tờ thư mời làm việc chưa ký, trong lòng thì sóng cuộn trào dâng.'
      },
      {
        hanzi: '我知道你在怕什么：怕离开熟悉的办公室，怕放弃多年积累的人脉，更怕自己一旦失败，就会成为别人口中的笑柄。',
        pinyin: 'Wǒ zhīdào nǐ zài pà shénme: pà líkāi shúxī de bàngōngshì, pà fàngqì duō nián jīlěi de rénmài, gèng pà zìjǐ yídàn shībài, jiù huì chéngwéi biérén kǒu zhōng de xiàobǐng.',
        meaning: 'Mình biết bạn đang sợ điều gì: sợ rời căn phòng làm việc quen thuộc, sợ bỏ đi những mối quan hệ tích lũy bao năm, và hơn hết là sợ rằng một khi thất bại sẽ thành trò cười trong miệng người khác.'
      },
      {
        hanzi: '然而，与其在安稳中慢慢磨掉棱角，不如在风浪里看清自己的分量。所谓安全区，固然能让你免于风雨，但也同样挡住了远处的风景。',
        pinyin: 'Rán’ér, yǔqí zài ānwěn zhōng mànmàn mó diào léngjiǎo, bùrú zài fēnglàng li kànqīng zìjǐ de fènliang. Suǒwèi ānquánqū, gùrán néng ràng nǐ miǎn yú fēngyǔ, dàn yě tóngyàng dǎng zhù le yuǎnchù de fēngjǐng.',
        meaning: 'Thế nhưng, thay vì lặng lẽ mài mòn góc cạnh trong sự yên ổn, chi bằng ra giữa sóng gió để thấy rõ tầm vóc của mình. Cái gọi là vùng an toàn tuy giúp bạn tránh được mưa gió, nhưng cũng che khuất cảnh sắc phía xa.'
      },
      {
        hanzi: '请你回想当初，那个背着行李独自来到这座城市的年轻人，何尝有过十足的把握？正是因为敢于迈出第一步，才有了今天的你。',
        pinyin: 'Qǐng nǐ huíxiǎng dāngchū, nàge bēi zhe xíngli dúzì lái dào zhè zuò chéngshì de niánqīngrén, hécháng yǒu guo shízú de bǎwò? Zhèng shì yīnwèi gǎnyú mài chū dì yī bù, cái yǒu le jīntiān de nǐ.',
        meaning: 'Hãy nhớ lại thuở ban đầu, chàng trai trẻ vác hành lý một mình đến thành phố này, đã bao giờ thật sự chắc chắn đâu? Chính vì dám bước bước đầu tiên nên mới có bạn của hôm nay.'
      },
      {
        hanzi: '无论这次的选择最终通向哪里，你都不必苛求万无一失。真正的勇气，并不是毫无畏惧，而是明知前路未卜，依然愿意为自己的热爱押上一程。',
        pinyin: 'Wúlùn zhè cì de xuǎnzé zuìzhōng tōngxiàng nǎlǐ, nǐ dōu búbì kēqiú wàn wú yì shī. Zhēnzhèng de yǒngqì, bìng bú shì háo wú wèijù, érshì míng zhī qiánlù wèi bǔ, yīrán yuànyì wèi zìjǐ de rè’ài yā shàng yì chéng.',
        meaning: 'Dù lựa chọn lần này rốt cuộc dẫn tới đâu, bạn cũng không cần đòi hỏi mọi thứ phải vẹn toàn. Can đảm thật sự không phải là không biết sợ, mà là biết đường phía trước chưa rõ vẫn sẵn lòng đặt cược một chặng đời cho điều mình yêu.'
      },
      {
        hanzi: '万一这条路走不通，也请别责怪今天的决定。毕竟，经历本身就是最好的积累，况且你永远可以转身，重新出发。',
        pinyin: 'Wànyī zhè tiáo lù zǒu bu tōng, yě qǐng bié zéguài jīntiān de juédìng. Bìjìng, jīnglì běnshēn jiù shì zuì hǎo de jīlěi, kuàngqiě nǐ yǒngyuǎn kěyǐ zhuǎnshēn, chóngxīn chūfā.',
        meaning: 'Lỡ con đường này không đi được, cũng xin đừng trách quyết định hôm nay. Dù sao, trải nghiệm tự nó đã là vốn quý nhất, hơn nữa bạn luôn có thể quay người, xuất phát lại từ đầu.'
      },
      {
        hanzi: '所以，深呼吸，然后提起笔吧。我会在未来的某一天，微笑着等你讲述这段故事。',
        pinyin: 'Suǒyǐ, shēn hūxī, ránhòu tí qǐ bǐ ba. Wǒ huì zài wèilái de mǒu yì tiān, wēixiào zhe děng nǐ jiǎngshù zhè duàn gùshi.',
        meaning: 'Vậy nên, hít thở sâu rồi cầm bút lên đi. Một ngày nào đó trong tương lai, mình sẽ mỉm cười đợi bạn kể lại câu chuyện này.'
      },
      {
        hanzi: '永远支持你的，未来的自己。',
        pinyin: 'Yǒngyuǎn zhīchí nǐ de, wèilái de zìjǐ.',
        meaning: 'Người luôn ủng hộ bạn, chính bạn của tương lai.'
      }
    ]
  },
  {
    key: 'gui-minh-sau-that-bai',
    icon: '🌱',
    title: 'Sau một lần vấp ngã',
    level: 'HSK7-9',
    paragraphs: [
      {
        hanzi: '亲爱的自己：这几天你一定过得很难熬吧。我想先抱抱你，什么道理都不讲，只想告诉你：我在这里。',
        pinyin: 'Qīn\'ài de zìjǐ: zhè jǐ tiān nǐ yídìng guò de hěn nán\'áo ba. Wǒ xiǎng xiān bào bao nǐ, shénme dàolǐ dōu bù jiǎng, zhǐ xiǎng gàosu nǐ: wǒ zài zhèlǐ.',
        meaning: 'Thân gửi chính mình: mấy ngày nay chắc bạn đã trải qua thật khó khăn. Mình muốn ôm bạn trước đã, chẳng giảng đạo lý gì cả, chỉ muốn nói với bạn: mình ở đây.'
      },
      {
        hanzi: '那个项目倾注了你无数个夜晚的心血，如今却落得一场空，难怪你会整夜睡不着，一遍遍地问自己：当初为什么没有再谨慎一点？',
        pinyin: 'Nàge xiàngmù qīngzhù le nǐ wúshù ge yèwǎn de xīnxuè, rújīn què luò de yì chǎng kōng, nánguài nǐ huì zhěngyè shuì bu zháo, yí biàn yí biàn de wèn zìjǐ: dāngchū wèishénme méiyǒu zài jǐnshèn yìdiǎn?',
        meaning: 'Dự án ấy đã thấm bao tâm huyết của vô số đêm của bạn, giờ lại thành công cốc, thảo nào bạn thức trắng đêm, hết lần này đến lần khác tự hỏi: lúc đầu sao mình không cẩn thận thêm một chút?'
      },
      {
        hanzi: '但是请你停一停。人非圣贤，孰能无过？你当时的判断，是以当时所掌握的信息做出的最好选择，事后诸葛亮式的苛责，对那时的你并不公平。',
        pinyin: 'Dànshì qǐng nǐ tíng yi tíng. Rén fēi shèngxián, shú néng wú guò? Nǐ dāngshí de pànduàn, shì yǐ dāngshí suǒ zhǎngwò de xìnxī zuòchū de zuì hǎo xuǎnzé, shìhòu Zhūgě Liàng shì de kēzé, duì nàshí de nǐ bìng bù gōngpíng.',
        meaning: 'Nhưng xin bạn dừng lại một chút. Người không phải thánh hiền, ai mà chẳng có lỗi? Phán đoán của bạn khi ấy là lựa chọn tốt nhất dựa trên thông tin bạn nắm được lúc đó; lối trách móc kiểu “xong chuyện mới khôn” chẳng công bằng với bạn của thuở ấy.'
      },
      {
        hanzi: '我们总是对朋友宽容，对自己却苛刻得近乎残忍。倘若今天跌倒的是你最好的朋友，你难道会责骂他，还是会递上一杯热茶，陪他坐一会儿？',
        pinyin: 'Wǒmen zǒngshì duì péngyou kuānróng, duì zìjǐ què kēkè de jìnhū cánrěn. Tǎngruò jīntiān diēdǎo de shì nǐ zuì hǎo de péngyou, nǐ nándào huì zémà tā, háishi huì dì shàng yì bēi rè chá, péi tā zuò yíhuìr?',
        meaning: 'Ta luôn khoan dung với bạn bè mà khắt khe với bản thân đến mức gần như tàn nhẫn. Nếu hôm nay người ngã là người bạn thân nhất của bạn, lẽ nào bạn lại mắng mỏ họ, hay sẽ đưa một tách trà nóng và ngồi bên họ một lúc?'
      },
      {
        hanzi: '失败固然让人痛，但它从来不是对你价值的审判。跌倒的地方，往往藏着你最需要的教训；那些看似走不过去的坎，日后回头看，都会变成你的底气。',
        pinyin: 'Shībài gùrán ràng rén tòng, dàn tā cónglái bú shì duì nǐ jiàzhí de shěnpàn. Diēdǎo de dìfang, wǎngwǎng cáng zhe nǐ zuì xūyào de jiàoxùn; nàxiē kànsì zǒu bu guòqù de kǎn, rìhòu huítóu kàn, dōu huì biànchéng nǐ de dǐqi.',
        meaning: 'Thất bại tuy làm người ta đau, nhưng chưa bao giờ là bản án phán xét giá trị của bạn. Nơi ngã xuống thường giấu bài học bạn cần nhất; những cái dốc tưởng chừng không vượt nổi, sau này ngoảnh lại đều sẽ thành nội lực của bạn.'
      },
      {
        hanzi: '所以，不妨允许自己难过几天，哭也好，发呆也好，随它去。等心里的风浪平息了，再一点一点把碎掉的信心拾起来，拍拍身上的灰，重新站起来。',
        pinyin: 'Suǒyǐ, bùfáng yǔnxǔ zìjǐ nánguò jǐ tiān, kū yě hǎo, fādāi yě hǎo, suí tā qù. Děng xīn li de fēnglàng píngxī le, zài yìdiǎn yìdiǎn bǎ suì diào de xìnxīn shí qǐlái, pāi pai shēn shang de huī, chóngxīn zhàn qǐlái.',
        meaning: 'Cho nên cứ cho phép mình buồn vài hôm, khóc cũng được, thẫn thờ cũng được, mặc kệ. Đợi sóng gió trong lòng lặng xuống, hãy từng chút nhặt lại niềm tin đã vỡ, phủi bụi trên người, rồi đứng dậy lần nữa.'
      },
      {
        hanzi: '无论明天的路怎么走，你都不是一个人。胜败乃兵家常事，只要你还愿意向前，就从未真正输过。',
        pinyin: 'Wúlùn míngtiān de lù zěnme zǒu, nǐ dōu bú shì yí gè rén. Shèngbài nǎi bīngjiā chángshì, zhǐyào nǐ hái yuànyì xiàng qián, jiù cóngwèi zhēnzhèng shū guo.',
        meaning: 'Dù ngày mai đi thế nào, bạn cũng không đơn độc. Thắng bại là chuyện thường của nhà binh, chỉ cần bạn còn muốn tiến lên thì chưa từng thật sự thua.'
      },
      {
        hanzi: '深爱着你的，自己。',
        pinyin: 'Shēn ài zhe nǐ de, zìjǐ.',
        meaning: 'Người yêu bạn sâu sắc, chính bạn.'
      }
    ]
  },
  {
    key: 'cam-on-bo-me-khi-truong-thanh',
    icon: '🏡',
    title: 'Gửi bố mẹ, một lời cảm ơn muộn',
    level: 'HSK7-9',
    paragraphs: [
      {
        hanzi: '敬爱的爸爸妈妈：见字如面。今晚城里下起了小雨，我忽然很想你们，于是提笔写下这封迟到了许多年的信。',
        pinyin: 'Jìng\'ài de bàba māma: jiàn zì rú miàn. Jīnwǎn chéng li xià qǐ le xiǎoyǔ, wǒ hūrán hěn xiǎng nǐmen, yúshì tí bǐ xiě xià zhè fēng chídào le xǔduō nián de xìn.',
        meaning: 'Bố mẹ kính yêu: đọc thư như gặp mặt. Tối nay trong thành phố đổ mưa phùn, con bỗng rất nhớ bố mẹ, nên cầm bút viết lá thư đã đến muộn nhiều năm này.'
      },
      {
        hanzi: '小时候，我总以为你们无所不能：饭桌上永远有热腾腾的菜，下雨天永远有一把伞，仿佛生活本来就是这样轻而易举。直到自己独立生活，我才明白，那些理所当然的背后，是你们数不清的辛劳。',
        pinyin: 'Xiǎoshíhou, wǒ zǒng yǐwéi nǐmen wú suǒ bù néng: fànzhuō shang yǒngyuǎn yǒu rèténgténg de cài, xià yǔ tiān yǒngyuǎn yǒu yì bǎ sǎn, fǎngfú shēnghuó běnlái jiù shì zhèyàng qīng ér yì jǔ. Zhídào zìjǐ dúlì shēnghuó, wǒ cái míngbai, nàxiē lǐ suǒ dāng rán de bèihòu, shì nǐmen shǔ bu qīng de xīnláo.',
        meaning: 'Hồi nhỏ, con luôn tưởng bố mẹ không gì không làm được: trên mâm cơm lúc nào cũng có món nóng hổi, ngày mưa lúc nào cũng có một chiếc ô, tựa như cuộc sống vốn dĩ nhẹ nhàng dễ dàng như thế. Mãi đến khi tự lập, con mới hiểu rằng đằng sau những điều tưởng hiển nhiên ấy là biết bao vất vả không đếm xuể của bố mẹ.'
      },
      {
        hanzi: '我记得那年冬天，家里为了凑齐我的学费，爸爸把心爱的摩托车卖了，却笑着说自己早就骑腻了；妈妈连一件新棉衣都舍不得买，还说旧的更暖和。那时的我年少无知，竟信以为真。',
        pinyin: 'Wǒ jìde nà nián dōngtiān, jiā li wèile còuqí wǒ de xuéfèi, bàba bǎ xīn\'ài de mótuōchē mài le, què xiào zhe shuō zìjǐ zǎo jiù qí nì le; māma lián yí jiàn xīn miányī dōu shěbude mǎi, hái shuō jiù de gèng nuǎnhuo. Nà shí de wǒ niánshào wúzhī, jìng xìn yǐ wéi zhēn.',
        meaning: 'Con nhớ mùa đông năm ấy, để gom đủ học phí cho con, bố bán chiếc xe máy yêu quý mà vẫn cười bảo mình đã chán đi từ lâu; mẹ đến một chiếc áo bông mới cũng không nỡ mua, còn nói áo cũ ấm hơn. Con khi đó còn trẻ dại, lại tin là thật.'
      },
      {
        hanzi: '如今我也为生计奔波，才懂得所谓的“没关系”，不过是你们把委屈咽进肚子里的温柔；所谓的“我不饿”，不过是把最后一口留给孩子的爱。这些爱从不张扬，却比任何誓言都沉重。',
        pinyin: 'Rújīn wǒ yě wèi shēngjì bēnbō, cái dǒngde suǒwèi de “méi guānxi”, búguò shì nǐmen bǎ wěiqu yàn jìn dùzi li de wēnróu; suǒwèi de “wǒ bú è”, búguò shì bǎ zuìhòu yì kǒu liú gěi háizi de ài. Zhèxiē ài cóng bù zhāngyáng, què bǐ rènhé shìyán dōu chénzhòng.',
        meaning: 'Giờ con cũng tất tả mưu sinh mới hiểu cái gọi là “không sao đâu” chỉ là sự dịu dàng của bố mẹ nuốt tủi hờn vào bụng; cái gọi là “bố mẹ không đói” chỉ là tình thương dành miếng cuối cùng cho con. Tình yêu ấy chẳng bao giờ phô trương, nhưng nặng hơn bất kỳ lời thề nào.'
      },
      {
        hanzi: '我也曾因为你们的唠叨而不耐烦，因为观念不同而争得面红耳赤。现在回想起来，那些絮絮叨叨的叮嘱，何尝不是你们笨拙却真诚的牵挂？可惜我明白得太晚，让你们的头发在等待中白了大半。',
        pinyin: 'Wǒ yě céng yīnwèi nǐmen de láodao ér bú nàifán, yīnwèi guānniàn bù tóng ér zhēng de miàn hóng ěr chì. Xiànzài huíxiǎng qǐlái, nàxiē xùxù dāodāo de dīngzhǔ, hécháng bú shì nǐmen bènzhuō què zhēnchéng de qiānguà? Kěxī wǒ míngbai de tài wǎn, ràng nǐmen de tóufa zài děngdài zhōng bái le dàbàn.',
        meaning: 'Con cũng từng bực bội vì lời cằn nhằn của bố mẹ, từng cãi nhau đỏ mặt tía tai vì quan niệm khác biệt. Giờ nhớ lại, những lời dặn dò lải nhải ấy, há chẳng phải là nỗi lo lắng vụng về mà chân thành của bố mẹ sao? Tiếc là con hiểu quá muộn, để tóc bố mẹ bạc quá nửa trong chờ đợi.'
      },
      {
        hanzi: '与其等到追悔莫及的那一天，不如趁你们还在身边，把这些年没说出口的话讲出来：谢谢你们给了我生命，谢谢你们把全部的爱都倾注在我身上，从不索求回报。',
        pinyin: 'Yǔqí děngdào zhuī huǐ mò jí de nà yì tiān, bùrú chèn nǐmen hái zài shēnbiān, bǎ zhèxiē nián méi shuō chūkǒu de huà jiǎng chūlái: xièxie nǐmen gěi le wǒ shēngmìng, xièxie nǐmen bǎ quánbù de ài dōu qīngzhù zài wǒ shēn shang, cóng bù suǒqiú huíbào.',
        meaning: 'Thay vì đợi đến ngày hối hận không kịp, chi bằng nhân lúc bố mẹ còn bên cạnh, con nói ra những lời bao năm chưa nói: cảm ơn bố mẹ đã cho con sinh mệnh, cảm ơn đã dồn trọn yêu thương cho con mà chưa từng đòi hồi báo.'
      },
      {
        hanzi: '无论我将来走得多远，飞得多高，你们永远都是我最温暖的归处。这个周末，我想回家，陪你们吃一顿饭，听你们再唠叨一次，我一定会笑着听完。',
        pinyin: 'Wúlùn wǒ jiānglái zǒu de duō yuǎn, fēi de duō gāo, nǐmen yǒngyuǎn dōu shì wǒ zuì wēnnuǎn de guīchù. Zhège zhōumò, wǒ xiǎng huí jiā, péi nǐmen chī yí dùn fàn, tīng nǐmen zài láodao yí cì, wǒ yídìng huì xiào zhe tīng wán.',
        meaning: 'Dù mai này con đi xa đến đâu, bay cao đến mấy, bố mẹ mãi mãi vẫn là nơi trở về ấm áp nhất của con. Cuối tuần này, con muốn về nhà, ăn với bố mẹ một bữa cơm, nghe bố mẹ cằn nhằn thêm một lần nữa, con nhất định sẽ mỉm cười nghe hết.'
      },
      {
        hanzi: '永远爱你们的孩子，敬上。',
        pinyin: 'Yǒngyuǎn ài nǐmen de háizi, jìng shàng.',
        meaning: 'Đứa con luôn yêu bố mẹ, kính thư.'
      }
    ]
  }
]

export function getLetter(key) {
  return LETTERS.find((l) => l.key === key)
}
