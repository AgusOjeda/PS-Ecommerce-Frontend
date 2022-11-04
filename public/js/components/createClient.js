export const ModalCreateClient = () => `
<section
      id="modal-component-container"
      class="fixed inset-0 bg-gray-700 bg-opacity-75"
    >
      <section class="container flex w-screen h-screen">
        <section class="m-auto bg-white rounded-lg shadow-lg w-1/2 h-1/2">
          <section class="flex justify-between items-center p-4">
            <h2 class="text-2xl font-bold">
              Por favor cree una cuenta para continuar
            </h2>
            <i class="bx bx-x text-2xl cursor-pointer" id="close-cart"></i>
          </section>
          <section class="modal-body">
            <form class="w-full max-w-lg" id="form-create-client">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Nombre
                  </label>
                  <input
                    class="appearance border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="Nombre"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Apellido
                  </label>
                  <input
                    class="appearance border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="lastname"
                    type="text"
                    placeholder="Apellido"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    class="appearance border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Telefono
                  </label>
                  <input
                    class="appearance border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="phone"
                    type="text"
                    placeholder="Telefono"
                  />
                </div>
              </div>
              <button
                class="w-full h-9 mt-4 bg-green-500 text-white cursor-pointer rounded-lg border-2"
              >
                Crear
              </button>
            </form>
          </section>
        </section>
      </section>
    </section>
`
