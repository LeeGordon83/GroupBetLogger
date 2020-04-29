const find = require('../lib/find')
const Group = require('../lib/group')

module.exports = {
  get: async (req, res) => {
    const users = await find.findAll()
    res.render('addgroup.ejs', { usersFound: users })
  },

  post: async (req, res) => {
    const groupname = req.body.formdata[0].value
    const users = []
    await Promise.all([
      req.body.pickedArray.forEach(async function (item) {
        const user = await find.findUser(item)
        users.push(user)
      })
    ])
    console.log(users)
    await Group.create(groupname, users)
    res.redirect('/group')
  }

}
