angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/recipes', {
            templateUrl: 'views/recipe.html',
            controller: 'RecipeController'
        })

    $locationProvider.html5Mode(true);
}]);
