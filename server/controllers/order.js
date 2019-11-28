var Order = require('../models/order');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the order test controller!');
};

exports.order_create = function (req, res, next) {
    var order = new Order(
        {
            booking_ref: req.body.booking_ref,
            price_paid: req.body.price_paid,
            booking_date: req.body.booking_date,
            booking_from: req.body.booking_from,
            booking_to: req.body.booking_to,
            customer_ref: req.body.customer_ref,
            vendor_ref: req.body.vendor_ref
        }
    );

    order.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(order);
    })
};

exports.order_details = function (req, res, next) {
    Order.findById(req.params.id, function (err, order) {
        if (err) {
            return next(err);
        }
        res.send(order);
    })
};

exports.order_update = function (req, res, next) {
    Order.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, order) {
        if (err) {
            return next(err);
        }
        res.send('Order updated.');
    });
};

exports.order_delete = function (req, res, next) {
    Order.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Order Deleted successfully!');
    })
};