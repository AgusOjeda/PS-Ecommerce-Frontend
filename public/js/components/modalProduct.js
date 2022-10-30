export const ModalProduct = (product) => `
<section id="modal-component-container" class="fixed inset-0">
        <section class="bg-gray-700 bg-opacity-75 flex w-screen h-screen">
            <div
                class="overflow-hidden w-11/12 bg-white m-auto max-w-xl max-h-[90%] rounded ring-2 transform transition-all">
                <!-- Close Cart Icon -->
                <div class="flex justify-end">
                    <i id="close-modal" class="bx bx-x text-2xl" id="close-cart"></i>
                </div>
                <!-- ProductInfoDisplay -->
                <section class="grid grid-cols-2 gap-4">
                    <!-- ProductImg -->
                    <div class="pl-4">
                        <img src=${product.imagenUrl}
                            alt="${product.descripcion}" title="${product.descripcion}"/>
                    </div>
                    <!-- ProductInfo -->
                    <div class="pr-4 justify-items-center center">
                        <h3 class="text-2xl font-semibold mb-2 top-0 text-center">${product.nombre}</h3>
                        <span class="flex text-xs justify-end">Codigo: ${product.codigo}</span>
                        <p class="text-xs pt-2">${product.descripcion}</p>
                        <p class="text-3xl font-bold text-green-500 text-center mt-10">$ ${product.precio}</p>
                        <div class="grid grid-cols-2 gap-2 mt-4">
                            <div class="center text-center border-slate-200 border rounded-2xl select-none">
                                <span><i id="quantity-decrement" class="bx bx-minus text-xl cursor-pointer text-green-500 mr-4"></i></span>
                                <span id="quantity"
                                    class="bg-white rounded-2xl w-14 text-xl text-center focus:outline-none">1</span>
                                <span><i id="quantity-increment" class="bx bx-plus text-xl cursor-pointer text-green-500 ml-4"></i></span>
                            </div>
                            <button
                                class="border-slate-200 border rounded-2xl bg-green-500 text-white font-normal hover:ring-green-500 hover:outline-none hover:ring-2"><i
                                    class="bx bxs-cart-add" </i></i>AGREGAR</button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </section>
`
