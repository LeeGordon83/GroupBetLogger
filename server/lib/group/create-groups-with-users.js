const db = require('../../models')

async function createGroupsWithUsers (groupName, users) {
  const group = await createGroup(groupName)
  await createUserGroups(group.id, users)
}

async function createGroup (groupName) {
  return db.group.create({ groupName })
}

async function createUserGroups (groupId, users) {
  return Promise.all(users.map(user => createUserGroup(groupId, user)))
}

async function createUserGroup (groupId, user) {
  return db.UserGroups.create({
    groupId: groupId,
    userId: user.dataValues.id
  })
}

module.exports = { createGroupsWithUsers }
