const account = require('../lib/account')

module.exports = {
  get: async (req, res) => {
    const currentUser = req.session.user
    const userattribute = req.params.userattribute
    const userEditSelection = await account.getAccountEditDetails(currentUser, userattribute)
    console.log(userEditSelection)
    res.render('account-edit.ejs', { userEditSelection })
  }
}
