var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Petify' });
});

router.get('/home', function(request, response) {
	// If the user is loggedin
	if (req.session.loggedin) {
		// Output username
		res.send('Welcome back, ' + req.session.username + '!');
	} else {
		// Not logged in
		res.send('Please login to view this page!');
	}
	res.end();
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

	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		DATABASE.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				req.session.loggedin = true;
				req.session.username = username;
				// Redirect to home page
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

/* GET login page. */
router.get('/signup', function(req, res, next) {
	res.render('signup', { title: 'Signup' });
});

// User signup api 
router.post('/signup', (req, res, next) => { 
	// Insert Login Code Here
	let username = req.body.username;
	let password = req.body.password;
	let email = req.body.email;
	let phone = req.body.phone;

	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		DATABASE.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				res.send('Account Already Exists!');
			} else {
				DATABASE.query('INSERT INTO users (username, password, mail, phone) VALUES (?,?,?,?)', [username, password, email, phone], function(error, results, fields)) {
					// If there is an issue with the query, output the error
					if (error) throw error;
					
					// Redirect to home page
					res.redirect('/login');
				}
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
}); 


module.exports = router;
