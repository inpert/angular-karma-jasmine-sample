describe('Core app', function() {

  var homeController, app;

	beforeEach(function (){
  	app = module('testSat');
  });

  beforeEach(function() {
    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      homeController = $controller('homeController', {
        $scope: scope
      });
    });
  });

  it('should exist', function() {
  	app = angular.module('testSat');
    expect(app).toBeDefined();
  });

  it('should have a home controller', function() {
    expect(homeController).toBeDefined();
  });

  it('should have a title', function() {
    expect(homeController.title).toBeDefined();
  });

});
