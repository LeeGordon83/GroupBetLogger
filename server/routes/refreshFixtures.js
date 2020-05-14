const fixtures = require('../lib/fixtures')

module.exports = {
  get: async (req, res) => {
    const refreshFixtures = await fixtures.getLatestFixtures()
    res.redirect('/main')
  }
}
