//Моё решение №1
const getLetter = (name, x) => {
  const result = name[x - 1]
  return result || ''
}
console.log(getLetter('Hexlet', 7)) // отладка

//Moё решение №2
const getLetter = (name, x) =>  name[x - 1] || ''
console.log(getLetter('Hexlet', 10)) // отладка

//Решение учителя
const getLetter = (text, position) => text[position - 1] || ''