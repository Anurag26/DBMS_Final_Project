var Feedback = require('../models/feedback');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the feedback test controller!');
};

exports.feedback_create = function (req, res, next) {
    var feedback = new Feedback(
        {
            email: req.body.email,
            comment: req.body.comment,
            order: req.body.order
        }
    );

    feedback.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(feedback);
    })
};

exports.feedback_details = function (req, res, next) {
    Feedback.findById(req.params.id, function (err, feedback) {
        if (err) {
            return next(err);
        }
        res.send(feedback);
    })
};

exports.feedback_update = function (req, res, next) {
    Feedback.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, feedback) {
        if (err) {
            return next(err);
        }
        res.send('Order Feedback updated.');
    });
};

exports.feedback_delete = function (req, res, next) {
    Feedback.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Feedback Deleted successfully!');
    })
};