module.exports = (sequelize, DataTypes) => {
  const bet = sequelize.define('bet', {
    betId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    betActiveFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pickDeadline: {
      type: DataTypes.DATE,
      allowNull: false
    },
    betAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BetResult: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    betSetupId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
