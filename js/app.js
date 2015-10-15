(function( window ) {
	'use strict';

	var app = angular.module("ToDo", []);
	app.controller("todoController", ["$scope", "$http"], function($scope, $http){
		$scope.todos = [
			{
				"id": 23,
				"done": false,
				"title": "Server Side TODO 1"
			},
			{
				"id": 29,
				"done": true,
				"title": "Done server side TODO."
			}
		];
		$scope.addTodo = function() {

		}
		$scope.clearCompleted = function() {
			
		}
	});

})( window );
