// Tren iPhone/iPad, Safari coi am thanh cua trang web la am thanh "nen" (ambient),
// nen khi gac cong tac Im lang (may dang o che do rung) thi tat luon tieng: ca
// hieu ung game lan giong doc deu im lang, nguoi hoc tuong app hong.
// Doi kieu phien am thanh cua trang sang 'playback' thi Safari doi xu nhu dang
// phat nhac/phim - khong bi cong tac Im lang tat nua.
//
// Chi Safari 16.4 tro len moi co API nay (Chrome, Firefox khong co) nen phai
// kiem tra truoc khi dung; may nao khong co thi bo qua, khong anh huong gi.
let daDat = false
// Dang thu am thi tuyet doi khong dat lai 'playback': che do nay chan micro tren
// Safari, nen hieu ung am thanh (sfx) phat giua luc thu cung lam hong ban ghi.
let dangThu = false

// Goi TRUOC khi xin micro. Neu truoc do app da dat 'playback' (do bam loa, tieng
// dung/sai...) thi getUserMedia tren iPhone bi tu choi hoac thu ra im lang.
export function beginRecordAudio() {
  dangThu = true
  daDat = false
  try {
    const session = typeof navigator !== 'undefined' ? navigator.audioSession : null
    if (session) session.type = 'play-and-record'
  } catch {
    // Khong doi duoc kieu phien thi de trinh duyet tu chon, van thu ghi am binh thuong.
  }
}

// Goi khi da tha mic. Lan phat tieng ke tiep se tu dat lai 'playback'.
export function endRecordAudio() {
  dangThu = false
}

export function enablePlaybackAudio() {
  if (daDat || dangThu) return
  try {
    const session = typeof navigator !== 'undefined' ? navigator.audioSession : null
    if (!session) return
    session.type = 'playback'
    daDat = true
  } catch {
    // Safari co the chan viec doi kieu phien am thanh neu trang chua duoc nguoi
    // dung cham vao. De lan goi sau thu lai - moi lan goi deu nam trong luc
    // nguoi dung dang bam (bam dap an, bam nut loa).
  }
}
