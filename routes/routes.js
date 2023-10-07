const express = require("express");
const routers = express.Router();


//req res next part
//link to each pages

// home page
routers.get('/', function(req, res, next) {
    res.render('pages/index');
});

// about me page
routers.get('/about', function(req, res, next) {
    res.render('pages/about');
});

// projects page
routers.get('/projects', function(req, res, next) {
    res.render('pages/projects');
});

// services page
routers.get('/services', function(req, res, next) {
    res.render('pages/services');
});

// contact me page
routers.get('/contact', function(req, res, next) {
    res.render('pages/contact');
});


module.exports = routers;