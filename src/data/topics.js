// Nhom lai tu vung DA CO (HSK1-4) theo chu de - khong them tu moi, chi giup
// hoc/on tap theo mach chu de thay vi chi theo thu tu HSK tuan tu.
import { ALL_WORDS } from './levels'
import { estimateLevelFromWords } from '../lib/contentLevel'

export const TOPICS = [
  {
    key: 'family',
    icon: '👪',
    title: 'Gia đình & Con người',
    hanzi: ['爸爸', '妈妈', '儿子', '女儿', '哥哥', '姐姐', '弟弟', '妹妹', '孩子', '朋友', '先生', '小姐', '同学', '老师', '医生', '丈夫', '妻子', '父亲', '母亲', '亲戚', '邻居']
  },
  {
    key: 'food',
    icon: '🍜',
    title: 'Đồ ăn & Đồ uống',
    hanzi: ['茶', '水', '米饭', '苹果', '水果', '菜', '咖啡', '牛奶', '鸡蛋', '西瓜', '面包', '面条', '饺子', '蛋糕', '巧克力', '好吃', '渴', '饿', '筷子']
  },
  {
    key: 'time',
    icon: '🕐',
    title: 'Số đếm & Thời gian',
    hanzi: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '点', '分钟', '今天', '明天', '昨天', '现在', '年', '月', '星期', '早上', '中午', '晚上', '小时', '刻']
  },
  {
    key: 'color',
    icon: '🎨',
    title: 'Màu sắc',
    hanzi: ['红', '黄', '蓝', '绿', '黑', '白']
  },
  {
    key: 'place',
    icon: '🚌',
    title: 'Giao thông & Địa điểm',
    hanzi: ['飞机', '出租车', '火车站', '公共汽车', '自行车', '船', '地铁', '机场', '学校', '医院', '商店', '公司', '饭店', '超市', '宾馆', '公园', '花园', '厨房', '教室', '办公室', '黑板']
  },
  {
    key: 'feeling',
    icon: '😊',
    title: 'Cảm xúc',
    hanzi: ['高兴', '漂亮', '累', '忙', '安静', '害怕', '担心', '骄傲', '聪明', '可爱', '认识', '喜欢', '爱', '谢谢', '对不起', '害羞', '伤心']
  },
  {
    key: 'activity',
    icon: '🏃',
    title: 'Hoạt động',
    hanzi: ['打篮球', '踢', '游泳', '跑步', '跳舞', '唱歌', '旅游', '运动', '休息', '睡觉', '工作', '学习', '读', '看', '听', '说', '走', '来', '去', '开', '关', '打电话', '打扫', '打算']
  },
  {
    key: 'weather',
    icon: '🌤️',
    title: 'Thời tiết & Thiên nhiên',
    hanzi: ['天气', '下雨', '雪', '晴', '阴', '冷', '热', '春', '冬', '云', '河', '树', '花', '草', '森林', '动物', '狗', '猫', '鱼', '鸟', '马']
  },
  {
    key: 'object',
    icon: '🛋️',
    title: 'Đồ vật',
    hanzi: ['衣服', '裤子', '帽子', '手机', '电脑', '电视', '电影', '书', '杯子', '桌子', '椅子', '钱', '礼物', '手表', '冰箱', '空调', '沙发', '窗户', '门']
  }
]

function dedupeWords(hanziList) {
  const seen = new Set()
  const result = []
  for (const h of hanziList) {
    if (seen.has(h)) continue
    const word = ALL_WORDS.find((w) => w.hanzi === h)
    if (word) {
      seen.add(h)
      result.push(word)
    }
  }
  return result
}

export function getTopic(key) {
  return TOPICS.find((t) => t.key === key)
}

export function getTopicWords(key) {
  const topic = getTopic(key)
  return topic ? dedupeWords(topic.hanzi) : []
}

// Cap do (1-6) cua 1 chu de, tinh tu tu kho nhat trong do - dung de sap xep
// danh sach chu de tu de den kho thay vi thu tu tuy tien nhu truoc.
export function getTopicLevel(key) {
  return estimateLevelFromWords(getTopicWords(key))
}
