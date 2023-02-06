const express = require('express')
const router = express.Router()
const session = require('express-session')
const store = new session.MemoryStore()
const {
  Getnode,
  Getnodes,
  createNode,
  findProfile,
  loginCheck
} = require('../database.js')

router.use(session({
  secret: 'some secret',
  cookie: {
    maxAge: 30000
  },
  saveUninitialized: false,
  store
}))

// router.post('/', async (req, res) => {
//   const {
//     email,
//     password
//   } = req.body
//   const result = await findProfile(email, password)
//   if (result) {
//     res.cookie('username', result)
//     res.redirect('/member')
//   } else {
//     const err1 = new Error('wrong email or password!')
//     res.render('home', {
//       err1
//     })
//   }
// })

router.post('/', async (req, res) => {
  const {
    email,
    password
  } = req.body

  if (email && password) {
    if (req.session.authenticated) {
      res.json(req.session)
    } else if (loginCheck(email, password)) {
      const name = loginCheck(email, password).name
      req.session.authenticated = true
      req.session.name = name
      res.json(req.session)
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