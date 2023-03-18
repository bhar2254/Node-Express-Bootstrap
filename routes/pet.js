var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Petify' });
});
/* GET home page. */
router.get('/baby/:babyName', function(req, res, next) {
  res.render('baby', { title: babyName });
});

module.exports = router;
