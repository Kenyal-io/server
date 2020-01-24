"use strict"

const User = require('../models/User')
const jwt = require('jsonwebtoken')

class userController {
    static register(req, res, next) {
        const { username } = req.body
        User.create({
            username,
            room: ""
        })
            .then((user) => {
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET)
                res.status(201).json({ user, token })
            }).catch((err) => {
                next(err)
            });
    }
    static delete(req, res, next) {
        User.findByIdAndDelete({
            _id: req.params.id
        })
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                next(err)
            });
    }
}

module.exports = userController