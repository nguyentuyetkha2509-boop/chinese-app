// Thu dai bang tieng Trung, TU SOAN (khong lay tu sach nao). Nguoi hoc tu dich
// ca la thu ra tieng Viet truoc, bam xac nhan thi app moi hien phien am va
// nghia tung doan (xem LetterDetailPage). Moi doan gom nhieu cau lien nhau;
// doan cuoi la loi ky ten.
//
// Thu ve bat dong san (thu-gui-khach-hang) can nguoi biet nghe doc lai thuat
// ngu truoc khi coi la chuan.
export const LETTERS = [
  {
    key: 'thu-gui-chinh-minh',
    icon: '💌',
    title: 'Thư gửi chính mình',
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
    key: 'thu-gui-khach-hang',
    icon: '🏠',
    title: 'Thư gửi khách xem nhà',
    level: 'HSK3-4',
    paragraphs: [
      {
        hanzi: '尊敬的王先生：您好！感谢您上周来看房。我是恒安地产的小明，很高兴认识您。',
        pinyin: "Zūnjìng de Wáng xiānsheng: nín hǎo! Gǎnxiè nín shàng zhōu lái kàn fáng. Wǒ shì Héng'ān dìchǎn de Xiǎo Míng, hěn gāoxìng rènshi nín.",
        meaning: 'Kính gửi ông Vương: xin chào ông! Cảm ơn ông tuần trước đã đến xem nhà. Tôi là Tiểu Minh của công ty bất động sản Hằng An, rất vui được quen biết ông.'
      },
      {
        hanzi: '您看的那套公寓在市中心，一共有三个卧室，两个卫生间，面积一百二十平方米。房子的位置很好，附近有地铁站、超市和学校。',
        pinyin: 'Nín kàn de nà tào gōngyù zài shìzhōngxīn, yígòng yǒu sān ge wòshì, liǎng ge wèishēngjiān, miànjī yì bǎi èrshí píngfāngmǐ. Fángzi de wèizhi hěn hǎo, fùjìn yǒu dìtiě zhàn, chāoshì hé xuéxiào.',
        meaning: 'Căn hộ ông đã xem nằm ở trung tâm thành phố, tổng cộng có ba phòng ngủ, hai phòng vệ sinh, diện tích 120 mét vuông. Vị trí căn nhà rất tốt, gần đó có ga tàu điện ngầm, siêu thị và trường học.'
      },
      {
        hanzi: '业主同意把价格降低五万元，但是需要您在本月底前决定。如果您有兴趣，我们可以再约时间，我陪您去看一次房。',
        pinyin: 'Yèzhǔ tóngyì bǎ jiàgé jiàngdī wǔ wàn yuán, dànshì xūyào nín zài běn yuèdǐ qián juédìng. Rúguǒ nín yǒu xìngqù, wǒmen kěyǐ zài yuē shíjiān, wǒ péi nín qù kàn yí cì fáng.',
        meaning: 'Chủ nhà đồng ý giảm giá 5 vạn tệ, nhưng cần ông quyết định trước cuối tháng này. Nếu ông có hứng thú, chúng ta có thể hẹn thêm thời gian, tôi sẽ cùng ông đi xem nhà một lần nữa.'
      },
      {
        hanzi: '如果您还有问题，请随时给我打电话。期待您的回复，祝您生活愉快！',
        pinyin: 'Rúguǒ nín hái yǒu wèntí, qǐng suíshí gěi wǒ dǎ diànhuà. Qīdài nín de huífù, zhù nín shēnghuó yúkuài!',
        meaning: 'Nếu ông còn câu hỏi nào, xin hãy gọi điện cho tôi bất cứ lúc nào. Mong nhận được hồi âm của ông, chúc ông cuộc sống vui vẻ!'
      },
      {
        hanzi: '小明 敬上',
        pinyin: 'Xiǎo Míng jìngshàng',
        meaning: 'Tiểu Minh kính thư'
      }
    ]
  },
  {
    key: 'thu-cam-on-ban',
    icon: '🙏',
    title: 'Thư cảm ơn người bạn',
    level: 'HSK3',
    paragraphs: [
      {
        hanzi: '亲爱的朋友：你好！最近过得怎么样？我一直想谢谢你，今天终于有时间写信了。',
        pinyin: "Qīn'ài de péngyou: nǐ hǎo! Zuìjìn guò de zěnmeyàng? Wǒ yìzhí xiǎng xièxie nǐ, jīntiān zhōngyú yǒu shíjiān xiě xìn le.",
        meaning: 'Người bạn thân mến: xin chào! Dạo này bạn sống thế nào? Tôi vẫn luôn muốn cảm ơn bạn, hôm nay cuối cùng cũng có thời gian viết thư.'
      },
      {
        hanzi: '去年我刚到这座城市，什么人也不认识，也找不到工作。是你帮我介绍了第一份工作，还请我去你家吃饭。那时候，我觉得自己不再孤单。',
        pinyin: 'Qùnián wǒ gāng dào zhè zuò chéngshì, shénme rén yě bú rènshi, yě zhǎo bú dào gōngzuò. Shì nǐ bāng wǒ jièshào le dì yī fèn gōngzuò, hái qǐng wǒ qù nǐ jiā chīfàn. Nà shíhou, wǒ juéde zìjǐ bú zài gūdān.',
        meaning: 'Năm ngoái tôi vừa đến thành phố này, không quen ai và cũng không tìm được việc. Chính bạn đã giúp tôi giới thiệu công việc đầu tiên, còn mời tôi đến nhà bạn ăn cơm. Lúc đó, tôi cảm thấy mình không còn cô đơn.'
      },
      {
        hanzi: '现在我的工作很顺利，生活也越来越好。我会永远记得你的帮助。下个月我回老家，一定带一些特产来看你。',
        pinyin: 'Xiànzài wǒ de gōngzuò hěn shùnlì, shēnghuó yě yuè lái yuè hǎo. Wǒ huì yǒngyuǎn jìde nǐ de bāngzhù. Xià ge yuè wǒ huí lǎojiā, yídìng dài yìxiē tèchǎn lái kàn nǐ.',
        meaning: 'Bây giờ công việc của tôi rất thuận lợi, cuộc sống cũng ngày càng tốt hơn. Tôi sẽ mãi nhớ sự giúp đỡ của bạn. Tháng sau tôi về quê, nhất định sẽ mang ít đặc sản đến thăm bạn.'
      },
      {
        hanzi: '祝你身体健康，工作顺利。等你的回信！',
        pinyin: 'Zhù nǐ shēntǐ jiànkāng, gōngzuò shùnlì. Děng nǐ de huíxìn!',
        meaning: 'Chúc bạn sức khỏe, công việc thuận lợi. Tôi chờ thư hồi âm của bạn!'
      },
      {
        hanzi: '你的朋友 小林',
        pinyin: 'Nǐ de péngyou Xiǎo Lín',
        meaning: 'Bạn của bạn, Tiểu Lâm'
      }
    ]
  }
]

export function getLetter(key) {
  return LETTERS.find((l) => l.key === key)
}
