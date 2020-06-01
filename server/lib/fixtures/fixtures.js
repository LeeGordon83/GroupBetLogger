const fs = require('fs')
const csv = require('fast-csv')
const db = require('../../models')
const http = require('http')

const fixtures = []

async function getLatestFixtures () {
  http.get('http://www.football-data.co.uk/fixtures.csv', response => {
    response.pipe(fs.createWriteStream('fixtures.csv')
      .on('finish', () => {
        csv.parseFile('fixtures.csv')
          .on('data', row => {
            fixtures.push(row)
          })
      }))
  })
  await saveFixturesToDatabase()
}

async function saveFixturesToDatabase () {
  fixtures.shift()
  return Promise.all(fixtures.map(fixture => saveFixtureToDatabase(fixture)))
}

async function saveFixtureToDatabase (fixture) {
  return db.fixtures.findOne({ where: {
    date: fixture[1],
    homeTeam: fixture[3],
    awayTeam: fixture[4]
  } }).then(item => {
    if (!item) {
      db.fixtures.create({
        division: fixture[0],
        date: fixture[1],
        time: fixture[2],
        homeTeam: fixture[3],
        awayTeam: fixture[4],
        williamHillHome: fixture[23],
        williamHillDraw: fixture[24],
        williamHillAway: fixture[25]
      })
    } else {
      db.fixtures.update({
        division: fixture[0],
        date: fixture[1],
        time: fixture[2],
        homeTeam: fixture[3],
        awayTeam: fixture[4],
        williamHillHome: fixture[23],
        williamHillDraw: fixture[24],
        williamHillAway: fixture[25] },
      { where: {
        id: item.id }
      }
      )
    }
  })
}

module.exports = {
  getLatestFixtures
}
