/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      fontFamily:{
        police:"Roboto",
      },

      gridTemplateColumns:{
        gidlinked:"2fr 4fr 2.5fr",
        gridsm: "1fr"
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

