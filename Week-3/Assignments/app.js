const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())



app.get('/', (req, res) => {
  res.render('main')
})

app.get('/data', (req, res) => {
  const number = +req.query.number
  if (!req.query.number) {
    return res.send('<h1>Lack of Parameter</h1>')
  } else if (Number.isInteger(number) === false) {
    return res.send('<h1>Wrong Parameter</h1>')
  }
  const answer = Math(number)
  res.send(`<h1>${answer}</h1>`)
})


app.get('/myName',(req,res)=>{
  res.render('myName')
})

app.post(`/trackName`,(req,res)=>{
  res.cookie('username',req.body.username)
  res.render('main')
})



// function here!
function Math(input) {
  let answer = ((input + 1) * input) / 2
  return answer
}

app.listen('3000')