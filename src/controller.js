angular.module("module", ["ngRoute"])

    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false)
        $locationProvider.hashPrefix("")
        $routeProvider
            .when("/about", {templateUrl: "src/templates/about.html", reloadOnUrl: false})
            .when("/education", {templateUrl: "src/templates/education.html", reloadOnUrl: false})
            .otherwise({redirectTo: "/about"})
    })

    .controller("controller", function ($scope, $location) {
        const language = $location.search().lang
        $scope.language = language === undefined ? "it" : language
        $scope.age = new Date(Date.now() - new Date(1997, 8, 15).getTime()).getFullYear() - 1970

        $scope.languageSwitch = function () {
            const language = $scope.language === "it" ? "en" : "it"
            $location.search("lang", language)
            $scope.language = language
        }

        $scope.$on('$locationChangeStart', function () {
            $location.search("lang", $scope.language)
        })
    })