// Stub route for Phase 1 — real friends feature comes later.
export default function Friends() {
  return (
    <div className="dot-grid flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-card border-3 border-ink bg-priority-med text-5xl shadow-hard">
        👥
      </div>
      <h1 className="mt-6 font-display text-3xl uppercase text-ink lg:text-4xl">
        Friends
      </h1>
      <p className="mt-3 max-w-md font-mono text-sm text-ink/70">
        See who's locked in, compare focus hours, and keep your crew accountable.
        Coming soon — stay locked in. 🔒
      </p>
    </div>
  )
}
