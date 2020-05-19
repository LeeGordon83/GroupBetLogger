const find = require('../lib/find')

module.exports = {
  get: async (req, res) => {
    const fixturesList = await find.findAllFixtures()
    res.render('main.ejs', { fixturesFound: fixturesList })
  }
}
