const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.cookie('username', req.query.name)
  res.redirect('/myName')
})


module.exports = router