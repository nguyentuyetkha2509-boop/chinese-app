import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { ALL_WORDS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { useFirebaseSync } from '../store/FirebaseSyncContext'
import { fetchSpeedGameLeaderboard, fetchSpeedGameStanding } from '../lib/leaderboard'
import { friendlyError } from '../lib/friendlyError'
import { speakChinese } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate } from '../lib/sfx'
import { loadJSON, saveJSON } from '../lib/storage'
import { ZapIcon } from '../components/Icons'
import { accentFor } from '../lib/colors'

const GAME_SECONDS = 60
const MEDAL = ['🥇', '🥈', '🥉']

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuestion() {
  const word = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)]
  const others = shuffle(ALL_WORDS.filter((w) => w.id !== word.id)).slice(0, 3)
  return { word, options: shuffle([word, ...others]) }
}

export default function SpeedGamePage() {
  const { addXp } = useProgress()
  const { user, publishSpeedGameBest } = useFirebaseSync()
  const [highScore, setHighScore] = useState(() => loadJSON('speedGameHighScore', 0))
  const [phase, setPhase] = useState('idle') // idle | playing | over
  const [timeLeft, setTimeLeft] = useState(GAME_SECONDS)
  const [score, setScore] = useState(0)
  const [combo, setCombo] = useState(0)
  const [question, setQuestion] = useState(() => buildQuestion())
  const [flash, setFlash] = useState(null) // { optionId, correct }
  const [top, setTop] = useState(null) // 3 nguoi dan diem cao nhat
  const [standing, setStanding] = useState(null) // { rank, total } cua chinh minh
  const [boardError, setBoardError] = useState(null)
  const timerRef = useRef(null)
  // Ky luc NGAY TRUOC khi vao van nay. Phai luu rieng vi luc van ket thuc,
  // setHighScore ben duoi da cap nhat highScore bang chinh so diem vua dat - neu
  // so voi gia tri MOI thi hoa diem cung bi tinh nham thanh "ky luc moi".
  const recordBeforeRef = useRef(highScore)
  const isNewRecord = phase === 'over' && score > 0 && score > recordBeforeRef.current

  useEffect(() => {
    if (phase !== 'playing') return
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [phase])

  useEffect(() => {
    if (phase === 'playing' && timeLeft === 0) {
      setPhase('over')
      setHighScore((prev) => {
        if (score > prev) {
          saveJSON('speedGameHighScore', score)
          playCelebrate()
          return score
        }
        return prev
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase])

  // Het gio: day ky luc len bang xep hang roi lay top 3 + thu hang cua minh ve.
  //
  // Day la ky luc CA NHAN (so voi ky luc cua chinh may nay), con viec so voi ban
  // tren dam may de khong lam tut hang thi nam trong publishSpeedGameBest.
  useEffect(() => {
    if (phase !== 'over') return
    if (!user) {
      setTop(null)
      setStanding(null)
      return
    }
    let cancelled = false
    const best = Math.max(score, recordBeforeRef.current)
    setBoardError(null)
    ;(async () => {
      try {
        // Phai day xong roi moi hoi thu hang, neu khong thi thu hang tra ve la
        // thu hang CU (chua tinh diem vua dat).
        await publishSpeedGameBest(best)
        const [rows, st] = await Promise.all([fetchSpeedGameLeaderboard(3), fetchSpeedGameStanding(best)])
        if (cancelled) return
        setTop(rows)
        setStanding(st)
      } catch (e) {
        // Mat mang thi chi khong hien duoc bang - man hinh ket qua van phai hien
        // binh thuong, khong duoc de loi mang lam hong ket qua vua choi.
        if (!cancelled) setBoardError(friendlyError(e))
      }
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, user])

  function startGame() {
    recordBeforeRef.current = highScore
    setPhase('playing')
    setTimeLeft(GAME_SECONDS)
    setScore(0)
    setCombo(0)
    setQuestion(buildQuestion())
    setFlash(null)
    setTop(null)
    setStanding(null)
    setBoardError(null)
  }

  function answer(option) {
    if (flash) return
    const correct = option.id === question.word.id
    if (correct) {
      const bonus = Math.min(combo, 5)
      setScore((s) => s + 10 + bonus)
      setCombo((c) => c + 1)
      playCorrect()
      addXp(2)
    } else {
      setCombo(0)
      playWrong()
    }
    setFlash({ optionId: option.id, correct })
    setTimeout(() => {
      setFlash(null)
      setQuestion(buildQuestion())
    }, 350)
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">⚡ Đua tốc độ</h1>
      </div>

      {phase === 'idle' && (
        <div className="rounded-3xl bg-gradient-to-br from-candy-500 via-brand-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/25">
            <ZapIcon width={38} height={38} />
          </span>
          <p className="mt-3 text-xl font-semibold">Trả lời càng nhiều càng tốt trong {GAME_SECONDS} giây!</p>
          <p className="mt-1 text-sm text-white/90">Đúng liên tiếp để nhân điểm combo 🔥</p>
          <p className="mt-4 text-sm text-white/80">Kỷ lục hiện tại: {highScore} điểm</p>
          <button onClick={startGame} className="mt-4 w-full rounded-xl bg-white py-3 font-semibold text-brand-700">
            Bắt đầu
          </button>
        </div>
      )}

      {phase === 'playing' && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-brand-700">{score} điểm</p>
              {combo >= 2 && <p className="text-xs font-semibold text-candy-600">🔥 Combo x{combo}</p>}
            </div>
            <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-500' : 'text-gray-700'}`}>
              {timeLeft}s
            </div>
          </div>
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className={`h-full rounded-full transition-all ${timeLeft <= 10 ? 'bg-red-500' : 'bg-gradient-to-r from-teal-500 to-brand-500'}`}
              style={{ width: `${(timeLeft / GAME_SECONDS) * 100}%` }}
            />
          </div>

          <button
            onClick={() => speakChinese(question.word.hanzi)}
            className="mb-4 flex w-full flex-col items-center justify-center rounded-3xl bg-white py-8 shadow-sm"
          >
            <p className="text-5xl text-gray-800">{question.word.hanzi}</p>
            <p className="mt-1 text-sm text-gray-500">{question.word.pinyin}</p>
          </button>

          <div className="grid grid-cols-2 gap-3">
            {question.options.map((opt, i) => {
              const accent = accentFor(i)
              const isFlashed = flash?.optionId === opt.id
              // Dap an sai thi lac luon: iPhone khong cho trang web rung may, nen
              // day la tin hieu "sai" thay the cho rung, va cung giup nhan ra ngay
              // ca khi dang o noi on ao khong nghe thay tieng.
              const cls = isFlashed
                ? flash.correct
                  ? 'border-teal-500 bg-teal-50'
                  : 'animate-shake border-red-400 bg-red-50'
                : `${accent.border} bg-white`
              return (
                <button
                  key={opt.id}
                  onClick={() => answer(opt)}
                  className={`rounded-xl border-2 p-4 text-center text-gray-700 transition ${cls}`}
                >
                  {opt.meaning}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {phase === 'over' && (
        <div className="rounded-3xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <p className="text-xl">{isNewRecord ? '🎉 Kỷ lục mới!' : 'Hết giờ!'}</p>
          <p className="mt-2 text-4xl font-bold">{score} điểm</p>
          <p className="mt-1 text-sm text-white/80">Kỷ lục cao nhất: {highScore} điểm</p>

          <div className="mt-4 rounded-2xl bg-white/15 p-3 text-left">
            <p className="text-sm font-semibold">⚡ Bảng xếp hạng Đua tốc độ</p>

            {/* Bang xep hang nam tren Firebase va chi nguoi da dang nhap moi
                doc duoc (xem firestore.rules), nen chua dang nhap thi noi ro
                thay vi de trong tron hoac hien loi ky thuat. */}
            {!user && (
              <p className="mt-1 text-xs text-white/90">
                Đăng nhập để điểm của bạn được tính vào bảng xếp hạng của mọi người.{' '}
                <Link to="/cai-dat" className="underline">
                  Vào Cài đặt
                </Link>
              </p>
            )}

            {user && boardError && <p className="mt-1 text-xs text-white/90">{boardError}</p>}
            {user && !boardError && !top && <p className="mt-1 text-xs text-white/80">Đang tải bảng xếp hạng...</p>}

            {user && top && top.length === 0 && (
              <p className="mt-1 text-xs text-white/80">Chưa ai có điểm. Bạn là người đầu tiên!</p>
            )}

            {user && top && top.length > 0 && (
              <>
                <div className="mt-2 space-y-1.5">
                  {top.map((e, i) => {
                    const isMe = e.uid === user.uid
                    return (
                      <div
                        key={e.uid}
                        className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                          isMe ? 'bg-white/30 font-semibold' : 'bg-white/10'
                        }`}
                      >
                        <span className="w-6 shrink-0 text-center">{MEDAL[i] || i + 1}</span>
                        <span className="flex-1 truncate">
                          {e.nickname || 'Ẩn danh'}
                          {isMe && ' (bạn)'}
                        </span>
                        <span className="shrink-0 font-semibold">{e.speedGameBest ?? 0}</span>
                      </div>
                    )
                  })}
                </div>
                {standing && (
                  <p className="mt-2 text-xs text-white/90">
                    Bạn đứng thứ <span className="font-semibold">{standing.rank}</span> trong{' '}
                    {standing.total} người chơi.
                  </p>
                )}
              </>
            )}
          </div>

          <div className="mt-4 flex gap-2">
            <button onClick={startGame} className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Chơi lại
            </button>
            <Link to="/" className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              Về trang chủ
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
