const find = require('../lib/find')

module.exports = {
  get: async (req, res) => {
    const users = await find.findAll()
    console.log(users)
    res.render('addgroup.ejs', { usersFound: users })
  } }
