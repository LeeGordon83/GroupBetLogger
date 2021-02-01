module.exports = (sequelize, DataTypes) => {
  const fixture = sequelize.define('fixture', {
    fixtureId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    fixtureIdSource: {
      type: DataTypes.INTEGER
    },
    division: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    homeTeam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    homeTeamLogo: {
      type: DataTypes.STRING
    },
    awayTeam: {
      type: DataTypes.STRING,
      allowNull: false
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
  }, {
    tableName: 'fixtures',
    freezeTableName: true
  })

  fixture.associate = (models) => {
    // fixture.belongsToMany(models.bets, { through: 'betFixtures', foreignKey: 'fixtureId', as: 'bets', otherKey: 'betsId' })
  }

  fixture.prototype.getKickOffTime = function () {
    const hour = this.date.getHours()
    let minutes = this.date.getMinutes()
    minutes = minutes > 9 ? minutes : '0' + minutes
    const time = hour + ':' + minutes
    return time
  }

  return fixture
}
