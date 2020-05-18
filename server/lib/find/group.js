const db = require('../../models')

async function findGroup (id) {
  const group = await db.group.findOne({
    where: { id }
  })

  return group
}

module.exports = {
  findGroup
}
