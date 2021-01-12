const db = require('../../models')

async function saveFixtures (fixtures) {
  console.log(fixtures)
  return Promise.all(fixtures.map(fixture => saveFixture(fixture)))
}

async function saveFixture (fixture) {
  return db.fixtures.findOne({
    where: {
      fixture_id: fixture.fixture_id
    }
  }).then(item => {
    if (!item) {
      db.fixtures.create({
        fixture_id: fixture.fixture_id,
        division: fixture.league.name,
        date: fixture.event_date,
        time: fixture.event_timestamp,
        homeTeam: fixture.homeTeam.team_name,
        homeTeamLogo: fixture.homeTeam.logo,

        awayTeam: fixture.awayTeam.team_name,
        awayTeamLogo: fixture.awayTeam.logo
      })
    } else {
      db.fixtures.update({
        division: fixture.league.name,
        date: fixture.event_date,
        time: fixture.event_timestamp,
        homeTeam: fixture.homeTeam.team_name,
        homeTeamLogo: fixture.homeTeam.logo,
        awayTeam: fixture.awayTeam.team_name,
        awayTeamLogo: fixture.awayTeam.logo
      },
      {
        where: { fixture_id: item.fixture_id }
      }
      )
    }
  })
}

module.exports = { saveFixtures }
