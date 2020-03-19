const compare = require('../encryption')
const find = require('../find')

async function userlogin (email, password) {
  const user = await find.findEmail(email)

  if (user === null) {
    return user
  } else {
    if (await compare.isMatch(password, user.password)) {
      return user
    } else {
      const invalid = 'Invalid Password'
      return invalid
    }
  }
}

module.exports = {
  userlogin
}
