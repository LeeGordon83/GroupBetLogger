const db = require('../../models')

async function findAllFixtures () {
  const allFixtures = await db.fixtures.findAll({
  })

  return allFixtures
}

module.exports = {
  findAllFixtures
}
