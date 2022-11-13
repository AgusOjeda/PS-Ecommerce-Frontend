export const OrderRow = (order) => `
<tr class="border-b border-[#D1D5DB]">
    <td class="px-4 py-4">${order.ordenId}</td>
    <td class="px-4 py-4">${order.clientName}</td>
    <td class="px-4 py-4">${order.clientDNI}</td>
    <td class="px-4 py-4">${order.date}</td>
    <td class="px-4 py-4">$ ${order.total}</td>
    <td class="px-4 py-4">
        <a class="hover:text-blue-500 flex" href="#">
        <i class='bx bx-detail mt-[3px] mr-3'></i>
        <span class="">Detalle</span>
        </a>
    </td>
</tr>
`
