// Doc/ghi bang xep hang cong khai - khac voi tien do rieng tu o
// users/{uid}/progress, du lieu o day (leaderboard/{uid}) ai dang nhap cung
// doc duoc (theo Firestore Rules), nhung chi chinh chu uid moi ghi duoc, va
// chi gom bi danh + so lieu tong quan (khong co chi tiet tung tu da hoc).
import { collection, doc, getDoc, getDocs, query, orderBy, limit as fsLimit, setDoc } from 'firebase/firestore'
import { db } from './firebase'

const COLLECTION = 'leaderboard'

export async function getMyEntry(uid) {
  const snap = await getDoc(doc(db, COLLECTION, uid))
  return snap.exists() ? snap.data() : null
}

export async function setNickname(uid, nickname) {
  await setDoc(doc(db, COLLECTION, uid), { nickname, updatedAt: Date.now() }, { merge: true })
}

// Cap nhat so lieu tong quan (xp, level, streak, so tu da hoc) len entry cua
// chinh nguoi dung, giu nguyen bi danh da dat.
export async function updateMyStats(uid, stats) {
  await setDoc(doc(db, COLLECTION, uid), { ...stats, updatedAt: Date.now() }, { merge: true })
}

export async function fetchTopLeaderboard(count = 50) {
  const q = query(collection(db, COLLECTION), orderBy('xp', 'desc'), fsLimit(count))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }))
}

// Danh cho trang quan tri: lay toan bo, khong gioi han so luong.
export async function fetchAllLeaderboard() {
  const q = query(collection(db, COLLECTION), orderBy('updatedAt', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }))
}
