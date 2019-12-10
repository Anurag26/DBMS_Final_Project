const mongoose = require('mongoose');
require('dotenv');

const flightSchema = mongoose.Schema({
                                         airline: {
                                             type: String,
                                             required: true,
                                             minLength: 6
                                         },
                                         call_sign: {
                                             type: String,
                                             required: true,
                                             trim: true
                                         },
                                         make_name: {
                                             type: String,
                                             required: true,
                                             minLength: 6
                                         },
                                         origin_code: {
                                             type: String,
                                             required: true,
                                             maxlength: 30
                                         },
                                         origin_name: {
                                             type: String,
                                             required: true,
                                             maxlength: 300
                                         },
                                         origin_location: {
                                             type: String,
                                             required: true,
                                             maxlength: 300
                                         },
                                         destination_code: {
                                             type: String,
                                             required: true,
                                             maxlength: 30
                                         },
                                         destination_name: {
                                             type: String,
                                             required: true,
                                             maxlength: 100
                                         },
                                         manager: {
                                             type:mongoose.Schema.Types.ObjectId,
                                             ref: 'User',
                                             required: true
                                         },
                                         destination_location: {
                                             type: String,
                                             required: true,
                                             maxlength: 300
                                         },
                                         dateTakeOff: {
                                             type: Date,
                                             required: true,
                                             maxlength: 50
                                         },
                                         price: {
                                             type: Number,
                                             default: 0
                                         },
                                         capacity: {
                                             type: Number,
                                             default: 0
                                         },
                                         managerId: {
                                             type: String,
                                             required: true
                                         }
                                     });

module.exports = mongoose.model('Flight', flightSchema);