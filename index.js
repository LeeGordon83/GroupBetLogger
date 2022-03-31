const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3000
const mainrouter = require('./server/routes/main-router')
const accountrouter = require('./server/routes/account-router')
const grouprouter = require('./server/routes/group-router.js')
const fixturesrouter = require('./server/routes/fixtures-router.js')

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
  secret: crypto.randomBytes(64).toString('hex'),
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 300000000000
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

app.use(function (req, res, next) {
  res.locals.user = req.session.user
  next()
})

/**
 * Routes Definitions
 */
app.get('/', require('./server/routes/index'))

app.use(mainrouter)
app.use(accountrouter)
app.use(grouprouter)
app.use(fixturesrouter)

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app
