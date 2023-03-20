var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Petify' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

/* POST home page. */
router.post('/login', function(req, res, next) {
	// Insert Login Code Here
	let username = req.body.username;
	let password = req.body.password;
	res.send(`Username: ${username} Password: ${password}`);
});


module.exports = router;
