var express = require('express');
var router = express.Router();

var feedback_controller = require('../controllers/feedback');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', feedback_controller.test);

router.post('/create', feedback_controller.feedback_create);

router.get('/:id', feedback_controller.feedback_details);

router.put('/:id/update', feedback_controller.feedback_update);

router.delete('/:id/delete', feedback_controller.feedback_delete);

module.exports = router;