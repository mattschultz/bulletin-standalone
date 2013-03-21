'use strict';

angular.module('bulletinStandaloneApp')
  .directive('preview', [function () {
    return function(scope, element) {
      var truncateClass = 'truncate';

      element.bind('mouseenter mouseleave', function() {
        element.toggleClass(truncateClass);
      });

      element.addClass(truncateClass);
    }
  }]);
