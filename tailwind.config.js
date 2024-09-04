/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily:{
      'fredoka': ['Fredoka', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        'playerX' : "#48D2FE",
        'playerO' : "#DCBF3F",
        'screenBg' : "#5a1e76",
        'boardBg' : "#2B0040",
        'squareBg' : "#43115B",
      }
    },
  },
  plugins: [],
}