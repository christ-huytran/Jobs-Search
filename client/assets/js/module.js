var crawlerModule = angular.module('webCrawler', ['ngRoute']);

crawlerModule.config(function ($routeProvider) {
	$routeProvider
	.when('/jobs', {
		templateUrl: '/partials/jobs.html',
		controller: 'jobsController',
		controllerAs: 'jobs'
	})
	.otherwise({ redirectTo: '/jobs' })
})