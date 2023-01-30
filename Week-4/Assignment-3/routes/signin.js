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
    email,
    password
  } = req.body
  const result = await findProfile(email, password)
  if (result) {
      res.cookie('username', result)
      res.redirect('/member') 
  } else {
    const err1 = new Error('wrong email or password!')
    res.render('home', {
      err1
    })
  }
})

module.exports = router