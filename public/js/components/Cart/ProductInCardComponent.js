export const ProductInCart = (id, nombre, marca, precio, descripcion, imagenUrl, amount) => {
  const productInCart = /* html */`
      <div id="product-${id}" class="grid grid-cols-2">
        <img class="w-24 h-24" src=${imagenUrl} alt="${descripcion}"/>
        <div>
          <h3 class="text-sm font-bold">${nombre}</h3>
          <p class="text-xs text-gray-500 font-extralight">${marca}</p>
        </div>
      </div>
      <div class="center text-center border-slate-200 border rounded-2xl select-none mt-7 h-8 w-28">
        <span><i class="bx bx-minus text-xl cursor-pointer text-green-500 mr-4 amount-Decrease"></i></span>
        <span id="quantity-${id}"
          class="bg-white rounded-2xl w-14 text-xl text-center focus:outline-none">${amount}</span>
        <span><i class="bx bx-plus text-xl cursor-pointer text-green-500 ml-4 amount-Increase"></i></span>
      </div>
      <div id="product-${id}-price" class="text-center text-xl text-gray-500 mt-7">
        <span>$ ${precio}</span>
      </div>
      <div id="product-${id}-subtotal" class="text-center text-xl text-gray-500 mt-7 cart-subtotal">
        <span>$ ${amount * precio}</span>
      </div>
  `
  return productInCart
}
