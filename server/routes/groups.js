module.exports = {
  get: (req, res) => {
    res.render('groups.ejs', {
      user: req.session.user.firstname + ' ' + req.session.user.surname
    })
  }}
