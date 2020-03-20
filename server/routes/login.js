const encryption = require('../lib/encryption')
const find = require('../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('login.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = await find.findEmail(email)

    if (user !== null && user !== undefined) {
      if (await encryption.compare(password, user.password)) {
        res.render('main.ejs', {
          user: user.email
        }
        )
      } else {
        req.session.flash = {
          message: 'Invalid password'
        }
        res.redirect('/login')
      }
    } else {
      req.session.flash = {
        message: 'Invalid user name'
      }
      res.redirect('/login')
    }
  }
}
