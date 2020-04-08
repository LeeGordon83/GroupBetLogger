const find = require('../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('forgot-password.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const user = await find.findEmail(email)

    if (user !== null && user !== undefined) {
      res.render('forgot-password.ejs', {
        error: 'Password reset email has been sent to ' + user.email
      })
    } else {
      res.render('forgot-password.ejs', {
        error: 'Email is inccorect. Please try again.'
      })
    }
  }
}
