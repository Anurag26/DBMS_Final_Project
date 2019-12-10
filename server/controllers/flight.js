var Flight = require('../models/flight');
const elasticsearch = require('elasticsearch');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the flight test controller!');
};

const elasticClient = new elasticsearch.Client({
      host: process.env.ELASTICSEARCH_URI,
      log: 'trace'
 });

exports.flight_create = function (req, res, next) {

    let dataToSubmit = {
        "airline": req.body.airline,
        "call_sign": req.body.call_sign,
        "make_name": req.body.make_name,
        "origin_code": req.body.origin_code,
        "origin_name": req.body.origin_name,
        "origin_location": req.body.origin_location,
        "destination_code": req.body.destination_code,
        "destination_name": req.body.destination_name,
        "destination_location": req.body.destination_location,
        "dateTakeOff": req.body.dateTakeOff,
        "price": req.body.price,
        "capacity": req.body.capacity,
        "manager": req.body.manager,
        "managerId": req.body.managerId
    }

    var flight = new Flight(
        {
            airline: req.body.airline,
            call_sign: req.body.call_sign,
            make_name: req.body.make_name,
            origin_code: req.body.origin_code,
            origin_name: req.body.origin_name,
            origin_location: req.body.origin_location,
            destination_code: req.body.destination_code,
            destination_name: req.body.destination_name,
            destination_location: req.body.destination_location,
            dateTakeOff: req.body.dateTakeOff,
            price: req.body.price,
            capacity: req.body.capacity,
            manager: req.body.manager,
            managerId: req.body.managerId
        }
    );

    flight.save(function (err) {
        if (err) {
            return next(err);
        }

        //Adding index to elastic cluster
        var payload = dataToSubmit;
        var indexName = "flights_bookings";
        var docType = "flights";
        var id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);

        elasticClient.index({
                                index: indexName,
                                type: docType,
                                id: id,
                                body: payload
                            }).then(function (resp) {
            res.status(200);
            console.log("flight indexed successfully");
            return res.json(resp)
        }, function (err) {
            res.status(500)
            return res.json(err)
        });

        //Sending result in response
        res.send(flight);
    })
};

exports.flight_details = function (req, res, next) {
    Flight.findById(req.params.id, function (err, flight) {
        if (err) {
            return next(err);
        }
        res.send(flight);
    })
};

exports.flight_vendor = function (req, res, next) {
    console.log(req.params.id)
    Flight.find({managerId : req.params.id},(err,flights)=>{
        if(flights){
            return res.json(flights);
        }
        return next(err);
    })
};

exports.flight_update = function (req, res, next) {
    Flight.findByIdAndUpdate(req.params.id, {$set: { airline: req.body.airline}}, function (err, flight) {
        if (err) {
            return next(err);
        }
        res.send('Flight updated.');
    });
};

exports.flight_delete = function (req, res, next) {
    Flight.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Deleted successfully!');
    })
};