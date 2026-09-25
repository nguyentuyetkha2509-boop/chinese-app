import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HanziWriter from 'hanzi-writer'
import { getLevel } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import { CheckIcon, ArrowLeftIcon, VolumeIcon } from '../components/Icons'
import { speakChinese } from '../lib/tts'
import LevelTabs from '../components/LevelTabs'
import { accentFor } from '../lib/colors'
import PictographIcon, { PICTOGRAPH_HINTS, hasPictograph } from '../components/PictographIcon'
import { getRadicalHint, getRadicalSymbol, hasRadicalHint } from '../lib/radicals'
import { playCelebrate, playCorrect } from '../lib/sfx'
import { XP_REWARDS } from '../lib/gamification'

function extractChars(words) {
  const seen = new Set()
  const list = []
  for (const w of words) {
    for (const ch of w.hanzi) {
      if (/[一-鿿]/.test(ch) && !seen.has(ch)) {
        seen.add(ch)
        list.push({ char: ch, meaning: w.meaning })
      }
    }
  }
  return list
}

export default function WritingPage() {
  const params = useParams()
  const { writingStats, recordWritingPractice, addXp } = useProgress()
  const [levelId, setLevelId] = useState(params.levelId || 'hsk1')
  const level = getLevel(levelId)
  const scopedUnit = params.unitId ? level.units.find((u) => u.id === Number(params.unitId)) : null
  const chars = useMemo(() => extractChars(scopedUnit ? scopedUnit.words : level.words), [level, scopedUnit])
  const [selected, setSelected] = useState(chars[0])
  const [quizResult, setQuizResult] = useState(null)
  const targetRef = useRef(null)
  const writerRef = useRef(null)

  useEffect(() => {
    if (!chars.some((c) => c.char === selected?.char)) {
      setSelected(chars[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chars])

  useEffect(() => {
    if (!targetRef.current || !selected) return
    targetRef.current.innerHTML = ''
    setQuizResult(null)
    writerRef.current = HanziWriter.create(targetRef.current, selected.char, {
      width: 260,
      height: 260,
      padding: 12,
      showOutline: true,
      strokeColor: '#7e22ce',
      outlineColor: '#e9d5ff',
      highlightColor: '#ec4899',
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 200
    })
    return () => {
      writerRef.current = null
    }
  }, [selected])

  function showAnimation() {
    writerRef.current?.animateCharacter()
  }

  function startQuiz() {
    setQuizResult(null)
    writerRef.current?.quiz({
      onComplete: (summary) => {
        const mistakes = summary?.totalMistakes ?? 0
        const perfect = mistakes === 0
        recordWritingPractice(selected.char, perfect)
        if (perfect) {
          playCelebrate()
          addXp(XP_REWARDS.writingPerfect)
        } else {
          playCorrect()
          addXp(XP_REWARDS.writingDone)
        }
        setQuizResult(perfect ? 'perfect' : `Xong! Sai ${mistakes} lần`)
      }
    })
  }

  const practicedCount = chars.filter((c) => writingStats.practiced.includes(c.char)).length

  if (!selected) return null

  return (
    <div className="px-4 pt-6">
      {scopedUnit ? (
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link to={`/bai-hoc/${levelId}/${scopedUnit.id}`} className="text-gray-500">
              <ArrowLeftIcon />
            </Link>
            <div>
              <h1 className="text-xl text-brand-800">Viết chữ · {level.label} {scopedUnit.title}</h1>
              <p className="text-xs text-gray-500">Đã luyện {practicedCount}/{chars.length}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl text-brand-800">Viết chữ Hán</h1>
          <span className="text-sm text-gray-500">
            Đã luyện {practicedCount}/{chars.length}
          </span>
        </div>
      )}

      {!scopedUnit && <LevelTabs value={levelId} onChange={setLevelId} />}

      {hasPictograph(selected.char) && (
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-sun-100 to-candy-100 p-4">
          <PictographIcon char={selected.char} className="h-16 w-16 shrink-0 text-candy-700" />
          <div>
            <p className="text-xs font-semibold text-candy-700">💡 Mẹo nhớ chữ tượng hình</p>
            <p className="text-sm text-gray-700">{PICTOGRAPH_HINTS[selected.char]}</p>
          </div>
        </div>
      )}

      {!hasPictograph(selected.char) && hasRadicalHint(selected.char) && (
        <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-teal-100 to-sky-100 p-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl text-teal-700">
            {getRadicalSymbol(selected.char)}
          </span>
          <div>
            <p className="text-xs font-semibold text-teal-700">🧩 Mẹo nhớ theo bộ thủ</p>
            <p className="text-sm text-gray-700">{getRadicalHint(selected.char)}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center">
        <div ref={targetRef} className="hanzi-target bg-white" style={{ width: 260, height: 260 }} />
        <button
          onClick={() => speakChinese(selected.char)}
          className="mt-2 flex items-center gap-1 text-sm text-brand-600"
        >
          <VolumeIcon width={16} height={16} />
          {selected.meaning} · Nghe phát âm
        </button>

        {quizResult && (
          <p className="mt-2 flex items-center gap-1 text-brand-600">
            <CheckIcon width={18} height={18} />
            {quizResult === 'perfect' ? 'Hoàn hảo, không sai nét nào!' : quizResult}
          </p>
        )}

        <div className="mt-4 flex w-full gap-2">
          <button onClick={showAnimation} className="flex-1 rounded-xl border border-brand-300 py-2.5 text-brand-700">
            Xem thứ tự nét
          </button>
          <button onClick={startQuiz} className="flex-1 rounded-xl bg-brand-700 py-2.5 text-white">
            Tự viết thử
          </button>
        </div>
      </div>

      <p className="mb-2 mt-6 text-sm text-gray-500">Chọn chữ khác:</p>
      <div className="grid grid-cols-8 gap-2">
        {chars.map(({ char }, i) => {
          const done = writingStats.practiced.includes(char)
          const accent = accentFor(i)
          return (
            <button
              key={char}
              onClick={() => setSelected(chars.find((c) => c.char === char))}
              className={`relative rounded-lg py-2 text-lg ${
                selected.char === char ? 'bg-brand-700 text-white' : `${accent.bg} ${accent.text}`
              }`}
            >
              {char}
              {hasPictograph(char) && selected.char !== char && (
                <span className="absolute left-0.5 top-0.5 text-[10px]">💡</span>
              )}
              {!hasPictograph(char) && hasRadicalHint(char) && selected.char !== char && (
                <span className="absolute left-0.5 top-0.5 text-[10px]">🧩</span>
              )}
              {done && selected.char !== char && (
                <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-brand-500" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
