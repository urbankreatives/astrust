var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')



router.get('/',function(req,res){
    res.render('index')
})

router.get('/about',function(req,res){
    res.render('abt')
})

router.get('/blog',function(req,res){
    res.render('blogX')
})

router.get('/contact',function(req,res){
    res.render('contact')
})



router.get('/gallery',function(req,res){
    res.render('gallery')
})








module.exports = router;