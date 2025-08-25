/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFD700",   // Altın rengi (butonlarda kullanılır)
          dark: "#E6C200",      // Hover için daha koyu ton
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // haberler / blog içerikleri için tipografi
    require('@tailwindcss/forms'),       // form inputları için daha şık görünüm
    require('@tailwindcss/aspect-ratio') // görseller için aspect-ratio desteği
  ],
}
