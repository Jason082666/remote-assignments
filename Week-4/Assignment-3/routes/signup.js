const express = require('express')
const router = express.Router()
const {
  Getnode,
  Getnodes,
  createNode,
  findProfile
} = require('../database.js')

router.post('/', async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body
  
// 後端再次filter來自前端的資料
    try {
    checkstatus(name,email,password)
    const node = await createNode(name, email, password)
    console.log(node)
    res.cookie('username', node.name)
    res.redirect('/member')
  } catch (err) {
    res.render('home', {
      err
    })
  }
})

function checkstatus(name,email,password){
  if (name === '' || email === '' || password === '') {
      throw 'You need to fill in all the blank!'
    } else if(IsEmail(email) === false) {
      throw 'Please enter the right email'
    } else if(password.length < 6 || password.length > 10) {
      throw 'The password must be 6 ~ 10 characters!'
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
module.exports = router