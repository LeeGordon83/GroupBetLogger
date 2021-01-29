'use strict'
module.exports = (sequelize, DataTypes) => {
  const UserGroups = sequelize.define('UserGroups', {
    userGroupId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {})
  UserGroups.associate = function (models) {
    UserGroups.belongsTo(models.users, { foreignKey: 'userId' })
    UserGroups.belongsTo(models.group, { foreignKey: 'groupId' })
  }
  return UserGroups
}
