import { Suspense, lazy, useLayoutEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import TopBar from './components/TopBar'
import TtsWarning from './components/TtsWarning'
import WelcomeScreen, { hasSeenWelcome } from './components/WelcomeScreen'
import OnboardingGuide, { hasSeenOnboarding } from './components/OnboardingGuide'
import NicknamePrompt from './components/NicknamePrompt'
import DailyReminder from './components/DailyReminder'
import { useFirebaseAuth } from './store/FirebaseSyncContext'
import HomePage from './pages/HomePage'
const TodayPlanPage = lazy(() => import('./pages/TodayPlanPage'))
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'))
const LeaderboardPage = lazy(() => import('./pages/LeaderboardPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))
const LessonsPage = lazy(() => import('./pages/LessonsPage'))
const LessonDetailPage = lazy(() => import('./pages/LessonDetailPage'))
const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage'))
const PronunciationPage = lazy(() => import('./pages/PronunciationPage'))
const WritingPage = lazy(() => import('./pages/WritingPage'))
const SpeedGamePage = lazy(() => import('./pages/SpeedGamePage'))
const MemoryMatchPage = lazy(() => import('./pages/MemoryMatchPage'))
const TopicsPage = lazy(() => import('./pages/TopicsPage'))
const TopicDetailPage = lazy(() => import('./pages/TopicDetailPage'))
const RadicalsPage = lazy(() => import('./pages/RadicalsPage'))
const RadicalGamePage = lazy(() => import('./pages/RadicalGamePage'))
const DialoguesPage = lazy(() => import('./pages/DialoguesPage'))
const DialogueDetailPage = lazy(() => import('./pages/DialogueDetailPage'))
const StoriesPage = lazy(() => import('./pages/StoriesPage'))
const StoryDetailPage = lazy(() => import('./pages/StoryDetailPage'))
const LettersPage = lazy(() => import('./pages/LettersPage'))
const LetterDetailPage = lazy(() => import('./pages/LetterDetailPage'))
const GrammarPage = lazy(() => import('./pages/GrammarPage'))
const GrammarDetailPage = lazy(() => import('./pages/GrammarDetailPage'))
const SentenceBuilderPage = lazy(() => import('./pages/SentenceBuilderPage'))
const DictationPage = lazy(() => import('./pages/DictationPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const AiChatPage = lazy(() => import('./pages/AiChatPage'))
const WritingCheckPage = lazy(() => import('./pages/WritingCheckPage'))

// Doi trang la doi component chu khong tai lai trang, nen trinh duyet giu nguyen
// vi tri cuon cu - vao trang moi tu giua trang cu thi bi nhay vao giua. Cuon ve
// dau moi khi doi duong dan. Phai dat TRUOC <Routes> (dong cap): useLayoutEffect
// cua anh em chay theo thu tu, nen lan nay chay truoc useScrollRestoration cua
// trang con, cac trang danh sach van tra ve duoc vi tri da luu.
function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { authReady, user } = useFirebaseAuth()
  const [welcomeDone, setWelcomeDone] = useState(() => hasSeenWelcome())
  const [onboardingDone, setOnboardingDone] = useState(() => hasSeenOnboarding())

  if (authReady && !user && !welcomeDone) {
    return <WelcomeScreen onDone={() => setWelcomeDone(true)} />
  }

  if (!onboardingDone) {
    return <OnboardingGuide onDone={() => setOnboardingDone(true)} />
  }

  // pb phai bang CHIEU CAO THAT cua thanh dieu huong duoi (BottomNav): 72px noi
  // dung + vung an toan duoi man hinh. Truoc day chi de pb-20 (80px) trong khi
  // tren may co home indicator thanh nay cao 72 + 34 = 106px, nen 26px cuoi
  // trang bi che vinh vien - cuon het muc cung khong len duoc. Chinh
  // viewport-fit=cover trong index.html lam env(safe-area-inset-bottom) khac 0.
  return (
    <div className="mx-auto min-h-screen max-w-md bg-canvas pb-[calc(80px_+_env(safe-area-inset-bottom))] pt-[max(env(safe-area-inset-top),20px)]">
      <TopBar />
      <TtsWarning />
      <NicknamePrompt />
      <DailyReminder />
      <ScrollToTop />
      {/* Moi trang la mot goi rieng, chi tai khi mo - Trang chu va khung ngoai van tai ngay */}
      <Suspense fallback={<div className="px-4 pt-10 text-center text-sm text-gray-400">Đang tải...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hoc-hom-nay" element={<TodayPlanPage />} />
          <Route path="/lo-trinh" element={<RoadmapPage />} />
          <Route path="/bang-xep-hang" element={<LeaderboardPage />} />
          <Route path="/quan-tri" element={<AdminPage />} />
          <Route path="/bai-hoc" element={<LessonsPage />} />
          <Route path="/bai-hoc/:levelId/:unitId" element={<LessonDetailPage />} />
          <Route path="/on-tap" element={<FlashcardsPage />} />
          <Route path="/phat-am" element={<PronunciationPage />} />
          <Route path="/phat-am/:levelId/:unitId" element={<PronunciationPage />} />
          <Route path="/viet-chu" element={<WritingPage />} />
          <Route path="/viet-chu/:levelId/:unitId" element={<WritingPage />} />
          <Route path="/tro-choi" element={<SpeedGamePage />} />
          <Route path="/ghep-cap" element={<MemoryMatchPage />} />
          <Route path="/bo-thu" element={<RadicalsPage />} />
          <Route path="/bo-thu/tro-choi" element={<RadicalGamePage />} />
          <Route path="/chu-de" element={<TopicsPage />} />
          <Route path="/chu-de/:topicKey" element={<TopicDetailPage />} />
          <Route path="/so-va-tien/:topicKey" element={<TopicDetailPage kind="number" />} />
          <Route path="/hoi-thoai" element={<DialoguesPage />} />
          <Route path="/hoi-thoai/:dialogueKey" element={<DialogueDetailPage />} />
          <Route path="/truyen" element={<StoriesPage />} />
          <Route path="/truyen/:storyKey" element={<StoryDetailPage />} />
          <Route path="/thu" element={<LettersPage />} />
          <Route path="/thu/:letterKey" element={<LetterDetailPage />} />
          <Route path="/ngu-phap" element={<GrammarPage />} />
          <Route path="/ngu-phap/:pointKey" element={<GrammarDetailPage />} />
          <Route path="/sap-xep-cau" element={<SentenceBuilderPage />} />
          <Route path="/nghe-chep-chinh-ta" element={<DictationPage />} />
          <Route path="/cai-dat" element={<SettingsPage />} />
          <Route path="/tro-chuyen-ai" element={<AiChatPage />} />
          <Route path="/cham-bai-viet" element={<WritingCheckPage />} />
          {/* Dia chi khong ton tai (go sai, link cu) ve Trang chu thay vi hien trang trang */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <BottomNav />
    </div>
  )
}
