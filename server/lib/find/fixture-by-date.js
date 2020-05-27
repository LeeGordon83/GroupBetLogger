const db = require('../../models')

async function findAllFixturesByDate (date) {
  const allFixtures = await db.fixtures.findAll({
    where: {
      date: date }
  })

  return allFixtures
}

module.exports = {
  findAllFixturesByDate
}
