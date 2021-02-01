module.exports = (sequelize, DataTypes) => {
  const betSetup = sequelize.define('betSetup', {
    betSetupId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    betName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    betType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    betStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    betEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    picksPerMember: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defaultBetAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'betSetups',
    freezeTableName: true
  })

  betSetup.associate = function (models) {
    betSetup.belongsTo(models.group, { foreignKey: 'groupId', as: 'group', onDelete: 'CASCADE' })
  }

  return betSetup
}
