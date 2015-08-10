crawlerModule.factory('jobsFactory', function ($http) {
	return {
		jobs: function(search, callback) {
			$http.post('/jobs', search).success(function (data) {
				callback(data);
			})
		}
	}
})

crawlerModule.factory('sessionsFactory', function ($http) {
	return {
		checkSession: function(callback) {
			$http.get('/sessions').success(function (data) {
				callback(data);
			})
		},

		login: function(user, callback) {
			$http.post('/sessions', user).success(function() {
				callback();
			})
		}
	}
})