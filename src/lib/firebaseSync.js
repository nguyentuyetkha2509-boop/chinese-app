// Doc/ghi tien do hoc len Firestore, duoi document rieng cua tung nguoi dung
// (users/{uid}/progress/data) - khop voi Firestore Rules chi cho phep chinh
// chu uid do doc/ghi.
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { exportProgressData, importProgressData } from './storage'

function progressDocRef(uid) {
  return doc(db, 'users', uid, 'progress', 'data')
}

export async function pushToFirestore(uid) {
  const payload = { updatedAt: Date.now(), data: exportProgressData() }
  await setDoc(progressDocRef(uid), payload)
  return payload.updatedAt
}

export async function pullFromFirestore(uid) {
  const snap = await getDoc(progressDocRef(uid))
  if (!snap.exists()) return null
  const remote = snap.data()
  if (!remote?.data) return null
  importProgressData(remote.data)
  return remote.updatedAt
}

// Chi tinh la "co du lieu that su" khi ban tren dam may THUC SU chua tien do
// (khop dinh nghia voi isLocalProgressEmpty o FirebaseSyncContext) - tranh
// truong hop ban dam may cung rong (vd. tu truoc khi co chot an toan chong
// day-len-du-lieu-rong) khien phia goi (reconciliation luc dang nhap) cu
// tuong la "co ban sao that" roi keo ve + tu tai lai trang, ma tai lai xong
// van rong nen lai kich hoat y het - tao thanh vong lap tu tai lai vo han.
function hasMeaningfulProgress(data) {
  if (!data) return false
  const hasXp = (data.xp ?? 0) > 0
  const hasUnits = Array.isArray(data.completedUnits) && data.completedUnits.length > 0
  const hasSrs = data.srsState && Object.keys(data.srsState).length > 0
  return hasXp || hasUnits || hasSrs
}

export async function checkRemote(uid) {
  const snap = await getDoc(progressDocRef(uid))
  if (!snap.exists()) return { hasRemoteData: false, remoteUpdatedAt: null }
  const remote = snap.data()
  return { hasRemoteData: hasMeaningfulProgress(remote?.data), remoteUpdatedAt: remote?.updatedAt ?? null }
}
