//Моё решение конструции SWitch через переменную
const getNumberExplanation = (count) => {
    let result
    switch (count) {
        case 666:
            result = 'devil number'
            break;
        case 42:
            result = 'answer for everything'
            break;
        case 7:
            result = 'prime number'
            break;
        default:
            result = 'just a number'
    }
    return result
}

// Моё решение через return
const getNumberExplanation = (count) => {
    switch (count) {
        case 666:
            return 'devil number'
        case 42:
            return 'answer for everything'
        case 7:
            return 'prime number'
        default:
            return 'just a number'
    }
}

// проверка
console.log(getNumberExplanation(8)) // just a number
console.log(getNumberExplanation(666)) // devil number
console.log(getNumberExplanation(42)) // answer for everything
console.log(getNumberExplanation(7)) // prime number

// Решение учителя
const getNumberExplanation = (number) => {
  switch (number) {
    case 666:
      return 'devil number'
    case 7:
      return 'prime number'
    case 42:
      return 'answer for everything'
    default:
      return 'just a number'
  }
}