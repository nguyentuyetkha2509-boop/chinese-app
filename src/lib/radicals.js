// Goi y theo BO THU (部首) cho chu ghep hinh thanh - khac voi chu tuong hinh
// (PictographIcon.jsx) o cho: ca chu khong "giong hinh" gi ca, nhung mot
// phan cua no (bo thu) mang y nghia lien quan, giup doan/nho nghia.
// Chi ap dung cho tu don 1 chu (giong nguyen tac cua chu tuong hinh).

export const RADICALS = {
  water: { symbol: '氵', name: 'Bộ Thuỷ', hint: 'liên quan đến nước, sông ngòi' },
  person: { symbol: '亻', name: 'Bộ Nhân đứng', hint: 'liên quan đến con người' },
  hand: { symbol: '扌', name: 'Bộ Thủ', hint: 'liên quan đến tay, hành động dùng tay' },
  speech: { symbol: '讠', name: 'Bộ Ngôn', hint: 'liên quan đến lời nói' },
  grass: { symbol: '艹', name: 'Bộ Thảo', hint: 'liên quan đến cây cỏ' },
  wood: { symbol: '木', name: 'Bộ Mộc', hint: 'liên quan đến gỗ, cây cối' },
  heart: { symbol: '忄', name: 'Bộ Tâm', hint: 'liên quan đến tâm trạng, tình cảm' },
  woman: { symbol: '女', name: 'Bộ Nữ', hint: 'liên quan đến phụ nữ' },
  mouth: { symbol: '口', name: 'Bộ Khẩu', hint: 'liên quan đến miệng, lời nói, hành động' },
  sun: { symbol: '日', name: 'Bộ Nhật', hint: 'liên quan đến mặt trời, thời gian' },
  fire: { symbol: '火', name: 'Bộ Hoả', hint: 'liên quan đến lửa, nhiệt' },
  metal: { symbol: '钅', name: 'Bộ Kim', hint: 'liên quan đến kim loại' },
  rain: { symbol: '雨', name: 'Bộ Vũ', hint: 'liên quan đến mưa, thời tiết' },
  walk: { symbol: '辶', name: 'Bộ Sước', hint: 'liên quan đến di chuyển, đi lại' },
  ice: { symbol: '冫', name: 'Bộ Băng', hint: 'liên quan đến giá lạnh' },
  food: { symbol: '饣', name: 'Bộ Thực', hint: 'liên quan đến ăn uống' },
  silk: { symbol: '纟', name: 'Bộ Mịch', hint: 'liên quan đến tơ, sợi, vải, màu sắc' },
  beast: { symbol: '犭', name: 'Bộ Khuyển', hint: 'liên quan đến loài thú' },
  place: { symbol: '阝', name: 'Bộ Ấp', hint: 'liên quan đến địa danh, nơi chốn' }
}

// hanzi -> radical key
export const CHAR_RADICAL = {
  河: 'water', 汗: 'water', 深: 'water', 汤: 'water', 洗: 'water', 满: 'water', 渴: 'water',
  你: 'person', 他: 'person', 做: 'person', 住: 'person', 位: 'person', 借: 'person', 低: 'person', 使: 'person', 倍: 'person', 俩: 'person',
  拿: 'hand', 找: 'hand', 换: 'hand', 挂: 'hand', 拉: 'hand', 抬: 'hand', 推: 'hand', 接: 'hand', 擦: 'hand', 抱: 'hand', 扔: 'hand', 挺: 'hand',
  请: 'speech', 说: 'speech', 试: 'speech', 讲: 'speech', 让: 'speech', 谁: 'speech', 谈: 'speech',
  菜: 'grass', 花: 'grass', 茶: 'grass', 草: 'grass', 药: 'grass', 苦: 'grass',
  树: 'wood', 楼: 'wood', 桥: 'wood', 极: 'wood',
  快: 'heart', 慢: 'heart', 忙: 'heart', 想: 'heart', 懂: 'heart',
  好: 'woman', 她: 'woman', 姓: 'woman',
  吃: 'mouth', 喝: 'mouth', 叫: 'mouth', 吗: 'mouth', 哪: 'mouth', 呢: 'mouth', 只: 'mouth', 号: 'mouth', 哭: 'mouth', 台: 'mouth',
  是: 'sun', 春: 'sun', 晴: 'sun',
  热: 'fire',
  钱: 'metal',
  雪: 'rain',
  还: 'walk', 进: 'walk', 近: 'walk', 远: 'walk',
  冷: 'ice',
  饿: 'food', 饱: 'food',
  红: 'silk', 绿: 'silk',
  狗: 'beast', 猫: 'beast', 猪: 'beast',
  都: 'place', 那: 'place'
}

export function getRadicalHint(char) {
  const key = CHAR_RADICAL[char]
  if (!key) return null
  const r = RADICALS[key]
  return `Có bộ ${r.symbol} (${r.name}) - ${r.hint}.`
}

export function hasRadicalHint(char) {
  return Boolean(CHAR_RADICAL[char])
}

export function getRadicalSymbol(char) {
  const key = CHAR_RADICAL[char]
  return key ? RADICALS[key].symbol : null
}
