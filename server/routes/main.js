const find = require('../lib/find')
const fixtures = require('../lib/fixtures')

module.exports = {
  get: async (req, res) => {
    const fixturesList = await find.findAllFixtures()
    res.render('main.ejs', { fixturesFound: fixturesList })
  }
}
