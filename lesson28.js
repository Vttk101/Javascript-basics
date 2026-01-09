// мое решение
const isLeapYear = (number) => number % 400 === 0 || (number % 4 === 0 && number % 100 !== 0)
console.log(isLeapYear(2016)) // проверка в итерпретаторе
console.log(isLeapYear(2000))
console.log(isLeapYear(2017))
console.log(isLeapYear(2018))
console.log(isLeapYear(1900))

// решение учителя
const isLeapYear = (year) => {
  const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  return result
}