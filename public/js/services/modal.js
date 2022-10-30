import { ProductById } from './ProductService.js'
import { ModalProduct } from '../components/modalProduct.js'

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
}

const deleteModal = () => {
  const closeButton = document.getElementById('close-modal')
  const modal = document.getElementById('modal-container')
  closeButton.onclick = () => {
    document.body.removeChild(modal)
  }
}
