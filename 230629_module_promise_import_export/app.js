// const promise = new Promise((resolve,reject) => {
//   setTimeout(() => {console.log('3초뒤')},3000)
// })

// promise.then(result => result).catch
// (error => console(error))

// const promise = async () => {
//   try {
//     const getData = await fetch('주소')
//     const result = await getData.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

// import / export

// import add from './add.js'

// // multiply.js
// // 매개변수 number를 받아서 *2한 값을 반환
// // 곱하기 함수를 파일로 만들어서 export시키고,
// // app.js 불러와서 실행하고 결과를 보세요

// import multiply from "./multiply.js"

// impoet {add, multipt} from './util.js'
// import {add as plus} from './util.js'

// console.log(plus(2))
// console.log(multiply(3))

import * as calc from './util.js'

console.log(calc.add(2))
console.log(calc.multiply(3))
console.log(calc.double(4))


//utill.js 추가
//함수 - doubl을 export
//매개변수 - number
//double이 하는 일은 매개변수 number*number
//app.js에 가져다가 결과를 console.log()로 보여주세요