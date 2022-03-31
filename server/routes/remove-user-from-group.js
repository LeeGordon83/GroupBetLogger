const find = require('../lib/find')
const remove = require('../lib/remove')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      const group = await find.findGroup(req.params.id)

      if (group.dataValues.users.count > 1) {
        await remove.removeUserFromGroup(req.params.id, req.session.user.id)
        res.render('group-overview.ejs', { groupFound: group.dataValues })
      } else {
        res.render('group-overview.ejs', { groupFound: group.dataValues, error: 'Unable to remove last user.' })
      }
    } else {
      res.redirect('/login')
    }
  }
}
