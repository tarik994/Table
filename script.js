var app = angular.module('app',[]);


app.controller('mainController', function($scope){
    $scope.search= ''
    $scope.newLang = ''
    $scope.languages = [
        {names:'JavaScript', likes: 0, dislikes:0},
        {names:'C++', likes: 0, dislikes:0},
        {names:'C#', likes: 0, dislikes:0},
        {names:'PHP', likes: 0, dislikes:0},
    ];
    

    $scope.addLike = function(lang){
        lang.likes ++


    }

    $scope.dislike = function(lang){
        lang.dislikes ++


    }

    $scope.addLang = function(newLang){
        $scope.languages.push({names:newLang, likes:0, dislikes:0});
    
    }

});