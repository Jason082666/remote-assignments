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
    const err = new Error('wrong email or password!')
    res.render('home', {
      err
    })
  }
})

module.exports = router