const fixtures = require('../lib/fixtures')
const tools = require('../lib/tools')

module.exports = {
  get: async (req, res) => {
    const date = new Date(new Date().setDate(new Date().getDate()))
    const fixtureDate = await tools.convertDatetoString(date, 'US')
    await fixtures.getFixtures(fixtureDate)
    res.redirect('/main')
  }
}
