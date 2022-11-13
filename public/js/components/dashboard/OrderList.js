export const OrderList = () => `
<section class="order-list mt-8">
  <h1 class="text-3xl font-bold"> Ordenes de Venta </h1>
  <div class="flex items-center gap-2 mt-4">
    <label for="from">Desde:</label>
    <input type="date" id="from" name="from" class="rounded-lg">
    <label for="to">Hasta:</label>
    <input type="date" id="to" name="to" class="rounded-lg">
  </div>
  <div class="w-full bg-white rounded-2xl shadow-lg">
    <table class="table-auto w-full mt-4">
      <thead class="bg-[#F3F4F6] text-xs">
        <th class="px-4 py-2 font-semibold text-start text-textColor">ORDEN ID</th>
        <th class="px-4 py-2 font-semibold text-start text-textColor">NOMBRE</th>
        <th class="px-4 py-2 font-semibold text-start text-textColor">DNI</th>
        <th class="px-4 py-2 font-semibold text-start text-textColor">FECHA</th>
        <th class="px-4 py-2 font-semibold text-start text-textColor">TOTAL</th>
        <th class="px-4 py-2 font-semibold text-start text-textColor">ACCIONES</th>
      </thead>
      <tbody id="order-body" class="bg-white">
      </tbody>
    </table>
  </div>
</section>
`
