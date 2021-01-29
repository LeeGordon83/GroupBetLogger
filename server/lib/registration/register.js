const { db } = require('../../data')()
const encryptor = require('../encryption')

async function register (user) {
  const hash = await encryptor.encryptString(user.body.password)
  return db.user.create({
    email: user.body.email,
    password: hash,
    firstname: user.body.firstname,
    surname: user.body.surname
  })
}

module.exports = {
  register
}
