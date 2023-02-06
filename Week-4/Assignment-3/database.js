const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

async function Getnode(id) {
  const [response] = await pool.query(`SELECT * FROM user WHERE id = ?`, [id])
  return response[0]
}



async function Getnodes() {
  const response = await pool.query('SELECT * FROM user')
  return response[0]
}

async function createNode(name, email, password) {
  try {
    const [response] = await pool.query(`INSERT INTO user (name,email,password) VALUES (?,?,?)`, [name, email, password])
    const id = response.insertId
    return Getnode(id)
  } catch (e) {
    return false
  }
}

async function findProfile(email, password) {
  const profiles = await Getnodes()
  let result = false
  profiles.forEach(profile => {
    if (profile.email === email && profile.password === password) {
      result = profile.name
    }
  })
  return result
}

async function loginCheck(email,password) {
  const [response] = await pool.query(`SELECT * FROM user WHERE email = ? AND password = ?`,[email,password])
  return response[0]
}

loginCheck('Ana@gmail.com','123456')

module.exports = {
  Getnode,
  Getnodes,
  createNode,
  findProfile,
  loginCheck
}