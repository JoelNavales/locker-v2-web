import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '../data/mock.js'

const navItemClass = ({ isActive }) =>
  `flex shrink-0 items-center gap-2 border-3 border-ink px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-tight transition-transform active:translate-x-1 active:translate-y-1 lg:text-sm ${
    isActive
      ? 'bg-ink text-priority-med dark:text-cream shadow-none lg:shadow-hard-sm'
      : 'bg-paper text-ink shadow-none active:shadow-none lg:shadow-hard-sm lg:active:shadow-none'
  }`

// Primary navigation. Vertical sidebar on desktop, horizontal top bar on mobile.
export default function Sidebar({ onOpenSettings }) {
  const navigate = useNavigate()

  return (
    <aside className="sticky top-0 z-30 border-b-3 border-ink bg-paper lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-b-0 lg:border-r-3">
      <div className="flex items-center gap-3 px-4 py-3 lg:h-full lg:flex-col lg:items-stretch lg:gap-4 lg:px-5 lg:py-7">
        {/* logo */}
        <NavLink
          to="/lockers"
          className="-rotate-2 border-3 border-ink bg-ink px-3 py-2 font-display text-lg tracking-wide text-priority-med shadow-hard-sm dark:text-cream lg:mb-2 lg:self-start lg:text-2xl"
        >
          🔒 LOCKER
        </NavLink>

        {/* primary nav */}
        <nav className="flex flex-1 gap-2 overflow-x-auto lg:flex-none lg:flex-col lg:gap-3 lg:overflow-visible">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navItemClass}>
              <span className="text-lg leading-none">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* account actions */}
        <div className="flex gap-2 lg:mt-auto lg:flex-col lg:gap-3">
          <button
            type="button"
            onClick={onOpenSettings}
            className="flex shrink-0 items-center gap-2 border-3 border-ink bg-paper px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-tight text-ink transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none lg:text-sm lg:shadow-hard-sm"
          >
            <span className="text-lg leading-none">⚙️</span>
            <span className="hidden lg:inline">Settings</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/onboarding')}
            className="flex shrink-0 items-center gap-2 border-3 border-ink bg-priority-high px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-tight text-chalk transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none lg:text-sm lg:shadow-hard-sm"
          >
            <span className="text-lg leading-none">🚪</span>
            <span className="hidden lg:inline">Sign Out</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
