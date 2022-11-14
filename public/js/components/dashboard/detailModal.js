export const DetailModal = (data) => {
  const modal =
    `
    <section id="modal-component-container" class="container mt-3 mb-3 inset-0">
            <div class="bg-white shadow-lg p-2 rounded-2xl">
                <div class="flex font-bold border-b w-full" >
                    <div class="flex p-2 cursor-pointer close-modal">
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
                        <tbody id="order-body" class="bg-white">
                            <tr class="border-b border-[#D1D5DB]">
                                <td class="px-4 py-4"><img src="https://res.cloudinary.com/dywphbg73/image/upload/v1663098494/PS-2022-ProductImages/At-n-En-Aceite-La-Campagnola-120-Gr-1-3616_h50msj.webp" height="45px" width="45px"/></td>
                                <td class="px-4 py-4">11640503002</td>
                                <td class="px-4 py-4">Atún En Aceite La Campagnola 120 Gr</td>
                                <td class="px-4 py-4">La Campagnola</td>
                                <td class="px-4 py-4">$407</td>
                                <td class="px-4 py-4">1</td>
                                <td class="px-4 py-4">$407</td>
                            </tr>
                            <tr class="border-b border-[#D1D5DB]">
                                <td class="px-4 py-4"><img src="https://res.cloudinary.com/dywphbg73/image/upload/v1663098494/PS-2022-ProductImages/Shampoo-Dream-Long-Liss-Elvive-L-oreal-Paris-400-Ml-1-844667_ghkyas.webp" height="45px" width="45px"/></td>
                                <td class="px-4 py-4">13710203002</td>
                                <td class="px-4 py-4">Shampoo Elvive Dream Long Liss 400ml</td>
                                <td class="px-4 py-4">Elvive</td>
                                <td class="px-4 py-4">$790</td>
                                <td class="px-4 py-4">3</td>
                                <td class="px-4 py-4">$2370</td>
                            </tr>
                        </tbody>
                        <tfoot class="bg-white">
                            <tr class="border-b border-[#D1D5DB]">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="px-4 py-2">Total</td>
                                <td class="px-4 py-2 font-semibold text-textColor">$3160</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
            </div>
        </section>
    `
  return modal
}
