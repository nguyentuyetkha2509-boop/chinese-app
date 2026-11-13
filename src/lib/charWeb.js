import { LEVELS } from '../data/levels'
import { EXTRA_WORDS } from '../data/topicWords'
import { CHAR_PINYIN } from '../data/charPinyin'

// So o quanh chu trung tam, khop voi bo cuc 3 tren, 2 trai, 2 phai, 3 duoi.
export const WEB_SIZE = 10

// Thu tu uu tien: HSK thap truoc (de hieu), tu bo sung chu de sau, HSK7-9 cuoi.
const RANK = { hsk1: 1, hsk2: 2, hsk3: 3, hsk4: 4, hsk5: 5, hsk6: 6, extra: 7, hsk7: 8 }

let pool = null
function getPool() {
  if (pool) return pool
  pool = []
  const seen = new Set()
  const push = (w, lv) => {
    if (seen.has(w.hanzi)) return
    seen.add(w.hanzi)
    pool.push({ ...w, lv })
  }
  for (const l of LEVELS) for (const w of l.words) push(w, l.id)
  for (const w of EXTRA_WORDS) push(w, 'extra')
  return pool
}

export function buildCharWeb(entry) {
  const words = getPool()
  const byHanzi = new Map(words.map((w) => [w.hanzi, w]))
  const single = byHanzi.get(entry.char)
  const chosen = []
  const add = (w) => {
    if (w && w.hanzi !== entry.char && !chosen.includes(w) && chosen.length < WEB_SIZE) chosen.push(w)
  }
  for (const h of entry.prefer || []) add(byHanzi.get(h))
  const rest = words
    .filter((w) => w.hanzi.length > 1 && w.hanzi.includes(entry.char))
    // Tu 2 chu de nho hon tu dai, nen xep truoc trong cung mot cap.
    .sort((a, b) => RANK[a.lv] - RANK[b.lv] || a.hanzi.length - b.hanzi.length)
  for (const w of rest) add(w)

  // Cau vi du: uu tien vi du cua chinh cac tu ghep, thieu thi lay vi du cua chu don.
  const examples = chosen.filter((w) => w.example).map((w) => ({ word: w.hanzi, ...w.example }))
  if (examples.length < 2 && single?.example) examples.push({ word: single.hanzi, ...single.example })
  // Van thieu thi lay vi du cua tu ghep khac chua chu nay (khong nam trong so do).
  for (const w of rest) {
    if (examples.length >= 2) break
    if (w.example && !examples.some((e) => e.word === w.hanzi)) examples.push({ word: w.hanzi, ...w.example })
  }

  return {
    pinyin: entry.pinyin || single?.pinyin || CHAR_PINYIN[entry.char] || '',
    words: chosen,
    examples: examples.slice(0, 2)
  }
}
