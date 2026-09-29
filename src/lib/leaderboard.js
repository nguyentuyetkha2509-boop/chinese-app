// Doc/ghi bang xep hang cong khai - khac voi tien do rieng tu o
// users/{uid}/progress, du lieu o day (leaderboard/{uid}) ai dang nhap cung
// doc duoc (theo Firestore Rules), nhung chi chinh chu uid moi ghi duoc, va
// chi gom bi danh + so lieu tong quan (khong co chi tiet tung tu da hoc).
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getCountFromServer,
  query,
  where,
  orderBy,
  limit as fsLimit,
  setDoc
} from 'firebase/firestore'
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

// Bang xep hang rieng cua tro "Dua toc do": xep theo diem cao nhat tung dat
// (truong speedGameBest), khac bang chinh la xep theo XP.
//
// Nguoi chua tung choi khong co truong speedGameBest nen KHONG xuat hien o day -
// Firestore tu bo qua nhung ban ghi thieu truong dung de sap xep. Do dung la y
// muon: bang nay chi gom nguoi da choi.
export async function fetchSpeedGameLeaderboard(count = 3) {
  const q = query(collection(db, COLLECTION), orderBy('speedGameBest', 'desc'), fsLimit(count))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }))
}

// Thu hang cua chinh minh, kem tong so nguoi choi.
//
// Phai DEM bang may chu (getCountFromServer) chu khong tai het bang ve roi dem:
// dem thi khong ton tien doc theo so nguoi, con tai ve thi cang dong nguoi choi
// cang nang. Bam "choi lai" lien tuc ma moi lan lai tai ca bang thi rat phi.
export async function fetchSpeedGameStanding(score) {
  const [caoHon, tatCa] = await Promise.all([
    getCountFromServer(query(collection(db, COLLECTION), where('speedGameBest', '>', score))),
    getCountFromServer(query(collection(db, COLLECTION), where('speedGameBest', '>=', 0)))
  ])
  return { rank: caoHon.data().count + 1, total: tatCa.data().count }
}

// Danh cho trang quan tri: lay nhieu nhat MAX_ADMIN_ROWS nguoi dung hoat dong
// gan day nhat.
//
// Truoc day ham nay KHONG co gioi han nao, tuc la doc toan bo bang xep hang ve
// may nguoi dung. Voi app hoc ca nhan thi chua thay gi, nhung so nguoi tang len
// thi moi lan mo trang quan tri se tai het ve mot luot - cham va ton tien doc
// Firestore. Gioi han nay khong lam hong gi: trang quan tri chi de xem qua.
const MAX_ADMIN_ROWS = 500
export async function fetchAllLeaderboard() {
  const q = query(collection(db, COLLECTION), orderBy('updatedAt', 'desc'), fsLimit(MAX_ADMIN_ROWS))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ uid: d.id, ...d.data() }))
}
