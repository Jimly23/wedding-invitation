/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  // Custom breakpoint untuk layar sangat kecil
        'xs': '375px',   // Custom breakpoint untuk layar kecil
        's': '425px'
      },
    },
  },
  plugins: [],
}

