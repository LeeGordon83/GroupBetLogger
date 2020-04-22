module.exports = (sequelize, DataTypes) => {
  const fixture = sequelize.define('fixtures', {
    id: {
      allowNull: 0,
      autoIncrement: 1,
      primaryKey: 1,
      type: Sequelize.INTEGER
    },
    division: {
      type: Sequelize.STRING,
      allowNull: 0,
    },
    date: {
      allowNull: 0,
      type: Sequelize.DATE
    },
    time: {
      allowNull: 0,
      type: Sequelize.TIME
    },
    homeTeam: {
      type: Sequelize.STRING,
      allowNull: 0,
    },
    awayTeam: {
      type: Sequelize.STRING,
      allowNull: 0,
    },
    williamHillHome: {
      type: Sequelize.DECIMAL,
      allowNull: 0,
    },
    williamHillDraw: {
      type: Sequelize.DECIMAL,
      allowNull: 0,
    },
    williamHillAway: {
      type: Sequelize.DECIMAL,
      allowNull: 0,
    }
  })

  return fixture
}
