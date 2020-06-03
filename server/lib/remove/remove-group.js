const db = require('../../models')

async function removeGroup (id) {
  return db.group.destroy({
    where: { id }
  }
  )
}

module.exports = {
  removeGroup
}
