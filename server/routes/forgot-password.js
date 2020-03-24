const find = require('../../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('forgot-password.ejs', {
      flash: res.locals.flash })
  },

  post: async (req, res) => {
    const email = req.body.email
    const results = await find.findEmail(email)

    if (results === null && results === undefined) {
      req.session.flash = {
        message: 'Invalid user name'
      }
      res.redirect('/forgot-password')
    } else {
      req.session.flash = { 
        message: 'Email sent'
      }   
      res.redirect('/forgot-password')
      }
    }
  }
