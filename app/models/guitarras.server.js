export async function getGuitarras() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  )
  const result = await response.json()

  return result
}

export async function getGuitarraByUrl(url) {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  )
  const result = await response.json()

  return result
}
