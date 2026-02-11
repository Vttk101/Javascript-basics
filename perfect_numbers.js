const sumNum = (number) => {
    let i = 1 
    let sum = 0
    while (i <= number/2) {
        if (number % i === 0){
            sum = sum + i
        }
        else{
            sum = sum + 0
        }
        i++
    }
    return sum
}

const isPerfect = (number) => {
    let result = sumNum(number)
    if (number < 6) {
        return false
    } 
    else if (number === result) {
        return true
    }
    else {
        return false
    }
}

console.log(isPerfect (28))
console.log(sumNum(496))