import sayHello from './say-hello'
import { sum } from './math'

window.setTimeout(() => {
  alert(sayHello('Santiago'))
}, 1000)

window.setTimeout(() => {
  alert(sum(2, 7))
}, 4000)
