// Dai mau mong PHU tren status bar - dung position:fixed (khong phai sticky)
// vi sticky bi loi hien thi la (nhu bi "chia mau") luc keo giat man hinh
// (rubber-band scroll) tren iOS/Android. Fixed luon bam theo viewport, khong
// tham gia vao dong chay cuon nen khong bi hieu ung do. Chieu cao dung bang
// phan dem an toan ma container goc (App.jsx) da danh san cho no.
export default function TopBar() {
  return (
    <div className="fixed left-1/2 top-0 z-20 h-[max(env(safe-area-inset-top),20px)] w-full max-w-md -translate-x-1/2 bg-brand-700" />
  )
}
