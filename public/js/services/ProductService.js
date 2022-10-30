const urlBase = 'https://localhost:7044/api/productos'
export const getProducts = async (name, sort, callback) => {
  let url = urlBase
  if (name && sort) {
    url = `${urlBase}?name=${name}&sort=${sort}`
  } else if (name) {
    url = `${urlBase}?name=${name}`
  } else if (sort) {
    url = `${urlBase}?sort=${sort}`
  }
  url = encodeURI(url)
  await fetch(url)
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

export const ProductById = async (id, callback) => {
  const url = `${urlBase}/${id}`
  await fetch(url)
    .then(async (httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json()
      }
    })
    .then((body) => {
      callback(body)
      return body
    })
    .finally((body) => {
      return body
    })
}
