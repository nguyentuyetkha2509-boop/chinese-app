import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth'
import { auth, googleProvider } from '../lib/firebase'
import { useProgress } from './ProgressContext'
import { pushToFirestore, pullFromFirestore, checkRemote } from '../lib/firebaseSync'
import { getMyEntry, setNickname as saveNickname, updateMyStats } from '../lib/leaderboard'
import { getLevelInfo } from '../lib/gamification'

const FirebaseSyncContext = createContext(null)
// Context rieng, chi chua { user, authReady } - it doi hon nhieu so voi
// status/lastSyncedAt (doi lien tuc moi lan tu dong day len dam may). Tach
// rieng de App.jsx (bao ca cay component) chi re-render khi THAT SU dang
// nhap/dang xuat, khong bi keo theo moi lan status "syncing" <-> "synced"
// nhay - truoc day gay giat lien tuc moi thao tac SAU KHI da dang nhap
// Google (vi luc do auto-push chay 4s/lan lam status doi suot).
const FirebaseAuthContext = createContext(null)

const AUTO_PUSH_DELAY_MS = 4000
export const ADMIN_EMAIL = 'nguyentuyetkha2509@gmail.com'

export function FirebaseSyncProvider({ children }) {
  const progress = useProgress()
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)
  const [status, setStatus] = useState('idle') // idle | syncing | synced | error
  const [error, setError] = useState(null)
  const [lastSyncedAt, setLastSyncedAt] = useState(null)
  const [needsNickname, setNeedsNickname] = useState(false)
  const [nickname, setNicknameState] = useState(null)
  const debounceRef = useRef(null)
  const skipNextAutoPush = useRef(true)
  const reconciledUidRef = useRef(null)

  useEffect(() => onAuthStateChanged(auth, (u) => {
    setUser(u)
    setAuthReady(true)
  }), [])

  function isLocalProgressEmpty() {
    return progress.xp === 0 && progress.completedUnits.length === 0 && Object.keys(progress.srsState).length === 0
  }

  // Phien dang nhap Google co the duoc khoi phuc tu dinh danh da luu (vd.
  // localStorage bi xoa rieng nhung phien Firebase Auth van con), khien app
  // vao thang giao dien chinh voi tien do local rong ma khong qua man hinh
  // Chao mung/Cai dat - noi von co logic hoi Tai ve/Day len. Neu khong kiem
  // tra o day, luot tu-dong-day-len ben duoi se am tham ghi de mat sach ban
  // sao luu that su tren dam may bang du lieu rong nay.
  useEffect(() => {
    if (!user) return
    if (reconciledUidRef.current === user.uid) return
    reconciledUidRef.current = user.uid
    if (!isLocalProgressEmpty()) return
    checkRemote(user.uid).then((info) => {
      if (info.hasRemoteData) pullNow(user.uid)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  // Moi khi co phien dang nhap (dang nhap moi hoac khoi phuc tu session cu),
  // kiem tra xem da dat bi danh cho bang xep hang chua.
  useEffect(() => {
    if (!user) {
      setNeedsNickname(false)
      setNicknameState(null)
      return
    }
    getMyEntry(user.uid).then((entry) => {
      setNeedsNickname(!entry?.nickname)
      setNicknameState(entry?.nickname ?? null)
    }).catch((e) => {
      console.error('Không lấy được biệt danh:', e)
    })
  }, [user])

  async function submitNickname(newNickname) {
    if (!user) return
    await saveNickname(user.uid, newNickname)
    setNeedsNickname(false)
    setNicknameState(newNickname)
    await pushLeaderboardStats()
  }

  async function pushLeaderboardStats() {
    if (!user) return
    const { level } = getLevelInfo(progress.xp)
    await updateMyStats(user.uid, {
      xp: progress.xp,
      level,
      streak: progress.streak.count,
      wordsLearned: Object.keys(progress.srsState).length
    })
  }

  async function signIn() {
    setStatus('syncing')
    setError(null)
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const info = await checkRemote(result.user.uid)
      setStatus('idle')
      return { ...info, uid: result.user.uid }
    } catch (e) {
      setError(e.code === 'auth/popup-closed-by-user' ? 'Bạn đã đóng cửa sổ đăng nhập.' : e.message)
      setStatus('error')
      throw e
    }
  }

  async function signOutUser() {
    await firebaseSignOut(auth)
    setStatus('idle')
    setError(null)
    setLastSyncedAt(null)
  }

  async function pushNow() {
    if (!user) return
    setStatus('syncing')
    setError(null)
    try {
      const ts = await pushToFirestore(user.uid)
      await pushLeaderboardStats()
      setLastSyncedAt(ts)
      setStatus('synced')
    } catch (e) {
      setError(e.message)
      setStatus('error')
    }
  }

  // Nhan uidOverride de goi ngay sau signIn() ma khong phai cho user state
  // (tu onAuthStateChanged) cap nhat xong - tranh dua giua 2 luong bat dong
  // bo nay khien pullNow() vo tinh no-op ngay sau khi vua dang nhap.
  async function pullNow(uidOverride) {
    const uid = uidOverride || user?.uid
    if (!uid) return
    setStatus('syncing')
    setError(null)
    try {
      const remoteUpdatedAt = await pullFromFirestore(uid)
      setLastSyncedAt(remoteUpdatedAt)
      setStatus('synced')
      setTimeout(() => window.location.reload(), 800)
      return remoteUpdatedAt
    } catch (e) {
      setError(e.message)
      setStatus('error')
      throw e
    }
  }

  // Tu dong day len Firestore (debounce) moi khi tien do hoc thay doi.
  useEffect(() => {
    if (!user) return
    if (skipNextAutoPush.current) {
      skipNextAutoPush.current = false
      return
    }
    // Khong bao gio tu dong day tien do RONG len - tranh ghi de mat ban sao
    // luu that su khi tien do local bi mat (vd. do trinh duyet xoa du lieu)
    // truoc khi kip doi chieu voi dam may.
    if (isLocalProgressEmpty()) return
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      pushNow()
    }, AUTO_PUSH_DELAY_MS)
    return () => clearTimeout(debounceRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    user,
    progress.srsState,
    progress.completedUnits,
    progress.streak,
    progress.xp,
    progress.toneStats,
    progress.writingStats,
    progress.writingPerfectCount
  ])

  const value = {
    user,
    authReady,
    connected: !!user,
    status,
    error,
    lastSyncedAt,
    needsNickname,
    nickname,
    isAdmin: user?.email === ADMIN_EMAIL,
    signIn,
    signOut: signOutUser,
    pushNow,
    pullNow,
    submitNickname
  }

  const authValue = useMemo(
    () => ({
      user,
      authReady,
      connected: !!user,
      needsNickname,
      nickname,
      isAdmin: user?.email === ADMIN_EMAIL
    }),
    [user, authReady, needsNickname, nickname]
  )

  return (
    <FirebaseAuthContext.Provider value={authValue}>
      <FirebaseSyncContext.Provider value={value}>{children}</FirebaseSyncContext.Provider>
    </FirebaseAuthContext.Provider>
  )
}

export function useFirebaseSync() {
  const ctx = useContext(FirebaseSyncContext)
  if (!ctx) throw new Error('useFirebaseSync phai dung ben trong FirebaseSyncProvider')
  return ctx
}

// Ban rut gon, on dinh cua useFirebaseSync() - dung o nhung noi chi can biet
// da dang nhap hay chua (vd. App.jsx) de tranh re-render dư thua noi tren.
export function useFirebaseAuth() {
  const ctx = useContext(FirebaseAuthContext)
  if (!ctx) throw new Error('useFirebaseAuth phai dung ben trong FirebaseSyncProvider')
  return ctx
}
