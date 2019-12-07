// const mongoose = require('mongoose');
// require('dotenv');
//
// // type default value 0 for hotel, 1 for flights
//
// const vendorSchema = mongoose.Schema({
//                                          userName: {
//                                              type: String,
//                                              required: true
//                                          },
//                                          email: {
//                                              type: String,
//                                              required: true,
//                                              trim: true,
//                                              unique: 1
//                                          },
//                                          password: {
//                                              type: String,
//                                              required: true,
//                                              minLength: 6
//                                          },
//                                          // phone_number: {
//                                          //     type: String,
//                                          //     required: true,
//                                          //     minLength: 10
//                                          // },
//                                          // address: {
//                                          //     type: String,
//                                          //     required: true,
//                                          //     maxlength: 255
//                                          // },
//                                          // incorporation: {
//                                          //     type: Date,
//                                          //     required: true
//                                          // },
//                                          type: { //TODO: Change to object
//                                              type: Number,
//                                              required: false,
//                                              default:0
//                                          },
//                                          role: {
//                                              type: Number,
//                                              default: 2
//                                          },
//                                          accessPermission: {
//                                              type: Number,
//                                              default: 0
//                                          }
//                                      });
//
// module.exports = mongoose.model('Vendor', vendorSchema);