crawlerModule.controller('mainController', function ($location, sessionsFactory) {
	var self = this;

	checkSession();

	function checkSession() {
		sessionsFactory.checkSession(function (data) {
			if (data.isAuthenticated == false) {
				$location.path('/login');
			} else {
				self.user = data.user;
				$location.path('/jobs');
			}
		})
	}

	this.login = function(user) {
		sessionsFactory.login(user, function() {
			checkSession();
		})
	}
})

crawlerModule.controller('jobsController', function (jobsFactory) {
	var self = this;

	this.search = function() {
		jobsFactory.jobs(self.searchTerms, function (data) {
			if (typeof data == 'string') {
				self.error = data;
				self.results = [];
			} else {
				self.error = '';
				self.results = data;
			}
		})
		self.searchTerms = null;
	}
})