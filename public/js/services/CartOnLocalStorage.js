export const saveCartOnLocalStorage = (cart) => {
  const cartList = JSON.parse(window.localStorage.getItem('cart'))
  if (cartList) {
    if (cartList.some((item) => item.productId === cart.productId)) {
      cartList.forEach((item) => {
        if (item.productId === cart.productId) {
          item.amount = cart.amount
        }
      })
    } else {
      cartList.push(cart)
    }
    window.localStorage.setItem('cart', JSON.stringify(cartList))
  } else {
    window.localStorage.setItem('cart', JSON.stringify([cart]))
  }
}
export const getCartOnLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem('cart'))
}
export const getProductOnLocalCartById = (id) => {
  const cart = getCartOnLocalStorage()
  if (cart === null) {
    return 0
  } else {
    const product = cart.find((item) => item.productId === id)
    return product ? product.amount : 0
  }
}
export const deleteCartOnLocalStorage = () => {
  window.localStorage.removeItem('cart')
}
