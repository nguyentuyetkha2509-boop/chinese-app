// Danh sach huy hieu thanh tich - moi huy hieu co dieu kien check(stats) rieng.
export const BADGES = [
  { id: 'first-lesson', icon: '🎯', title: 'Khởi đầu', desc: 'Hoàn thành bài học đầu tiên', check: (s) => s.unitsDone >= 1 },
  { id: 'streak-3', icon: '🔥', title: 'Chăm chỉ', desc: 'Học 3 ngày liên tiếp', check: (s) => s.streak >= 3 },
  { id: 'streak-7', icon: '⚡', title: 'Kiên trì', desc: 'Học 7 ngày liên tiếp', check: (s) => s.streak >= 7 },
  { id: 'streak-30', icon: '👑', title: 'Bền bỉ', desc: 'Học 30 ngày liên tiếp', check: (s) => s.streak >= 30 },
  { id: 'words-100', icon: '📖', title: '100 từ', desc: 'Học được 100 từ vựng', check: (s) => s.learned >= 100 },
  { id: 'words-500', icon: '📚', title: '500 từ', desc: 'Học được 500 từ vựng', check: (s) => s.learned >= 500 },
  { id: 'words-all', icon: '🏆', title: 'Bậc thầy', desc: 'Học hết toàn bộ từ vựng', check: (s) => s.learned >= s.total },
  { id: 'hsk1-done', icon: '🥉', title: 'Xong HSK1', desc: 'Hoàn thành hết các bài HSK1', check: (s) => s.hsk1Done },
  { id: 'hsk2-done', icon: '🥈', title: 'Xong HSK2', desc: 'Hoàn thành hết các bài HSK2', check: (s) => s.hsk2Done },
  { id: 'hsk3-done', icon: '🥇', title: 'Xong HSK3', desc: 'Hoàn thành hết các bài HSK3', check: (s) => s.hsk3Done },
  { id: 'writing-20', icon: '✍️', title: 'Viết đẹp', desc: 'Viết hoàn hảo 20 lần', check: (s) => s.writingPerfectCount >= 20 },
  {
    id: 'tone-master',
    icon: '🎵',
    title: 'Cao thủ thanh điệu',
    desc: 'Đúng từ 90% trở lên, ít nhất 30 câu luyện thanh điệu',
    check: (s) => s.toneTotal >= 30 && s.toneAccuracy >= 90
  }
]

export function getEarnedBadgeIds(stats) {
  return new Set(BADGES.filter((b) => b.check(stats)).map((b) => b.id))
}
