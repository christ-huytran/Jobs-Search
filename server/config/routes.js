var jobs = require('./../controllers/jobsController.js');
var sessions = require('./../controllers/sessionsController.js');
var passport = require('passport');

module.exports = function(app) {
	app.get('/sessions', function (req, res) {
		sessions.checkSession(req, res);
	})

	app.post('/jobs', function (req, res) {
		jobs.search(req, res);
	})

	app.post('/sessions', passport.authenticate('local'), function (req, res) {
		res.redirect('/sessions');
	})
}