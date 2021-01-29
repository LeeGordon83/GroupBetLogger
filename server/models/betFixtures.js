'use strict'
module.exports = (sequelize, DataTypes) => {
  const betFixtures = sequelize.define('betFixtures', {
    betFixtureId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fixtureId: DataTypes.INTEGER,
    betId: DataTypes.INTEGER,
    selection: DataTypes.STRING
  }, {})

  betFixtures.associate = function (models) {
    betFixtures.belongsTo(models.bets, { foreignKey: 'betId' })
    betFixtures.belongsTo(models.fixture, { foreignKey: 'fixtureId' })
  }
  return betFixtures
}
