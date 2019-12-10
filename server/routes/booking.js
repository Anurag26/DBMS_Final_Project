var express = require('express');
var router = express.Router();

var order_controller = require('../controllers/booking');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', order_controller.test);

router.post('/create', order_controller.order_create);

router.get('/:id', order_controller.order_details);

router.get('/all/allBookings', order_controller.order_all);

router.put('/:id/update', order_controller.order_update);

router.delete('/:id/delete', order_controller.order_delete);

module.exports = router;