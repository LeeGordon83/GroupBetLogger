const account = require('../lib/account')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      const currentUser = req.session.user
      const userattribute = req.params.userattribute
      const userEditSelection = await account.getAccountEditDetails(currentUser, userattribute)
      res.render('account-edit.ejs', { userEditSelection })
    } else {
      res.redirect('/login')
    }
  },
  post: async (req, res) => {
    if (req.body.field === 'password') {
      const changeoutcome = await account.savePasswordDetails(req.body)
      req.session.user = changeoutcome.user
      if (changeoutcome.result === 'success') {
        res.redirect('/account')
      } else {
        const userEditSelection = await account.getAccountEditDetails(changeoutcome.user, 'password')
        res.render('account-edit.ejs', {
          userEditSelection,
          error: changeoutcome.result

        })
      }
    } else {
      const user = await account.saveAccountDetails(req.body)
      req.session.user = user
    }
  }
}
