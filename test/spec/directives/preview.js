'use strict';

describe('Directive: preview', function () {
  beforeEach(module('bulletinStandaloneApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<preview></preview>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the preview directive');
  }));
});
