const db = require('../models')

const bcrypt = require('bcrypt')
const saltRounds = 10

class User {
  static async create (email, password) {
    const hash = bcrypt.hashSync(password, saltRounds)

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
