var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);

router.post('/create', user_controller.user_create);

router.get('/:id', user_controller.user_details);

router.get('/email/:email', user_controller.user_details_email);

router.put('/:email/update', user_controller.user_update);

router.delete('/:email/delete', user_controller.user_delete);

module.exports = router;