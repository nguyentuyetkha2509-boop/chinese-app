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
  }
]

export function getLetter(key) {
  return LETTERS.find((l) => l.key === key)
}
