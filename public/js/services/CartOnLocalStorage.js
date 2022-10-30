export const saveCartOnLocalStorage = (cart) => {
  const cartList = JSON.parse(window.localStorage.getItem('cart'))
  if (cartList) {
    if (cartList.some((item) => item.productId === cart.productId)) {
      cartList.forEach((item) => {
        if (item.productId === cart.productId) {
          item.amount += cart.amount
        }
      })
    } else {
      cartList.push(cart)
    }
    window.localStorage.setItem('cart', JSON.stringify(cartList))
  } else {
    console.log('else')
    window.localStorage.setItem('cart', JSON.stringify([cart]))
  }
}
export const getCartOnLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('cart'))
}
