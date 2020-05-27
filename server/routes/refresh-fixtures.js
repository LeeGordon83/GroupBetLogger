const fixtures = require('../lib/fixtures')

module.exports = {
  get: async (req, res) => {
    await fixtures.getLatestFixtures()
    res.redirect('/main')
  }
}
