module.exports = {
  content: [
    './public/view/*.{html,js}',
    './public/js/components/*.js',
    './public/js/container/*.js'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        cart: '32% 50% 18%'
      }
    }
  },
  plugins: []
}
