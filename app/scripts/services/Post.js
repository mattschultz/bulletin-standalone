'use strict';

angular.module('bulletinStandaloneApp')
  .factory('Post', ['$resource', function($resource) {
    return $resource('http://localhost\\:3000/posts/');
  }]);
