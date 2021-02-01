const { db } = require('../../data')()

async function createGroupsWithUsers (groupname, users) {
  const group = await createGroup(groupname)
  await createUserGroups(group.id, users)
}

async function createGroup (groupname) {
  return db.group.create({ groupname })
}

async function createUserGroups (groupId, users) {
  return Promise.all(users.map(user => createUserGroup(groupId, user)))
}

async function createUserGroup (groupId, user) {
  return db.userGroup.create({
    groupId: groupId,
    userId: user.id
  })
}

module.exports = { createGroupsWithUsers }
