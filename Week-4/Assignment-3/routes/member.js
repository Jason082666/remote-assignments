const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const username = req.cookies.username
  if (!username) {
    return res.redirect('/home')
  }
  res.locals.username = username
  res.render('member')
})

module.exports = router