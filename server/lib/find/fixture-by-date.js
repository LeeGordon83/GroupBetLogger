const db = require('../../models')

async function findAllFixturesByDate (dateString) {
  const allFixtures = await db.fixtures.findAll({
    where: {
      date: dateString }
  })

  return allFixtures
}

module.exports = {
  findAllFixturesByDate
}
