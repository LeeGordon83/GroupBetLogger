const find = require('../lib/find')
const tools = require('../lib/tools')

module.exports = {
  get: async (req, res) => {
    const addDays = parseInt(req.query.date, 10)
    const date = new Date(new Date().setDate(new Date().getDate() + addDays))

    const dateString = await tools.convertDatetoString(date)

    const results = await find.findAllFixturesByDate(dateString)

    res.send(results)
  }
}
