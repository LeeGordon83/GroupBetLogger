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
    }
  })

  user.associate = function (models) {
    // associations can be defined here
  }
  return user
}
