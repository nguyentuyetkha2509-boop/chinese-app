import { Component } from 'react'
import PandaIcon from './PandaIcon'

// Luoi an toan cuoi cung cua ca app.
//
// Truoc day KHONG co gi o day: chi can mot loi bat ngo khi ve giao dien la React
// go toan bo cay component xuong, va nguoi dung chi thay MOT MAN HINH TRANG TRON.
// Khong chu, khong nut, khong duong ve. Nguoi dung khong ranh ky thuat se tuong
// app hong han va go cai dat - trong khi thuc te chi can tai lai trang.
//
// Day la lop component duy nhat trong app (React chi bat loi kieu nay bang class
// component, khong co ban tương duong cho function component).
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    // Ghi ra console de con tim duoc nguyen nhan. Nguoi dung khong thay dong nay,
    // nhung neu ho gui anh chup man hinh DevTools thi day la manh moi quan trong.
    console.error('PandaChinese gặp lỗi khi hiển thị:', error, info?.componentStack)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-sm">
          <PandaIcon size={64} />
          <p className="mt-3 text-lg font-semibold text-brand-800">Ứng dụng gặp trục trặc</p>
          <p className="mt-2 text-sm text-gray-600">
            Đây là lỗi khi hiển thị màn hình, không phải mất dữ liệu. Tiến độ học của bạn vẫn nằm
            nguyên trên máy này. Thử tải lại là thường hết.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 w-full rounded-xl bg-brand-700 py-3 text-sm font-semibold text-white"
          >
            Tải lại ứng dụng
          </button>

          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-xs text-gray-500">
              Xem chi tiết lỗi (để gửi cho người sửa)
            </summary>
            <pre className="mt-2 max-h-40 overflow-auto rounded-lg bg-gray-50 p-2 text-[11px] text-gray-700">
              {String(this.state.error?.stack || this.state.error)}
            </pre>
          </details>
        </div>
      </div>
    )
  }
}
