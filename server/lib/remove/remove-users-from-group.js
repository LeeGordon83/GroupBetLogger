const { db } = require('../../data')()

async function removeUsersFromGroup (groupId, users) {
  await removeGroupUsers(groupId, users)
}

async function removeGroupUsers (groupId, users) {
  return Promise.all(users.map(user => removeGroupUser(groupId, user)))
}

async function removeGroupUser (groupId, user) {
  return db.userGroup.destroy({
    where: {
      groupId: groupId,
      userId: user.id
    }
  })
}

module.exports = { removeUsersFromGroup }
