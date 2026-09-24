import { HSK1_WORDS } from './hsk1'
import { HSK2_WORDS } from './hsk2'
import { HSK3_WORDS } from './hsk3'
import { HSK4_WORDS } from './hsk4'

const WORDS_PER_UNIT = 10

function buildUnits(words) {
  return Array.from({ length: Math.ceil(words.length / WORDS_PER_UNIT) }, (_, i) => {
    const slice = words.slice(i * WORDS_PER_UNIT, (i + 1) * WORDS_PER_UNIT)
    return {
      id: i + 1,
      title: `Bài ${i + 1}`,
      words: slice
    }
  })
}

export const LEVELS = [
  { id: 'hsk1', label: 'HSK1', words: HSK1_WORDS, units: buildUnits(HSK1_WORDS) },
  { id: 'hsk2', label: 'HSK2', words: HSK2_WORDS, units: buildUnits(HSK2_WORDS) },
  { id: 'hsk3', label: 'HSK3', words: HSK3_WORDS, units: buildUnits(HSK3_WORDS) },
  { id: 'hsk4', label: 'HSK4', words: HSK4_WORDS, units: buildUnits(HSK4_WORDS) }
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
