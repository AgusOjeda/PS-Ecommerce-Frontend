import { getProducts } from '../services/ProductService.js'
import { ProductCard } from '../components/productCard.js'
import { modal } from '../services/modal.js'
import { saveCartOnLocalStorage, getCartOnLocalStorage, deleteOnLocalCartById } from '../services/CartOnLocalStorage.js'
import { AddProductToCart, DeleteProductInCart } from '../services/CarritoApi.js'
import { ProductCardButton } from '../components/Buttons/productCardButton.js'
import { IncreaseProductEvent, DecreaseProductEvent, DeleteProduct } from '../services/CarritoService.js'
import { ProductAddButton } from '../components/Buttons/productAddButton.js'
let content
let _root

const RenderProduct = async (products) => {
  products.forEach((product) => {
    const productBox = document.createElement('div')
    productBox.classList.add('rounded-3xl', 'hover:rounded-3xl', 'hover:border-2', 'hover:border-green-500', 'hover:transition-all', 'duration-75', 'product-box')
    productBox.setAttribute('id', product.id)
    const productContent = ProductCard(product.id, product.nombre, product.marca, product.precio, product.descripcion, product.imagenUrl)
    productBox.innerHTML = productContent
    content.append(productBox)
  })
}
const RenderProductPage = async () => {
  const { view, title } = renderFrame()
  await chargeInit()
  changeView(view, title)
  VerifyProductInCart()
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
  VerifyProductInCart()
  modal()
}
const chargeInit = async () => {
  await getProducts('', '', (product) => {
    RenderProduct(product)
  })
}
function renderFrame () {
  const view = document.createElement('section')
  view.classList.add('mt-8', 'container', 'max-w-5xl')
  const title = document.createElement('h1')
  title.classList.add('text-3xl', 'font-bold', 'text-center', 'mt-8')
  title.textContent = 'Productos'
  content = document.createElement('div')
  content.setAttribute('id', 'content')
  content.classList.add('grid', 'grid-cols-4', 'gap-x-16', 'gap-y-9', 'mt-8')
  return { view, title }
}
function changeView (view, title) {
  view.innerHTML = title.outerHTML + content.outerHTML
  _root.innerHTML = view.outerHTML
}

const VerifyProductInCart = () => {
  const cart = getCartOnLocalStorage()
  // Get all id of children of content div
  const children = Array.from(content.children)
  const idChildren = children.map((child) => {
    return parseInt(child.id)
  })
  if (cart !== null) {
    cart.forEach((product) => {
      const response = idChildren.includes(product.productId)
      if (response) {
        // Delete button
        const deleteButton = document.getElementById('delete-' + product.productId)
        deleteButton.parentElement.classList.remove('hidden')
        deleteButton.addEventListener('click', DeleteButtonEvent)
        const quantityId = 'quantity-' + product.productId
        // Obtain the product box element
        const productBox = document.getElementById(product.productId)
        const button = productBox.querySelector('button')
        // Remove the old button
        productBox.removeChild(button)
        const newButton = ProductCardButton(product.productId, product.amount, quantityId)
        productBox.append(newButton)
        IncreaseProductEvent(false)
        DecreaseProductEvent(false)
      }
    })
  }
}
const DeleteButtonEvent = (e) => {
  let id = e.target.id.split('-')[1]
  const productBox = document.getElementById(id)
  const quantitySpan = document.getElementById('quantity-' + id)
  productBox.removeChild(quantitySpan.parentElement)
  const newButton = ProductAddButton()
  productBox.append(newButton)
  e.target.parentElement.classList.add('hidden')
  id = parseInt(id)
  deleteOnLocalCartById(id)
  DeleteProductInCart(id, () => { })
  AddToCart()
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
// Add To Cart
const addToCartClicked = async (event) => {
  const button = event.target
  const card = button.parentElement
  card.removeChild(button)
  const product = parseInt(card.id)
  // Delete button
  const deleteButton = document.getElementById('delete-' + card.id)
  deleteButton.parentElement.classList.remove('hidden')
  deleteButton.addEventListener('click', DeleteButtonEvent)
  const quantityId = 'quantity-' + product
  const newButton = ProductCardButton(product, 1, quantityId)
  card.append(newButton)
  const data = {
    productId: product,
    amount: 1
  }
  saveCartOnLocalStorage(data)
  AddProductToCart(data, () => {})
  IncreaseProductEvent(false)
  DecreaseProductEvent(false)
}
