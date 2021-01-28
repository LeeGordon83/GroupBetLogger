const find = require('../find')
const db = require('../../models')

async function saveAccountDetails (userattribute) {
  const user = await find.findUser(userattribute.id)

  switch (userattribute.field) {
    case 'firstname':
      user.firstname = userattribute.firstname
      break
    case 'surname':
      user.surname = userattribute.surname
      break
    case 'email':
      user.email = userattribute.email
  }

  await db.users.update({
    firstname: user.firstname,
    surname: user.surname,
    email: user.email
  }, {
    where: {
      id: user.id
    }
  })

  return user
}

module.exports = {
  saveAccountDetails
}
