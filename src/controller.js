angular.module("module", ["ngRoute", "ngSanitize"])

    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false)
        $locationProvider.hashPrefix("")
        $routeProvider
            .when("/about", {templateUrl: "src/pages/about.html", reloadOnUrl: false})
            .when("/education", {templateUrl: "src/pages/education.html", reloadOnUrl: false})
            .when("/publications", {templateUrl: "src/pages/publications.html", reloadOnUrl: false})
            .when("/projects", {templateUrl: "src/pages/projects.html", reloadOnUrl: false})
            .otherwise({redirectTo: "/about"})
    })

    .controller("controller", function ($scope, $location) {
        $scope.$on('$locationChangeStart', () => $location.search("lang", $scope.language))
        $scope.languageSwitch = () => set($scope.language === "en" ? "it" : "en")
        set($location.search().lang === "en" ? "en" : "it")

        function set(language) {
            $scope.language = language
            $location.search("lang", language)
            templates($scope)
        }
    })