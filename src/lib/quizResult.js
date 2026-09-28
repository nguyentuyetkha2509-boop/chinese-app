// Nguong % dung toi thieu de duoc tinh la qua bai (mark complete, cong XP hoan
// thanh, mo bai tiep theo). Dung chung cho LessonDetailPage/GrammarDetailPage/
// TopicDetailPage/StoryDetailPage de khong lap lai logic tinh % o tung file.
export const QUIZ_PASS_THRESHOLD = 0.7

export function quizPassed(correct, total) {
  if (!total) return false
  return correct / total >= QUIZ_PASS_THRESHOLD
}
