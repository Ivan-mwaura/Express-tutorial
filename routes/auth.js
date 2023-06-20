const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')


//login route
//router.post('/', auth )

router.route('/').post(auth)

module.exports = router;