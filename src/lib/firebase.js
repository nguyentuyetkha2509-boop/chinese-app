// Khoi tao Firebase (du an rieng cua nguoi dung, xem huong dan trong Cai dat).
// Cac gia tri config nay khong phai bi mat - Firebase config luon lo ra ngoai
// trong code client-side, bao mat that su nam o Firestore Security Rules
// (chi dung nguoi dang nhap moi doc/ghi duoc du lieu cua chinh ho).
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAz_cwnJuDO_QlX2dXpB6Vclv-yh6uWN_8',
  authDomain: 'pandachinese-e425d.firebaseapp.com',
  projectId: 'pandachinese-e425d',
  storageBucket: 'pandachinese-e425d.firebasestorage.app',
  messagingSenderId: '415360473435',
  appId: '1:415360473435:web:6102f0a7a620a3e64ba27e'
}

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)
export const googleProvider = new GoogleAuthProvider()
