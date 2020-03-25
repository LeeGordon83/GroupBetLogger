const find = require('../../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('forgot-password.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const results = await find.findEmail(email)

    if (results !== null && results !== undefined) {
      res.render('forgot-password.ejs', {
        error: 'Password reset email has been sent.'
      })
    } else {
        res.render('forgot-password.ejs', {
          error: 'Email is inccorect. Please try again'
      })
    }
  }
}
