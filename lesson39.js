//Моё решение
//В файле myMathModule.js
export const getTrianglePerimeter = (a, b, c) => a + b + c
export const getTriangleArea = (h, b) => 1/2 * (h * b)

//В файле solution.js:
import square from './square.js'
import {getTriangleArea} from './myMathModule.js'

export default (n) => {
    return getTriangleArea(n, square(n)/2)
}

//Решение учителя
//В файле myMathModule.js
export const getTrianglePerimeter = (a, b, c) => a + b + c
export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2
  return area
}
//В файле solution.js:
import square from './square.js'
import { getTriangleArea } from './myMathModule.js'

const solution = n => getTriangleArea(n, square(n) / 2)

export default solution