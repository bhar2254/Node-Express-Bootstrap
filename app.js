
require('./bin/js/env');

var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var Store = require('express-session').Store;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petRouter = require('./routes/pet');

global.DATABASE = 	require('./bin/js/sql_connect');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(sess({
    name: 'PETSESSION',
    secret: 'thisissecret',
    resave: true,
    saveUninitialized: true
}));

passport.use(new LocalStrategy(
	function(username, password, done) {
		User.findOne({ username: username }, function (err, user) {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			if (!user.verifyPassword(password)) { return done(null, false); }
			return done(null, user);
		});
	}
));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));

app.use('/', indexRouter);
app.use('/pet', petRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

passport.serializeUser(function(user, done){
    done(null, user.id);
});
passport.deserializeUser(function(id, done){
    DATABASE.query("select * from users where id = "+ id, function (err, rows){
        done(err, rows[0]);
    });
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
