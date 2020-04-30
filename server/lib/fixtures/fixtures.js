const fs = require('fs')
const csv = require('fast-csv')
const db = require('../../models')
const http = require('http')

const fixtures = []

function getLatestFixtures () {
  http.get('http://www.football-data.co.uk/fixtures.csv', response => {
    response.pipe(fs.createWriteStream('fixtures.csv')
      .on('finish', () => {
        csv.parseFile('fixtures.csv')
          .on('data', row => {
            fixtures.push(row)
          })
          .on('end', async () => {
            await saveFixturesToDatabase()
          })
      }))
  })
}

function saveFixturesToDatabase () {
  fixtures.shift()
  fixtures.forEach(async fixture => {
    await db.fixtures.upsert({
      division: fixture[0],
      date: fixture[1],
      time: fixture[2],
      homeTeam: fixture[3],
      awayTeam: fixture[4],
      williamHillHome: fixture[23],
      williamHillDraw: fixture[24],
      williamHillAway: fixture[25]
    })
  })
}

module.exports = getLatestFixtures
