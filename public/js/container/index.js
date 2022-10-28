import { getProducts, ProductById } from '../services/ProductService.js'
import { CreateClient } from '../services/ClienteService.js'
import { ProductCard } from '../components/productCard.js'
let _productsContainer
const RenderProduct = async (products) => {
  products.forEach((product) => {
    const productBox = document.createElement('div')
    const productContent = ProductCard(product.id, product.nombre, product.marca, product.precio, product.descripcion, product.imagenUrl)
    productBox.innerHTML = productContent
    _productsContainer.append(productBox)
  })
}

const searchProduct = async (e) => {
  _productsContainer.innerHTML = ''
  const search = e.target.value
  getProducts(search, '', RenderProduct)
}
const chargeInit = async () => {
  await getProducts('', '', (product) => {
    RenderProduct(product)
  })
}
export const IndexRender = async () => {
  _productsContainer = document.getElementById('products-container')
  chargeInit()
  document.getElementById('search').onchange = searchProduct
}
