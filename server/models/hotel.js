const mongoose = require('mongoose');
require('dotenv');

const hotelSchema = mongoose.Schema({
                                        name:{
                                            type:String,
                                            required:true,
                                            maxLength: 100
                                        },
                                        description:{
                                            type:String,
                                            required:true,
                                            maxLength: 10000
                                        },
                                        hotel_location: {
                                            type: String,
                                            required: true,
                                            minLength: 6
                                        },
                                        vendor: {
                                            type:mongoose.Schema.Types.ObjectId,
                                            ref: 'User',
                                            required: true
                                        },
                                        price: {
                                            type: Number,
                                            default: 0
                                        },
                                        room_number: {
                                            type: Number,
                                            default: 0
                                        },
                                        room_type: {
                                            type: String,
                                            required: true,
                                            trim: true
                                        }
                                    });

module.exports = mongoose.model('Hotel', hotelSchema);