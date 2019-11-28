const mongoose = require('mongoose');
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

module.exports = mongoose.model('Feedback', feedbackSchema);