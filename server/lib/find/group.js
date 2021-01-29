const { db } = require('../../data')()

async function findGroup (id) {
  return db.group.findOne({
    where: { id },
    include: [{ model: db.user, as: 'users' }]

  }
  )
}

module.exports = {
  findGroup
}
