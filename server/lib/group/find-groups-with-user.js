const db = require('../../models')

async function findGroupsWithUser (userId) {
  const groups = await findUserGroups(userId)
  const allGroups = await populateGroupsWithUsers(groups)
  return allGroups
}

async function findUserGroups (userId) {
  return db.UserGroups.findAll({
    where: { userId }
  })
}

async function populateGroupsWithUsers (groups) {
  return Promise.all(groups.map(group => populateGroupWithUsers(group)))
}

async function populateGroupWithUsers (group) {
  return db.group.findOne({
    where: {
      id: group.dataValues.groupId
    },
    include: [{ model: db.users, as: 'users' }]

  }
  )
}

module.exports = { findGroupsWithUser }
