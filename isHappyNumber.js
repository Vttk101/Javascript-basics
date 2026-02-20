//Моё решение
const sumOfSquareDigits = (num) => {
  const numAsStr = String(num)
  let sum = 0
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i])
    sum += digit * digit
  }

  return sum
}

// BEGIN (write your solution here)
isHappyNumber = (num) => {
    let happy = sumOfSquareDigits(num)
    for (let i = 1; i <= 10; i += 1) {
        happy = sumOfSquareDigits(happy)
    }
    if (happy === 1) {
        return true
    } 
    else {
        return false
    }
}
export default isHappyNumber

//Решение учителя
const sumOfSquareDigits = (num) => {
  const numAsStr = String(num)
  let sum = 0
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i])
    sum += digit * digit
  }

  return sum
}
// BEGIN
export default (num) => {
  let number = num
  for (let i = 0; i < 10; i += 1) {
    number = sumOfSquareDigits(number)
    if (number === 1) {
      return true
    }
  }
  return false
}
// END