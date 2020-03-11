const db = require('../models')
const encryptor = require('../lib/encryption')

const bcrypt = require('bcrypt')

class User {
  static async create (email, password) {
    const hash = await encryptor.encrypt(password)
    return db.users.create({
      email: email,
      password: hash
    })
  }

  static async retrieveData (email) {
    return db.users.findOne({
      where: {
        email: email
      }
    })
  }

  static find (results) {
    console.log(results)
    return !(results === null || results === undefined)
  }

  static authenticate (password, results) {
    return bcrypt.compareSync(password, results[0].password)
  }
}

module.exports = User
