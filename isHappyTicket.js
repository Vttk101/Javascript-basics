//Моё решение
const isHappyTicket = (num) => {
    let half1 = 0
    let half2 = 0
    for (let i = 0; i < num.length/2; i += 1) {
        half1 = half1 + parseInt(num[i])
    }
    for (let i = num.length/2; i < num.length; i += 1) {
        half2 = half2 + parseInt(num[i])
    }
    if (half1 === half2) {
        return true
    }
    else {
        return false
    }
}
export default isHappyTicket

//Решение учителя
export default (num) => {
  let balance = 0

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += parseInt(num[i]) - parseInt(num[j])
  }
  return balance === 0
}