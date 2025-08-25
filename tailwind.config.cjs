/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tek noktadan yönetilen marka rengi
        brand: {
          400: "#00ADB5", // linkler, vurgu
          500: "#00ADB5", // aktif buton
          600: "#008B92", // hover/daha koyu ton
        },
      },
    },
  },
  // Vercel build hatalarını önlemek için ekstra plugin yok
  plugins: [],
}
