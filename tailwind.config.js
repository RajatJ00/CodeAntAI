// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'serif'],
    },
    screens: {
      'sm': '400px',
      'md': '760px',
      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

