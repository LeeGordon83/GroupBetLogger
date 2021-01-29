module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: 0,
      email: 1
    },
    password: {
      type: DataTypes.STRING,
      allowNull: 0,
      password: 1
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: 0
    }
  }, {
    tableName: 'users',
    freezeTableName: true
  })

  user.associate = function (models) {
    user.belongsToMany(models.group, { through: 'userGroups', foreignKey: 'userId', as: 'groups', onDelete: 'CASCADE' })
  }

  return user
}
