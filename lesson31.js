//Моё решение через if-else
const reverse = s => s.split('').reverse().join('') //f-ия для переворота строки
const convertText = (str) => {
    let resalt
    const fir = str[0]
    if (str === '') {
        resalt = str
    }
    else if (fir === fir.toUpperCase()) {
        resalt = str
    }
    else {
        resalt = reverse(str)
    }
    return resalt
}

//Моё решение через "тренарник" - тренарный оператор:
const reverse = s => s.split('').reverse().join('')
const convertText = (str) => {
    let resalt
    const fir = str[0]
    if (str === '') {
        resalt = str
    }
    else {
        return (fir === fir.toUpperCase()) ? str : reverse(str)
    }
    return resalt
}

// Проверка 
console.log(convertText('Barabulka')) //Barabulka
console.log(convertText(' '))         //
console.log(reverse('zagarulko'))     //okluragaz

//Решение учителя:
// Импорты мы еще не изучали,
// но он нужен здесь для того, чтобы вы могли использовать функцию reverse()
import reverse from './reverse'

// BEGIN
const convertText = (text) => {
  if (text === '') {
    return ''
  }

  const reversable = text[0] !== text[0].toUpperCase()
  return reversable ? reverse(text) : text
}
// END
