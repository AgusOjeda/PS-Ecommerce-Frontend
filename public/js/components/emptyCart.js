export const EmptyCartComponent = () => {
  const content = document.createElement('div')
  content.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'mt-14')
  const img = document.createElement('img')
  img.setAttribute('src', '../../images/svg/empty_cart.svg')
  img.setAttribute('alt', 'empty-cart')
  img.classList.add('w-1/2', 'p-2')
  const title = document.createElement('p')
  title.classList.add('text-2xl', 'font-bold', 'text-gray-700', 'p-1')
  title.textContent = 'Tu carrito se encuentra vacío'
  const description = document.createElement('p')
  description.classList.add('text-gray-500', 'p-2')
  description.textContent = 'Parece que todavia no agregaste ningun artículo'
  const button = document.createElement('button')
  button.setAttribute('id', 'btn-continue-shopping')
  button.classList.add('border', 'border-sky-600', 'text-gray-600', 'font-bold', 'py-2', 'px-4', 'rounded-xl', 'mt-2', 'p-2')
  button.textContent = 'Seguir comprando'
  content.append(img, title, description, button)
  return { content }
}
