import { getProducts } from '../services/ProductService.js'
import { ProductCard } from '../components/productCard.js'
import { modal } from '../services/modal.js'
import { loadingButton } from '../components/loadButton.js'
import { ModalCreateClient } from '../components/createClient.js'
import { getProductOnLocalCartById, saveCartOnLocalStorage } from '../services/CartOnLocalStorage.js'
import { AddProductToCart, UpdateProductInCart } from '../services/CarritoService.js'
let content
let _root

const RenderProduct = async (products) => {
  products.forEach((product) => {
    const productBox = document.createElement('div')
    productBox.classList.add('rounded-3xl', 'text-center', 'hover:rounded-3xl', 'hover:border-2', 'hover:border-green-500', 'hover:transition-all', 'duration-75')
    productBox.setAttribute('id', product.id)
    const productContent = ProductCard(product.nombre, product.marca, product.precio, product.descripcion, product.imagenUrl)
    productBox.innerHTML = productContent
    content.append(productBox)
  })
}
const RenderProductPage = async () => {
  const { view, title } = renderFrame()
  await chargeInit()
  changeView(view, title)
}

const searchProduct = async (e) => {
  e.preventDefault()
  _root.innerHTML = ''
  const { view, title } = renderFrame()
  const search = e.target.value
  await getProducts(search, '', (product) => {
    RenderProduct(product)
  })
  changeView(view, title)
}
const chargeInit = async () => {
  await getProducts('', '', (product) => {
    RenderProduct(product)
  })
}
function renderFrame () {
  const view = document.createElement('section')
  view.classList.add('mt-8', 'mx-auto', 'w-full', 'max-w-5xl', 'center')
  const title = document.createElement('h1')
  title.classList.add('text-3xl', 'font-bold', 'text-center', 'mt-8')
  title.textContent = 'Productos'
  content = document.createElement('div')
  content.setAttribute('id', 'content')
  content.classList.add('grid', 'grid-cols-4', 'gap-x-16', 'gap-y-9', 'mt-8', 'justify-items-center')
  return { view, title }
}
function changeView (view, title) {
  view.innerHTML = title.outerHTML + content.outerHTML
  _root.innerHTML = view.outerHTML
}

// MAIN CODE
export const IndexRender = async () => {
  _root = document.getElementById('root')
  await RenderProductPage()
  document.getElementById('search').onchange = searchProduct
  modal()
  AddToCart()
}

const AddToCart = () => {
  const addCart = document.getElementsByClassName('add-cart')
  for (let i = 0; i < addCart.length; i++) {
    const button = addCart[i]
    button.addEventListener('click', addToCartClicked)
  }
}
// verify if user exist
const verifyUser = () => {
  const user = window.localStorage.getItem('user')
  if (user) {
    return true
  } else {
    return false
  }
}
// Add To Cart
const addToCartClicked = async (event) => {
  const button = event.target
  const card = button.parentElement
  card.removeChild(button)
  card.innerHTML += loadingButton()
  /* MODAL DE CREACION DE USUARIOS
  if (!verifyUser()) {
    console.log('Usuario no existe')
    const modal = ModalCreateClient()
    const modalContainer = document.createElement('div')
    modalContainer.setAttribute('id', 'modal-register')
    modalContainer.innerHTML = modal
    document.body.append(modalContainer)
  }
  */
  const product = parseInt(card.id)
  let amount = getProductOnLocalCartById(product)
  const data = {
    productId: product,
    amount: 1
  }
  if (amount === 0) {
    saveCartOnLocalStorage(data)
    amount = 1
  }
  const quantityId = 'quantity-' + product
  const newButton = document.createElement('div')
  newButton.classList.add('rounded-b-3xl', 'rounded-t-lg', 'border-2', 'add-cart', 'shadow-inner', 'ring-sky-500')
  const quantityDecrement = document.createElement('span')
  const quantityDecrementIcon = document.createElement('i')
  quantityDecrementIcon.classList.add('bx', 'bx-minus', 'text-xl', 'cursor-pointer', 'text-green-500', 'mr-4', 'quantity-decrement')
  quantityDecrement.append(quantityDecrementIcon)
  const quantityIncrement = document.createElement('span')
  const quantityIncrementIcon = document.createElement('i')
  quantityIncrementIcon.classList.add('bx', 'bx-plus', 'text-xl', 'cursor-pointer', 'text-green-500', 'ml-4', 'quantity-increment')
  quantityIncrement.append(quantityIncrementIcon)
  const quantity = document.createElement('span')
  quantity.classList.add('rounded-lg', 'w-14', 'text-xl', 'text-center', 'focus:outline-none')
  quantity.textContent = amount
  quantity.setAttribute('id', quantityId)
  newButton.append(quantityDecrement, quantity, quantityIncrement)
  card.innerHTML = newButton.outerHTML
  const inc = document.getElementsByClassName('quantity-increment')
  const dec = document.getElementsByClassName('quantity-decrement')
  // const num = document.getElementsByClassName('quantity-num')
  for (let i = 0; i < inc.length; i++) {
    const button = inc[i]
    button.addEventListener('click', (event) => {
      console.log(event.target.parentElement.parentElement.parentElement.id)
      const id = event.target.parentElement.parentElement.parentElement.id
      const quantity = document.getElementById('quantity-' + id)
      amount++
      data.productId = parseInt(id)
      data.amount = amount
      quantity.textContent = amount
      saveCartOnLocalStorage(data)
      data.amount = 1
      console.log('click inc')
      UpdateProductInCart(data, (body) => { console.log(body) })
    })
  }
  for (let i = 0; i < dec.length; i++) {
    const button = dec[i]
    button.addEventListener('click', (event) => {
      console.log(event.target.parentElement.parentElement.parentElement.id)
      const id = event.target.parentElement.parentElement.parentElement.id
      const quantity = document.getElementById('quantity-' + id)
      amount--
      data.productId = parseInt(id)
      data.amount = amount
      quantity.textContent = amount
      saveCartOnLocalStorage(data)
      data.amount = -1
      console.log('click dec')
      UpdateProductInCart(data, (body) => { console.log(body) })
    })
  }
  debugger
  const response = AddProductToCart(data, (body) => { console.log(body) })
}
// Add Item To Cart
function addItemToCart (title, price, imageSrc) {
  const cartShopBox = document.createElement('div')
  cartShopBox.classList.add('cart-box')
  const cartItems = document.getElementsByClassName('cart-content')[0]
  const cartItemNames = cartItems.getElementsByClassName('cart-product-title')
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert('This item is already added to the cart')
      return
    }
  }
  const cartBoxContent = `
  <img
  src=${imageSrc}
  alt="product 1"
  class="cart-product-img"
/>
<div class="detail-box">
  <div class="cart-product-title">
    ${title}
  </div>
  <div class="cart-product-price">${price}</div>
  <input type="number" value="1" class="cart-product-quantity" />
</div>
<!-- Remove Cart -->
<i class="bx bxs-trash-alt cart-product-remove"></i>
    `
  cartShopBox.innerHTML = cartBoxContent
  cartItems.append(cartShopBox)
  cartShopBox
    .getElementsByClassName('cart-product-remove')[0]
    .addEventListener('click', removeCartItem)
  cartShopBox
    .getElementsByClassName('cart-product-quantity')[0]
    .addEventListener('change', quantityChanged)
}
