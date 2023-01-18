const button = document.querySelector('button')
const box = document.querySelector('.box')
const number = document.createElement('h2')
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    number.innerText = `The result is ${xhr.responseText}`
    box.append(number)
  }
}
xhr.open('GET', '../routs/data.js')

// function sendAJAX() {
//   xhr.send()
// }

button.addEventListener('click', () => {
  button.preventDefault()
  xhr.send()
})
