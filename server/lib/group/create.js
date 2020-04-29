const db = require('../../models')

async function create (groupname, users) {
  const group = db.group.create({
    groupname: groupname
  })
  users.forEach(async function (item) {
    db.usergroups.create({
      groupId: group.groupId,
      userId: item.userId
    })
  })
}

module.exports = {
  create
}
