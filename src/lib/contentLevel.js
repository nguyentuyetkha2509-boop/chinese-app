// Uoc luong/doi chieu "cap do kho" cho cac noi dung Luyen them (Chu de, Hoi
// thoai, Truyen) de sap xep tu de den kho va bao "Tiep theo" giong Bai hoc,
// thay vi de danh sach roi rac khong theo thu tu nao.
import { LEVELS } from '../data/levels'

// Tra ve so hang THAP NHAT trong chuoi cap do (vd "HSK2-3" -> 2, "HSK1" -> 1)
// de sap xep - dung cho Truyen dai (da co san truong `level` dang chuoi).
export function parseLevelRank(levelStr) {
  const match = String(levelStr || '').match(/\d/)
  return match ? Number(match[0]) : 99
}

// Tra cuu 1 lan: hanzi -> cap do (1-6) no thuoc ve, dua tren du lieu tu vung
// that thay vi gan nhan thu cong de tranh sai lech voi du lieu.
const levelIndexByHanzi = new Map()
LEVELS.forEach((level, idx) => {
  for (const w of level.words) {
    if (!levelIndexByHanzi.has(w.hanzi)) levelIndexByHanzi.set(w.hanzi, idx + 1)
  }
})

// Cap do "dien hinh" cua 1 danh sach tu = TRUNG VI (median) cap do cac tu
// trong do - lay max se bi 1-2 tu kho keo hau het chu de don len HSK3-4 het,
// khong con phan biet duoc chu de nao de/kho hon chu de nao. Median phan anh
// dung hon "phan lon tu trong nay o muc nao".
export function estimateLevelFromWords(words) {
  const levels = words.map((w) => levelIndexByHanzi.get(w.hanzi)).filter(Boolean).sort((a, b) => a - b)
  if (levels.length === 0) return 1
  return levels[Math.floor(levels.length / 2)]
}
