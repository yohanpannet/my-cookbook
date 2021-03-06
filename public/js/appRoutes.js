angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider
        .when('/recipes', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/recipes/new', {
            templateUrl: 'views/new-recipe.html',
            controller: 'NewRecipeController'
        })

        .when('/recipes/:recipeID', {
            templateUrl: 'views/recipe.html',
            controller: 'RecipeController'
        })

        .otherwise({
            redirectTo: '/recipes'
        });

    //$locationProvider.html5Mode(true);
}]);
