import { ProductById } from './ProductService.js'
import { ModalProduct } from '../components/modalProduct.js'
import { OftenWithCard } from '../components/oftenWith.js'

export const modal = () => {
  const products = document.getElementsByClassName('modal-open')
  for (let i = 0; i < products.length; i++) {
    const productModal = products[i]
    productModal.addEventListener('click', showModalClicked)
  }
}

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
  modalContainer.setAttribute('id', 'modal-container')
  modalContainer.classList.add('fixed', 'inset-0', 'bg-gray-700', 'bg-opacity-75', 'font-GilroyRegular')
  modalContainer.innerHTML = modal
  document.body.append(modalContainer)
  const plus = document.querySelector('#quantity-increment')
  const minus = document.querySelector('#quantity-decrement')
  const num = document.querySelector('#quantity')
  let count = 1
  plus.addEventListener('click', () => {
    count++
    num.innerHTML = count
  })
  minus.addEventListener('click', () => {
    if (count > 1) {
      count--
      num.innerHTML = count
    }
  })
  load()
}

const deleteModal = () => {
  const closeButton = document.getElementById('close-modal')
  const modal = document.getElementById('modal-container')
  closeButton.onclick = () => {
    document.body.removeChild(modal)
  }
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
