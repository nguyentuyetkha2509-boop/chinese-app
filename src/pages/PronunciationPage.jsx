import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLevel } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { speakChinese, isTtsSupported } from '../lib/tts'
import { playCorrect, playWrong } from '../lib/sfx'
import { VolumeIcon, MicIcon, ArrowLeftIcon } from '../components/Icons'
import LevelTabs from '../components/LevelTabs'
import { accentFor } from '../lib/colors'

const TONE_LABELS = {
  1: { mark: 'ˉ', name: 'Thanh 1 (ngang)', idleClass: 'border-sky-200 bg-sky-100 text-sky-700' },
  2: { mark: 'ˊ', name: 'Thanh 2 (lên)', idleClass: 'border-teal-200 bg-teal-100 text-teal-700' },
  3: { mark: 'ˇ', name: 'Thanh 3 (xuống rồi lên)', idleClass: 'border-sun-200 bg-sun-100 text-sun-700' },
  4: { mark: 'ˋ', name: 'Thanh 4 (xuống mạnh)', idleClass: 'border-candy-200 bg-candy-100 text-candy-700' }
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickToneQuestion(pool) {
  return pool[Math.floor(Math.random() * pool.length)]
}

function ToneQuiz({ words }) {
  const singleToneWords = useMemo(
    () => words.filter((w) => w.tones.length === 1 && w.tones[0] !== 0),
    [words]
  )
  const { recordToneAnswer, toneStats } = useProgress()
  const [word, setWord] = useState(() => pickToneQuestion(singleToneWords))
  const [feedback, setFeedback] = useState(null)

  if (!singleToneWords.length) {
    return <p className="text-sm text-gray-500">Cấp độ này chưa có từ đơn âm để luyện thanh điệu.</p>
  }

  function playCurrent() {
    speakChinese(word.hanzi)
  }

  function answer(tone) {
    if (feedback) return
    const correct = tone === word.tones[0]
    recordToneAnswer(correct)
    if (correct) playCorrect()
    else playWrong()
    setFeedback({ correct, tone })
  }

  function nextQuestion() {
    setFeedback(null)
    setWord(pickToneQuestion(singleToneWords))
  }

  const accuracy = toneStats.total ? Math.round((toneStats.correct / toneStats.total) * 100) : null
  const rightTone = TONE_LABELS[word.tones[0]]

  return (
    <div>
      <p className="mb-3 text-sm text-gray-500">
        Nghe rồi chọn đúng thanh điệu của chữ. {accuracy !== null && `Độ chính xác: ${accuracy}%`}
      </p>
      <button
        onClick={playCurrent}
        className="flex w-full flex-col items-center justify-center rounded-3xl bg-white py-10 shadow-sm"
      >
        <p className="text-6xl text-gray-800">{word.hanzi}</p>
        <span className="mt-4 flex items-center gap-1 text-brand-600">
          <VolumeIcon /> Nghe lại
        </span>
      </button>

      {feedback && (
        <div
          className={`mt-4 rounded-2xl p-3 text-center text-sm font-semibold ${
            feedback.correct ? 'bg-teal-100 text-teal-700' : 'bg-red-100 text-red-600'
          }`}
        >
          {feedback.correct
            ? `✅ Chính xác! ${word.hanzi} là ${rightTone.mark} ${rightTone.name}`
            : `❌ Chưa đúng. ${word.hanzi} là ${rightTone.mark} ${rightTone.name}, không phải ${TONE_LABELS[feedback.tone].mark} ${TONE_LABELS[feedback.tone].name}`}
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((tone) => {
          const isChosen = feedback?.tone === tone
          const isRight = tone === word.tones[0]
          const showResult = feedback && (isChosen || isRight)
          return (
            <button
              key={tone}
              onClick={() => answer(tone)}
              className={`relative rounded-2xl border-2 p-4 text-center transition ${
                showResult
                  ? isRight
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-red-400 bg-red-50'
                  : TONE_LABELS[tone].idleClass
              }`}
            >
              {showResult && (
                <span
                  className={`absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-xs text-white ${
                    isRight ? 'bg-teal-500' : 'bg-red-500'
                  }`}
                >
                  {isRight ? '✓' : '✕'}
                </span>
              )}
              <p className="text-3xl">{TONE_LABELS[tone].mark}</p>
              <p className="mt-1 text-xs opacity-80">{TONE_LABELS[tone].name}</p>
            </button>
          )
        })}
      </div>

      {feedback && (
        <button
          onClick={nextQuestion}
          className="mt-4 w-full rounded-2xl bg-brand-700 py-3 text-center font-semibold text-white"
        >
          Câu tiếp theo →
        </button>
      )}
    </div>
  )
}

function ListenBrowse({ words }) {
  const items = useMemo(() => shuffle(words).slice(0, 30), [words])
  return (
    <div className="space-y-2">
      {items.map((word, i) => {
        const accent = accentFor(i)
        return (
          <button
            key={word.id}
            onClick={() => speakChinese(word.hanzi)}
            className={`flex w-full items-center justify-between rounded-xl border-l-4 bg-white p-3 shadow-sm ${accent.leftBorder}`}
          >
            <div className="text-left">
              <p className="text-xl text-gray-800">{word.hanzi}</p>
              <p className={`text-sm ${accent.text}`}>{word.pinyin}</p>
            </div>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${accent.bg} ${accent.text}`}>
              <VolumeIcon width={16} height={16} />
            </span>
          </button>
        )
      })}
    </div>
  )
}

function RecordCompare({ words }) {
  const [word, setWord] = useState(() => words[Math.floor(Math.random() * words.length)])
  const [status, setStatus] = useState('idle') // idle | recording | recorded | error
  const [audioUrl, setAudioUrl] = useState(null)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      chunksRef.current = []
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data)
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        setAudioUrl(URL.createObjectURL(blob))
        stream.getTracks().forEach((t) => t.stop())
        setStatus('recorded')
      }
      recorder.start()
      mediaRecorderRef.current = recorder
      setStatus('recording')
    } catch {
      setStatus('error')
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop()
  }

  function nextWord() {
    setWord(words[Math.floor(Math.random() * words.length)])
    setAudioUrl(null)
    setStatus('idle')
  }

  return (
    <div>
      <p className="mb-3 text-sm text-gray-500">Nghe mẫu, ghi âm giọng bạn rồi nghe lại để so sánh.</p>
      <div className="rounded-3xl bg-gradient-to-br from-sky-500 via-teal-500 to-brand-500 p-6 text-center text-white shadow-lg">
        <p className="text-5xl">{word.hanzi}</p>
        <p className="mt-1 text-white/90">{word.pinyin}</p>
        <p className="text-sm text-white/80">{word.meaning}</p>
        <button
          onClick={() => speakChinese(word.hanzi)}
          className="mx-auto mt-3 flex items-center gap-1 rounded-full bg-white/20 px-4 py-1.5"
        >
          <VolumeIcon width={20} height={20} /> Nghe mẫu
        </button>
      </div>

      <div className="mt-5 flex flex-col items-center gap-3">
        {status !== 'recording' ? (
          <button
            onClick={startRecording}
            className="flex items-center gap-2 rounded-full bg-candy-600 px-6 py-3 text-white"
          >
            <MicIcon width={20} height={20} /> Bắt đầu ghi âm
          </button>
        ) : (
          <button onClick={stopRecording} className="flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-white">
            <MicIcon width={20} height={20} /> Dừng ghi âm
          </button>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500">Không dùng được micro (cần cấp quyền hoặc HTTPS).</p>
        )}
        {audioUrl && (
          <div className="flex w-full items-center gap-2">
            <audio className="flex-1" controls src={audioUrl} />
          </div>
        )}
        <button onClick={nextWord} className="text-sm text-gray-500 underline">
          Từ khác
        </button>
      </div>
    </div>
  )
}

const TABS = [
  { key: 'listen', label: 'Nghe từ' },
  { key: 'tone', label: 'Luyện thanh điệu' },
  { key: 'record', label: 'Ghi âm so sánh' }
]

export default function PronunciationPage() {
  const params = useParams()
  const [tab, setTab] = useState('listen')
  const [levelId, setLevelId] = useState(params.levelId || 'hsk1')
  const level = getLevel(levelId)
  const ttsOk = useMemo(() => isTtsSupported(), [])

  const scopedUnit = params.unitId ? level.units.find((u) => u.id === Number(params.unitId)) : null
  const words = scopedUnit ? scopedUnit.words : level.words

  return (
    <div className="px-4 pt-6">
      {scopedUnit ? (
        <div className="mb-3 flex items-center gap-2">
          <Link to={`/bai-hoc/${levelId}/${scopedUnit.id}`} className="text-gray-500">
            <ArrowLeftIcon />
          </Link>
          <div>
            <h1 className="text-xl text-brand-800">Phát âm · {level.label} {scopedUnit.title}</h1>
            <p className="text-xs text-gray-500">Chỉ luyện {words.length} từ trong bài này</p>
          </div>
        </div>
      ) : (
        <h1 className="mb-1 text-2xl text-brand-800">Phát âm & thanh điệu</h1>
      )}
      {!ttsOk && (
        <p className="mb-3 text-sm text-red-500">Trình duyệt không hỗ trợ đọc giọng tiếng Trung.</p>
      )}

      {!scopedUnit && <LevelTabs value={levelId} onChange={setLevelId} />}

      <div className="mb-5 flex gap-2 overflow-x-auto">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm ${
              tab === t.key ? 'bg-brand-700 text-white' : 'bg-white text-gray-600'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'listen' && <ListenBrowse words={words} key={`listen-${levelId}-${params.unitId || ''}`} />}
      {tab === 'tone' && <ToneQuiz words={words} key={`tone-${levelId}-${params.unitId || ''}`} />}
      {tab === 'record' && <RecordCompare words={words} key={`record-${levelId}-${params.unitId || ''}`} />}
    </div>
  )
}
