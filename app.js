const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT

app.use(expressLayouts)
app.set('view engine', 'ejs')

/**
 *  App Configuration
 */

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))
app.use(session(require('./plugins/session')))
app.use(require('./plugins/flash'))

/**
 * Routes Definitions
 */
app.get('/', require('./server/routes/index'))

app.get('/login', require('./server/routes/login').get)
app.post('/login', require('./server/routes/login').post)

app.get('/register', require('./server/routes/register').get)
app.post('/register', require('./server/routes/register').post)

app.get('/main', require('./server/routes/main'))

/**
 * Server Activation
 */

app.listen(port)

module.exports = app

console.log('app now listening on port ' + port)
