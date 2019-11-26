var express = require('express');
var bodyParser = require('body-parser');

var user = require('./routes/user'); // Imports routes for the users
var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/bookings';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
require('dotenv').config();
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);

var port = process.env.PORT || 3002;;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});