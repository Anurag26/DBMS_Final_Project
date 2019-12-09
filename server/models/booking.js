const mongoose = require('mongoose');
require('dotenv');

const bookingSchema = mongoose.Schema({

                                         user_Id: {
                                             ref:'User'
                                             type: mongoose.Schema.Types.ObjectId,
                                             required: true,
                                             trim: true
                                         },
                                         vendor_Id: {
                                             ref:'Vendor'
                                             type: mongoose.Schema.Types.ObjectId,
                                             required: true,
                                             minLength: 6
                                         },
                                         booking_details: {
                                             type: String,
                                             required: true,
                                         },
                                         date_of_booking: {
                                             type: Date,
                                             required: true,
                                             maxlength: 50
                                         }
                                     });

module.exports = mongoose.model('Bookings', bookingSchema);