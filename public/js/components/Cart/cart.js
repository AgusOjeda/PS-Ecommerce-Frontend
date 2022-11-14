export const FrameCart = () => {
  const frame = `
    <h1 class="text-left font-bold justify-items-center text-3xl text-sky-600 mt-8 mr-8">Mi Carrito</h1>
              <div id="wrapper-content-cart" class="grid grid-cols-3 gap-2 justify-items-center mt-8">
                  <section id="cart-content" class="w-full col-span-2 bg-white rounded-2xl shadow-lg p2">
                      <!-- Cart Content with product, precio, cantidad , subtotal -->
                      <div id="cart-products-header" class="border-b divide-solid border-gray-500 grid grid-cols-4 justify-items-center">
                          <span class="w-2/5 text-gray-500 font-semibold text-base">Producto</span>
                          <span class="w-1/5 text-gray-500 font-semibold text-base">Cantidad</span>
                          <span class="w-1/5 text-gray-500 font-semibold text-base">Precio</span>
                          <span class="w-1/5 text-gray-500 font-semibold text-base">Subtotal</span>
                      </div>
                  </section>
                  <section id="cart-resume" class="bg-white rounded-lg ml-4 mr-4 h-fit fixed right-64 p-4 shadow-lg">
                      <h2 class="text-center place-items-center font-bold text-xl">Resumen</h2>
                      <div class="gird grid-rows-4 text-center">
                          <div class="grid grid-cols-2 mt-4">
                              <span class="text-gray-700 font-bold text-base">Subtotal</span>
                              <span id="subtotal" class="text-gray-700 font-semibold text-base">$ 1580</span>
                          </div>
                          <div class="grid grid-cols-2 mt-4">
                              <span class="text-gray-700 font-bold text-base">Envío</span>
                              <span class="text-gray-700 font-semibold text-base">$ 0</span>
                          </div>
                          <div class="grid grid-cols-2 mt-4">
                              <span class="text-gray-700 font-bold text-base">Total</span>
                              <span id="total" class="text-gray-700 font-semibold text-base">$ 1580</span>
                          </div>
                          <div class="mt-4 w-full">
                              <button id="btn-checkout" class="bg-green-500 text-white text-sm font-bold rounded-lg px-4 py-2 mt-6 w-2/4 mb-2 shadow-md shadow-slate-500">Finalizar compra</button>
                              <button id="btn-continue-shopping" class="bg-blue-400 text-white text-sm font-bold rounded-lg px-2 py-2 mt-6 w-2/4 mb-2 shadow-md shadow-slate-500">Continuar comprando</button>
                          </div>
                      </div>
                  </section>
              </div>
    `
  return frame
}
