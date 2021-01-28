module.exports = (sequelize, DataTypes) => {
  const bets = sequelize.define('bets', {
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: 0
    },
    betActiveFrom: {
      type: DataTypes.DATE,
      allowNull: 0
    },
    pickDeadline: {
      type: DataTypes.DATE,
      allowNull: 0
    },
    betAmount: {
      type: DataTypes.INTEGER,
      allowNull: 1
    },
    BetResult: {
      type: DataTypes.BOOLEAN,
      allowNull: 0
    },
    betSetupId: {
      type: DataTypes.INTEGER,
      allowNull: 0
    }
  })

  bets.associate = function (models) {
    bets.belongsToMany(models.fixtures, { through: 'betFixtures', as: 'fixtures', foreignKey: 'betId', otherKey: 'fixturesId' })
    bets.belongsTo(models.betSetup, { foreignKey: 'betSetupId', as: 'betSetup' })
  }

  return bets
}
