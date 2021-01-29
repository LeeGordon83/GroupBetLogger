const { db } = require('../../data')()

async function findUser (id) {
  const user = await db.user.findOne({
    where: { id }
  })

  return user.dataValues
}

module.exports = {
  findUser
}
