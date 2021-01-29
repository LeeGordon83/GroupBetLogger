module.exports = (sequelize, DataTypes) => {
  const bet = sequelize.define('bet', {
    betId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    active: {
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
  }, {
    tableName: 'bets',
    freezeTableName: true
  })

  bet.associate = function (models) {
    bet.belongsToMany(models.fixture, { through: 'betFixtures', as: 'fixtures', foreignKey: 'betId' })
    bet.belongsTo(models.betSetup, { foreignKey: 'betSetupId', as: 'betSetup' })
  }

  return bet
}
