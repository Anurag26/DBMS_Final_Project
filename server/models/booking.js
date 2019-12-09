const mongoose = require('mongoose');
require('dotenv');

const bookingSchema = mongoose.Schema({

                                         user_Id: {
                                             ref:'User'
                                             type: mongoose.Schema.Types.ObjectId,
                                             required: true
                                         },
                                         vendor_Id: {
                                             ref:'User'
                                             type: mongoose.Schema.Types.ObjectId,
                                             required: true
                                         },
                                         product_id: {
                                             ref:'User'
                                             type: mongoose.Schema.Types.ObjectId,
                                             required: true
                                         },
                                         date_of_booking: {
                                             type: Date,
                                             required: true,
                                             maxlength: 50
                                         }
                                     });

module.exports = mongoose.model('Bookings', bookingSchema);