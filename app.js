var app = angular.module("carFire", ["ui.router", "firebase"]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("cars", {
      url: "/cars",
      templateUrl: "cars.html",
      controller: "carsCtrl",
      resolve: {
        //creating a variable carsRef
        carsRef: function(carsService) {
          return carsService.getCars();
        }
      }
    })

    .state("car", {
      url: "/cars/:cardId",
      templateUrl: "carId.html",
      controller: "carCtrl",
      resolve: {
        carRef: function(carsService, $stateParams) {
          return carsService.getCar($stateParams.carId);
        },
        commentsRef: function(carsService, $stateParams) {
          return carsService.getComments($stateParams.carId);
        }
      }
    })

  $urlRouterProvider
    .otherwise("/cars");
})
