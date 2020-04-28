module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupname: DataTypes.STRING,
    allowNull: false
  }, {})
  group.associate = function (models) {
    group.belongsToMany(models.users, { through: 'usergroups', foreignKey: 'userId', as: 'users' })
  }
  return group
}
