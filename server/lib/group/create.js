const db = require('../../models')

async function create (group) {
  console.log(group)
  return db.group.create({
    groupname: group.body.formdata.value
  })
}

module.exports = {
  create
}
