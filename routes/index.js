"use strict"

const routes = require('express').Router()
const userRouter = require('./user')
const roomController = require('./room');

routes.use('/users', userRouter)
routes.use('/', roomController)

module.exports = routes