var app = angular.module('test.core.app');

app.controller('coreController', ['$scope', 'coreService', coreController]);

function coreController($scope, coreService){
	var vm = this;
	vm.title = 'Home controller';

	vm.callGit = callGit;

	function callGit(){
		coreService.get(vm.repo).then(populateGitInfo)
	}

	function populateGitInfo(result, status, headers, config){
		debugger;
		vm.gitInfo = result.data;
	}
	
}