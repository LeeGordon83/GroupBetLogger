const find = require('../lib/find')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      const group = await find.findGroup(req.params.id)
      res.render('group-overview.ejs', { groupFound : group })
    }
    else{
      res.redirect('/login')
    }
  }
}
