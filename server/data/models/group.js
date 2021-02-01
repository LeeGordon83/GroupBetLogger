module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    groupname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'groups',
    freezeTableName: true
  })
  group.associate = function (models) {
    group.belongsToMany(models.user, { through: 'userGroups', foreignKey: 'groupId', as: 'users', onDelete: 'CASCADE' })
    group.hasMany(models.bet, { as: 'bets' })
  }

  return group
}
