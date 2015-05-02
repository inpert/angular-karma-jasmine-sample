var app = angular.module('testSat');

app.controller('homeController', ['$scope', homeController]);

function homeController($scope){
	var vm = this;
	vm.title = 'Home controller'
}