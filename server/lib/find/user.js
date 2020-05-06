const db = require('../../models')

async function findUser (id) {
  const user = await db.users.findOne({
    where: { id }
  })

  return user.dataValues
}

module.exports = {
  findUser
}
