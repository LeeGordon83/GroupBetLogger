module.exports = {
  get: (req, res) => {
    req.session.user ? res.render('groups.ejs') : res.redirect('/login')
  }
}
