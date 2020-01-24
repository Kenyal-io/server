'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./router/index');

mongoose.connect(
	'mongodb://localhost:27017/ularkadut',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	function() {
		console.log(`Connected to MongoDB`);
	}
);

app.use('/', router);

app.listen(PORT, () => {
	console.log(`App listening on port = ${PORT}`);
});
