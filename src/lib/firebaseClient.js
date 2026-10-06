// Gom moi thu FirebaseSyncContext can tu Firebase vao mot cho de tai bang
// import() dong. Goi Firebase nang ~670 KB, neu import tinh o khung ngoai thi
// trang chu phai doi tai va dich xong no moi hien len, trong khi nguoi chua
// dang nhap khong can no de hoc.
export { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
export { auth, googleProvider } from './firebase'
export { pushToFirestore, pullFromFirestore, checkRemote } from './firebaseSync'
export { getMyEntry, setNickname, updateMyStats } from './leaderboard'
