const button = document.querySelector('button')
const box = document.querySelector('.box')
const number = document.createElement('h2')
const input = document.querySelector('input')
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    number.innerHTML = `The result is ${xhr.responseText}`
    box.after(number)
  }
}

input.addEventListener('input', (event) => {
  const value = event.target.value
  xhr.open('GET', `/data?number=${value}`)
})


button.addEventListener('click', (event) => {
  event.preventDefault()
  xhr.send()
})