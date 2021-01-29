'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('betsetups', {
      betSetupId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      betName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      betType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      betStart: {
        allowNull: false,
        type: Sequelize.DATE
      },
      betEnd: {
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
      groupId: {
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
    await queryInterface.dropTable('betsetups')
  }
}
