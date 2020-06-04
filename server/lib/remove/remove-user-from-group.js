const db = require('../../models')

async function removeUserFromGroup (groupId, userId) {
  return db.UserGroups.destroy({
    where: {groupId: groupId,
    userId: userId }
  })
}

module.exports = { removeUserFromGroup }
