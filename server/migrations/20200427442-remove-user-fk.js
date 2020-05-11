module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'groupId')
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'groupId',
        {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'groups',
            key: 'id',
            as: 'groupId'
          }
        }
      )
    ])
  }
}
