angular.module("module", ["ngRoute", "ngSanitize"])

    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false)
        $locationProvider.hashPrefix("")
        Object.keys(sections()).forEach(section => {
            $routeProvider.when(`/${section}`, {templateUrl: `src/pages/${section}.html`})
        })
        $routeProvider.when("/complete", {templateUrl: "src/pages/complete.html"})
        $routeProvider.otherwise({redirectTo: "/about"})
    })

    .controller("controller", function ($scope, $location) {
        // handle language choice
        const language = $location.search().lang === "it" ? ["it", "en"] : ["en", "it"]
        $scope.language = language[0]
        $scope.languageToggle = language[1]
        update($scope)

        // handle print style
        const print = $location.search().print === "full" ? ["full", "short"] : ["short", "full"]
        $scope.print = print[0]
        $scope.printToggle = print[1]

        // handle language switch
        $scope.switchLanguage = () => {
            const language = $scope.languageToggle
            $location.search("lang", language)
            $scope.languageToggle = $scope.language
            $scope.language = language
            update($scope)
            console.log($scope)
        }

        // handle print switch
        $scope.switchPrint = () => {
            const print = $scope.printToggle
            $location.search("print", print)
            $scope.printToggle = $scope.print
            $scope.print = print
        }

        // keep track of the language when changing page
        $scope.$on('$locationChangeStart', () => $location.search("lang", $scope.language))

        // change page value every time there is a new routing
        $scope.$on('$routeChangeSuccess', function (event, route) {
            $scope.page = route.$$route.originalPath.substring(1)
        })
    })
