const db = require('../../models')

async function findUser (id) {
  const user = await db.users.findOne({
    where: {
      id: id
    }
  })

  return user
}

module.exports = {
  findUser
}
