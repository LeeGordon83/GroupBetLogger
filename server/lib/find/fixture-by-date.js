const db = require('../../models')
const { Op } = require('sequelize')

async function findAllFixturesByDate (fixtureDate) {
  const allFixtures = await db.fixtures.findAll({
    where: {
      date: { [Op.gte]: fixtureDate }
    }
  })
  return allFixtures
}

module.exports = {
  findAllFixturesByDate
}
