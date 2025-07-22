/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':"#146FE6",
        'primary':"#E8F1FD"
      }
    },
  },
  plugins: [],
}