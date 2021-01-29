const { db, sequelize } = require('../../data')()

async function findAllFixturesByDate (fixtureDate, fixtureDate2) {
  const allFixtures = await db.fixture.findAll({
    where: {
      date: { [sequelize.Op.between]: [fixtureDate, fixtureDate2] }
    }
  })
  return allFixtures
}

module.exports = {
  findAllFixturesByDate
}
