const db = require('../../models')

async function findAll () {
  const allUsers = await db.users.findAll({

  })
  console.log(allUsers)
  return allUsers
}

module.exports = {
  findAll
}
