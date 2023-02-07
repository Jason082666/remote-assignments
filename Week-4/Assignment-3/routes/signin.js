const express = require('express')
const router = express.Router()
const {
  Getnode,
  Getnodes,
  createNode,
  findProfile,
  loginCheck
} = require('../database.js')

router.post('/', async (req, res) => {
  const {
    email,
    password
  } = req.body


  if (email && password) {
    if (req.session.authenticated) {
      res.json(req.session)
    } else if (await loginCheck(email, password)) {
      const obj = await loginCheck(email, password)
      const name = obj.name
      req.session.authenticated = true
      req.session.name = name
      console.log(req.session)
      console.log(req.sessionID) 
      res.redirect('/')
    } else {
      const err1 = new Error('wrong email or password !')
      res.render('home', {
        err1
      })
    }
  } else {
    const err1 = new Error('wrong email or password !')
    res.render('home', {
      err1
    })
  }
})

module.exports = router