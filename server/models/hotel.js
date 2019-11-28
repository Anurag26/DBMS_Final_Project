const mongoose = require('mongoose');
require('dotenv');

const hotelSchema = mongoose.Schema({

                                        room_type: {
                                            type: String,
                                            required: true,
                                            trim: true
                                        },
                                        hotel_location: {
                                            type: String,
                                            required: true,
                                            minLength: 6
                                        },
                                        phone: {
                                            type: String,
                                            required: true,
                                            maxlength: 50
                                        },
                                        manager: {
                                            type: String,
                                            required: true,
                                            maxlength: 50
                                        },
                                        price: {
                                            type: Number,
                                            default: 0
                                        },
                                        room_number: {
                                            type: Number,
                                            default: 0
                                        }
                                    });

module.exports = mongoose.model('Hotel', hotelSchema);