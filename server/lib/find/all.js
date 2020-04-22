const db = require('../../models')

async function findAll () {
  const allUsers = await db.users.findAll({

  })

  return allUsers
}

module.exports = {
  findAll
}
