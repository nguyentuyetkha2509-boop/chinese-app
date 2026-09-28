// Spaced repetition don gian kieu SM-2, luu trang thai tung tu trong localStorage.
import { loadJSON, saveJSON } from './storage'

const KEY = 'srs'
const DAY_MS = 24 * 60 * 60 * 1000

export function isDue(card, now = Date.now()) {
  return !card || card.due <= now
}

// rating: 0 = Lai (quen), 1 = Kho, 2 = On, 3 = De
export function nextSchedule(card, rating) {
  const prev = card || { interval: 0, ease: 2.5, reps: 0, lapses: 0 }
  let { interval, ease, reps, lapses = 0 } = prev

  // The da co lich ma CHUA toi han, va nguoi hoc van nho ra: day la luyen
  // them, khong phai on tap dung han. Tra ve nguyen lich cu.
  //
  // Truoc day cho nay khong co gi chan: muc "Tu kho" co tinh cho phep mo lai
  // dung nhung the do bat cu luc nao, va moi lan cham lai nhan interval len
  // ~2.5 lan nua (xem nhanh ben duoi). Chi ~6 vong bam "On them" la interval
  // cua dung nhung tu KHO NHAT bi day ra hon mot nam - tuc la chung bien mat
  // khoi luong on tap theo ngay, trong khi day la nhung tu nguoi hoc can gap
  // lai nhat. Lich hoc bi hong chu khong chi la chuyen XP.
  //
  // Cham "Quen roi" (0) thi KHONG di theo duong nay: quen thi phai quay lai
  // som, du the co dang nam ngoai lich.
  if (card && card.due > Date.now() && rating !== 0) {
    return { ...prev, due: card.due, updatedAt: Date.now() }
  }

  if (rating === 0) {
    reps = 0
    lapses += 1
    interval = 0.02 // ~30 phut, xem lai gan nhu ngay
  } else {
    ease = Math.max(1.3, ease + (rating === 3 ? 0.15 : rating === 1 ? -0.2 : 0))
    reps += 1
    if (reps === 1) interval = rating === 1 ? 0.5 : 1
    else if (reps === 2) interval = rating === 1 ? 1 : 3
    else interval = Math.round(interval * ease * (rating === 1 ? 0.7 : 1))
    interval = Math.max(interval, 0.5)
  }

  return {
    interval,
    ease,
    reps,
    lapses,
    due: Date.now() + interval * DAY_MS,
    updatedAt: Date.now()
  }
}

export function loadSrsState() {
  return loadJSON(KEY, {})
}

export function saveSrsState(state) {
  saveJSON(KEY, state)
}

export function getDueWordIds(allWordIds, srsState, limit = 20) {
  const now = Date.now()
  const due = []
  const untouched = []
  for (const id of allWordIds) {
    const card = srsState[id]
    if (!card) untouched.push(id)
    else if (card.due <= now) due.push({ id, due: card.due })
  }
  due.sort((a, b) => a.due - b.due)
  const result = due.map((d) => d.id)
  for (const id of untouched) {
    if (result.length >= limit) break
    result.push(id)
  }
  return result.slice(0, limit)
}

const LEECH_THRESHOLD = 2

export function getLeechWordIds(allWordIds, srsState) {
  return allWordIds
    .filter((id) => (srsState[id]?.lapses ?? 0) >= LEECH_THRESHOLD)
    .sort((a, b) => (srsState[b]?.lapses ?? 0) - (srsState[a]?.lapses ?? 0))
}

export function getCardStats(allWordIds, srsState) {
  const now = Date.now()
  let learned = 0
  let due = 0
  let newCount = 0
  for (const id of allWordIds) {
    const card = srsState[id]
    if (!card) newCount += 1
    else {
      learned += 1
      if (card.due <= now) due += 1
    }
  }
  return { total: allWordIds.length, learned, due, newCount }
}
