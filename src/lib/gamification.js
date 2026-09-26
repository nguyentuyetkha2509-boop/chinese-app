// He thong XP/cap do don gian: 100 XP moi cap.
const XP_PER_LEVEL = 100

export function getLevelInfo(xp) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1
  const xpInLevel = xp % XP_PER_LEVEL
  return { level, xpInLevel, xpForNext: XP_PER_LEVEL }
}

// 20 truoc day qua thap - chi can 4 cau tra loi dung la dat, khong phan anh
// dung khoi luong 1 combo/ngay thuc te (hoc tu + ngu phap + viet chu thuong
// ~150-200 XP). Nang len de thanh muc tieu co y nghia, gan sat voi lam xong
// combo hom nay thay vi dat ngay tu vai cau dau.
export const DAILY_GOAL_XP = 150

export const XP_REWARDS = {
  quizCorrect: 5,
  unitComplete: 30,
  flashcardReview: 3,
  toneCorrect: 3,
  writingPerfect: 10,
  writingDone: 5,
  storyQuizCorrect: 5,
  storyComplete: 15,
  grammarQuizCorrect: 5,
  grammarComplete: 10,
  dictationCorrect: 5
}
