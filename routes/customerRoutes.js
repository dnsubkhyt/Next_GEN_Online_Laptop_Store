
const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')
const authMiddleware = require('../middleware/auth')

router.post('/signup', customerController.signup)

router.post('/login', customerController.login)


router.get('/me', authMiddleware, customerController.getCustomerData)

module.exports = router
