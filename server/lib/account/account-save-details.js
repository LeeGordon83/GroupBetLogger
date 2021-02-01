const find = require('../find')
const { db } = require('../../data')()

async function saveAccountDetails (userattribute) {
  const user = await find.findUser(userattribute.userId)

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

  await db.user.update({
    firstname: user.firstname,
    surname: user.surname,
    email: user.email
  }, {
    where: {
      userId: user.userId
    }
  })

  return user
}

module.exports = {
  saveAccountDetails
}
