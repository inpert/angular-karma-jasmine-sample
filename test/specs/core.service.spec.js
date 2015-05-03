// testing service
var module = angular.mock.module;
var inject = angular.mock.inject;

var $httpBackend, $rootScope, coreService, authRequestHandler, URL, repo;
describe('coreService', function() {

  // Set up the module
  beforeEach(module('test.core.app'));

  beforeEach(function() {
    // setupTestEnviroment().then(function(){
    inject(function(coreService, $httpBackend) {
      coreService = coreService;
      $httpBackend = $httpBackend;

      repo='angular';

      URL = 'http://api.github.com/users/'+repo+'/repos';

      // backend definition common for all tests
      authRequestHandler = $httpBackend.when('GET', URL)
        .respond({
          userId: 'userX'
        }, {
          'A-Token': 'xxx'
        });
    });

  });

  it('Should be able to retrieve info from git', function() {
    inject(function(coreService, $httpBackend) {
      $httpBackend.expectGET(URL);
      coreService.get(repo);
      $httpBackend.flush();
    });
  });
});
