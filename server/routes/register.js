const User = require('../../lib/users')

module.exports = {
  get: (req, res) => {
    res.render('register.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const results = await User.retrieveData(email)

    if (User.find(results)) {
      req.session.flash = {
        message: 'There is already an account with that email.'
      }
      res.redirect('/register')
    } else {
      const newUser = await User.create(email, password)
      req.session.user = newUser.id
      res.render('main.ejs', {
        user: newUser.email
      }
      )
    }
  }
}
