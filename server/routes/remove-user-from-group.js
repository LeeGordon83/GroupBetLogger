const find = require('../lib/find')
const remove = require('../lib/remove')
const { findUser } = require('../lib/find/user')
const user = require('../lib/find/user')

module.exports = {
  get: async (req, res) => {
    if (req.session.user !== undefined) {
      var data = {
        "user-group": {
          "group": req.params.groupFound.id,
          "user": req.params.groupFound.users[user].id
        }
      }
      
      //const group = await find.findGroup(req.params[0].id)
      // const user = await findUser(req.params.user.id)

      console.log(data)

    //   if(group.dataValues.users.length > 1)
    //   {
    //     await remove.removeUserFromGroup(req.params.id, req.session.user.id)
    //     const newGroup = await find.findGroup(req.params.id)
    //     res.render('group-overview.ejs', { groupFound: newGroup.dataValues })
    //   }
    //   else
    //   {
    //     res.render('group-overview.ejs', { groupFound: group.dataValues, error: 'Unable to remove last user.' })
    //   }           
    // }
    // else{
      res.redirect('/login')
    }
  }
}
