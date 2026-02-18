//ошибочное но интересное решение
const fizzBuzz = (begin, end) => {
    let i = begin
    let result = ''
    while (i <= end) {
        let a = i % 3
        let b = i % 5
        if (a === 0 && b === 0) {
            result = `${result}${' '}${'FizzBuzz'}`
        }
        else if (a === 0) {
            result = `${result}${' '}${'Fizz'}`
        }
        else if (b === 0) {
            result = `${result}${' '}${'Buzz'}`
        }
        else{
            result = `${result}${' '}${i}`
        }
        i += 1
    }
    return result
}
const fizzBuzz = (begin, end) => {
    let i = begin
    let result = ''
    while (i <= end) {
        let a = i % 3
        let b = i % 5
        if (a === 0 && b === 0) {
            result += 'FizzBuzz\n'
        }
        else if (a === 0) {
            result += 'Fizz\n'
        }
        else if (b === 0) {
            result += 'Buzz\n'
        }
        else{
            result += i + '\n'
        }
        i += 1
    }
    return result
}

//моё решение

const fizzBuzz = (begin, end) => {
    let i = begin
    while (i <= end) {
        let a = i % 3
        let b = i % 5
        if (a === 0 && b === 0) {
            console.log('FizzBuzz')
        }
        else if (a === 0) {
            console.log('Fizz')
        }
        else if (b === 0) {
            console.log('Buzz')
        }
        else{
            console.log(i)
        }
        i += 1
    }
}
export default fizzBuzz

//Решение учителя
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0 ? 'Fizz' : ''
    const hasBuzz = i % 5 === 0 ? 'Buzz' : ''
    console.log(`${hasFizz}${hasBuzz}` || i)
  }
}

export default fizzBuzz