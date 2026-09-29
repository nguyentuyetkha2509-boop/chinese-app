import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import TopBar from './components/TopBar'
import TtsWarning from './components/TtsWarning'
import WelcomeScreen, { hasSeenWelcome } from './components/WelcomeScreen'
import OnboardingGuide, { hasSeenOnboarding } from './components/OnboardingGuide'
import NicknamePrompt from './components/NicknamePrompt'
import DailyReminder from './components/DailyReminder'
import { useFirebaseAuth } from './store/FirebaseSyncContext'
import HomePage from './pages/HomePage'
import TodayPlanPage from './pages/TodayPlanPage'
import RoadmapPage from './pages/RoadmapPage'
import LeaderboardPage from './pages/LeaderboardPage'
import AdminPage from './pages/AdminPage'
import LessonsPage from './pages/LessonsPage'
import LessonDetailPage from './pages/LessonDetailPage'
import FlashcardsPage from './pages/FlashcardsPage'
import PronunciationPage from './pages/PronunciationPage'
import WritingPage from './pages/WritingPage'
import SpeedGamePage from './pages/SpeedGamePage'
import TopicsPage from './pages/TopicsPage'
import TopicDetailPage from './pages/TopicDetailPage'
import RadicalsPage from './pages/RadicalsPage'
import RadicalGamePage from './pages/RadicalGamePage'
import DialoguesPage from './pages/DialoguesPage'
import DialogueDetailPage from './pages/DialogueDetailPage'
import StoriesPage from './pages/StoriesPage'
import StoryDetailPage from './pages/StoryDetailPage'
import GrammarPage from './pages/GrammarPage'
import GrammarDetailPage from './pages/GrammarDetailPage'
import SentenceBuilderPage from './pages/SentenceBuilderPage'
import DictationPage from './pages/DictationPage'
import SettingsPage from './pages/SettingsPage'
import AiChatPage from './pages/AiChatPage'
import WritingCheckPage from './pages/WritingCheckPage'

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
        <Route path="/bo-thu" element={<RadicalsPage />} />
        <Route path="/bo-thu/tro-choi" element={<RadicalGamePage />} />
        <Route path="/chu-de" element={<TopicsPage />} />
        <Route path="/chu-de/:topicKey" element={<TopicDetailPage />} />
        <Route path="/hoi-thoai" element={<DialoguesPage />} />
        <Route path="/hoi-thoai/:dialogueKey" element={<DialogueDetailPage />} />
        <Route path="/truyen" element={<StoriesPage />} />
        <Route path="/truyen/:storyKey" element={<StoryDetailPage />} />
        <Route path="/ngu-phap" element={<GrammarPage />} />
        <Route path="/ngu-phap/:pointKey" element={<GrammarDetailPage />} />
        <Route path="/sap-xep-cau" element={<SentenceBuilderPage />} />
        <Route path="/nghe-chep-chinh-ta" element={<DictationPage />} />
        <Route path="/cai-dat" element={<SettingsPage />} />
        <Route path="/tro-chuyen-ai" element={<AiChatPage />} />
        <Route path="/cham-bai-viet" element={<WritingCheckPage />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
