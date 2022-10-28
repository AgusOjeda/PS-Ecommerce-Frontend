export const saveCartOnLocalStorage = (cart) => {
  const cartList = JSON.parse(window.localStorage.getItem('cart'))
  if (cartList) {
    cartList.push(cart)
    window.localStorage.setItem('cart', JSON.stringify(cartList))
  } else {
    window.localStorage.setItem('cart', JSON.stringify([cart]))
  }
}
