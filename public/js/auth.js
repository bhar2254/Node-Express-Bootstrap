var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app, user){

  app.use(passport.initialize());
  app.use(passport.session());

  // passport config
  passport.use(new LocalStrategy(user.authenticate()));

  passport.serializeUser(function(user, done) {
    console.log('serializing user: ');
    console.log(user);
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    user.findById(id, function(err, user) {
      console.log('no im not serial');
      done(err, user);
    });
  });
};

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