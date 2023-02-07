const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.session)
  const username = req.session.name
  if (!username) {
    return res.redirect('/home')
  }
  res.locals.username = username
  res.render('member')
}) 

module.exports = router