import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLevel } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { speakChinese, isTtsSupported } from '../lib/tts'
import { playCorrect, playWrong, playCelebrate, playFlip } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'
import { VolumeIcon, MicIcon, ArrowLeftIcon } from '../components/Icons'
import LevelTabs from '../components/LevelTabs'
import { accentFor } from '../lib/colors'
import CelebrationBadge from '../components/CelebrationBadge'

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

const ROUND_SIZE = 15

function buildToneRound(pool) {
  return shuffle(pool).slice(0, Math.min(ROUND_SIZE, pool.length))
}

function ToneQuiz({ words, levelId }) {
  const singleToneWords = useMemo(
    () => words.filter((w) => w.tones.length === 1 && w.tones[0] !== 0),
    [words]
  )
  const { recordToneAnswer, addXp } = useProgress()
  const [round, setRound] = useState(() => buildToneRound(singleToneWords))
  const [roundIndex, setRoundIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [feedback, setFeedback] = useState(null)
  const [phase, setPhase] = useState('quiz') // quiz | done

  if (!singleToneWords.length) {
    return <p className="text-sm text-gray-500">Cấp độ này chưa có từ đơn âm để luyện thanh điệu.</p>
  }

  function startNewRound() {
    setRound(buildToneRound(singleToneWords))
    setRoundIndex(0)
    setCorrectCount(0)
    setFeedback(null)
    setPhase('quiz')
  }

  if (phase === 'done') {
    const accuracy = Math.round((correctCount / round.length) * 100)
    return (
      <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-candy-500 to-sky-500 p-6 text-center text-white shadow-lg">
        <CelebrationBadge />
        <p className="text-xl">🎉 Hoàn thành!</p>
        <p className="mt-1 text-white/90">
          Đúng {correctCount}/{round.length} câu ({accuracy}%)
        </p>
        <button
          onClick={startNewRound}
          className="mt-4 w-full rounded-xl bg-white py-2.5 font-semibold text-brand-700"
        >
          Luyện lại
        </button>
      </div>
    )
  }

  const word = round[roundIndex]

  function playCurrent() {
    speakChinese(word.hanzi)
  }

  function answer(tone) {
    if (feedback) return
    const correct = tone === word.tones[0]
    recordToneAnswer(levelId, correct)
    if (correct) {
      setCorrectCount((c) => c + 1)
      playCorrect()
      addXp(XP_REWARDS.toneCorrect)
    } else playWrong()
    setFeedback({ correct, tone })
  }

  function nextQuestion() {
    setFeedback(null)
    if (roundIndex + 1 < round.length) {
      setRoundIndex((i) => i + 1)
    } else {
      playCelebrate()
      setPhase('done')
    }
  }

  const rightTone = TONE_LABELS[word.tones[0]]

  return (
    <div>
      <p className="mb-3 text-sm text-gray-500">
        Nghe rồi chọn đúng thanh điệu của chữ. Câu {roundIndex + 1}/{round.length}
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
          {roundIndex + 1 < round.length ? 'Câu tiếp theo →' : 'Hoàn thành'}
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

// Safari/iOS khong ho tro audio/webm - phai hoi trinh duyet dinh dang nao no
// thuc su dung roi gan dung vao Blob, neu khong audio ghi duoc se khong phat lai duoc.
const MIME_CANDIDATES = ['audio/webm', 'audio/mp4', 'audio/ogg']

function pickSupportedMimeType() {
  if (typeof MediaRecorder === 'undefined' || !MediaRecorder.isTypeSupported) return ''
  return MIME_CANDIDATES.find((t) => MediaRecorder.isTypeSupported(t)) || ''
}

function RecordCompare({ words }) {
  const [word, setWord] = useState(() => words[Math.floor(Math.random() * words.length)])
  const [status, setStatus] = useState('idle') // idle | requesting | recording | recorded | error
  const [audioUrl, setAudioUrl] = useState(null)
  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const chunksRef = useRef([])

  // Doi tab/roi trang trong luc dang ghi se bo quen microphone dang mo - don
  // dep khi component unmount de tranh giu micro vinh vien.
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop()
      streamRef.current?.getTracks().forEach((t) => t.stop())
    }
  }, [])

  // Xin quyen + khoi dong microphone (getUserMedia) la buoc cham nhat - moi lan
  // ghi lai tu dau deu phai xin lai se rat "lag". Giu nguyen 1 stream cho ca
  // phien, tai su dung cho moi lan ghi tiep theo thay vi mo/dong lien tuc.
  async function ensureStream() {
    if (streamRef.current?.active) return streamRef.current
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    streamRef.current = stream
    return stream
  }

  async function startRecording() {
    if (status === 'requesting' || status === 'recording') return
    setStatus('requesting')
    // Dung TTS truoc khi mo mic - phat ("Nghe mau") roi ghi am ngay sau co the
    // khien thiet bi di dong phai chuyen doi phien am thanh phat->thu, gay cham.
    window.speechSynthesis?.cancel()
    try {
      const stream = await ensureStream()
      const mimeType = pickSupportedMimeType()
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined)
      chunksRef.current = []
      recorder.ondataavailable = (e) => chunksRef.current.push(e.data)
      recorder.onstop = () => {
        if (audioUrl) URL.revokeObjectURL(audioUrl)
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' })
        setAudioUrl(URL.createObjectURL(blob))
        setStatus('recorded')
        playCorrect()
      }
      recorder.start()
      mediaRecorderRef.current = recorder
      setStatus('recording')
      playFlip()
    } catch {
      setStatus('error')
      playWrong()
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop()
  }

  function nextWord() {
    if (audioUrl) URL.revokeObjectURL(audioUrl)
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
        {status === 'recording' ? (
          <button onClick={stopRecording} className="flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-white">
            <MicIcon width={20} height={20} /> Dừng ghi âm
          </button>
        ) : (
          <button
            onClick={startRecording}
            disabled={status === 'requesting'}
            className={`flex items-center gap-2 rounded-full bg-candy-600 px-6 py-3 text-white disabled:opacity-70 ${
              status === 'requesting' ? 'animate-pulse' : ''
            }`}
          >
            <MicIcon width={20} height={20} />
            {status === 'requesting' ? 'Đang mở micro...' : 'Bắt đầu ghi âm'}
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
      {tab === 'tone' && (
        <ToneQuiz words={words} levelId={levelId} key={`tone-${levelId}-${params.unitId || ''}`} />
      )}
      {tab === 'record' && <RecordCompare words={words} key={`record-${levelId}-${params.unitId || ''}`} />}
    </div>
  )
}
