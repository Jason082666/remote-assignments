// 前端filter要送入後端的資料

const signupButton = document.querySelector('.sign-up-button')

signupButton.addEventListener('click',()=>{
  const name = document.querySelector('#sign-up-name')
  const email = document.querySelector('#sign-up-email')
  const password = document.querySelector('#sign-up-password')
  checkstatus(name.value, email.value, password.value)
})

function checkstatus(name,email,password){
  if (name === '' || email === '' || password === '') {
      alert('You need to fill in all the blank!')
    } else if(IsEmail(email) === false) {
      alert('Please enter the right email') 
    } else if(password.length < 6 || password.length > 10) {
      alert('The password must be 6 ~ 10 characters!')
    } else {
      signupButton.setAttribute('type','submit')
    }
}

function IsEmail(email) {
  var regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}