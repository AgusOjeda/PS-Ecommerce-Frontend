export const OrderRow = (order) => {
  const row = `
    <tr class="border-b border-[#D1D5DB]">
        <td class="px-4 py-4">${order.ordenId.toUpperCase()}</td>
        <td class="px-4 py-4">${order.clientName}</td>
        <td class="px-4 py-4">${order.clientDNI}</td>
        <td class="px-4 py-4">${order.date.split('T')[0]}</td>
        <td class="px-4 py-4">$ ${order.total}</td>
        <td class="px-4 py-4">
            <a class="hover:text-blue-500 flex detail-buton" href="#">
            <i class='bx bx-detail mt-[3px] mr-3'></i>
            <span class="">Detalle</span>
            </a>
        </td>
    </tr>
    `
  const modal =
    `
    <section id="modal-${order.ordenId.toUpperCase()}" class="container mt-4 mb-4 hidden overflow-y-auto max-h-full p-2">
            <div class="bg-white shadow-lg p-2 rounded-2xl">
                <div class="flex font-bold border-b w-full" >
                    <div class="flex p-2 cursor-pointer close-modal"">
                        <i
                        class="bx bx-arrow-back text-2xl"
                        ></i>
                        <span class="text-sm self-center ml-2"> Volver </span>
                    </div>
                </div>
                <section class="order-list mt-8">
                    <h1 class="text-3xl font-bold"> DETALLE </h1>
                    <div class="w-full bg-white rounded-2xl shadow-lg">
                        <table class="table-auto w-full mt-4">
                        <thead class="bg-[#F3F4F6] text-xs">
                            <th class="px-4 py-2 font-semibold text-start text-textColor"></th>
                            <th class="px-4 py-2 font-semibold text-start text-textColor">CODIGO</th>
                            <th class="px-4 py-2 font-semibold text-start text-textColor">NOMBRE</th>
                            <th class="px-4 py-2 font-semibold text-start text-textColor">MARCA</th>
                            <th class="px-4 py-2 font-semibold text-start text-textColor">PRECIO</th>
                            <th class="px-4 py-2 font-semibold text-start text-textColor">CANTIDAD</th>
                            <th class="px-4 py-2 font-semibold text-start text-textColor">SUBTOTAL</th>
                        </thead>
                        <tbody id="order-detail-${order.ordenId.toUpperCase()}" class="bg-white">
                        </tbody>
                        <tfoot id="order-detail-footer" class="bg-white">
                        <tr class="border-b border-[#D1D5DB]">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="px-4 py-2">Total</td>
                            <td class="px-4 py-2 font-semibold text-textColor">$${order.total}</td>
                        </tr>
                        </tfoot>
                        </table>
                    </div>
                </section>
            </div>
        </section>
    `
  // console.table(order.cart.products)
  const modalRows = order.cart.products.map((product) =>
    `
        <tr class="border-b border-[#D1D5DB]">
        <td class="px-4 py-4"><img src=${product.imagenUrl} height="45px" width="45px"/></td>
        <td class="px-4 py-4">${product.codigo}</td>
        <td class="px-4 py-4">${product.nombre}</td>
        <td class="px-4 py-4">${product.marca}</td>
        <td class="px-4 py-4">$${product.precio}</td>
        <td class="px-4 py-4">${product.cantidad}</td>
        <td class="px-4 py-4">$${product.precio * product.cantidad}</td>
        </tr>
        `
    // document.getElementById('order-detail-body').insertAdjacentHTML('beforeend', productRow)
  )
  return { row, modal, modalRows }
}
/*
const modal = `
<section id="detail-${order.ordenId.toUpperCase()}" class="container mt-3 mb-3 hidden">
<div class="bg-white shadow-lg p-2 rounded-2xl w-full">
            <h1>Detalle de la orden</h1>
            <table class="table-auto
            w-full
            text-left
            text-sm
            text-gray-700
            bg-white
            border-collapse
            border border-gray-200
            divide-y divide-gray-200
            ">
                <thead class="bg-gray-50">

                    <tr>
                        <th class="px-4 py-4">Producto</th>
                        <th class="px-4 py-4">Cantidad</th>
                        <th class="px-4 py-4">Precio</th>
                        <th class="px-4 py-4">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${order.cart.products.map((product) => {
                        return `
                            <tr>
                                <td class="px-4 py-4">${product.nombre}</td>
                                <td class="px-4 py-4">${product.cantidad}</td>
                                <td class="px-4 py-4">$ ${product.precio}</td>
                                <td class="px-4 py-4">$ ${product.precio * product.cantidad}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
            </table>
        </div>
    </section>
    `
  return { row, modal }
}
*/
