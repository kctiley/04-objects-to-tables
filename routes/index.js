var express = require('express');
var router = express.Router();
var peopleArr = require('../lib/data.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/show', function(req, res, next) {
  res.render('index', { title: 'Express', showList: peopleArr.all[0].first_name });
});

module.exports = router;
