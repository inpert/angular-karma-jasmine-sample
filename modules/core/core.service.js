// http://api.github.com/users/rafaelfernandesnet/repos
var app = angular.module('test.core.app');

app.factory('coreService', ['$http', coreService]);

function coreService($http){
	var resultFromGit;

	return {
		get: get 
	}

	function get(repo){
		return $http.get('http://api.github.com/users/'+repo+'/repos');
	}
}