import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import SettingsModal from './SettingsModal.jsx'

// App shell: fixed sidebar (desktop) / top bar (mobile) + scrollable content.
// Owns the theme + settings-dialog state shared across screens.
export default function Layout() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('locker-theme') || 'light',
  )
  const [settingsOpen, setSettingsOpen] = useState(false)

  // Apply the theme by toggling `.dark` on <html> and remember the choice.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('locker-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen lg:pl-64">
      <Sidebar onOpenSettings={() => setSettingsOpen(true)} />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  )
}
