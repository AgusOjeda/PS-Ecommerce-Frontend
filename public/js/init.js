import { IndexRender } from './container/index.js'
import { CartRender } from './container/cart.js'
window.onload = () => {
  document.getElementById('cart-icon').addEventListener('click', () => {
    CartRender()
  })
  IndexRender()
}
