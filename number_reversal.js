// Моё решение №1
const reverseInt = (num) => {
    const bum = Math.abs(num);
    const number = bum.toString();
    let result =''
    for (let i = 0; i < number.length; i += 1) {
        result = Number(`${number[i]}${result}`)
    }
    return num > 0 ? result : -result
}
export default reverseInt
// Моё решение №2
const reverseInt = (num) => {
    const bum = Math.abs(num);
    const number = bum.toString();
    let result =''
    for (let i = 0; i < number.length; i += 1) {
        result = parseInt(`${number[i]}${result}`)
    }
    return num > 0 ? result : -result
}
export default reverseInt
// Решение учителя
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num))
  let reversedStr = ''

  for (let i = numAsStr.length - 1; i >= 0; i -= 1) {
    reversedStr += numAsStr[i]
  }
  const reversedModule = Number(reversedStr)

  return num < 0 ? -reversedModule : reversedModule
}

export default reverseInt