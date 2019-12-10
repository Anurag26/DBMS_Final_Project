var express = require('express');
var router = express.Router();

var flight_controller = require('../controllers/flight');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', flight_controller.test);

router.post('/create', flight_controller.flight_create);

router.get('/:id', flight_controller.flight_details);

router.get('/flight/vendor/:id', flight_controller.flight_vendor);

router.put('/:id/update', flight_controller.flight_update);

router.delete('/:id/delete', flight_controller.flight_delete);

module.exports = router;