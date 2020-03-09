module.exports = (_, res) => {
  res.render('main.ejs', {
    flash: res.locals.flash
  })
}
