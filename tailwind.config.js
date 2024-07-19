/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'B540B3',
          DEFAULT: '#822E81',
          dark: '#5B205A',
        },
        primary: {
          light: '#B540B3',
          DEFAULT: '#822E81',
          dark: '#5B205A',
        },
        secondary: {
          light: '#D19EA4',
          DEFAULT: '#BE747D',
          dark: '#A64E59',
        }
      }
    },
  },
  plugins: [],
}

