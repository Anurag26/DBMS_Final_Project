const mongoose = require('mongoose');
require('dotenv');

const hotelSchema = mongoose.Schema({
                                        name:{
                                            type:String,
                                            required:true,
                                            maxLength: 200
                                        },
                                        total_rooms: {
                                            type: Number,
                                            default: 0
                                        },
                                        totalCapacity: {
                                            type: Number,
                                            default: 0
                                        },
                                        phone:{
                                            type:String,
                                            required:true,
                                            maxLength: 12
                                        },
                                        country: {
                                            type: String,
                                            required: true,
                                            minLength: 6
                                        },
                                        room_type: {
                                            type: Array,
                                            default: []
                                        },
                                        manager: {
                                            type:mongoose.Schema.Types.ObjectId,
                                            ref: 'User',
                                            required: true
                                        },
                                        price: {
                                            type: Array,
                                            default: []
                                        },
                                        address_street: {
                                            type: String,
                                            required: true,
                                            trim: true
                                        },
                                        address_city: {
                                            type: String,
                                            required: true,
                                            trim: true
                                        },
                                        managerId: {
                                            type: String,
                                            required: true
                                        }
                                    });

module.exports = mongoose.model('Hotel', hotelSchema);