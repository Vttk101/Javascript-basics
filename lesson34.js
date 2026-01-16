//Моё решение
const joinNumbersFromRange = (num1, num2) => {
    let i = num1
    let sum = ''
    
    while (i <= num2) {
        sum = `${sum}${i}`
        i = i + 1
    }
    return sum
}

console.log(joinNumbersFromRange (3, 9)) //3456789 - работает

//Решение учителя
const joinNumbersFromRange = (start, finish) => {
  let i = start
  let result = ''

  while (i <= finish) {
    result = `${result}${i}`
    i = i + 1
  }

  return result
}