import { IndexRender } from './container/index.js'
import { CartRender } from './container/cart.js'

window.onload = () => {
  document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('root').innerHTML = ''
    CartRender()
    document.getElementById('btn-continue-shopping').addEventListener('click', () => {
      document.getElementById('root').innerHTML = ''
      IndexRender()
    })
  })
  document.getElementById('logo').addEventListener('click', () => {
    document.getElementById('root').innerHTML = ''
    IndexRender()
  })
  IndexRender()
}
