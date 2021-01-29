const { db } = require('../../data')()

async function findEmail (email) {
  const emailFound = await db.user.findOne({
    where: {
      email: email
    }
  })
  return emailFound
}

module.exports = {
  findEmail
}
