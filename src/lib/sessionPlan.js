// "Phien hoc" - mot mach hoc lien tuc trong ngay: On tap (the den han) -> Tu
// vung (bai moi) -> Ngu phap (diem lien quan) -> Viet chu (cac chu cua bai).
//
// Thu tu nay khong phai moi: no da duoc Tinh trong TodayPlanPage tu truoc, chi
// co dieu truoc day moi buoc la mot <Link> roi khong co gi noi sang buoc sau -
// hoc xong mot buoc thi man hinh hien ra mot loat link ngang hang, nguoi hoc
// phai tu doan buoc ke tiep la gi. Tach phan tinh toan ra day de trang ke
// hoach, thanh tien trinh va man hinh hoan thanh cua tung buoc cung doc CHUNG
// mot nguon, thay vi moi noi tu tinh mot kieu roi lech nhau.
//
// Buoc 'grammar' khong phai bai nao cung co: getRelatedGrammarForUnit tra null
// khi khong diem ngu phap nao cua cap do do chia se chu Han nao voi tu vung cua
// bai (no cham diem theo so chu trung nhau). Luc do buoc do VANG MAT han - mang
// buoc ngan hon - chu khong phai mot buoc rong. Vi vay KHONG cho nao duoc phep
// gia dinh phien co dung 4 buoc.
import { useSearchParams } from 'react-router-dom'
import { ALL_WORDS, LEVELS } from '../data/levels'
import { getCardStats } from './srs'
import { getComboByUnitKey, getNextVocabCombo, getDailyNewWordLimit } from './curriculum'
import { todayKey } from './date'
import { useProgress } from '../store/ProgressContext'
import { BookIcon, CardsIcon, GrammarIcon, PencilIcon } from '../components/Icons'

// Nhan ngan (cho thanh tien trinh) va nhan day du (cho nut "Tiep theo").
export const SESSION_STEP_META = {
  review: { short: 'Ôn', full: 'Ôn tập', color: 'brand', icon: CardsIcon },
  vocab: { short: 'Bài', full: 'Bài học', color: 'sky', icon: BookIcon },
  grammar: { short: 'Ngữ', full: 'Ngữ pháp', color: 'gold', icon: GrammarIcon },
  writing: { short: 'Viết', full: 'Viết chữ', color: 'candy', icon: PencilIcon }
}

// Chi dung cac sac da co san trong tailwind.config.js - bang mau cua app KHONG
// day du nhu Tailwind goc (vi du "gold" thieu shade 50 va 300), nen mot lop
// nhu bg-gold-50 se bi lang le khong render gi.
//
// dot: cham tren thanh tien trinh. card: nen the cua buoc dang lam o trang ke
// hoach. button: nut "Hoc tiep" nam trong chinh the do.
export const SESSION_STEP_STYLE = {
  brand: { dot: 'bg-brand-600', card: 'bg-brand-50', button: 'bg-brand-700' },
  sky: { dot: 'bg-sky-600', card: 'bg-sky-100', button: 'bg-sky-600' },
  gold: { dot: 'bg-gold-600', card: 'bg-gold-100', button: 'bg-gold-600' },
  candy: { dot: 'bg-candy-600', card: 'bg-candy-100', button: 'bg-candy-600' }
}

export const SESSION_PARAM = 'phien'
export const SESSION_UNIT_PARAM = 'bai'

// Danh sach buoc cua phien, THUAN DU LIEU (khong chua React component) de con
// kiem thu doc lap duoc. Icon va mau lay tu SESSION_STEP_META o tang render.
//
// unitInPath: duong dan cua buoc nay da ghi ro cap do/bai hay chua. Buoc nao
// chua ghi (/on-tap, /ngu-phap/<key>) thi phai mang them &bai=... trong link,
// neu khong trang do khong biet hom nay dang hoc bai nao.
export function buildSessionSteps({ srsState, newWordsToday, combo }) {
  const allIds = ALL_WORDS.map((w) => w.id)
  const dueCount = getCardStats(allIds, srsState).due
  const dailyLimit = getDailyNewWordLimit()
  const learnedToday = newWordsToday?.count || 0
  const reviewDone = dueCount === 0
  const unitKey = combo ? `${combo.levelId}:${combo.unit.id}` : null

  const steps = [
    {
      key: 'review',
      unitKey,
      unitInPath: false,
      done: reviewDone,
      summary: reviewDone ? 'Không còn thẻ đến hạn' : `${dueCount} thẻ cần ôn lại`,
      title: reviewDone ? 'Đã ôn xong, không còn thẻ đến hạn 🎉' : `${dueCount} thẻ cần ôn lại hôm nay`,
      actionLabel: 'Ôn ngay',
      actionTo: '/on-tap'
    }
  ]

  if (!combo) return steps

  steps.push({
    key: 'vocab',
    unitKey,
    unitInPath: true,
    done: combo.vocabDone,
    summary: combo.unit.title,
    title: `${combo.levelLabel} · ${combo.unit.title}`,
    subtitle: !combo.vocabDone ? `Đã học ${learnedToday}/${dailyLimit} từ mới hôm nay` : null,
    actionLabel: 'Học ngay',
    actionTo: `/bai-hoc/${combo.levelId}/${combo.unit.id}`
  })

  if (combo.grammar) {
    steps.push({
      key: 'grammar',
      unitKey,
      unitInPath: false,
      done: combo.grammarDone,
      summary: combo.grammar.title,
      title: combo.grammar.title,
      actionLabel: 'Học ngay',
      actionTo: `/ngu-phap/${combo.grammar.key}`
    })
  }

  steps.push({
    key: 'writing',
    unitKey,
    unitInPath: true,
    done: combo.writingDone,
    summary: combo.writingDone ? 'Đã luyện xong' : `${combo.writingChars.length} chữ cần luyện`,
    title: `Luyện viết ${combo.writingChars.length} chữ của ${combo.unit.title}`,
    actionLabel: 'Luyện ngay',
    actionTo: `/viet-chu/${combo.levelId}/${combo.unit.id}`
  })

  return steps
}

