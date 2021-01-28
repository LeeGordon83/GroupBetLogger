const find = require('../lib/find')

module.exports = {
  get: async (req, res) => {
    const addDays = parseInt(req.query.date, 10)
    const fixtureDate = new Date(new Date().setDate(new Date().getDate() + addDays))
    fixtureDate.setHours(1, 0, 0, 0)
    const fixtureDate2 = new Date(new Date().setDate(new Date().getDate() + addDays))
    fixtureDate2.setHours(24, 59, 59, 0)

    const results = await find.findAllFixturesByDate(fixtureDate, fixtureDate2)

    res.send(results)
  }
}
