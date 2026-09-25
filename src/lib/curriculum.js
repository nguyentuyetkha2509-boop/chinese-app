// Cac ham ho tro "lich trinh hoc khoa hoc": gioi han tu moi/ngay, goi y ngu
// phap lien quan toi bai hoc, va uoc tinh lo trinh hoan thanh tung cap HSK.
import { loadJSON, saveJSON } from './storage'
import { GRAMMAR_POINTS } from '../data/grammar'

const LIMIT_KEY = 'dailyNewWordLimit'
export const NEW_WORD_LIMIT_OPTIONS = [5, 10, 15, 20]
const DEFAULT_NEW_WORD_LIMIT = 10

export function getDailyNewWordLimit() {
  return loadJSON(LIMIT_KEY, DEFAULT_NEW_WORD_LIMIT)
}

export function setDailyNewWordLimit(n) {
  saveJSON(LIMIT_KEY, n)
}

// Goi y 1 diem ngu phap cung cap co lien quan nhat toi 1 bai hoc, dua tren so
// chu Han trung nhau giua tu vung bai hoc va cac cau vi du cua diem ngu phap.
// HSK5/6 chua co du lieu ngu phap nen se khong tim thay diem nao (tra ve null).
export function getRelatedGrammarForUnit(levelLabel, unit) {
  const points = GRAMMAR_POINTS.filter((g) => g.level === levelLabel)
  if (points.length === 0) return null

  const unitChars = new Set()
  for (const w of unit.words) {
    for (const ch of w.hanzi) unitChars.add(ch)
  }

  let best = null
  let bestScore = 0
  for (const g of points) {
    let score = 0
    for (const ex of g.examples) {
      for (const ch of ex.hanzi) {
        if (unitChars.has(ch)) score += 1
      }
    }
    if (score > bestScore) {
      bestScore = score
      best = g
    }
  }
  return bestScore > 0 ? best : null
}

// Uoc tinh lo trinh: voi moi cap, con bao nhieu tu chua "hoc" (chua hoan
// thanh bai chua tu do), va con bao nhieu ngay nua (tinh don, cong don tu
// dau) neu giu deu toc do dailyLimit tu moi/ngay.
export function estimateRoadmap(levels, completedUnits, dailyLimit) {
  let cumulativeRemaining = 0
  return levels.map((level) => {
    const totalWords = level.words.length
    const doneUnits = level.units.filter((u) => completedUnits.includes(`${level.id}:${u.id}`))
    const wordsIntroduced = doneUnits.reduce((sum, u) => sum + u.words.length, 0)
    const remaining = Math.max(0, totalWords - wordsIntroduced)
    cumulativeRemaining += remaining
    const daysToFinish = dailyLimit > 0 ? Math.ceil(cumulativeRemaining / dailyLimit) : null
    const percent = totalWords ? Math.round((wordsIntroduced / totalWords) * 100) : 0
    const status = wordsIntroduced >= totalWords && totalWords > 0 ? 'done' : wordsIntroduced > 0 ? 'active' : 'upcoming'
    return {
      id: level.id,
      label: level.label,
      totalWords,
      wordsIntroduced,
      percent,
      status,
      daysToFinish,
      unitsDone: doneUnits.length,
      totalUnits: level.units.length
    }
  })
}
