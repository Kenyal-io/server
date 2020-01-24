"use strict"

const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/', userController.register)
router.delete('/delete/:id', userController.delete)

module.exports = router