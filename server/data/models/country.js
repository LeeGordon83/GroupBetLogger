'use strict'
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    countryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    tableName: 'countries',
    freezeTableName: true
  })
  country.associate = function (models) {
    country.hasMany(models.league, {
      foreignKey: 'id',
      as: 'leagues'
    })
  }
  return country
}
