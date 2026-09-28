import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { getGrammarPoint } from '../data/grammar'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { VolumeIcon } from '../components/Icons'
import MiniQuiz from '../components/MiniQuiz'
import CelebrationBadge from '../components/CelebrationBadge'
import { askDeepseek, hasDeepseekKey, DeepseekError } from '../lib/deepseek'

function GrammarAskAi({ point }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const keyReady = hasDeepseekKey()

  async function handleAsk() {
    const q = question.trim()
    if (!q || loading) return
    setLoading(true)
    setError('')
    setAnswer('')
    const context = `Điểm ngữ pháp: ${point.title}\nCấu trúc: ${point.pattern}\nGiải thích: ${point.explanation}`
    try {
      const reply = await askDeepseek([
        {
          role: 'system',
          content:
            'Bạn là giáo viên tiếng Trung, trả lời ngắn gọn, dễ hiểu bằng tiếng Việt cho câu hỏi của học viên về điểm ngữ pháp dưới đây, có thể cho thêm ví dụ nếu cần.'
        },
        { role: 'user', content: `${context}\n\nCâu hỏi của học viên: ${q}` }
      ])
      setAnswer(reply)
    } catch (e) {
      setError(e instanceof DeepseekError ? e.message : 'Có lỗi xảy ra, thử lại sau.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-5 rounded-2xl bg-teal-50 p-4">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between text-left">
        <p className="text-sm font-semibold text-teal-700">🤖 Hỏi AI về điểm ngữ pháp này</p>
        <span className="text-teal-600">{open ? '−' : '+'}</span>
      </button>
      {open &&
        (!keyReady ? (
          <p className="mt-2 text-xs text-gray-600">
            Cần thêm API key DeepSeek.{' '}
            <button onClick={() => navigate('/cai-dat')} className="font-semibold text-brand-700 underline">
              Vào Cài đặt
            </button>
          </p>
        ) : (
          <div className="mt-3">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={2}
              placeholder="Ví dụ: khác gì với 了 bình thường?"
              className="w-full rounded-xl border border-teal-200 p-2 text-sm"
            />
            <button
              onClick={handleAsk}
              disabled={loading || !question.trim()}
              className="mt-2 rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              {loading ? 'Đang hỏi...' : 'Hỏi'}
            </button>
            {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
            {answer && <p className="mt-3 whitespace-pre-wrap text-sm text-gray-700">{answer}</p>}
          </div>
        ))}
    </div>
  )
}

// Xem ghi chu tuong tu trong LessonDetailPage.jsx: dat key theo pointKey de
// remount lai tu dau khi chuyen thang sang diem ngu phap khac.
export default function GrammarDetailPage() {
  const { pointKey } = useParams()
  return <GrammarDetailPageInner key={pointKey} />
}

function GrammarDetailPageInner() {
  const { pointKey } = useParams()
  const point = getGrammarPoint(pointKey)
  const { addXp, markGrammarComplete, completedGrammar } = useProgress()
  const [phase, setPhase] = useState('learn') // learn | quiz | done
  const [result, setResult] = useState({ correct: 0, total: 0 })

  // Xem ghi chu o TopicDetailPage: bai da hoan thanh thi khong cong XP nua.
  const awardXp = point && completedGrammar.includes(point.key) ? () => {} : addXp

  if (!point) {
    return (
      <div className="px-4 pt-6">
        <p>Không tìm thấy điểm ngữ pháp.</p>
        <Link to="/ngu-phap" className="text-brand-600">
          Quay lại danh sách ngữ pháp
        </Link>
      </div>
    )
  }

  function handleQuizDone(correct, total) {
    setResult({ correct, total })
    // Chi cong XP cho lan hoan thanh DAU TIEN - xem ghi chu o TopicDetailPage.
    awardXp(XP_REWARDS.grammarComplete)
    markGrammarComplete(point.key)
    playCelebrate()
    setPhase('done')
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <BackButton />
        <div>
          <h1 className="text-xl text-brand-800">{point.title}</h1>
          <p className="text-xs text-gray-500">{point.level}</p>
        </div>
      </div>

      {phase === 'learn' && (
        <>
          <div className="mb-4 rounded-2xl bg-brand-50 p-4">
            <p className="text-xs font-semibold text-brand-600">Cấu trúc</p>
            <p className="mt-1 text-lg text-brand-800">{point.pattern}</p>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-gray-700">{point.explanation}</p>

          <p className="mb-2 text-sm text-gray-500">Ví dụ:</p>
          <div className="space-y-2">
            {point.examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => speakChinese(ex.hanzi)}
                className="flex w-full items-center justify-between rounded-2xl bg-white p-3.5 text-left shadow-sm"
              >
                <div>
                  <p className="text-lg text-gray-800">{ex.hanzi}</p>
                  <p className="text-xs text-brand-600">{ex.pinyin}</p>
                  <p className="text-xs text-gray-500">{ex.meaning}</p>
                </div>
                <VolumeIcon width={16} height={16} className="shrink-0 text-gray-500" />
              </button>
            ))}
          </div>

          <GrammarAskAi point={point} />

          <button
            onClick={() => setPhase('quiz')}
            className="mt-5 w-full rounded-2xl bg-brand-700 py-3 text-lg text-white"
          >
            Làm bài tập
          </button>
        </>
      )}

      {phase === 'quiz' && (
        <MiniQuiz items={point.quiz} onDone={handleQuizDone} xpPerCorrect={XP_REWARDS.grammarQuizCorrect} addXp={awardXp} />
      )}

      {phase === 'done' && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <CelebrationBadge />
          <p className="text-xl">🎉 Hoàn thành!</p>
          <p className="mt-1 text-white/90">
            Đúng {result.correct}/{result.total} câu
          </p>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setPhase('learn')}
              className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white"
            >
              Xem lại
            </button>
            <Link to="/ngu-phap" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Điểm khác
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
