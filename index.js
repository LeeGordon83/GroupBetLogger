const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
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
app.use('/css', express.static('./node_modules/bootstrap/dist/css'))
app.use(cookieParser())

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'somerandomstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 30000
  }
}))

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid')
  }
  next()
})

/**
 * Routes Definitions
 */
app.get('/', require('./server/routes/index'))

app.get('/login', require('./server/routes/login').get)
app.post('/login', require('./server/routes/login').post)

app.get('/register', require('./server/routes/register').get)
app.post('/register', require('./server/routes/register').post)

app.get('/forgot-password', require('./server/routes/forgot-password').get)
app.post('/forgot-password', require('./server/routes/forgot-password').post)

app.get('/groups', require('./server/routes/groups').get)

app.get('/logout', require('./server/routes/logout'))

app.get('/main', require('./server/routes/main'))

/**
 * Server Activation
 */

app.listen(port)

module.exports = app
