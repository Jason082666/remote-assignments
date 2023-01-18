const button = document.querySelector('button')
const input = document.querySelector('input')
button.addEventListener('click',()=>{
  // button.preventDefault()
  const value = document.querySelector('input').value
  input.value = value
})
