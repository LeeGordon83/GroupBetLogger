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
app.get('/', require('./routes/index'))

app.get('/login', require('./routes/login'))
/**
 * app.post('/login', require('./routes/login'))
app.get('/logout', require('./routes/logout'))
*/

app.get('/user', (req, res) => {
  res.render('user.ejs', {
    title: 'Profile',
    userProfile: {
      nickname: 'Lee Gordon'
    }
  })
})

/**
 * Server Activation
 */

app.listen(port)

module.exports = app

console.log('app now listening on port ' + port)
