module.exports = (sequelize, DataTypes) => {
  const fixture = sequelize.define('fixtures', {
    id: {
      allowNull: 0,
      autoIncrement: 1,
      primaryKey: 1,
      type: DataTypes.INTEGER
    },
    fixture_id: {
      type: DataTypes.INTEGER
    },
    division: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    date: {
      allowNull: 0,
      type: DataTypes.DATE
    },
    homeTeam: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    homeTeamLogo: {
      type: DataTypes.STRING
    },
    awayTeam: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    awayTeamLogo: {
      type: DataTypes.STRING
    },
    williamHillHome: {
      type: DataTypes.DECIMAL
    },
    williamHillDraw: {
      type: DataTypes.DECIMAL
    },
    williamHillAway: {
      type: DataTypes.DECIMAL
    },
    finalScore: {
      type: DataTypes.STRING
    }

  }

  )

  fixture.prototype.getKickOffTime = function () {
    return this.date.toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit' })
  }

  return fixture
}
