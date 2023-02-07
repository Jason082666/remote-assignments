const express = require('express')
const app = express()
const session = require('express-session')
const store = new session.MemoryStore()

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use('/static', express.static('public'))

app.use(session({
  secret: 'some secret',
  cookie: {
    maxAge: 300000,
    sameSite: true
  },
  saveUninitialized: false,
  store,
  resave: false
}))

const homeRoutes = require('./routes/home')
const signinRoutes = require('./routes/signin')
const signupRoutes = require('./routes/signup')
const memberRoutes = require('./routes/member')

app.use('/home', homeRoutes)
app.use('/signin', signinRoutes)
app.use('/signup', signupRoutes)
app.use('/member', memberRoutes)

app.get('/', (req, res) => {
  console.log(store)
  res.redirect('/home')
})


app.post('/logout', (req, res) => {
  req.session.destroy()
  console.log(store)
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