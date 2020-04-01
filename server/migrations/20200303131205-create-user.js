module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: 0,
        autoIncrement: 1,
        primaryKey: 1,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: 0,
        email: 1
      },
      password: {
        type: Sequelize.STRING,
        allowNull: 0,
        password: 1
      },
      createdAt: {
        allowNull: 0,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: 0,
        type: Sequelize.DATE
      },
      groupId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'group',
          key: 'id',
          as: 'groupId'
        }
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
