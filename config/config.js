require('dotenv').config()

// take values from environment variables using defaults if not present
require('dotenv').config()
const dbConfig = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB || 'groupbetlogger',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres'
}

// inform sequelize to use same config regardless of environment to reduce duplication
const config = {
  development: dbConfig,
  production: dbConfig,
  test: dbConfig
}

// export config so can be used elsewhere
module.exports = config
