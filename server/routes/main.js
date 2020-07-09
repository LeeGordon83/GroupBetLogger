const find = require('../lib/find')
const tools = require('../lib/tools')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      const date = new Date()
      const dateString = await tools.convertDatetoString(date)

      const fixturesList = await find.findAllFixturesByDate(dateString)
      res.render('main.ejs', { fixturesFound: fixturesList })
    } else {
      res.redirect('/login')
    }
  }

}
