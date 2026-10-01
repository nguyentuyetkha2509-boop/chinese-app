import { Link } from 'react-router-dom'
import RankMedal from './RankMedal'


// Bang xep hang cua tro "Dua toc do".
//
// Chi lo phan HIEN THI - du lieu do SpeedGamePage tai ve (xem useEffect trong
// trang do). Tach ra vi bang nay duoc dung o CA HAI man hinh: man hinh dau (vua
// mo trang da thay ngay dang xep hang cua moi nguoi) va man hinh ket qua. Neu de
// chung trong trang thi phai chep lai hai lan, sua mot cho de quen cho kia.
//
// Nen trang + chu dam: khoi nay nam tren nen trang (man hinh dau) hoac tren nen
// tim cua the ket qua, nen chon nen trang chu khong phai nen trong suot - doc
// duoc o ca hai noi.
export default function SpeedGameBoard({ user, top, standing, error, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-sm ${className}`}>
      <p className="font-semibold text-gray-800">⚡ Bảng xếp hạng Đua tốc độ</p>

      {/* Bang nam tren Firebase va chi nguoi da dang nhap moi doc duoc (xem
          firestore.rules), nen chua dang nhap thi noi ro thay vi de trong tron
          hoac hien loi ky thuat. */}
      {!user && (
        <p className="mt-1 text-xs text-gray-500">
          Đăng nhập để điểm của bạn được tính vào bảng xếp hạng của mọi người.{' '}
          <Link to="/cai-dat" className="font-semibold text-brand-700 underline">
            Vào Cài đặt
          </Link>
        </p>
      )}

      {/* Mat mang thi chi khong hien duoc bang - phan choi van phai chay binh
          thuong, khong duoc de loi mang lam hong man hinh. */}
      {user && error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      {user && !error && !top && <p className="mt-1 text-xs text-gray-500">Đang tải bảng xếp hạng...</p>}

      {user && top && top.length === 0 && (
        <p className="mt-1 text-xs text-gray-500">Chưa ai có điểm. Bạn là người đầu tiên!</p>
      )}

      {user && top && top.length > 0 && (
        <>
          <div className="mt-2 space-y-1.5">
            {top.map((e, i) => {
              const isMe = e.uid === user.uid
              return (
                <div
                  key={e.uid}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                    isMe ? 'bg-brand-50 font-semibold text-brand-800' : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="w-8 shrink-0 text-center"><RankMedal index={i} size={32} /></span>
                  <span className="flex-1 truncate">
                    {e.nickname || 'Ẩn danh'}
                    {isMe && ' (bạn)'}
                  </span>
                  <span className="shrink-0 font-semibold">{e.speedGameBest ?? 0}</span>
                </div>
              )
            })}
          </div>
          {standing && (
            <p className="mt-2 text-xs text-gray-500">
              Bạn đứng thứ <span className="font-semibold text-gray-700">{standing.rank}</span> trong{' '}
              {standing.total} người chơi.
            </p>
          )}
        </>
      )}
    </div>
  )
}
