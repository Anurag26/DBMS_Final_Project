const User = require('../models/user');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res, next) {
    var user = new User(
        {
            email: req.body.email,
            password: req.body.password,
            userName:req.body.userName,
            cart: req.body.cart,
            history: req.body.history,
            role: req.body.role,
            type: req.body.type
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

exports.user_details_email = function (req, res, next) {
    User.find({email:req.params.email},(err,user)=>{
        if(user){
            return res.json(user);
        }
    })
};

exports.user_update = function (req, res, next) {
    console.log(req.body.userName);
    User.findOneAndUpdate({email:req.params.email}, {$set: {userName: req.body.userName}}, function (err, user) {
        if (err) {
            return next(err);
        }
        res.send('User updated.');
    });
};

exports.user_delete = function (req, res, next) {
    User.remove({email:req.params.email}, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Deleted successfully!');
    })
};