'use strict'
module.exports = (sequelize, DataTypes) => {
  const league = sequelize.define('league', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {})
  league.associate = function (models) {
    league.belongsTo(models.country, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    })
  }
  return league
}
