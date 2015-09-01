var express = require('express');
var router = express.Router();
var peopleArr = require('../lib/data.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/showtable', function(req, res, next){
  res.render('show_table', {title: 'Table Page', data: peopleArr.all})
});





//different show views with iterating in js
// var details = function(){
//   var firstNamesToArr = [];
//   for (var i = 0; i < peopleArr.all.length; i++){
//     firstNamesToArr.push(peopleArr.all[i].first_name + "<br>" )
//   };
//   return firstNamesToArr.join(' ');
// }
// router.get('/show2', function(req, res, next) {
// res.send(details())
// });

router.get('/show', function(req, res, next) {
  res.render('index', { title: 'Express', showList: peopleArr.all[0].first_name });
});


// router.get('/show3', function(req, res, next) {
//   res.render('index', { title: 'Express', showList: res.send(details())});
// });




module.exports = router;
