let dark = document.querySelector('.dark__mode')
let wrap = document. querySelector('.wrapper')

// dark.addEventListener('click', function(){
//     wrap.classList.add('dark')
// })


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}