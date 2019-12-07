var express = require('express');
var router = express.Router();

/*=============================================================================
                                R O U T E   A P I s
===============================================================================*/

var feedback_controller = require('../controllers/feedback');
var ELASTICSEARCH_Service = require('../controllers/search');

// a simple test url to check that all of our files are communicating correctly.
router.get('/ping', ELASTICSEARCH_Service.ping);

router.post('/index/init', ELASTICSEARCH_Service.initIndex);

router.post('/index/check', ELASTICSEARCH_Service.indexExists);

router.post('/index/mapping', ELASTICSEARCH_Service.initMapping);

router.post('/add', ELASTICSEARCH_Service.addDocument);

router.post('/search', ELASTICSEARCH_Service.search);

router.put('/update', ELASTICSEARCH_Service.updateDocument);

router.delete('/delete-document', ELASTICSEARCH_Service.deleteDocument);

router.delete('/delete_all', ELASTICSEARCH_Service.deleteAll);

module.exports = router;