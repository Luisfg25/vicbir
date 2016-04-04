'use strict';

angular.module('myApp.view4', [])

.controller('View4Ctrl', ['$scope',function($scope) {

	$scope.images=[
		{"name": 1,"location":"imgs/1.jpg", "id":0},
		{"name": 2,"location":"imgs/2.jpg", "id":1},
		{"name": 3,"location":"imgs/3.jpg", "id":2},
		{"name": 4,"location":"imgs/4.jpg", "id":3},
		{"name": 5,"location":"imgs/5.jpg", "id":4},
		{"name": 6,"location":"imgs/6.jpg", "id":5},
		{"name": 7,"location":"imgs/7.jpg", "id":6}
	]	

}]);