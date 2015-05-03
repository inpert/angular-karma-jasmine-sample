angular.module('test.core.app', ['ngRoute'])
		.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: './modules/core/core.tmpl.html',
                    controller: 'coreController as vm'
                }).
                 when('/kalam', {
                    templateUrl: './modules/core/core.tmpl.html',
                    controller: 'coreController as vm'
                }).
                otherwise({
                    templateUrl: '404.html',
                    // redirectTo: '404.html'
                });
        }]);
