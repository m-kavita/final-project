module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#DDC061',
          200: '#D4AF37',
          300: '#C7A22B',
        },
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
      fontFamily: {
        siteName: ['Monoton'],
        body: ['Assistant'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
