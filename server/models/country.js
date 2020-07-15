'use strict'
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {})
  country.associate = function (models) {
    country.hasMany(models.league, {
      foreignKey: 'id',
      as: 'leagues'
    })
  }
  return country
}
