import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useProgress } from './ProgressContext'
import * as gistSync from '../lib/gistSync'

const GistSyncContext = createContext(null)

const AUTO_PUSH_DELAY_MS = 4000

export function GistSyncProvider({ children }) {
  const progress = useProgress()
  const [token, setToken] = useState(() => gistSync.getSyncToken())
  const [status, setStatus] = useState('idle') // idle | syncing | synced | error
  const [error, setError] = useState(null)
  const [lastSyncedAt, setLastSyncedAt] = useState(() => gistSync.getLastSyncedAt())
  const debounceRef = useRef(null)
  const skipNextAutoPush = useRef(true)

  async function connect(newToken) {
    setStatus('syncing')
    setError(null)
    try {
      const info = await gistSync.connectAndCheck(newToken)
      setToken(newToken)
      setStatus('idle')
      return info
    } catch (e) {
      setError(e.message)
      setStatus('error')
      throw e
    }
  }

  function disconnect() {
    gistSync.clearSync()
    setToken(null)
    setStatus('idle')
    setError(null)
    setLastSyncedAt(null)
  }

  async function pushNow() {
    setStatus('syncing')
    setError(null)
    try {
      await gistSync.pushToGist()
      setLastSyncedAt(gistSync.getLastSyncedAt())
      setStatus('synced')
    } catch (e) {
      setError(e.message)
      setStatus('error')
    }
  }

  async function pullNow() {
    setStatus('syncing')
    setError(null)
    try {
      const remoteUpdatedAt = await gistSync.pullFromGist()
      setLastSyncedAt(gistSync.getLastSyncedAt())
      setStatus('synced')
      setTimeout(() => window.location.reload(), 800)
      return remoteUpdatedAt
    } catch (e) {
      setError(e.message)
      setStatus('error')
      throw e
    }
  }

  // Tu dong day len gist (debounce) moi khi tien do hoc thay doi, tranh phai
  // nho bam dong bo tay. Bo qua lan render dau (chi phan ung voi thay doi
  // THUC SU sau khi da ket noi).
  useEffect(() => {
    if (!token) return
    if (skipNextAutoPush.current) {
      skipNextAutoPush.current = false
      return
    }
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      pushNow()
    }, AUTO_PUSH_DELAY_MS)
    return () => clearTimeout(debounceRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    token,
    progress.srsState,
    progress.completedUnits,
    progress.streak,
    progress.xp,
    progress.toneStats,
    progress.writingStats,
    progress.writingPerfectCount
  ])

  const value = { connected: !!token, status, error, lastSyncedAt, connect, disconnect, pushNow, pullNow }

  return <GistSyncContext.Provider value={value}>{children}</GistSyncContext.Provider>
}

export function useGistSync() {
  const ctx = useContext(GistSyncContext)
  if (!ctx) throw new Error('useGistSync phai dung ben trong GistSyncProvider')
  return ctx
}
