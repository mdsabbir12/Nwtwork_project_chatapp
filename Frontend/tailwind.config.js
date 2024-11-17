/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'amar-white':'#d1d3c9',
      'amar2-white':'#e8e8e8'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

