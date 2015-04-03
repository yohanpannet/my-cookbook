angular.module('RecipeCtrl', [])
    .controller('RecipeController', ['$scope','$routeParams','Recipe',function($scope, $routeParams, Recipe){
        $scope.tagline = 'Une recette';
        Recipe.getOne($routeParams.recipeID).success(function(data){
            $scope.recipe = data;
        })
    }])

    .controller('NewRecipeController', ['$scope','Recipe',function($scope, Recipe){
        $scope.tagline = 'Une recette';
        $scope.recipe={"ingredients":[],"directions":[]};
        $scope.addDirection = function(){
            $scope.recipe.directions.push({"direction": $scope.newDirection, "number":$scope.recipe.directions.length+1});
            $scope.newDirection = "";
        };

    }]);
