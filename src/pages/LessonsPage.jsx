import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { getLevel } from '../data/levels'
import { NUMBER_LESSONS } from '../data/numberLessons'
import { useProgress } from '../store/ProgressContext'
import { getUnitCombo } from '../lib/curriculum'
import { CheckIcon, BookIcon, ArrowRightIcon, RadicalIcon, SpeedIcon } from '../components/Icons'
import LevelTabs from '../components/LevelTabs'
import BackButton from '../components/BackButton'
import { accentFor } from '../lib/colors'
import lessonPanda from '../assets/panda/lesson_panda.webp'

// 3 tag cua trang Bai hoc. Luu trong dia chi (?muc=...) de bam Quay lai tu bai con
// van ve dung tag dang xem, thay vi nhay ve HSK.
const TABS = [
  { id: 'hsk', label: 'HSK 1-9' },
  { id: 'so-tien', label: 'Số và tiền' },
  { id: 'bo-thu', label: 'Bộ thủ' }
]

export default function LessonsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('muc')
  const tab = TABS.some((t) => t.id === requested) ? requested : 'hsk'

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <BackButton />
        <h1 className="text-2xl text-brand-800">Bài học</h1>
      </div>
      <img src={lessonPanda} alt="Gấu trúc học bài" className="mx-auto mb-2 w-36 max-w-full" />
      <div className="mb-4 flex gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setSearchParams(t.id === 'hsk' ? {} : { muc: t.id }, { replace: true })}
            className={`flex-1 rounded-full py-2 text-sm ${
              tab === t.id ? 'bg-brand-700 text-white' : 'bg-white text-gray-600'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'hsk' && <HskLessons />}
      {tab === 'so-tien' && <NumberLessons />}
      {tab === 'bo-thu' && <RadicalLessons />}
    </div>
  )
}

function NumberLessons() {
  const { completedTopics } = useProgress()
  const doneCount = NUMBER_LESSONS.filter((l) => completedTopics.includes(l.key)).length
  const nextKey = NUMBER_LESSONS.find((l) => !completedTopics.includes(l.key))?.key

  return (
    <>
      <p className="mb-4 text-sm text-gray-500">
        Đọc số, nói giá, diện tích, số điện thoại. Hoàn thành {doneCount}/{NUMBER_LESSONS.length} bài.
      </p>
      <div className="space-y-3">
        {NUMBER_LESSONS.map((lesson, i) => {
          const done = completedTopics.includes(lesson.key)
          const isNext = lesson.key === nextKey
          const accent = accentFor(i)
          return (
            <Link
              key={lesson.key}
              to={`/so-va-tien/${lesson.key}`}
              className={`flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm ${
                isNext ? 'border-2 border-brand-500' : accent.border
              }`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-2xl ${accent.bg}`}>
                {lesson.icon}
              </span>
              <div className="flex-1">
                <p className="text-lg text-gray-800">{lesson.title}</p>
                <p className="text-xs text-gray-500">
                  {lesson.desc} · {lesson.words.length} từ
                </p>
              </div>
              {done ? (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                  <CheckIcon width={22} height={22} />
                </span>
              ) : isNext ? (
                <span className="flex shrink-0 items-center gap-1 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                  <ArrowRightIcon width={18} height={18} /> Tiếp theo
                </span>
              ) : (
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${accent.bg} ${accent.text}`}>
                  Bắt đầu
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </>
  )
}

function RadicalLessons() {
  return (
    <>
      <p className="mb-4 text-sm text-gray-500">214 bộ dựng nên chữ Hán. Biết bộ thì đoán được nghĩa nhiều chữ lạ.</p>
      <div className="space-y-3">
        <Link to="/bo-thu" className="flex items-center gap-3 rounded-2xl border border-sky-200 bg-white p-4 shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
            <RadicalIcon width={24} height={24} />
          </span>
          <div className="flex-1">
            <p className="text-lg text-gray-800">Bảng 214 bộ thủ</p>
            <p className="text-xs text-gray-500">Xem theo mức độ hay gặp, nghe đọc</p>
          </div>
        </Link>
        <Link to="/bo-thu/tro-choi" className="flex items-center gap-3 rounded-2xl border border-candy-200 bg-white p-4 shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-candy-100 text-candy-700">
            <SpeedIcon width={24} height={24} />
          </span>
          <div className="flex-1">
            <p className="text-lg text-gray-800">Trò chơi bộ thủ</p>
            <p className="text-xs text-gray-500">Luyện nhận diện bộ thủ</p>
          </div>
        </Link>
      </div>
    </>
  )
}

function HskLessons() {
  const { completedUnits, completedGrammar, writingStats } = useProgress()
  const [levelId, setLevelId] = useState('hsk1')
  const level = getLevel(levelId)
  // Cac bai KHONG deu so tu (vd HSK2 co bai 6 tu, co bai 12 tu) - lay dung
  // so tu bai dau tien roi nhan len se ra tong sai lech han so tong that (vd
  // HSK5 hien "139 bai x 11 tu = 1529" trong khi thuc te chi co 1298 tu).
  // Hien khoang min-max cho trung thuc, chi noi "moi bai X tu" khi TAT CA
  // cac bai deu bang nhau.
  const unitSizes = level.units.map((u) => u.words.length)
  const minSize = Math.min(...unitSizes)
  const maxSize = Math.max(...unitSizes)
  const sizeLabel = minSize === maxSize ? `${minSize} từ` : `${minSize}-${maxSize} từ`

  return (
    <>
      <h2 className="mb-1 text-lg text-brand-800">Bài học {level.label}</h2>
      <p className="mb-4 text-sm text-gray-500">
        {level.words.length} từ vựng, chia thành {level.units.length} bài, mỗi bài {sizeLabel}.
      </p>

      <LevelTabs value={levelId} onChange={setLevelId} />

      <div className="space-y-3">
        {(() => {
          const nextUnitId = level.units.find((u) => !completedUnits.includes(`${levelId}:${u.id}`))?.id
          return level.units.map((unit, i) => {
            const unitKey = `${levelId}:${unit.id}`
            const done = completedUnits.includes(unitKey)
            const isNext = !done && unit.id === nextUnitId
            const accent = accentFor(i)
            // Da hoc tu vung (done) khong dong nghia voi da xong combo cua bai
            // do (con ngu phap/viet chu) - phai phan biet ro 2 trang thai nay,
            // neu khong Hoc hom nay se goi y "hoc vuot" mot bai da co dau ✓ o
            // day, nhin vao tuong mau thuan (thuc ra la 2 tieu chi khac nhau).
            const combo = done ? getUnitCombo(level, unit, completedUnits, completedGrammar, writingStats) : null
            const comboDone = combo ? combo.grammarDone && combo.writingDone : false
            const missing = combo
              ? [!combo.grammarDone && 'ngữ pháp', !combo.writingDone && 'viết chữ'].filter(Boolean).join(', ')
              : ''
            return (
              <Link
                key={unit.id}
                to={`/bai-hoc/${levelId}/${unit.id}`}
                className={`flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm ${
                  isNext ? 'border-2 border-brand-500' : accent.border
                }`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.bg} ${accent.text}`}>
                  <BookIcon width={24} height={24} />
                </span>
                <div className="flex-1">
                  <p className="text-lg text-gray-800">{unit.title}</p>
                  {done && !comboDone ? (
                    <p className="text-xs font-semibold text-sun-600">Còn thiếu: {missing}</p>
                  ) : (
                    <p className="text-xs text-gray-500">
                      {unit.words[0].hanzi} · {unit.words[unit.words.length - 1].hanzi} và {unit.words.length - 2} từ khác
                    </p>
                  )}
                </div>
                {comboDone ? (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <CheckIcon width={22} height={22} />
                  </span>
                ) : done ? (
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sun-400 text-white">
                    <CheckIcon width={22} height={22} />
                  </span>
                ) : isNext ? (
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                    <ArrowRightIcon width={18} height={18} /> Tiếp theo
                  </span>
                ) : (
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${accent.bg} ${accent.text}`}>
                    Bắt đầu
                  </span>
                )}
              </Link>
            )
          })
        })()}
      </div>
    </>
  )
}
