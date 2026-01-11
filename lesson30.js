//Моё решение
const normalizeUrl = (url) => {
  let adressUrl
  if (url.startsWith('https://')) {
    adressUrl = url
  }
  else {
    adressUrl = `https://${url}`
  }
  return adressUrl
}

console.log(normalizeUrl('google.com'))
console.log(normalizeUrl('https://ai.fi'))

//Решение учителя
const normalizeUrl = (site) => {
  let normalizedUrl

  if (site.startsWith('https://')) {
    normalizedUrl = site
  }
  else {
    normalizedUrl = `https://${site}`
  }

  return normalizedUrl
}
