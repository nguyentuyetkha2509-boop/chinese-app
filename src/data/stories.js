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
  }
]

export function getStory(key) {
  return STORIES.find((s) => s.key === key)
}
