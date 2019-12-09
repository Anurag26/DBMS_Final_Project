const mongoose = require('mongoose');
require('dotenv');

const feedbackSchema = mongoose.Schema({
                                           email: {
                                               type: String,
                                               required: true,
                                               trim: true
                                           },
                                           comment: {
                                               type: String,
                                               required: true
                                           },
                                           order: {
                                               type: String,
                                               required: true
                                           }
                                       });

module.exports = mongoose.model('Feedback', feedbackSchema);