const find = require('../lib/find')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      group = await find.findGroup(req.params.id)
      res.render('group-overview.ejs', { groupFound : group.dataValues })
    }
    else{
      res.redirect('/login')
    }
  }
}
