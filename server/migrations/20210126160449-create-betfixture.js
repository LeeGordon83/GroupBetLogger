'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('betFixtures', {
      betFixtureId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fixtureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'fixtures',
          key: 'fixtureId'
        }
      },
      betId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'bets',
          key: 'betId'
        }
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