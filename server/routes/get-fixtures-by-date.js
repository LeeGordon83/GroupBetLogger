const find = require('../lib/find')
const tools = require('../lib/tools')

module.exports = {
  get: async (req, res) => {
    const addDays = parseInt(req.query.date, 10)
    const date = new Date(new Date().setDate(new Date().getDate() + addDays))

    const dateString = await tools.convertDatetoString(date)

    console.log(dateString)

    const results = await find.findAllFixturesByDate(dateString)

    console.log(results)

    res.send(results)
  }
}
