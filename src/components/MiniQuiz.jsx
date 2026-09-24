import { useMemo, useState } from 'react'
import { shuffle } from '../lib/quiz'
import { playCorrect, playWrong } from '../lib/sfx'

// Bo cau hoi trac nghiem dung chung: moi cau { question, options } voi
// options[0] la dap an dung (se duoc xao khi hien thi). Goi onDone(correctCount, total)
// khi lam het cau hoi.
export default function MiniQuiz({ items, onDone, xpPerCorrect = 0, addXp }) {
  const round = useMemo(
    () => items.map((q) => ({ question: q.question, correct: q.options[0], options: shuffle(q.options) })),
    [items]
  )
  const [index, setIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)

  const q = round[index]
  if (!q) return null

  function choose(opt) {
    if (selected !== null) return
    setSelected(opt)
    const isCorrect = opt === q.correct
    if (isCorrect) {
      playCorrect()
      if (xpPerCorrect && addXp) addXp(xpPerCorrect)
    } else {
      playWrong()
    }
    setTimeout(() => {
      setSelected(null)
      const nextCorrect = correctCount + (isCorrect ? 1 : 0)
      setCorrectCount(nextCorrect)
      if (index + 1 < round.length) {
        setIndex((i) => i + 1)
      } else {
        onDone(nextCorrect, round.length)
      }
    }, 700)
  }

  return (
    <div className="animate-quiz-in">
      <p className="mb-2 text-sm text-gray-500">
        Câu {index + 1}/{round.length}
      </p>
      <div className="mb-6 rounded-2xl bg-white p-6 text-center shadow-sm">
        <p className="text-lg text-gray-800">{q.question}</p>
      </div>
      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const isChosen = selected === opt
          const isRight = opt === q.correct
          const showResult = selected !== null && (isChosen || isRight)
          const letter = String.fromCharCode(65 + i)
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={`flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left transition ${
                showResult
                  ? isRight
                    ? 'border-brand-500 bg-brand-50 text-brand-700'
                    : 'border-red-400 bg-red-50 text-red-600'
                  : 'border-gray-200 bg-white text-gray-700'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  showResult ? (isRight ? 'bg-brand-500 text-white' : 'bg-red-400 text-white') : 'bg-gray-100 text-gray-500'
                }`}
              >
                {letter}
              </span>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
