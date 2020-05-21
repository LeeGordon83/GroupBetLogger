const db = require('../../models')

async function findGroup (id) {
  return db.group.findOne({
    where: { id },
    include: [{ model: db.users, as: 'users' }]

  }
  )
}

module.exports = {
  findGroup
}
