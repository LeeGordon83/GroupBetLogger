
module.exports = (req, res) => {
  if (!req.session.user) {
    res.render('login.ejs'
    )
  }
  res.render('main.ejs', {
    user: req.session.user.firstname + ' ' + req.session.user.surname
  })
}
