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

