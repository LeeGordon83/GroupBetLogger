'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('betFixtures', {
      fixtureId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      betId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('betFixtures')
  }
}
