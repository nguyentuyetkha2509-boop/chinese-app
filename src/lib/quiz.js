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

export function buildQuiz(words, pool) {
  return words.map((word) => {
    const others = shuffle(pool.filter((w) => w.id !== word.id)).slice(0, 3)
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
