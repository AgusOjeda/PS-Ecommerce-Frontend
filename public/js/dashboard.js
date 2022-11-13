import { OrderTableRender } from './container/dashboard.js'
window.onload = () => {
  const sells = document.getElementById('sells')
  sells.addEventListener('click', (event) => {
    OrderTableRender()
  })
}
