'use strict';

const Room = require('../models/room');

class RoomController {
	static create(req, res, next) {
		const obj = {
			name: req.body.name,
			player: [req.body.user]
		};
		Room.create(obj)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}

	static findAll(req, res, next) {
		Room.find()
			.then((datas) => {
				// res.send(datas);
				res.status(200).json(datas);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}

	static update(req, res, next) {
		// console.log(req.params.id, req.body.player)
		Room.findById(req.params.id)
			.then(data => {
				let user = data.player
				user.push(req.body.player)
				return Room.findByIdAndUpdate(req.params.id, {
					player: user
				})
			})
			.then((data) => {
				res.status(200).json(data)
			})
			.catch(err => {
				res.status(500).json(err);
			})
	}

	static delete(req, res, next) {
		Room.findByIdAndDelete(req.params.id)
			.then((data) => {
				res.status(200).json(data)
			})
			.catch(err => {
				res.status(500).json(err)
			})
	}
}

module.exports = RoomController;
