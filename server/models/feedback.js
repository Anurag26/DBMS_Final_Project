const mongoose = require('mongoose');
require('dotenv');

const feedbackSchema = mongoose.Schema({
                                           order: {
                                               type: String,
                                               required: true
                                           },
                                           email: {
                                               type: String,
                                               required: true,
                                               trim: true
                                           },
                                           comment: {
                                               type: String,
                                               required: true
                                           },
                                       });

module.exports = mongoose.model('Feedback', feedbackSchema);