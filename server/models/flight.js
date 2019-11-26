const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv');

const flightSchema = mongoose.Schema({

                                         call_sign: {
                                             type: String,
                                             required: true,
                                             trim: true
                                         },
                                         make: {
                                             type: String,
                                             required: true,
                                             minLength: 6
                                         },
                                         destination: {
                                             type: String,
                                             required: true,
                                             maxlength: 50
                                         },
                                         origin: {
                                             type: Date,
                                             required: true,
                                             maxlength: 50
                                         },
                                         duration: {
                                             type: Number,
                                             default: 0
                                         },
                                         capacity: {
                                             type: Number,
                                             default: 0
                                         }
                                     });

const Flight = mongoose.model('User', flightSchema);

module.exports = {Flight}