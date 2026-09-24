import { useEffect } from 'react'
import { speakChinese } from '../lib/tts'
import { VolumeIcon } from './Icons'
import { accentFor } from '../lib/colors'

const TYPE_LABELS = {
  meaning: 'Chọn nghĩa đúng:',
  hanzi: 'Chọn đúng chữ Hán:',
  listen: 'Nghe rồi chọn nghĩa đúng:',
  truefalse: 'Nghĩa này đúng hay sai?'
}

export default function QuizQuestion({ question, index, total, selected, onAnswer }) {
  const { word, type, options } = question

  useEffect(() => {
    if (type === 'listen') speakChinese(word.hanzi)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, word.hanzi])

  return (
    <div className="animate-quiz-in">
      <p className="mb-2 text-sm text-gray-500">
        Câu {index + 1}/{total}
      </p>

      <div className="mb-6 rounded-2xl bg-white p-6 text-center shadow-sm">
        {type === 'hanzi' && <p className="text-2xl text-gray-800">{word.meaning}</p>}
        {type === 'listen' && (
          <button onClick={() => speakChinese(word.hanzi)} className="mx-auto flex flex-col items-center gap-2">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <VolumeIcon width={28} height={28} />
            </span>
            {selected !== null ? (
              <span className="mt-1 text-2xl text-gray-800">{word.hanzi}</span>
            ) : (
              <span className="text-xs text-gray-400">Chạm để nghe lại</span>
            )}
          </button>
        )}
        {(type === 'meaning' || type === 'truefalse') && (
          <>
            <p className="text-4xl text-gray-800">{word.hanzi}</p>
            <p className="mt-1 text-brand-600">{word.pinyin}</p>
          </>
        )}
        {type === 'truefalse' && (
          <p className="mt-3 rounded-xl bg-sky-50 p-3 text-lg text-sky-800">Nghĩa là: "{question.shownMeaning}"</p>
        )}
      </div>

      <p className="mb-2 text-sm text-gray-500">{TYPE_LABELS[type]}</p>

      {type === 'truefalse' ? (
        <div className="grid grid-cols-2 gap-3">
          {[true, false].map((val) => {
            const isChosen = selected === val
            const isRight = val === question.isTrue
            const showResult = selected !== null && (isChosen || isRight)
            return (
              <button
                key={String(val)}
                onClick={() => onAnswer(val)}
                className={`rounded-xl border-2 py-4 text-lg font-semibold transition ${
                  showResult
                    ? isRight
                      ? 'border-teal-500 bg-teal-50 text-teal-700'
                      : 'border-red-400 bg-red-50 text-red-600'
                    : val
                      ? 'border-teal-200 bg-white text-gray-700'
                      : 'border-red-200 bg-white text-gray-700'
                }`}
              >
                {val ? '✓ Đúng' : '✕ Sai'}
              </button>
            )
          })}
        </div>
      ) : (
        <div className="space-y-2">
          {options.map((opt, i) => {
            const isChosen = selected?.id === opt.id
            const isRight = opt.id === word.id
            const showResult = selected !== null && (isChosen || isRight)
            const accent = accentFor(i)
            const letter = String.fromCharCode(65 + i)
            return (
              <button
                key={opt.id}
                onClick={() => onAnswer(opt)}
                className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
                  showResult
                    ? isRight
                      ? 'border-brand-500 bg-brand-50 text-brand-700'
                      : 'border-red-400 bg-red-50 text-red-600'
                    : `${accent.border} bg-white text-gray-700`
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    showResult ? (isRight ? 'bg-brand-500 text-white' : 'bg-red-400 text-white') : `${accent.bg} ${accent.text}`
                  }`}
                >
                  {letter}
                </span>
                {type === 'hanzi' ? (
                  <span>
                    <span className="text-xl">{opt.hanzi}</span>
                    <span className="ml-2 text-xs text-gray-400">{opt.pinyin}</span>
                  </span>
                ) : (
                  opt.meaning
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
