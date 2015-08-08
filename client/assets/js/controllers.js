crawlerModule.controller('mainController', function() {
	var self = this;

})

crawlerModule.controller('jobsController', function (jobsFactory) {
	var self = this;

	this.search = function(searchTerms) {
		console.log(searchTerms);
		jobsFactory.jobs(searchTerms, function() {

		})
		self.searchTerms = null;
	}
})