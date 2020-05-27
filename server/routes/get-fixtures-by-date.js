const find = require('../lib/find')

module.exports = {
  get: async (req, res) => {
    const addDays = parseInt(req.query.date, 10)
    const date = new Date(new Date().setDate(new Date().getDate() + addDays))

    const results = await find.findAllFixturesByDate(date)

    res.send(results)
  }
}
