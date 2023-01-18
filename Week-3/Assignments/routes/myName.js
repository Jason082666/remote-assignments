const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const username = req.cookies.username
  res.locals.username = username
  res.render('myName')
})



module.exports = router