const { db } = require('../../data')()

async function removeUserFromGroup (groupId, userId) {
  return db.userGroup.destroy({
    where: {
      groupId: groupId,
      userId: userId
    }
  })
}

module.exports = { removeUserFromGroup }
