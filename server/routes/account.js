module.exports = {
  get: (req, res) => {
    if (req.session.user !== undefined) {
      res.render('account.ejs', { currentUser: req.session.user })
    } else {
      res.redirect('/login')
    }
  }
}
