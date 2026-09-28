const PREFIX = 'hoctiengtrung:'

export function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function saveJSON(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    // localStorage day hoac bi chan - bo qua, du lieu chi mat khi reload
  }
}

// Chi TIEN DO HOC moi duoc dong bo giua cac may. Cac cai dat mang tinh rieng
// tung may (gio nhac hoc, gioi han tu moi/ngay, diem game, co da xem huong dan
// chua...) KHONG nam trong danh sach nay - neu khong, bam "Tai ve tu dam may"
// se am tham ghi de cai dat cua may dang dung bang cai dat cua may kia.
export const SYNCED_KEYS = [
  'srs',
  'completedUnits',
  'streak',
  'toneStats',
  'toneStatsByLevel',
  'writingStats',
  'writingPerfectCount',
  'completedGrammar',
  'completedDialogues',
  'completedStories',
  'completedTopics',
  'xp',
  'dailyXp',
  'newWordsToday',
  'dailyCombo'
]

// Xuat tien do hoc de day len dam may. Chi gom SYNCED_KEYS.
export function exportProgressData() {
  const data = {}
  for (const key of SYNCED_KEYS) {
    const raw = localStorage.getItem(PREFIX + key)
    if (raw === null) continue
    try {
      data[key] = JSON.parse(raw)
    } catch {
      // Bo qua 1 khoa bi hong con hon lam hong ca lan day len dam may.
    }
  }
  return data
}

// Nhap tien do tu dam may. Loc theo SYNCED_KEYS o CA HAI chieu: ban sao luu cu
// (lo chua ca cai dat) cung khong the ghi de nguoc lai cai dat cua may nay.
export function importProgressData(data) {
  if (!data || typeof data !== 'object') throw new Error('Dữ liệu sao lưu không hợp lệ')
  for (const [key, value] of Object.entries(data)) {
    if (!SYNCED_KEYS.includes(key)) continue
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  }
}
