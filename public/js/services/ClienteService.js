const urlBase = 'https://localhost:7044/api/clientes'
export const CreateClient = async (client, callback) => {
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  await fetch(urlBase, {
    method: 'POST',
    headers: headersList,
    body: JSON.stringify(client)
  }).then(async (httpResponse) => {
    return httpResponse.json()
  })
    .then((body) => {
      callback(body)
    })
    .finally((body) => {
      return body
    })
}

export const CreateClient2 = async (client) => {
  const headersList = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
  const response = await fetch(urlBase, {
    method: 'POST',
    headers: headersList,
    body: JSON.stringify(client)
  })
  const body = await response.json()
  return body
}
