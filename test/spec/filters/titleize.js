'use strict';

describe('Filter: titleize', function () {

  // load the filter's module
  beforeEach(module('bulletinStandaloneApp'));

  // initialize a new instance of the filter before each test
  var titleize;
  beforeEach(inject(function($filter) {
    titleize = $filter('titleize');
  }));

  it('should return the input prefixed with "titleize filter:"', function () {
    var text = 'angularjs';
    expect(titleize(text)).toBe('titleize filter: ' + text);
  });

});
