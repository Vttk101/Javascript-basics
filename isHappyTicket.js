const isHappyTicket = (num) => {
    let half1 = 0
    let half2 = 0
    for (i = 0; i < num.length/2; i += 1) {
        half1 = half1 + parseInt(num[i])
    }
    for (i = num.length/2; i < num.length; i += 1) {
        half2 = half2 + parseInt(num[i])
    }
    if (half1 === half2) {
        return true
    }
    else {
        return false
    }
}

console.log(isHappyTicket('060006'))
console.log(isHappyTicket('123321'))
console.log(isHappyTicket('341800'))
console.log(isHappyTicket('812146'))
console.log(isHappyTicket('000001'))
console.log(isHappyTicket('123567'))
console.log(isHappyTicket('213612'))