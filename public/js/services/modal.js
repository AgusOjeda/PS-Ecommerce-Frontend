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
        const modal = ModalProduct(body)
        const modalContainer = document.createElement('div')
        modalContainer.setAttribute('id', 'modal-container')
        modalContainer.innerHTML = modal
        document.body.append(modalContainer)
        deleteModal()
    })
}
const deleteModal = () => {
    const closeButton = document.getElementById('close-modal')
    const modal = document.getElementById('modal-container')
    console.log('--------DELETE MODAL-----------')
    console.log(closeButton)
    console.log(modal)
    closeButton.onclick = () => {
        document.body.removeChild(modal)
    }
}
