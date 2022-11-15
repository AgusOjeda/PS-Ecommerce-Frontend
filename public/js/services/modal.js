import { ProductById } from './ProductService.js'
import { ModalProduct } from '../components/modalProduct.js'
import { OftenWithCard } from '../components/oftenWith.js'
import { getProductOnLocalCartById, saveCartOnLocalStorage } from '../services/CartOnLocalStorage.js'
import { AddProductToCart, UpdateProductInCart } from '../services/CarritoApi.js'

export const modal = () => {
  const products = document.getElementsByClassName('modal-open')
  for (let i = 0; i < products.length; i++) {
    const productModal = products[i]
    productModal.addEventListener('click', showModalClicked)
  }
}

// Add function to update product amount, and delete product

const showModalClicked = async (event) => {
  const product = event.target.parentElement.parentElement
  const id = product.getAttribute('id')
  await ProductById(id, (body) => {
    createModal(body)
    deleteModal()
  })
}

const createModal = (body) => {
  const modal = ModalProduct(body)
  const modalContainer = document.createElement('div')
  modalContainer.setAttribute('id', `modal-${body.id}`)
  modalContainer.classList.add('fixed', 'inset-0', 'bg-gray-700', 'bg-opacity-75', 'font-GilroyRegular', 'modal-container')
  modalContainer.innerHTML = modal
  document.body.append(modalContainer)
  const add = document.getElementById('add-to-cart')
  add.addEventListener('click', () => {
    const product = getProductOnLocalCartById(body.id)
    const data = {
      productId: parseInt(body.id),
      amount: 1
    }
    if (product === 0) {
      saveCartOnLocalStorage(data)
      AddProductToCart(data, () => {})
    } else {
      data.amount = parseInt(product) + 1
      saveCartOnLocalStorage(data)
      data.amount = 1
      UpdateProductInCart(data, () => { })
    }
    const succesful = document.createElement('div')
    succesful.classList.add('fixed', 'grid', 'place-content-center', 'h-fit', 'w-fit', 'inset-0', 'bg-green-500', 'text-white', 'p-2', 'rounded-2xl', 'm-2')
    succesful.setAttribute('id', 'succesful-add')
    succesful.innerHTML = 'Producto agregado al carrito'
    document.body.append(succesful)
    setTimeout(() => {
      succesful.remove()
    }
    , 2000)
  })
  load()
}

const deleteModal = () => {
  const closeButton = document.getElementById('close-modal')
  const modal = document.getElementsByClassName('modal-container')[0]
  closeButton.addEventListener('click', (event) => {
    const id = event.target.parentElement.parentElement.parentElement.parentElement.id.split('-')[1]
    const product = getProductOnLocalCartById(id)
    const quantityText = document.getElementById(`quantity-${id}`)
    quantityText.innerHTML = product
    modal.remove()
  })
}

const load = async () => {
  for (let i = 0; i < 5; i++) {
    generateId(5)
  }
  haveIt.forEach((id) => {
    ProductById(id, (body) => {
      RenderOftenProduct(body)
    })
  })
}

const RenderOftenProduct = async (product) => {
  const oftenList = document.getElementById('product-list-bought')
  const productBox = document.createElement('div')
  productBox.classList.add('rounded-2xl', 'p-2', 'text-textColor')
  productBox.setAttribute('id', product.id)

  const productContent = OftenWithCard(product)
  productBox.innerHTML = productContent
  oftenList.append(productBox)
}
const haveIt = []

function generateId (maxNr) {
  const random = Math.ceil(Math.random() * maxNr)
  if (!haveIt.includes(random)) {
    haveIt.push(random)
  } else {
    if (haveIt.length < maxNr) {
      return generateId(maxNr)
    } else {
      return false
    }
  }
}
