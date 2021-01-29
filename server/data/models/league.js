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
  }, {
    tableName: 'leagues',
    freezeTableName: true
  })
  league.associate = function (models) {
    league.belongsTo(models.countries, {
      foreignKey: 'countryId',
      onDelete: 'CASCADE'
    })
  }
  return league
}
