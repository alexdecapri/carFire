var app = angular.module("carFire");

app.service("carsService", function() {

  this.getCars = function() {
    return new Firebase("https://devmtn-car-fire.firebaseio.com/cars");
  };

  this.getCar = function(carId) {
    return new Firebase("https://devmtn-car-fire.firebaseio.com/cars" + "/" + carId);

  };

  this.getComments = function(carId) {
    return new Firebase("https://devmtn-car-fire.firebaseio.com/comments" + "/" + carId);
  };

});
