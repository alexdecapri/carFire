var app = angular.module("carFire");

app.controller("carsCtrl", function($scope, carsRef, $firebaseArray, $firebaseObject) {

  $scope.cars = $firebaseArray(carsRef);
  // console.log($scope.cars);

});
