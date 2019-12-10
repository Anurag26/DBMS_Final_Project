const Hotel = require('../models/hotel');
const elasticsearch = require('elasticsearch');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the hotel test controller!');
};

const elasticClient = new elasticsearch.Client({
                                                   host: process.env.ELASTICSEARCH_URI,
                                                   log: 'trace'
   });

exports.hotel_create = function (req, res, next) {

    let dataToSubmit = {
        "name":req.body.name,
        "total_rooms":req.body.total_rooms,
        "totalCapacity":req.body.totalCapacity,
        "country":req.body.country,
        "phone":req.body.phone,
        "room_type":req.body.room_type,
        "price":req.body.price,
        "address_street":req.body.address_street,
        "address_city":req.body.address_city,
        "managerId": req.body.managerId
    }

    var hotel = new Hotel(
        {
            name:req.body.name,
            total_rooms:req.body.total_rooms,
            totalCapacity:req.body.totalCapacity,
            country:req.body.country,
            manager: req.body.manager,
            phone:req.body.phone,
            room_type:req.body.room_type,
            price:req.body.price,
            address_street:req.body.address_street,
            address_city:req.body.address_city,
            managerId: req.body.managerId
        }
    );

    hotel.save(function (err) {
        if (err) {
            return next(err);
        }

        //Adding index to elastic cluster
        var payload = dataToSubmit;
        var indexName = "hotels_bookings";
        var docType = "hotels";
        var id = (((1+Math.random())*0x10000)|0).toString(16).substring(1);

        elasticClient.index({
                                index: indexName,
                                type: docType,
                                id: id,
                                body: payload
                            }).then(function (resp) {
            res.status(200);
            console.log("Hotel indexed successfully");
            return res.json(resp)
        }, function (err) {
            res.status(500)
            return res.json(err)
        });

        res.send(hotel);
    })
};

exports.hotel_details = function (req, res, next) {
    Hotel.find({name: req.params.name}).populate('user').exec((err,user)=>{
        if(err)
            return res.json(err)
        return res.json(user)
    })

};

exports.hotel_update = function (req, res, next) {
    Hotel.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name}}, function (err, hotel) {
        if (err) {
            return next(err);
        }
        res.send('Hotel updated.');
    });
};

exports.hotel_unit = function (req, res, next) {
    Hotel.findById(req.params.id).populate('user').exec((err,hotel)=>{
        if(err)
            return res.json(err)
        return res.json(hotel)
    })
};

exports.hotel_vendor = function (req, res, next) {
    console.log(req.params.id)
    Hotel.find({managerId : req.params.id},(err,hotels)=>{
        if(hotels){
            return res.json(hotels);
        }
        return next(err);
    })
};

exports.hotel_delete = function (req, res, next) {
    Hotel.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return next(err);
        }
        res.send('Hotel Deleted successfully!');
    })
};



exports.hotel_all = function (req, res, next) {
    Hotel.
    find({}).
    populate('user').
    exec((err,products)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json(products)
    })

};