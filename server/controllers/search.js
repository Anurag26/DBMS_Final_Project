const elasticsearch = require('elasticsearch');
const inputfile = require("../resources/flights.json");
const hotelsinputfile = require("../resources/hotels.json");
const airportsinputfile = require("../resources/airports.json");

const flightsInputFile = require("../resources/flights.json");
const flightsModel = require("../models/flight.js");

const hotelsInputFile = require("../resources/hotels.json");
const hotelsModel = require("../models/hotel.js");

const airportsInputFile = require("../resources/airports.json");
const airportsModel = require("../models/airports.js");

const { log } = console

var airports_bulk = [];
var flights_bulk = [];
var hotels_bulk = [];

const elasticClient = new elasticsearch.Client( {
    host: process.env.ELASTICSEARCH_URI,
    log: 'trace'
});

elasticClient.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});



var makebulk = function(flightsDataList,callback){
    for (var current in flightsDataList){
        flights_bulk.push(
            { index: {_index: 'flights_bookings', _type: 'flights', _id: flightsDataList[current].callSign } },
            {
                'airline': flightsDataList[current].airline,
                'call_sign': flightsDataList[current].call_sign,
                'make_name': flightsDataList[current].make_name,
                'origin_code': flightsDataList[current].origin_code,
                'origin_name': flightsDataList[current].origin_name,
                'origin_location': flightsDataList[current].origin_location,
                'destination_code': flightsDataList[current].destination_code,
                'destination_name': flightsDataList[current].destination_name,
                'destination_location': flightsDataList[current].destination_location,
                'dateTakeOff': flightsDataList[current].dateTakeOff,
                'price': flightsDataList[current].price,
                'capacity': flightsDataList[current].capacity
            }
        );
    }
    callback(flights_bulk);
}


var indexall = function(madebulk,callback) {
    elasticClient.bulk({
                    maxRetries: 5,
                    index: 'flights_bookings',
                    type: 'flights',
                    body: madebulk
                },function(err,resp,status) {
        if (err) {
            log(`[ERROR] ${err}`)
        }
        else {
            callback(resp.items);
        }
    })
}


var makebulkHotels = function(hotelsDataList,callback){
    for (var current in hotelsDataList){
        hotels_bulk.push(
            { index: {_index: 'hotels_bookings', _type: 'hotels', _id: hotelsDataList[current].name } },
            {
                'name': hotelsDataList[current].name,
                'total_rooms': hotelsDataList[current].total_rooms,
                'totalCapacity': hotelsDataList[current].totalCapacity,
                'country': hotelsDataList[current].country,
                'phone': hotelsDataList[current].phone,
                'room_type': hotelsDataList[current].room_type,
                'manager': hotelsDataList[current].manager,
                'price': hotelsDataList[current].price,
                'address_street': hotelsDataList[current].address_street,
                'address_city': hotelsDataList[current].address_city
            }
        );
    }
    callback(hotels_bulk);
}


var indexallHotels = function(madebulk,callback) {
    elasticClient.bulk({
                           maxRetries: 5,
                           index: 'hotels_bookings',
                           type: 'hotels',
                           body: madebulk
                       },function(err,resp,status) {
        if (err) {
            log(`[ERROR] ${err}`)
        }
        else {
            callback(resp.items);
        }
    })
}


var makebulkAirports = function(airportsDataList,callback){
    for (var current in airportsDataList){
        airports_bulk.push(
            { index: {_index: 'airports_bookings', _type: 'airports', _id: airportsDataList[current].code } },
            {
                'code': airportsDataList[current].code,
                'name': airportsDataList[current].name,
                'location': airportsDataList[current].location
            }
        );
    }
    callback(airports_bulk);
}


var indexallAirports = function(madebulk,callback) {
    elasticClient.bulk({
                           maxRetries: 5,
                           index: 'airports_bookings',
                           type: 'airports',
                           body: madebulk
                       },function(err,resp,status) {
        if (err) {
            log(`[ERROR] ${err}`)
        }
        else {
            callback(resp.items);
        }
    })
}

module.exports = {


    pingService : function(req,res) {
        elasticClient.ping({
                               requestTimeout: 30000,
                           }, function (error) {
            if (error) {
                console.error('elasticsearch cluster is down!');
                res.status(500);
                return res.json({status: false, msg: 'Elasticsearch cluster is down!'})
            } else {
                console.log('Everything is ok');
                return res.json({status: true, msg: 'Success! Elasticsearch cluster is up!'})
            }
        });
    },

    createIndexesFromJSON: function(req, res) {
        elasticClient.ping({
           requestTimeout: 30000
    }).then(function (resp) {
            if (resp) {
                res.status(200)
                makebulk(inputfile,function(response){
                    log(`[LOG] Bulk content prepared`)
                    indexall(response,function(response) {
                    log(`[LOG] item indexed: ${response}`)
                    })
                })

                makebulkHotels(hotelsinputfile,function(response){
                    log(`[LOG] Hotel Bulk content prepared`)
                    indexallHotels(response,function(response) {
                        log(`[LOG] hotels indexed: ${response}`)
                    })
                })

                makebulkAirports(airportsinputfile,function(response){
                    log(`[LOG] Airport Bulk content prepared`)
                    indexallAirports(response,function(response) {
                        log(`[LOG] Airport indexed: ${response}`)
                    })
                })

                return res.json({status: true, msg: 'Success! Flights, Hotels and Airport Indexes '
                                                    + 'created with index: flights_bookings,'
                                                    + 'type: flights, index: hotels_bookings, hotels '
                                                    + 'and index: airports_bookings , type: airports !'})
            } else {
                res.status(500);
                return res.json({status: false, msg: 'Elasticsearch cluster is down!'})
            }
        });
    },


    // Insert data into Mongo
     createMongoDataFromJSON: function(req, res) {

        flightsModel.collection.insert(flightsInputFile, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                log(`[LOG] FLIGHTS inserted in mongoDB`)
                console.log("Multiple documents inserted to Collection");
            }
        });

         hotelsModel.collection.insert(hotelsInputFile, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                log(`[LOG] Hotels inserted in mongoDB`)
            }
        });

         airportsModel.collection.insert(airportsInputFile, function (err, docs) {
            if (err){
                return console.error(err);
            } else {
                log(`[LOG] Airports inserted in mongoDB`)
                res.status(200);
                return res.json(docs);
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