import { useState } from 'react'

// Small neubrutalist toggle switch (local UI state only for now).
function Toggle({ on, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-7 w-12 items-center rounded-full border-3 border-ink p-0.5 transition-colors ${
        on ? 'justify-end bg-priority-low' : 'justify-start bg-paper'
      }`}
    >
      <span className="h-4 w-4 rounded-full border-2 border-ink bg-cream" />
    </button>
  )
}

function Row({ icon, title, desc, children }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex items-start gap-3">
        <span className="text-xl leading-none">{icon}</span>
        <div>
          <p className="font-mono text-sm font-bold uppercase text-ink">{title}</p>
          {desc && <p className="font-mono text-xs text-ink/60">{desc}</p>}
        </div>
      </div>
      {children}
    </div>
  )
}

// Settings dialog opened from the sidebar. Theme is real; other prefs are
// local UI toggles (no persistence yet — that's a later phase).
export default function SettingsModal({ open, onClose, theme, setTheme }) {
  const [notifications, setNotifications] = useState(true)
  const [ambientAutoplay, setAmbientAutoplay] = useState(false)
  const [soundEffects, setSoundEffects] = useState(true)
  const [sessionLength, setSessionLength] = useState(25)

  if (!open) return null

  const themeOptions = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-coal/60 p-0 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-card border-3 border-ink bg-paper shadow-hard"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <header className="flex items-center justify-between border-b-3 border-ink px-5 py-4">
          <h2 className="font-display text-2xl uppercase text-ink">⚙️ Settings</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-card border-3 border-ink bg-paper font-display text-ink shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            ✕
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-4">
          {/* appearance */}
          <section className="border-b-3 border-dashed border-ink pb-5">
            <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-ink/60">
              Appearance
            </h3>
            <p className="mb-3 font-mono text-sm font-bold uppercase text-ink">Theme</p>
            <div className="grid grid-cols-2 gap-3">
              {themeOptions.map((opt) => {
                const active = theme === opt.value
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTheme(opt.value)}
                    className={`flex flex-col items-center gap-2 rounded-card border-3 border-ink p-4 font-display uppercase transition-transform active:translate-x-1 active:translate-y-1 ${
                      active
                        ? 'bg-violet text-chalk shadow-hard-sm'
                        : 'bg-paper text-ink'
                    }`}
                  >
                    <span className="text-3xl">{opt.icon}</span>
                    {opt.label}
                    <span className="font-mono text-[10px] font-bold">
                      {active ? '● ACTIVE' : '○ SELECT'}
                    </span>
                  </button>
                )
              })}
            </div>
          </section>

          {/* preferences */}
          <section className="divide-y-2 divide-dashed divide-ink/30 border-b-3 border-dashed border-ink py-2">
            <h3 className="py-3 font-mono text-xs font-bold uppercase tracking-widest text-ink/60">
              Preferences
            </h3>
            <Row icon="🔔" title="Notifications" desc="Task reminders & nudges">
              <Toggle on={notifications} onClick={() => setNotifications((v) => !v)} />
            </Row>
            <Row icon="🎧" title="Ambient autoplay" desc="Start sound on focus">
              <Toggle
                on={ambientAutoplay}
                onClick={() => setAmbientAutoplay((v) => !v)}
              />
            </Row>
            <Row icon="🔊" title="Sound effects" desc="Clicks & unlock sounds">
              <Toggle on={soundEffects} onClick={() => setSoundEffects((v) => !v)} />
            </Row>
          </section>

          {/* focus */}
          <section className="border-b-3 border-dashed border-ink py-2">
            <h3 className="py-3 font-mono text-xs font-bold uppercase tracking-widest text-ink/60">
              Focus
            </h3>
            <Row icon="⏱️" title="Session length" desc="Default deep-work block">
              <div className="flex gap-2">
                {[25, 50].map((min) => (
                  <button
                    key={min}
                    type="button"
                    onClick={() => setSessionLength(min)}
                    className={`border-3 border-ink px-3 py-1.5 font-mono text-xs font-bold ${
                      sessionLength === min
                        ? 'bg-priority-med text-coal shadow-hard-sm'
                        : 'bg-paper text-ink'
                    }`}
                  >
                    {min}m
                  </button>
                ))}
              </div>
            </Row>
          </section>

          {/* account */}
          <section className="pt-2">
            <h3 className="py-3 font-mono text-xs font-bold uppercase tracking-widest text-ink/60">
              Account
            </h3>
            <div className="flex items-center gap-3 rounded-card border-3 border-ink bg-cream p-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-3 border-ink bg-violet font-display text-chalk">
                J
              </div>
              <div className="font-mono">
                <p className="text-sm font-bold text-ink">Joel · Student</p>
                <p className="text-xs text-ink/60">you@locker.app</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
