'use strict';

const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
	name   : {
		type     : String,
		required : [ true, 'room name is required' ]
	},
	player : {
		type : []
	}
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
