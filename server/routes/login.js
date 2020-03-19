const login = require('../lib/login')

module.exports = {
  get: (_, res) => {
    res.render('login.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = login.userlogin(email, password)
    console.log(user)

    if (user === null) {
      req.session.flash = {
        message: 'Invalid user name'
      }
      res.redirect('/login')
    }
  }
}
