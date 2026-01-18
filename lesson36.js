//Моё решение
const countChars = (str, char) => {
  let i = 0
  let count = 0
  let str1 = str.toUpperCase()
  let char1 = char.toUpperCase()
  while(i <= str.length) {
      if(str1[i] === char1) {
          count = count + 1
      }
      i += 1
  }
  
  return count
}

//Моё решение но короче
const countChars = (str, char) => {
  let i = 0
  let count = 0
  while(i < str.length) { // Странно конструкция (i <= str.length) не работала, хотя в пирмере выше норм.
      if (str[i].toUpperCase() === char.toUpperCase()) {
          count = count + 1
      }
      i = i + 1
  }
  
  return count
}
// Проверка
console.log(countChars('FEar cuts deEper than swords.', 'e')) //4 - работает

//Решение учителя
const countChars = (str, char) => {
  let i = 0
  let count = 0
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1
    }
    i = i + 1
  }

  return count
}