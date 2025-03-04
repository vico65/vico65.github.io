/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        primary : ['JetBrains Mono'],
        secondary : ['Poppins']
      },
      colors: {
        dark : '#0f172a',
        primary : '#0ea5e9',
        secondary : '#f43f5e',
        coba : '#64748b'
      },
      borderWidth: {
        '1.5' : '1.5px',
        '3': '3px'
      },
      backgroundImage: {
        'alvico' : "url('res/images/alvico.jpg')"
      },
      spacing : {
        '0.5' : '2px'
      },
      height : {
        '18' : '75px'
      }
    }
  },
  plugins: [],
}

