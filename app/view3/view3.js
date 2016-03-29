'use strict';

angular.module('myApp.view3', ['angularFileUpload'])
    
.controller('View3Ctrl', ['$scope','$http',function($scope,$http, FileUploader) {

    $scope.uploader = new FileUploader();
	
}]);