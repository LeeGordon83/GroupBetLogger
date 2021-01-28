'use strict'
module.exports = (sequelize, DataTypes) => {
  const betFixtures = sequelize.define('betFixtures', {
    fixtureId: DataTypes.INTEGER,
    betId: DataTypes.INTEGER,
    selection: DataTypes.STRING
  }, {})

  betFixtures.associate = function (models) {
    betFixtures.belongsTo(models.bets, { foreignKey: 'betId' })
    betFixtures.belongsTo(models.fixtures, { foreignKey: 'fixturesId' })
  }
  return betFixtures
}
