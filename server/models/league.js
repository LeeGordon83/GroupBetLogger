'use strict'
module.exports = (sequelize, DataTypes) => {
  const league = sequelize.define('league', {
    leagueId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {})
  league.associate = function (models) {
    league.belongsTo(models.country, {
      foreignKey: 'countryId',
      onDelete: 'CASCADE'
    })
  }
  return league
}
