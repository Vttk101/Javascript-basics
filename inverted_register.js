//Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке регистр каждой буквы 
// на противоположный. Функция должна возвращать полученный результат
//Примеры:
//invertCase('Hello, World!') // hELLO, wORLD!
//invertCase('I loVe JS') // i LOvE js

//Моё решение:
const invertCase = (str) => {
    let i = 0
    let result = ''
    while(i < str.length) {
        if (str[i] === str[i].toLowerCase()) {
            result = `${result}${str[i].toUpperCase()}`
        } 
        else {
            result = `${result}${str[i].toLowerCase()}`
        }
        i += 1
    }
    return result
}
export default invertCase

// Моё решение 2
const invertCase = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i += 1) {
        const abs = str[i] === str[i].toLowerCase()
        result += abs ? str[i].toLowerCase() : str[i].toUpperCase()   
    }
    return result
}

console.log(invertCase ('I loVe JS'))

// Решение учителя:
const invertCase = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i += 1) {
    const isUpper = str[i] === str[i].toUpperCase()
    result += isUpper ? str[i].toLowerCase() : str[i].toUpperCase()
  }

  return result
}

export default invertCase