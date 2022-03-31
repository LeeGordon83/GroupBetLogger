const db = require('../../models')
const { Op } = require('sequelize')

async function findAllFixturesByDate (fixtureDate, fixtureDate2) {
  const allFixtures = await db.fixtures.findAll({
    where: {
      date: { [Op.between]: [fixtureDate, fixtureDate2] }
    }
  })
  return allFixtures
}

module.exports = {
  findAllFixturesByDate
}
