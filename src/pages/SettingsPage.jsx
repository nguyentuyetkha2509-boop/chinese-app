import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDailyNewWordLimit, setDailyNewWordLimit, NEW_WORD_LIMIT_OPTIONS } from '../lib/curriculum'
import { useFirebaseSync } from '../store/FirebaseSyncContext'
import { playCorrect, playWrong } from '../lib/sfx'
import { ArrowLeftIcon } from '../components/Icons'

function formatTime(ts) {
  if (!ts) return null
  return new Date(ts).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
}

function FirebaseSyncSection() {
  const { user, authReady, status, error, lastSyncedAt, signIn, signOut, pushNow, pullNow } = useFirebaseSync()
  const [connectChoice, setConnectChoice] = useState(null) // { hasRemoteData, remoteUpdatedAt } | null
  const [busy, setBusy] = useState(false)

  async function handleSignIn() {
    setBusy(true)
    try {
      const info = await signIn()
      if (info.hasRemoteData) {
        setConnectChoice(info)
      } else {
        await pushNow()
      }
      playCorrect()
    } catch {
      playWrong()
    } finally {
      setBusy(false)
    }
  }

  async function handleChoicePull() {
    setBusy(true)
    await pullNow().catch(() => playWrong())
    setConnectChoice(null)
    setBusy(false)
  }

  async function handleChoicePush() {
    setBusy(true)
    await pushNow()
    setConnectChoice(null)
    setBusy(false)
    playCorrect()
  }

  async function handleManualSync() {
    setBusy(true)
    await pushNow()
    setBusy(false)
  }

  async function handleManualPull() {
    if (!window.confirm('Tải về sẽ GHI ĐÈ tiến độ hiện tại trên máy này bằng bản trên đám mây. Tiếp tục?')) return
    setBusy(true)
    await pullNow().catch(() => playWrong())
    setBusy(false)
  }

  function handleSignOut() {
    if (!window.confirm('Đăng xuất? App sẽ không còn tự động sao lưu nữa cho đến khi bạn đăng nhập lại.')) return
    signOut()
  }

  if (!authReady) return null

  return (
    <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-base text-gray-800">Đồng bộ tài khoản (khuyến nghị)</p>
      <p className="mt-1 text-xs text-gray-500">
        Đăng nhập Google để tự động sao lưu tiến độ lên đám mây. Mở app trên điện thoại hay máy tính khác, đăng nhập
        đúng tài khoản là lấy ngay bản mới nhất - không sợ Safari tự xóa dữ liệu hay đổi máy bị mất.
      </p>

      {!user ? (
        <div className="mt-3">
          <button
            onClick={handleSignIn}
            disabled={busy}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 disabled:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
              <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.96v2.33A9 9 0 0 0 9 18z" />
              <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.04l2.99-2.33z" />
              <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l2.99 2.33C4.66 5.17 6.65 3.58 9 3.58z" />
            </svg>
            {busy ? 'Đang đăng nhập...' : 'Đăng nhập với Google'}
          </button>
          {error && <p className="mt-2 text-[11px] text-red-500">{error}</p>}
        </div>
      ) : connectChoice ? (
        <div className="mt-3 rounded-xl bg-sun-100 p-3">
          <p className="text-xs text-gray-700">
            Tìm thấy bản sao lưu trên đám mây (cập nhật lúc {formatTime(connectChoice.remoteUpdatedAt)}). Bạn muốn
            dùng bản nào?
          </p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleChoicePull}
              disabled={busy}
              className="flex-1 rounded-lg bg-white py-2 text-xs font-semibold text-brand-700"
            >
              Tải về (ghi đè máy này)
            </button>
            <button
              onClick={handleChoicePush}
              disabled={busy}
              className="flex-1 rounded-lg bg-brand-700 py-2 text-xs font-semibold text-white"
            >
              Đẩy lên (ghi đè bản trên mây)
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <div className="flex items-center gap-2">
            {user.photoURL && <img src={user.photoURL} alt="" className="h-8 w-8 rounded-full" />}
            <p className="text-sm text-gray-700">{user.displayName || user.email}</p>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {status === 'syncing' && 'Đang đồng bộ...'}
            {status === 'synced' && lastSyncedAt && `✅ Đã đồng bộ lúc ${formatTime(lastSyncedAt)}`}
            {status === 'error' && `⚠️ ${error || 'Có lỗi khi đồng bộ.'}`}
            {status === 'idle' && lastSyncedAt && `Lần đồng bộ gần nhất: ${formatTime(lastSyncedAt)}`}
            {status === 'idle' && !lastSyncedAt && 'Đã đăng nhập, sẽ tự đồng bộ khi bạn học.'}
          </p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={handleManualSync}
              disabled={busy}
              className="flex-1 rounded-xl bg-brand-700 py-2.5 text-xs font-semibold text-white disabled:opacity-50"
            >
              Đồng bộ ngay
            </button>
            <button
              onClick={handleManualPull}
              disabled={busy}
              className="flex-1 rounded-xl border border-brand-300 py-2.5 text-xs font-semibold text-brand-700 disabled:opacity-50"
            >
              Tải về từ đám mây
            </button>
          </div>
          <button onClick={handleSignOut} className="mt-2 w-full text-center text-[11px] text-gray-400 underline">
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  )
}

export default function SettingsPage() {
  const navigate = useNavigate()
  const [newWordLimit, setNewWordLimit] = useState(() => getDailyNewWordLimit())

  function handleLimitChange(n) {
    setNewWordLimit(n)
    setDailyNewWordLimit(n)
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Cài đặt</h1>
      </div>

      <div className="mb-4 rounded-2xl bg-white p-4 shadow-sm">
        <p className="text-base text-gray-800">Giới hạn từ mới mỗi ngày</p>
        <p className="mt-1 text-xs text-gray-500">
          Học ít từ mới mỗi ngày nhưng đều đặn giúp nhớ lâu hơn và tránh dồn ứ ôn tập. Chỉ áp dụng cho mục "Học hôm
          nay" ở trang chủ, không khóa các bài học khác.
        </p>
        <div className="mt-3 flex gap-2">
          {NEW_WORD_LIMIT_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => handleLimitChange(n)}
              className={`flex-1 rounded-xl py-2 text-sm font-semibold ${
                newWordLimit === n ? 'bg-brand-700 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {n} từ
            </button>
          ))}
        </div>
      </div>

      <FirebaseSyncSection />
    </div>
  )
}
