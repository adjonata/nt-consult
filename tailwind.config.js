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
          light: '#849ce3',
          DEFAULT: '#3555b0',
          dark: '#1d398c',
        },
        secondary: {
          light: '#ce484f',
          DEFAULT: '#ba3239',
          dark: '#972228',
        }
      },
			animation: {
				fade: 'fadeIn .5s ease-in-out',
			},
      keyframes:{
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
      }
    },
  },
  plugins: [],
}

