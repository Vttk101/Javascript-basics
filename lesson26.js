// мое решение
const capitalize = (name) => {
  let obrez = name.slice(0, 1).toUpperCase()
  let obrez2 = name.slice(1, name.length)
  return `${obrez}${obrez2}`
}
console.log(capitalize('halapuka'))

// решение учителя
const capitalize = text => `${text[0].toUpperCase()}${text.slice(1)}`
