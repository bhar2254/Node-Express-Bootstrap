var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Petify' });
});

router.get('/profile', passport.isAuthenticated(), function(request, response) {
	// If the user is loggedin
	res.render('profile', { title: 'Profile', username: req.session.username });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

/* POST home page. */
router.post('/login',  passport.authenticate('local', { failureRedirect: '/login' }), function(req, res, next) {
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
				// Redirect to home page
				res.redirect('/profile');
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
				DATABASE.query('INSERT INTO users (username, password, mail, phone) VALUES (?,?,?,?)', [username, password, email, phone], function(error, results, fields) {
					// If there is an issue with the query, output the error
					if (error) throw error;
				});		
				
				// Redirect to home page
				res.redirect('/login');
				res.end();
			}
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
}); 

// To destroy the session we use this endpoint
router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect(process.env.BASEURL);
});

module.exports = router;
