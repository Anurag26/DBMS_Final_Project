var booking = require('../models/booking');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the order test controller!');
};

exports.order_create = function (req, res, next) {
    var booking = new booking(
        {
            user_Id: req.body.user_Id,
            vendor_Id: req.body.vendor_Id,
            booking_details: req.body.booking_details,
            date_of_booking: req.body.date_of_booking
        }
    );

    booking.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(booking);
    })
};

exports.order_details = function (req, res, next) {
    booking.findById(req.params.id, function (err, order) {
        if (err) {
            return next(err);
        }
        res.send(order);
    })
};

exports.order_update = function (req, res, next) {
    booking.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, order) {
        if (err) {
            return next(err);
        }
        res.send('Order updated.');
    });
};

exports.order_delete = function (req, res, next) {
    booking.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Order Deleted successfully!');
    })
};