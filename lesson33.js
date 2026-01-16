//Моё решение
const printNumbers = (initialNumber) => {
    let i = initialNumber
    while (i > 0) {
        console.log(i)
        i -= 1
    }
    console.log('finished!')
}

printNumbers(7) // Проверка. Все работает

// Решение учителя
const printNumbers = (initialNumber) => {
  let i = initialNumber
  while (i >= 1) {
    console.log(i)
    i -= 1
  }
  console.log('finished!')
}