/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        regular: '#606266',
        dark: '#1B1D21',
        secondary: '#909399',
        error: '#F56C6C',
        grey: '#F2F3F5',
        'border-regular': '#DCDFE6',
        'border-light': '#EBEEF5'
      }
    },
    fontFamily: {
      primary: ['Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
