const bcrypt = require('bcrypt')
const SALT_ROUNDS = 10

async function encryptString (value) {
  const encryptedString = await bcrypt.hash(value, SALT_ROUNDS)
  return encryptedString
}

module.exports = {
  encryptString
}
