var Flight = require('../models/flight');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the flight test controller!');
};

exports.flight_create = function (req, res, next) {
    var flight = new Flight(
        {
            call_sign: req.body.call_sign,
            make: req.body.make,
            destination: req.body.destination,
            origin: req.body.origin,
            duration: req.body.duration,
            capacity: req.body.capacity
        }
    );

    flight.save(function (err) {
        if (err) {
            return next(err);
        }
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

exports.flight_update = function (req, res, next) {
    Flight.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, flight) {
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