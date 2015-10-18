app.service('getTodosService', ['$http', "$q", function($http, $q) {
	var deferred = $q.defer();
	$http({
		method: 'GET',
		url: 'app/data/sample.json'
	}).then(function successCallback(response) {
		
		deferred.resolve(response);

	}, function errorCallback(response) {
		
		console.log("reading json unsuccessful");

	});

	this.getTodos = function() {
		return deferred.promise;
	}
}]);
