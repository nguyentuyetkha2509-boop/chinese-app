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
    level: 'HSK4-5',
    // Thu do chu du an viet bang tieng Viet, phan tieng Trung do Claude dich lai;
    // nghia tieng Viet giu nguyen loi cua chu du an.
    paragraphs: [
      {
        hanzi: '给以后的我：不知道你读到这些文字的时候，还记不记得今天的我。',
        pinyin: 'Gěi yǐhòu de wǒ: bù zhīdào nǐ dú dào zhèxiē wénzì de shíhou, hái jì bu jìde jīntiān de wǒ.',
        meaning: 'Gửi mình của những ngày sau này, không biết đến lúc đọc lại những dòng này, cậu còn nhớ mình của hôm nay không.'
      },
      {
        hanzi: '一个曾经爱得很深的人，曾经把很多希望放在一个人身上，曾经以为只要自己足够真诚，爱情就会有一个值得的结局。但是，爱情也许并不总是这样。',
        pinyin: 'Yí ge céngjīng ài de hěn shēn de rén, céngjīng bǎ hěn duō xīwàng fàng zài yí ge rén shēnshang, céngjīng yǐwéi zhǐyào zìjǐ zúgòu zhēnchéng, àiqíng jiù huì yǒu yí ge zhídé de jiéjú. Dànshì, àiqíng yěxǔ bìng bù zǒngshì zhèyàng.',
        meaning: 'Một người đã từng yêu rất nhiều, từng đặt rất nhiều hy vọng vào một người, từng nghĩ rằng chỉ cần mình đủ chân thành thì tình yêu rồi sẽ có một cái kết xứng đáng. Nhưng có lẽ tình yêu không phải lúc nào cũng như vậy.'
      },
      {
        hanzi: '有些人走进我的生命是为了留下来。也有些人只陪我走一段路，离开的时候，却留给我很多东西：美好的回忆、伤痛、没有答案的问题，还有另一个版本的自己。',
        pinyin: "Yǒuxiē rén zǒujìn wǒ de shēngmìng shì wèile liú xiàlái. Yě yǒuxiē rén zhǐ péi wǒ zǒu yí duàn lù, líkāi de shíhou, què liúgěi wǒ hěn duō dōngxi: měihǎo de huíyì, shāngtòng, méiyǒu dá'àn de wèntí, hái yǒu lìng yí ge bǎnběn de zìjǐ.",
        meaning: 'Có những người bước vào cuộc đời mình để ở lại. Cũng có những người chỉ đi cùng mình một đoạn đường, để rồi khi rời đi, họ để lại trong mình rất nhiều điều: những kỷ niệm đẹp, những tổn thương, những câu hỏi không có lời giải, và cả một phiên bản khác của chính mình.'
      },
      {
        hanzi: '我不知道以后你会爱上谁，也不知道那个人是不是我今天想到的人。但是我希望你不要忘记今天的感觉。不要因为受过伤，就觉得爱情很可怕。不要因为曾经爱错了人，就觉得自己不值得被好好爱。',
        pinyin: 'Wǒ bù zhīdào yǐhòu nǐ huì àishang shéi, yě bù zhīdào nàge rén shì bu shì wǒ jīntiān xiǎngdào de rén. Dànshì wǒ xīwàng nǐ búyào wàngjì jīntiān de gǎnjué. Búyào yīnwèi shòu guo shāng, jiù juéde àiqíng hěn kěpà. Búyào yīnwèi céngjīng ài cuò le rén, jiù juéde zìjǐ bù zhídé bèi hǎohāo ài.',
        meaning: 'Mình không biết sau này cậu sẽ yêu ai, cũng không biết người ấy có phải là người mà hôm nay mình đang nghĩ đến hay không. Nhưng mình mong cậu đừng quên cảm giác của ngày hôm nay. Đừng vì từng bị tổn thương mà nghĩ rằng tình yêu là điều đáng sợ. Đừng vì từng yêu sai người mà nghĩ rằng mình không xứng đáng được yêu đúng cách.'
      },
      {
        hanzi: '如果以后你又爱上了谁，请去爱，但是不要弄丢自己。该说的话要说出来，要珍惜真心对待你的人。但是，当一段感情只剩下让你拼命努力才能被爱的时候，也要懂得离开。',
        pinyin: 'Rúguǒ yǐhòu nǐ yòu àishang le shéi, qǐng qù ài, dànshì búyào nòngdiū zìjǐ. Gāi shuō de huà yào shuō chūlái, yào zhēnxī zhēnxīn duìdài nǐ de rén. Dànshì, dāng yí duàn gǎnqíng zhǐ shèngxià ràng nǐ pīnmìng nǔlì cái néng bèi ài de shíhou, yě yào dǒngde líkāi.',
        meaning: 'Nếu sau này cậu lại yêu, hãy yêu nhưng đừng đánh mất mình. Hãy nói ra những điều cần nói. Hãy trân trọng những người thật lòng với mình. Nhưng cũng hãy biết rời đi khi một tình yêu chỉ còn khiến mình phải cố gắng để được yêu.'
      },
      {
        hanzi: '我曾经以为，爱一个人就要不惜一切代价留住对方。后来才明白，有时候爱也是懂得放手。不是因为不爱了，而是因为我知道，有些人就算很爱，也不能陪我走到路的尽头。',
        pinyin: 'Wǒ céngjīng yǐwéi, ài yí ge rén jiù yào bùxī yíqiè dàijià liúzhù duìfāng. Hòulái cái míngbai, yǒu shíhou ài yě shì dǒngde fàngshǒu. Bú shì yīnwèi bú ài le, ér shì yīnwèi wǒ zhīdào, yǒuxiē rén jiùsuàn hěn ài, yě bù néng péi wǒ zǒudào lù de jìntóu.',
        meaning: 'Mình từng nghĩ yêu một người là phải giữ họ bằng mọi giá. Sau này mới hiểu, đôi khi yêu cũng là biết buông tay. Không phải vì hết yêu, mà vì mình hiểu rằng có những người dù rất thương cũng không thể cùng mình đi đến cuối con đường.'
      },
      {
        hanzi: '如果有一天你还是会想起一个曾经让你心动的人，也没有关系。不是所有我爱过的人，都要成为永远留在我身边的人。有些人只要曾经出现过，就已经成为青春的一部分了。',
        pinyin: 'Rúguǒ yǒu yì tiān nǐ háishi huì xiǎngqǐ yí ge céngjīng ràng nǐ xīndòng de rén, yě méiyǒu guānxi. Bú shì suǒyǒu wǒ ài guo de rén, dōu yào chéngwéi yǒngyuǎn liú zài wǒ shēnbiān de rén. Yǒuxiē rén zhǐyào céngjīng chūxiàn guo, jiù yǐjīng chéngwéi qīngchūn de yí bùfen le.',
        meaning: 'Và nếu một ngày nào đó cậu vẫn còn nhớ về một người từng khiến trái tim mình rung động rất nhiều, thì cũng không sao cả. Không phải mọi người mình từng yêu đều phải trở thành người ở bên cạnh mình mãi mãi. Có những người chỉ cần từng xuất hiện thôi cũng đã đủ để trở thành một phần của tuổi trẻ.'
      },
      {
        hanzi: '我希望经历了这一切以后，你还相信爱情。一份不会让你去猜自己重不重要的爱情。一份不会让你不停地问“我是不是做错了什么”的爱情。一份两个人都想留下来、都在努力、都选择彼此的爱情，不只在开心的日子，在困难的日子也一样。',
        pinyin: 'Wǒ xīwàng jīnglì le zhè yíqiè yǐhòu, nǐ hái xiāngxìn àiqíng. Yí fèn bú huì ràng nǐ qù cāi zìjǐ zhòng bu zhòngyào de àiqíng. Yí fèn bú huì ràng nǐ bù tíng de wèn “wǒ shì bu shì zuò cuò le shénme” de àiqíng. Yí fèn liǎng ge rén dōu xiǎng liú xiàlái, dōu zài nǔlì, dōu xuǎnzé bǐcǐ de àiqíng, bù zhǐ zài kāixīn de rìzi, zài kùnnan de rìzi yě yíyàng.',
        meaning: 'Mình mong sau tất cả, cậu vẫn còn tin vào tình yêu. Một tình yêu không khiến cậu phải đoán xem mình có quan trọng hay không. Một tình yêu không khiến cậu phải liên tục tự hỏi: “Mình đã làm gì sai?” Một tình yêu mà ở đó, cả hai đều muốn ở lại, đều cố gắng, đều lựa chọn nhau — không phải chỉ trong những ngày vui, mà cả những ngày khó khăn.'
      },
      {
        hanzi: '如果读到这封信的时候，你还是一个人，也没关系。宁可一个人平静地生活，也不要在一个人身边却总是觉得孤单。请记住，我不需要完美的爱情，我只需要一份足够真心的爱情。',
        pinyin: 'Rúguǒ dú dào zhè fēng xìn de shíhou, nǐ háishi yí ge rén, yě méi guānxi. Nìngkě yí ge rén píngjìng de shēnghuó, yě búyào zài yí ge rén shēnbiān què zǒngshì juéde gūdān. Qǐng jìzhù, wǒ bù xūyào wánměi de àiqíng, wǒ zhǐ xūyào yí fèn zúgòu zhēnxīn de àiqíng.',
        meaning: 'Và nếu đến lúc đọc lá thư này, cậu vẫn đang một mình, cũng chẳng sao. Thà một mình và bình yên, còn hơn ở cạnh một người nhưng lúc nào cũng cảm thấy cô đơn. Hãy nhớ nhé, mình không cần một tình yêu hoàn hảo. Mình chỉ cần một tình yêu đủ thật lòng.'
      },
      {
        hanzi: '如果你已经遇到了那个人，请好好爱对方。不要因为已经得到了，就忘记珍惜。不要让那些小事，让你忘了当初为什么选择彼此。如果那份爱情还没有来，也请好好生活。',
        pinyin: 'Rúguǒ nǐ yǐjīng yùdào le nàge rén, qǐng hǎohāo ài duìfāng. Búyào yīnwèi yǐjīng dédào le, jiù wàngjì zhēnxī. Búyào ràng nàxiē xiǎoshì, ràng nǐ wàng le dāngchū wèishénme xuǎnzé bǐcǐ. Rúguǒ nà fèn àiqíng hái méiyǒu lái, yě qǐng hǎohāo shēnghuó.',
        meaning: 'Còn nếu cậu đã gặp được người ấy rồi, hãy yêu họ thật tử tế. Đừng vì đã có được mà quên trân trọng. Đừng để những điều nhỏ nhặt làm mình quên mất lý do ban đầu đã chọn nhau. Và nếu tình yêu ấy vẫn chưa đến, hãy cứ sống thật tốt.'
      },
      {
        hanzi: '总有一天，你也许会遇到一个人，让你明白以前受过的伤，并不是为了证明爱情不存在。它们只是一段一段的路，把你带到了你真正需要去的地方。',
        pinyin: 'Zǒng yǒu yì tiān, nǐ yěxǔ huì yùdào yí ge rén, ràng nǐ míngbai yǐqián shòu guo de shāng, bìng bú shì wèile zhèngmíng àiqíng bù cúnzài. Tāmen zhǐshì yí duàn yí duàn de lù, bǎ nǐ dàidào le nǐ zhēnzhèng xūyào qù de dìfang.',
        meaning: 'Rồi một ngày, có thể cậu sẽ gặp một người khiến cậu hiểu rằng những lần tổn thương trước đây không phải để chứng minh rằng tình yêu không tồn tại. Chúng chỉ là những đoạn đường đã đưa cậu đến đúng nơi mình cần đến.'
      },
      {
        hanzi: '希望无论你爱谁、和谁在一起，还是一个人，你都永远记得，先爱自己。',
        pinyin: 'Xīwàng wúlùn nǐ ài shéi, hé shéi zài yìqǐ, háishi yí ge rén, nǐ dōu yǒngyuǎn jìde, xiān ài zìjǐ.',
        meaning: 'Mong rằng dù yêu ai, ở bên ai hay một mình, cậu vẫn luôn nhớ yêu thương chính mình trước.'
      },
      {
        hanzi: '疼爱你的，今天的我',
        pinyin: "Téng'ài nǐ de, jīntiān de wǒ",
        meaning: 'Thương cậu, mình của ngày hôm nay.'
      }
    ]
  }
]

export function getLetter(key) {
  return LETTERS.find((l) => l.key === key)
}
