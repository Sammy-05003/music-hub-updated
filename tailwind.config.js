/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#1DB954',
        secondary: '#282828',
      },
    },
  },
  plugins: [],
};