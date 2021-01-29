module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      email: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      password: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
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
