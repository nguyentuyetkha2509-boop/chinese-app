// He thong XP/cap do don gian: 100 XP moi cap.
const XP_PER_LEVEL = 100

export function getLevelInfo(xp) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1
  const xpInLevel = xp % XP_PER_LEVEL
  return { level, xpInLevel, xpForNext: XP_PER_LEVEL }
}

export const DAILY_GOAL_XP = 20

export const XP_REWARDS = {
  quizCorrect: 5,
  unitComplete: 30,
  flashcardReview: 3,
  toneCorrect: 3,
  writingPerfect: 10,
  writingDone: 5,
  storyQuizCorrect: 5,
  storyComplete: 15
}
