// var Vendor = require('../models/vendor');
//
// //Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the vendor test controller!');
// };
//
// exports.vendor_create = function (req, res, next) {
//     var vendor = new Vendor(
//         {
//             email: req.body.email,
//             password: req.body.password,
//             userName:req.body.userName,
//             // name: req.body.name,
//             // phone_number: req.body.phone_number,
//             // address: req.body.address,
//             // incorporation: req.body.incorporation,
//             type: req.body.type
//             role: req.body.role
//         }
//     );
//
//     vendor.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send(vendor);
//     })
// };
//
// exports.vendor_details = function (req, res, next) {
//     Vendor.findById(req.params.id, function (err, vendor) {
//         if (err) {
//             return next(err);
//         }
//         res.send(vendor);
//     })
// };
//
// exports.vendor_update = function (req, res, next) {
//     Vendor.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, vendor) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Vendor updated.');
//     });
// };
//
// exports.vendor_delete = function (req, res, next) {
//     Vendor.findByIdAndRemove(req.params.id, function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Vendor Deleted successfully!');
//     })
// };