import { getProducts } from '../services/ProductService.js'
import { ProductCard } from '../components/productCard.js'
import { modal } from '../services/modal.js'
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

export const IndexRender = async () => {
  _root = document.getElementById('root')
  await RenderProductPage()
  document.getElementById('search').onchange = searchProduct
  modal()
}
