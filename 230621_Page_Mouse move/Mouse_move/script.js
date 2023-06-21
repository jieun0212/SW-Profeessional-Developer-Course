// console.log(pointer)

window.addEventListener('mousemove',(event) => {
  const pointer = document.getElementById('pointer')
  // console.log('마우스 좌표x값: '+ event.clientX + '마우스 좌표 Y값: ' + event.clientY)
  // console.log(`마우스 X값 : ${event.clientX}, 마우스 Y값: ${event.clientY}`)
  pointer.style.top = `${event.clientY - (pointer.offsetHeight / 2)}px`
  pointer.style.left = `${event.clientX - (pointer.offsetWidth / 2)}px`

  // console.log(pointer.clientWidth)
  console.log(pointer.offsetWidth)
})