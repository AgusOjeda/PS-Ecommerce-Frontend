export const ProductCard = (id, nombre, marca, precio, descripcion, imagenUrl) => `
        <img
          src=${imagenUrl} 
          alt=${descripcion} class="w-full rounded-t-3xl border-b-2 border-black/[.25] mb-2" />
        <h3 class="text-base font-semibold mb-2"> ${nombre} </h3>
        <h4 class="text-xs font-extralight mb-2"> ${marca} </h4>
        <span class="text-xl font-bold text-green-500">$ ${precio}  </span>
        <button
          class=" w-full h-9 bottom-0 left-0 bg-green-500 text-white cursor-pointer rounded-b-3xl rounded-t-lg border-2"
          value="AGREGAR"><i class="bx bxs-cart-add" </i></i>AGREGAR</button>
`
