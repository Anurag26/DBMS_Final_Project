const mongoose = require('mongoose');
require('dotenv');

const bookingSchema = mongoose.Schema({
                                         user_id: {
                                             ref:'User',
                                             type: mongoose.Schema.Types.ObjectId,
                                             required: true
                                         },
                                         vendor_id: {
                                             ref:'User',
                                             type: mongoose.Schema.Types.ObjectId,
                                             required: true
                                         },
                                         product_id: {
                                             type: String,
                                             default: ''
                                         },
                                         date_of_booking: {
                                             type: Date,
                                             required: true,
                                             maxlength: 50
                                         }
                                     });

module.exports = mongoose.model('Bookings', bookingSchema);