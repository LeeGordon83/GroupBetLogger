'use strict'
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupname: DataTypes.STRING,
    allowNull: false
  }, {})
  group.associate = (models) => {
    group.hasMany(models.user, {
      foreignKey: 'id',
      as: 'users'
    })
    // associations can be defined here
  }
  return group
}
