// Xay dung cau hoi trac nghiem, xoay vong nhieu DANG BAI khac nhau de do nham:
// - meaning: cho chu Han, chon nghia dung
// - hanzi: cho nghia, chon dung chu Han
// - listen: nghe am thanh, chon nghia dung (khong hien chu cho den khi tra loi)
// - truefalse: cho chu Han + mot nghia de xuat, tra loi Dung/Sai
export const QUESTION_TYPES = ['meaning', 'hanzi', 'listen', 'truefalse']

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Chon 3 tu lam dap an nhieu, dam bao KHONG tu nao trung nghia voi nhau va
// cung khong trung nghia voi dap an dung.
//
// Du lieu that co 127 nhom tu khac chu Han nhung cung nghia tieng Viet (vd 狗 va
// 犬 deu la 'con chó', 上午 va 早上 deu la 'buổi sáng', 医生 va 大夫 deu la 'bác sĩ').
// Truoc day chi loc theo w.id nen cau hoi co the hien 2 lua chon giong het nhau -
// nguoi hoc chon dung nhung van bi cham sai, va cau hoi tro thanh vo nghia.
function pickDistractors(word, pool) {
  const seenMeanings = new Set([word.meaning])
  const others = []
  for (const candidate of shuffle(pool)) {
    if (candidate.id === word.id) continue
    if (seenMeanings.has(candidate.meaning)) continue
    seenMeanings.add(candidate.meaning)
    others.push(candidate)
    if (others.length === 3) break
  }
  return others
}

export function buildQuiz(words, pool) {
  return words.map((word) => {
    const others = pickDistractors(word, pool)
    const options = shuffle([word, ...others])
    const type = QUESTION_TYPES[Math.floor(Math.random() * QUESTION_TYPES.length)]
    if (type === 'truefalse') {
      const isTrue = Math.random() < 0.5
      const decoy = others[0] || word
      return { word, type, options, shownMeaning: isTrue ? word.meaning : decoy.meaning, isTrue }
    }
    return { word, type, options }
  })
}
