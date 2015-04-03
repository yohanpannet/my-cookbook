angular.module('MainCtrl', [])
    .controller('MainController', ['$scope','$http','Recipe',function($scope, $http, Recipe){
        $scope.tagline = 'Liste des recettes';
        Recipe.get().success(function(data){
            $scope.recipes = data;
        })
    }]);
