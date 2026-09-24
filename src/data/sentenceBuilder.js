// Bai tap sap xep cau: nguoi hoc cham cac khoi tu theo dung thu tu de tao
// thanh cau dung. Cau va cach chia khoi (chunk) duoc soan va kiem tra thu
// cong, dung lai cac mau ngu phap/tu vung co ban da co trong app (是, 的, 在,
// 了, 想, 太...了, cac tu HSK1) de cung co chu khong day them noi dung moi.
export const SENTENCES = [
  { chunks: ['我', '是', '学生。'], pinyin: 'Wǒ shì xuéshēng.', meaning: 'Tôi là học sinh.' },
  { chunks: ['她', '是', '老师。'], pinyin: 'Tā shì lǎoshī.', meaning: 'Cô ấy là giáo viên.' },
  { chunks: ['这', '是', '我的', '书。'], pinyin: 'Zhè shì wǒ de shū.', meaning: 'Đây là sách của tôi.' },
  { chunks: ['我', '喜欢', '喝', '茶。'], pinyin: 'Wǒ xǐhuan hē chá.', meaning: 'Tôi thích uống trà.' },
  { chunks: ['他', '在', '学校', '学习。'], pinyin: 'Tā zài xuéxiào xuéxí.', meaning: 'Anh ấy học ở trường.' },
  { chunks: ['妈妈', '在', '做饭。'], pinyin: 'Māma zài zuò fàn.', meaning: 'Mẹ đang nấu cơm.' },
  { chunks: ['我', '想', '去', '中国。'], pinyin: 'Wǒ xiǎng qù Zhōngguó.', meaning: 'Tôi muốn đi Trung Quốc.' },
  { chunks: ['你', '喜欢', '吃', '什么？'], pinyin: 'Nǐ xǐhuan chī shénme?', meaning: 'Bạn thích ăn gì?' },
  { chunks: ['这个', '太', '贵', '了。'], pinyin: 'Zhège tài guì le.', meaning: 'Cái này đắt quá.' },
  { chunks: ['今天', '天气', '很', '好。'], pinyin: 'Jīntiān tiānqì hěn hǎo.', meaning: 'Hôm nay thời tiết rất đẹp.' },
  { chunks: ['我的', '朋友', '很', '高。'], pinyin: 'Wǒ de péngyou hěn gāo.', meaning: 'Bạn tôi rất cao.' },
  { chunks: ['他', '每天', '去', '公园。'], pinyin: 'Tā měitiān qù gōngyuán.', meaning: 'Anh ấy ngày nào cũng đi công viên.' },
  { chunks: ['你', '家', '有', '几口人？'], pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', meaning: 'Nhà bạn có mấy người?' },
  { chunks: ['我', '每天', '早上', '七点', '起床。'], pinyin: 'Wǒ měitiān zǎoshang qī diǎn qǐchuáng.', meaning: 'Tôi mỗi ngày dậy lúc bảy giờ sáng.' },
  { chunks: ['我们', '一起', '去', '看电影吧。'], pinyin: 'Wǒmen yìqǐ qù kàn diànyǐng ba.', meaning: 'Chúng ta cùng đi xem phim nhé.' }
]
