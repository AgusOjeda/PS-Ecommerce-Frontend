const urlBase = 'https://localhost:7044/api/Orden'
export const AddOrder = async (clientId, callback) => {
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  const url = urlBase + `/${clientId}`
  await fetch(url, {
    method: 'POST',
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
export const GetOrders = async (from, to, callback) => {
  let url = urlBase
  if (from && to) {
    url = `${urlBase}?From=${from}&To=${to}`
  } else if (from) {
    url = `${urlBase}?From=${from}`
  } else if (to) {
    url = `${urlBase}?To=${to}`
  }
  url = encodeURI(url)
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(url, {
    method: 'GET',
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
