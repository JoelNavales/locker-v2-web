import { PRIORITY } from '../data/mock.js'

// A single locker: colored by priority, with vent ribs, a latch,
// the subject name, a task-due count, and a priority pill.
export default function LockerCard({ locker }) {
  const p = PRIORITY[locker.priority]
  // Card fills are fixed accent colors, so foreground uses fixed neutrals
  // (coal/chalk) to keep contrast in both light and dark themes.
  const fg = locker.light ? 'text-coal' : 'text-chalk'
  const tone = locker.light ? 'bg-coal' : 'bg-chalk'
  return (
    <div
      className={`group relative flex min-h-[180px] flex-col gap-3 rounded-card border-3 border-coal bg-${p.color} p-5 shadow-hard-coal transition-transform hover:-translate-y-1 ${fg}`}
    >
      {/* vent ribs + latch */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1.5">
          <span className={`block h-1 w-12 rounded-full ${tone}`} />
          <span className={`block h-1 w-12 rounded-full ${tone}`} />
          <span className={`block h-1 w-12 rounded-full ${tone}`} />
        </div>
        {/* latch */}
        <div className={`h-9 w-3 rounded-sm border-3 border-coal ${tone}`} />
      </div>

      <h3 className="font-display text-2xl leading-none">{locker.subject}</h3>

      <div className="mt-auto flex items-end justify-between">
        <p className="font-mono text-xs font-bold">
          {locker.tasksDue} {locker.tasksDue === 1 ? 'TASK DUE' : 'TASKS DUE'}
        </p>
        <span className="badge-brutal -rotate-2 border-coal bg-coal text-chalk shadow-hard-sm-coal">
          {p.label} {p.emoji}
        </span>
      </div>
    </div>
  )
}
