// Truyen dai bo sung cho HSK1-HSK5: truyen dan gian / thanh ngu co dien cua Trung
// Quoc (thuoc kho tang chung, khong vuong ban quyen), soan lai voi cau van dung
// theo tung cap do. Cung cau truc voi stories.js: chuong -> cau {hanzi, pinyin,
// meaning} va bai doc hieu cuoi truyen, trong do options[0] la dap an dung.
export const STORIES_MORE = [
  {
    key: 'ba-luobo',
    icon: '🥕',
    title: 'Nhổ củ cải',
    level: 'HSK1',
    chapters: [
      {
        title: 'Phần 1: Củ cải khổng lồ',
        lines: [
          { hanzi: '老爷爷种了一个大萝卜。', pinyin: 'Lǎoyéye zhòngle yí gè dà luóbo.', meaning: 'Ông cụ trồng một củ cải to.' },
          { hanzi: '他说："萝卜，萝卜，快长大！"', pinyin: 'Tā shuō: "Luóbo, luóbo, kuài zhǎngdà!"', meaning: 'Ông nói: "Củ cải ơi, củ cải ơi, mau lớn nào!"' },
          { hanzi: '萝卜长得很大很大。', pinyin: 'Luóbo zhǎng de hěn dà hěn dà.', meaning: 'Củ cải lớn thật là lớn.' }
        ]
      },
      {
        title: 'Phần 2: Nhổ không nổi',
        lines: [
          { hanzi: '老爷爷去拔萝卜，可是拔不动。', pinyin: 'Lǎoyéye qù bá luóbo, kěshì bá bu dòng.', meaning: 'Ông cụ đi nhổ củ cải nhưng nhổ không nổi.' },
          { hanzi: '他叫来了老奶奶。', pinyin: 'Tā jiàolái le lǎonǎinai.', meaning: 'Ông gọi bà cụ đến.' },
          { hanzi: '老爷爷拉着萝卜，老奶奶拉着老爷爷，还是拔不出来。', pinyin: 'Lǎoyéye lāzhe luóbo, lǎonǎinai lāzhe lǎoyéye, háishi bá bu chūlái.', meaning: 'Ông kéo củ cải, bà kéo ông, vẫn không nhổ lên được.' },
          { hanzi: '后来小女孩、小狗和小猫也来帮忙。', pinyin: 'Hòulái xiǎo nǚhái, xiǎogǒu hé xiǎomāo yě lái bāngmáng.', meaning: 'Sau đó bé gái, chó con và mèo con cũng đến giúp.' }
        ]
      },
      {
        title: 'Phần 3: Cùng nhau cố gắng',
        lines: [
          { hanzi: '最后，一只小老鼠也来了。', pinyin: 'Zuìhòu, yì zhī xiǎo lǎoshǔ yě lái le.', meaning: 'Cuối cùng, một chú chuột nhỏ cũng đến.' },
          { hanzi: '大家一起用力拉："一，二，三！"', pinyin: 'Dàjiā yìqǐ yònglì lā: "Yī, èr, sān!"', meaning: 'Mọi người cùng dùng sức kéo: "Một, hai, ba!"' },
          { hanzi: '萝卜拔出来了！大家都很高兴。', pinyin: 'Luóbo bá chūlái le! Dàjiā dōu hěn gāoxìng.', meaning: 'Củ cải nhổ lên được rồi! Mọi người đều rất vui.' }
        ]
      }
    ],
    quiz: [
      { question: '老爷爷种了什么？', options: ['大萝卜', '大白菜', '大苹果'] },
      { question: '最后谁来帮忙？', options: ['小老鼠', '小鸟', '小鱼'] },
      { question: '萝卜是怎么拔出来的？', options: ['大家一起用力拉', '老爷爷一个人拔', '用刀切出来'] }
    ]
  },
  {
    key: 'shouzhu-daitu',
    icon: '🐰',
    title: 'Ôm cây đợi thỏ',
    level: 'HSK2',
    chapters: [
      {
        title: 'Phần 1: May mắn bất ngờ',
        lines: [
          { hanzi: '很久以前，有一个农夫，每天都在田里工作。', pinyin: 'Hěn jiǔ yǐqián, yǒu yí gè nóngfū, měitiān dōu zài tián lǐ gōngzuò.', meaning: 'Ngày xưa có một người nông dân, ngày nào cũng làm việc trên ruộng.' },
          { hanzi: '田里有一棵大树。', pinyin: 'Tián lǐ yǒu yì kē dà shù.', meaning: 'Trong ruộng có một cây to.' },
          { hanzi: '有一天，一只兔子跑得很快，一下子撞到了树上，死了。', pinyin: 'Yǒu yì tiān, yì zhī tùzi pǎo de hěn kuài, yíxiàzi zhuàngdàole shù shàng, sǐ le.', meaning: 'Một hôm, một con thỏ chạy rất nhanh, bỗng đâm vào cây và chết.' },
          { hanzi: '农夫很高兴，拿着兔子回家了。', pinyin: 'Nóngfū hěn gāoxìng, názhe tùzi huíjiā le.', meaning: 'Người nông dân rất vui, cầm con thỏ về nhà.' }
        ]
      },
      {
        title: 'Phần 2: Ý nghĩ lười biếng',
        lines: [
          { hanzi: '农夫想："不用工作也有兔子吃，多好啊！"', pinyin: 'Nóngfū xiǎng: "Bú yòng gōngzuò yě yǒu tùzi chī, duō hǎo a!"', meaning: 'Người nông dân nghĩ: "Không cần làm việc cũng có thỏ ăn, tốt biết bao!"' },
          { hanzi: '从那天起，他不再种田，每天坐在大树旁边等兔子。', pinyin: 'Cóng nà tiān qǐ, tā bú zài zhòngtián, měitiān zuò zài dà shù pángbiān děng tùzi.', meaning: 'Từ hôm đó, ông không cày cấy nữa, ngày nào cũng ngồi bên gốc cây đợi thỏ.' }
        ]
      },
      {
        title: 'Phần 3: Chẳng được gì',
        lines: [
          { hanzi: '一天，两天，三天……再也没有兔子撞到树上。', pinyin: 'Yì tiān, liǎng tiān, sān tiān…… zài yě méiyǒu tùzi zhuàngdào shù shàng.', meaning: 'Một ngày, hai ngày, ba ngày... không còn con thỏ nào đâm vào cây nữa.' },
          { hanzi: '田里的草长得比菜还高，农夫什么也没有吃到。', pinyin: 'Tián lǐ de cǎo zhǎng de bǐ cài hái gāo, nóngfū shénme yě méiyǒu chīdào.', meaning: 'Cỏ trong ruộng mọc cao hơn cả rau, người nông dân chẳng có gì để ăn.' },
          { hanzi: '别人都笑他太笨了。', pinyin: 'Biérén dōu xiào tā tài bèn le.', meaning: 'Ai cũng cười ông quá ngốc.' }
        ]
      }
    ],
    quiz: [
      { question: '兔子为什么死了？', options: ['撞到了树上', '生病了', '被狗咬了'] },
      { question: '以后农夫每天做什么？', options: ['坐在树旁边等兔子', '去田里种菜', '去山上打猎'] },
      { question: '最后农夫怎么样了？', options: ['什么也没有吃到', '又得到很多兔子', '找到了新工作'] }
    ]
  },
  {
    key: 'hujia-huwei',
    icon: '🦊',
    title: 'Cáo mượn oai hùm',
    level: 'HSK3',
    chapters: [
      {
        title: 'Phần 1: Hổ bắt được cáo',
        lines: [
          { hanzi: '森林里有一只老虎，它很饿，想找东西吃。', pinyin: 'Sēnlín lǐ yǒu yì zhī lǎohǔ, tā hěn è, xiǎng zhǎo dōngxi chī.', meaning: 'Trong rừng có một con hổ, nó rất đói, muốn tìm đồ ăn.' },
          { hanzi: '走着走着，它抓到了一只狐狸。', pinyin: 'Zǒuzhe zǒuzhe, tā zhuādàole yì zhī húli.', meaning: 'Đi mãi đi mãi, nó bắt được một con cáo.' },
          { hanzi: '老虎张开大嘴，说："我要吃了你！"', pinyin: 'Lǎohǔ zhāngkāi dà zuǐ, shuō: "Wǒ yào chīle nǐ!"', meaning: 'Hổ há to miệng, nói: "Ta sẽ ăn thịt ngươi!"' }
        ]
      },
      {
        title: 'Phần 2: Mưu kế của cáo',
        lines: [
          { hanzi: '狐狸一点儿也不害怕，它想了想，说："你不能吃我！"', pinyin: 'Húli yìdiǎnr yě bú hàipà, tā xiǎngle xiǎng, shuō: "Nǐ bù néng chī wǒ!"', meaning: 'Cáo chẳng sợ chút nào, nghĩ một lát rồi nói: "Ngươi không được ăn ta!"' },
          { hanzi: '"天帝派我来做百兽之王，你要是吃了我，天帝一定会生气的。"', pinyin: '"Tiāndì pài wǒ lái zuò bǎishòu zhī wáng, nǐ yàoshi chīle wǒ, Tiāndì yídìng huì shēngqì de."', meaning: '"Thiên Đế cử ta làm vua của muôn thú, ngươi mà ăn ta thì Thiên Đế nhất định sẽ nổi giận."' },
          { hanzi: '老虎不相信，狐狸说："不信的话，你跟在我后面，看看动物们怕不怕我。"', pinyin: 'Lǎohǔ bù xiāngxìn, húli shuō: "Bú xìn dehuà, nǐ gēn zài wǒ hòumiàn, kànkan dòngwùmen pà bu pà wǒ."', meaning: 'Hổ không tin, cáo nói: "Không tin thì ngươi đi theo sau ta, xem các con vật có sợ ta không."' }
        ]
      },
      {
        title: 'Phần 3: Ai mới đáng sợ',
        lines: [
          { hanzi: '狐狸走在前面，老虎跟在后面。', pinyin: 'Húli zǒu zài qiánmiàn, lǎohǔ gēn zài hòumiàn.', meaning: 'Cáo đi phía trước, hổ đi theo phía sau.' },
          { hanzi: '森林里的动物看见老虎，都吓得逃走了。', pinyin: 'Sēnlín lǐ de dòngwù kànjiàn lǎohǔ, dōu xià de táozǒu le.', meaning: 'Các con vật trong rừng thấy hổ đều sợ chạy hết.' },
          { hanzi: '老虎以为动物们怕的是狐狸，就放了狐狸。', pinyin: 'Lǎohǔ yǐwéi dòngwùmen pà de shì húli, jiù fàngle húli.', meaning: 'Hổ tưởng các con vật sợ cáo nên thả cáo ra.' },
          { hanzi: '其实，动物们怕的是老虎。后来人们用"狐假虎威"形容借别人的势力欺负人。', pinyin: 'Qíshí, dòngwùmen pà de shì lǎohǔ. Hòulái rénmen yòng "hú jiǎ hǔ wēi" xíngróng jiè biérén de shìlì qīfu rén.', meaning: 'Thật ra các con vật sợ là hổ. Về sau người ta dùng "cáo mượn oai hùm" để chỉ kẻ mượn thế người khác để bắt nạt người.' }
        ]
      }
    ],
    quiz: [
      { question: '狐狸说是谁派它来做百兽之王的？', options: ['天帝', '老虎', '森林里的动物'] },
      { question: '动物们看见了谁，才吓得逃走？', options: ['老虎', '狐狸', '天帝'] },
      { question: '"狐假虎威"形容什么样的人？', options: ['借别人的势力欺负人', '非常勇敢的人', '喜欢帮助别人的人'] }
    ]
  },
  {
    key: 'wangyang-bulao',
    icon: '🐑',
    title: 'Mất cừu sửa chuồng',
    level: 'HSK3',
    chapters: [
      {
        title: 'Phần 1: Chuồng cừu bị thủng',
        lines: [
          { hanzi: '从前有一个人，养了很多羊。', pinyin: 'Cóngqián yǒu yí gè rén, yǎngle hěn duō yáng.', meaning: 'Ngày xưa có một người nuôi rất nhiều cừu.' },
          { hanzi: '有一天早上，他发现羊圈破了一个洞，少了一只羊。', pinyin: 'Yǒu yì tiān zǎoshang, tā fāxiàn yángquān pòle yí gè dòng, shǎole yì zhī yáng.', meaning: 'Một buổi sáng, ông phát hiện chuồng cừu thủng một lỗ và mất một con cừu.' },
          { hanzi: '邻居劝他："快把洞补好吧，不然还会丢羊的。"', pinyin: 'Línjū quàn tā: "Kuài bǎ dòng bǔ hǎo ba, bùrán hái huì diū yáng de."', meaning: 'Hàng xóm khuyên ông: "Mau vá cái lỗ lại đi, không thì còn mất cừu nữa."' },
          { hanzi: '他不听，说："羊已经丢了，补洞有什么用？"', pinyin: 'Tā bù tīng, shuō: "Yáng yǐjīng diū le, bǔ dòng yǒu shénme yòng?"', meaning: 'Ông không nghe, nói: "Cừu đã mất rồi, vá lỗ thì có ích gì?"' }
        ]
      },
      {
        title: 'Phần 2: Hối hận',
        lines: [
          { hanzi: '第二天，他又发现少了一只羊，原来是狼从洞里钻进来叼走的。', pinyin: 'Dì-èr tiān, tā yòu fāxiàn shǎole yì zhī yáng, yuánlái shì láng cóng dòng lǐ zuānjìnlái diāozǒu de.', meaning: 'Hôm sau, ông lại thấy mất thêm một con, hóa ra là sói chui qua lỗ vào tha đi.' },
          { hanzi: '他很后悔，赶紧找来木头和工具，把洞补好了。', pinyin: 'Tā hěn hòuhuǐ, gǎnjǐn zhǎolái mùtou hé gōngjù, bǎ dòng bǔ hǎo le.', meaning: 'Ông rất hối hận, vội tìm gỗ và dụng cụ, vá kín cái lỗ.' }
        ]
      },
      {
        title: 'Phần 3: Bài học',
        lines: [
          { hanzi: '从那以后，羊再也没有丢过。', pinyin: 'Cóng nà yǐhòu, yáng zài yě méiyǒu diūguo.', meaning: 'Từ đó về sau, cừu không mất con nào nữa.' },
          { hanzi: '这个故事告诉我们：犯了错误以后，只要马上改正，就不会再有更大的损失。', pinyin: 'Zhège gùshi gàosu wǒmen: fànle cuòwù yǐhòu, zhǐyào mǎshàng gǎizhèng, jiù bú huì zài yǒu gèng dà de sǔnshī.', meaning: 'Câu chuyện cho ta biết: phạm lỗi rồi, chỉ cần sửa ngay thì sẽ không chịu tổn thất lớn hơn.' }
        ]
      }
    ],
    quiz: [
      { question: '羊为什么会丢？', options: ['羊圈破了一个洞，狼钻了进来', '羊自己跑走了', '被邻居借走了'] },
      { question: '第一次丢羊以后，他是怎么做的？', options: ['没有听邻居的话，不补洞', '马上补好了洞', '把所有的羊都卖了'] },
      { question: '这个故事告诉我们什么？', options: ['犯了错误要马上改正', '不要养羊', '邻居的话不用听'] }
    ]
  },
  {
    key: 'jingdi-zhiwa',
    icon: '🐸',
    title: 'Ếch ngồi đáy giếng',
    level: 'HSK4',
    chapters: [
      {
        title: 'Phần 1: Thế giới trong giếng',
        lines: [
          { hanzi: '一口很深的井里住着一只青蛙，它从来没有离开过这口井。', pinyin: 'Yì kǒu hěn shēn de jǐng lǐ zhùzhe yì zhī qīngwā, tā cónglái méiyǒu líkāiguo zhè kǒu jǐng.', meaning: 'Trong một cái giếng rất sâu có một con ếch, nó chưa bao giờ rời khỏi giếng.' },
          { hanzi: '它每天看着头顶那一小片天空，觉得自己是世界上最幸福的动物。', pinyin: 'Tā měitiān kànzhe tóudǐng nà yì xiǎo piàn tiānkōng, juéde zìjǐ shì shìjiè shàng zuì xìngfú de dòngwù.', meaning: 'Mỗi ngày nó ngắm mảnh trời nhỏ trên đầu, tưởng mình là con vật hạnh phúc nhất thế giới.' },
          { hanzi: '一天，一只从海边来的大海龟路过井口。', pinyin: 'Yì tiān, yì zhī cóng hǎibiān lái de dà hǎiguī lùguò jǐngkǒu.', meaning: 'Một hôm, một con rùa biển lớn từ bờ biển đi ngang miệng giếng.' }
        ]
      },
      {
        title: 'Phần 2: Lời mời của ếch',
        lines: [
          { hanzi: '青蛙骄傲地说："朋友，快进来看看我的家！这里有清凉的水，还有软软的泥。"', pinyin: 'Qīngwā jiāo\'ào de shuō: "Péngyou, kuài jìnlái kànkan wǒ de jiā! Zhèlǐ yǒu qīngliáng de shuǐ, hái yǒu ruǎnruǎn de ní."', meaning: 'Ếch kiêu hãnh nói: "Bạn ơi, mau vào xem nhà tôi! Ở đây có nước mát và bùn mềm."' },
          { hanzi: '海龟想进去，可是左脚还没伸进去，右脚就被卡住了。', pinyin: 'Hǎiguī xiǎng jìnqù, kěshì zuǒ jiǎo hái méi shēnjìnqù, yòu jiǎo jiù bèi qiǎzhù le.', meaning: 'Rùa biển muốn vào, nhưng chân trái chưa kịp thò vào thì chân phải đã bị kẹt.' },
          { hanzi: '海龟只好退了出来，给青蛙讲起了大海。', pinyin: 'Hǎiguī zhǐhǎo tuìle chūlái, gěi qīngwā jiǎngqǐle dàhǎi.', meaning: 'Rùa biển đành lui ra, kể cho ếch nghe về biển cả.' }
        ]
      },
      {
        title: 'Phần 3: Biển cả mênh mông',
        lines: [
          { hanzi: '"大海非常大，一千里也比不上它的宽，一千丈也比不上它的深。"', pinyin: '"Dàhǎi fēicháng dà, yì qiān lǐ yě bǐ bu shàng tā de kuān, yì qiān zhàng yě bǐ bu shàng tā de shēn."', meaning: '"Biển vô cùng rộng, nghìn dặm cũng không sánh được bề rộng của nó, nghìn trượng cũng không sánh được độ sâu."' },
          { hanzi: '青蛙听了，惊讶得说不出话来，这才知道自己的世界有多么小。', pinyin: 'Qīngwā tīngle, jīngyà de shuō bu chū huà lái, zhè cái zhīdào zìjǐ de shìjiè yǒu duōme xiǎo.', meaning: 'Ếch nghe xong, kinh ngạc không nói nên lời, lúc này mới biết thế giới của mình nhỏ bé nhường nào.' },
          { hanzi: '后来人们用"井底之蛙"形容见识狭小、却自以为是的人。', pinyin: 'Hòulái rénmen yòng "jǐngdǐ zhī wā" xíngróng jiànshi xiáxiǎo, què zìyǐwéishì de rén.', meaning: 'Về sau người ta dùng "ếch ngồi đáy giếng" để chỉ người hiểu biết hạn hẹp mà lại tự cho mình là đúng.' }
        ]
      }
    ],
    quiz: [
      { question: '青蛙觉得自己的家怎么样？', options: ['世界上最幸福的地方', '又小又黑', '不太舒服'] },
      { question: '海龟为什么没有进到井里？', options: ['右脚被卡住了', '它不想进去', '井里有水蛇'] },
      { question: '"井底之蛙"形容什么样的人？', options: ['见识狭小却自以为是', '非常喜欢游泳', '住在很深的地方'] }
    ]
  },
  {
    key: 'yaner-daoling',
    icon: '🔔',
    title: 'Bịt tai trộm chuông',
    level: 'HSK4',
    chapters: [
      {
        title: 'Phần 1: Chiếc chuông lớn',
        lines: [
          { hanzi: '古时候，有一个小偷，看中了一户人家门前的一口大钟。', pinyin: 'Gǔ shíhou, yǒu yí gè xiǎotōu, kànzhòngle yì hù rénjiā mén qián de yì kǒu dà zhōng.', meaning: 'Ngày xưa có một tên trộm để mắt tới chiếc chuông lớn trước cửa một nhà.' },
          { hanzi: '钟又大又重，他一个人搬不走，就想把钟砸碎，再一块一块地带走。', pinyin: 'Zhōng yòu dà yòu zhòng, tā yí gè rén bān bu zǒu, jiù xiǎng bǎ zhōng zásuì, zài yí kuài yí kuài de dàizǒu.', meaning: 'Chuông vừa to vừa nặng, một mình hắn khiêng không nổi, bèn định đập vỡ rồi mang đi từng mảnh.' }
        ]
      },
      {
        title: 'Phần 2: Cách nghĩ ngây ngô',
        lines: [
          { hanzi: '可是，他刚一敲，钟就发出了"当"的一声巨响。', pinyin: 'Kěshì, tā gāng yì qiāo, zhōng jiù fāchūle "dāng" de yì shēng jùxiǎng.', meaning: 'Nhưng hắn vừa gõ một cái, chuông đã vang lên một tiếng "coong" rất lớn.' },
          { hanzi: '小偷吓了一跳，怕别人听见，赶紧用手捂住了自己的耳朵。', pinyin: 'Xiǎotōu xiàle yí tiào, pà biérén tīngjiàn, gǎnjǐn yòng shǒu wǔzhùle zìjǐ de ěrduo.', meaning: 'Tên trộm giật mình, sợ người khác nghe thấy, vội lấy tay bịt tai mình lại.' },
          { hanzi: '"咦？我听不见了！"他高兴地想，"别人也一定听不见！"', pinyin: '"Yí? Wǒ tīng bu jiàn le!" Tā gāoxìng de xiǎng, "biérén yě yídìng tīng bu jiàn!"', meaning: '"Ơ? Ta không nghe thấy nữa rồi!" Hắn vui mừng nghĩ: "Người khác chắc chắn cũng không nghe thấy!"' }
        ]
      },
      {
        title: 'Phần 3: Bị bắt tại trận',
        lines: [
          { hanzi: '于是他放心地大力敲钟，钟声传得很远很远。', pinyin: 'Yúshì tā fàngxīn de dàlì qiāo zhōng, zhōngshēng chuán de hěn yuǎn hěn yuǎn.', meaning: 'Thế là hắn yên tâm gõ chuông thật mạnh, tiếng chuông vang đi rất xa.' },
          { hanzi: '人们听到声音跑了过来，把小偷抓住了。', pinyin: 'Rénmen tīngdào shēngyīn pǎole guòlái, bǎ xiǎotōu zhuāzhù le.', meaning: 'Mọi người nghe tiếng chạy tới, bắt được tên trộm.' },
          { hanzi: '后来人们用"掩耳盗铃"形容自己欺骗自己，做事愚蠢。', pinyin: 'Hòulái rénmen yòng "yǎn ěr dào líng" xíngróng zìjǐ qīpiàn zìjǐ, zuò shì yúchǔn.', meaning: 'Về sau người ta dùng "bịt tai trộm chuông" để chỉ kẻ tự lừa mình, làm việc dại dột.' }
        ]
      }
    ],
    quiz: [
      { question: '小偷为什么要把钟砸碎？', options: ['钟太重，他搬不走', '他不喜欢这口钟', '钟已经坏了'] },
      { question: '小偷为什么捂住耳朵？', options: ['怕别人听见钟声', '钟声太吵了', '耳朵很疼'] },
      { question: '最后小偷怎么样了？', options: ['被人们抓住了', '带着钟跑了', '把钟卖了很多钱'] }
    ]
  },
  {
    key: 'kezhou-qiujian',
    icon: '🚣',
    title: 'Khắc thuyền tìm kiếm',
    level: 'HSK5',
    chapters: [
      {
        title: 'Phần 1: Thanh kiếm rơi xuống sông',
        lines: [
          { hanzi: '战国时期，楚国有一个人坐船过江。', pinyin: 'Zhànguó shíqī, Chǔguó yǒu yí gè rén zuò chuán guòjiāng.', meaning: 'Thời Chiến Quốc, nước Sở có một người đi thuyền qua sông.' },
          { hanzi: '船到江中间的时候，他腰上的一把宝剑不小心掉进了水里。', pinyin: 'Chuán dào jiāng zhōngjiān de shíhou, tā yāo shàng de yì bǎ bǎojiàn bù xiǎoxīn diàojìnle shuǐ lǐ.', meaning: 'Khi thuyền đến giữa sông, thanh bảo kiếm bên hông ông vô ý rơi xuống nước.' },
          { hanzi: '别人都替他着急，他却不慌不忙，拿出小刀，在船边刻了一个记号。', pinyin: 'Biérén dōu tì tā zháojí, tā què bù huāng bù máng, náchū xiǎodāo, zài chuán biān kèle yí gè jìhao.', meaning: 'Mọi người đều sốt ruột thay ông, ông lại thong thả lấy dao nhỏ khắc một dấu bên mạn thuyền.' }
        ]
      },
      {
        title: 'Phần 2: Cách làm "thông minh"',
        lines: [
          { hanzi: '他说："这就是我的剑掉下去的地方，等船靠岸以后，我就从这儿下水去找。"', pinyin: 'Tā shuō: "Zhè jiùshì wǒ de jiàn diào xiàqù de dìfang, děng chuán kào\'àn yǐhòu, wǒ jiù cóng zhèr xiàshuǐ qù zhǎo."', meaning: 'Ông nói: "Đây chính là chỗ kiếm của ta rơi xuống, đợi thuyền cập bến, ta sẽ xuống nước từ chỗ này để tìm."' },
          { hanzi: '旁边的人提醒他：船一直在向前走，可是剑却留在原来的地方。', pinyin: 'Pángbiān de rén tíxǐng tā: chuán yìzhí zài xiàng qián zǒu, kěshì jiàn què liú zài yuánlái de dìfang.', meaning: 'Người bên cạnh nhắc ông: thuyền cứ tiến về phía trước, còn thanh kiếm thì vẫn ở chỗ cũ.' },
          { hanzi: '他不听，坚持认为自己的办法很聪明。', pinyin: 'Tā bù tīng, jiānchí rènwéi zìjǐ de bànfǎ hěn cōngming.', meaning: 'Ông không nghe, khăng khăng cho rằng cách của mình rất khôn ngoan.' }
        ]
      },
      {
        title: 'Phần 3: Công cốc',
        lines: [
          { hanzi: '船靠了岸，他马上从刻记号的地方跳下水去找剑。', pinyin: 'Chuán kàole àn, tā mǎshàng cóng kè jìhao de dìfang tiàoxià shuǐ qù zhǎo jiàn.', meaning: 'Thuyền cập bến, ông lập tức nhảy xuống nước từ chỗ có dấu khắc để tìm kiếm.' },
          { hanzi: '可是，他找了很久，什么也没有找到。', pinyin: 'Kěshì, tā zhǎole hěn jiǔ, shénme yě méiyǒu zhǎodào.', meaning: 'Nhưng ông tìm rất lâu mà chẳng thấy gì.' },
          { hanzi: '后来人们用"刻舟求剑"比喻不懂得根据情况的变化来处理问题。', pinyin: 'Hòulái rénmen yòng "kè zhōu qiú jiàn" bǐyù bù dǒngde gēnjù qíngkuàng de biànhuà lái chǔlǐ wèntí.', meaning: 'Về sau người ta dùng "khắc thuyền tìm kiếm" để ví người không biết xử lý vấn đề theo sự thay đổi của hoàn cảnh.' }
        ]
      }
    ],
    quiz: [
      { question: '他的剑是怎么掉进水里的？', options: ['不小心掉的', '被别人抢走的', '他故意扔的'] },
      { question: '他在船边刻记号是为了什么？', options: ['记住剑掉下去的地方', '给船做装饰', '记住过江的时间'] },
      { question: '他为什么没有找到剑？', options: ['船在走，剑还在原来的地方', '水太浅了', '别人先找到了'] },
      { question: '"刻舟求剑"比喻什么？', options: ['不懂得根据变化处理问题', '做事很认真', '很会游泳'] }
    ]
  },
  {
    key: 'caochong-chengxiang',
    icon: '🐘',
    title: 'Tào Xung cân voi',
    level: 'HSK5',
    chapters: [
      {
        title: 'Phần 1: Con voi quá nặng',
        lines: [
          { hanzi: '三国时期，有人给曹操送来了一头大象。', pinyin: 'Sānguó shíqī, yǒu rén gěi Cáo Cāo sònglái le yì tóu dàxiàng.', meaning: 'Thời Tam Quốc, có người tặng Tào Tháo một con voi lớn.' },
          { hanzi: '曹操很想知道这头大象有多重，可是当时没有那么大的秤。', pinyin: 'Cáo Cāo hěn xiǎng zhīdào zhè tóu dàxiàng yǒu duō zhòng, kěshì dāngshí méiyǒu nàme dà de chèng.', meaning: 'Tào Tháo rất muốn biết con voi này nặng bao nhiêu, nhưng lúc đó không có chiếc cân nào lớn như vậy.' },
          { hanzi: '有人说要造一杆特别大的秤，有人说要把大象切成小块，可是没有一个办法行得通。', pinyin: 'Yǒu rén shuō yào zào yì gǎn tèbié dà de chèng, yǒu rén shuō yào bǎ dàxiàng qiēchéng xiǎo kuài, kěshì méiyǒu yí gè bànfǎ xíng de tōng.', meaning: 'Có người bảo làm một chiếc cân thật lớn, có người bảo chặt voi thành từng khúc, nhưng chẳng cách nào khả thi.' }
        ]
      },
      {
        title: 'Phần 2: Sáng kiến của cậu bé',
        lines: [
          { hanzi: '这时，曹操只有七岁的儿子曹冲站了出来，说："我有办法！"', pinyin: 'Zhè shí, Cáo Cāo zhǐyǒu qī suì de érzi Cáo Chōng zhànle chūlái, shuō: "Wǒ yǒu bànfǎ!"', meaning: 'Lúc ấy, Tào Xung, con trai mới bảy tuổi của Tào Tháo, bước ra nói: "Con có cách!"' },
          { hanzi: '他让人把大象牵到一条大船上，在船身被水淹没的地方刻上一道线。', pinyin: 'Tā ràng rén bǎ dàxiàng qiāndào yì tiáo dà chuán shàng, zài chuánshēn bèi shuǐ yānmò de dìfang kèshàng yí dào xiàn.', meaning: 'Cậu bảo người dắt voi lên một chiếc thuyền lớn, khắc một vạch ở chỗ thân thuyền chìm xuống nước.' },
          { hanzi: '然后把大象牵下船，往船上装石头，直到水面碰到刚才刻的那条线为止。', pinyin: 'Ránhòu bǎ dàxiàng qiānxià chuán, wǎng chuán shàng zhuāng shítou, zhídào shuǐmiàn pèngdào gāngcái kè de nà tiáo xiàn wéizhǐ.', meaning: 'Sau đó dắt voi xuống thuyền, chất đá lên thuyền cho đến khi mặt nước chạm tới vạch vừa khắc.' }
        ]
      },
      {
        title: 'Phần 3: Đáp án bất ngờ',
        lines: [
          { hanzi: '石头的重量就等于大象的重量。', pinyin: 'Shítou de zhòngliàng jiù děngyú dàxiàng de zhòngliàng.', meaning: 'Trọng lượng của đá chính bằng trọng lượng của con voi.' },
          { hanzi: '最后，只要把这些石头一块一块地称出来，再加起来，就知道大象有多重了。', pinyin: 'Zuìhòu, zhǐyào bǎ zhèxiē shítou yí kuài yí kuài de chēng chūlái, zài jiā qǐlái, jiù zhīdào dàxiàng yǒu duō zhòng le.', meaning: 'Cuối cùng, chỉ cần cân từng hòn đá rồi cộng lại là biết voi nặng bao nhiêu.' },
          { hanzi: '曹操和大臣们都夸曹冲聪明，觉得他小小年纪就这么会动脑筋。', pinyin: 'Cáo Cāo hé dàchénmen dōu kuā Cáo Chōng cōngming, juéde tā xiǎoxiǎo niánjì jiù zhème huì dòng nǎojīn.', meaning: 'Tào Tháo và các đại thần đều khen Tào Xung thông minh, thấy cậu nhỏ tuổi mà đã biết suy nghĩ như vậy.' }
        ]
      }
    ],
    quiz: [
      { question: '大人们为什么不能给大象称重？', options: ['没有那么大的秤', '大象不愿意', '大象跑走了'] },
      { question: '曹冲让人把大象牵到哪里？', options: ['大船上', '大桥上', '大山上'] },
      { question: '水面碰到刻的线以后，船上装的是什么？', options: ['石头', '水', '粮食'] },
      { question: '曹冲的办法是什么原理？', options: ['石头的重量等于大象的重量', '大象比石头轻', '船越大越重'] }
    ]
  }
]
