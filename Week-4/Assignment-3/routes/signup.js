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
    // 檢查email是否已經註冊過
    await findEmail(email)
    // 檢查資料皆正確，則在mysql中建置資料
    const node = await createNode(name, email, password)
    res.cookie('username', node.name)
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
  } else if (password.length < 6 || password.length > 10) {
    throw 'The password must be 6 ~ 10 characters!'
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

// 用function來預先審視email是否有重複，來解決sql因unique key衝突所造成primary key 有間隔的問題，若email已被註冊過，則不執行createNode() function。
async function findEmail(email) {
  const profiles = await Getnodes()
  profiles.forEach(profile => {
    if (profile.email === email) {
      throw 'The email has already been registered'
    }
  });
}
module.exports = router