const Register = require('../lib/registration')
const find = require('../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('register.ejs')
  },

  post: async (req, res) => {
    const usermail = req.body.email
    const user = await find.findEmail(usermail)

    if (user !== null && user !== undefined) {
      res.render('register.ejs', {
        error: 'Email is already registered please login'
      })
    } else {
      const newUser = await Register.register(req)
      req.session.user = newUser
      res.redirect('/main')
    }
  }
}
