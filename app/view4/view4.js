'use strict';

angular.module('myApp.view4', [])

.controller('View4Ctrl', ['$scope',function($scope) {

	$scope.images=[
		{"name": "Cantando","location":"imgs/1.jpg", "id":0},
		{"name": "Tocando","location":"imgs/2.jpg", "id":1},
		{"name": "Ensayo","location":"imgs/3.jpg", "id":2},
		{"name": "Ensayo","location":"imgs/4.jpg", "id":3},
		{"name": "Ensayo","location":"imgs/5.jpg", "id":4},
		{"name": "Recital","location":"imgs/6.jpg", "id":5},
		{"name": "Recital","location":"imgs/7.jpg", "id":6}
	]	

	$scope.myInterval = 10000;
    $scope.noWrapSlides = false;
    var currIndex = 0;
    

    $scope.hola = false;
    $scope.activar = function(currentPic){
    	$scope.active = currentPic;	
    	$scope.hola = true;
    };

    


}]);