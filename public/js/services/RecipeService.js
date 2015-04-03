angular.module('RecipeService', []).factory('Recipe', ['$http', function($http){

    return {
        //call to get all the recipes
        get: function(){
            return $http.get('/api/recipes');
        },

        getOne: function(recipeId){
            return $http.get('/api/recipe/'+recipeId);
        },

        create : function(recipeData){
            return $http.post('/api/recipes', recipeData);
        },

        delete : function(id){
            return $http.delete('/api/recipes/'+id);
        }
    }
}]);
