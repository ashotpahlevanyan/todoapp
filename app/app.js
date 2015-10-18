//(function( window ) {
	'use strict';

	var app = angular.module("toDoApp", ["ui.router"]);
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		// Decided not to use routes
		
		// $stateProvider
		// 	.state('all',
		// 	{
		// 		url: '/all',
		// 		templateUrl: 'app/views/all.html',
		// 		controller: 'toDoController'
		// 	})
		// 	.state('active',
		// 	{
		// 		url: '/active',
		// 		templateUrl: 'app/views/active.html',
		// 		controller: 'toDoController'
		// 	})
		// 	.state('completed',
		// 	{
		// 		url: '/completed',
		// 		templateUrl: 'app/views/completed.html',
		// 		controller: 'toDoController'
		// 	});
	}]);

	

//})( window );
