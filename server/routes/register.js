const userController = require('../../controllers').register

module.exports = {
  get: (_, res) => {
    res.render('register.ejs')
  },

  post: async (req, res) => {
    userController.create(req, res)
  }
}
