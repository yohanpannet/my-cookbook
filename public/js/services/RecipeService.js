angular.module('RecipeService', []).factory('Recipe', ['$http', function($http){

    return {
        //call to get all the recipes
        get: function(){
            return $http.get('/api/recipes');
        },

        create : function(recipeData){
            return $http.post('/api/recipes', recipeData);
        },

        delete : function(id){
            return $http.delete('/api/recipes/'+id);
        }
    }
}]);
