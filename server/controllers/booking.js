const Booking = require('../models/booking');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the order test controller!');
};

exports.order_create = function (req, res, next) {

    var booking = new Booking(
        {
            user_id: req.body.user_id,
            vendor_id: req.body.vendor_id,
            product_id: req.body.product_id,
            date_of_booking: Date.now()
        }
    );

    booking.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(booking);
    })
    console.log("Booking is done");
};

exports.order_details = function (req, res, next) {
    Booking.findById(req.params.id, function (err, order) {
        if (err) {
            return next(err);
        }
        res.send(order);
    })
};

exports.order_all = function (req, res, next) {
    Booking.find({}).
    populate('user').
    exec((err,products)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json(products)
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