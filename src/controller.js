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
        })

        // handle language settings
        $scope.$on('$locationChangeStart', () => $location.search("lang", $scope.language))
        $scope.languageSwitch = () => set($scope.language === "it" ? "en" : "it")
        set($location.search().lang === "it" ? "it" : "en")

        function set(language) {
            $scope.language = language
            $location.search("lang", language)
            update($scope)
        }
    })

function resize(main, footer) {
    main.style.minHeight = (window.innerHeight - footer.offsetHeight - 70) + "px"
}