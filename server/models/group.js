module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    groupname: DataTypes.STRING,
    allowNull: false
  }, {})
  group.associate = (models) => {
    group.hasMany(models.users, {
      foreignKey: 'id',
      as: 'users'
    })
  }
  return group
}
