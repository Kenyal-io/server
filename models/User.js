"use strict"

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Required username"],
        validate: {
            validator: function (v) {
                return mongoose.models.User.findOne({ username: v })
                    .then((result) => {
                        if (result) {
                            return false
                        } else {
                            return true
                        }
                    }).catch((err) => {
                        console.log(err)
                    });
            },
            message: "username already registered"
        }
    },
    room: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User