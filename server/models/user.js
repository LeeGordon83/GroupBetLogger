module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('users', {
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
      allowNull: 0,
      password: 1
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: 0,
      password: 1
    }
  })

  return user
}
