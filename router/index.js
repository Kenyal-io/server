var express = require('express');
var router = express.Router();
const roomRouter = require('./room');

router.use('/', roomRouter);

module.exports = router;
