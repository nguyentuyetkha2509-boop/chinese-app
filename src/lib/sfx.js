// Hieu ung am thanh ngan, tu tong hop bang Web Audio API (khong can file mp3,
// khong lo ban quyen) - tao cam giac vui ve, hung thu khi lam bai/on tap.
// Dang tong hop nen hoat dong on dinh hon nhieu so voi giong doc TTS (khong
// phu thuoc giong noi co san tren may).
let ctx = null

function getCtx() {
  if (typeof window === 'undefined') return null
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return null
  if (!ctx) ctx = new AudioContextClass()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

function tone(audioCtx, freq, startTime, duration, { type = 'sine', gain = 0.18 } = {}) {
  const osc = audioCtx.createOscillator()
  const g = audioCtx.createGain()
  osc.type = type
  osc.frequency.value = freq
  g.gain.setValueAtTime(0, startTime)
  g.gain.linearRampToValueAtTime(gain, startTime + 0.01)
  g.gain.exponentialRampToValueAtTime(0.001, startTime + duration)
  osc.connect(g)
  g.connect(audioCtx.destination)
  osc.start(startTime)
  osc.stop(startTime + duration)
}

export function playCorrect() {
  const audioCtx = getCtx()
  if (!audioCtx) return
  const now = audioCtx.currentTime
  tone(audioCtx, 880, now, 0.12)
  tone(audioCtx, 1318.5, now + 0.09, 0.2)
}

export function playWrong() {
  const audioCtx = getCtx()
  if (!audioCtx) return
  const now = audioCtx.currentTime
  tone(audioCtx, 330, now, 0.16, { type: 'triangle', gain: 0.14 })
  tone(audioCtx, 220, now + 0.11, 0.22, { type: 'triangle', gain: 0.14 })
}

export function playCelebrate() {
  const audioCtx = getCtx()
  if (!audioCtx) return
  const now = audioCtx.currentTime
  const notes = [523.25, 659.25, 783.99, 1046.5] // Do-Mi-Sol-Do (hop am vui)
  notes.forEach((freq, i) => tone(audioCtx, freq, now + i * 0.1, 0.25, { gain: 0.16 }))
}

export function playFlip() {
  const audioCtx = getCtx()
  if (!audioCtx) return
  tone(audioCtx, 600, audioCtx.currentTime, 0.06, { type: 'sine', gain: 0.08 })
}
