/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: '#30e3ca',
        secondary: '#11999e',
        danger: '#ff2e63',
        success: '#21bf73',
        surface: '#121212',
        border: '#2c2c2c',
      },
    },
  },
  plugins: [],
}
