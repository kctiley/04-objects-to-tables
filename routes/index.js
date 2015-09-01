var express = require('express');
var router = express.Router();
var peopleArr = require('../lib/data.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/showtable', function(req, res, next){
  res.render('show_table', {title: 'Listing All People', data: peopleArr.all})
});

router.get('/number', function(req, res, next){
  res.render('show_number', { title: 'Phone Number', phone: data[i].telephone_number})
});



module.exports = router;
