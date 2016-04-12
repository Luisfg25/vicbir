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
		{"name": "Recital","location":"imgs/7.jpg", "id":6},
		{"name": "Recital","location":"imgs/7.jpg", "id":7},
		{"name": "Recital","location":"imgs/7.jpg", "id":8},
		{"name": "Recital","location":"imgs/7.jpg", "id":9},
		{"name": "Recital","location":"imgs/7.jpg", "id":10},
		{"name": "Recitasl","location":"imgs/5.jpg", "id":11},
		{"name": "Recitalas","location":"imgs/7.jpg", "id":12},
		{"name": "Recitalasas","location":"imgs/7.jpg", "id":13}

	]	

	$scope.myInterval = 10000;
    $scope.noWrapSlides = false;
    
    

    $scope.hola = false;
    $scope.activar = function(currentPic){
    	$scope.active = currentPic;	
    	$scope.hola = true;
    };

    
	$scope.currentPage= 0;
	$scope.imgsPerPage= 9;
	$scope.numberOfPages = function(){
		return Math.ceil($scope.images.length/$scope.imgsPerPage);
	};

	$scope.pagi= [];
	for(var i=1;i<=$scope.numberOfPages();i++){
		
		$scope.pagi.push(i);
	};
	
	$scope.cp = function(valor){
		$scope.currentPage = valor-1;
		
	return console.log($scope.currentPage);
	};

	console.log($scope.pagi);	

}]);