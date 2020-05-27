const find = require('../lib/find')

module.exports = {
  get: async (req, res) => {
    const fixturesList = await find.findAllFixturesByDate(new Date())
    res.render('main.ejs', { fixturesFound: fixturesList })
  }
}
