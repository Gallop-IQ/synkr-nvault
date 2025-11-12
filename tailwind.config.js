/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        synkron: {
          teal: '#00FFE0',
          gold: '#FFD700',
          black: '#0A0A0A',
        },
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
