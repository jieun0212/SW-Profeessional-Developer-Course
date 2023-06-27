// 동기 - 순서대로 실행 
// 예) 1번줄부터 마지막줄까지 실행

// 비동기 - 자신만의 실행 순서를 갖고 있음
// 예) 서버에서 오는 데이터, 거리에 따라 전송 속도가 달라 대기 시간이 필요함
// ------------------------------------------------------------------------
// const app = document.getElementById('#app')

// console.log('실행')
// // 1000 ms = 1s
// // setInterval
// setTimeout(()=>{
//   console.log('1초뒤에 실행')
// },1000)

// setTimeout(()=>{
//   console.log('3초뒤에 실행')
// },3000)

// setTimeout(()=>{
//   console.log('2초뒤에 실행')
// },2000)

// promise 안에 약속 (Promise)를 담은 상태
// ptomise 비동기처리 -> 동기처럼 순서를 기다리기 위해서
// let promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('응답을 받았습니다.')
//   },2000)
// })

// promise -> than을 통해 데이터를 받아오거나, catch로 에러를 받아온다.
// promise.then(result = console.log(result)).catch(reject => console(reject))
// https://jsonplaceholder.typicode.com/

// let posts = []

const app = document.getElementById('app')
// fatch - 서버로부터 데이터를 받아올때 사용하는 API
// users 정보 가져오기
let todo = fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
todo
.then(response => response.json())
.then(json => {
  // user의 email주소 출력
  // json.forEach(item => {
    //  const p = document.createElement('p')
    //  const h2 = document.createElement('h2')
    //   console.log(item)
    //   h2.textContent = item.username
    //   p.textContent = item.email
    //   app.appendChild(h2)
    //   app.appendChild(p)
    //  })

  console.log(json)
  json.forEach(imageData => {
    const img = document.createElement('img')
    img.src = imageData.url
    app.appendChild(img)
  })
    
})


// console.log(posts)

// posts.forEach(post => {
//   console.log(post)
// })
