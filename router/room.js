var express = require('express');
var router = express.Router();

const roomController = require('../controllers/roomController');

router.post('/', roomController.create);
router.get('/', roomController.findAll);
router.post('/join/:id', roomController.update)

module.exports = router;
