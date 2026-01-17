//Моё решение
const mySubstr = (str, num) => {
    let i = 0
    let result = ''
    while (i < num) {
        result = `${result}${str[i]}`
        i = i + 1
    }
    return result
}

//Проверка
const text = 'If I look back I am lost'
console.log(mySubstr(text, 1)) // => 'I'
console.log(mySubstr(text, 7)) // => 'If I lo'

//Решение учителя
const mySubstr = (string, length) => {
  let resultString = ''
  let i = 0
  while (i < length) {
    resultString += string[i] //!!! применили и нонкантенацию и синтаксический сахар
    i += 1
  }

  return resultString
}