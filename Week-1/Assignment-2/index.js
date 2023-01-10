const section1 = document.querySelector('#section1')
section1.addEventListener('click',()=>{
let section1Content = document.querySelector('#section1 h1')
  section1Content.textContent = "Have a Good Time!"  
})

const button = document.querySelector('.button')
button.addEventListener('click', ()=>{
 let articleAppend = document.querySelector('.append')
articleAppend.classList.remove('append')

})