import { useCallback, useEffect, useRef, useState } from 'react'
import { speakChinese, stopSpeaking } from './tts'

// Moc thoi gian toi da cho mot cau, tinh theo do dai cau. Rong rai de khong cat
// ngang cau nao dang doc binh thuong.
const WATCHDOG_MIN_MS = 5000
const WATCHDOG_MS_PER_CHAR = 900

// Phat lan luot tung cau tieng Trung trong mot doan (hoi thoai, truyen...), dung
// chung cho nut "Nghe ca doan".
//
// Tach ra lam mot cho vi truoc day DialogueDetailPage va StoryDetailPage moi
// trang tu viet mot ban, va ca hai dinh CUNG mot loi: chuoi phat chi duoc chay
// tiep nho callback onEnd cua Web Speech API. Nhung khi may khong doc duoc -
// thieu giong tieng Trung, trinh duyet chan, hoac loi phat sinh - thi onEnd
// KHONG BAO GIO chay. Ket qua: co "dang phat" ket o true vinh vien, nut bi khoa
// mai mai, va nguoi hoc thay nhu app bi treo.
//
// Ngoai ra hook con lo hai viec ma ban viet tay de quen:
//   - Roi trang giua chung thi dung doc, va khong ghi "da nghe xong" nua.
//   - Doi sang phan khac thi dung ngay chuoi phat cua phan cu, khong de no chay
//     tiep bang du lieu cu.
export function useSequencePlayer({ lines, onFinish, onFirstLine, onFailed }) {
  const [playingAll, setPlayingAll] = useState(false)
  const [activeLine, setActiveLine] = useState(null)
  const [failed, setFailed] = useState(false)

  // Moi lan bat dau lai tang so nay len. Cac buoc con lai cua chuoi cu so sanh
  // voi so hien tai truoc khi chay tiep, nen chuoi cu tu tat thay vi phai go
  // tung cai hen gio.
  const runIdRef = useRef(0)
  const timerRef = useRef(null)
  const watchdogRef = useRef(null)
  const prevLinesRef = useRef(lines)
  const firstRenderRef = useRef(true)

  // Giu cac gia tri nay trong ref de playAll khong phai phu thuoc vao chung -
  // neu khong, ham se doi danh tinh moi lan render va cac callback phia sau se
  // giu nham ban cu (dung loi "phat sai phan" da gap).
  const linesRef = useRef(lines)
  const onFinishRef = useRef(onFinish)
  const onFirstLineRef = useRef(onFirstLine)
  const onFailedRef = useRef(onFailed)
  linesRef.current = lines
  onFinishRef.current = onFinish
  onFirstLineRef.current = onFirstLine
  onFailedRef.current = onFailed

  const stop = useCallback(() => {
    runIdRef.current += 1
    clearTimeout(timerRef.current)
    timerRef.current = null
    clearTimeout(watchdogRef.current)
    watchdogRef.current = null
    stopSpeaking()
    setPlayingAll(false)
    setActiveLine(null)
  }, [])

  const playAll = useCallback(
    (index = 0) => {
      const list = linesRef.current || []
      if (index === 0) {
        runIdRef.current += 1
        onFirstLineRef.current?.()
      }
      const runId = runIdRef.current

      if (index >= list.length) {
        setPlayingAll(false)
        setActiveLine(null)
        onFinishRef.current?.()
        return
      }

      setPlayingAll(true)
      setActiveLine(index)

      clearTimeout(watchdogRef.current)
      const text = list[index].hanzi || ''
      // Luoi an toan cuoi cung: mot so trinh duyet/bo doc khong bao gi ca onend
      // lan onerror (vidu khi tieng bi ket giua chung). Khi do khong con cach nao
      // biet la doc xong, nen dat mot moc thoi gian rong rai theo do dai cau lam
      // gioi han - qua moc thi tra nut ve binh thuong. Khong hien thong bao loi o
      // day vi rat co the chi la may doc cham, khong phai hong.
      watchdogRef.current = setTimeout(() => {
        if (runIdRef.current !== runId) return
        setPlayingAll(false)
        setActiveLine(null)
      }, WATCHDOG_MIN_MS + text.length * WATCHDOG_MS_PER_CHAR)

      speakChinese(text, {
        onEnd: () => {
          clearTimeout(watchdogRef.current)
          watchdogRef.current = null
          timerRef.current = setTimeout(() => {
            // Chuoi nay da bi huy trong luc cho 250ms thi dung han.
            if (runIdRef.current === runId) playAll(index + 1)
          }, 250)
        },
        // Bat buoc phai co: onEnd se khong bao gio chay khi may doc that bai.
        onError: (err) => {
          if (runIdRef.current !== runId) return
          clearTimeout(watchdogRef.current)
          watchdogRef.current = null
          setPlayingAll(false)
          // 'interrupted' / 'canceled': khong phai loi that - nguoi dung vua bam
          // mot cau khac de doc, cau do dang giu vien sang. Xoa o day thi vien
          // sang vua hien len bi tat ngay lap tuc.
          if (err === 'interrupted' || err === 'canceled') return
          setActiveLine(null)
          if (err === 'unsupported' || err === 'not-allowed') {
            setFailed(true)
            onFailedRef.current?.(err)
          }
        }
      })
    },
    []
  )

  // Roi trang (bam Back, dieu huong sang bai khac): dung doc ngay va chan viec
  // ghi "da nghe xong" tu mot lan phat da bi bo do.
  useEffect(() => {
    return () => {
      runIdRef.current += 1
      clearTimeout(timerRef.current)
      clearTimeout(watchdogRef.current)
      stopSpeaking()
    }
  }, [])

  // Doi sang doan khac (vi du sang phan khac cua truyen) thi dung chuoi cu.
  // Lan render dau tien chua co gi de dung nen bo qua.
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      prevLinesRef.current = lines
      return
    }
    if (prevLinesRef.current !== lines) {
      prevLinesRef.current = lines
      stop()
    }
  }, [lines, stop])

  return { playingAll, activeLine, failed, playAll, stop, setActiveLine }
}
