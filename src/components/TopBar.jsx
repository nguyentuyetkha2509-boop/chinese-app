// Dai mau mong co dinh tren cung, chi de tach vung status bar khoi noi dung -
// khong hien ten/logo app nua vi da trung voi tieu de rieng cua tung trang.
export default function TopBar() {
  return <div className="sticky top-0 z-20 bg-brand-700 pt-[max(env(safe-area-inset-top),20px)]" />
}
