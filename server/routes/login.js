const User = require('../../lib/users')
const bcrypt = require('bcrypt')

module.exports = {
  get: (_, res) => {
    res.render('login.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const results = await User.retrieveData(email)

    if (!User.find(results)) {
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
