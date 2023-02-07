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
    // 檢查是否三個欄位都有填到，且email格式正確，密碼位數正確
    checkstatus(name, email, password)
    // 檢查資料皆正確，則在mysql中建置資料
    const node = await createNode(name, email, password)
    if (node === false) {
      throw 'this email has been registered!'
    }
    req.session.authenticated = true
    req.session.name = node.name
    res.redirect('/member')
  } catch (err) {
    res.render('home', {
      err
    })
  }
})

// 分別檢查三個欄位是否都有填到、email格式正確性以及密碼長度
function checkstatus(name, email, password) {
  if (name === '' || email === '' || password === '') {
    throw 'You need to fill in all the blank!'
  } else if (IsEmail(email) === false) {
    throw 'Please enter the right email'
  } else if (password.length < 6 || password.length > 20) {
    throw 'The password must be 6 ~ 20 characters!'
  }
}

function IsEmail(email) {
  var regex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}

module.exports = router