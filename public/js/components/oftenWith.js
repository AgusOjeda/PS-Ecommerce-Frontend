export const OftenWithCard = (product) => `
    <div id="${product.id}" class="rounded-2xl p-2 text-textColor">
      <div class="ml-4 mt-3">
        <button
          class="absolute bg-green-500 rounded-2xl w-auto flex p-1"
        >
          <i
            class="bx bx-list-check text-2xl text-white cursor-pointer mr-1"
          ></i>
          <span
            class="text-white text-sm font-semibold self-center mr-1"
            >Agregar</span
          >
        </button>
      </div>
      <img
        src=${product.imagenUrl}
      />
      <h2 class="font-bold text-xl ml-2">$ ${product.precio}</h2>
      <h1 class="font-semibold text-lg ml-2">
        ${product.nombre}
      </h1>
      <div class="flex ml-2">
        <i
          class="bx bx-list-check text-2xl text-green-400 cursor-pointer mr-2"
        ></i>
        <span class="text-textColor text-sm font-semibold self-center"
          >En stock</span
        >
      </div>
    </div>
`
