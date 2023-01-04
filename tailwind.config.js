/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs', './views/layouts/*.ejs'],
  theme: {
    extend: {
      colors: {
        "djungle": '#000F08',
        'raisin': '#221E22',
        'errie': '#161316',
        'forga29': '#000F14'
      },
      fontFamily: {
        'poppins': ["'Poppins', sans-serif"]
      }
    },
  },
  plugins: [],
}
