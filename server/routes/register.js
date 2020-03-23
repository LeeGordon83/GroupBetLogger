const Register = require('../lib/registration')
const find = require('../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('register.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const usermail = req.body.email
    const user = await find.findEmail(usermail)

    if (user !== null && user !== undefined) {
      req.session.flash = {
        message: 'There is already an account with that email.'
      }
      res.redirect('/register')
    } else {
      const newUser = await Register.register(req)
      req.session.user = newUser.id
      res.render('main.ejs', {
        user: newUser.firstname + ' ' + newUser.surname
      }
      )
    }
  }
}
