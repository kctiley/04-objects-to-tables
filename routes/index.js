var express = require('express');
var router = express.Router();
var peopleArr = require('../lib/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/show_table', function(req, res, next){
  res.render('show_table', {title: 'Listing All People', data: peopleArr.all})
});

module.exports = router;
