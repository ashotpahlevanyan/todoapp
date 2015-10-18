app.controller("toDoController", ["$scope", "$http",'getTodosService', 
	function($scope, $http, getTodosService){
		
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
		for(var i = $scope.todos.length - 1; i >= 0; i--) {
			$scope.todos[i].editing = false;
		};
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

