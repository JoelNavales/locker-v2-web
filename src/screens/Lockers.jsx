import { useNavigate } from 'react-router-dom'
import LockerCard from '../components/LockerCard.jsx'
import { lockers } from '../data/mock.js'

// Home: header + wide responsive grid of locker cards + a "new locker" card.
export default function Lockers() {
  const navigate = useNavigate()
  const totalDue = lockers.reduce((n, l) => n + l.tasksDue, 0)

  return (
    <div className="dot-grid min-h-screen px-6 py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl uppercase text-ink lg:text-5xl">
            My Lockers
          </h1>
          <p className="mt-2 font-mono text-sm font-bold text-ink/70">
            {lockers.length} lockers · {totalDue} tasks due
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-3 border-ink bg-violet font-display text-xl text-chalk shadow-hard-sm">
          J
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lockers.map((locker) => (
          <LockerCard key={locker.id} locker={locker} />
        ))}

        {/* dashed new-locker card */}
        <button
          onClick={() => navigate('/lockers')}
          className="flex min-h-[180px] flex-col items-center justify-center gap-2 rounded-card border-3 border-dashed border-coal bg-paper/70 p-5 font-display text-sm uppercase text-ink transition-transform hover:-translate-y-1 active:translate-x-1 active:translate-y-1"
        >
          <span className="text-4xl leading-none">+</span>
          New Locker
        </button>
      </div>
      </div>
    </div>
  )
}
