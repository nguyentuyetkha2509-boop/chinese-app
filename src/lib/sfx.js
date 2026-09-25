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

// Trinh duyet tao AudioContext o trang thai "suspended" cho den khi co tuong
// tac cua nguoi dung, va co the tu suspend lai sau mot luc khong dung den
// (Safari kha nang cao). resume() la bat dong bo - goi roi phat luon ngay sau
// (nhu code cu) khi context chua thuc su resume xong se bi "nuot" tieng ma
// khong bao loi gi ca, tao cam giac "bai nay khong co am". Cho resume() xong
// hoac chay ngay neu context da o trang thai running.
function playScheduled(schedule) {
  const audioCtx = getCtx()
  if (!audioCtx) return
  const run = () => schedule(audioCtx, audioCtx.currentTime)
  if (audioCtx.state === 'running') run()
  else audioCtx.resume().then(run).catch(() => {})
}

export function playCorrect() {
  playScheduled((audioCtx, now) => {
    tone(audioCtx, 880, now, 0.12)
    tone(audioCtx, 1318.5, now + 0.09, 0.2)
  })
}

export function playWrong() {
  playScheduled((audioCtx, now) => {
    tone(audioCtx, 330, now, 0.16, { type: 'triangle', gain: 0.14 })
    tone(audioCtx, 220, now + 0.11, 0.22, { type: 'triangle', gain: 0.14 })
  })
}

export function playCelebrate() {
  playScheduled((audioCtx, now) => {
    const notes = [523.25, 659.25, 783.99, 1046.5] // Do-Mi-Sol-Do (hop am vui)
    notes.forEach((freq, i) => tone(audioCtx, freq, now + i * 0.1, 0.25, { gain: 0.16 }))
  })
}

export function playFlip() {
  playScheduled((audioCtx, now) => {
    tone(audioCtx, 600, now, 0.06, { type: 'sine', gain: 0.08 })
  })
}
