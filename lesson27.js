// мое решение
const isInternationalPhone = (string) => {
  const firstLetter = string[0]
  return firstLetter === '+'
}

// мое решение с отладкой
const isInternationalPhone = (string) => {
  const firstLetter = string[0]
  console.log(firstLetter)
  return firstLetter === '+'
}

console.log(isInternationalPhone('89602223423'))
console.log(isInternationalPhone('+79602223423'))

//решение учителя
const isInternationalPhone = phone => phone[0] === '+'