var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Petify' });
});

router.get('/home', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
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

	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		DATABASE.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

/* GET login page. */
router.get('/signup', function(req, res, next) {
	res.render('signup', { title: 'Signup' });
});

// User signup api 
router.post('/signup', (req, res, next) => { 


// Creating empty user object 
    let newUser = new User(); 

    // Initialize newUser object with request data 
    newUser.name = req.body.name, 

    newUser.email = req.body.email,


    newUser.password=req.body.password

                    // Call setPassword function to hash password 
                    newUser.setPassword(req.body.password); 

    // Save newUser object to database 
    newUser.save((err, User) => { 
        if (err) { 
            return res.status(400).send({ 
                message : "Failed to add user."
            }); 
        } 
        else { 
            return res.status(201).send({ 
                message : "User added successfully."
            }); 
        } 
    }); 
}); 


module.exports = router;
