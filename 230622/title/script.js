const title = document.getElementById('title')
// console.log(title)
// console.log(title.textContent)
// console.log(title.innerText)
// 매개변수 -> 구분자
// title.addEventListener('click', () => {
  // title.classList.toggle('active')
// })
const chars = title.innerText.split('')

// 1. title안의 문자열 삭제
title.innerText = '';

// 2. span태그에 담아서 title안에 자바스크립트로 생성한 문자열 삽입
chars.forEach((char, index) => {
  // span element 생성
  const span = document.createElement('span')
  // class 'char' 추가
  span.classList.add('char')
  // 생성된 span 태그에 char 문자 삽입
  span.textContent = char
  // title에 자식 요소로 문자가 담긴 span 태그 삽입
  title.appendChild(span)
  // console.log(span)

  setTimeout(() => {
    span.classList.add('active')
  }, 200 * index)
})

setTimeout(() => {console.log('첫번째 setTimeout')} , 100)
setTimeout(() => {console.log('두번째 setTimeout')} , 500)
setTimeout(() => {console.log('세번째 setTimeout')} , 800)