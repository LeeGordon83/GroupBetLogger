'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('fixtures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fixture_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      division: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      homeTeam: {
        type: Sequelize.STRING,
        allowNull: false
      },
      homeTeamLogo: {
        type: Sequelize.STRING
      },
      awayTeam: {
        type: Sequelize.STRING,
        allowNull: false
      },
      awayTeamLogo: {
        type: Sequelize.STRING
      },
      williamHillHome: {
        type: Sequelize.DECIMAL
      },
      williamHillDraw: {
        type: Sequelize.DECIMAL
      },
      williamHillAway: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      finalScore: {
        type: Sequelize.STRING
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fixtures')
  }
}
