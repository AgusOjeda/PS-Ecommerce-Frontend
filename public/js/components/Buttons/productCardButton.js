export const ProductCardButton = (productId, productAmount, amountId) => {
  // Create a new button
  const newButton = document.createElement('div')
  newButton.classList.add('rounded-b-3xl', 'rounded-t-lg', 'bg-green-500', 'border-2', 'shadow-inner', 'text-center')
  // Create a new amount Decrease
  const amountDecrease = document.createElement('span')
  amountDecrease.classList.add('amount-Decrease')
  const amountDecreaseIcon = document.createElement('i')
  amountDecreaseIcon.classList.add('bx', 'bx-minus', 'text-xl', 'cursor-pointer', 'bg-green-500', 'text-white', 'mr-4')
  amountDecrease.append(amountDecreaseIcon)
  // Create a new amount Increase
  const amountIncrease = document.createElement('span')
  amountIncrease.classList.add('amount-Increase')
  const amountIncreaseIcon = document.createElement('i')
  amountIncreaseIcon.classList.add('bx', 'bx-plus', 'text-xl', 'cursor-pointer', 'bg-green-500', 'text-white', 'ml-4')
  amountIncrease.append(amountIncreaseIcon)
  // Create a new amount text
  const amount = document.createElement('span')
  amount.classList.add('rounded-r-sm', 'rounded-l-sm', 'px-5', 'bg-white', 'text-xl', 'text-center', 'focus:outline-none')
  amount.textContent = productAmount
  amount.setAttribute('id', amountId)
  // Append all elements to the new button
  newButton.append(amountDecrease, amount, amountIncrease)
  return newButton
}
