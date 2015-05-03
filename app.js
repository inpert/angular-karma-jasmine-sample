// Have a TODO list
// - Home page
// Menu
// TODO list - inside

angular.module('testSat', ['ngAnimate', 'ngRoute', 'ngMessages',
  'ngCookies', 'ngSanitize', 'ngResource',
  'underscore', 'test.core.app'
]);

angular.module('underscore', [])
  .factory('_', function() {
    return window._; // assumes underscore has already been loaded on the page
  });

// angular.module('test.core.app', []);
