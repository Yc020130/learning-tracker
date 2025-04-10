import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LearningLog from './pages/LearningLog'
import Schedule from './pages/Schedule'
import Notes from './pages/Notes'
import DataDashboard from './pages/DataDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log" element={<LearningLog />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/dashboard" element={<DataDashboard />} />
    </Routes>
  )
}

export default App


