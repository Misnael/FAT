const express = require('express')
const router = express.Router()
const {index, register, login} = require('../config/router')


router.get('/', index)
router.get('/register', register)
router.get('/login', login)



module.exports = router