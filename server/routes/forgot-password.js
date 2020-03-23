const find = require('../../lib/find')

module.exports = {
  get: (req, res) => {
    res.render('forgot-pasword.ejs', {
      flash: res.locals.flash })
  }
}
