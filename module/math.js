//Моё решение
// импорт из numbers1
import cube from './numbers1.js'
// импорт из numbers2
import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './numbers2.js'
// импорт из numbers3
import sqrt from './numbers3.js'

export default cube
export { pow, sum, sub, multi, sqrt  }

//решение учителя
import cube from './numbers1'
import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './numbers2'
import sqrt from './numbers3'

export {
  multi, pow, sum, sub, sqrt,
}
export default cube