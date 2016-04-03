'use strict';

angular.module('myApp.view5', [])

.controller('View5Ctrl', ['$scope',function($scope) {
		$scope.images=[
		{"name": 1,"location":"imgs/1.jpg"},
		{"name": 2,"location":"imgs/2.jpg"},
		{"name": 3,"location":"imgs/3.jpg"},
		{"name": 4,"location":"imgs/4.jpg"},
		{"name": 5,"location":"imgs/5.jpg"},
		{"name": 6,"location":"imgs/6.jpg"},
		{"name": 7,"location":"imgs/7.jpg"}
	]
}]);