const find = require('../lib/find')
const tools = require('../lib/tools')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      const fixtureDate = new Date(new Date().setDate(new Date().getDate()))
      fixtureDate.setHours(1, 0, 0, 0)
      const fixtureDate2 = new Date(new Date().setDate(new Date().getDate()))
      fixtureDate2.setHours(24, 59, 59, 0)

      const fixturesList = await find.findAllFixturesByDate(fixtureDate, fixtureDate2)

      res.render('main.ejs', { fixturesFound: fixturesList })
    } else {
      res.redirect('/login')
    }
  }

}
