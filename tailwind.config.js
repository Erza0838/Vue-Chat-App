/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
export default {
  content: 
  [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: 
    {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': 'rgb(15 23 42)',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "緑" : "#16a34a",
      "sky" : colors.sky,
    }
  },
  plugins: [],
}

