/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily: {
        jetbrains_mono : ['JetBrains Mono']
      },
      colors: {
        dark : '#0f172a'
      }
    }
  },
  plugins: [],
}

