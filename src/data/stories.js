// Truyen dai chia nhieu chuong, tu soan va kiem tra pinyin/thanh dieu thu cong
// (giong cach lam voi hoi thoai), dung tu vung co ban HSK1-2 de nguoi moi hoc
// van doc hieu duoc. Moi truyen co cau hoi doc hieu cuoi truyen.
export const STORIES = [
  {
    key: 'meo-con-tim-ban',
    icon: '🐱',
    title: 'Mèo con tìm bạn',
    level: 'HSK1',
    chapters: [
      {
        title: 'Phần 1: Một mình',
        lines: [
          { hanzi: '小猫住在森林里。', pinyin: 'Xiǎomāo zhù zài sēnlín lǐ.', meaning: 'Mèo con sống trong khu rừng.' },
          { hanzi: '它每天一个人玩。', pinyin: 'Tā měitiān yí gè rén wán.', meaning: 'Mỗi ngày nó chơi một mình.' },
          { hanzi: '它很想有朋友。', pinyin: 'Tā hěn xiǎng yǒu péngyou.', meaning: 'Nó rất muốn có bạn.' }
        ]
      },
      {
        title: 'Phần 2: Gặp gỡ',
        lines: [
          { hanzi: '有一天，小猫看见一只小狗。', pinyin: 'Yǒu yìtiān, xiǎomāo kànjiàn yì zhī xiǎogǒu.', meaning: 'Một ngày nọ, mèo con nhìn thấy một chú chó con.' },
          { hanzi: '小猫说："你好，我们一起玩儿吧！"', pinyin: 'Xiǎomāo shuō: "Nǐ hǎo, wǒmen yìqǐ wánr ba!"', meaning: 'Mèo con nói: "Chào bạn, chúng ta cùng chơi nhé!"' },
          { hanzi: '小狗很高兴，说："好啊！"', pinyin: 'Xiǎogǒu hěn gāoxìng, shuō: "Hǎo a!"', meaning: 'Chó con rất vui, nói: "Được thôi!"' }
        ]
      },
      {
        title: 'Phần 3: Bạn tốt',
        lines: [
          { hanzi: '小猫和小狗每天一起玩儿。', pinyin: 'Xiǎomāo hé xiǎogǒu měitiān yìqǐ wánr.', meaning: 'Mèo con và chó con mỗi ngày cùng nhau chơi.' },
          { hanzi: '他们成为了好朋友。', pinyin: 'Tāmen chéngwéi le hǎo péngyou.', meaning: 'Chúng trở thành bạn tốt của nhau.' },
          { hanzi: '小猫不再孤单了。', pinyin: 'Xiǎomāo bú zài gūdān le.', meaning: 'Mèo con không còn cô đơn nữa.' }
        ]
      }
    ],
    quiz: [
      {
        question: '小猫住在哪儿？',
        options: ['森林里', '学校里', '家里']
      },
      {
        question: '小猫看见了什么？',
        options: ['一只小狗', '一只小猫', '一个老师']
      },
      {
        question: '故事最后，小猫怎么样了？',
        options: ['不再孤单了', '生病了', '回家了']
      }
    ]
  },
  {
    key: 'zhoumo-de-yitian',
    icon: '🌳',
    title: 'Một ngày cuối tuần',
    level: 'HSK1-2',
    chapters: [
      {
        title: 'Phần 1: Đi công viên',
        lines: [
          { hanzi: '今天是星期六，天气很好。', pinyin: 'Jīntiān shì xīngqīliù, tiānqì hěn hǎo.', meaning: 'Hôm nay là thứ Bảy, thời tiết rất đẹp.' },
          { hanzi: '爸爸说："我们去公园吧。"', pinyin: 'Bàba shuō: "Wǒmen qù gōngyuán ba."', meaning: 'Bố nói: "Chúng ta đi công viên nhé."' },
          { hanzi: '妈妈和我都很高兴。', pinyin: 'Māma hé wǒ dōu hěn gāoxìng.', meaning: 'Mẹ và tôi đều rất vui.' }
        ]
      },
      {
        title: 'Phần 2: Trong công viên',
        lines: [
          { hanzi: '我们坐公共汽车去公园。', pinyin: 'Wǒmen zuò gōnggòng qìchē qù gōngyuán.', meaning: 'Chúng tôi đi xe buýt đến công viên.' },
          { hanzi: '公园里有很多花和树。', pinyin: 'Gōngyuán lǐ yǒu hěn duō huā hé shù.', meaning: 'Trong công viên có rất nhiều hoa và cây.' },
          { hanzi: '我们一起骑自行车。', pinyin: 'Wǒmen yìqǐ qí zìxíngchē.', meaning: 'Chúng tôi cùng nhau đạp xe đạp.' }
        ]
      },
      {
        title: 'Phần 3: Bữa trưa vui vẻ',
        lines: [
          { hanzi: '中午，我们在公园吃午饭。', pinyin: 'Zhōngwǔ, wǒmen zài gōngyuán chī wǔfàn.', meaning: 'Buổi trưa, chúng tôi ăn trưa trong công viên.' },
          { hanzi: '妈妈做的菜很好吃。', pinyin: 'Māma zuò de cài hěn hǎochī.', meaning: 'Món mẹ nấu rất ngon.' },
          { hanzi: '这是快乐的一天。', pinyin: 'Zhè shì kuàilè de yìtiān.', meaning: 'Đây là một ngày vui vẻ.' }
        ]
      }
    ],
    quiz: [
      {
        question: '今天是星期几？',
        options: ['星期六', '星期一', '星期天']
      },
      {
        question: '他们怎么去公园？',
        options: ['坐公共汽车', '走路', '坐飞机']
      },
      {
        question: '谁做的菜很好吃？',
        options: ['妈妈', '爸爸', '我']
      }
    ]
  },
  {
    key: 'xiaoming-xue-hanyu',
    icon: '📖',
    title: 'Tiểu Minh học tiếng Trung',
    level: 'HSK2-3',
    chapters: [
      {
        title: 'Phần 1: Khó khăn ban đầu',
        lines: [
          { hanzi: '小明是越南人，他在中国留学。', pinyin: 'Xiǎomíng shì Yuènán rén, tā zài Zhōngguó liúxué.', meaning: 'Tiểu Minh là người Việt Nam, cậu đang du học ở Trung Quốc.' },
          { hanzi: '汉语对他来说很难。', pinyin: 'Hànyǔ duì tā láishuō hěn nán.', meaning: 'Tiếng Hán đối với cậu rất khó.' },
          { hanzi: '他常常不明白老师说的话。', pinyin: 'Tā chángcháng bù míngbai lǎoshī shuō de huà.', meaning: 'Cậu thường không hiểu lời thầy giáo nói.' }
        ]
      },
      {
        title: 'Phần 2: Người bạn giúp đỡ',
        lines: [
          { hanzi: '他的同学小红常常帮助他。', pinyin: 'Tā de tóngxué Xiǎohóng chángcháng bāngzhù tā.', meaning: 'Bạn học Tiểu Hồng của cậu thường giúp đỡ cậu.' },
          { hanzi: '小红教他说汉语，还教他写汉字。', pinyin: 'Xiǎohóng jiāo tā shuō Hànyǔ, hái jiāo tā xiě Hànzì.', meaning: 'Tiểu Hồng dạy cậu nói tiếng Hán, còn dạy cậu viết chữ Hán.' },
          { hanzi: '小明每天都练习。', pinyin: 'Xiǎomíng měitiān dōu liànxí.', meaning: 'Tiểu Minh ngày nào cũng luyện tập.' }
        ]
      },
      {
        title: 'Phần 3: Tiến bộ',
        lines: [
          { hanzi: '三个月后，小明的汉语进步了很多。', pinyin: 'Sān gè yuè hòu, Xiǎomíng de Hànyǔ jìnbù le hěn duō.', meaning: 'Sau ba tháng, tiếng Hán của Tiểu Minh tiến bộ rất nhiều.' },
          { hanzi: '他能听懂老师说的话了。', pinyin: 'Tā néng tīngdǒng lǎoshī shuō de huà le.', meaning: 'Cậu đã có thể nghe hiểu lời thầy giáo nói.' },
          { hanzi: '他很感谢小红的帮助。', pinyin: 'Tā hěn gǎnxiè Xiǎohóng de bāngzhù.', meaning: 'Cậu rất biết ơn sự giúp đỡ của Tiểu Hồng.' }
        ]
      }
    ],
    quiz: [
      {
        question: '小明是哪国人？',
        options: ['越南人', '中国人', '美国人']
      },
      {
        question: '谁常常帮助小明？',
        options: ['小红', '老师', '爸爸']
      },
      {
        question: '三个月后，小明怎么样了？',
        options: ['汉语进步了很多', '回越南了', '不学汉语了']
      }
    ]
  },
  {
    key: 'gui-tu-saipao',
    icon: '🐢',
    title: 'Rùa và Thỏ chạy đua',
    level: 'HSK1-2',
    chapters: [
      {
        title: 'Phần 1: Lời thách đấu',
        lines: [
          { hanzi: '森林里，兔子跑得很快。', pinyin: 'Sēnlín lǐ, tùzi pǎo de hěn kuài.', meaning: 'Trong khu rừng, thỏ chạy rất nhanh.' },
          { hanzi: '乌龟走得很慢。', pinyin: 'Wūguī zǒu de hěn màn.', meaning: 'Rùa đi rất chậm.' },
          { hanzi: '兔子常常笑话乌龟。', pinyin: 'Tùzi chángcháng xiàohuà wūguī.', meaning: 'Thỏ thường hay chế giễu rùa.' },
          { hanzi: '乌龟说："我们比赛跑步吧！"', pinyin: 'Wūguī shuō: "Wǒmen bǐsài pǎobù ba!"', meaning: 'Rùa nói: "Chúng ta thi chạy đi!"' }
        ]
      },
      {
        title: 'Phần 2: Cuộc đua bắt đầu',
        lines: [
          { hanzi: '比赛开始了，兔子跑得很快，很快就跑到前面。', pinyin: 'Bǐsài kāishǐ le, tùzi pǎo de hěn kuài, hěn kuài jiù pǎo dào qiánmiàn.', meaning: 'Cuộc thi bắt đầu, thỏ chạy rất nhanh, chẳng mấy chốc đã vượt lên phía trước.' },
          { hanzi: '兔子想："乌龟走得这么慢，我睡一觉吧。"', pinyin: 'Tùzi xiǎng: "Wūguī zǒu de zhème màn, wǒ shuì yí jiào ba."', meaning: 'Thỏ nghĩ: "Rùa đi chậm thế này, mình ngủ một giấc đi."' },
          { hanzi: '兔子在树下睡着了。', pinyin: 'Tùzi zài shù xià shuìzháo le.', meaning: 'Thỏ ngủ thiếp đi dưới gốc cây.' },
          { hanzi: '乌龟一直慢慢地走，没有休息。', pinyin: 'Wūguī yìzhí mànmàn de zǒu, méiyǒu xiūxi.', meaning: 'Rùa cứ chậm rãi đi mãi, không nghỉ ngơi.' }
        ]
      },
      {
        title: 'Phần 3: Kết quả bất ngờ',
        lines: [
          { hanzi: '乌龟慢慢地走过了兔子。', pinyin: 'Wūguī mànmàn de zǒuguò le tùzi.', meaning: 'Rùa chậm rãi đi vượt qua thỏ.' },
          { hanzi: '兔子醒来的时候，乌龟已经到终点了。', pinyin: 'Tùzi xǐnglái de shíhou, wūguī yǐjīng dào zhōngdiǎn le.', meaning: 'Khi thỏ tỉnh dậy, rùa đã đến đích rồi.' },
          { hanzi: '乌龟赢了比赛。', pinyin: 'Wūguī yíng le bǐsài.', meaning: 'Rùa đã thắng cuộc thi.' },
          { hanzi: '这个故事告诉我们：骄傲的人会失败，坚持的人会成功。', pinyin: "Zhège gùshi gàosù wǒmen: jiāo'ào de rén huì shībài, jiānchí de rén huì chénggōng.", meaning: 'Câu chuyện này cho chúng ta biết: người kiêu ngạo sẽ thất bại, người kiên trì sẽ thành công.' }
        ]
      }
    ],
    quiz: [
      {
        question: '谁跑得很快？',
        options: ['兔子', '乌龟', '小猫']
      },
      {
        question: '兔子在哪儿睡着了？',
        options: ['树下', '家里', '河边']
      },
      {
        question: '谁赢了比赛？',
        options: ['乌龟', '兔子', '没有人']
      }
    ]
  },
  {
    key: 'houzi-lao-yue',
    icon: '🐵',
    title: 'Khỉ vớt trăng',
    level: 'HSK2-3',
    chapters: [
      {
        title: 'Phần 1: Mặt trăng rơi xuống sông',
        lines: [
          { hanzi: '晚上，一只小猴子在河边玩。', pinyin: 'Wǎnshang, yì zhī xiǎo hóuzi zài hébiān wán.', meaning: 'Buổi tối, một chú khỉ con chơi ở bờ sông.' },
          { hanzi: '它看见河里有一个月亮。', pinyin: 'Tā kànjiàn hé lǐ yǒu yí gè yuèliang.', meaning: 'Nó nhìn thấy trong sông có một mặt trăng.' },
          { hanzi: '小猴子很着急，大喊："月亮掉到河里了！"', pinyin: 'Xiǎo hóuzi hěn zhāojí, dàhǎn: "Yuèliang diào dào hé lǐ le!"', meaning: 'Khỉ con rất lo lắng, hét lớn: "Mặt trăng rơi xuống sông rồi!"' }
        ]
      },
      {
        title: 'Phần 2: Cùng nhau đi vớt',
        lines: [
          { hanzi: '别的猴子都跑过来看。', pinyin: 'Bié de hóuzi dōu pǎo guòlái kàn.', meaning: 'Những con khỉ khác đều chạy đến xem.' },
          { hanzi: '大家想把月亮捞出来。', pinyin: 'Dàjiā xiǎng bǎ yuèliang lāo chūlái.', meaning: 'Mọi người muốn vớt mặt trăng lên.' },
          { hanzi: '一只猴子抓住树枝，另一只猴子抓住它的手，一个接一个。', pinyin: 'Yì zhī hóuzi zhuāzhù shùzhī, lìng yì zhī hóuzi zhuāzhù tā de shǒu, yí gè jiē yí gè.', meaning: 'Một con khỉ nắm lấy cành cây, một con khỉ khác nắm lấy tay nó, cứ thế nối tiếp nhau.' }
        ]
      },
      {
        title: 'Phần 3: Chỉ là cái bóng',
        lines: [
          { hanzi: '最老的猴子抬头一看，笑了。', pinyin: 'Zuì lǎo de hóuzi táitóu yí kàn, xiào le.', meaning: 'Con khỉ già nhất ngẩng đầu nhìn lên, cười.' },
          { hanzi: '它说："月亮在天上，河里的只是影子。"', pinyin: 'Tā shuō: "Yuèliang zài tiān shàng, hé lǐ de zhǐshì yǐngzi."', meaning: 'Nó nói: "Mặt trăng ở trên trời, cái trong sông chỉ là bóng thôi."' },
          { hanzi: '猴子们抬头看，月亮真的在天上。', pinyin: 'Hóuzimen táitóu kàn, yuèliang zhēn de zài tiān shàng.', meaning: 'Đàn khỉ ngẩng đầu nhìn, mặt trăng đúng là ở trên trời.' },
          { hanzi: '大家都笑了。', pinyin: 'Dàjiā dōu xiào le.', meaning: 'Mọi người đều bật cười.' }
        ]
      }
    ],
    quiz: [
      {
        question: '小猴子在哪儿看见月亮？',
        options: ['河里', '天上', '树上']
      },
      {
        question: '猴子们想做什么？',
        options: ['把月亮捞出来', '去睡觉', '去找食物']
      },
      {
        question: '河里的月亮其实是什么？',
        options: ['影子', '石头', '鱼']
      }
    ]
  },
  {
    key: 'xiongmao-de-yitian',
    icon: '🐼',
    title: 'Một ngày của gấu trúc',
    level: 'HSK1',
    chapters: [
      {
        title: 'Phần 1: Buổi sáng',
        lines: [
          { hanzi: '熊猫早上七点起床。', pinyin: 'Xióngmāo zǎoshang qī diǎn qǐchuáng.', meaning: 'Gấu trúc dậy lúc bảy giờ sáng.' },
          { hanzi: '它先喝水，再吃竹子。', pinyin: 'Tā xiān hē shuǐ, zài chī zhúzi.', meaning: 'Nó uống nước trước, rồi ăn tre.' },
          { hanzi: '熊猫每天要吃很多竹子。', pinyin: 'Xióngmāo měitiān yào chī hěn duō zhúzi.', meaning: 'Mỗi ngày gấu trúc phải ăn rất nhiều tre.' }
        ]
      },
      {
        title: 'Phần 2: Buổi trưa',
        lines: [
          { hanzi: '中午，天气很热，熊猫喜欢睡觉。', pinyin: 'Zhōngwǔ, tiānqì hěn rè, xióngmāo xǐhuan shuìjiào.', meaning: 'Buổi trưa, trời nóng, gấu trúc thích ngủ.' },
          { hanzi: '它爬到树上睡觉。', pinyin: 'Tā pá dào shù shàng shuìjiào.', meaning: 'Nó trèo lên cây ngủ.' },
          { hanzi: '下午，它醒了，跟朋友们一起玩儿。', pinyin: 'Xiàwǔ, tā xǐng le, gēn péngyoumen yìqǐ wánr.', meaning: 'Buổi chiều, nó tỉnh dậy, cùng chơi với các bạn.' }
        ]
      },
      {
        title: 'Phần 3: Buổi tối',
        lines: [
          { hanzi: '晚上，熊猫又吃了很多竹子。', pinyin: 'Wǎnshang, xióngmāo yòu chī le hěn duō zhúzi.', meaning: 'Buổi tối, gấu trúc lại ăn thêm nhiều tre.' },
          { hanzi: '它觉得很开心，因为它有好吃的，也有好朋友。', pinyin: 'Tā juéde hěn kāixīn, yīnwèi tā yǒu hǎochī de, yě yǒu hǎo péngyou.', meaning: 'Nó cảm thấy rất vui, vì nó có đồ ăn ngon, cũng có bạn tốt.' },
          { hanzi: '这就是熊猫快乐的一天。', pinyin: 'Zhè jiù shì xióngmāo kuàilè de yìtiān.', meaning: 'Đây chính là một ngày vui vẻ của gấu trúc.' }
        ]
      }
    ],
    quiz: [
      {
        question: '熊猫几点起床？',
        options: ['七点', '八点', '九点']
      },
      {
        question: '熊猫每天吃什么？',
        options: ['竹子', '米饭', '鱼']
      },
      {
        question: '熊猫中午喜欢做什么？',
        options: ['睡觉', '跑步', '唱歌']
      }
    ]
  },
  {
    key: 'nongfu-he-she',
    icon: '🐍',
    title: 'Người nông dân và con rắn',
    level: 'HSK2-3',
    chapters: [
      {
        title: 'Phần 1: Cứu con rắn',
        lines: [
          { hanzi: '冬天，天气很冷。', pinyin: 'Dōngtiān, tiānqì hěn lěng.', meaning: 'Mùa đông, trời rất lạnh.' },
          { hanzi: '农夫在路上看见一条蛇，蛇快要死了。', pinyin: 'Nóngfū zài lùshang kànjiàn yì tiáo shé, shé kuàiyào sǐ le.', meaning: 'Người nông dân trên đường nhìn thấy một con rắn, con rắn sắp chết rồi.' },
          { hanzi: '农夫很同情蛇，把它放进怀里。', pinyin: 'Nóngfū hěn tóngqíng shé, bǎ tā fàng jìn huái lǐ.', meaning: 'Người nông dân rất thương xót con rắn, đem nó bỏ vào trong lòng.' }
        ]
      },
      {
        title: 'Phần 2: Bị cắn',
        lines: [
          { hanzi: '蛇慢慢暖和了，也醒了。', pinyin: 'Shé mànmàn nuǎnhuo le, yě xǐng le.', meaning: 'Con rắn dần dần ấm lên, cũng tỉnh lại.' },
          { hanzi: '可是蛇一醒，就咬了农夫一口。', pinyin: 'Kěshì shé yì xǐng, jiù yǎo le nóngfū yì kǒu.', meaning: 'Nhưng con rắn vừa tỉnh, liền cắn người nông dân một cái.' },
          { hanzi: '农夫很难过，问蛇："我救了你，你为什么咬我？"', pinyin: 'Nóngfū hěn nánguò, wèn shé: "Wǒ jiù le nǐ, nǐ wèishénme yǎo wǒ?"', meaning: 'Người nông dân rất đau lòng, hỏi con rắn: "Tôi đã cứu ngươi, sao ngươi lại cắn tôi?"' }
        ]
      },
      {
        title: 'Phần 3: Bài học',
        lines: [
          { hanzi: '蛇说："我是蛇，这就是我的本性。"', pinyin: 'Shé shuō: "Wǒ shì shé, zhè jiùshì wǒ de běnxìng."', meaning: 'Con rắn nói: "Ta là rắn, đây chính là bản tính của ta."' },
          { hanzi: '这个故事告诉我们：对坏人太善良，可能会伤害自己。', pinyin: 'Zhège gùshi gàosù wǒmen: duì huàirén tài shànliáng, kěnéng huì shānghài zìjǐ.', meaning: 'Câu chuyện này cho chúng ta biết: quá tốt bụng với kẻ xấu, có thể sẽ làm hại chính mình.' },
          { hanzi: '所以，我们做好事的时候，也要小心。', pinyin: 'Suǒyǐ, wǒmen zuò hǎoshì de shíhou, yě yào xiǎoxīn.', meaning: 'Vì vậy, khi làm việc tốt, chúng ta cũng cần phải cẩn thận.' }
        ]
      }
    ],
    quiz: [
      {
        question: '农夫在哪个季节看见蛇？',
        options: ['冬天', '夏天', '秋天']
      },
      {
        question: '蛇醒了以后做了什么？',
        options: ['咬了农夫', '谢谢农夫', '跑走了']
      },
      {
        question: '这个故事告诉我们什么？',
        options: ['对坏人太善良可能会伤害自己', '要天天运动', '要多吃蔬菜']
      }
    ]
  },
  {
    key: 'san-zhi-xiaozhu',
    icon: '🐷',
    title: 'Ba chú heo con',
    level: 'HSK2-3',
    chapters: [
      {
        title: 'Phần 1: Xây nhà',
        lines: [
          { hanzi: '从前，有三只小猪，它们要自己盖房子。', pinyin: 'Cóngqián, yǒu sān zhī xiǎozhū, tāmen yào zìjǐ gài fángzi.', meaning: 'Ngày xửa ngày xưa, có ba chú heo con, chúng phải tự xây nhà.' },
          { hanzi: '第一只小猪很懒，用稻草盖了房子。', pinyin: 'Dì-yī zhī xiǎozhū hěn lǎn, yòng dàocǎo gài le fángzi.', meaning: 'Chú heo thứ nhất rất lười, dùng rơm để xây nhà.' },
          { hanzi: '第二只小猪用木头盖了房子。', pinyin: 'Dì-èr zhī xiǎozhū yòng mùtou gài le fángzi.', meaning: 'Chú heo thứ hai dùng gỗ để xây nhà.' },
          { hanzi: '第三只小猪很努力，用砖头盖了房子。', pinyin: 'Dì-sān zhī xiǎozhū hěn nǔlì, yòng zhuāntou gài le fángzi.', meaning: 'Chú heo thứ ba rất chăm chỉ, dùng gạch để xây nhà.' }
        ]
      },
      {
        title: 'Phần 2: Sói xám đến',
        lines: [
          { hanzi: '大灰狼来了，它想吃小猪。', pinyin: 'Dàhuī láng lái le, tā xiǎng chī xiǎozhū.', meaning: 'Sói xám lớn đến, nó muốn ăn thịt heo con.' },
          { hanzi: '狼一口气吹倒了稻草房子和木头房子。', pinyin: 'Láng yìkǒuqì chuī dǎo le dàocǎo fángzi hé mùtou fángzi.', meaning: 'Sói thổi một hơi làm đổ cả nhà rơm và nhà gỗ.' },
          { hanzi: '两只小猪都跑到第三只小猪的砖头房子里。', pinyin: 'Liǎng zhī xiǎozhū dōu pǎo dào dì-sān zhī xiǎozhū de zhuāntou fángzi lǐ.', meaning: 'Cả hai chú heo đều chạy vào nhà gạch của chú heo thứ ba.' }
        ]
      },
      {
        title: 'Phần 3: An toàn',
        lines: [
          { hanzi: '狼想吹倒砖头房子，可是吹不倒。', pinyin: 'Láng xiǎng chuī dǎo zhuāntou fángzi, kěshì chuī bu dǎo.', meaning: 'Sói muốn thổi đổ nhà gạch, nhưng không thổi đổ được.' },
          { hanzi: '三只小猪安全了。', pinyin: 'Sān zhī xiǎozhū ānquán le.', meaning: 'Ba chú heo con đã an toàn.' },
          { hanzi: '这个故事告诉我们：努力做事，才能保护自己。', pinyin: 'Zhège gùshi gàosù wǒmen: nǔlì zuòshì, cáinéng bǎohù zìjǐ.', meaning: 'Câu chuyện này cho chúng ta biết: chăm chỉ làm việc mới có thể bảo vệ được bản thân.' }
        ]
      }
    ],
    quiz: [
      {
        question: '第三只小猪用什么盖房子？',
        options: ['砖头', '稻草', '木头']
      },
      {
        question: '谁想吃小猪？',
        options: ['大灰狼', '老虎', '狐狸']
      },
      {
        question: '最后，哪个房子没有被吹倒？',
        options: ['砖头房子', '稻草房子', '木头房子']
      }
    ]
  }
]

export function getStory(key) {
  return STORIES.find((s) => s.key === key)
}
