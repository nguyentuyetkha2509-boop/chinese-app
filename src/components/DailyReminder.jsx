import { useEffect } from 'react'
import { useProgress } from '../store/ProgressContext'
import { ALL_WORDS, LEVELS } from '../data/levels'
import { getCardStats } from '../lib/srs'
import { getCurrentCombo, getComboByUnitKey } from '../lib/curriculum'
import { loadJSON, saveJSON } from '../lib/storage'
import { todayKey } from '../lib/date'

const CHECK_INTERVAL_MS = 60 * 1000

// Uu tien showNotification qua Service Worker (hoat dong on dinh hon tren
// Android/PWA da cai dat), roi moi fallback ve `new Notification()` cho may
// khong co Service Worker san sang.
async function fireNotification(title, options) {
  if ('serviceWorker' in navigator) {
    try {
      const reg = await navigator.serviceWorker.ready
      await reg.showNotification(title, options)
      return
    } catch {
      // Roi qua fallback ben duoi.
    }
  }
  try {
    // eslint-disable-next-line no-new
    new Notification(title, options)
  } catch {
    // Notification API co the bi chan tuy trinh duyet/context - bo qua im lang,
    // day chi la tinh nang phu, khong duoc lam vo app.
  }
}

// Component "vo hinh" (khong render gi) - chi chay ngam kiem tra moi phut xem
// da den gio nhac va nhiem vu hom nay (on tap + combo) da xong chua, giong
// het logic o TodayPlanPage/HomePage de khong bao giờ nhac nham khi da xong roi.
export default function DailyReminder() {
  const { srsState, completedUnits, completedGrammar, writingStats, dailyCombo } = useProgress()

  useEffect(() => {
    function check() {
      if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return
      const settings = loadJSON('dailyReminder', { enabled: false, hour: 20, minute: 0 })
      if (!settings.enabled) return

      const today = todayKey()
      if (settings.lastNotifiedDate === today) return

      const now = new Date()
      const scheduled = new Date()
      scheduled.setHours(settings.hour, settings.minute, 0, 0)
      if (now < scheduled) return

      const allIds = ALL_WORDS.map((w) => w.id)
      const dueCount = getCardStats(allIds, srsState).due
      const reviewDone = dueCount === 0

      const freshCombo = getCurrentCombo(LEVELS, completedUnits, completedGrammar, writingStats)
      const freshUnitKey = freshCombo ? `${freshCombo.levelId}:${freshCombo.unit.id}` : null
      const lockedUnitKey = dailyCombo.date === today ? dailyCombo.unitKey : freshUnitKey
      const combo = getComboByUnitKey(LEVELS, lockedUnitKey, completedUnits, completedGrammar, writingStats)
      const comboDone = !combo || (combo.vocabDone && combo.grammarDone && combo.writingDone)

      if (reviewDone && comboDone) {
        // Da xong nhiem vu hom nay roi thi khong lam phien nua, nhung van
        // danh dau "da kiem tra hom nay" de khoi lap lai check moi phut.
        saveJSON('dailyReminder', { ...settings, lastNotifiedDate: today })
        return
      }

      const body = dueCount > 0 ? `Còn ${dueCount} thẻ cần ôn tập hôm nay.` : `Bài "${combo.unit.title}" hôm nay chưa xong đâu nhé.`

      fireNotification('🐼 Đến giờ học tiếng Trung rồi!', {
        body,
        icon: `${import.meta.env.BASE_URL}icon-192.png`,
        tag: 'panda-daily-reminder'
      })
      saveJSON('dailyReminder', { ...settings, lastNotifiedDate: today })
    }

    check()
    const id = setInterval(check, CHECK_INTERVAL_MS)
    return () => clearInterval(id)
  }, [srsState, completedUnits, completedGrammar, writingStats, dailyCombo])

  return null
}
