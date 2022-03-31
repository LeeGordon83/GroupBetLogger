const dbConfig = require('./config')

// set other config ......

const value = {
  dbConfig: dbConfig,
  env: process.env.NODE_ENV || 'development'
}

module.exports = value
