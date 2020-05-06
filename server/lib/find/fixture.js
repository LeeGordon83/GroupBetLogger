const db = require('../../models')

async function findAllFixtures () {
  const allFixtures = await db.users.findAllFixtures({
  })

  return allFixtures
}

module.exports = {
  findAllFixtures
}
