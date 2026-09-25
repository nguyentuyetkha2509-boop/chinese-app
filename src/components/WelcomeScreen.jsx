import { useState } from 'react'
import { useFirebaseSync } from '../store/FirebaseSyncContext'
import { loadJSON, saveJSON } from '../lib/storage'
import { playCorrect, playWrong } from '../lib/sfx'

const SEEN_KEY = 'hasSeenWelcome'

export function hasSeenWelcome() {
  return loadJSON(SEEN_KEY, false)
}

function markWelcomeSeen() {
  saveJSON(SEEN_KEY, true)
}

// Man hinh chao mung + dang nhap khi mo app lan dau, giong cac app binh
// thuong - nhung van cho phep dung thu khong can tai khoan de khong pha vo
// trai nghiem "hoc ngay, khong rao can" da co truoc do.
export default function WelcomeScreen({ onDone }) {
  const { signIn, pullNow } = useFirebaseSync()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  async function handleSignIn() {
    setBusy(true)
    setError(null)
    try {
      const info = await signIn()
      markWelcomeSeen()
      // Tai khoan nay da co ban sao luu tren dam may - may nay dang "trong"
      // (moi mo app lan dau / vua bi mat du lieu cuc bo), nen PHAI keo ban
      // dam may ve truoc khi vao app. Neu bo qua buoc nay, luc dong bo tu
      // dong chay sau do se day du lieu TRONG len ghi de mat sach ban sao
      // luu that su - day chinh la nguyen nhan gay mat tien do khi dang
      // nhap lai.
      if (info.hasRemoteData) {
        await pullNow(info.uid)
        return // pullNow() se tu reload trang, khong can goi onDone() nua
      }
      playCorrect()
      onDone()
    } catch (e) {
      setError(e.message)
      playWrong()
      setBusy(false)
    }
  }

  function handleGuest() {
    markWelcomeSeen()
    onDone()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-600 via-candy-500 to-sky-500 px-6 text-center text-white">
      <div className="text-7xl">🐼</div>
      <h1 className="mt-4 text-3xl font-bold">PandaChinese</h1>
      <p className="mt-2 text-sm text-white/85">
        Học từ vựng, phát âm và chữ Hán theo giáo trình HSK1-6
      </p>

      <button
        onClick={handleSignIn}
        disabled={busy}
        className="mt-10 flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-gray-700 shadow-lg disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
          <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 0 0 9 18z" />
          <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.04l2.99-2.33z" />
          <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l2.99 2.33C4.66 5.17 6.65 3.58 9 3.58z" />
        </svg>
        {busy ? 'Đang đăng nhập...' : 'Đăng nhập với Google'}
      </button>
      <p className="mt-2 max-w-xs text-[11px] text-white/70">
        Để tự động sao lưu tiến độ và tham gia bảng xếp hạng.
      </p>
      {error && <p className="mt-2 text-xs text-red-100">{error}</p>}

      <button onClick={handleGuest} className="mt-6 text-sm text-white/80 underline">
        Học ngay, không cần tài khoản
      </button>
    </div>
  )
}
