import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useProgress } from './ProgressContext'
import { getLevelInfo } from '../lib/gamification'
import { friendlyError } from '../lib/friendlyError'

// Tai Firebase sau khi giao dien da hien (xem lib/firebaseClient.js). Giu lai
// promise de moi lan goi dung chung mot lan tai.
let firebasePromise = null
function loadFirebase() {
  if (!firebasePromise) {
    firebasePromise = import('../lib/firebaseClient').catch((e) => {
      // Tai hong (vd. mat mang khi chua co cache) thi cho phep thu lai lan sau.
      firebasePromise = null
      throw e
    })
  }
  return firebasePromise
}

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
  const reconciledUidRef = useRef(null)
  // Cong tac an toan: chi khi BAT thi tien do moi duoc TU DONG day len dam may.
  // Xem khoi doi chieu khi dang nhap ben duoi de biet khi nao duoc bat.
  const [autoPushArmed, setAutoPushArmed] = useState(false)
  // Tang len moi khi trinh duyet co mang tro lai (xem effect ben duoi).
  const [onlineTick, setOnlineTick] = useState(0)

  // Ban Firebase da tai xong, de signIn goi popup NGAY trong luot bam: cho them
  // mot nhip await truoc signInWithPopup co the bi trinh duyet chan popup.
  const fbRef = useRef(null)

  useEffect(() => {
    let unsubscribe = null
    let cancelled = false
    loadFirebase()
      .then((fb) => {
        if (cancelled) return
        fbRef.current = fb
        unsubscribe = fb.onAuthStateChanged(fb.auth, (u) => {
          setUser(u)
          setAuthReady(true)
        })
      })
      .catch((e) => {
        // Khong tai duoc Firebase (offline lan dau) thi van cho vao app nhu
        // chua dang nhap, hoc offline binh thuong.
        console.error('Không tải được Firebase:', e)
        if (!cancelled) setAuthReady(true)
      })
    return () => {
      cancelled = true
      if (unsubscribe) unsubscribe()
    }
  }, [])

  // Khi trinh duyet co mang tro lai thi tang so nay de khoi doi chieu ben duoi
  // chay lai. Khong co no thi chi can 1 lan mat mang dung luc dang nhap la viec
  // sao luu bi khoa suot ca phien, du sau do mang da tro lai binh thuong.
  useEffect(() => {
    const handleOnline = () => setOnlineTick((t) => t + 1)
    window.addEventListener('online', handleOnline)
    return () => window.removeEventListener('online', handleOnline)
  }, [])

  function isLocalProgressEmpty() {
    return progress.xp === 0 && progress.completedUnits.length === 0 && Object.keys(progress.srsState).length === 0
  }

  // Doi chieu khi dang nhap - day la cho QUYET DINH xem tien do co duoc phep
  // tu dong day len dam may hay khong.
  //
  // Truoc day cho nay dung co "skipNextAutoPush" chi chan duoc luot day dau
  // tien trong moi phien mo trang, va co do KHONG BAO GIO duoc dat lai khi
  // dang xuat. Ket hop voi reconciledUidRef cung khong duoc xoa khi dang xuat
  // (nen dang nhap lai cung tai khoan thi bo qua luon buoc doi chieu nay),
  // thanh ra: dang xuat roi dang nhap lai = 4 giay sau tien do CU tu dong de
  // len ban sao MOI HON tren dam may, khong hoi gi. Do la mat du lieu that.
  //
  // Cach lam moi: mac dinh KHOA. Chi mo khoa khi biet chac khong the mat gi.
  // Phien dang nhap Google co the duoc khoi phuc tu dinh danh da luu (vd.
  // localStorage bi xoa rieng nhung phien Firebase Auth van con), khien app
  // vao thang giao dien chinh voi tien do local rong ma khong qua man hinh
  // Chao mung/Cai dat - noi von co logic hoi Tai ve/Day len.
  useEffect(() => {
    if (!user) {
      // Dang xuat: khoa lai va quen uid cu, de lan dang nhap sau - ke ca cung
      // tai khoan - van duoc doi chieu lai tu dau.
      setAutoPushArmed(false)
      reconciledUidRef.current = null
      return
    }
    if (reconciledUidRef.current === user.uid) return

    setAutoPushArmed(false)
    let cancelled = false
    loadFirebase()
      .then((fb) => fb.checkRemote(user.uid))
      .then((info) => {
        if (cancelled) return
        reconciledUidRef.current = user.uid
        if (!info.hasRemoteData) {
          // Tren may chua co ban sao nao -> khong co gi de mat, mo khoa ngay.
          setAutoPushArmed(true)
          return
        }
        if (isLocalProgressEmpty()) {
          // May nay dang trong ma tren may co ban sao that su -> keo ve truoc.
          // pullNow() tu tai lai trang va mo khoa sau khi tai xong.
          return pullNow(user.uid)
        }
        // Ca hai ben deu co du lieu -> giu khoa, cho nguoi dung tu chon
        // "Tai ve" hay "Day len" o man hinh Cai dat.
      })
      .catch((e) => {
        // Khong kiem tra duoc (vd. mat mang). Giu khoa: tha khong sao luu con
        // hon am tham ghi de mat ban sao that su. Se thu lai khi co mang.
        // reconciledUidRef co y KHONG duoc dat o day, de lan co mang con chay lai.
        if (!cancelled) console.error('Không kiểm tra được bản sao trên mây:', e)
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, onlineTick])

  // Moi khi co phien dang nhap (dang nhap moi hoac khoi phuc tu session cu),
  // kiem tra xem da dat bi danh cho bang xep hang chua.
  useEffect(() => {
    if (!user) {
      setNeedsNickname(false)
      setNicknameState(null)
      return
    }
    // Co huy: nguoi dung co the dang xuat truoc khi doc xong, ket qua ve muon
    // khong duoc phep ghi de state cua nguoi da dang xuat.
    let cancelled = false
    loadFirebase().then((fb) => fb.getMyEntry(user.uid)).then((entry) => {
      if (cancelled) return
      setNeedsNickname(!entry?.nickname)
      setNicknameState(entry?.nickname ?? null)
    }).catch((e) => {
      if (!cancelled) console.error('Không lấy được biệt danh:', e)
    })
    return () => {
      cancelled = true
    }
  }, [user])

  async function submitNickname(newNickname) {
    if (!user) return
    const fb = await loadFirebase()
    await fb.setNickname(user.uid, newNickname)
    setNeedsNickname(false)
    setNicknameState(newNickname)
    await pushLeaderboardStats()
  }

  async function pushLeaderboardStats() {
    if (!user) return
    const { level } = getLevelInfo(progress.xp)
    const fb = await loadFirebase()
    await fb.updateMyStats(user.uid, {
      xp: progress.xp,
      level,
      streak: progress.streak.count,
      wordsLearned: Object.keys(progress.srsState).length
    })
  }

  // Bang xep hang chi la so lieu tong quan, khong chua tien do chi tiet, nen
  // khong can cho cong tac an toan cua viec sao luu tien do (autoPushArmed).
  // Truoc day neu hai ben deu co du lieu thi cong tac bi khoa cho den khi nguoi
  // dung vao Cai dat chon, khien bang xep hang dung yen o so cu (vd. Cap 5 trong
  // khi may dang la Cap 80). Chi ghi khi XP local cao hon ban tren bang, de may
  // co it tien do hon khong lam tut hang cua chinh minh.
  useEffect(() => {
    if (!user || nickname === null || progress.xp === 0) return
    let cancelled = false
    const timer = setTimeout(async () => {
      try {
        const fb = await loadFirebase()
        const entry = await fb.getMyEntry(user.uid)
        if (cancelled || (entry?.xp ?? 0) >= progress.xp) return
        await pushLeaderboardStats()
      } catch (e) {
        console.error('Không cập nhật được bảng xếp hạng:', e)
      }
    }, AUTO_PUSH_DELAY_MS)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, nickname, progress.xp])

  // Day ky luc tro "Dua toc do" len bang xep hang, tra ve diem TOT NHAT dang
  // duoc ghi nhan tren bang (khong phai diem cua may nay).
  //
  // Phai DOC ban dang luu tren may chu roi moi ghi: ky luc la thu chi duoc TANG.
  // Nguoi dung choi tren may khac (hoac xoa du lieu trinh duyet) co the dang co
  // diem thap hon ban da luu tren dam may - ghi thang len la tu lam tut hang cua
  // chinh minh. Tra ve diem tren bang de cho goi biet dung diem ma tinh thu hang:
  // may nay chua choi bao gio nhung da choi o may khac thi diem cua may nay la 0,
  // lay no ma tinh thu hang thi bao sai.
  //
  // useCallback de ham nay khong doi moi lan provider re-render (provider re-render
  // lien tuc theo trang thai dong bo). Neu doi, moi noi goi trong useEffect se
  // chay lai va goi lai Firebase lien tuc.
  const publishSpeedGameBest = useCallback(
    async (score) => {
      if (!user || !Number.isFinite(score)) return 0
      const fb = await loadFirebase()
      const entry = await fb.getMyEntry(user.uid)
      const dangLuu = entry?.speedGameBest ?? 0
      if (dangLuu >= score) return dangLuu
      await fb.updateMyStats(user.uid, { speedGameBest: score })
      return score
    },
    [user]
  )

  async function signIn() {
    setStatus('syncing')
    setError(null)
    try {
      const fb = fbRef.current ?? (await loadFirebase())
      const result = await fb.signInWithPopup(fb.auth, fb.googleProvider)
      const info = await fb.checkRemote(result.user.uid)
      setStatus('idle')
      return { ...info, uid: result.user.uid }
    } catch (e) {
      setError(friendlyError(e))
      setStatus('error')
      throw e
    }
  }

  async function signOutUser() {
    const fb = await loadFirebase()
    await fb.signOut(fb.auth)
    setStatus('idle')
    setError(null)
    setLastSyncedAt(null)
  }

  async function pushNow() {
    if (!user) return
    setStatus('syncing')
    setError(null)
    try {
      const fb = await loadFirebase()
      const ts = await fb.pushToFirestore(user.uid)
      await pushLeaderboardStats()
      setLastSyncedAt(ts)
      setStatus('synced')
      // Nguoi dung da chu dong chon huong di (hoac bam sao luu ngay) -> tu day
      // tro di cho phep dong bo tu dong.
      setAutoPushArmed(true)
    } catch (e) {
      setError(friendlyError(e))
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
      const fb = await loadFirebase()
      const remoteUpdatedAt = await fb.pullFromFirestore(uid)
      setLastSyncedAt(remoteUpdatedAt)
      setStatus('synced')
      // Da tai xong ban tren dam may ve may nay -> khong con gi de ghi de mat,
      // cho phep dong bo tu dong tu day tro di.
      setAutoPushArmed(true)
      // Tai ve se ghi de tien do dang co trong bo nho, phai tai lai trang de
      // moi state trong app doc lai dung so lieu vua nhap.
      setTimeout(() => window.location.reload(), 800)
      return remoteUpdatedAt
    } catch (e) {
      setError(friendlyError(e))
      setStatus('error')
      throw e
    }
  }

  // Tu dong day len Firestore (debounce) moi khi tien do hoc thay doi.
  useEffect(() => {
    if (!user) return
    // Chi day khi cong tac an toan da BAT (xem khoi doi chieu khi dang nhap).
    // autoPushArmed nam trong danh sach phu thuoc ben duoi, nen ngay khi vua
    // duoc mo khoa thi tien do dang cho cung duoc day di luon, khong phai doi
    // them mot thao tac hoc nua moi kich hoat.
    if (!autoPushArmed) return
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
    autoPushArmed,
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
    submitNickname,
    publishSpeedGameBest
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
