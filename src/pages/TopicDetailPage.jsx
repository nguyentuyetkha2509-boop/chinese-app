import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { getTopic, getTopicWords, TOPIC_QUIZ_POOL } from '../data/topics'
import { getNumberLesson, getNumberLessonWords, NUMBER_QUIZ_POOL } from '../data/numberLessons'
import { useProgress } from '../store/ProgressContext'
import { speakChinese } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { VolumeIcon } from '../components/Icons'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'
import { getRadicalHint, getRadicalSymbol, hasRadicalHint } from '../lib/radicals'
import { buildQuiz, shuffle } from '../lib/quiz'
import { QUIZ_PASS_THRESHOLD, quizPassed } from '../lib/quizResult'
import QuizQuestion from '../components/QuizQuestion'
import CelebrationBadge from '../components/CelebrationBadge'

const QUIZ_MAX_QUESTIONS = 20

// Bai "So va tien" co cung cach hoc (xem tu -> kiem tra) va cung luu tien do vao
// completedTopics, nen dung chung trang nay thay vi chep lai; chi khac nguon du lieu
// va noi quay lai. Khoa bai so/tien khong trung khoa chu de nen khong lan tien do.
const SOURCES = {
  topic: {
    get: getTopic,
    getWords: getTopicWords,
    pool: TOPIC_QUIZ_POOL,
    listPath: '/chu-de',
    listLabel: 'Chủ đề khác',
    notFound: 'Không tìm thấy chủ đề.',
    notFoundBack: 'Quay lại danh sách chủ đề'
  },
  number: {
    get: getNumberLesson,
    getWords: getNumberLessonWords,
    pool: NUMBER_QUIZ_POOL,
    listPath: '/bai-hoc?muc=so-tien',
    listLabel: 'Bài khác',
    notFound: 'Không tìm thấy bài học.',
    notFoundBack: 'Quay lại danh sách bài học'
  }
}

// Xem ghi chu tuong tu trong LessonDetailPage.jsx: dat key theo topicKey de
// remount lai tu dau khi chuyen thang sang chu de khac.
export default function TopicDetailPage({ kind = 'topic' }) {
  const { topicKey } = useParams()
  return <TopicDetailPageInner key={`${kind}:${topicKey}`} kind={kind} />
}

