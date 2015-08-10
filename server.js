var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var expressSession = require('express-session');
app.use(expressSession({
	secret: process.env.SESSION_SECRET || 'secret',
	resave: false,
	saveUninitialized: false
}));

var passport = require('passport');
var passportLocal = require('passport-local');
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(function (username, password, callback) {
	if (username === password) {
		callback(null, {id: username, name: username });	
	} else {
		callback(null, null);
	}
}))

passport.serializeUser(function (user, callback) {
	callback(null, user.id);
})

passport.deserializeUser(function (id, callback) {
	callback(null, {id: id, name: id});
})

app.use(express.static(path.join(__dirname, '/client')));

require('./server/config/routes.js')(app);

var port = process.env.PORT || 1337;

app.listen(port, function() {
	console.log('http://127.0.0.1:' + port + '/');
});