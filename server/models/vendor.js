const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv');

const vendorSchema = mongoose.Schema({

                                         Name: {
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
                                             type: String
                                         }
                                     });

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = {Vendor}