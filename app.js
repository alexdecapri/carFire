var app = angular.module("carFire", ["ui.router", "firebase"]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("cars", {
      url: "/cars",
      templateUrl: "cars.html"
    })

    .state("car", {
      url: "/cars/:cardId"
      templateUrl: "carId.html"
    })
})
