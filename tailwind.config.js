/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        regular: '#292e35',
        secondary: '#1e232a',
        'red-100': '#e74c3c',
        'red-200': '#ff0000',
        grey: '#8d9194'
      }
    },
    fontFamily: {
      primary: ['Montserrat']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
