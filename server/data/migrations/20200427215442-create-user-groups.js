'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userGroups', {
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      groupId: {
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
    return queryInterface.dropTable('userGroups')
  }
}
