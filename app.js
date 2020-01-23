'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhose:27017/ularkadut', 
{useNewUrlParser: true, useUnifiedTopology: true}, function() {
    console.log(`Connected to MongoDB`);
})

app.listen(PORT, () => {
    console.log(`App listening on port = ${PORT}`);
})