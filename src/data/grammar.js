// Diem ngu phap xep theo cap do cua chuan HSK 3.0 (2021): moi diem thuoc dung cap ma chuan
// xep no (vd 把 la HSK3, 着/过 la HSK2). Moi diem co giai thich ngan + vi du + bai tap trac
// nghiem de kiem tra hieu, khong chi hoc thuoc. Khoa (key) cac diem cu giu nguyen de tien
// do da hoc khong mat. HSK1 nam trong file nay, HSK2-6 nam o grammar2/3/4/5/6.js va duoc
// gop lai ben duoi de cac trang dung GRAMMAR_POINTS khong can doi gi ca.
// Cuoi HSK6 con giu lai cac diem cu co nhan "mo rong" (chuan moi xep vao HSK 7-9).
import { HSK2_GRAMMAR } from './grammar2'
import { HSK3_GRAMMAR } from './grammar3'
import { HSK4_GRAMMAR } from './grammar4'
import { HSK5_GRAMMAR } from './grammar5'
import { HSK6_GRAMMAR } from './grammar6'

const HSK1_GRAMMAR = [
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
    key: 'you',
    level: 'HSK1',
    title: '有 / 没有 - Có, không có',
    pattern: 'A + 有 / 没有 + B',
    explanation: 'Dùng 有 để nói sở hữu hoặc nói nơi nào đó có cái gì. Phủ định luôn là 没有 (không bao giờ nói 不有). Hỏi bằng 有...吗？ hoặc 有没有...？',
    examples: [
      { hanzi: '我有一个哥哥。', pinyin: 'Wǒ yǒu yí gè gēge.', meaning: 'Tôi có một anh trai.' },
      { hanzi: '桌子上没有书。', pinyin: 'Zhuōzi shàng méiyǒu shū.', meaning: 'Trên bàn không có sách.' },
      { hanzi: '你有没有手机？', pinyin: 'Nǐ yǒu méiyǒu shǒujī?', meaning: 'Bạn có điện thoại không?' }
    ],
    quiz: [
      { question: '"Tôi không có tiền" dịch đúng là:', options: ['我没有钱。', '我不有钱。', '我没钱有。'] },
      { question: 'Phủ định của 有 là gì?', options: ['没有', '不有', '别有'] },
      { question: '"Trong lớp có ba học sinh" dịch đúng là:', options: ['教室里有三个学生。', '教室里三个学生有。', '有教室里三个学生。'] }
    ]
  },
  {
    key: 'bu-mei',
    level: 'HSK1',
    title: '不 / 没 - Hai cách phủ định',
    pattern: '不 + động từ / tính từ ; 没(有) + động từ',
    explanation: '不 phủ định ý muốn, thói quen, hiện tại, tương lai và đứng trước tính từ. 没(有) phủ định việc đã xảy ra hoặc phủ định 有. Muốn nói "chưa làm" hay "đã không làm" thì dùng 没.',
    examples: [
      { hanzi: '我不喝咖啡。', pinyin: 'Wǒ bù hē kāfēi.', meaning: 'Tôi không uống cà phê.' },
      { hanzi: '他昨天没来。', pinyin: 'Tā zuótiān méi lái.', meaning: 'Hôm qua anh ấy không đến.' },
      { hanzi: '今天不冷。', pinyin: 'Jīntiān bù lěng.', meaning: 'Hôm nay không lạnh.' }
    ],
    quiz: [
      { question: '"Hôm qua tôi không đi học" dịch đúng là:', options: ['我昨天没去上学。', '我昨天不去上学了。', '我昨天没有不去上学。'] },
      { question: '"Tôi không thích ăn cay" dịch đúng là:', options: ['我不喜欢吃辣。', '我没喜欢吃辣。', '我没有吃辣喜欢。'] },
      { question: 'Trước tính từ như 冷, 贵, 好 ta phủ định bằng:', options: ['不', '没', '别'] }
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
    key: 'haishi-zhengfan',
    level: 'HSK1',
    title: '还是 / V不V - Câu hỏi lựa chọn',
    pattern: 'A 还是 B？ ; V + 不 + V？',
    explanation: '还是 dùng để hỏi chọn một trong hai (A hay B). Câu hỏi chính phản lặp lại động từ ở dạng khẳng định rồi phủ định, và không thêm 吗.',
    examples: [
      { hanzi: '你喝茶还是喝咖啡？', pinyin: 'Nǐ hē chá háishi hē kāfēi?', meaning: 'Bạn uống trà hay uống cà phê?' },
      { hanzi: '你去不去？', pinyin: 'Nǐ qù bu qù?', meaning: 'Bạn có đi không?' },
      { hanzi: '他是不是老师？', pinyin: 'Tā shì bu shì lǎoshī?', meaning: 'Anh ấy có phải là giáo viên không?' }
    ],
    quiz: [
      { question: '"Bạn là người Trung Quốc hay người Việt Nam?" dịch đúng là:', options: ['你是中国人还是越南人？', '你是中国人吗还是越南人？', '你是中国人和越南人？'] },
      { question: 'Câu hỏi chính phản nào đúng ngữ pháp?', options: ['你好不好？', '你好不好吗？', '你不好好吗？'] },
      { question: '"Hay" trong câu hỏi lựa chọn là:', options: ['还是', '或者', '和'] }
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
    key: 'he-gen',
    level: 'HSK1',
    title: '和 / 跟 - Và, cùng với',
    pattern: 'A 和 B ; 跟 + người + động từ',
    explanation: '和 nối hai danh từ ("và") hoặc đi với 一起 để nói "cùng với". 跟 cũng có nghĩa "với, cùng". Không dùng 和 để nối hai động từ hay hai câu.',
    examples: [
      { hanzi: '我和妈妈去商店。', pinyin: 'Wǒ hé māma qù shāngdiàn.', meaning: 'Tôi và mẹ đi cửa hàng.' },
      { hanzi: '他跟我一起学汉语。', pinyin: 'Tā gēn wǒ yìqǐ xué Hànyǔ.', meaning: 'Anh ấy học tiếng Trung cùng tôi.' },
      { hanzi: '我有一个姐姐和一个弟弟。', pinyin: 'Wǒ yǒu yí gè jiějie hé yí gè dìdi.', meaning: 'Tôi có một chị gái và một em trai.' }
    ],
    quiz: [
      { question: '"Tôi đi chợ cùng mẹ" dịch đúng là:', options: ['我跟妈妈去市场。', '我去跟妈妈市场。', '我妈妈跟去市场。'] },
      { question: '和 dùng để nối:', options: ['hai danh từ như 苹果和香蕉', 'hai câu hoàn chỉnh', 'hai động từ chỉ hành động khác nhau'] },
      { question: '"Anh ấy học cùng tôi" dịch đúng là:', options: ['他和我一起学习。', '他一起和我学习。', '他和一起我学习。'] }
    ]
  },
  {
    key: 'dou-ye',
    level: 'HSK1',
    title: '都 / 也 - Đều, cũng',
    pattern: 'Chủ ngữ + 都 / 也 + động từ',
    explanation: '都 nghĩa là "đều, tất cả", đi với chủ ngữ số nhiều. 也 nghĩa là "cũng". Cả hai đứng sau chủ ngữ và trước động từ. Dùng chung thì nói 也都 (không nói 都也).',
    examples: [
      { hanzi: '我们都是学生。', pinyin: 'Wǒmen dōu shì xuésheng.', meaning: 'Chúng tôi đều là học sinh.' },
      { hanzi: '我也喜欢吃面条。', pinyin: 'Wǒ yě xǐhuan chī miàntiáo.', meaning: 'Tôi cũng thích ăn mì.' },
      { hanzi: '他们也都去北京。', pinyin: 'Tāmen yě dōu qù Běijīng.', meaning: 'Họ cũng đều đi Bắc Kinh.' }
    ],
    quiz: [
      { question: '"Tôi cũng là sinh viên" dịch đúng là:', options: ['我也是学生。', '我是也学生。', '也我是学生。'] },
      { question: '"Họ đều là bạn bè" dịch đúng là:', options: ['他们都是朋友。', '他们是都朋友。', '都他们是朋友。'] },
      { question: '"Cũng đều" khi ghép hai từ thì nói:', options: ['也都', '都也', '也也'] }
    ]
  },
  {
    key: 'liangci',
    level: 'HSK1',
    title: '量词 个 / 本 / 杯 - Lượng từ',
    pattern: 'Số từ + lượng từ + danh từ',
    explanation: 'Giữa số từ và danh từ phải có lượng từ. 个 dùng được rất rộng. 本 cho sách vở, 杯 cho cốc đồ uống, 口 cho số người trong nhà, 家 cho cửa hàng, công ty. Nói "hai" trước lượng từ dùng 两, không dùng 二.',
    examples: [
      { hanzi: '我买了三本书。', pinyin: 'Wǒ mǎile sān běn shū.', meaning: 'Tôi đã mua ba quyển sách.' },
      { hanzi: '请给我一杯水。', pinyin: 'Qǐng gěi wǒ yì bēi shuǐ.', meaning: 'Làm ơn cho tôi một cốc nước.' },
      { hanzi: '我家有四口人。', pinyin: 'Wǒ jiā yǒu sì kǒu rén.', meaning: 'Nhà tôi có bốn người.' }
    ],
    quiz: [
      { question: '"Hai quyển sách" nói là:', options: ['两本书', '二本书', '两个书'] },
      { question: '"Một cốc cà phê" nói là:', options: ['一杯咖啡', '一本咖啡', '一家咖啡'] },
      { question: 'Lượng từ dùng cho số người trong gia đình là:', options: ['口', '本', '杯'] }
    ]
  },
  {
    key: 'fangwei',
    level: 'HSK1',
    title: '方位词 上 / 下 / 里 / 外 - Nói vị trí',
    pattern: 'Danh từ + 上 / 里 / 前 / 后 ...',
    explanation: 'Đặt sau danh từ để chỉ vị trí: 桌子上 (trên bàn), 教室里 (trong lớp). Có thể thêm 边: 上边, 里边, 前边, 后边. Hay dùng với 在: 在 + nơi + 方位词.',
    examples: [
      { hanzi: '书在桌子上。', pinyin: 'Shū zài zhuōzi shàng.', meaning: 'Sách ở trên bàn.' },
      { hanzi: '学生们在教室里。', pinyin: 'Xuéshengmen zài jiàoshì lǐ.', meaning: 'Các học sinh ở trong lớp.' },
      { hanzi: '我家前边有一个商店。', pinyin: 'Wǒ jiā qiánbian yǒu yí gè shāngdiàn.', meaning: 'Phía trước nhà tôi có một cửa hàng.' }
    ],
    quiz: [
      { question: '"Quyển sách ở trong cặp" dịch đúng là:', options: ['书在书包里。', '书里在书包。', '书在里书包。'] },
      { question: '"Phía sau trường học" nói là:', options: ['学校后边', '后边学校', '学校边后'] },
      { question: '"Trên bàn có một cái cốc" dịch đúng là:', options: ['桌子上有一个杯子。', '上桌子有一个杯子。', '桌子有上一个杯子。'] }
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
    key: 'shijian',
    level: 'HSK1',
    title: '时间表示 - Giờ, thứ, ngày tháng',
    pattern: '几点 / 星期几 / 几月几号',
    explanation: 'Giờ: số + 点 (+ 半 là rưỡi, 一刻 là 15 phút). Thứ: 星期 + số, chủ nhật là 星期天 hoặc 星期日. Ngày: số + 月, số + 号. Thứ tự từ lớn đến nhỏ, và từ chỉ thời gian đứng trước động từ.',
    examples: [
      { hanzi: '现在三点半。', pinyin: 'Xiànzài sān diǎn bàn.', meaning: 'Bây giờ là ba giờ rưỡi.' },
      { hanzi: '今天星期五，十月一号。', pinyin: 'Jīntiān xīngqīwǔ, shíyuè yī hào.', meaning: 'Hôm nay thứ Sáu, ngày 1 tháng 10.' },
      { hanzi: '我每天七点起床。', pinyin: 'Wǒ měi tiān qī diǎn qǐchuáng.', meaning: 'Mỗi ngày tôi dậy lúc bảy giờ.' }
    ],
    quiz: [
      { question: '"2 giờ" nói là:', options: ['两点', '二点', '两个点'] },
      { question: '"Tôi đi học lúc 8 giờ" dịch đúng là:', options: ['我八点去上学。', '我去上学八点。', '我上学去八点。'] },
      { question: '"Thứ Hai" nói là:', options: ['星期一', '一星期', '星期个一'] }
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
    key: 'hui-neng',
    level: 'HSK1',
    title: '会 / 能 - Biết làm, có thể',
    pattern: '会 / 能 + động từ',
    explanation: '会 nói về kỹ năng học mà có (biết nói tiếng Trung, biết bơi). 能 nói về khả năng hoặc điều kiện cho phép (hôm nay có thể đến, sức khỏe cho phép). Phủ định là 不会 / 不能.',
    examples: [
      { hanzi: '我会说汉语。', pinyin: 'Wǒ huì shuō Hànyǔ.', meaning: 'Tôi biết nói tiếng Trung.' },
      { hanzi: '你今天能来吗？', pinyin: 'Nǐ jīntiān néng lái ma?', meaning: 'Hôm nay bạn đến được không?' },
      { hanzi: '他不会游泳。', pinyin: 'Tā bú huì yóuyǒng.', meaning: 'Anh ấy không biết bơi.' }
    ],
    quiz: [
      { question: '"Tôi biết nấu ăn" dịch đúng là:', options: ['我会做饭。', '我能会做饭。', '我做饭会。'] },
      { question: '"Tôi bị ốm nên không thể đi" dịch đúng là:', options: ['我病了，不能去。', '我病了，没会去。', '我病了，不要能去。'] },
      { question: 'Kỹ năng học mà có, như biết bơi, dùng:', options: ['会', '能', '要'] }
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
    key: 'zhengzai',
    level: 'HSK1',
    title: '正在...呢 - Đang làm gì',
    pattern: '正在 + động từ (+ 呢)',
    explanation: 'Diễn tả hành động đang diễn ra tại thời điểm nói, giống "đang" trong tiếng Việt.',
    examples: [
      { hanzi: '我正在吃饭呢。', pinyin: 'Wǒ zhèngzài chīfàn ne.', meaning: 'Tôi đang ăn cơm.' },
      { hanzi: '他正在打电话。', pinyin: 'Tā zhèngzài dǎ diànhuà.', meaning: 'Anh ấy đang gọi điện thoại.' },
      { hanzi: '你正在做什么呢？', pinyin: 'Nǐ zhèngzài zuò shénme ne?', meaning: 'Bạn đang làm gì vậy?' }
    ],
    quiz: [
      { question: '"Tôi đang xem tivi" dịch đúng là:', options: ['我正在看电视。', '我看正在电视。', '我电视正在看。'] },
      { question: 'Từ nào diễn tả hành động đang diễn ra?', options: ['正在', '已经', '就要'] },
      { question: '他____打电话呢。 Chọn từ đúng:', options: ['正在', '了', '过'] }
    ]
  },
  {
    key: 'bi',
    level: 'HSK1',
    title: '比 - So sánh hơn',
    pattern: 'A + 比 + B + tính từ',
    explanation: 'Dùng để so sánh A hơn B ở một đặc điểm nào đó.',
    examples: [
      { hanzi: '今天比昨天冷。', pinyin: 'Jīntiān bǐ zuótiān lěng.', meaning: 'Hôm nay lạnh hơn hôm qua.' },
      { hanzi: '他比我高。', pinyin: 'Tā bǐ wǒ gāo.', meaning: 'Anh ấy cao hơn tôi.' },
      { hanzi: '这个比那个贵。', pinyin: 'Zhège bǐ nàge guì.', meaning: 'Cái này đắt hơn cái kia.' }
    ],
    quiz: [
      { question: '"Chị gái tôi lớn hơn tôi" dịch đúng là:', options: ['我姐姐比我大。', '我姐姐大比我。', '比我姐姐大。'] },
      { question: 'Cấu trúc đúng của câu so sánh 比 là:', options: ['A + 比 + B + tính từ', 'A + tính từ + 比 + B', '比 + A + B + tính từ'] },
      { question: '"Quyển sách này dày hơn quyển kia" dịch đúng là:', options: ['这本书比那本厚。', '这本书厚比那本。', '比这本书那本厚。'] }
    ]
  }
]

export const GRAMMAR_POINTS = [
  ...HSK1_GRAMMAR,
  ...HSK2_GRAMMAR,
  ...HSK3_GRAMMAR,
  ...HSK4_GRAMMAR,
  ...HSK5_GRAMMAR,
  ...HSK6_GRAMMAR
]

export function getGrammarPoint(key) {
  return GRAMMAR_POINTS.find((g) => g.key === key)
}
