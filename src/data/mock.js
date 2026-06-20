// Hardcoded mock data for Phase 1. No backend — static UI only.

// Priority presentation: card color + pill label/emoji + accent color.
export const PRIORITY = {
  high: { label: 'HIGH', emoji: '🔥', color: 'priority-high' },
  med: { label: 'MED', emoji: '⚡', color: 'priority-med' },
  low: { label: 'LOW', emoji: '✅', color: 'priority-low' },
  blue: { label: 'EXTRA', emoji: '✦', color: 'blue' },
}

// `light` marks cards whose fill is light enough to need ink (vs. paper) text.
export const lockers = [
  { id: 1, subject: 'CAPSTONE', priority: 'high', tasksDue: 4, light: false },
  { id: 2, subject: 'MATH 101', priority: 'med', tasksDue: 2, light: true },
  { id: 3, subject: 'P.E.', priority: 'low', tasksDue: 0, light: false },
  { id: 4, subject: 'ELECTIVES', priority: 'blue', tasksDue: 1, light: false },
]

// Calendar — June 2026. "Today" is the 11th (a Thursday).
export const calendar = {
  monthLabel: 'JUNE 2026',
  // June 1, 2026 falls on a Monday → one leading out-day (May 31) on a Sunday grid.
  firstWeekday: 1,
  daysInMonth: 30,
  prevMonthDays: 31,
  today: 11,
  // Priority dots keyed by day-of-month (a day can carry more than one).
  dots: {
    2: ['low'],
    4: ['med'],
    6: ['high'],
    9: ['high', 'med'],
    11: ['high'],
    15: ['med'],
    17: ['low'],
    20: ['high'],
    24: ['med'],
    27: ['low'],
  },
}

export const agenda = [
  { id: 1, title: 'Capstone defense slides', when: 'TODAY · 1:00 PM', priority: 'high' },
  { id: 2, title: 'Math 101 problem set', when: 'TODAY · 4:30 PM', priority: 'med' },
]

export const focus = {
  time: '24:59',
  session: 'DEEP WORK · CAPSTONE 🔒',
  nowPlaying: 'RAIN ON WINDOW 🌧️',
  ambientChips: [
    { label: 'RAIN', emoji: '🌧️' },
    { label: 'CAFE', emoji: '☕' },
    { label: 'LO-FI', emoji: '🎵' },
    { label: 'FOREST', emoji: '🌲' },
    { label: 'BROWN', emoji: '📻' },
  ],
  activeChip: 'RAIN',
  friend: { name: 'Maria', status: 'is locked in 🔒', minutes: 22 },
}

// Focus task queue. `estimate` = realistic time to finish; `allocated` = hours
// the user blocks out for it. Rendered low → high priority.
export const PRIORITY_ORDER = { low: 0, med: 1, high: 2 }

export const focusTasks = [
  { id: 1, title: 'Organize lecture notes', priority: 'low', estimate: '30m', allocated: 1 },
  { id: 2, title: 'Review flashcards', priority: 'low', estimate: '45m', allocated: 1 },
  { id: 3, title: 'Read chapter 5', priority: 'med', estimate: '1h', allocated: 1 },
  { id: 4, title: 'Math 101 problem set', priority: 'med', estimate: '1h 30m', allocated: 2 },
  { id: 5, title: 'Finalize thesis abstract', priority: 'high', estimate: '1h 30m', allocated: 2 },
  { id: 6, title: 'Capstone defense slides', priority: 'high', estimate: '2h', allocated: 3 },
]

export const NAV_ITEMS = [
  { to: '/lockers', icon: '🔒', label: 'LOCKERS' },
  { to: '/calendar', icon: '📅', label: 'CALENDAR' },
  { to: '/focus', icon: '⏱️', label: 'FOCUS' },
  { to: '/friends', icon: '👥', label: 'FRIENDS' },
]
