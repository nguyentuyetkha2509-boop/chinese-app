// Tren iPhone/iPad, Safari coi am thanh cua trang web la am thanh "nen" (ambient),
// nen khi gac cong tac Im lang (may dang o che do rung) thi tat luon tieng: ca
// hieu ung game lan giong doc deu im lang, nguoi hoc tuong app hong.
// Doi kieu phien am thanh cua trang sang 'playback' thi Safari doi xu nhu dang
// phat nhac/phim - khong bi cong tac Im lang tat nua.
//
// Chi Safari 16.4 tro len moi co API nay (Chrome, Firefox khong co) nen phai
// kiem tra truoc khi dung; may nao khong co thi bo qua, khong anh huong gi.
let daDat = false

export function enablePlaybackAudio() {
  if (daDat) return
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
