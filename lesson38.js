//Сщздать шифровалку:
//программа получает на вход строку и меняет местами в ней каждые 2 подряд идущих символа. 
// Если длина строки нечётная, то последний символ остаётся на своём месте.
//Моё решение
const encrypt = (str) => {
    let i = 1
    let result = ''
    let one
    while(i < str.length) {
        const Char = (str.length) % 2
        if (Char === 0) {
            result = `${result}${str[i]}${str[i-1]}`
            one = result
        }
        else {
            result = `${result}${str[i]}${str[i-1]}`
            one = `${result}${str.slice(-1)}`
        }
        i += 2
    }
    return one
}
//Проверка:
console.log(encrypt('abkc!'))
console.log(encrypt('og!'))
console.log(encrypt('move'))
console.log(encrypt('attack'))
console.log(encrypt('car!'))

//Решение учителя:
const encrypt = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || ''
    result = `${result}${nextSymbol}${str[i]}`
  }

  return result
}