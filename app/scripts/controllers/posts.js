'use strict';

angular.module('bulletinStandaloneApp')
  .controller('PostsCtrl', ['$scope', 'Post', function($scope, Post) {
    $scope.heading = 'Bulletin Board';
    $scope.posts = Post.query();

    $scope.create = function() {
      Post.save($scope.newPost, function(resource) {
        $scope.posts.push(resource)
        $scope.newPost = {}
      }, function(response) {
        console.log("Error: " + response.status);
      });
    };
  }]);
