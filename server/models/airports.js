const mongoose = require('mongoose');
require('dotenv');

const airportsSchema = mongoose.Schema({
                                           code: {
                                               type: String,
                                               required: true
                                           },
                                           name: {
                                               type: String,
                                               required: true
                                           },
                                           location: {
                                               type: String,
                                               required: true
                                           },
                                       });

module.exports = mongoose.model('Airport', airportsSchema);