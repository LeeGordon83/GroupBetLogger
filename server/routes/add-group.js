const find = require('../lib/find')
const { createGroupsWithUsers } = require('../lib/group')

const users = []

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      const users = await find.findAll()
      res.render('add-group.ejs', { usersFound: users })
    } else {
      res.redirect('/login')
    }
  },

  post: async (req, res) => {
    if (req.session.user !== undefined) {
      const groupname = req.body.formdata[0].value

      const pickedArray = req.body.pickedArray

      await Promise.all(
        pickedArray.map(async function (item) {
          const user = await find.findUser(item)
          users.push(user)
        })
      )

      await createGroupsWithUsers(groupname, users)
    }
    res.redirect('/login')
  }

}
