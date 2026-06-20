/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  // Color classes are built dynamically from priority data (e.g. `bg-${color}`),
  // so the JIT can't see them in source — safelist the variants we use.
  safelist: [
    'bg-priority-high',
    'bg-priority-med',
    'bg-priority-low',
    'bg-blue',
    'border-priority-high',
    'border-priority-med',
    'border-priority-low',
    'border-blue',
  ],
  theme: {
    extend: {
      colors: {
        // Themed neutrals — driven by CSS vars so a single `.dark` flip
        // re-themes borders, text, surfaces and shadows app-wide.
        ink: 'var(--ink)',
        cream: 'var(--cream)',
        paper: 'var(--paper)',
        // Fixed neutrals for content placed ON TOP of fixed accent colors,
        // so contrast holds in both themes.
        coal: '#111111',
        chalk: '#FFFBEF',
        'priority-high': '#FF4D6D',
        'priority-med': '#FFC93C',
        'priority-low': '#22C55E',
        blue: '#3A86FF',
        violet: '#9B5DE5',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        card: '6px',
      },
      boxShadow: {
        hard: '6px 6px 0 var(--ink)',
        'hard-sm': '4px 4px 0 var(--ink)',
        // Fixed-black variants — for elements that must keep a black outline
        // in both themes (e.g. locker cards).
        'hard-coal': '6px 6px 0 #111111',
        'hard-sm-coal': '4px 4px 0 #111111',
      },
    },
  },
  plugins: [],
}
