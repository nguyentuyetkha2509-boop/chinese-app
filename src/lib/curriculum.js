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

// TAT CA cac bai DA hoc tu vung (co trong completedUnits) ma van con thieu
// luyen viet - khong chi bai som nhat. Cac bai nay doc lap voi nhau (vd bai
// 1 con thieu viet chu khong lien quan gi den bai 6 con thieu ngu phap), nen
// khong duoc de bai nay "chan" bai kia, phai liet ke day du de nguoi hoc tu
// chon lam bai nao truoc.
export function getAllUnitsNeedingWriting(levels, completedUnits, writingStats) {
  const practiced = writingStats?.practiced || []
  const results = []
  for (const level of levels) {
    for (const unit of level.units) {
      if (!completedUnits.includes(`${level.id}:${unit.id}`)) continue
      const chars = new Set()
      for (const w of unit.words) {
        for (const ch of w.hanzi) {
          if (/[一-鿿]/.test(ch)) chars.add(ch)
        }
      }
      if ([...chars].some((ch) => !practiced.includes(ch))) {
        results.push({ levelId: level.id, levelLabel: level.label, unit })
      }
    }
  }
  return results
}

// Tuong tu getAllUnitsNeedingWriting nhung cho Ngu phap: tat ca cac bai da
// hoc tu vung co diem ngu phap lien quan ma diem do chua lam bai tap xong.
// Nhieu bai co the cung goi y 1 diem ngu phap - chi liet ke moi diem 1 lan.
export function getAllUnitsNeedingGrammar(levels, completedUnits, completedGrammar) {
  const results = []
  const seenGrammarKeys = new Set()
  for (const level of levels) {
    for (const unit of level.units) {
      if (!completedUnits.includes(`${level.id}:${unit.id}`)) continue
      const point = getRelatedGrammarForUnit(level.label, unit)
      if (point && !completedGrammar.includes(point.key) && !seenGrammarKeys.has(point.key)) {
        seenGrammarKeys.add(point.key)
        results.push({ levelId: level.id, levelLabel: level.label, unit, grammar: point })
      }
    }
  }
  return results
}

// Tien do "Viet chu" cua 1 cap: ty le chu Han rieng biet (trong tu vung cap
// do) da duoc luyen viet it nhat 1 lan.
export function getWritingProgressForLevel(level, writingStats) {
  const chars = new Set()
  for (const w of level.words) {
    for (const ch of w.hanzi) {
      if (/[一-鿿]/.test(ch)) chars.add(ch)
    }
  }
  const total = chars.size
  const practiced = writingStats?.practiced || []
  const done = [...chars].filter((ch) => practiced.includes(ch)).length
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 }
}

// Tien do "Ngu phap" cua 1 cap: ty le diem ngu phap da lam xong bai tap.
// HSK5/6 chua co du lieu ngu phap nen total se la 0.
export function getGrammarProgressForLevel(levelLabel, completedGrammar) {
  const points = GRAMMAR_POINTS.filter((g) => g.level === levelLabel)
  const total = points.length
  const done = points.filter((g) => completedGrammar.includes(g.key)).length
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 }
}

// Tien do "On tap" cua 1 cap: trong so tu da duoc gioi thieu (co the trong
// SRS), bao nhieu tu da "vung" (interval >= 7 ngay, tuc da nho lau dai) -
// khac voi tien do "Tu vung" (chi tinh da hoc qua bai hay chua).
export function getReviewProgressForLevel(level, srsState) {
  const ids = level.words.map((w) => w.id)
  let introduced = 0
  let matured = 0
  for (const id of ids) {
    const card = srsState[id]
    if (card) {
      introduced += 1
      if (card.interval >= 7) matured += 1
    }
  }
  return { introduced, matured, total: ids.length, percent: introduced ? Math.round((matured / introduced) * 100) : 0 }
}

// Tien do "Phat am" cua 1 cap: ty le tra loi dung trong Luyen thanh dieu.
export function getPronunciationProgressForLevel(levelId, toneStatsByLevel) {
  const s = toneStatsByLevel?.[levelId] || { correct: 0, total: 0 }
  return { correct: s.correct, total: s.total, percent: s.total ? Math.round((s.correct / s.total) * 100) : 0 }
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
