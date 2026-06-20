import { focus, focusTasks, PRIORITY, PRIORITY_ORDER } from '../data/mock.js'

export default function Focus() {
  // Show the queue ordered high → low priority.
  const tasks = [...focusTasks].sort(
    (a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority],
  )
  const totalAllocated = tasks.reduce((n, t) => n + t.allocated, 0)

  return (
    <div className="min-h-screen bg-violet px-6 py-8 dark:bg-cream lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
      <h1 className="mb-8 inline-block -rotate-1 border-3 border-ink bg-ink px-4 py-2 font-display text-3xl uppercase text-paper shadow-hard-sm lg:text-4xl">
        Focus Mode
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* timer card — STATIC, no countdown yet */}
        <div className="flex flex-col justify-center rounded-card border-3 border-ink bg-priority-med p-8 text-center shadow-hard">
          <p className="font-display text-7xl leading-none text-coal lg:text-8xl">
            {focus.time}
          </p>
          <p className="mt-4 font-mono text-sm font-bold uppercase text-coal">
            {focus.session}
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-3 border-ink bg-ink text-xl text-priority-med shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none dark:text-cream">
              ⏸
            </button>
            <button className="flex h-14 w-14 items-center justify-center rounded-full border-3 border-ink bg-ink text-xl text-priority-med shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none dark:text-cream">
              ⏭
            </button>
          </div>
        </div>

        {/* right column: ambient + friend */}
        <div className="flex flex-col gap-6">
          {/* ambient player */}
          <div className="flex items-center gap-4 rounded-card border-3 border-ink bg-paper p-5 shadow-hard">
            <div
              className="h-14 w-14 shrink-0 animate-spin rounded-full border-3 border-ink [animation-duration:4s]"
              style={{
                background:
                  'repeating-radial-gradient(#111111 0 2px, #fff 2px 5px)',
              }}
            />
            <div className="flex-1">
              <p className="font-display text-base uppercase text-ink">
                {focus.nowPlaying}
              </p>
              <p className="font-mono text-xs text-ink/60">ambient · looping</p>
            </div>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-3 border-ink bg-priority-low text-coal shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none">
              ▶
            </button>
          </div>

          {/* ambient chips */}
          <div className="flex flex-wrap gap-2.5">
            {focus.ambientChips.map((chip) => {
              const active = chip.label === focus.activeChip
              return (
                <span
                  key={chip.label}
                  className={`rounded-full border-3 border-ink px-4 py-2 font-mono text-xs font-bold uppercase shadow-hard-sm ${
                    active ? 'border-ink bg-priority-high text-chalk' : 'bg-paper text-ink'
                  }`}
                >
                  {chip.emoji} {chip.label}
                </span>
              )
            })}
          </div>

          {/* friend card */}
          <div className="mt-auto flex items-center gap-3 rounded-card border-3 border-paper bg-ink p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-paper bg-priority-med font-display text-coal">
              {focus.friend.name[0]}
            </div>
            <p className="font-mono text-sm font-bold text-paper">
              {focus.friend.name} {focus.friend.status} · {focus.friend.minutes} min ·
              keep up!
            </p>
          </div>
        </div>
      </div>

      {/* prioritized task queue (low → high) */}
      <section className="mt-6 rounded-card border-3 border-ink bg-paper p-5 shadow-hard lg:p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl uppercase text-ink lg:text-3xl">
              Task Queue
            </h2>
            <p className="mt-1 font-mono text-xs font-bold text-ink/60">
              Sorted high → low priority
            </p>
          </div>
          <span className="-rotate-1 border-3 border-ink bg-priority-med px-3 py-1.5 font-mono text-xs font-bold uppercase text-coal shadow-hard-sm">
            {tasks.length} tasks · {totalAllocated}h allocated
          </span>
        </div>

        <ul className="flex flex-col gap-3">
          {tasks.map((task) => {
            const p = PRIORITY[task.priority]
            return (
              <li
                key={task.id}
                className="flex flex-col gap-3 rounded-card border-3 border-ink bg-cream p-4 shadow-hard-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className={`h-10 w-3 shrink-0 rounded-sm border-2 border-ink bg-${p.color}`} />
                  <div>
                    <span className="badge-brutal -rotate-1 bg-ink text-paper">
                      {p.label} {p.emoji}
                    </span>
                    <p className="mt-1.5 font-display text-base uppercase text-ink">
                      {task.title}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 gap-2 pl-6 sm:pl-0">
                  <span className="flex flex-col border-3 border-ink bg-paper px-3 py-1.5 text-center font-mono shadow-hard-sm">
                    <span className="text-[9px] font-bold uppercase text-ink/50">Est.</span>
                    <span className="text-sm font-bold text-ink">⏱️ {task.estimate}</span>
                  </span>
                  <span className="flex flex-col border-3 border-ink bg-blue px-3 py-1.5 text-center font-mono text-chalk shadow-hard-sm">
                    <span className="text-[9px] font-bold uppercase opacity-70">Allocated</span>
                    <span className="text-sm font-bold">📌 {task.allocated}h</span>
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
      </div>
    </div>
  )
}
