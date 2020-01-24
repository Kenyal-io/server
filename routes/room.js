var express = require('express');
var router = express.Router();

const roomController = require('../controllers/roomController');

router.post('/', roomController.create);
router.get('/', roomController.findAll);
router.post('/join/:id', roomController.update)
router.delete('/:id', roomController.delete)

module.exports = router;
