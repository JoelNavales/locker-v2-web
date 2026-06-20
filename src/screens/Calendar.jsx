import { calendar, agenda, PRIORITY } from '../data/mock.js'

const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

// Build a Sunday-start grid padded with faded out-days from adjacent months.
function buildCells({ firstWeekday, daysInMonth, prevMonthDays }) {
  const cells = []
  for (let i = 0; i < firstWeekday; i++) {
    cells.push({ day: prevMonthDays - firstWeekday + 1 + i, out: true })
  }
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, out: false })
  let next = 1
  while (cells.length % 7 !== 0) cells.push({ day: next++, out: true })
  return cells
}

export default function Calendar() {
  const { monthLabel, today, dots } = calendar
  const cells = buildCells(calendar)

  return (
    <div className="dot-grid min-h-screen px-6 py-8 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-7xl">
      <h1 className="mb-8 font-display text-4xl uppercase text-ink lg:text-5xl">
        Calendar
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        {/* calendar card */}
        <section className="rounded-card border-3 border-ink bg-paper p-5 shadow-hard lg:p-6">
          <header className="mb-5 flex items-center justify-between">
            <h2 className="font-display text-2xl uppercase text-ink lg:text-3xl">
              {monthLabel}
            </h2>
            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-card border-3 border-ink bg-paper font-display shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none">
                ‹
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-card border-3 border-ink bg-paper font-display shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none">
                ›
              </button>
            </div>
          </header>

          <div className="mb-2 grid grid-cols-7">
            {DOW.map((d, i) => (
              <div
                key={i}
                className="text-center font-mono text-xs font-bold uppercase text-ink/60"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
            {cells.map((cell, i) => {
              const isToday = !cell.out && cell.day === today
              const dayDots = cell.out ? [] : dots[cell.day] || []
              return (
                <div
                  key={i}
                  className={`flex aspect-square flex-col items-center justify-start gap-1 rounded-sm border-2 border-ink px-1 pt-1.5 font-mono text-sm font-bold ${
                    cell.out
                      ? 'border-ink/30 text-ink/30'
                      : isToday
                        ? 'border-ink bg-ink text-priority-med dark:text-cream'
                        : 'bg-paper text-ink'
                  }`}
                >
                  <span>{cell.day}</span>
                  <span className="flex gap-0.5">
                    {dayDots.map((d, j) => (
                      <span
                        key={j}
                        className={`h-1.5 w-1.5 rounded-full border border-ink bg-${PRIORITY[d].color}`}
                      />
                    ))}
                  </span>
                </div>
              )
            })}
          </div>

          {/* legend */}
          <div className="mt-5 flex items-center gap-5">
            {['high', 'med', 'low'].map((key) => (
              <div key={key} className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-sm border-2 border-ink bg-${PRIORITY[key].color}`}
                />
                <span className="font-mono text-xs font-bold text-ink">
                  {PRIORITY[key].label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* agenda */}
        <aside>
          <h2 className="mb-3 font-display text-xl uppercase text-ink">Agenda</h2>
          <ul className="flex flex-col gap-3">
            {agenda.map((e) => (
              <li
                key={e.id}
                className="flex items-stretch gap-3 rounded-card border-3 border-ink bg-paper shadow-hard-sm"
              >
                <span
                  className={`w-3 rounded-l-sm border-r-3 border-ink bg-${PRIORITY[e.priority].color}`}
                />
                <div className="flex flex-col py-3 pr-3">
                  <span className="font-mono text-sm font-bold text-ink">{e.title}</span>
                  <span className="mt-0.5 font-mono text-xs text-ink/60">{e.when}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
      </div>
    </div>
  )
}
