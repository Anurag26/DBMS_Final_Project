const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv');

const orderSchema = mongoose.Schema({

                                        booking_ref: {
                                            type: String,
                                            required: true,
                                            trim: true,
                                            unique: 1
                                        },
                                        price_paid: {
                                            type: Number,
                                            required: true
                                        },
                                        booking_date: {
                                            type: Date,
                                            required: true
                                        },
                                        booking_from: {
                                            type: Date,
                                            required: true
                                        },
                                        booking_to: {
                                            type: Date,
                                            required: true
                                        },
                                        customer_ref: { //TODO:: change to object
                                            type: Number
                                        },
                                        vendor_ref: {
                                            type: Number
                                        }
                                    });

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order}