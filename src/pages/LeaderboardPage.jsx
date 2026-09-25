import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchTopLeaderboard } from '../lib/leaderboard'
import { useFirebaseSync } from '../store/FirebaseSyncContext'
import { ArrowLeftIcon, TrophyIcon } from '../components/Icons'

const MEDAL = ['🥇', '🥈', '🥉']

export default function LeaderboardPage() {
  const navigate = useNavigate()
  const { user } = useFirebaseSync()
  const [entries, setEntries] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTopLeaderboard(50)
      .then(setEntries)
      .catch((e) => setError(e.message))
  }, [])

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Bảng xếp hạng</h1>
      </div>

      {!user && (
        <div className="mb-4 rounded-xl bg-sun-100 p-3 text-xs text-gray-700">
          Đăng nhập Google trong Cài đặt để tham gia bảng xếp hạng và theo dõi thứ hạng của bạn.
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      {!entries && !error && <p className="text-sm text-gray-400">Đang tải...</p>}

      {entries && entries.length === 0 && (
        <p className="text-sm text-gray-400">Chưa có ai trên bảng xếp hạng. Hãy là người đầu tiên!</p>
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
                <TrophyIcon width={16} height={16} className={isMe ? 'text-white' : 'text-gold-500'} />
                {e.xp ?? 0}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
