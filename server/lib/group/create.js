const db = require('../../models')

async function create (groupname, users) {
  const group = await db.group.create({
    groupname: groupname
  })

  await users.map(async function (item) {
    db.UserGroups.create({
      groupId: group.id,
      userId: item.dataValues.id
    })
  })
  return group
}

module.exports = {
  create
}
