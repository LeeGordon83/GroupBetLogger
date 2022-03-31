const express = require('express')
const router = express.Router()


router.get('/register', require('../routes/register').get)
router.post('/register', require('../routes/register').post)

router.get('/login', require('../routes/login').get)
router.post('/login', require('../routes/login').post)

router.get('/account', require('../routes/account').get)
router.get('/account-edit/:userattribute', require('../routes/account-edit').get)
router.post('/account-edit/', require('../routes/account-edit').post)

router.get('/forgot-password', require('../routes/forgot-password').get)
router.post('/forgot-password', require('../routes/forgot-password').post)

router.get('/logout', require('../routes/logout'))


module.exports = router

