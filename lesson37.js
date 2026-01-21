//Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, 
//у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию
//Моё решение
const makeItFunny = (text, num) => {
    let i = 0
    let result = ''
    while(i < text.length) {
        if (i % num === num -1) {
            result = `${result}${text[i].toUpperCase()}`
        }
        else {
            result = `${result}${text[i]}`
        }
        i += 1
    }
    return result
}
//Проверка
console.log(makeItFunny('I never look back', 3)) // => I NevEr LooK bAck

//Решение учителя
const makeItFunny = (str, n) => {
  let i = 0
  let result = ''
  while (i < str.length) {
    const current = str[i]
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`
    }
    else {
      result = `${result}${current}`
    }
    i++
  }

  return result
}