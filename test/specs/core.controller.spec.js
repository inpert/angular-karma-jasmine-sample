describe('Core app', function() {

  var coreController, app;

	beforeEach(function (){
  	app = module('testSat');
  });

  beforeEach(function() {
    inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      coreController = $controller('coreController', {
        $scope: scope
      });
    });
  });

  it('should exist', function() {
  	app = angular.module('testSat');
    expect(app).toBeDefined();
  });

  it('should have a home controller', function() {
    expect(coreController).toBeDefined();
  });

  it('should have a title', function() {
    expect(coreController.title).toBeDefined();
  });

});
