const User = require('../models/user');
const mongoose = require('mongoose');

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
            firstName:req.body.firstName,
            lastName:req.body.lastName,
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

exports.user_all = function (req, res, next) {
    User.find({},(err,users)=>{
        if(users){
            res.json(users);
        }
              }
    )
};

exports.user_details_email = function (req, res, next) {
    User.find({email:req.params.email},(err,user)=>{
        if(user){
            return res.json(user);
        }
        return next(err);
    })
};

exports.user_deleteCart = function (req, res, next) {
    User.findOneAndUpdate({_id:req.params.id},
                          {
                              $set:{ cart:[] }
                          },
                          function (err,doc){
                              if(err){
                                  res.status(400).json(err)
                              }
                              res.status(200).json({successDeleteFromCart: true})
                          }
    )

};

exports.user_addOrder = function (req, res, next) {
    User.findOneAndUpdate({_id:req.params.id},
                          {
                              $push:{ history:{
                                  id:req.body.id,
                                  name:req.body.name,
                                  price:req.body.price
                                  } },
                              $set:{
                                  cart:[]
                              }
                          },
                          function (err,doc){
                              if(err){
                                  res.status(400).json(err)
                              }
                              res.status(200).json({successDeleteFromCart: true})
                          }
    )
    console.log("User order is added");
};

exports.onboard = function (req, res, next) {
    User.findOneAndUpdate({email:req.params.email},
                          {
                              $set:{ accessPermission: 1 }
                          },
                          function (err,doc){
                              if(err){
                                  res.status(400).json(err)
                              }
                              res.status(200).json({onboard: true})
                          }
    )

};

exports.offboard = function (req, res, next) {
    User.findOneAndUpdate({email:req.params.email},
                          {
                              $set:{ accessPermission: 0 }
                          },
                          function (err,doc){
                              if(err){
                                  res.status(400).json(err)
                              }
                              res.status(200).json({offboard: true})
                          }
    )

};

    exports.user_addToCart = function (req, res, next) {
        console.log(req.params.email);
    User.findOneAndUpdate({email:req.params.email},
                          { $set:{ cart:{
                                      name: req.body.name,
                                      price: req.body.price,
                                      id: req.body.id,
                                      manager: req.body.manager,
                                      type:'Hotel',
                                      date:Date.now()
                                  }
                              }
                          },
                          function (err,doc){
                            if(err){
                                res.status(400).json(err)
                            }
                            res.status(200).json({successAddToCart: true})
                          }
                          )
};

exports.user_addToCartFlights = function (req, res, next) {
    console.log(req.params.email);
    User.findOneAndUpdate({email:req.params.email},
                          { $push:{ cart:{
                                      origin_location: req.body.origin_location,
                                      destination_location: req.body.destination_location,
                                      id: req.body.id,
                                      type:'Flight',
                                      price: req.body.price,
                                      dateTakeOff : req.body.dateTakeOff,
                                      date:Date.now()
                                  }
                              }
                          },
                          function (err,doc){
                              if(err){
                                  res.status(400).json(err)
                              }
                              res.status(200).json({successAddToCart: true})
                          }
    )
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