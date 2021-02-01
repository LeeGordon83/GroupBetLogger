const { db } = require('../../data')()

async function findAllFixtures () {
  const allFixtures = await db.fixture.findAll({
  })

  return allFixtures
}

module.exports = {
  findAllFixtures
}
