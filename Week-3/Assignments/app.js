const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dataRoutes = require('./routes/data.js')
const trackNameRoutes = require('./routes/trackName.js')
const myNameRoutes = require('./routes/myName.js')

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.render('main')
})
app.use('/data',dataRoutes)
app.use('/trackName',trackNameRoutes)
app.use('/myName',myNameRoutes)

app.listen('3000')