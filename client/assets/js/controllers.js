crawlerModule.controller('mainController', function() {
	var self = this;

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