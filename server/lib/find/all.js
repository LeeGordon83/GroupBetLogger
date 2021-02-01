const { db } = require('../../data')()

async function findAll () {
  const allUsers = await db.user.findAll({

  })
  console.log(allUsers)
  return allUsers
}

module.exports = {
  findAll
}
