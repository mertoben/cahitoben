/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Altın/sarı palet (brand)
        brand: {
          50:  '#fffbea',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24', // link rengi
          500: '#f59e0b', // buton aktif
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Mevcut CSS'te kullandığın alias (text-accent, bg-accent, bg-accent-dark, text-accent-fg)
        accent: {
          DEFAULT: '#fbbf24', // text-accent / bg-accent
          dark:    '#d97706', // bg-accent-dark
          fg:      '#0a0a0a', // text-accent-fg (koyu metin)
        },
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
}
