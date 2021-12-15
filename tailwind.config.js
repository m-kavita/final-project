module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(https://serving.photos.photobox.com/746544428de8c191f5df9a96c8e2af4c4745d468270afb78f91bfc5c39ea124686f3ff34.jpg)"
      },
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
