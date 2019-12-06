const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user'); // Imports routes for the users
const hotel = require('./routes/hotel'); // Imports routes for the hotel
const order = require('./routes/order'); // Imports routes for the order
const feedback = require('./routes/feedback'); // Imports routes for the feedback
const vendor = require('./routes/vendor'); // Imports routes for the vendor
const flight = require('./routes/flight'); // Imports routes for the flight
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://localhost:27017/bookings';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
require('dotenv').config();
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/bookingsApp/users', user);
app.use('/bookingsApp/flights', flight);
app.use('/bookingsApp/hotels', hotel);
app.use('/bookingsApp/orders', order);
app.use('/bookingsApp/feedback', feedback);
app.use('/bookingsApp/vendors', vendor);

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});