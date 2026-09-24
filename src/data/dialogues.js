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
  }
]

export function getDialogue(key) {
  return DIALOGUES.find((d) => d.key === key)
}
