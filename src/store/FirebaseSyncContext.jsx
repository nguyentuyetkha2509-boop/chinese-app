import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth'
import { auth, googleProvider } from '../lib/firebase'
import { useProgress } from './ProgressContext'
import { pushToFirestore, pullFromFirestore, checkRemote } from '../lib/firebaseSync'
import { getMyEntry, setNickname as saveNickname, updateMyStats } from '../lib/leaderboard'
import { getLevelInfo } from '../lib/gamification'

const FirebaseSyncContext = createContext(null)

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

  useEffect(() => onAuthStateChanged(auth, (u) => {
    setUser(u)
    setAuthReady(true)
  }), [])

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
      return info
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

  async function pullNow() {
    if (!user) return
    setStatus('syncing')
    setError(null)
    try {
      const remoteUpdatedAt = await pullFromFirestore(user.uid)
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

  return <FirebaseSyncContext.Provider value={value}>{children}</FirebaseSyncContext.Provider>
}

export function useFirebaseSync() {
  const ctx = useContext(FirebaseSyncContext)
  if (!ctx) throw new Error('useFirebaseSync phai dung ben trong FirebaseSyncProvider')
  return ctx
}
