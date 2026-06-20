import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'

// Landing page. Full-bleed blue hero, two columns on desktop. No app nav.
export default function Onboarding() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-blue">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:justify-between lg:gap-16 lg:py-20">
        {/* copy + CTAs */}
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <span className="-rotate-2 border-3 border-ink bg-priority-high px-3 py-1 font-mono text-xs font-bold uppercase text-paper shadow-hard-sm">
            Neubrutalism · Study OS
          </span>

          <h1
            className="mt-6 font-display text-7xl uppercase leading-[0.9] text-priority-med sm:text-8xl"
            style={{ textShadow: '5px 5px 0 #111111' }}
          >
            LOCKER
          </h1>

          <p className="mt-6 max-w-md border-3 border-ink bg-paper px-5 py-4 font-mono text-sm leading-relaxed text-ink shadow-hard-sm">
            Your study life, <b className="bg-priority-med px-1">locked in</b>. Every
            subject is a locker you open — colors scream your priorities, ambient noise
            keeps you in the zone, and your crew keeps you accountable.
          </p>

          {/* pager */}
          <div className="mt-8 flex gap-2">
            <span className="h-3 w-7 rounded-full border-3 border-ink bg-priority-med" />
            <span className="h-3 w-3 rounded-full border-3 border-ink bg-paper" />
            <span className="h-3 w-3 rounded-full border-3 border-ink bg-paper" />
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              className="bg-priority-med text-ink"
              onClick={() => navigate('/lockers')}
            >
              Get Started →
            </Button>
            <Link
              to="/lockers"
              className="font-mono text-sm font-bold text-paper underline underline-offset-4"
            >
              I already have a key 🔑
            </Link>
          </div>
        </div>

        {/* locker hero art */}
        <div className="relative flex h-80 w-64 shrink-0 -rotate-3 flex-col items-center justify-between rounded-card border-3 border-ink bg-priority-high p-6 shadow-hard">
          <div className="flex w-full flex-col items-center gap-2.5">
            <span className="block h-2 w-24 rounded-full bg-ink" />
            <span className="block h-2 w-24 rounded-full bg-ink" />
            <span className="block h-2 w-24 rounded-full bg-ink" />
          </div>
          <span
            className="font-display text-7xl text-paper"
            style={{ textShadow: '3px 3px 0 #111111' }}
          >
            07
          </span>
          <div className="absolute right-5 top-1/2 h-16 w-5 -translate-y-1/2 rounded-sm border-3 border-ink bg-priority-med" />
        </div>
      </div>
    </div>
  )
}
