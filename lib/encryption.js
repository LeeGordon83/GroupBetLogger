const bcrypt = require('bcrypt')
const saltRounds = 10

class Encrypt {
  static async encrypt (password) {
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash
  }
}

module.exports = Encrypt
