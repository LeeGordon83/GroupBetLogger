const bcrypt = require('bcrypt')

async function isMatch (value, compareTo) {
  const isMatch = await bcrypt.compare(value, compareTo)
  console.log(isMatch)
  return isMatch
}

module.exports = {
  isMatch
}
