import { EmptyCartComponent } from '../components/emptyCart.js'
import { getCartOnLocalStorage } from '../services/CartOnLocalStorage.js'
import { ProductById } from '../services/ProductService.js'
import { FrameCart } from '../components/Cart/cart.js'
import { ProductInCart } from '../components/Cart/ProductInCardComponent.js'
import { IncreaseProductEvent, DecreaseProductEvent, DeleteProduct, BuySubtotal } from '../services/CarritoService.js'
let _root

export const CartRender = async () => {
  _root = document.getElementById('root')
  _root.classList.add('container')
  _root.innerHTML = FrameCart()
  const table = document.getElementById('cart-content')
  const cart = getCartOnLocalStorage()
  if (cart !== null) {
    await cart.forEach(async (item) => {
      ProductById(item.productId, (product) => {
        const productBox = document.createElement('div')
        productBox.classList.add('border-b', 'border-dashed', 'border-gray-500', 'grid', 'grid-cols-4', 'mt-2', 'mb-1', 'justify-items-center')
        productBox.setAttribute('id', product.id)
        productBox.innerHTML = ProductInCart(product.id, product.nombre, product.marca, product.precio, product.descripcion, product.imagenUrl, item.amount)
        table.append(productBox)
        IncreaseProductEvent(true)
        DecreaseProductEvent(true)
        RenderSubTotal()
      })
    })
  } else {
    _root.innerHTML = ''
    const { content } = EmptyCartComponent()
    _root.append(content)
  }
}

const RenderSubTotal = () => {
  const resumeSubtotal = document.getElementById('subtotal')
  const resumeTotal = document.getElementById('total')
  resumeSubtotal.innerText = '$ ' + BuySubtotal()
  resumeTotal.innerText = resumeSubtotal.innerText
}
