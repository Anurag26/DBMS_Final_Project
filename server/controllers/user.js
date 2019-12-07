const User = require('../models/user');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res, next) {
    var user = new User(
        {
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            userName:req.body.userName,
            cart: req.body.cart,
            history: req.body.history,
            role: req.body.role
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(user);
    })
};

exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send(user);
    })
};

exports.user_details_byemail = function (req, res, next) {
    User.find({email: req.params.email}, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send(user);
    })
};


exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send('User updated.');
    });
};

exports.user_delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Deleted successfully!');
    })
};