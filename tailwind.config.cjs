/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',            // <-- ÖNEMLİ
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#FFD000', dark: '#E6BC00', fg: '#111111' },
      },
      borderRadius: { '2xl': '1rem' },
    },
  },
  plugins: [],
}
