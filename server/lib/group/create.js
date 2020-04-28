const db = require('../../models')

async function create (groupname) {
  return db.group.create({
    groupname: groupname
  })
}

module.exports = {
  create
}
