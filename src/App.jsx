import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Onboarding from './screens/Onboarding.jsx'
import Lockers from './screens/Lockers.jsx'
import Calendar from './screens/Calendar.jsx'
import Focus from './screens/Focus.jsx'
import Friends from './screens/Friends.jsx'

export default function App() {
  return (
    <Routes>
      {/* Onboarding stands alone — no bottom nav. */}
      <Route path="/" element={<Navigate to="/onboarding" replace />} />
      <Route path="/onboarding" element={<Onboarding />} />

      {/* Main app shell with persistent bottom nav. */}
      <Route element={<Layout />}>
        <Route path="/lockers" element={<Lockers />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/friends" element={<Friends />} />
      </Route>

      <Route path="*" element={<Navigate to="/onboarding" replace />} />
    </Routes>
  )
}
