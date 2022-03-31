const db = require('../../models')
const encrypt = require('../encryption')
const finduser = require('../find/user')

async function savePasswordDetails (userattribute) {
  const user = await finduser.findUser(userattribute.id)
  let result = ''

  if (userattribute.newpassword === userattribute.confirmpassword) {
    const newpassword = await encrypt.encryptString(userattribute.newpassword)
    if (await encrypt.isMatch(userattribute.currentpassword, user.password)) {
      await db.users.update({
        password: newpassword
      }, {
        where: {
          id: user.id
        }
      })
    } else {
      result = 'Current Password Incorrect'
    }
  } else {
    result = 'New Password and Confirmed Password Do Not Match'
  }

  const changeoutcome = {
    user: user,
    result: result
  }

  return changeoutcome
}

module.exports = {
  savePasswordDetails
}
