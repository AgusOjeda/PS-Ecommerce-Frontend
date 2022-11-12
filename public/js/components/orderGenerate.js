export const OrderGenerate = (order) => `
<section id="order-display" class="container mt-8">
<h1 class="text-green-400 font-semibold text-4xl text-center">
  Orden generada con exito!
</h1>
<h2 class="text-2xl text-center mt-2">
  Tu orden ha sido generada, en breve nos pondremos en contacto vía
  mail.
</h2>
<div id="order-details" class="grid place-content-center mt-8">
  <div class="border p-6 w-fit rounded-3xl">
    <h2 class="text-2xl font-semibold text-gray-700">
      Detalles de la orden
    </h2>
    <p class="text-gray-700 mt-2">
      ID de la orden: ${order.ordenId}
    </p>
    <p class="text-gray-700">Total: $ ${order.total}</p>
  </div>
</div>
</section>
`
