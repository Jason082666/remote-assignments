const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const number = +req.query.number
  if (!req.query.number) {
    return res.send('<h1>Lack of Parameter</h1>')
  } else if (Number.isInteger(number) === false) {
    return res.send('<h1>Wrong Parameter</h1>')
  }
  const answer = NumberSum(number)
  res.send(`<h1>${answer}</h1>`)
})
// function here!
function NumberSum(input) {
  let answer = ((input + 1) * input) / 2
  return answer
}
module.exports = router