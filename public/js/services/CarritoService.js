const urlBase = 'https://localhost:7044/api/carrito'
export const AddProductToCart = async (ItemRequest, callback) => {
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(urlBase, {
    method: 'POST',
    headers: headersList,
    body: JSON.stringify(ItemRequest)
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
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(urlBase, {
    method: 'PUT',
    headers: headersList,
    body: JSON.stringify(ItemRequest)
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
export const DeleteProductInCart = async (ItemRequest, callback) => {
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(urlBase, {
    method: 'DELETE',
    headers: headersList,
    body: JSON.stringify(ItemRequest)
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
