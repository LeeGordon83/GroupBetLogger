module.exports = (sequelize, DataTypes) => {
  const betSetup = sequelize.define('betSetup', {
    betName: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    betType: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    betStart: {
      type: DataTypes.DATE,
      allowNull: 0
    },
    betEnd: {
      type: DataTypes.DATE,
      allowNull: 1
    },
    picksPerMember: {
      type: DataTypes.INTEGER,
      allowNull: 0
    },
    defaultBetAmount: {
      type: DataTypes.INTEGER,
      allowNull: 1
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: 1
    }
  })

  betSetup.associate = function (models) {
    betSetup.belongsTo(models.group, { foreignKey: 'groupId', as: 'group', onDelete: 'CASCADE' })
  }

  return betSetup
}
