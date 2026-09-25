// Doc/ghi tien do hoc len Firestore, duoi document rieng cua tung nguoi dung
// (users/{uid}/progress/data) - khop voi Firestore Rules chi cho phep chinh
// chu uid do doc/ghi.
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from './firebase'
import { exportAllData, importAllData } from './storage'

function progressDocRef(uid) {
  return doc(db, 'users', uid, 'progress', 'data')
}

export async function pushToFirestore(uid) {
  const payload = { updatedAt: Date.now(), data: exportAllData() }
  await setDoc(progressDocRef(uid), payload)
  return payload.updatedAt
}

export async function pullFromFirestore(uid) {
  const snap = await getDoc(progressDocRef(uid))
  if (!snap.exists()) return null
  const remote = snap.data()
  if (!remote?.data) return null
  importAllData(remote.data)
  return remote.updatedAt
}

export async function checkRemote(uid) {
  const snap = await getDoc(progressDocRef(uid))
  if (!snap.exists()) return { hasRemoteData: false, remoteUpdatedAt: null }
  const remote = snap.data()
  return { hasRemoteData: !!remote?.data, remoteUpdatedAt: remote?.updatedAt ?? null }
}
