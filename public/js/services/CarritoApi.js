const urlBase = 'https://localhost:7044/api/carrito'
const client = 1
export const AddProductToCart = async (ItemRequest, callback) => {
  const AddProduct = {
    clientId: client,
    productId: ItemRequest.productId,
    amount: ItemRequest.amount
  }
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(urlBase, {
    method: 'POST',
    headers: headersList,
    body: JSON.stringify(AddProduct)
  })
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json()
      }
    })
    .then((body) => {
      callback(body)
    })
    .finally((body) => {
      return body
    })
}
export const UpdateProductInCart = async (ItemRequest, callback) => {
  const UpdateProduct = {
    clientId: client,
    productId: ItemRequest.productId,
    amount: ItemRequest.amount
  }
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(urlBase, {
    method: 'PUT',
    headers: headersList,
    body: JSON.stringify(UpdateProduct)
  })
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json()
      }
    })
    .then((body) => {
      callback(body)
    })
    .finally((body) => {
      return body
    })
}
export const DeleteProductInCart = async (productId, callback) => {
  let url = urlBase
  url = `${urlBase}/${client}/${productId}`
  url = encodeURI(url)
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(url, {
    method: 'DELETE',
    headers: headersList
  })
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json()
      }
    })
    .then((body) => {
      callback(body)
    })
    .finally((body) => {
      return body
    })
}
