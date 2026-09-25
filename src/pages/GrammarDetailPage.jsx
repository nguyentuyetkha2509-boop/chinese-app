import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getGrammarPoint } from '../data/grammar'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { ArrowLeftIcon, VolumeIcon } from '../components/Icons'
import MiniQuiz from '../components/MiniQuiz'
import CelebrationBadge from '../components/CelebrationBadge'

export default function GrammarDetailPage() {
  const { pointKey } = useParams()
  const navigate = useNavigate()
  const point = getGrammarPoint(pointKey)
  const { addXp } = useProgress()
  const [phase, setPhase] = useState('learn') // learn | quiz | done
  const [result, setResult] = useState({ correct: 0, total: 0 })

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
    addXp(XP_REWARDS.grammarComplete)
    playCelebrate()
    setPhase('done')
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <button onClick={() => navigate('/ngu-phap')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
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
                <VolumeIcon width={16} height={16} className="shrink-0 text-gray-400" />
              </button>
            ))}
          </div>

          <button
            onClick={() => setPhase('quiz')}
            className="mt-5 w-full rounded-2xl bg-brand-700 py-3 text-lg text-white"
          >
            Làm bài tập
          </button>
        </>
      )}

      {phase === 'quiz' && (
        <MiniQuiz items={point.quiz} onDone={handleQuizDone} xpPerCorrect={XP_REWARDS.grammarQuizCorrect} addXp={addXp} />
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
