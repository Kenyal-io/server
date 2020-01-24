'use strict';

require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

io.on('connection', function (socket) {
	socket.on('SEND_MESSAGE', function (data) {
		io.emit('MESSAGE', data)
	});
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/ularkadut',
	{
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log(`Connected to MongoDB`);

	}).catch((err) => {
		console.log((err));
	})

app.use('/', routes)
app.use(errorHandler)

server.listen(PORT, () => {
	console.log(`App listening on port = ${PORT}`);
})
