angular.module("module", ["ngRoute", "ngSanitize"])

    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false)
        $locationProvider.hashPrefix("")
        $routeProvider
            .when("/about", {templateUrl: "src/pages/about.html", reloadOnSearch: false})
            .when("/education", {templateUrl: "src/pages/education.html", reloadOnSearch: false})
            .when("/publications", {templateUrl: "src/pages/publications.html", reloadOnSearch: false})
            .when("/projects", {templateUrl: "src/pages/projects.html", reloadOnSearch: false})
            .otherwise({redirectTo: "/about"})
    })

    .controller("controller", function ($scope, $location) {
        // change page value every time there is a new routing
        $scope.$on('$routeChangeSuccess', function (event, route) {
            $scope.page = route.$$route.originalPath.substring(1)
            console.log($scope.page)
        })

        // handle language settings
        $scope.$on('$locationChangeStart', () => $location.search("lang", $scope.language))
        $scope.languageSwitch = () => set($scope.language === "en" ? "it" : "en")
        set($location.search().lang === "en" ? "en" : "it")

        function set(language) {
            $scope.language = language
            $location.search("lang", language)
            templates($scope)
        }
    })