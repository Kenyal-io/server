'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

io.on('connection', function (socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function (data) {
        io.emit('MESSAGE', data)
    });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhose:27017/ularkadut',
    { useNewUrlParser: true, useUnifiedTopology: true }, function () {
        console.log(`Connected to MongoDB`);
    })

server.listen(PORT, () => {
    console.log(`App listening on port = ${PORT}`);
})