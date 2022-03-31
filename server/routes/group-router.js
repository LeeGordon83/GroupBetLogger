const express = require('express')
const router = express.Router()

router.get('/groups', require('../routes/groups').get)

router.get('/add-group', require('../routes/add-group').get)
router.post('/add-group', require('../routes/add-group').post)

router.get('/:id/group-overview', require('../routes/group-overview').get)

router.get('/remove-group/:id', require('../routes/remove-group').get)

router.get('/remove-user-from-group/:id', require('../routes/remove-user-from-group').get)


module.exports = router

router