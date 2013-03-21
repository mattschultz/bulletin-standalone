'use strict';

angular.module('bulletinStandaloneApp')
  .filter('titleize', [function () {
    return function (text) {
      if (text == null) return '';
      return String(text).replace(/(?:^|\s)\S/g, function(c) {
        return c.toUpperCase();
      });
    };
  }]);
