'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('bulletinStandaloneApp'));

  var PostsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    PostsCtrl = $controller('PostsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