function TopicDetailPageInner({ kind }) {
  const { topicKey } = useParams()
  const source = SOURCES[kind]
  const { addXp, markTopicComplete, completedTopics } = useProgress()
  const topic = source.get(topicKey)
  const words = useMemo(() => source.getWords(topicKey), [source, topicKey])
  const [phase, setPhase] = useState('study') // study | quiz | done
  // Chu de co the co rat nhieu tu, nen bai kiem tra chi lay ngau nhien toi da
  // QUIZ_MAX_QUESTIONS tu de khong qua dai; moi lan lam la mot bo cau khac.
  const quiz = useMemo(() => buildQuiz(shuffle(words).slice(0, QUIZ_MAX_QUESTIONS), source.pool), [words, source])
  const [quizIndex, setQuizIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)
  const [passed, setPassed] = useState(true)

  // Chi cong XP cho lan hoan thanh DAU TIEN. markTopicComplete chay lai thi vo
  // hai (no chi ghi de), nhung addXp thi CONG DON - nen truoc day lam lai cung
  // mot chu de la lai kiem duoc XP mai khong gioi han, va bang xep hang (co
  // that, moi nguoi xem duoc) mat het y nghia.
  const awardXp = topic && completedTopics.includes(topic.key) ? () => {} : addXp

  if (!topic) {
    return (
      <div className="px-4 pt-6">
        <p>{source.notFound}</p>
        <Link to={source.listPath} className="text-brand-600">
          {source.notFoundBack}
        </Link>
      </div>
    )
  }

  function chooseAnswer(answer) {
    if (selected !== null) return
    setSelected(answer)
    const q = quiz[quizIndex]
    const isCorrect = q.type === 'truefalse' ? answer === q.isTrue : answer.id === q.word.id
    if (isCorrect) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      awardXp(XP_REWARDS.quizCorrect)
    } else {
      playWrong()
    }
    setTimeout(() => {
      setSelected(null)
      if (quizIndex + 1 < quiz.length) {
        setQuizIndex((i) => i + 1)
      } else {
        const finalCorrect = correctCount + (isCorrect ? 1 : 0)
        const didPass = quizPassed(finalCorrect, quiz.length)
        setPassed(didPass)
        if (didPass) {
          markTopicComplete(topic.key)
          playCelebrate()
        } else {
          playWrong()
        }
        setPhase('done')
      }
    }, 700)
  }

  function retryQuiz() {
    setQuizIndex(0)
    setCorrectCount(0)
    setSelected(null)
    setPhase('quiz')
  }

  return (
    <div className="px-4 pt-6">
      <div className="mb-4 flex items-center gap-2">
        <BackButton />
        <h1 className="text-xl text-brand-800">
          {topic.icon} {topic.title}
        </h1>
      </div>

      {phase === 'study' && (
        <>
          <div className="space-y-2">
            {words.map((word, i) => {
              const accent = accentFor(i)
              return (
                <div
                  key={word.id}
                  className={`animate-card-in rounded-2xl border-l-4 bg-white p-4 shadow-sm ${accent.leftBorder}`}
                  style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}
                >
                  <button
                    onClick={() => speakChinese(word.hanzi)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <div>
                      <p className="text-2xl text-gray-800">{word.hanzi}</p>
                      <p className={`text-sm ${accent.text}`}>{word.pinyin}</p>
                      <p className="text-sm text-gray-500">{word.meaning}</p>
                    </div>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}>
                      <VolumeIcon width={22} height={22} />
                    </span>
                  </button>
                  {hasPictograph(word.hanzi) && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-sun-100 p-2.5">
                      <PictographIcon char={word.hanzi} className="h-9 w-9 shrink-0 text-sun-700" />
                      <p className="text-xs text-gray-700">💡 {PICTOGRAPH_HINTS[word.hanzi]}</p>
                    </div>
                  )}
                  {!hasPictograph(word.hanzi) && hasRadicalHint(word.hanzi) && (
                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-teal-100 p-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-lg text-teal-700">
                        {getRadicalSymbol(word.hanzi)}
                      </span>
                      <p className="text-xs text-gray-700">🧩 {getRadicalHint(word.hanzi)}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <button
            onClick={() => setPhase('quiz')}
            className="mt-5 w-full rounded-2xl bg-brand-700 py-3 text-lg text-white"
          >
            Làm bài kiểm tra
          </button>
        </>
      )}

      {phase === 'quiz' && quiz[quizIndex] && (
        <QuizQuestion
          key={quizIndex}
          question={quiz[quizIndex]}
          index={quizIndex}
          total={quiz.length}
          selected={selected}
          onAnswer={chooseAnswer}
        />
      )}

      {phase === 'done' && passed && (
        <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
          <CelebrationBadge />
          <p className="text-xl">🎉 Hoàn thành!</p>
          <p className="mt-1 text-white/90">
            Đúng {correctCount}/{quiz.length} câu
          </p>
          <div className="mt-4 flex gap-2">
            <Link to={source.listPath} className="flex-1 rounded-xl bg-white/20 py-2.5 font-semibold text-white">
              {source.listLabel}
            </Link>
            <Link to="/on-tap" className="flex-1 rounded-xl bg-white py-2.5 font-semibold text-brand-700">
              Ôn tập flashcard
            </Link>
          </div>
          <Link to="/hoc-hom-nay" className="mt-3 block text-center text-xs text-white/80 underline">
            Về Học hôm nay
          </Link>
        </div>
      )}

      {phase === 'done' && !passed && (
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <p className="text-xl">😅 Chưa đạt</p>
          <p className="mt-1 text-gray-600">
            Đúng {correctCount}/{quiz.length} câu - cần đúng từ {Math.round(QUIZ_PASS_THRESHOLD * 100)}% trở lên mới qua bài.
          </p>
          <button onClick={retryQuiz} className="mt-4 w-full rounded-xl bg-brand-700 py-2.5 font-semibold text-white">
            Làm lại
          </button>
          <Link to={source.listPath} className="mt-2 block rounded-xl bg-gray-100 py-2.5 text-sm font-semibold text-gray-700">
            {source.listLabel}
          </Link>
        </div>
      )}
    </div>
  )
}
