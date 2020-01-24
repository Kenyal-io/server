'use strict';

const express = require('express');
const app = express();
// const PORT = 3000;
// const mongoose = require('mongoose');
// const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// mongoose.connect('mongodb://localhose:27017/ularkadut', 
// {useNewUrlParser: true, useUnifiedTopology: true}, function() {
//     console.log(`Connected to MongoDB`);
// })

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port = ${process.env.PORT || 3000}`);
})