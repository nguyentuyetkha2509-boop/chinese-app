import { useLayoutEffect, useRef } from 'react'

const STORE_KEY_PREFIX = 'scrollPos:'

// Nho vi tri cuon cua trang khi roi di, tra lai dung cho do khi quay lai -
// React Router (kieu <Routes> dang dung o day, khong phai data router) KHONG
// tu lam viec nay nhu the/tab thuong cua trinh duyet: moi lan vao lai trang
// la component mount lai tu dau, cuon ve dinh trang. Voi trang dai nhu Trang
// chu, dieu nay bat nguoi dung phai keo lai tu dau rat mat cong moi lan quay
// lai tu 1 the o gan cuoi trang.
export function useScrollRestoration(key) {
  const restored = useRef(false)

  // Dung useLayoutEffect (chay dong bo TRUOC khi trinh duyet ve khung hinh)
  // thay vi useEffect + requestAnimationFrame (chay SAU khung hinh dau tien)
  // - truoc day nguoi dung thay 2 cu nhay: mot ve dinh trang (mac dinh cua
  // trinh duyet khi doi hash), roi mot cu nhay tiep toi vi tri da luu o
  // khung hinh ke tiep, gay cam giac giat khi chuyen trang.
  useLayoutEffect(() => {
    const storeKey = STORE_KEY_PREFIX + key

    if (!restored.current) {
      restored.current = true
      const saved = sessionStorage.getItem(storeKey)
      if (saved) {
        window.scrollTo(0, Number(saved))
      }
    }

    function handleScroll() {
      sessionStorage.setItem(storeKey, String(window.scrollY))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // KHONG luu lai scrollY trong cleanup: doi hash (HashRouter) khien trinh
    // duyet tu dong cuon gan ve dau trang TRUOC khi React kip don dep, nen
    // luc cleanup chay thi window.scrollY da bi reset roi - ghi luc do se de
    // gia tri sai (~0) de len gia tri dung ma scroll-listener da luu truoc
    // do luc nguoi dung con dang xem trang.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [key])
}
