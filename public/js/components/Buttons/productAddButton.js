export const ProductAddButton = () => {
  const button = document.createElement('button')
  button.classList.add('w-full', 'h-9', 'bottom-0', 'left-0', 'bg-green-500', 'text-white', 'cursor-pointer', 'rounded-b-3xl', 'rounded-t-lg', 'border-2', 'add-cart')
  button.innerHTML = `<i class="bx bxs-cart-add" />
  </i>AGREGAR`
  return button
}
