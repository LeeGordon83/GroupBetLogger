const axios = require('axios')
const config = require('../../config')
const saveFixtures = require('./save-fixtures')

async function getFixtures (fixtureDate) {
  const headers = getHeaders()
  const fixtures = await callFixtureApi(headers, fixtureDate)
  const filteredFixtures = filterFixtures(fixtures)
  await saveFixtures.saveFixtures(filteredFixtures)
}

function getHeaders () {
  return {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': config.dbConfig.development.APIhost,
    'x-rapidapi-key': config.dbConfig.development.APIkey,
    useQueryString: true
  }
}

function callFixtureApi (headers, fixtureDate) {
  return axios({
    method: 'GET',
    url: `https://${config.dbConfig.development.APIhost}/fixtures/date/${fixtureDate}?timezone=Europe/London`,
    headers
  })
}

function filterFixtures (fixtures) {
  return fixtures.data.api.fixtures.filter(x => x.league.country === 'England')
}

module.exports = {
  getFixtures
}
