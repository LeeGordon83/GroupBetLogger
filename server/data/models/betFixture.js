'use strict'
module.exports = (sequelize, DataTypes) => {
  const betFixtures = sequelize.define('betFixture', {
    fixtureId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    betId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    selection: DataTypes.STRING
  }, {
    tableName: 'betFixtures',
    freezeTableName: true
  })

  betFixtures.associate = function (models) {
    betFixtures.belongsTo(models.bet, { foreignKey: 'betId' })
    betFixtures.belongsTo(models.fixture, { foreignKey: 'fixtureId' })
  }
  return betFixtures
}
