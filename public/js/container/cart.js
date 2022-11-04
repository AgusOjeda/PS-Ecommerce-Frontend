import { EmptyCart } from '../components/emptyCart.js'
import { getCartOnLocalStorage } from '../services/CartOnLocalStorage.js'
import { ProductById } from '../services/ProductService.js'
let _root

export const CartRender = async () => {
  _root = document.getElementById('root')
  _root.classList.add('container')
  _root.innerHTML = FrameSecondOption()
  const table = document.getElementById('cart-content')
  const cart = getCartOnLocalStorage()
  console.log(cart)
  if (cart !== null) {
    await cart.forEach((item) => {
      ProductById(item.productId, (product) => {
        console.log(product)
        const productBox = document.createElement('div')
        productBox.classList.add('border-b', 'border-dashed', 'border-gray-500', 'grid', 'grid-cols-4', 'mt-2', 'mb-1', 'justify-items-center')
        productBox.setAttribute('id', product.id)
        productBox.innerHTML = ProductInCart(product.id, product.nombre, product.marca, product.precio, product.descripcion, product.imagenUrl, item.amount)
        table.append(productBox)
      })
    })
  } else {
    _root.innerHTML = ''
    const emptyCart = document.createElement('div')
    emptyCart.classList.add('flex', 'justify-center', 'items-center', 'h-full')
    emptyCart.innerHTML = EmptyCart
    _root.appendChild(emptyCart)
  }
}
const FrameSecondOption = () => {
  const frame = /* html */`
  <h1 class="text-left  justify-items-center text-3xl text-sky-600 mt-2 mr-8 ">Mi Carrito</h1>
            <div id="wrapper-content-cart" class="grid grid-cols-3 gap-2 justify-items-center">
                <section id="cart-content" class="w-full mt-10 col-span-2">
                    <!-- Cart Content with product, precio, cantidad , subtotal -->
                    <div id="cart-products-header" class="border-b divide-solid border-gray-500 grid grid-cols-4 justify-items-center">
                        <span class="w-2/5 text-gray-500 font-semibold text-base">Producto</span>
                        <span class="w-1/5 text-gray-500 font-semibold text-base">Cantidad</span>
                        <span class="w-1/5 text-gray-500 font-semibold text-base">Precio</span>
                        <span class="w-1/5 text-gray-500 font-semibold text-base">Subtotal</span>
                    </div>
                    
                </section>
                <section id="cart-resume" class="w-3/4 bg-gray-200 rounded-lg ml-4 mr-4">
                    <h2 class="text-center place-items-center font-bold text-xl">Resumen</h2>
                    <div class="gird grid-rows-4 text-center">
                        <div class="grid grid-cols-2 mt-4">
                            <span class="text-gray-700 font-bold text-base">Subtotal</span>
                            <span class="text-gray-700 font-semibold text-base">$ 1580</span>
                        </div>
                        <div class="grid grid-cols-2 mt-4">
                            <span class="text-gray-700 font-bold text-base">Envío</span>
                            <span class="text-gray-700 font-semibold text-base">$ 0</span>
                        </div>
                        <div class="grid grid-cols-2 mt-4">
                            <span class="text-gray-700 font-bold text-base">Total</span>
                            <span class="text-gray-700 font-semibold text-base">$ 1580</span>
                        </div>
                        <div class="mt-4 w-full">
                            <button id="btn-checkout" class="bg-green-400 text-white text-sm font-bold rounded-lg px-4 py-2 mt-6 w-2/4 mb-2 shadow-md shadow-slate-500">Finalizar compra</button>
                        </div>
                    </div>
                </section>
            </div>
  `
  return frame
}
const ProductInCart = (id, nombre, marca, precio, descripcion, imagenUrl, amount) => {
  const productInCart = /* html */`
    <div id="product-${id}" class="grid grid-cols-2">
      <img class="w-24 h-24" src=${imagenUrl} alt="${descripcion}"/>
      <div>
        <h3 class="text-sm font-bold">${nombre}</h3>
        <p class="text-xs text-gray-500 font-extralight">${marca}</p>
      </div>
    </div>
    <div class="center text-center border-slate-200 border rounded-2xl select-none mt-7 h-8 w-28">
      <span><i id="quantity-decrement" class="bx bx-minus text-xl cursor-pointer text-green-500 mr-4"></i></span>
      <span id="product-${id}-quantity"
        class="bg-white rounded-2xl w-14 text-xl text-center focus:outline-none">${amount}</span>
      <span><i id="quantity-increment" class="bx bx-plus text-xl cursor-pointer text-green-500 ml-4"></i></span>
    </div>
    <div id="product-${id}-precio" class="text-center text-xl text-gray-500 mt-7">
      <span>$ ${precio}</span>
    </div>
    <div id="product-${id}-subtotal" class="text-center text-xl text-gray-500 mt-7">
      <span>$ ${amount * precio}</span>
    </div>
`
  return productInCart
}
