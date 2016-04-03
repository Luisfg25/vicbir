'use strict';

angular.module('myApp.view3',[])
    
.controller('View3Ctrl', ['$scope','$http','FileUploader',function($scope,$http, FileUploader) {

$scope.onUploadSelect = function($files) {
  $scope.newResource.newUploadName = $files[0].name;
};
	

}]);