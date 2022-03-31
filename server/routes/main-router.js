const express = require('express')
const router = express.Router()

router.get('/main', require('./main').get)
router.get('/about', require('./about').get)

module.exports = router
