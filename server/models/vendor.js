const mongoose = require('mongoose');
require('dotenv');

const vendorSchema = mongoose.Schema({
                                         name: {
                                             type: String,
                                             required: true
                                         },
                                         phone_number: {
                                             type: String,
                                             required: true,
                                             minLength: 10
                                         },
                                         address: {
                                             type: String,
                                             required: true,
                                             maxlength: 255
                                         },
                                         incorporation: {
                                             type: Date,
                                             required: true
                                         },
                                         type: { //TODO: Change to object
                                             type: Number,
                                             required: false
                                         }
                                     });

module.exports = mongoose.model('Vendor', vendorSchema);