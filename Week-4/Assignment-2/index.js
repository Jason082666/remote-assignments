function ajax(src, callback) {
  // your code here
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', src)
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText)
        resolve(callback(data))
      } else {
        reject(Error(xhr.statusText))
      }
    }
    xhr.onerror = () => {
      reject(Error('A network error occured !'))
    }
    xhr.send()
  })
}

function render(data) {
  // your code here
  data.map((element) => {
    const name = element.name
    const price = element.price
    const description = element.description
    const box = document.createElement('div')
    box.className = 'box'
    box.innerHTML = `<div class='name'>${name}</div> 
    <div class='price'>${price}</div>
    <div class='description'>${description}</div>`
    const container = document.querySelector('.container')
    container.appendChild(box)
  })
  // document.createElement() and appendChild() methods are preferred.
}


ajax(
  'https://appworks-school.github.io/Remote-Assignment-Data/products',
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page