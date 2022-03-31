const express = require('express')
const router = express.Router()


router.get('/refresh-fixtures', require('../routes/refresh-fixtures').get)

router.get('/get-fixtures-by-date', require('../routes/get-fixtures-by-date').get)


module.exports = router
