var util =  require('util'),
    db = require('./../db.js');

//
exports.index = function(req, res){
    res.render('customer/index', { title: 'Customer List', customers: db.listCustomers()});    //db.listenCustomers is an array that contains the customers database
};

exports.create = function(req, res){
    res.render('customer/create');
};

exports.createCustomer = function(req, res){
    db.addCustomer({name: req.body.name, email: req.body.email, telephone: req.body.telephone});
    res.redirect('/customer');
};
