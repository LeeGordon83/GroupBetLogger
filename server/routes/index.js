module.exports = (req, res) => {
  res.redirect(req.session.user ? '/main' : '/login')
}
