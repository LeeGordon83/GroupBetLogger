module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'users',
        'firstname',
        {
          type: Sequelize.STRING,
          allowNull: 0
        }
      ),
      queryInterface.addColumn(
        'users',
        'surname',
        {
          type: Sequelize.STRING,
          allowNull: 0
        }
      )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('users', 'firstname'),
      queryInterface.removeColumn('users', 'surname')
    ])
  }
}
