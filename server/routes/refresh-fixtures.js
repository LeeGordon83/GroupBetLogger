const fixtures = require('../lib/fixtures')
const tools = require('../lib/tools')

module.exports = {
  get: async (req, res) => {
    let i
    for (i = 0; i < 7; i++) {
      const date = new Date(new Date().setDate(new Date().getDate() + i))
      const fixtureDate = await tools.convertDatetoString(date, 'US')
      await fixtures.getFixtures(fixtureDate)
    }
    res.redirect('/main')
  }
}
