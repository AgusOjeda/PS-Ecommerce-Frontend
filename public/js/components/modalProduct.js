export const ModalProduct = (product) => `
<section id="modal-component-container" class="container mt-3 mb-3">
<div class="bg-white shadow-lg p-6 rounded-2xl">
<button class="flex font-bold" id="close-modal">
  <i
    class="bx bx-arrow-back text-2xl"
  ></i>
  <span class="text-sm self-center ml-2"> Volver </span>
</button>
<div id="pictures" class="flex gap-1">
  <div class="grid place-content-center">
    <img
      class="w-9 h-9 border-2 border-gray-800 rounded-lg"
      src=${product.imagenUrl}
    />
  </div>
  <div id="picture">
    <img
      class="w-96 h-96 rounded-3xl"
      src=${product.imagenUrl}
    />
  </div>
  <div class="w-1/3 p-4">
    <h1 class="font-bold text-2xl mb-3 text-textColor">
      ${product.nombre}
    </h1>
    <p class="font-light text-sm mb-3 text-gray-600">${product.marca}</p>
    <p class="font-semibold text-base mb-3">Detalles</p>
    <p class="text-sm font-normal mb-3">${product.descripcion}</p>
  </div>
  <!-- Item Details -->
  <div class="w-1/3 grid grid-flow-row">
    <div class="border rounded-2xl shadow-lg h-52">
      <h1 class="font-extrabold text-2xl text-textColor p-4">
        $ ${product.precio}
      </h1>
      <p class="text-orange-500 font-semibold text-lg p-4">
        Envio Gratis
      </p>
      <div class="grid grid-cols-2 gap-2 mt-4 p-4">
        <div
          class="center text-center border-slate-200 border rounded-2xl select-none"
        >
          <span
            ><i
              id="quantity-decrement"
              class="bx bx-minus text-xl cursor-pointer text-green-500 mr-4"
            ></i
          ></span>
          <span
            id="quantity"
            class="bg-white rounded-2xl w-14 text-xl text-center focus:outline-none"
            >1</span
          >
          <span
            ><i
              id="quantity-increment"
              class="bx bx-plus text-xl cursor-pointer text-green-500 ml-4"
            ></i
          ></span>
        </div>
        <button
          class="border-slate-200 border rounded-2xl bg-green-500 text-white font-normal hover:ring-green-500 hover:outline-none hover:ring-2"
        >
          <i class="bx bxs-cart-add"></i>
          AGREGAR
        </button>
      </div>
      <div class="grid place-content-center mt-10">
        <div class="flex justify-center align-middle">
          <i
            class="bx bx-check-circle text-lg font-semibold text-blue-500 mr-1"
          ></i>
          <span
            class="text-[#343538] text-sm font-semibold self-center"
            >100% de satisfaccion garantizada</span
          >
        </div>
        <div
          id="favorites"
          class="grid grid-cols-2 gap-8 place-content-center mt-5"
        >
          <div class="flex justify-center align-middle">
            <i
              id="favorite"
              class="bx bx-heart text-2xl text-gray-400 hover:text-red-500 cursor-pointer mr-2"
            ></i>
            <span
              class="text-[#343538] text-sm font-semibold self-center"
              >Favorito</span
            >
          </div>
          <div class="flex justify-center align-middle">
            <i
              id="share"
              class="bx bx-share text-2xl text-gray-400 hover:text-blue-500 cursor-pointer mr-2"
            ></i>
            <span
              class="text-[#343538] text-sm font-semibold self-center"
              >Compartir</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<section id="Often-Bought-With" class="mt-6">
  <h1 class="font-extrabold text-2xl">
    Comprados juntos habitualmente
  </h1>
  <div id="product-list-bought" class="grid grid-cols-5 gap-1">
  </div>
</section>
</div>
    </section>
`
