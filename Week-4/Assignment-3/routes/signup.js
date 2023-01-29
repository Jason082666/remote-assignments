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

  try {
    if (name === '' || email === '' || password === '') {
      throw 'You need to fill in all the blank!'
    }
    const node = await createNode(name, email, password)
    res.cookie('username', node.name)
    res.redirect('/member')
  } catch (err) {
    res.render('home', {
      err
    })
  }
})

module.exports = router