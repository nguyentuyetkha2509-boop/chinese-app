import { Route, Routes } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import TtsWarning from './components/TtsWarning'
import HomePage from './pages/HomePage'
import LessonsPage from './pages/LessonsPage'
import LessonDetailPage from './pages/LessonDetailPage'
import FlashcardsPage from './pages/FlashcardsPage'
import PronunciationPage from './pages/PronunciationPage'
import WritingPage from './pages/WritingPage'
import SpeedGamePage from './pages/SpeedGamePage'
import TopicsPage from './pages/TopicsPage'
import TopicDetailPage from './pages/TopicDetailPage'
import DialoguesPage from './pages/DialoguesPage'
import DialogueDetailPage from './pages/DialogueDetailPage'

export default function App() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-canvas pb-20">
      <TtsWarning />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bai-hoc" element={<LessonsPage />} />
        <Route path="/bai-hoc/:levelId/:unitId" element={<LessonDetailPage />} />
        <Route path="/on-tap" element={<FlashcardsPage />} />
        <Route path="/phat-am" element={<PronunciationPage />} />
        <Route path="/phat-am/:levelId/:unitId" element={<PronunciationPage />} />
        <Route path="/viet-chu" element={<WritingPage />} />
        <Route path="/viet-chu/:levelId/:unitId" element={<WritingPage />} />
        <Route path="/tro-choi" element={<SpeedGamePage />} />
        <Route path="/chu-de" element={<TopicsPage />} />
        <Route path="/chu-de/:topicKey" element={<TopicDetailPage />} />
        <Route path="/hoi-thoai" element={<DialoguesPage />} />
        <Route path="/hoi-thoai/:dialogueKey" element={<DialogueDetailPage />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
