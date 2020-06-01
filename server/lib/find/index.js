const { findEmail } = require('./email')
const { findAllFixtures } = require('./fixture')
const { findAll } = require('./all')
const { findUser } = require('./user')
const { findGroup } = require('./group')
const { findAllFixturesByDate } = require('./fixture-by-date')

module.exports = {
  findEmail,
  findAll,
  findUser,
  findGroup,
  findAllFixtures,
  findAllFixturesByDate
}
