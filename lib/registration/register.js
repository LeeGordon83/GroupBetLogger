const db = require('../../models')
const encryptor = require('../encryption')

async function register (email, password) {
  const hash = await encryptor.encryptString(password)
  return db.users.create({
    email: email,
    password: hash
  })
}

module.exports = {
  register
}
