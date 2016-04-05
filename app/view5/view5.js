'use strict';

angular.module('myApp.view5', [])

	.controller('View5Ctrl',['$scope','$http',function($scope,$http){

	$scope.formData = {};
  $scope.processForm = function() {
    alert('valid form!')
    $http({
      method  : 'POST',
      url     : 'process.php',
      data    : $scope.formData,
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  };
}]);
