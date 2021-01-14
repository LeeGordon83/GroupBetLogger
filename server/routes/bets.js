module.exports = {
  get: async (req, res) => {
    req.session.user ? res.render('bets.ejs') : res.redirect('/login')
  }
}
