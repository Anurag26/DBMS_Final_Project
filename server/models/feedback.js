const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv');

const feedbackSchema = mongoose.Schema({
                                           comment: {
                                               type: String,
                                               required: true
                                           },
                                           order: {
                                               type: Number
                                           }
                                       });

const Feedback = mongoose.model('Vendor', feedbackSchema);

module.exports = {Feedback}