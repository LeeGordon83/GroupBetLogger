const bcrypt = require('bcrypt')
const find = require('../../lib/find')

module.exports = {
  get: (_, res) => {
    res.render('login.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const results = await find.findEmail(email)

    if (results === null && results === undefined) {
      req.session.flash = {
        message: 'Invalid user name'
      }
      res.redirect('/login')
    } else {
      if (await bcrypt.compareSync(password, results.password)) {
        req.session.user = results.email
        res.render('main.ejs', {
          user: results.email
        }
        )
      } else {
        req.session.flash = {
          message: 'Invalid password'
        }
        res.redirect('/login')
      }
    }
  }
}
