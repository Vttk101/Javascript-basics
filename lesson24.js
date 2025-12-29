// мое решение
const truncate = (text, length) => {
  // BEGIN (write your solution here)
  let obrez = text.slice(0, length)
  console.log(`${obrez}...`)
  return (`${obrez}...`)
  // END
}
truncate('hexlet', 2)
truncate('it works!', 4)
truncate('hello', 3)
truncate('текст', 3)
truncate('и пошла вода', 5)

// решение учителя
const truncate = (text, length) => {
  // BEGIN
  const result = `${text.slice(0, length)}...`
  return result
  // END
}