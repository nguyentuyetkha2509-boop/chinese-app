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
import { HSK5_LESSON_PLAN } from './lessonPlans5'
import { HSK6_LESSON_PLAN } from './lessonPlans6'

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

export const LEVELS = [
  { id: 'hsk1', label: 'HSK1', words: HSK1_WORDS, units: buildThemedUnits(HSK1_WORDS, HSK1_LESSON_PLAN) },
  { id: 'hsk2', label: 'HSK2', words: HSK2_WORDS, units: buildThemedUnits(HSK2_WORDS, HSK2_LESSON_PLAN) },
  { id: 'hsk3', label: 'HSK3', words: HSK3_WORDS, units: buildThemedUnits(HSK3_WORDS, HSK3_LESSON_PLAN) },
  { id: 'hsk4', label: 'HSK4', words: HSK4_WORDS, units: buildThemedUnits(HSK4_WORDS, HSK4_LESSON_PLAN) },
  { id: 'hsk5', label: 'HSK5', words: HSK5_WORDS, units: buildThemedUnits(HSK5_WORDS, HSK5_LESSON_PLAN) },
  { id: 'hsk6', label: 'HSK6', words: HSK6_WORDS, units: buildThemedUnits(HSK6_WORDS, HSK6_LESSON_PLAN) }
]

export const ALL_WORDS = LEVELS.flatMap((level) => level.words)

export function getLevel(levelId) {
  return LEVELS.find((l) => l.id === levelId)
}

export function getWordById(id) {
  return ALL_WORDS.find((w) => w.id === id)
}
