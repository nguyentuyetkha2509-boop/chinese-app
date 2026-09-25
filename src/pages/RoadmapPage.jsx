import { useNavigate } from 'react-router-dom'
import { LEVELS } from '../data/levels'
import { useProgress } from '../store/ProgressContext'
import {
  getDailyNewWordLimit,
  estimateRoadmap,
  getWritingProgressForLevel,
  getGrammarProgressForLevel,
  getReviewProgressForLevel,
  getPronunciationProgressForLevel
} from '../lib/curriculum'
import { ArrowLeftIcon, CheckIcon } from '../components/Icons'

const STATUS_STYLE = {
  done: { dot: 'bg-teal-500', text: 'text-teal-600', bar: 'bg-teal-500' },
  active: { dot: 'bg-brand-600', text: 'text-brand-600', bar: 'bg-gradient-to-r from-brand-500 to-candy-500' },
  upcoming: { dot: 'bg-gray-300', text: 'text-gray-400', bar: 'bg-gray-200' }
}

const MINI_STATS = [
  { key: 'review', label: 'Ôn tập', className: 'bg-brand-50 text-brand-700' },
  { key: 'writing', label: 'Viết chữ', className: 'bg-sky-50 text-sky-700' },
  { key: 'pronunciation', label: 'Phát âm', className: 'bg-sun-50 text-sun-700' },
  { key: 'grammar', label: 'Ngữ pháp', className: 'bg-candy-50 text-candy-700' }
]

export default function RoadmapPage() {
  const navigate = useNavigate()
  const { completedUnits, srsState, writingStats, toneStatsByLevel, completedGrammar } = useProgress()
  const dailyLimit = getDailyNewWordLimit()
  const roadmap = estimateRoadmap(LEVELS, completedUnits, dailyLimit)
  const totalRemaining = roadmap.reduce((s, l) => s + (l.totalWords - l.wordsIntroduced), 0)
  const totalDays = dailyLimit > 0 ? Math.ceil(totalRemaining / dailyLimit) : null

  return (
    <div className="px-4 pt-6">
      <div className="mb-1 flex items-center gap-2">
        <button onClick={() => navigate('/')} className="text-gray-500">
          <ArrowLeftIcon />
        </button>
        <h1 className="text-xl text-brand-800">Lộ trình học</h1>
      </div>
      <p className="mb-5 text-sm text-gray-500">
        {totalRemaining === 0
          ? 'Bạn đã học hết toàn bộ từ vựng 6 cấp! 🎉'
          : `Còn ${totalRemaining} từ chưa học. Với ${dailyLimit} từ mới/ngày, khoảng ${totalDays} ngày nữa xong hết.`}
      </p>

      <div className="relative space-y-4 pl-4">
        <div className="absolute bottom-4 left-[7px] top-2 w-0.5 bg-gray-200" />
        {roadmap.map((l) => {
          const style = STATUS_STYLE[l.status]
          const level = LEVELS.find((lv) => lv.id === l.id)
          const miniValues = {
            review: getReviewProgressForLevel(level, srsState),
            writing: getWritingProgressForLevel(level, writingStats),
            pronunciation: getPronunciationProgressForLevel(l.id, toneStatsByLevel),
            grammar: getGrammarProgressForLevel(l.label, completedGrammar)
          }
          return (
            <div key={l.id} className="relative rounded-2xl bg-white p-4 pl-6 shadow-sm">
              <span className={`absolute -left-4 top-5 h-3.5 w-3.5 rounded-full border-2 border-white ${style.dot}`} />
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-gray-800">{l.label}</p>
                {l.status === 'done' ? (
                  <span className="flex items-center gap-1 text-xs font-semibold text-teal-600">
                    <CheckIcon width={14} height={14} /> Hoàn thành
                  </span>
                ) : (
                  <span className={`text-xs font-semibold ${style.text}`}>{l.percent}%</span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-gray-400">Từ vựng</p>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-gray-100">
                <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${Math.max(4, l.percent)}%` }} />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>
                  {l.wordsIntroduced}/{l.totalWords} từ · {l.unitsDone}/{l.totalUnits} bài
                </span>
                {l.status !== 'done' && l.daysToFinish !== null && (
                  <span>~{l.daysToFinish} ngày nữa xong cấp này</span>
                )}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                {MINI_STATS.map((m) => {
                  const v = miniValues[m.key]
                  const noData = v.total === 0
                  return (
                    <div key={m.key} className={`rounded-lg px-2 py-1.5 ${m.className}`}>
                      <p className="text-[11px] font-semibold opacity-80">{m.label}</p>
                      <p className="text-sm font-semibold">{noData ? 'Chưa có' : `${v.percent}%`}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-5 text-center text-xs text-gray-400">
        Từ vựng ước tính theo giới hạn từ mới/ngày trong Cài đặt. Ôn tập tính theo tỷ lệ từ đã "nhớ lâu" (≥7
        ngày), Viết chữ/Phát âm/Ngữ pháp tính theo hoạt động bạn đã luyện ở từng mục.
      </p>
    </div>
  )
}
