import { HSK1_WORDS } from './hsk1'
import { HSK2_WORDS } from './hsk2'
import { HSK3_WORDS } from './hsk3'
import { HSK4_WORDS } from './hsk4'
import { HSK5_WORDS } from './hsk5'
import { HSK6_WORDS } from './hsk6'
import { HSK1_LESSON_PLAN } from './lessonPlans'
import { HSK2_LESSON_PLAN } from './lessonPlans2'
import { HSK3_LESSON_PLAN } from './lessonPlans3'
import { HSK4_LESSON_PLAN } from './lessonPlans4'

// Moi HSK co giao an theo chu de (xem lessonPlans*.js) thay vi chi cat theo
// thu tu bang chu cai, giup tu vung trong 1 bai lien quan den nhau, de nho hon.
function buildThemedUnits(words, plan) {
  const byId = new Map(words.map((w) => [w.id, w]))
  return plan.map((unit, i) => ({
    id: i + 1,
    title: `Bài ${i + 1}: ${unit.title}`,
    intro: unit.intro,
    words: unit.wordIds.map((id) => byId.get(id))
  }))
}

// HSK5/6 chua co giao an theo chu de, tam thoi cat deu theo nhom de co the
// hoc ngay; se nang cap len giao an theo chu de nhu HSK1-4 sau.
function buildSimpleUnits(words, size = 20) {
  const units = []
  for (let i = 0; i < words.length; i += size) {
    const chunk = words.slice(i, i + size)
    const unitNum = units.length + 1
    units.push({
      id: unitNum,
      title: `Bài ${unitNum}: ${chunk[0].hanzi} - ${chunk[chunk.length - 1].hanzi}`,
      intro: `${chunk.length} từ vựng mới.`,
      words: chunk
    })
  }
  return units
}

export const LEVELS = [
  { id: 'hsk1', label: 'HSK1', words: HSK1_WORDS, units: buildThemedUnits(HSK1_WORDS, HSK1_LESSON_PLAN) },
  { id: 'hsk2', label: 'HSK2', words: HSK2_WORDS, units: buildThemedUnits(HSK2_WORDS, HSK2_LESSON_PLAN) },
  { id: 'hsk3', label: 'HSK3', words: HSK3_WORDS, units: buildThemedUnits(HSK3_WORDS, HSK3_LESSON_PLAN) },
  { id: 'hsk4', label: 'HSK4', words: HSK4_WORDS, units: buildThemedUnits(HSK4_WORDS, HSK4_LESSON_PLAN) },
  { id: 'hsk5', label: 'HSK5', words: HSK5_WORDS, units: buildSimpleUnits(HSK5_WORDS) },
  { id: 'hsk6', label: 'HSK6', words: HSK6_WORDS, units: buildSimpleUnits(HSK6_WORDS) }
]

export const ALL_WORDS = LEVELS.flatMap((level) => level.words)

export function getLevel(levelId) {
  return LEVELS.find((l) => l.id === levelId)
}

export function getWordById(id) {
  return ALL_WORDS.find((w) => w.id === id)
}

export function getNextUnit(completedUnits) {
  for (const level of LEVELS) {
    for (const unit of level.units) {
      if (!completedUnits.includes(`${level.id}:${unit.id}`)) {
        return { levelId: level.id, levelLabel: level.label, unit }
      }
    }
  }
  return null
}
