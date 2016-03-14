var app = angular.module("carFire");

app.controller("carCtrl", function($scope, carRef, commentsRef, $firebaseArray, $firebaseObject) {

  $scope.car = $firebaseObject(carRef);
  $scope.comments = $firebaseArray(commentsRef);
  // console.log($scope.comments);

  $scope.clearSearch = function() {
    $scope.searchAll = ""
  }

  $scope.addComment = function(text) {
    $scope.comments.$add(text);

  }

});
