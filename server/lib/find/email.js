const db = require('../../models')

async function findEmail (email) {
  const emailFound = await db.users.findOne({
    where: {
      email: email
    }
  })
  console.log(emailFound)
  return emailFound
}

module.exports = {
  findEmail
}
