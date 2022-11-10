import { IndexRender } from './container/index.js'
import { CartRender } from './container/cart.js'
import { saveCartOnLocalStorage } from './services/CartOnLocalStorage.js'
import { CreateClient2, CreateClient } from './services/ClienteService.js'
import { SaleRender } from './container/sale.js'
window.onload = () => {
  if (window.location.pathname === '/sale') {
    SaleRender()
  }
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
