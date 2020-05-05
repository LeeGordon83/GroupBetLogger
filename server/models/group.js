module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupname: DataTypes.STRING,
    allowNull: false
  }, {})
  group.associate = function (models) {
    group.belongsToMany(models.users, { through: 'UserGroups', foreignKey: 'userId', as: 'users', onDelete: 'CASCADE' })
  }
  return group
}
