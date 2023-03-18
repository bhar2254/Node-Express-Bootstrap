var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Petify' });
});

/* GET baby page. */
router.get('/baby/:babyName', function(req, res, next) {
	res.render('baby', { title: req.params.babyName });
});

/* GET child page. */
router.get('/child/:childName', function(req, res, next) {
	res.render('child', { title: req.params.childName });
});

/* GET young adult page. */
router.get('/young/:youngName', function(req, res, next) {
	res.render('young', { title: req.params.youngName });
});

/* GET adult page. */
router.get('/adult/:adultName', function(req, res, next) {
	res.render('adult', { title: req.params.adultName });
});

module.exports = router;
