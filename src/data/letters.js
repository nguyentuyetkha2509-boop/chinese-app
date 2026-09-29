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
  }
]

export function getLetter(key) {
  return LETTERS.find((l) => l.key === key)
}
