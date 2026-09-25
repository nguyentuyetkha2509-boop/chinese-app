import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { loadJSON, saveJSON } from '../lib/storage'
import { loadSrsState, saveSrsState, nextSchedule } from '../lib/srs'
import { todayKey } from '../lib/date'
import { getLevelInfo } from '../lib/gamification'
import { playCelebrate } from '../lib/sfx'

const ProgressContext = createContext(null)

const DAY_MS = 24 * 60 * 60 * 1000

function loadStreak() {
  return loadJSON('streak', { count: 0, lastDay: null })
}

export function ProgressProvider({ children }) {
  const [srsState, setSrsState] = useState(() => loadSrsState())
  const [completedUnits, setCompletedUnits] = useState(() => loadJSON('completedUnits', []))
  const [streak, setStreak] = useState(() => loadStreak())
  const [toneStats, setToneStats] = useState(() => loadJSON('toneStats', { correct: 0, total: 0 }))
  const [writingStats, setWritingStats] = useState(() => loadJSON('writingStats', { practiced: [] }))
  const [writingPerfectCount, setWritingPerfectCount] = useState(() => loadJSON('writingPerfectCount', 0))
  const [xp, setXp] = useState(() => loadJSON('xp', 0))
  const [dailyXp, setDailyXp] = useState(() => loadJSON('dailyXp', { date: todayKey(), amount: 0 }))
  const [newWordsToday, setNewWordsToday] = useState(() => loadJSON('newWordsToday', { date: todayKey(), count: 0 }))

  useEffect(() => saveSrsState(srsState), [srsState])
  useEffect(() => saveJSON('completedUnits', completedUnits), [completedUnits])
  useEffect(() => saveJSON('streak', streak), [streak])
  useEffect(() => saveJSON('toneStats', toneStats), [toneStats])
  useEffect(() => saveJSON('writingStats', writingStats), [writingStats])
  useEffect(() => saveJSON('writingPerfectCount', writingPerfectCount), [writingPerfectCount])
  useEffect(() => saveJSON('xp', xp), [xp])
  useEffect(() => saveJSON('dailyXp', dailyXp), [dailyXp])
  useEffect(() => saveJSON('newWordsToday', newWordsToday), [newWordsToday])

  function touchStreak() {
    setStreak((prev) => {
      const today = todayKey()
      if (prev.lastDay === today) return prev
      const yesterday = new Date(Date.now() - DAY_MS).toISOString().slice(0, 10)
      const count = prev.lastDay === yesterday ? prev.count + 1 : 1
      return { count, lastDay: today }
    })
  }

  function rateCard(wordId, rating) {
    touchStreak()
    setSrsState((prev) => ({
      ...prev,
      [wordId]: nextSchedule(prev[wordId], rating)
    }))
  }

  // Dua tu vao he thong on tap ngat quang ngay khi hoc xong bai, thay vi cho
  // den khi user tinh co gap tu do trong Flashcards - dam bao tu nao da hoc
  // cung se duoc len lich on lai (due sau 1 ngay), khong bi "mo coi" mai mai.
  function seedNewCards(wordIds) {
    setSrsState((prev) => {
      let changed = false
      const next = { ...prev }
      for (const id of wordIds) {
        if (!next[id]) {
          changed = true
          next[id] = { interval: 1, ease: 2.5, reps: 1, lapses: 0, due: Date.now() + DAY_MS, updatedAt: Date.now() }
        }
      }
      return changed ? next : prev
    })
  }

  function markUnitComplete(unitId, wordIds = []) {
    touchStreak()
    if (completedUnits.includes(unitId)) return
    setCompletedUnits((prev) => [...prev, unitId])
    if (wordIds.length > 0) {
      seedNewCards(wordIds)
      setNewWordsToday((prev) => {
        const today = todayKey()
        const count = wordIds.length
        return prev.date === today ? { date: today, count: prev.count + count } : { date: today, count }
      })
    }
  }

  function recordToneAnswer(correct) {
    setToneStats((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }))
  }

  function recordWritingPractice(wordId, perfect) {
    touchStreak()
    setWritingStats((prev) =>
      prev.practiced.includes(wordId) ? prev : { practiced: [...prev.practiced, wordId] }
    )
    if (perfect) setWritingPerfectCount((c) => c + 1)
  }

  function addXp(amount) {
    setXp((prev) => {
      const next = prev + amount
      if (getLevelInfo(next).level > getLevelInfo(prev).level) playCelebrate()
      return next
    })
    setDailyXp((prev) => {
      const today = todayKey()
      return prev.date === today ? { date: today, amount: prev.amount + amount } : { date: today, amount }
    })
  }

  const value = useMemo(
    () => ({
      srsState,
      completedUnits,
      streak,
      toneStats,
      writingStats,
      writingPerfectCount,
      xp,
      dailyXp,
      newWordsToday,
      rateCard,
      markUnitComplete,
      recordToneAnswer,
      recordWritingPractice,
      addXp
    }),
    [srsState, completedUnits, streak, toneStats, writingStats, writingPerfectCount, xp, dailyXp, newWordsToday]
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress phai dung ben trong ProgressProvider')
  return ctx
}
