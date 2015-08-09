var jobs = require('./../controllers/jobsController.js');

module.exports = function(app) {
	app.post('/jobs', function (req, res) {
		jobs.search(req, res);
	})
}