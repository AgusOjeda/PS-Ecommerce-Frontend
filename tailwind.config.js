module.exports = {
  content: [
    './public/view/*.{html,js}',
    './public/js/components/*.js',
    './public/js/components/**/*.js',
    './public/js/container/*.js'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        GilroyRegular: ['Gilroy-Regular', 'sans-serif']
      },
      gridTemplateColumns: {
        cart: '32% 50% 18%'
      },
      colors: {
        bgPrimary: '#EFF1FA',
        textColor: '#1A2030',
        secondary: '#1D5BFB',
        secondaryHover: '#174ACE',
        gold: '#FBC920'
      }
    }
  },
  plugins: []
}
