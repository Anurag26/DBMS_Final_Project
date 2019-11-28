const mongoose = require('mongoose');
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

module.exports = mongoose.model('Flight', flightSchema);