// Buoc dang lam do: buoc CHUA XONG dau tien theo thu tu giao trinh.
export function getCurrentStep(steps) {
  return steps.find((s) => !s.done) || null
}

// Buoc ke tiep sau buoc dang dung.
//
// Nguyen tac: KHONG BAO GIO nhay qua mot buoc noi dung con do. Truoc day ham nay
// chi nhin ve phia truoc, nen tu trang Ngu phap (vao giua luc bai hoc chua lam
// bai kiem tra) no chi toi "Viet chu" - nguoi hoc bi day qua buoc Viet trong khi
// bai hoc con nguyen do, phien hoc dut quang giua chung. Gio neu con buoc noi
// dung nao phia TRUOC chua xong thi quay lai lam not truoc da.
//
// Rieng buoc 'review' duoc mien: on tap do lich SRS quyet dinh chu khong phai
// dieu kien de hoc tiep, nen nguoi hoc chu dong bo qua On tap se khong bi keo
// nguoc ve. Cac buoc con lai (bai hoc / ngu phap / viet chu) la noi dung cua bai
// dang hoc - bo do thi phien khong that su xong.
//
// Tra null khi moi buoc deu da xong, nghia la het phien.
export function getNextStep(steps, currentKey) {
  const i = steps.findIndex((s) => s.key === currentKey)
  if (i === -1) return null
  const unfinishedBehind = steps.slice(0, i).find((s) => !s.done && s.key !== 'review')
  if (unfinishedBehind) return unfinishedBehind
  return steps.slice(i + 1).find((s) => !s.done) || null
}

// Gan co "dang trong phien" vao mot duong dan. Dung query param thay vi context
// vi no song sot qua tai lai trang, di kem duoc trong moi link "Tiep theo", va
// khong phai them provider nao vao App.jsx.
export function sessionTo(path, unitKey) {
  const sep = path.includes('?') ? '&' : '?'
  const withFlag = `${path}${sep}${SESSION_PARAM}=1`
  return unitKey ? `${withFlag}&${SESSION_UNIT_PARAM}=${encodeURIComponent(unitKey)}` : withFlag
}

export function stepLink(step) {
  if (!step) return '/hoc-hom-nay'
  return sessionTo(step.actionTo, step.unitInPath ? null : step.unitKey)
}

// Nhan cho nut dan sang buoc ke tiep. getNextStep co the tra ve mot buoc NAM
// TRUOC buoc hien tai (nguoi hoc vao giua phien), luc do goi la "Tiep theo" thi
// hieu sai huong - noi ro la con thieu, phai quay lai lam not.
export function nextStepLabel(steps, currentKey, next) {
  const i = steps.findIndex((s) => s.key === currentKey)
  const j = steps.findIndex((s) => s.key === next.key)
  const goingBack = i !== -1 && j !== -1 && j < i
  return `${goingBack ? 'Còn thiếu' : 'Tiếp theo'}: ${SESSION_STEP_META[next.key].full}`
}

// Bai muc tieu cua phien khi duong dan khong noi ro (trang On tap va trang Ngu
// phap khong co cap do/bai trong URL). Uu tien bai da khoa cho HOM NAY de ca
// ngay chi hoc mot bai, roi moi den bai som nhat CON TU VUNG CHUA HOC - xem
// getNextVocabCombo trong lib/curriculum.js: bai cu con sot viet chu khong duoc
// lay lam bai cua hom nay, neu khong phien hom nay se chi toan luyen not chu cu.
export function resolveSessionUnitKey({ dailyCombo, completedUnits, completedGrammar, writingStats }) {
  if (dailyCombo?.date === todayKey() && dailyCombo.unitKey) return dailyCombo.unitKey
  const fresh = getNextVocabCombo(LEVELS, completedUnits, completedGrammar, writingStats)
  return fresh ? `${fresh.levelId}:${fresh.unit.id}` : null
}

// Gom phan tinh toan ma ca bon trang hoat dong deu can. `pathUnitKey` truyen
// vao khi duong dan da co cap do/bai (/bai-hoc/:levelId/:unitId, /viet-chu/...).
//
// Thu tu uu tien: duong dan -> &bai= tren URL -> bai khoa hom nay -> bai som
// nhat con thieu.
export function useSessionSteps(pathUnitKey = null) {
  const [searchParams] = useSearchParams()
  const { srsState, completedUnits, completedGrammar, writingStats, newWordsToday, dailyCombo } = useProgress()

  const active = searchParams.get(SESSION_PARAM) === '1'
  const paramUnitKey = searchParams.get(SESSION_UNIT_PARAM)
  const unitKey =
    pathUnitKey || paramUnitKey || resolveSessionUnitKey({ dailyCombo, completedUnits, completedGrammar, writingStats })

  const combo = getComboByUnitKey(LEVELS, unitKey, completedUnits, completedGrammar, writingStats)
  const steps = buildSessionSteps({ srsState, newWordsToday, combo })
  return { active, steps, combo, unitKey }
}

// Nut "Tiep theo" dung chung cho man hinh hoan thanh cua ca bon buoc nam o
// src/components/SessionNextButton.jsx - khong dat o day vi day la file .js,
// ma Vite chi bien dich JSX trong file .jsx.
