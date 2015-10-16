(function( window ) {
	//'use strict';

	var app = angular.module("toDoApp", ["ui.router"]);
	app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/all')
		$stateProvider
			.state('all',
			{
				url: '/all',
				templateUrl: '../views/all.html',
				controller: 'toDoController'
			})
			.state('active',
			{
				url: '/active',
				templateUrl: '../views/active.html',
				controller: 'toDoController'
			})
			.state('completed',
			{
				url: '/completed',
				templateUrl: '../views/completed.html',
				controller: 'toDoController'
			});
	}]);
	app.controller("toDoController", ["$scope", function($scope){

		
		
		var init = function(){
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
				},
				{
					"id": 12,
					"done": true,
					"title": "Done server side TODO 12."
				}
			];
			//$scope.filterValue = "all";
			console.log($scope.todos);

		}
		init();

		$scope.getAllCompleted = function() {
			var temp = true;
			for(var i = $scope.todos.length - 1; i >= 0; i--) {
				temp = $scope.todos[i].done && temp;
			};
			$scope.allChecked = temp; 

		}
		$scope.updateCompleted = function() {
			 $scope.completedCount = $scope.todos.filter(function(item) {
				return item.done;
			 }).length;
			 $scope.leftCount = $scope.todos.filter(function(item) {
				return !item.done;
			 }).length;
			 $scope.getAllCompleted();
		}

		$scope.updateCompleted();

		$scope.newId = function() {
			//get min and max, then if max - min = length return max + 1 , else sort and go through all and find the first empty index, and return that one
			idsList = [];
			if($scope.todos.length) {
				for (var i = $scope.todos.length - 1; i >= 0; i--) {
					idsList.push(parseInt($scope.todos[i].id));
				};	
				var maxId = Math.max.apply(Math, idsList);
				return (maxId + 1);
			}
			return 1;
			
		}
		$scope.addTodo = function() {
			var id = $scope.newId();
			$scope.todos.push({"id": id, "done": false, "title": $scope.newTodo});
			console.log($scope.newTodo + " " + id + " added");
			$scope.newTodo = "";
		}

		$scope.removeTodo = function(item) {
			var index = $scope.todos.indexOf(item);
			if (index != -1) {
				$scope.todos.splice(index, 1);
			}
			$scope.updateCompleted();
		}
		$scope.clearCompleted = function() {
			$scope.todos = $scope.todos.filter(function(item) {
				return !item.done;
			});
			$scope.updateCompleted();
		}
		$scope.checkAll = function () {
			for(var i = $scope.todos.length - 1; i >= 0; i--) {
				$scope.todos[i].done = $scope.allChecked;
			};
			$scope.updateCompleted();
		}
		$scope.editTodo = function(todo) {
			todo.editing = true;
		}
		$scope.saveEdited = function(todo) {
			todo.editing = false;
		}
		$scope.selectMe = function() {
			//$(this).parent
		}
		// $scope.setFilter = function (argument) {
		// 	if(argument == "all") {
		// 		$scope.filterValue = "all";
		// 		console.log("all");
		// 	}
		// 	if(argument == "active") {
		// 		$scope.filterValue = "active";
		// 		console.log("active");
		// 	}
		// 	if(argument == "completed") {
		// 		$scope.filterValue = "completed";
		// 		console.log("completed");
		// 	}
		// }
		// $scope.getFilterOrNo = function(todo) {
		// 	switch ($scope.filterValue) {
		// 		case "active":
		// 			return todo.done == false;
		// 		case "completed":
		// 		return todo.done == true;
		// 		case "all":
		// 			return;
		// 		default:
		// 			return;
		// 	}
		// }

	}]);

	app.directive('myEnter', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {
					scope.$apply(function (){
					scope.$eval(attrs.myEnter);
				});

				event.preventDefault();
				}
			});
		};
	});

})( window );
