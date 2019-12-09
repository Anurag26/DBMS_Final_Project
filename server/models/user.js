const mongoose = require('mongoose');
require('dotenv');

const userSchema = mongoose.Schema({
                                       email: {
                                           type: String,
                                           required: true,
                                           trim: true,
                                           unique: 1
                                       },
                                       password: {
                                           type: String,
                                           required: true,
                                           minLength: 6
                                       },
                                       firstName: {
                                           type: String,
                                           required: true,
                                           maxlength: 50
                                       },
                                       userName: {
                                           type: String,
                                           required: true,
                                           maxlength: 50
                                       },
                                       lastName: {
                                           type: String,
                                           required: true,
                                           maxlength: 50
                                       },
                                       cart: {
                                           type: Array,
                                           default: []
                                       },
                                       history: {
                                           type: Array,
                                           default: []
                                       },
                                       role: {
                                           type: String,
                                           enum:['User','Corporate-User','Admin','Vendor-Hotel','Vendor-Airline'],
                                           default:'User'
                                       },
                                       accessPermission: {
                                             type: Number,
                                             default: 0
                                         }
                                   });

module.exports = mongoose.model('User', userSchema);