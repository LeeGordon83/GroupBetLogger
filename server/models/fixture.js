module.exports = (sequelize, DataTypes) => {
  const fixture = sequelize.define('fixtures', {
    id: {
      allowNull: 0,
      autoIncrement: 1,
      primaryKey: 1,
      type: DataTypes.INTEGER
    },
    division: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    date: {
      allowNull: 0,
      type: DataTypes.STRING
    },
    time: {
      allowNull: 0,
      type: DataTypes.STRING
    },
    homeTeam: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    awayTeam: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    williamHillHome: {
      type: DataTypes.DECIMAL,
      allowNull: 0
    },
    williamHillDraw: {
      type: DataTypes.DECIMAL,
      allowNull: 0
    },
    williamHillAway: {
      type: DataTypes.DECIMAL,
      allowNull: 0
    }
  })

  return fixture
}
