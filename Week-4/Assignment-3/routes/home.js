const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.session.name) {
    return res.redirect('/member')
  }
  res.render('home')
})

module.exports = router