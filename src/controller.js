angular.module("module", ["ngRoute"])

    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false)
        $locationProvider.hashPrefix("")
        $routeProvider
            .when("/home", {templateUrl: "src/templates/home.html"})
            .otherwise({redirectTo: "/home"})
    })

    .controller("controller", function ($scope) {
        $scope.info = info["IT"]
    })