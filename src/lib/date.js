// Ngay theo GIO DIA PHUONG cua may nguoi dung, khong phai gio UTC.
//
// Truoc day ham nay dung toISOString() (gio UTC). O Viet Nam (UTC+7), tu 00:00
// den 07:00 sang thi ngay UTC van la HOM QUA - nen vao buoi sang, chuoi streak,
// XP trong ngay, so tu moi va combo trong ngay deu bi tinh theo ngay hom truoc.
// Hau qua cu the: hoc luc 6h sang khong duoc tinh vao hom nay; den 7h sang app
// tuong la "ngay moi" lan nua nen dem nham them 1 ngay. Buoi sang la luc nhieu
// nguoi hoc nhat nen loi nay anh huong that.
export function todayKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
