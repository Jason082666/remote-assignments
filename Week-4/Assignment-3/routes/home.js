const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.cookies.username) {
    return res.redirect('/member')
  }
  res.render('home')
})

module.exports = router