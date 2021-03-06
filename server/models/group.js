module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})
  group.associate = function (models) {
    group.belongsToMany(models.users, { through: 'UserGroups', foreignKey: 'groupId', as: 'users', onDelete: 'CASCADE' })
  }
  return group
}
