"use strict"

const routes = require('express').Router()
const userRouter = require('./user')
const roomRouter = require('./room');

routes.use('/', roomRouter);
routes.use('/users', userRouter)

module.exports = routes