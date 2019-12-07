var elasticsearch = require('elasticsearch');
var inputfile = require("../resources/flights.json");
var bulk = [];

var elasticClient = new elasticsearch.Client( {
    host: 'http://localhost:9200/',
    log: 'trace'
});

elasticClient.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});

var makebulk = function(flightsDataList,callback){
    for (var current in flightsDataList.data){
        bulk.push(
            { index: {_index: 'bookings', _type: 'flights', _id: flightsDataList.data[current].callSign } },
            {
                'callSign': flightsDataList.data[current].callSign,
                'type': flightsDataList.data[current].type,
                'origin': flightsDataList.data[current].origin,
                'destination': flightsDataList.data[current].destination,
                'capacity': flightsDataList.data[current].capacity,
                'dateOfTakeOff': flightsDataList.data[current].dateOfTakeOff,
                'dateOfLanding': flightsDataList.data[current].dateOfLanding,
                'make': flightsDataList.data[current].make,
                'segments': flightsDataList.data[current].segments,
                'price': flightsDataList.data[current].price
            }
        );
    }
    callback(bulk);
}


var indexall = function(madebulk,callback) {
    elasticClient.bulk({
                    maxRetries: 5,
                    index: 'bookings',
                    type: 'flights',
                    body: madebulk
                },function(err,resp,status) {
        if (err) {
            console.log(err);
        }
        else {
            callback(resp.items);
        }
    })
}

module.exports = {

    ping: function(req, res) {
        elasticClient.ping({
           requestTimeout: 30000
    }).then(function (resp) {
            if (resp) {
                res.status(200)
                makebulk(inputfile,function(response){
                    console.log("Bulk content prepared");
                    indexall(response,function(response) {
                        console.log(response);
                    })
                })
                return res.json({status: true, msg: 'Success! Elasticsearch cluster is up!'})
            } else {
                res.status(500);
                return res.json({status: false, msg: 'Elasticsearch cluster is down!'})
            }
        });
    },

 // Create index
  initIndex: function(req, res) {
    var indexName = req.param('index_name');
      elasticClient.indices.create({
        index: indexName
   }).then(function(resp) {
       res.status(200);
       return res.json(resp);
     }, function(err) {
       res.status(500);
       return res.json(err);
     });
 },

  // Check if index exists
 indexExists: function(req, res) {
    var indexName = req.param('index_name');
    elasticClient.indices.exists({
        index: indexName
    }).then(function(resp) {
        res.status(200);
        return res.json(resp)
     }, function(err) {
        res.status(500);
        return res.json(err);
     });
 },

// 3.  Preparing index and its mapping
initMapping: function(req, res) {
    var payload = req.param('payload');
    var indexName = req.param('index_name');
    var docType = req.param('docType');

    elasticClient.indices.putMapping({
       index: indexName,
       type: docType,
       body: payload,
       include_type_name: true
    }).then(function (resp) {
        res.status(200);
        return res.json(resp)
    }, function (err) {
        res.status(500)
        return res.json(err)
    });
},

// 4. Add/Update a document
addDocument: function(req, res) {
    var payload = req.param('payload');
    var indexName = req.param('index_name');
    var docType = req.param('docType');
    var _id = req.param("_id");

    elasticClient.index({
        index: indexName,
        type: docType,
        id: _id,
        body: payload
        }).then(function (resp) {
        res.status(200);
        return res.json(resp)
    }, function (err) {
        res.status(500)
        return res.json(err)
    });
},

// 5. Update a document
updateDocument: function(req, res) {

    var payload = req.param('payload');
    var index = req.param('index_name');
    var docType = req.param('docType');
    var _id = req.param("_id");

    elasticClient.update({
        index: index,
        type: docType,
        id: _id,
        body: payload
        }, function (err, resp) {
        if(err) return res.json(err);
        return res.json(resp);
    })
},

// 6. Search
search: function(req, res) {

    var payload = req.param('payload');
    var indexName = req.param('index_name');
    var docType = req.param('docType');

    elasticClient.search({
         index: indexName,
         type: docType,
         body: payload
         }).then(function (resp) {
        console.log(resp);
        resp.hits.hits.forEach(function(hit){
            console.log(hit);
        })
        return res.json(resp)
    }, function (err) {
        console.log(err.message);
        return res.json(err.message)
    });
},

// Delete a document from an index
deleteDocument: function(req, res) {
    var payload = req.param('payload');
    var index = req.param('index_name');
    var docType = req.param('docType');
    var _id = req.param("_id");

    elasticClient.delete({
         index: index,
         type: docType,
         id: _id,
         }, function(err, resp) {
        if (err) return res.json(err);
        return res.json(resp);
    });
},

// Delete all
deleteAll: function(req, res){
    elasticClient.indices.delete({
          index: '_all'
          }, function(err, resp) {
        if (err) {
            console.error(err.message);
            return res.json(err);
        } else {
            console.log('Indexes have been deleted!', resp);
            return res.json(resp)
        }
    });
}
};