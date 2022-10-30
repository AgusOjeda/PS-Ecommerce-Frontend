import { saveCartOnLocalStorage, getCartOnLocalStorage } from '../services/CartOnLocalStorage.js'
let _root

export const CartRender = async () => {
  _root = document.getElementById('root')
  _root.innerHTML = /* html */'<h1>Cart</h1>'
}
const renderCart = () => {
  const cart = getCartOnLocalStorage()
  console.log(cart)
  cart.forEach(element => {
    _root.innerHTML += /* html */`
    <h1>CARRITO DE PRODUCTOS</h1>
      <div class="grid justify-items-center grid-cols-4>
        <img src="" alt"" />
        <p>${element.amount}</p>
      </div>
    `
  })
}
const frame = () => {

}
const CreateCartUI = (product) => {
  const { id, nombre, marca, precio, descripcion, imagenUrl } = product

  saveCartOnLocalStorage(cart)
  renderCart()
}

/*
const RenderProductPage = async () => {
  const { view, title } = renderFrame()
  await chargeInit()
  changeView(view, title)
}
function renderFrame () {
  const view = document.createElement('section')
  view.classList.add('mt-8', 'mx-auto', 'w-full', 'max-w-5xl', 'center')
  const title = document.createElement('h1')
  title.classList.add('text-3xl', 'font-bold', 'text-center', 'mt-8')
  title.textContent = 'Productos'
  content = document.createElement('div')
  content.setAttribute('id', 'content')
  content.classList.add('grid', 'grid-cols-4', 'gap-x-16', 'gap-y-9', 'mt-16')
  return { view, title }
}
*/
