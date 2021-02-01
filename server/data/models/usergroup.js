'use strict'
module.exports = (sequelize, DataTypes) => {
  const userGroup = sequelize.define('userGroup', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    groupId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tableName: 'userGroups',
    freezeTableName: true
  })
  userGroup.associate = function (models) {
    userGroup.belongsTo(models.user, { foreignKey: 'userId' })
    userGroup.belongsTo(models.group, { foreignKey: 'groupId' })
  }
  return userGroup
}
