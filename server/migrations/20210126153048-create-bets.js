'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      betActiveFrom: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pickDeadline: {
        allowNull: true,
        type: Sequelize.DATE
      },
      betAmount: {
        allowNull: true,
        type: Sequelize.DATE
      },
      picksPerMember: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      defaultBetAmount: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      betSetupId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bets')
  }
}
