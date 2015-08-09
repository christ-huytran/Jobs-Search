crawlerModule.factory('jobsFactory', function ($http) {
	return {
		jobs: function(search, callback) {
			$http.post('/jobs', search).success(function (data) {
				callback(data);
			})
		}
	}
})