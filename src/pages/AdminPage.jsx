import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAllLeaderboard } from '../lib/leaderboard'
import { useFirebaseSync } from '../store/FirebaseSyncContext'
import { ArrowLeftIcon } from '../components/Icons'

function formatTime(ts) {
  if (!ts) return '-'
  return new Date(ts).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
}

export default function AdminPage() {
  const navigate = useNavigate()
  const { user, authReady, isAdmin } = useFirebaseSync()
  const [entries, setEntries] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!isAdmin) return
    fetchAllLeaderboard()
      .then(setEntries)
      .catch((e) => setError(e.message))
  }, [isAdmin])

  if (!authReady) return null

  if (!isAdmin) {
    return (
      <div className="px-4 pt-6">
        <div className="mb-4 flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-gray-500">
            <ArrowLeftIcon />
          </button>
          <h1 className="text-xl text-brand-800">Quản trị</h1>
        </div>
        <p className="text-sm text-gray-500">
          {user ? 'Tài khoản này không có quyền truy cập trang quản trị.' : 'Bạn cần đăng nhập để xem trang này.'}
        </p>
      </div>
    )
  }

  const totalXp = entries?.reduce((s, e) => s + (e.xp || 0), 0) ?? 0
  const activeToday = entries?.filter((e) => e.updatedAt && Date.now() - e.updatedAt < 24 * 60 * 60 * 1000).length ?? 0

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Quản trị</h1>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      {!entries && !error && <p className="text-sm text-gray-400">Đang tải...</p>}

      {entries && (
        <>
          <div className="mb-4 grid grid-cols-3 gap-2">
            <div className="rounded-2xl bg-brand-100 p-3 text-center">
              <p className="text-xl text-brand-700">{entries.length}</p>
              <p className="text-xs text-brand-600">Người dùng</p>
            </div>
            <div className="rounded-2xl bg-teal-100 p-3 text-center">
              <p className="text-xl text-teal-700">{activeToday}</p>
              <p className="text-xs text-teal-600">Hoạt động 24h</p>
            </div>
            <div className="rounded-2xl bg-gold-100 p-3 text-center">
              <p className="text-xl text-gold-600">{totalXp}</p>
              <p className="text-xs text-gold-600">Tổng XP</p>
            </div>
          </div>

          <div className="space-y-2">
            {entries.map((e) => (
              <div key={e.uid} className="rounded-xl bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800">{e.nickname || '(chưa đặt biệt danh)'}</p>
                  <p className="text-xs text-gray-400">{formatTime(e.updatedAt)}</p>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Cấp {e.level ?? 1} · {e.xp ?? 0} XP · 🔥 {e.streak ?? 0} ngày · {e.wordsLearned ?? 0} từ
                </p>
                <p className="mt-1 truncate text-[10px] text-gray-300">{e.uid}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
