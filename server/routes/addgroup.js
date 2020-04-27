const find = require('../lib/find')
// const Group = require('../lib/group')

module.exports = {
  get: async (req, res) => {
    const users = await find.findAll()
    res.render('addgroup.ejs', { usersFound: users })
  },

  post: async (req, res) => {
    console.log(req.body.formdatayea)

    // await Group.create(req)
    res.redirect('/group')
  }

}
