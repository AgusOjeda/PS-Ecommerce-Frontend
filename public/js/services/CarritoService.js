import { getProductOnLocalCartById, saveCartOnLocalStorage, deleteOnLocalCartById } from '../services/CartOnLocalStorage.js'
import { UpdateProductInCart, DeleteProductInCart } from '../services/CarritoApi.js'

export const IncreaseProductEvent = (onCart) => {
  const inc = document.getElementsByClassName('amount-Increase')
  for (let i = 0; i < inc.length; i++) {
    const button = inc[i]
    button.addEventListener('click', onCart ? IncreaseProductOnCart : IncreaseProduct)
  }
}
export const DecreaseProductEvent = (onCart) => {
  const dec = document.getElementsByClassName('amount-Decrease')
  for (let i = 0; i < dec.length; i++) {
    const button = dec[i]
    button.addEventListener('click', onCart ? DecreaseProductOnCart : DecreaseProduct)
  }
}
const IncreaseProduct = (e) => {
  const id = e.target.parentElement.parentElement.parentElement.id
  let oldAmount = getProductOnLocalCartById(id)
  const quantity = document.getElementById('quantity-' + id)
  oldAmount++
  const data = {
    productId: parseInt(id),
    amount: oldAmount
  }
  quantity.textContent = oldAmount
  saveCartOnLocalStorage(data)
  data.amount = 1
  UpdateProductInCart(data, () => { })
}
const DecreaseProduct = (e) => {
  const id = e.target.parentElement.parentElement.parentElement.id
  let oldAmount = getProductOnLocalCartById(id)
  if (oldAmount === 1) {
    // Implementar la funcion de eliminar producto
  }
  const quantity = document.getElementById('quantity-' + id)
  oldAmount--
  const data = {
    productId: parseInt(id),
    amount: oldAmount
  }
  quantity.textContent = oldAmount
  saveCartOnLocalStorage(data)
  data.amount = -1
  UpdateProductInCart(data, () => {})
}

export const DeleteProduct = (e) => {
  let id = e.target.parentElement.parentElement.id
  id = parseInt(id)
  DeleteProductInCart(id, () => { })
  deleteOnLocalCartById(id)
  e.target.parentElement.classList.add('hidden')
}

const IncreaseProductOnCart = (e) => {
  const id = e.target.parentElement.parentElement.parentElement.id
  let oldAmount = getProductOnLocalCartById(id)
  oldAmount++
  const quantity = document.getElementById('quantity-' + id)
  const price = document.getElementById('product-' + id + '-price')
  const subTotal = document.getElementById('product-' + id + '-subtotal')
  const result = parseInt(oldAmount) * parseFloat(price.innerText.split('$ ')[1])
  const resumeSubtotal = document.getElementById('subtotal')
  const resumeTotal = document.getElementById('total')
  const normalizedResult = Math.round(result * 100) / 100
  subTotal.textContent = '$ ' + normalizedResult
  const data = {
    productId: parseInt(id),
    amount: oldAmount
  }
  quantity.textContent = oldAmount
  saveCartOnLocalStorage(data)
  data.amount = 1
  UpdateProductInCart(data, () => { })
  resumeSubtotal.innerText = '$ ' + BuySubtotal()
  resumeTotal.innerText = resumeSubtotal.innerText
}
const DecreaseProductOnCart = (e) => {
  const id = e.target.parentElement.parentElement.parentElement.id
  let oldAmount = getProductOnLocalCartById(id)
  oldAmount--
  const quantity = document.getElementById('quantity-' + id)
  const price = document.getElementById('product-' + id + '-price')
  const subTotal = document.getElementById('product-' + id + '-subtotal')
  const result = parseInt(oldAmount) * parseFloat(price.innerText.split('$ ')[1])
  const resumeSubtotal = document.getElementById('subtotal')
  const resumeTotal = document.getElementById('total')
  const normalizedResult = Math.round(result * 100) / 100
  subTotal.textContent = '$ ' + normalizedResult
  const data = {
    productId: parseInt(id),
    amount: oldAmount
  }
  quantity.textContent = oldAmount
  saveCartOnLocalStorage(data)
  data.amount = -1
  UpdateProductInCart(data, () => { })
  resumeSubtotal.innerText = '$ ' + BuySubtotal()
  resumeTotal.innerText = resumeSubtotal.innerText
}

export const BuySubtotal = () => {
  const subtotal = document.getElementsByClassName('cart-subtotal')
  let result = 0
  for (let i = 0; i < subtotal.length; i++) {
    result += parseFloat(subtotal[i].innerText.split('$ ')[1])
  }
  result = Math.round(result * 100) / 100
  return result
}
