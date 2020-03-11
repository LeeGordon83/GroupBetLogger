const bcrypt = require('bcrypt')

async function isMatch (value, compareTo) {
  const isMatch = await bcrypt.compare(value, compareTo)
  return isMatch
}

module.exports = {
  isMatch
}
