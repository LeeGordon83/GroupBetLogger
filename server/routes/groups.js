const findGroups = require('../lib/group')
let groups = []

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      groups = await findGroups.findGroupsWithUser(req.session.user.id)
    }
    console.log(groups[0].dataValues.users)
    req.session.user ? res.render('groups.ejs', { groups: groups }) : res.redirect('/login')
  }
}
