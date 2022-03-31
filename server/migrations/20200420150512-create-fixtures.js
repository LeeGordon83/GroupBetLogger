module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fixtures', {
      id: {
        allowNull: 0,
        autoIncrement: 1,
        primaryKey: 1,
        type: Sequelize.INTEGER
      },
      fixture_id: {
        type: Sequelize.INTEGER
      },
      division: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      date: {
        allowNull: 0,
        type: Sequelize.DATE
      },
      homeTeam: {
        type: Sequelize.STRING,
        allowNull: 0
      },
      homeTeamLogo: {
        type: Sequelize.STRING
      },
      awayTeam: {
        type: Sequelize.STRING,
        allowNull: 0
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
        allowNull: 0,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: 0,
        type: Sequelize.DATE
      },
      finalScore: {
        type: Sequelize.STRING
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fixtures')
  }
}
