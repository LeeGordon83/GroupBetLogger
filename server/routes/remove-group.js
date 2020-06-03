const find = require('../lib/find')
const remove = require('../lib/remove')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      const group = await find.findGroup(req.params.id)

      await remove.removeUsersFromGroup(req.params.id, group.dataValues.users)
      await remove.removeGroup(req.params.id)

      res.redirect('/groups')
    }
    else{
      res.redirect('/login')
    }
  }
}
