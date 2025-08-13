/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A3C864', 
        secondary: '#7FAE5D',
        accent: '#C69A29', 
        background: '#F8F8F8',
        text: '#333333', 
        subtext: '#777777'
      },
    },
  },
  plugins: [],
}
