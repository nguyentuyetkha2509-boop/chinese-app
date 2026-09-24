// Diem ngu phap co ban, tu soan va kiem tra vi du/pinyin thu cong. Day la buoc
// dau (HSK1) - se bo sung them HSK2-3 sau. Moi diem co giai thich ngan + vi du
// + bai tap trac nghiem de kiem tra hieu, khong chi hoc thuoc.
export const GRAMMAR_POINTS = [
  {
    key: 'shi',
    level: 'HSK1',
    title: '是 - Câu khẳng định "là"',
    pattern: 'A + 是 + B',
    explanation: 'Dùng 是 để nói A là B, giống "là" trong tiếng Việt. Phủ định thì thêm 不 trước 是: A + 不是 + B.',
    examples: [
      { hanzi: '我是学生。', pinyin: 'Wǒ shì xuéshēng.', meaning: 'Tôi là học sinh.' },
      { hanzi: '她不是老师，她是医生。', pinyin: 'Tā bú shì lǎoshī, tā shì yīshēng.', meaning: 'Cô ấy không phải là giáo viên, cô ấy là bác sĩ.' },
      { hanzi: '这是我的手机。', pinyin: 'Zhè shì wǒ de shǒujī.', meaning: 'Đây là điện thoại của tôi.' }
    ],
    quiz: [
      { question: '"Anh ấy là người Trung Quốc" dịch đúng là câu nào?', options: ['他是中国人。', '他中国人是。', '他的中国人。'] },
      { question: 'Câu phủ định nào đúng ngữ pháp?', options: ['我不是老师。', '我是不老师。', '我不老师是。'] },
      { question: '这____我的书。 Chọn từ đúng điền vào chỗ trống:', options: ['是', '的', '在'] }
    ]
  },
  {
    key: 'de',
    level: 'HSK1',
    title: '的 - Sở hữu, định ngữ',
    pattern: 'A + 的 + B',
    explanation: 'Dùng 的 để nối A và B khi A sở hữu hoặc bổ nghĩa cho B, giống "của" trong tiếng Việt. Ví dụ: 我的 (của tôi), 老师的 (của giáo viên).',
    examples: [
      { hanzi: '这是我的书。', pinyin: 'Zhè shì wǒ de shū.', meaning: 'Đây là sách của tôi.' },
      { hanzi: '他是我的朋友。', pinyin: 'Tā shì wǒ de péngyou.', meaning: 'Anh ấy là bạn của tôi.' },
      { hanzi: '妈妈的手机在桌子上。', pinyin: 'Māma de shǒujī zài zhuōzi shàng.', meaning: 'Điện thoại của mẹ ở trên bàn.' }
    ],
    quiz: [
      { question: '"Nhà của tôi" dịch đúng là:', options: ['我的家', '我家的', '家我的'] },
      { question: '这是____书。("sách của anh ấy" - chọn từ đúng)', options: ['他的', '他是', '他在'] },
      { question: 'Câu nào đúng ngữ pháp?', options: ['这是老师的手机。', '这是手机老师的。', '这老师是的手机。'] }
    ]
  },
  {
    key: 'zai',
    level: 'HSK1',
    title: '在 - Ở đâu / đang làm gì',
    pattern: 'A + 在 + nơi chốn  ·  在 + động từ (+ 呢)',
    explanation: '在 dùng để nói A ở đâu (在 + nơi chốn), hoặc đặt trước động từ để nói đang làm gì (thường thêm 呢 ở cuối câu).',
    examples: [
      { hanzi: '我在家。', pinyin: 'Wǒ zài jiā.', meaning: 'Tôi ở nhà.' },
      { hanzi: '他在学校学习。', pinyin: 'Tā zài xuéxiào xuéxí.', meaning: 'Anh ấy học ở trường.' },
      { hanzi: '妈妈在做饭呢。', pinyin: 'Māma zài zuò fàn ne.', meaning: 'Mẹ đang nấu cơm.' }
    ],
    quiz: [
      { question: '"Tôi đang ở công viên" dịch đúng là:', options: ['我在公园。', '我公园在。', '我的公园。'] },
      { question: '"Anh ấy đang xem tivi" dịch đúng là:', options: ['他在看电视。', '他看电视在。', '他是看电视。'] },
      { question: '你____哪儿？("Bạn đang ở đâu?" - chọn từ đúng)', options: ['在', '是', '的'] }
    ]
  },
  {
    key: 'le',
    level: 'HSK1',
    title: '了 - Hành động đã hoàn thành',
    pattern: 'Động từ + 了',
    explanation: 'Thêm 了 sau động từ để nói hành động đã xảy ra/hoàn thành. Câu hỏi thường dùng "V + 了 + 吗".',
    examples: [
      { hanzi: '我吃饭了。', pinyin: 'Wǒ chī fàn le.', meaning: 'Tôi ăn cơm rồi.' },
      { hanzi: '他去学校了。', pinyin: 'Tā qù xuéxiào le.', meaning: 'Anh ấy đã đi đến trường rồi.' },
      { hanzi: '你吃了吗？', pinyin: 'Nǐ chī le ma?', meaning: 'Bạn ăn (cơm) chưa?' }
    ],
    quiz: [
      { question: '"Anh ấy đã về nhà rồi" dịch đúng là:', options: ['他回家了。', '他了回家。', '他回了家在。'] },
      { question: 'Câu nào diễn tả hành động ĐÃ xảy ra?', options: ['我吃饭了。', '我吃饭。', '我要吃饭。'] },
      { question: '"Bạn ăn cơm chưa?" dịch đúng là:', options: ['你吃了吗？', '你吃吗了？', '你了吃吗？'] }
    ]
  },
  {
    key: 'ma',
    level: 'HSK1',
    title: '吗 - Câu hỏi có/không',
    pattern: 'Câu khẳng định + 吗？',
    explanation: 'Thêm 吗 vào cuối một câu khẳng định để biến nó thành câu hỏi có/không, không cần đảo trật tự từ.',
    examples: [
      { hanzi: '你是学生吗？', pinyin: 'Nǐ shì xuéshēng ma?', meaning: 'Bạn là học sinh phải không?' },
      { hanzi: '他忙吗？', pinyin: 'Tā máng ma?', meaning: 'Anh ấy có bận không?' },
      { hanzi: '你喜欢喝茶吗？', pinyin: 'Nǐ xǐhuan hē chá ma?', meaning: 'Bạn có thích uống trà không?' }
    ],
    quiz: [
      { question: '"Bạn khỏe không?" dịch đúng là:', options: ['你好吗？', '你吗好？', '吗你好？'] },
      { question: 'Câu nào đúng ngữ pháp?', options: ['你是老师吗？', '你吗是老师？', '吗你是老师？'] },
      { question: '"Bạn có phải là người Việt Nam không?" dịch đúng là:', options: ['你是越南人吗？', '你吗是越南人？', '你是吗越南人？'] }
    ]
  },
  {
    key: 'xiang-yao',
    level: 'HSK1',
    title: '想 / 要 - Muốn làm gì',
    pattern: '想 / 要 + động từ',
    explanation: '想 và 要 đều đứng trước động từ để nói muốn làm gì. Phủ định của 想 là 不想. Ví dụ: 我想去 (tôi muốn đi), 我不想去 (tôi không muốn đi).',
    examples: [
      { hanzi: '我想去中国。', pinyin: 'Wǒ xiǎng qù Zhōngguó.', meaning: 'Tôi muốn đi Trung Quốc.' },
      { hanzi: '你要喝什么？', pinyin: 'Nǐ yào hē shénme?', meaning: 'Bạn muốn uống gì?' },
      { hanzi: '我不想吃。', pinyin: 'Wǒ bù xiǎng chī.', meaning: 'Tôi không muốn ăn.' }
    ],
    quiz: [
      { question: '"Tôi muốn học tiếng Trung" dịch đúng là:', options: ['我想学习汉语。', '我学习想汉语。', '我汉语想学习。'] },
      { question: 'Phủ định của 想 dùng từ nào?', options: ['不想', '没想', '不要想'] },
      { question: '"Bạn muốn ăn gì?" dịch đúng là:', options: ['你想吃什么？', '你什么想吃？', '你吃想什么？'] }
    ]
  },
  {
    key: 'tai-le',
    level: 'HSK1',
    title: '太...了 - Quá mức',
    pattern: '太 + tính từ + 了',
    explanation: 'Dùng 太...了 để nhấn mạnh một tính chất ở mức "quá", giống "quá" trong tiếng Việt. Tính từ luôn đứng giữa 太 và 了.',
    examples: [
      { hanzi: '这个太贵了。', pinyin: 'Zhège tài guì le.', meaning: 'Cái này đắt quá.' },
      { hanzi: '今天太热了。', pinyin: 'Jīntiān tài rè le.', meaning: 'Hôm nay nóng quá.' },
      { hanzi: '你太好了！', pinyin: 'Nǐ tài hǎo le!', meaning: 'Bạn tốt quá!' }
    ],
    quiz: [
      { question: '"Món này ngon quá!" dịch đúng là:', options: ['这个菜太好吃了！', '这个菜好吃太了！', '太这个菜好吃了！'] },
      { question: 'Cấu trúc đúng của "太...了" là:', options: ['太 + tính từ + 了', '了 + 太 + tính từ', 'tính từ + 太 + 了'] },
      { question: '"Hôm nay lạnh quá" dịch đúng là:', options: ['今天太冷了。', '今天冷太了。', '太今天冷了。'] }
    ]
  },
  {
    key: 'ji-duoshao',
    level: 'HSK1',
    title: '几 / 多少 - Hỏi số lượng',
    pattern: '几 + lượng từ + danh từ  ·  多少 + (lượng từ) + danh từ',
    explanation: '几 dùng khi đoán số nhỏ (dưới 10) và luôn cần lượng từ đi kèm. 多少 dùng cho số lượng bất kỳ, không bắt buộc có lượng từ.',
    examples: [
      { hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', meaning: 'Nhà bạn có mấy người?' },
      { hanzi: '这个多少钱？', pinyin: 'Zhège duōshao qián?', meaning: 'Cái này bao nhiêu tiền?' },
      { hanzi: '你有几本书？', pinyin: 'Nǐ yǒu jǐ běn shū?', meaning: 'Bạn có mấy quyển sách?' }
    ],
    quiz: [
      { question: 'Từ nào dùng để hỏi giá tiền (số lớn, không giới hạn)?', options: ['多少', '几', '的'] },
      { question: '"Bạn có mấy anh chị em?" dùng từ nào?', options: ['几', '多少', '了'] },
      { question: 'Câu nào đúng ngữ pháp?', options: ['你家有几口人？', '你家有几人口？', '你家几有口人？'] }
    ]
  }
]

export function getGrammarPoint(key) {
  return GRAMMAR_POINTS.find((g) => g.key === key)
}
