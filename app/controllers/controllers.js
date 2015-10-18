'use strict';

app.controller("toDoController", ["$scope", "$http",'getTodosService', 
	function($scope, $http, getTodosService){
	$scope.filter = "all";	
	$scope.todos = [];
	var init = function(){
		var promise = getTodosService.getTodos();
		promise.then(function(data) {
			$scope.todos = data.data;
			console.log($scope.todos);
			$scope.updateCompleted();
		});
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


	$scope.newId = function() {
		//get min and max, then if max - min = length return max + 1 , else sort and go through all and find the first empty index, and return that one

		// Version :1 
		// this algorithms is slower, but it finds also deleted or unused ids
		// also it works with negative ids as well as the other one
		var idsList = [];
		if($scope.todos.length) {
			for (var i = $scope.todos.length - 1; i >= 0; i--) {
				idsList.push(parseInt($scope.todos[i].id));
			};	
			var maxId = Math.max.apply(Math, idsList);
			var minId = Math.min.apply(Math, idsList);
			if(maxId - minId == $scope.todos.length - 1 ) {
				if(minId > 1) {
					return minId - 1;
				} else {
					return maxId + 1;
				}
			} else {
				for(var i = minId + 1; i < maxId; i++) {
					if(idsList.indexOf(i) == -1 ) {
						return i;
					}
				}
			}
		}
		return 1;

		//Version :2
		//////////////////// return largest + 1 will simply work
		// var idsList = [];
		// if($scope.todos.length) {
		// 	for (var i = $scope.todos.length - 1; i >= 0; i--) {
		// 		idsList.push(parseInt($scope.todos[i].id));
		// 	};	
		// 	var maxId = Math.max.apply(Math, idsList);
		// 	return (maxId + 1);
		// }
		// return 1;
		
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
		for(var i = $scope.todos.length - 1; i >= 0; i--) {
			$scope.todos[i].editing = false;
		};
		todo.editing = true;
		$timeout(function(){
			$scope.input.focus();
		},0);
	}
	$scope.saveEdited = function(todo) {
		todo.editing = false;
	}

	$scope.showFilter = function(done){
		if($scope.filter == 'active' &&  done == true) {
			return false;
		}
		if($scope.filter == 'completed' &&  done == false) {
			return false;
		}
		return true;
	}
	
}]);

