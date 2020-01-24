"use strict"

const routes = require('express').Router()
const userRouter = require('./user')

routes.use('/users', userRouter)

module.exports = routes