const Hotel = require('../models/hotel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the hotel test controller!');
};

exports.hotel_create = function (req, res, next) {
    var hotel = new Hotel(
        {
            room_type: req.body.room_type,
            hotel_location: req.body.hotel_location,
            phone: req.body.phone,
            manager: req.body.manager,
            price: req.body.price,
            room_number: req.body.room_number
        }
    );

    hotel.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(hotel);
    })
};

exports.hotel_details = function (req, res, next) {
    Hotel.findById(req.params.id, function (err, hotel) {
        if (err) {
            return next(err);
        }
        res.send(hotel);
    })
};

exports.hotel_update = function (req, res, next) {
    Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, hotel) {
        if (err) {
            return next(err);
        }
        res.send('Hotel updated.');
    });
};

exports.hotel_delete = function (req, res, next) {
    Hotel.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Hotel Deleted successfully!');
    })
};