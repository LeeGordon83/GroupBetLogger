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
  }, {})
  group.associate = function (models) {
    group.belongsToMany(models.users, { through: 'UserGroups', foreignKey: 'groupId', as: 'users', onDelete: 'CASCADE' })
    group.hasMany(models.bets, { as: 'bets' })
  }

  return group
}
