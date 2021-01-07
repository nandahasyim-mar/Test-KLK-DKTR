const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}


function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash)
}


function signToken(params) {
  const token = jwt.sign(params, process.env.SECRET || 'klik-dokter')
  return token
}


function verifyToken(token) {
  const decoded = jwt.verify(token, process.env.SECRET || 'klik-dokter')
  return decoded
}


module.exports = {
  hashPassword,
  comparePassword,
  signToken,
  verifyToken
}