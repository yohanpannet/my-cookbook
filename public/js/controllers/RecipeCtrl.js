angular.module('RecipeCtrl', [])
    .controller('RecipeController', ['$scope','$routeParams','Recipe',function($scope, $routeParams, Recipe){
        $scope.tagline = 'Une recette';
        console.log($routeParams.recipeID);
        Recipe.getOne($routeParams.recipeID).success(function(data){
            $scope.recipe = data;
        })
    }]);
