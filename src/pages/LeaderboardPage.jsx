import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { fetchTopLeaderboard } from '../lib/leaderboard'
import { friendlyError } from '../lib/friendlyError'
import { useFirebaseAuth } from '../store/FirebaseSyncContext'
import { TrophyIcon } from '../components/Icons'

const MEDAL = ['🥇', '🥈', '🥉']

export default function LeaderboardPage() {
  const { user, authReady } = useFirebaseAuth()
  const [entries, setEntries] = useState(null)
  const [error, setError] = useState(null)

  // Phai doi authReady roi moi tai. Vua mo trang thi Firebase chua kip cho biet
  // nguoi dung da dang nhap chua (user con la null), nen neu tai ngay lap tuc
  // thi request di ra nhu nguoi la va bi quy tac Firestore chan (403). Effect cu
  // chi chay dung MOT lan luc mount va khong chay lai khi thong tin dang nhap ve
  // sau - nen ke ca nguoi DA dang nhap, mo thang trang nay (hoac bam tai lai
  // trang) cung luon thay dong loi ky thuat "Missing or insufficient
  // permissions." bang tieng Anh, va khong bao gio tu tai lai duoc.
  useEffect(() => {
    if (!authReady) return
    if (!user) {
      setEntries([])
      setError(null)
      return
    }
    let cancelled = false
    setError(null)
    fetchTopLeaderboard(50)
      .then((rows) => {
        if (!cancelled) setEntries(rows)
      })
      .catch((e) => {
        if (!cancelled) setError(friendlyError(e))
      })
    return () => {
      cancelled = true
    }
  }, [authReady, user])

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">Bảng xếp hạng</h1>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {!authReady && <p className="text-sm text-gray-500">Đang tải...</p>}

      {/* Chua dang nhap thi quy tac Firestore khong cho xem bang (xem
          firestore.rules). Bao ro rang, thay vi de trang quay mai hoac hien
          dong loi ky thuat bang tieng Anh. */}
      {authReady && !user && (
        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
          <p className="text-sm text-gray-600">
            Bảng xếp hạng chỉ xem được sau khi đăng nhập. Đăng nhập để vừa xem được thứ hạng của mọi
            người, vừa tham gia bảng.
          </p>
          <Link
            to="/cai-dat"
            className="mt-3 inline-block rounded-xl bg-brand-700 px-4 py-2 text-sm font-semibold text-white"
          >
            Vào Cài đặt để đăng nhập
          </Link>
        </div>
      )}

      {user && !entries && !error && <p className="text-sm text-gray-500">Đang tải...</p>}

      {user && entries && entries.length === 0 && (
        <p className="text-sm text-gray-500">Chưa có ai trên bảng xếp hạng. Hãy là người đầu tiên!</p>
      )}

      <div className="space-y-2">
        {entries?.map((e, i) => {
          const isMe = user && e.uid === user.uid
          return (
            <div
              key={e.uid}
              className={`flex items-center gap-3 rounded-2xl p-3.5 shadow-sm ${
                isMe ? 'bg-brand-700 text-white' : 'bg-white'
              }`}
            >
              <span className="w-7 shrink-0 text-center text-lg">{MEDAL[i] || i + 1}</span>
              <div className="flex-1">
                <p className={`text-sm font-semibold ${isMe ? 'text-white' : 'text-gray-800'}`}>
                  {e.nickname || 'Ẩn danh'} {isMe && '(bạn)'}
                </p>
                <p className={`text-xs ${isMe ? 'text-white/80' : 'text-gray-500'}`}>
                  Cấp {e.level ?? 1} · 🔥 {e.streak ?? 0} ngày · {e.wordsLearned ?? 0} từ
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold">
                <TrophyIcon width={20} height={20} className={isMe ? 'text-white' : 'text-gold-500'} />
                {e.xp ?? 0}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
