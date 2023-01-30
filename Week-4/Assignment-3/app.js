const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.set('view engine', 'pug')
app.use(cookieParser())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('public'))
app.use('/static',express.static('public'))

const homeRoutes = require('./routes/home')
const signinRoutes = require('./routes/signin')
const signupRoutes = require('./routes/signup')
const memberRoutes = require('./routes/member')

app.use('/home',homeRoutes)
app.use('/signin',signinRoutes)
app.use('/signup',signupRoutes)
app.use('/member',memberRoutes)


app.get('/',(req,res)=>{
  res.redirect('/home')
})


app.post('/logout',(req,res)=>{
  res.clearCookie('username')
  res.redirect('/home')
})

app.use((req, res, next) => {
  const err = new Error('not found!')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.err = err
  res.render('error')
})

app.listen('3000')