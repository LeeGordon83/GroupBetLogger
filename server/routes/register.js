const Register = require('../../lib/registration')
const find = require('../../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('register.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const usermail = req.body.email
    const password = req.body.password
    const results = await find.findEmail(usermail)

    if (results !== null && results !== undefined) {
      req.session.flash = {
        message: 'There is already an account with that email.'
      }
      res.redirect('/register')
    } else {
      const newUser = await Register.register(usermail, password)
      req.session.user = newUser.id
      res.render('main.ejs', {
        user: newUser.email
      }
      )
    }
  }
}
