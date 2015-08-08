crawlerModule.factory('jobsFactory', function ($http) {
	return {
		jobs: function(searchTerms, callback) {
			$http.get('/jobs', searchTerms).success(function() {
				
			})
		}
	}
})